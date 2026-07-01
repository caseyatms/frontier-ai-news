/* ============================================================
   FRONTIER AI & AGENTIC NEWS — in-browser BYOK refresh engine
   Calls YOUR chosen AI provider (Anthropic / OpenAI / xAI) with its
   web-search tool to pull the latest news, then merges + dedupes it
   into the dashboard and caches the result in this browser.

   Your API key lives ONLY in localStorage and is sent ONLY to the
   provider you pick. It is never committed or sent anywhere else.
   ============================================================ */
(function(){
  const LS_SETTINGS = "aiDashSettings";
  const LS_SNAPSHOT = "aiDashSnapshot";
  const PROVIDERS = ["anthropic","openai","google","xai"];
  const DEFAULT_MODEL = { anthropic:"claude-sonnet-5", openai:"gpt-5.5", xai:"grok-4" };

  /* ---------- settings ---------- */
  function getSettings(){
    try{ return Object.assign({provider:"anthropic",key:"",model:""}, JSON.parse(localStorage.getItem(LS_SETTINGS)||"{}")); }
    catch(e){ return {provider:"anthropic",key:"",model:""}; }
  }
  function saveSettings(s){ localStorage.setItem(LS_SETTINGS, JSON.stringify(s||{})); }

  /* ---------- prompt ---------- */
  function buildPrompt(data){
    const since = (data && data.lastUpdated) ? data.lastUpdated.slice(0,10) : "10 days ago";
    return [
"You are the data engine for a \"Frontier AI & Agentic News\" dashboard.",
"Use web search to find the LATEST, REAL AI news and releases, focused on the period since "+since+" (also include anything major and very recent you find).",
"Cover four providers — Anthropic (Claude), OpenAI (ChatGPT/Codex), Google (Gemini/Antigravity), xAI (Grok) — plus provider-agnostic FRONTIER items (new models, agentic tools/agents like Hermes, AI policy/regulation).",
"",
"Respond with ONLY a single JSON object — no markdown, no code fences, no commentary. Shape:",
"{",
'  "frontier": [ {"date":"YYYY-MM-DD","cat":"release|agents|policy","src":"Publisher","title":"headline","body":"1-2 sentence summary (max ~40 words)","url":"https://real-source"} ],',
'  "providers": {',
'    "anthropic": {"news":[ {same fields, cat can also be release|agents|policy} ]},',
'    "openai": {"news":[ ... ]},',
'    "google": {"news":[ ... ]},',
'    "xai": {"news":[ ... ]}',
"  }",
"}",
"",
"Rules: 6-10 frontier items, 2-4 items per provider. Every item MUST have a real working https source url. Prefer official blogs and major outlets. Dates in YYYY-MM-DD. Keep bodies concise and factual. Do not invent URLs. Output the JSON object and nothing else."
    ].join("\n");
  }

  /* ---------- JSON extraction ---------- */
  function extractJSON(text){
    if(!text) throw new Error("Empty response from the model.");
    let t = text.trim();
    const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if(fence) t = fence[1].trim();
    const a = t.indexOf("{"), b = t.lastIndexOf("}");
    if(a<0||b<0||b<=a) throw new Error("Model did not return JSON. First chars: "+t.slice(0,80));
    let obj;
    try{ obj = JSON.parse(t.slice(a,b+1)); }
    catch(e){ throw new Error("Could not parse the model's JSON ("+e.message+")."); }
    return obj;
  }

  /* ---------- normalize + merge ---------- */
  const isHttp = u => typeof u==="string" && /^https?:\/\//i.test(u);
  const today = () => new Date().toISOString().slice(0,10);
  function normItem(n){
    if(!n || !isHttp(n.url) || !n.title) return null;
    const date = /^\d{4}-\d{2}-\d{2}/.test(n.date||"") ? n.date.slice(0,10) : today();
    let cat = String(n.cat||"release").toLowerCase();
    if(!["release","agents","policy","official","report","analysis","cloud"].includes(cat)) cat="release";
    return { date, sort: date+"T12:00", cat, src:String(n.src||"News").slice(0,40),
      title:String(n.title).slice(0,160), body:String(n.body||"").slice(0,400),
      url:n.url, flag: date===today() ? "🆕" : "" };
  }
  function mergeList(existing, incoming, cap){
    const out = (existing||[]).slice();
    const seen = new Set(out.map(x=>(x.url||x.title||"").toLowerCase()));
    let added = 0;
    (incoming||[]).forEach(raw=>{
      const n = normItem(raw); if(!n) return;
      const key = (n.url||n.title).toLowerCase();
      if(seen.has(key)) return;
      seen.add(key); out.unshift(n); added++;
    });
    out.sort((x,y)=> (x.sort||x.date) < (y.sort||y.date) ? 1 : -1);
    return { list: out.slice(0, cap||40), added };
  }
  function merge(data, parsed){
    const d = JSON.parse(JSON.stringify(data));
    let added = 0;
    const f = mergeList(d.frontier, parsed.frontier, 40); d.frontier=f.list; added+=f.added;
    const pin = parsed.providers||{};
    PROVIDERS.forEach(k=>{
      if(!d.providers[k]) return;
      const inc = pin[k] && pin[k].news;
      const r = mergeList(d.providers[k].news, inc, 30);
      d.providers[k].news = r.list; added += r.added;
    });
    return { data:d, added };
  }

  /* ---------- provider adapters ---------- */
  async function readErr(resp){
    let body=""; try{ body=await resp.text(); }catch(e){}
    if(resp.status===401||resp.status===403) return "Invalid or unauthorized API key ("+resp.status+").";
    if(resp.status===429) return "Rate limited by the provider (429). Wait a moment and retry.";
    const snip = body ? " — "+body.slice(0,160) : "";
    return "Provider returned HTTP "+resp.status+snip;
  }

  async function callAnthropic(prompt, key, model){
    const url="https://api.anthropic.com/v1/messages";
    const headers={ "content-type":"application/json","x-api-key":key,
      "anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true" };
    async function go(withSearch){
      const body={ model: model||DEFAULT_MODEL.anthropic, max_tokens:6000,
        messages:[{role:"user",content:prompt}] };
      if(withSearch) body.tools=[{type:"web_search_20250305",name:"web_search",max_uses:6}];
      const r=await fetch(url,{method:"POST",headers,body:JSON.stringify(body)});
      if(!r.ok) throw new Error(await readErr(r));
      const j=await r.json();
      return (j.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n").trim();
    }
    try{ return await go(true); }
    catch(e){ if(/web_search|tool|400/i.test(e.message)) return await go(false); throw e; }
  }

  async function callOpenAI(prompt, key, model){
    const headers={ "content-type":"application/json","Authorization":"Bearer "+key };
    // Responses API with web_search
    try{
      const r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers,
        body:JSON.stringify({ model: model||DEFAULT_MODEL.openai, input:prompt, tools:[{type:"web_search"}] })});
      if(!r.ok) throw new Error(await readErr(r));
      const j=await r.json();
      if(j.output_text) return j.output_text;
      let out=""; (j.output||[]).forEach(o=>(o.content||[]).forEach(c=>{ if(c.text) out+=c.text; else if(typeof c==="string") out+=c; }));
      if(out.trim()) return out.trim();
      throw new Error("Empty Responses output.");
    }catch(e){
      // fallback: chat/completions (no web search)
      const r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers,
        body:JSON.stringify({ model: model||"gpt-4o", messages:[{role:"user",content:prompt}] })});
      if(!r.ok) throw new Error(await readErr(r));
      const j=await r.json();
      return (((j.choices||[])[0]||{}).message||{}).content||"";
    }
  }

  async function callXAI(prompt, key, model){
    const url="https://api.x.ai/v1/chat/completions";
    const headers={ "content-type":"application/json","Authorization":"Bearer "+key };
    async function go(withSearch){
      const body={ model: model||DEFAULT_MODEL.xai, messages:[{role:"user",content:prompt}] };
      if(withSearch) body.search_parameters={ mode:"auto", max_search_results:8 };
      const r=await fetch(url,{method:"POST",headers,body:JSON.stringify(body)});
      if(!r.ok) throw new Error(await readErr(r));
      const j=await r.json();
      return (((j.choices||[])[0]||{}).message||{}).content||"";
    }
    try{ return await go(true); }
    catch(e){ if(/search|400/i.test(e.message)) return await go(false); throw e; }
  }

  const ADAPTERS = { anthropic:callAnthropic, openai:callOpenAI, xai:callXAI };

  /* ---------- run ---------- */
  async function run(opts){
    opts=opts||{}; const status=opts.onStatus||function(){};
    const s=getSettings();
    if(!s.key) throw new Error("No API key set. Open ⚙ Settings first.");
    const adapter=ADAPTERS[s.provider];
    if(!adapter) throw new Error("Unknown provider: "+s.provider);
    const data=window.getDashData();
    const provLabel={anthropic:"Anthropic",openai:"OpenAI",xai:"xAI (Grok)"}[s.provider];

    status("Asking "+provLabel+" for the latest news (web search)…");
    let raw;
    try{ raw=await adapter(buildPrompt(data), s.key, s.model); }
    catch(e){
      if(/Failed to fetch|NetworkError|CORS/i.test(String(e.message)))
        throw new Error("Network/CORS blocked the call. Try the hosted (GitHub Pages) version, or the Claude Code refresh.");
      throw e;
    }

    status("Parsing results…");
    const parsed=extractJSON(raw);

    status("Merging + de-duplicating…");
    const { data:merged, added }=merge(data, parsed);
    merged.lastUpdated=new Date().toISOString();
    merged.refreshLog=[{ at:merged.lastUpdated, added,
      note:"In-browser refresh via "+provLabel+(s.model?" ("+s.model+")":"")+". +"+added+" items." }]
      .concat(merged.refreshLog||[]).slice(0,40);

    try{ localStorage.setItem(LS_SNAPSHOT, JSON.stringify(merged)); }catch(e){}
    window.setDashData(merged);
    return { added, provider:provLabel };
  }

  /* ---------- download current snapshot as data.js ---------- */
  function downloadData(){
    const data=window.getDashData();
    const header="/* Frontier AI & Agentic News — data snapshot (downloaded "+new Date().toISOString()+") */\n";
    const text=header+"window.DASHBOARD_DATA = "+JSON.stringify(data,null,2)+";\n";
    const blob=new Blob([text],{type:"application/javascript"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob); a.download="data.js";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),2000);
  }

  window.AIRefresh={ getSettings, saveSettings, run, downloadData };
})();

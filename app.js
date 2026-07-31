const $ = id => document.getElementById(id);
const contentEl = $('content'), crumbEl = $('crumb');
const GITHUB_URL = "https://github.com/caseyatms/frontier-ai-news";

/* ---- shared data shape guard (refresh.js relies on window.isDashData) ---- */
function isDashData(d){
  return !!(d && typeof d==="object" &&
    typeof d.lastUpdated==="string" && !isNaN(new Date(d.lastUpdated)) &&
    Array.isArray(d.frontier) && d.frontier.length>0 &&
    d.providers && ["anthropic","openai","google","xai"].every(k=>{
      const p=d.providers[k];
      return p && typeof p.label==="string" && Array.isArray(p.models) && Array.isArray(p.news);
    }));
}

/* ---- load newest of shipped data.js vs cached browser snapshot ----
   Both sources must pass the shape guard: a bad snapshot falls back to the
   shipped data, and bad shipped data falls back to the warning box. */
function loadData(){
  const shipped = isDashData(window.DASHBOARD_DATA) ? window.DASHBOARD_DATA : null;
  let cached = null;
  try{
    const snap = JSON.parse(localStorage.getItem('aiDashSnapshot')||"null");
    if(isDashData(snap)) cached = snap;
  }catch(e){}
  if(cached && (!shipped || new Date(cached.lastUpdated) >= new Date(shipped.lastUpdated))) return cached;
  return shipped;
}
let DATA = loadData();
window.getDashData = () => DATA;
window.setDashData = d => { DATA = d; };
window.isDashData = isDashData;

const PROV_META = {
  frontier:{label:"Frontier AI News", accent:"#5b8def"},
  anthropic:{label:"Anthropic (Claude)", accent:"#d97757"},
  openai:{label:"OpenAI (ChatGPT/Codex)", accent:"#10a37f"},
  google:{label:"Google (Gemini/Antigravity)", accent:"#4285f4"},
  xai:{label:"xAI (Grok)", accent:"#c9ccd1"}
};
const ACCESS_LBL = {subscription:"Subscription based", api:"API only"};
const IFACE_LBL  = {cli:"CLI / Terminal Models", web:"Browser Website Models", extension:"Browser Extension Models", other:"Other"};
const state = { tab:"frontier", access:"subscription", iface:"cli", cat:"all", q:"" };

if(!DATA){ contentEl.innerHTML = `<div class="empty">⚠️ Could not load <b>data.js</b>. Keep it beside index.html and reload.</div>`; }

/* ---- helpers ---- */
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function safeUrl(u){ u=String(u||""); return /^https?:\/\//i.test(u)? u : "#"; }
function fmt(d){ const [y,m,day]=String(d).split("-").map(Number); const mo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(m||1)-1]; return `${mo} ${day||""}, ${y||""}`; }
const asArr = v => Array.isArray(v)?v:[v];
const match = (q,txt) => !q || txt.toLowerCase().includes(q.trim().toLowerCase());
const catClass = c => ["release","agents","policy","official","report","analysis","cloud"].includes(c)? c : "other";

function newsItemHTML(n){
  return `<article class="item">
    ${n.flag?`<span class="flag">${esc(n.flag)}</span>`:""}
    <div class="top"><span class="src">${esc(n.src)}</span>
      <span class="tag t-${catClass(n.cat)}">${esc(n.cat)}</span><span class="date">${esc(fmt(n.date))}</span></div>
    <h3>${esc(n.title)}</h3><p>${esc(n.body)}</p>
    <a class="read" href="${safeUrl(n.url)}" target="_blank" rel="noopener">Read source →</a></article>`;
}

function renderFrontier(){
  const cats=["all","release","agents","policy"];
  const items=(DATA.frontier||[]).filter(n=>state.cat==="all"||n.cat===state.cat)
    .filter(n=>match(state.q,(n.title+n.body+n.src)))
    .sort((a,b)=> (a.sort||a.date) < (b.sort||b.date) ?1:-1);
  contentEl.innerHTML=`
    <div class="section-head"><h2>📰 Frontier AI News <span class="tick">${items.length} ${items.length===1?'story':'stories'}</span></h2></div>
    <div class="filters">
      ${cats.map(c=>`<span class="chip ${state.cat===c?'active':''}" data-cat="${c}">${c[0].toUpperCase()+c.slice(1)}</span>`).join("")}
      <input class="search" id="search" placeholder="Search all AI news…" value="${esc(state.q)}"></div>
    <div class="feed">${items.length? items.map(newsItemHTML).join("") : `<div class="empty">No stories match your filter.</div>`}</div>`;
  wireFeedControls();
}

function renderProvider(){
  const p=DATA.providers && DATA.providers[state.tab];
  if(!p){ contentEl.innerHTML=`<div class="empty">No data for this provider yet. Try another tab or refresh.</div>`; return; }
  const models=(p.models||[]).filter(m=>asArr(m.access).includes(state.access)&&asArr(m.iface).includes(state.iface))
    .filter(m=>match(state.q,(m.name+m.blurb+(m.badge||""))));
  let rel=(p.news||[]).filter(n=>(!n.iface||asArr(n.iface).includes(state.iface))&&(!n.access||asArr(n.access).includes(state.access)));
  if(rel.length===0) rel=(p.news||[]);
  rel=rel.filter(n=>match(state.q,(n.title+n.body+n.src))).sort((a,b)=>(a.sort||a.date)<(b.sort||b.date)?1:-1);
  const modelsHTML= models.length? `<div class="mgrid">${models.map(m=>`
    <div class="mcard"><div class="mh"><div><div class="mn">${esc(m.name)}</div>${m.badge?`<div class="badge2">${esc(m.badge)}</div>`:""}</div>
      <span class="stpill st-${["live","new","limited","restricted","preview"].includes(m.status)?esc(m.status):"live"}">${esc(m.status)}</span></div>
      <p>${esc(m.blurb)}</p>${m.url?`<a class="read" href="${safeUrl(m.url)}" target="_blank" rel="noopener">Learn more →</a>`:""}</div>`).join("")}</div>`
    : `<div class="empty">No ${esc(IFACE_LBL[state.iface])} for ${esc(ACCESS_LBL[state.access])} access here yet.<br>Try another interface/access tab — or refresh.</div>`;
  contentEl.innerHTML=`
    <div class="section-head"><h2>${esc(p.label)} — ${esc(IFACE_LBL[state.iface])} <span class="tick">${models.length} ${models.length===1?'interface':'interfaces'}</span></h2></div>
    <div class="filters"><input class="search" id="search" placeholder="Search ${esc(p.label)}…" value="${esc(state.q)}"></div>
    ${modelsHTML}<div class="subhead">Related news &amp; updates</div>
    <div class="feed">${rel.length? rel.map(newsItemHTML).join("") : `<div class="empty">No related updates for this selection.</div>`}</div>`;
  wireFeedControls();
}

function wireFeedControls(){
  document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{state.cat=c.dataset.cat;render();}));
  const s=$('search');
  if(s) s.addEventListener('input',e=>{const pos=e.target.selectionStart;state.q=e.target.value;render();const el=$('search');if(el){el.focus();el.setSelectionRange(pos,pos);}});
}

function renderCrumb(){
  const m=PROV_META[state.tab];
  crumbEl.innerHTML = state.tab==="frontier"
    ? `<span class="accentdot" style="background:${m.accent}"></span><b>${esc(m.label)}</b> — everything worth watching across the field`
    : `<span class="accentdot" style="background:${m.accent}"></span><b>${esc(m.label)}</b> › ${esc(ACCESS_LBL[state.access])} › ${esc(IFACE_LBL[state.iface])}`;
}
function syncNavActive(){
  document.querySelectorAll('#navPrimary .tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===state.tab));
  document.querySelectorAll('#navSecondary .tab').forEach(t=>t.classList.toggle('active',t.dataset.access===state.access));
  document.querySelectorAll('#navTertiary .tab').forEach(t=>t.classList.toggle('active',t.dataset.iface===state.iface));
  const prov=state.tab!=="frontier";
  $('navSecondary').classList.toggle('hidden',!prov); $('navTertiary').classList.toggle('hidden',!prov);
}
function render(){ if(!DATA)return; syncNavActive(); renderCrumb(); state.tab==="frontier"?renderFrontier():renderProvider(); }
window.renderDashboard = render;

/* ---- nav wiring ---- */
document.querySelectorAll('#navPrimary .tab').forEach(t=>t.addEventListener('click',()=>{state.tab=t.dataset.tab;state.cat="all";state.q="";render();}));
document.querySelectorAll('#navSecondary .tab').forEach(t=>t.addEventListener('click',()=>{state.access=t.dataset.access;render();}));
document.querySelectorAll('#navTertiary .tab').forEach(t=>t.addEventListener('click',()=>{state.iface=t.dataset.iface;render();}));

/* ---- freshness ---- */
function daysSince(iso){ return Math.floor((new Date()-new Date(iso))/86400000); }
function updateFreshness(){
  if(!DATA)return; const upd=DATA.lastUpdated, d=daysSince(upd);
  const label=new Date(upd).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
  $('lastUpd').innerHTML=`Last refreshed <b>${label}</b>`;
  const ageTxt=d<=0?"today":d===1?"1 day ago":`${d} days ago`;
  $('refreshTxt').innerHTML=`Data snapshot from <b>${label}</b> · ${ageTxt}. Not scheduled — refresh on demand.`;
  $('refreshbar').classList.toggle('stale',d>=3);
}
window.updateFreshness = updateFreshness;

/* ---- modal ---- */
function openModal(html){ $('modalBody').innerHTML=html; $('modalBg').classList.add('show'); }
function closeModal(){ $('modalBg').classList.remove('show'); }
window.closeModal = closeModal;
$('modalBg').addEventListener('click',e=>{ if(e.target===$('modalBg')) closeModal(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

/* ---- settings (BYOK) ---- */
function settingsModal(){
  const s=(window.AIRefresh&&AIRefresh.getSettings())||{provider:"anthropic",key:"",model:"",save:false,dailyCap:10};
  const capLinks={ anthropic:"https://console.anthropic.com/settings/limits",
                   openai:"https://platform.openai.com/settings/organization/limits",
                   xai:"https://console.x.ai/" };
  openModal(`
    <span class="x" id="setClose">✕</span>
    <h3>⚙ Settings — bring your own API key</h3>
    <div class="mdesc">Paste your own key from one provider. It's sent only to that provider when you hit Refresh —
      never committed to the repo or shared with anyone.</div>
    <div class="field"><label>Provider</label>
      <select id="setProvider">
        <option value="anthropic">Anthropic (Claude) — web search</option>
        <option value="openai">OpenAI (GPT) — web search</option>
        <option value="xai">xAI (Grok) — Live Search</option>
      </select></div>
    <div class="field"><label>API key</label>
      <input id="setKey" type="password" placeholder="paste your key…" value="${esc(s.save?(s.key||""):"")}" autocomplete="off">
      <div class="hint" id="keyHint"></div></div>
    <div class="field"><label>Model (optional)</label>
      <input id="setModel" type="text" placeholder="leave blank for a sensible default" value="${esc(s.model||"")}">
      <div class="hint" id="modelHint"></div></div>
    <div class="field"><label>How to handle your key</label>
      <label class="opt"><input type="radio" name="keymode" value="once" ${!s.save?"checked":""}><b>Use once — don't save</b> (recommended). Kept in memory for this tab only; cleared when you close it.</label>
      <label class="opt"><input type="radio" name="keymode" value="save" ${s.save?"checked":""}><b>Save in this browser</b> for reuse (localStorage).</label></div>
    <div id="capSection" class="${s.save?"":"hidden"}">
      <div class="field"><label>Daily refresh cap (this tool)</label>
        <input id="setCap" type="number" min="0" step="1" value="${esc(s.dailyCap!=null?s.dailyCap:10)}">
        <div class="hint">Max refreshes per day this dashboard will run with your saved key. 0 = unlimited.</div></div>
      <div class="warn">💳 <b>Set a hard spend limit at your provider</b> — the real cap this page can't override:
        <a href="${capLinks.anthropic}" target="_blank" rel="noopener">Anthropic</a> ·
        <a href="${capLinks.openai}" target="_blank" rel="noopener">OpenAI</a> ·
        <a href="${capLinks.xai}" target="_blank" rel="noopener">xAI</a>. Tip: use a dedicated key with a low monthly limit.</div>
    </div>
    <div class="warn">🔐 On a shared computer, keep <b>Use once</b> so no key is stored — a saved key can be read by anything with access to this browser profile.</div>
    <div class="row"><button class="btn" id="setSave">Save</button>
      <button class="btn ghost" id="setClear">Clear key</button></div>`);
  $('setClose').addEventListener('click',closeModal);
  $('setSave').addEventListener('click',saveSettings);
  $('setClear').addEventListener('click',clearKey);
  $('setProvider').value=s.provider||"anthropic";
  const hints={anthropic:["Get one at console.anthropic.com › API keys","default: claude-sonnet-5"],
               openai:["Get one at platform.openai.com › API keys","default: gpt-5.5"],
               xai:["Get one at console.x.ai","default: grok-4"]};
  function updHints(){ const p=$('setProvider').value; $('keyHint').textContent=hints[p][0]; $('modelHint').textContent=hints[p][1]; }
  $('setProvider').addEventListener('change',updHints); updHints();
  function updMode(){ const save=document.querySelector('input[name="keymode"]:checked').value==="save"; $('capSection').classList.toggle('hidden',!save); }
  document.querySelectorAll('input[name="keymode"]').forEach(r=>r.addEventListener('change',updMode)); updMode();
}
window.settingsModal=settingsModal;
window.saveSettings=function(){
  const save=document.querySelector('input[name="keymode"]:checked').value==="save";
  const key=$('setKey').value.trim();
  $('setKey').value="";  // keep the typed key out of the hidden modal DOM
  AIRefresh.saveSettings({ provider:$('setProvider').value, key:key||undefined, model:$('setModel').value.trim(),
    save, dailyCap: save ? Math.max(0,parseInt($('setCap').value||"0",10)||0) : undefined });
  closeModal();
  if(!key) setStatus("Saved. Add your key, then click ⚡ Refresh now.","ok");
  else if(save) setStatus("Key saved in this browser. Click ⚡ Refresh now.","ok");
  else setStatus("Key ready for this session only (not saved). Click ⚡ Refresh now.","ok");
};
window.clearKey=function(){ AIRefresh.clearKey(); const k=$('setKey'); if(k)k.value=""; setStatus("Key cleared.","ok"); };

/* ---- history ---- */
function historyModal(){
  const log=(DATA&&DATA.refreshLog)||[];
  const dl = `<button class="btn ghost" id="histDownload">⬇ Download data.js</button>`;
  openModal(`<span class="x" id="histClose">✕</span><h3>🕓 Refresh history</h3>
    <div class="mdesc">Each refresh is logged here and cached in your browser. Download the current snapshot to commit it back to the repo.</div>
    <div style="margin-bottom:14px">${dl}</div>
    <div class="hist">${log.length? log.map(h=>`<div class="h">
      <div class="hd">${new Date(h.at).toLocaleString(undefined,{month:'short',day:'numeric',year:'numeric',hour:'2-digit',minute:'2-digit'})} · +${esc(h.added)} items</div>
      <div class="hn">${esc(h.note)}</div></div>`).join("") : `<div class="empty">No refreshes logged yet.</div>`}</div>`);
  $('histClose').addEventListener('click',closeModal);
  $('histDownload').addEventListener('click',()=>AIRefresh.downloadData());
}

/* ---- refresh status ---- */
function setStatus(msg,cls){ const el=$('rstatus'); el.className="rstatus"+(cls?" "+cls:""); el.textContent=msg||""; }
window.setStatus=setStatus;

async function refreshNow(){
  if(!window.AIRefresh){ setStatus("refresh.js failed to load.","err"); return; }
  if(!AIRefresh.hasKey()){ setStatus("Add your API key first — opening Settings…","err"); settingsModal(); return; }
  const btn=$('btnRefreshNow'); btn.disabled=true; const old=btn.textContent; btn.textContent="Refreshing…";
  try{
    const res=await AIRefresh.run({ onStatus:m=>setStatus(m) });
    DATA=window.getDashData(); updateFreshness(); render();
    setStatus(`✓ Added ${res.added} update${res.added===1?"":"s"} via ${res.provider}. Saved to this browser.`,"ok");
  }catch(err){
    setStatus("✕ "+(err&&err.message?err.message:String(err)),"err");
  }finally{ btn.disabled=false; btn.textContent=old; }
}

$('btnRefreshNow').addEventListener('click',refreshNow);
$('btnSettings').addEventListener('click',settingsModal);
$('btnHistory').addEventListener('click',historyModal);
$('ghlink').href=GITHUB_URL;

/* ---- clock ---- */
function tick(){ const c=$('clock'); if(c) c.innerHTML=`Now: <b>${new Date().toLocaleString(undefined,{month:'short',day:'numeric',year:'numeric',hour:'2-digit',minute:'2-digit'})}</b>`; }
tick(); setInterval(tick,1000*30);

/* ---- boot ---- */
updateFreshness(); render();

/* ============================================================
   FRONTIER AI & AGENTIC NEWS — DATA SNAPSHOT
   The dashboard reads window.DASHBOARD_DATA from this file.
   Refresh it either way:
     • In-browser  -> Settings (⚙) > add your own API key > "Refresh now"
     • Claude Code -> say "refresh the AI dashboard"
   A browser refresh persists to localStorage (survives reloads) and can be
   downloaded to overwrite this file. Nothing here contains secrets.
   ============================================================ */
window.DASHBOARD_DATA = {
  lastUpdated: "2026-07-01T13:12:00",
  version: 5,

  refreshLog: [
    { at:"2026-07-01T13:12", added: 3, note:"Added Trump's June 2 frontier-AI security EO (voluntary 30-day pre-release gov access — the backdrop to the GPT-5.6/Mythos preview gates), Microsoft's seven in-house MAI models at Build 2026, and Claude Code's +50% weekly limits (matching Codex). Fable 5 now restored (Jul 1); cleared stale 🆕 flags." },
    { at:"2026-06-30T21:00", added: 6, note:"OpenAI GPT-5.6 Sol/Terra/Luna in limited preview (~20 orgs, per US gov); Anthropic ships Claude Science (pharma/labs flagship, 60+ tools); Gemini 3.5 Pro slips to July (Vertex preview only); Grok 4.5 'may exceed Opus' + monthly from-scratch cadence; Windsurf → Devin Desktop; Terminal-Bench race." },
    { at:"2026-06-30T17:00", added: 46, note:"Added xAI (Grok): Grok 4.1/4.3, Grok 4.5 private beta (V9, ~1.5T), Grok Build CLI + API, Live Search. Packaged as a shareable repo with in-browser BYOK auto-refresh." },
    { at:"2026-06-30T16:00", added: 34, note:"Multi-provider build: Anthropic/OpenAI/Google catalogs + Frontier feed (Fable 5 lifted, Gemini 3.5/Antigravity, GPT-5.5/Codex, Hermes MOA)." }
  ],

  /* ---------- FRONTIER AI NEWS (provider-agnostic, all major AI + agents) ---------- */
  frontier: [
    { date:"2026-06-30", sort:"2026-06-30T18:00", cat:"release", flag:"🆕", src:"TechCrunch",
      title:"Anthropic launches Claude Science — its newest flagship product",
      body:"Agentic research app that wires 60+ scientific databases and computation tools into one workspace; autonomously runs literature reviews, comp-bio, and drug-discovery workflows. Included for all paid Claude subscribers; pharma partners Novo Nordisk, AstraZeneca, Eli Lilly. Amodei: 'do for life sciences what Claude Code did for code.'",
      url:"https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/" },
    { date:"2026-06-30", sort:"2026-06-30T16:00", cat:"policy", flag:"🆕", src:"CNBC",
      title:"Trump admin lifts export controls on Anthropic's Fable 5 & Mythos 5",
      body:"Commerce cleared both models after Anthropic agreed to ongoing safety protocols. Fable 5 becomes selectable again across Claude Code, claude.ai, and the API on Jul 1; Mythos 5 already eased to ~100 trusted US orgs.",
      url:"https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" },
    { date:"2026-06-28", sort:"2026-06-28T12:00", cat:"release", flag:"🆕", src:"Cybernews",
      title:"Musk: Grok 4.5 (V9, ~1.5T) 'may exceed' Claude Opus — private beta",
      body:"Internal SpaceX/Tesla testing only; 'early evals show performance close to, perhaps exceeding Opus' — no independent benchmark yet. V9 is ~3x the V8-small base and was trained with Cursor data. xAI plans a from-scratch model every month through end of 2026.",
      url:"https://cybernews.com/ai-news/musk-grok-4-5-private-beta-superior-claude-opus/" },
    { date:"2026-06-26", sort:"2026-06-26T09:00", cat:"release", flag:"", src:"VentureBeat",
      title:"OpenAI unveils GPT-5.6 Sol/Terra/Luna — limited preview, per US gov",
      body:"New generation with capability-tier naming: Sol (flagship, hardest coding/security), Terra (high-volume business), Luna (fast/cheap). API + Codex to only ~20 trusted orgs after OpenAI shared plans with the US government; general availability 'in the coming weeks.'",
      url:"https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov" },
    { date:"2026-06-29", sort:"2026-06-29T12:00", cat:"agents", flag:"", src:"TechTimes",
      title:"GPT-5.6 quietly rolled to some Codex users",
      body:"A hidden system prompt exposed OpenAI swapping select Codex sessions onto GPT-5.6 during the preview window — before any public GA.",
      url:"https://www.techtimes.com/articles/319297/20260629/openai-silently-rolled-gpt-56-some-codex-users-hidden-prompt-exposes-swap.htm" },
    { date:"2026-06-26", sort:"2026-06-26T10:00", cat:"agents", flag:"", src:"CIO Dive",
      title:"xAI joins the coding-agent race with Grok Build",
      body:"Grok Build (CLI + Grok Build 0.1 model via API) targets agentic coding — planning, debugging, MCP support — putting xAI head-to-head with Claude Code, Codex, and Antigravity.",
      url:"https://www.ciodive.com/news/xAI-coding-agents-Grok-Build/820422/" },
    { date:"2026-06-23", sort:"2026-06-23T09:00", cat:"release", flag:"", src:"Crypto Briefing",
      title:"Google slips Gemini 3.5 Pro to July — Vertex preview only",
      body:"Google missed its June GA target; 3.5 Pro (2M-token context, Deep Think reasoning) sits in limited Vertex AI enterprise preview while Google refines coding and long-task performance. Pichai on stage: 'give us until next month.'",
      url:"https://cryptobriefing.com/google-delays-gemini-35-pro-launch-to-july-2026/" },
    { date:"2026-06-17", sort:"2026-06-17T09:00", cat:"agents", flag:"", src:"Morph",
      title:"Terminal-Bench 2.1: Codex+GPT-5.5 83.4%, Claude Code+Fable 5 83.1%",
      body:"The two leading terminal agents land neck-and-neck on the latest agentic-coding leaderboard as Fable 5 entries post June 17.",
      url:"https://www.morphllm.com/best-ai-coding-agents-2026" },
    { date:"2026-06-02", sort:"2026-06-02T11:00", cat:"release", flag:"", src:"Microsoft AI",
      title:"Microsoft launches seven in-house MAI models at Build 2026",
      body:"Mustafa Suleyman's 'hill-climbing machine' ships a first-party family spanning reasoning (MAI-Thinking-1, a 35B-active MoE at 97% AIME 2025, matching Opus on SWE-Bench Pro), agentic coding (MAI-Code-1-Flash), image (MAI-Image-2.5 / 2.5-Flash), and speech (MAI-Voice-2, MAI-Transcribe-1.5) — Microsoft's push to reduce OpenAI dependence.",
      url:"https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" },
    { date:"2026-06-02", sort:"2026-06-02T10:00", cat:"policy", flag:"", src:"White House",
      title:"Trump EO sets voluntary frontier-model security framework",
      body:"'Promoting Advanced Artificial Intelligence Innovation and Security' creates a voluntary process for developers to give agencies up to 30 days of pre-release access to 'covered frontier models' for classified cyber-capability benchmarking — explicitly no mandatory licensing. It's the backdrop to the GPT-5.6 and Mythos 5 'US-gov review' preview gates.",
      url:"https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/" },
    { date:"2026-06-02", sort:"2026-06-02T09:00", cat:"agents", flag:"", src:"The New Stack",
      title:"Windsurf relaunches as Devin Desktop",
      body:"Cognition retired the Windsurf brand, folding the IDE into Devin Desktop — the agent IDE and the async Devin agent under one roof.",
      url:"https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/" },
    { date:"2026-06-29", sort:"2026-06-29T14:00", cat:"agents", flag:"", src:"NVIDIA",
      title:"Hermes unlocks self-improving AI agents on RTX PCs & DGX Spark",
      body:"NVIDIA details Hermes running self-improving agent loops locally on RTX / DGX Spark hardware — pushing agentic workloads off the cloud and onto the desktop.",
      url:"https://blogs.nvidia.com/blog/rtx-ai-garage-hermes-agent-dgx-spark/" },
    { date:"2026-06-24", sort:"2026-06-24T10:00", cat:"agents", flag:"", src:"UC Strategies",
      title:"Hermes ships 'Mixture of Agents' — orchestrated multi-model inference",
      body:"Hermes' MOA claims a configuration of widely-available models can match or beat gated frontier models on agentic workloads. Sakana AI's 'Fugue' lands the same week with a similar approach.",
      url:"https://ucstrategies.com/news/hermes-just-shipped-mixture-of-agents-here-is-what-it-does-and-why-the-timing-matters/" },
    { date:"2026-06-20", sort:"2026-06-20T09:00", cat:"policy", flag:"", src:"CyberScoop",
      title:"Five Eyes: frontier AI hacking models are 'months away'",
      body:"Intelligence agencies across the Five Eyes alliance warn advanced AI models will reshape offensive cybersecurity faster than expected — the backdrop to the Fable 5 / Mythos 5 export fight.",
      url:"https://cyberscoop.com/five-eyes-alliance-say-advanced-ai-hacking-models-months-away/" },
    { date:"2026-05-21", sort:"2026-05-21T09:00", cat:"release", flag:"", src:"Google I/O",
      title:"Google I/O 2026: Gemini 3.5, Antigravity, system-level agents",
      body:"Gemini 3.5 Flash outruns Gemini 3.1 Pro on most benchmarks at ~4x speed; Antigravity agentic dev platform + Managed Agents in the Gemini API headline the keynote.",
      url:"https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/" },
    { date:"2026-05-13", sort:"2026-05-13T09:00", cat:"agents", flag:"", src:"Anthropic",
      title:"Claude Code weekly limits +50% through July 13 — matching Codex",
      body:"Anthropic raised Claude Code weekly caps 50% (live for Pro/Max/Team/Enterprise across CLI, IDE, desktop, and web), stacking on a recent 5-hour-limit doubling, at no added price — a move the market read as putting usage 'on par with Codex.' Reverts to baseline after Jul 13 unless extended.",
      url:"https://apidog.com/blog/claude-code-weekly-limits-50-percent-increase-july-2026/" }
  ],

  /* ---------- PROVIDERS ---------- */
  providers: {

    anthropic: {
      label:"Anthropic (Claude)", accent:"#d97757",
      models: [
        { name:"Claude Code (CLI)", access:["subscription","api"], iface:"cli", status:"live",
          badge:"Opus 4.8 · Sonnet 5 · Haiku 4.5 · Fable 5*",
          blurb:"Anthropic's official terminal agent. Runs on a Claude Pro/Max subscription OR API billing. Fable 5 restored and selectable again as of Jul 1 (*).",
          url:"https://www.anthropic.com/claude-code" },
        { name:"Claude Science", access:["subscription"], iface:"web", status:"new", badge:"agentic research · 60+ sci tools",
          blurb:"New flagship research app for scientists & pharma — autonomous literature review, computational biology, and drug-discovery workflows over 60+ databases. Included for all paid Claude subscribers; partners incl. Novo Nordisk, AstraZeneca, Eli Lilly.",
          url:"https://www.anthropic.com/news" },
        { name:"Claude Agent SDK", access:["api"], iface:"cli", status:"live", badge:"build your own agents",
          blurb:"SDK for building custom terminal/headless agents on the same harness that powers Claude Code.",
          url:"https://docs.anthropic.com/en/api/agent-sdk" },
        { name:"claude.ai (web app)", access:["subscription"], iface:"web", status:"live", badge:"Free · Pro · Max",
          blurb:"Browser chat + Projects + Artifacts. Model picker: Opus 4.8, Sonnet 5, Haiku 4.5.", url:"https://claude.ai" },
        { name:"Claude on the web (claude.ai/code)", access:["subscription"], iface:"web", status:"live", badge:"cloud coding",
          blurb:"Browser-based coding sessions and cloud agents tied to your subscription.", url:"https://claude.ai/code" },
        { name:"Anthropic Console / Workbench", access:["api"], iface:"web", status:"live", badge:"console.anthropic.com",
          blurb:"API keys, usage, prompt workbench, and the token/cost dashboard.", url:"https://console.anthropic.com" },
        { name:"Claude for Chrome (extension)", access:["subscription"], iface:"extension", status:"live", badge:"Max plan · browser automation",
          blurb:"Claude drives your Chrome tabs — reads pages, fills forms, runs multi-step browser tasks.", url:"https://www.anthropic.com/news/claude-for-chrome" },
        { name:"Claude Desktop (Mac/Windows)", access:["subscription"], iface:"other", status:"live", badge:"native app + MCP",
          blurb:"Desktop app with local MCP server support for tools and file access.", url:"https://claude.ai/download" },
        { name:"Claude API (Messages)", access:["api"], iface:"other", status:"live",
          badge:"Opus 4.8 · Sonnet 5 · Haiku 4.5 · Fable 5* · Mythos 5**",
          blurb:"Raw programmatic access. Fable 5 restored Jul 1 (*); Mythos 5 limited to ~100 approved orgs (**).", url:"https://docs.anthropic.com/en/api" },
        { name:"Bedrock · Vertex · Foundry", access:["api"], iface:"other", status:"live", badge:"cloud marketplaces",
          blurb:"Claude via Amazon Bedrock, Google Vertex AI, and Microsoft Foundry for enterprise.", url:"https://docs.anthropic.com/en/api/claude-on-amazon-bedrock" }
      ],
      news: [
        { date:"2026-06-30", sort:"2026-06-30T18:00", cat:"release", flag:"🆕", src:"Anthropic", iface:["web","other"], access:["subscription"],
          title:"Claude Science launches — agentic research for pharma & labs",
          body:"New flagship app wiring 60+ scientific databases and computation tools into one workspace; available to all paid Claude subscribers. Anthropic is also funding up to 50 'AI for Science' projects with up to $30K compute credits each.",
          url:"https://www.technologyreview.com/2026/06/30/1139987/claude-science-is-anthropics-newest-flagship-product/" },
        { date:"2026-06-30", sort:"2026-06-30T16:00", cat:"policy", flag:"🆕", src:"Anthropic", iface:["cli","web","other"], access:["subscription","api"],
          title:"Export controls lifted — Fable 5 returns to general use Jul 1",
          body:"Commerce cleared both models. Fable 5 becomes selectable again across Claude Code, claude.ai, and the API on Wednesday.",
          url:"https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" },
        { date:"2026-06-29", sort:"2026-06-29T16:00", cat:"policy", flag:"", src:"Anthropic", iface:["api","other"], access:["api"],
          title:"Mythos 5 cleared for ~100 trusted US critical-infra orgs",
          body:"First restoration signal after June 12 — Mythos 5 redeployable to a limited set of pre-approved organizations via API.",
          url:"https://www.nbcnews.com/business/business-news/commerce-department-gives-green-light-anthropic-bring-back-fable-5-rcna352501" }
      ]
    },

    openai: {
      label:"OpenAI (ChatGPT/Codex)", accent:"#10a37f",
      models: [
        { name:"GPT-5.6 (Sol · Terra · Luna)", access:["api"], iface:"other", status:"preview", badge:"limited preview · ~20 orgs",
          blurb:"Next generation, tiered by capability: Sol (flagship — hardest coding/security), Terra (high-volume business), Luna (fastest/cheapest). API + Codex to ~20 trusted orgs after US-gov review; GA 'in coming weeks.' Pricing/1M: Sol $5/$30, Terra $2.50/$15, Luna $1/$6.",
          url:"https://openai.com/index/previewing-gpt-5-6-sol/" },
        { name:"Codex CLI", access:["subscription","api"], iface:"cli", status:"live", badge:"GPT-5.5 · GPT-5.6 (preview)",
          blurb:"OpenAI's terminal coding agent. Runs on a ChatGPT Plus/Pro subscription OR API billing. ~4M weekly devs; select sessions already trialing GPT-5.6.", url:"https://openai.com/codex/" },
        { name:"ChatGPT (chatgpt.com)", access:["subscription"], iface:"web", status:"live", badge:"GPT-5.5 · GPT-5.5 Thinking",
          blurb:"The flagship web chat. Free / Plus / Pro tiers on the GPT-5.5 family (GPT-5.2 and GPT-4.5 retired in June).", url:"https://chatgpt.com" },
        { name:"ChatGPT Codex (web)", access:["subscription"], iface:"web", status:"live", badge:"cloud coding agent",
          blurb:"Browser-based Codex sessions — delegate coding tasks to cloud agents from your ChatGPT account.", url:"https://openai.com/index/introducing-upgrades-to-codex/" },
        { name:"OpenAI Platform", access:["api"], iface:"web", status:"live", badge:"platform.openai.com",
          blurb:"API keys, usage, Playground, and billing dashboard for developers.", url:"https://platform.openai.com" },
        { name:"ChatGPT Atlas (AI browser)", access:["subscription"], iface:"extension", status:"new", badge:"agentic browsing",
          blurb:"OpenAI's AI-native browser; being merged with ChatGPT + Codex into a unified desktop 'superapp'.", url:"https://almcorp.com/blog/openai-desktop-superapp-chatgpt-codex-atlas-browser/" },
        { name:"Codex app (desktop)", access:["subscription"], iface:"other", status:"live", badge:"Windows · macOS",
          blurb:"Native desktop Codex app plus IDE integrations for agentic coding outside the terminal.", url:"https://openai.com/index/introducing-the-codex-app/" },
        { name:"ChatGPT Agent / Operator", access:["subscription"], iface:"other", status:"live", badge:"task automation",
          blurb:"Autonomous agent that browses and completes multi-step tasks on your behalf.", url:"https://openai.com/index/introducing-upgrades-to-codex/" },
        { name:"OpenAI API", access:["api"], iface:"other", status:"live", badge:"GPT-5.5 · GPT-5.6* · GPT-5.3-Codex · o-series",
          blurb:"Responses / Chat Completions / Realtime APIs. GPT-5.6 (*) is in limited preview to ~20 trusted orgs.", url:"https://openai.com/index/previewing-gpt-5-6-sol/" }
      ],
      news: [
        { date:"2026-06-26", sort:"2026-06-26T09:00", cat:"release", flag:"", src:"OpenAI", iface:["cli","other"], access:["api"],
          title:"GPT-5.6 Sol/Terra/Luna enter limited preview",
          body:"New generation with capability-tier naming (Sol flagship, Terra value, Luna fast). API + Codex to only ~20 trusted orgs after sharing plans with the US government; general availability 'in the coming weeks.' GPT-4.5 retired from ChatGPT the same week.",
          url:"https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov" },
        { date:"2026-06-29", sort:"2026-06-29T12:00", cat:"agents", flag:"", src:"TechTimes", iface:["cli"], access:["subscription"],
          title:"GPT-5.6 quietly rolled to some Codex users",
          body:"A hidden system prompt exposed OpenAI swapping select Codex sessions onto GPT-5.6 during the preview window.",
          url:"https://www.techtimes.com/articles/319297/20260629/openai-silently-rolled-gpt-56-some-codex-users-hidden-prompt-exposes-swap.htm" },
        { date:"2026-06-01", sort:"2026-06-01T09:00", cat:"release", flag:"", src:"OpenAI", iface:["extension","other"], access:["subscription"],
          title:"ChatGPT + Codex + Atlas merging into one desktop superapp",
          body:"OpenAI confirmed it's unifying its chat, coding agent, and AI browser into a single desktop application; public launch date undisclosed.",
          url:"https://almcorp.com/blog/openai-desktop-superapp-chatgpt-codex-atlas-browser/" },
        { date:"2026-04-23", sort:"2026-04-23T09:00", cat:"release", flag:"", src:"OpenAI", iface:["cli","other"], access:["subscription","api"],
          title:"GPT-5.5 launches as the new Codex backbone",
          body:"First fully retrained base since GPT-4.5, agentic-first. ~4M weekly active Codex developers.",
          url:"https://openai.com/index/introducing-gpt-5-5/" }
      ]
    },

    google: {
      label:"Google (Gemini/Antigravity)", accent:"#4285f4",
      models: [
        { name:"Antigravity CLI", access:["subscription","api"], iface:"cli", status:"live", badge:"replaced Gemini CLI",
          blurb:"Google's terminal agent on the Antigravity harness (Gemini 3.5 Flash). The standalone Gemini CLI was retired June 18, 2026 — migration is complete.", url:"https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/" },
        { name:"Gemini 3.5 Pro (preview)", access:["api","subscription"], iface:"other", status:"preview", badge:"Vertex preview · 2M ctx · Deep Think",
          blurb:"Frontier Pro model — 2M-token context + Deep Think reasoning. In limited Vertex AI enterprise preview; public launch slipped from June to July 2026.", url:"https://cryptobriefing.com/google-delays-gemini-35-pro-launch-to-july-2026/" },
        { name:"Gemini (gemini.google.com)", access:["subscription"], iface:"web", status:"live", badge:"Gemini 3 Pro · 3.5 Flash",
          blurb:"Consumer web app. Gemini AI Pro / Ultra tiers. 3.5 Flash beats 3.1 Pro on most benchmarks at ~4x speed.", url:"https://blog.google/products-and-platforms/products/gemini/gemini-3/" },
        { name:"Google AI Studio", access:["subscription","api"], iface:"web", status:"live", badge:"aistudio.google.com",
          blurb:"Prototyping playground + API key issuance; hosts Managed Agents, native Android publishing, and the Interactions API.", url:"https://aistudio.google.com" },
        { name:"Gemini in Chrome", access:["subscription"], iface:"extension", status:"live", badge:"browser assistant",
          blurb:"Gemini built into Chrome for page understanding and in-browser assistance.", url:"https://blog.google/products-and-platforms/products/gemini/" },
        { name:"Google Antigravity 2.0", access:["subscription"], iface:"other", status:"new", badge:"agentic dev desktop app",
          blurb:"Agent-first development platform (desktop app) — take an idea to a production-ready app; launched at I/O 2026.", url:"https://antigravity.google/" },
        { name:"Jules (async coding agent)", access:["subscription"], iface:"other", status:"live", badge:"background agent",
          blurb:"Google's asynchronous coding agent that works on tasks in the background and opens PRs.", url:"https://blog.google/technology/developers/gemini-3-developers/" },
        { name:"Gemini in Workspace", access:["subscription"], iface:"other", status:"live", badge:"Gmail · Docs · Sheets",
          blurb:"Gemini embedded across Google Workspace apps.", url:"https://blog.google/products-and-platforms/products/gemini/" },
        { name:"Gemini API", access:["api"], iface:"other", status:"live", badge:"Gemini 3.5 Flash · 3 Pro · 3.5 Pro*",
          blurb:"Programmatic access incl. Managed Agents — spin up tool-using agents in an isolated Linux env with one call. 3.5 Pro (*) is Vertex-preview only until July.", url:"https://blog.google/technology/developers/gemini-3-developers/" },
        { name:"Vertex AI", access:["api"], iface:"other", status:"live", badge:"enterprise cloud",
          blurb:"Gemini models + agent tooling for enterprise on Google Cloud; hosts the Gemini 3.5 Pro preview.", url:"https://cloud.google.com/vertex-ai" }
      ],
      news: [
        { date:"2026-06-23", sort:"2026-06-23T09:00", cat:"release", flag:"", src:"Crypto Briefing", iface:["other"], access:["api","subscription"],
          title:"Gemini 3.5 Pro slips to July — limited Vertex preview for now",
          body:"Google missed its June GA target; 3.5 Pro (2M context, Deep Think) sits in limited Vertex AI enterprise preview while Google refines coding and long-task performance. Pichai on stage: 'give us until next month.'",
          url:"https://cryptobriefing.com/google-delays-gemini-35-pro-launch-to-july-2026/" },
        { date:"2026-05-21", sort:"2026-05-21T09:00", cat:"release", flag:"", src:"Google", iface:["cli","other","web"], access:["subscription","api"],
          title:"Antigravity + Gemini 3.5 Flash headline I/O 2026",
          body:"Agent-first Antigravity platform, Managed Agents in the Gemini API, WebMCP browser standard, and Gemini 3.5 Flash (4x faster, beats 3.1 Pro) anchor the developer keynote.",
          url:"https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/" },
        { date:"2026-05-21", sort:"2026-05-21T08:30", cat:"release", flag:"", src:"Google", iface:["cli"], access:["subscription","api"],
          title:"Gemini CLI is becoming the Antigravity CLI",
          body:"Google transitioned the standalone Gemini CLI into the Antigravity CLI on the unified agent harness; free-tier migration deadline was June 18, 2026.",
          url:"https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/" }
      ]
    },

    xai: {
      label:"xAI (Grok)", accent:"#111827",
      models: [
        { name:"Grok Build CLI", access:["subscription","api"], iface:"cli", status:"new", badge:"Grok Build 0.1 · grok-code-fast-1",
          blurb:"xAI's terminal coding agent — plan, debug, MCP support. Early beta for SuperGrok / X Premium+; the model is also on the API.", url:"https://devops.com/xai-opens-grok-build-0-1-to-developers-via-api/" },
        { name:"Grok (grok.com)", access:["subscription"], iface:"web", status:"live", badge:"Grok 4.1 · 4.3 beta",
          blurb:"Consumer web app with Auto mode + explicit model picker. Grok 4.3 adds native video input and document generation.", url:"https://grok.com" },
        { name:"xAI Console", access:["api"], iface:"web", status:"live", badge:"console.x.ai · docs.x.ai",
          blurb:"API keys, usage, and developer docs for the Grok models.", url:"https://docs.x.ai/developers/models" },
        { name:"Grok in 𝕏", access:["subscription"], iface:"web", status:"live", badge:"in-platform assistant",
          blurb:"Grok built directly into the 𝕏 (Twitter) app and website, with real-time access to the 𝕏 firehose.", url:"https://x.ai/" },
        { name:"Grok mobile apps", access:["subscription"], iface:"other", status:"live", badge:"iOS · Android",
          blurb:"Grok on iOS and Android for SuperGrok / Premium subscribers.", url:"https://x.ai/" },
        { name:"Grok 4.5 (private beta)", access:["subscription"], iface:"other", status:"preview", badge:"V9 · ~1.5T params",
          blurb:"Announced Jun 28, 2026 — private SpaceX/Tesla testing. Musk claims Opus-level performance (no independent benchmark). Trained with Cursor data; no public release date yet.", url:"https://cybernews.com/ai-news/musk-grok-4-5-private-beta-superior-claude-opus/" },
        { name:"xAI API", access:["api"], iface:"other", status:"live", badge:"Grok 4 · grok-code-fast-1 · Grok Build 0.1",
          blurb:"OpenAI-compatible endpoint at api.x.ai/v1 with usage-based pricing; drop-in for existing OpenAI SDK code.", url:"https://x.ai/api" },
        { name:"Live Search API", access:["api"], iface:"other", status:"live", badge:"web + 𝕏 + news",
          blurb:"Real-time search over the web, 𝕏, and news sources — the freshest-data edge among the big providers.", url:"https://x.ai/api" }
      ],
      news: [
        { date:"2026-06-28", sort:"2026-06-28T12:00", cat:"release", flag:"🆕", src:"xAI", iface:["web","other"], access:["subscription"],
          title:"Grok 4.5 (V9, ~1.5T) — Musk claims Opus-level, private beta",
          body:"Internal SpaceX/Tesla testing; 'early evals show performance close to, perhaps exceeding Opus' — no independent benchmark yet. V9 is ~3x the V8-small base and trained with Cursor data. xAI plans a from-scratch model every month through end of 2026; Grok 5 is reportedly training on Colossus 2.",
          url:"https://cybernews.com/ai-news/musk-grok-4-5-private-beta-superior-claude-opus/" },
        { date:"2026-06-26", sort:"2026-06-26T10:00", cat:"agents", flag:"", src:"DevOps.com", iface:["cli","other"], access:["subscription","api"],
          title:"Grok Build 0.1 opens to developers via the xAI API",
          body:"The coding model powering the Grok Build CLI is now available on the API (public beta) — no SuperGrok/Premium+ needed to build on it.",
          url:"https://devops.com/xai-opens-grok-build-0-1-to-developers-via-api/" },
        { date:"2026-04-17", sort:"2026-04-17T09:00", cat:"release", flag:"", src:"xAI", iface:["web"], access:["subscription"],
          title:"Grok 4.3 Beta — native video input, document generation, better tool-calling",
          body:"Improved architecture (Dec 2025 knowledge cutoff), PDFs/spreadsheets/slides generation, and stronger tool use.",
          url:"https://www.lorka.ai/ai-models/xai" }
      ]
    }
  }
};

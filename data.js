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
  lastUpdated: "2026-06-30T17:00:00",
  version: 3,

  refreshLog: [
    { at:"2026-06-30T17:00", added: 46, note:"Added xAI (Grok): Grok 4.1/4.3, Grok 4.5 private beta (V9, ~1.5T), Grok Build CLI + API, Live Search. Packaged as a shareable repo with in-browser BYOK auto-refresh." },
    { at:"2026-06-30T16:00", added: 34, note:"Multi-provider build: Anthropic/OpenAI/Google catalogs + Frontier feed (Fable 5 lifted, Gemini 3.5/Antigravity, GPT-5.5/Codex, Hermes MOA)." }
  ],

  /* ---------- FRONTIER AI NEWS (provider-agnostic, all major AI + agents) ---------- */
  frontier: [
    { date:"2026-06-30", sort:"2026-06-30T16:00", cat:"policy", flag:"🆕", src:"CNBC",
      title:"Trump admin lifts export controls on Anthropic's Fable 5 & Mythos 5",
      body:"Commerce cleared both models after Anthropic (Tom Brown leading talks) agreed to ongoing safety protocols. Fable 5 public access returns Jul 1; Mythos 5 already eased to ~100 trusted US orgs.",
      url:"https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" },
    { date:"2026-06-28", sort:"2026-06-28T12:00", cat:"release", flag:"🆕", src:"xAI",
      title:"Musk announces Grok 4.5 (V9, ~1.5T params) — private beta at SpaceX & Tesla",
      body:"xAI's newest model runs on a fresh V9 foundation (~1.5 trillion parameters), in private beta with SpaceX and Tesla teams. No public release date yet. Grok 5 is reportedly in training on Colossus 2.",
      url:"https://cryptobriefing.com/xai-grok-4-5-v9-model-upgrade/" },
    { date:"2026-06-26", sort:"2026-06-26T10:00", cat:"agents", flag:"", src:"CIO Dive",
      title:"xAI joins the coding-agent race with Grok Build",
      body:"Grok Build (CLI + Grok Build 0.1 model via API) targets agentic coding — planning, debugging, MCP support — putting xAI head-to-head with Claude Code, Codex, and Antigravity.",
      url:"https://www.ciodive.com/news/xAI-coding-agents-Grok-Build/820422/" },
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
    { date:"2026-06-08", sort:"2026-06-08T09:00", cat:"release", flag:"", src:"Microsoft AI",
      title:"Microsoft AI launches seven in-house MAI models",
      body:"Microsoft's own model family (MAI) expands to seven models — its 'hill-climbing machine' strategy to iterate with more compute, better data, and sharper evals.",
      url:"https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" },
    { date:"2026-05-21", sort:"2026-05-21T09:00", cat:"release", flag:"", src:"Google I/O",
      title:"Google I/O 2026: Gemini 3.5, Antigravity, system-level agents",
      body:"Gemini 3.5 Flash outruns Gemini 3.1 Pro on most benchmarks at ~4x speed; Antigravity agentic dev platform + Managed Agents in the Gemini API headline the keynote.",
      url:"https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/" },
    { date:"2026-04-23", sort:"2026-04-23T09:00", cat:"release", flag:"", src:"OpenAI",
      title:"OpenAI introduces GPT-5.5 — first fully retrained base since GPT-4.5",
      body:"Agentic-first training; becomes the backbone for Codex. OpenAI cites ~4M weekly active Codex developers at launch.",
      url:"https://openai.com/index/introducing-gpt-5-5/" },
    { date:"2026-06-05", sort:"2026-06-05T09:00", cat:"policy", flag:"", src:"Wiley",
      title:"New AI Executive Order targets frontier models & cyber vulnerabilities",
      body:"A fresh executive order sets expectations for frontier-model developers around cybersecurity vulnerabilities and disclosure.",
      url:"https://www.wiley.law/alert-New-AI-Executive-Order-Addresses-Frontier-Models-and-Cybersecurity-Vulnerabilities" }
  ],

  /* ---------- PROVIDERS ---------- */
  providers: {

    anthropic: {
      label:"Anthropic (Claude)", accent:"#d97757",
      models: [
        { name:"Claude Code (CLI)", access:["subscription","api"], iface:"cli", status:"live",
          badge:"Opus 4.8 · Sonnet 5 · Haiku 4.5 · Fable 5*",
          blurb:"Anthropic's official terminal agent. Runs on a Claude Pro/Max subscription OR API billing. Fable 5 selectable again from Jul 1 (*restoring).",
          url:"https://www.anthropic.com/claude-code" },
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
          blurb:"Raw programmatic access. Fable 5 restores Jul 1 (*); Mythos 5 limited to ~100 approved orgs (**).", url:"https://docs.anthropic.com/en/api" },
        { name:"Bedrock · Vertex · Foundry", access:["api"], iface:"other", status:"live", badge:"cloud marketplaces",
          blurb:"Claude via Amazon Bedrock, Google Vertex AI, and Microsoft Foundry for enterprise.", url:"https://docs.anthropic.com/en/api/claude-on-amazon-bedrock" }
      ],
      news: [
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
        { name:"Codex CLI", access:["subscription","api"], iface:"cli", status:"live", badge:"GPT-5.5 · GPT-5.3-Codex",
          blurb:"OpenAI's terminal coding agent. Runs on a ChatGPT Plus/Pro subscription OR API billing. ~4M weekly devs.", url:"https://openai.com/codex/" },
        { name:"ChatGPT (chatgpt.com)", access:["subscription"], iface:"web", status:"live", badge:"GPT-5.5 · GPT-5.5 Thinking",
          blurb:"The flagship web chat. Free / Plus / Pro tiers with the GPT-5.5 model family.", url:"https://chatgpt.com" },
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
        { name:"OpenAI API", access:["api"], iface:"other", status:"live", badge:"GPT-5.5 · GPT-5.3-Codex · o-series",
          blurb:"Responses / Chat Completions / Realtime APIs. GPT-5.5 is the first fully retrained base since GPT-4.5.", url:"https://openai.com/index/introducing-gpt-5-5/" }
      ],
      news: [
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
        { name:"Antigravity CLI", access:["subscription","api"], iface:"cli", status:"new", badge:"formerly Gemini CLI",
          blurb:"Google is transitioning the Gemini CLI into the Antigravity CLI — terminal agent on the Antigravity harness (Gemini 3.5 Flash).", url:"https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/" },
        { name:"Gemini (gemini.google.com)", access:["subscription"], iface:"web", status:"live", badge:"Gemini 3 Pro · 3.5 Flash",
          blurb:"Consumer web app. Gemini AI Pro / Ultra tiers. 3.5 Flash beats 3.1 Pro on most benchmarks at ~4x speed.", url:"https://blog.google/products-and-platforms/products/gemini/gemini-3/" },
        { name:"Google AI Studio", access:["subscription","api"], iface:"web", status:"live", badge:"aistudio.google.com",
          blurb:"Prototyping playground + API key issuance; hosts Managed Agents and the Interactions API.", url:"https://aistudio.google.com" },
        { name:"Gemini in Chrome", access:["subscription"], iface:"extension", status:"live", badge:"browser assistant",
          blurb:"Gemini built into Chrome for page understanding and in-browser assistance.", url:"https://blog.google/products-and-platforms/products/gemini/" },
        { name:"Google Antigravity 2.0", access:["subscription"], iface:"other", status:"new", badge:"agentic dev desktop app",
          blurb:"Agent-first development platform (desktop app) — take an idea to a production-ready app; launched at I/O 2026.", url:"https://antigravity.google/" },
        { name:"Jules (async coding agent)", access:["subscription"], iface:"other", status:"live", badge:"background agent",
          blurb:"Google's asynchronous coding agent that works on tasks in the background and opens PRs.", url:"https://blog.google/technology/developers/gemini-3-developers/" },
        { name:"Gemini in Workspace", access:["subscription"], iface:"other", status:"live", badge:"Gmail · Docs · Sheets",
          blurb:"Gemini embedded across Google Workspace apps.", url:"https://blog.google/products-and-platforms/products/gemini/" },
        { name:"Gemini API", access:["api"], iface:"other", status:"live", badge:"Gemini 3.5 Flash · 3 Pro",
          blurb:"Programmatic access incl. Managed Agents — spin up tool-using agents in an isolated Linux env with one call.", url:"https://blog.google/technology/developers/gemini-3-developers/" },
        { name:"Vertex AI", access:["api"], iface:"other", status:"live", badge:"enterprise cloud",
          blurb:"Gemini models + agent tooling for enterprise on Google Cloud.", url:"https://cloud.google.com/vertex-ai" }
      ],
      news: [
        { date:"2026-05-21", sort:"2026-05-21T09:00", cat:"release", flag:"", src:"Google", iface:["cli","other","web"], access:["subscription","api"],
          title:"Antigravity + Gemini 3.5 Flash headline I/O 2026",
          body:"Agent-first Antigravity platform, Managed Agents in the Gemini API, and Gemini 3.5 Flash (4x faster, beats 3.1 Pro) anchor the developer keynote.",
          url:"https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/" },
        { date:"2026-05-21", sort:"2026-05-21T08:30", cat:"release", flag:"", src:"Google", iface:["cli"], access:["subscription","api"],
          title:"Gemini CLI is becoming the Antigravity CLI",
          body:"Google announced it's transitioning the standalone Gemini CLI into the Antigravity CLI on the unified agent harness.",
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
        { name:"Google AI Studio equivalent — xAI Console", access:["api"], iface:"web", status:"live", badge:"console.x.ai · docs.x.ai",
          blurb:"API keys, usage, and developer docs for the Grok models.", url:"https://docs.x.ai/developers/models" },
        { name:"Grok in 𝕏", access:["subscription"], iface:"web", status:"live", badge:"in-platform assistant",
          blurb:"Grok built directly into the 𝕏 (Twitter) app and website, with real-time access to the 𝕏 firehose.", url:"https://x.ai/" },
        { name:"Grok mobile apps", access:["subscription"], iface:"other", status:"live", badge:"iOS · Android",
          blurb:"Grok on iOS and Android for SuperGrok / Premium subscribers.", url:"https://x.ai/" },
        { name:"Grok 4.5 (private beta)", access:["subscription"], iface:"other", status:"preview", badge:"V9 · ~1.5T params",
          blurb:"Announced Jun 28, 2026 — running privately with SpaceX & Tesla teams. No public release date yet.", url:"https://cryptobriefing.com/xai-grok-4-5-v9-model-upgrade/" },
        { name:"xAI API", access:["api"], iface:"other", status:"live", badge:"Grok 4 · grok-code-fast-1 · Grok Build 0.1",
          blurb:"OpenAI-compatible endpoint at api.x.ai/v1 with usage-based pricing; drop-in for existing OpenAI SDK code.", url:"https://x.ai/api" },
        { name:"Live Search API", access:["api"], iface:"other", status:"live", badge:"web + 𝕏 + news",
          blurb:"Real-time search over the web, 𝕏, and news sources — the freshest-data edge among the big providers.", url:"https://x.ai/api" }
      ],
      news: [
        { date:"2026-06-28", sort:"2026-06-28T12:00", cat:"release", flag:"🆕", src:"xAI", iface:["web","other"], access:["subscription"],
          title:"Grok 4.5 announced — V9 foundation, ~1.5T params (private beta)",
          body:"Musk confirmed Grok 4.5 is running in private beta with SpaceX and Tesla. Grok 5 is reportedly in training on the gigawatt-scale Colossus 2 supercluster.",
          url:"https://cryptobriefing.com/xai-grok-4-5-v9-model-upgrade/" },
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

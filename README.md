# 🛰️ Frontier AI & Agentic News

A tiny, self-updating dashboard that tracks **AI models, interfaces, and news** across
**Anthropic (Claude)**, **OpenAI (ChatGPT/Codex)**, **Google (Gemini/Antigravity)**, and **xAI (Grok)** —
plus a provider-agnostic **Frontier AI News** feed (new models, agentic tools like Hermes, AI policy).

It's one HTML page and two small JS files. No build step, no backend, no tracking.
You can keep it current yourself **with your own AI API key, right in the browser** — no Claude Code required.

---

## 🚀 Use it (easiest → click a link)

**Hosted:** **https://caseyatms.github.io/frontier-ai-news/**

Open it, browse the tabs, done. To pull fresh news, add your own API key (below) and hit **⚡ Refresh now**.

**Or run it locally:**
1. Download this repo (green **Code** button → **Download ZIP**) and unzip it.
2. Double-click **`index.html`** — it opens in your browser. That's it.

> The hosted link is smoothest for the in-browser refresh (some AI APIs restrict calls from `file://` local pages). Everything else works either way.

---

## 🧭 How to navigate

- **Frontier AI News** — one feed of everything worth watching. Filter by *Release / Agents / Policy* or search.
- **A provider tab** (e.g. *Anthropic*) reveals three more bars:
  - **Access:** Subscription based · API only
  - **Interface:** CLI/Terminal · Browser Website · Browser Extension · Other
- Pick a path (e.g. *Anthropic → Subscription → CLI/Terminal*) and you get the matching
  tools/models **plus the news relevant to that slice**.

---

## 🔑 Keep it updated with your own API key (BYOK)

The dashboard can refresh itself by asking an AI model (using its **web search**) for the latest news.

1. Click **⚙ Settings**.
2. Pick a provider and paste **your own** API key:
   | Provider | Get a key | Uses |
   |---|---|---|
   | **Anthropic (Claude)** | [console.anthropic.com](https://console.anthropic.com) → API keys | web search tool |
   | **OpenAI (GPT)** | [platform.openai.com](https://platform.openai.com) → API keys | web search tool |
   | **xAI (Grok)** | [console.x.ai](https://console.x.ai) | Live Search |
3. (Optional) set a model name, or leave blank for a sensible default.
4. Choose how your key is handled:
   - **Use once — don't save** *(default, recommended)*: the key is held in memory for that tab only and
     cleared when you close it. Nothing is written to disk.
   - **Save in this browser**: stored in `localStorage` for reuse. This unlocks a **daily refresh cap**
     (max refreshes/day this tool will run with your key — default 10, set 0 for unlimited) plus one-click
     links to set a **hard spend limit** at your provider.
5. Click **Save**, then **⚡ Refresh now**.

The page calls that provider, merges the new headlines in (de-duped), and saves the **news result** in your
browser so it sticks across reloads. Want to share your refreshed snapshot back to the repo?
**🕓 History → ⬇ Download data.js** and replace the file.

> **Cost:** a refresh is a single model call with web search — typically a few cents or less. Nothing runs on a schedule; it only calls the API when *you* click Refresh.

### 🔐 About your key (please read)
- Your key is sent **only to the provider you chose** (`api.anthropic.com` / `api.openai.com` / `api.x.ai`) and
  **nowhere else**. There's no backend — GitHub Pages just serves static files. It's **never** committed, sent to GitHub, or sent to anyone.
- **Prefer "Use once"** — then nothing is stored. Only "Save in this browser" writes the key to `localStorage`,
  where anything with access to that browser profile could read it. Never save a key on a shared computer.
- **Best practice: use a dedicated API key with a low monthly spend limit.** Then even a worst-case leak is capped
  and revocable in one click. Settings links straight to each provider's limit page.
- The daily refresh cap bounds how many calls *this tool* makes; the provider spend limit is the real hard ceiling.
- This is a personal-use convenience, not a hardened secrets vault. Treat the key like a password.

---

## 🤖 Optional: refresh via Claude Code

If you use [Claude Code](https://www.anthropic.com/claude-code), you can say **"refresh the AI dashboard"** and
have it search, rewrite `data.js`, and archive the previous snapshot. See [`tools/`](tools/). Friends don't need this — the ⚡ button covers everyone.

---

## 🗂️ What's in here

| File | What it does |
|---|---|
| `index.html` | The dashboard UI + navigation + rendering |
| `data.js` | The data snapshot (`window.DASHBOARD_DATA`) — the only file a refresh changes |
| `refresh.js` | The in-browser BYOK refresh engine (Anthropic / OpenAI / xAI adapters) |
| `tools/` | Optional local/Claude-Code refresh helper (no secrets) |

---

## 🛡️ Notes

- Data is a **snapshot**, not a live wire — it's only as fresh as the last refresh. Always confirm fast-moving
  details against the primary sources linked on each card.
- News items pulled by a model are rendered as plain text (HTML-escaped) and links are restricted to `http(s)`.
- Not affiliated with Anthropic, OpenAI, Google, or xAI. Educational / personal tool.

## 📄 License

MIT — see [`LICENSE`](LICENSE). Fork it, restyle it, add providers. PRs welcome.

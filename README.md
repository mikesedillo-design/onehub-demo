# OneHub — AI-Powered Status Hub

> **Type once. Update everywhere. Chain to AI.**

Built for the **3X PM/XD: Intuit × Anthropic Hackathon** · May 2026  
Category: **Internal Enablers**

---

## The Problem

Program managers at Intuit manually update 2–3 systems every time a project status changes — Jira, Smartsheet, Slack, leadership summaries — each taking 3–6 minutes per system, 7–10 times per week.

That's **~76 minutes of low-value copy-paste work every week**, per PM. Error-prone, inconsistent, and invisible to leadership until it's too late.

---

## The Solution

OneHub is a single-input AI workflow that turns one plain-English sentence into simultaneous updates across every connected system — with an auto-generated leadership summary and intelligent agent chaining to the CGPM catalog.

**One sentence in. Everything updated. 45 seconds.**

---

## Running Locally

### Prerequisites
- Node.js 18+
- A modern browser (Chrome, Safari, Firefox)

### Quick Start

```bash
# Clone the repo
git clone https://github.com/mikesedillo-design/onehub-demo.git
cd onehub-demo

# Start the main app (port 4000)
node -e "const http=require('http'),fs=require('fs');http.createServer((req,res)=>{fs.readFile('onehub.html',(err,data)=>{if(err){res.writeHead(404);res.end('not found');}else{res.writeHead(200,{'Content-Type':'text/html'});res.end(data);}});}).listen(4000,()=>console.log('OneHub on http://localhost:4000'));"

# Start the demo video (port 4001)
node serve-demo.js

# Open in browser
open http://localhost:4000
open http://localhost:4001
```

### No configuration required
OneHub runs in **demo mode** out of the box — all writes are simulated. No API keys needed to evaluate the UX and AI parsing flow.

### Optional: Enable Live Writes
Open **Settings** in the app and enter:

| Field | Where to get it |
|---|---|
| Claude API key | [console.anthropic.com](https://console.anthropic.com) |
| Jira PAT | id.atlassian.com → Security → API tokens |
| Smartsheet token | app.smartsheet.com → Account → Personal Settings → API Access |

All credentials are stored in `localStorage` only — never sent anywhere except the respective API.

---

## How It Works

```
User types plain-English status update
        ↓
Claude AI parses → RAG status, progress %, priority, blockers, next steps
        ↓
Simultaneous writes to:
  • Jira       — structured comment posted to ticket
  • Smartsheet — project row updated
  • Slack      — leadership summary posted (optional)
        ↓
Auto-generated leadership summary displayed
        ↓
Context-aware "What's Next?" cards surface relevant CGPM catalog agents:
  • create-exec-communication  → RED status
  • create-stakeholder-update  → AMBER status
  • create-presentation        → any status
  • summarize-slack-channel    → any status
  • metrics-check              → any status
  • retrospective              → COMPLETED
```

---

## Key Features

- **AI Parsing** — Claude extracts RAG status, progress %, priority, blockers, and next steps from free-form text
- **Multi-system writes** — Jira + Smartsheet updated simultaneously in one click
- **Leadership summary** — Auto-generated, copy-ready for Slack or email
- **Context-aware agent chaining** — "What's Next?" cards surface the right CGPM catalog agent based on RAG status
- **Live readiness indicator** — Three-state bar shows demo / partial / fully live mode
- **Project dashboard** — All projects at a glance with RAG status history
- **Graceful degradation** — Falls back to demo mode if credentials absent; no broken states

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML/CSS/JS — zero dependencies, zero build step |
| AI | Claude API (Anthropic) — claude-3-5-sonnet for parsing |
| Integrations | Jira REST API, Smartsheet API, Slack Incoming Webhooks |
| Agent chaining | CGPM Open Market catalog (Intuit internal) |

---

## Business Impact

| Metric | Before OneHub | After OneHub |
|---|---|---|
| Time per update | 3–6 min/system × 2–3 systems | 45 seconds |
| Updates per week | 7–10 manual copy-pastes | 1 input |
| Weekly time saved | ~76 minutes | — |
| Leadership visibility | Delayed, inconsistent | Instant, AI-generated |
| Next action | Manual judgment | Context-aware agent suggestion |

Across a team of 10 PMs managing 5+ workstreams: **~760 minutes/week recovered.**

---

## Project Structure

```
onehub-demo/
├── onehub.html            # Main app — single file, zero dependencies
├── onehub-demo-video.html # Animated demo video with voiceover
├── serve-demo.js          # Local file server for demo video + audio
└── README.md              # This file
```

---

## Built By

**Mike Sedillo** · Staff Business Operations Manager · ICS DS&A · Intuit  
mike_sedillo@intuit.com

*Built with Claude (Anthropic) during the 3X PM/XD Intuit × Anthropic Hackathon, May 2026*

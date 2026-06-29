# Dev Vortex

AI context continuity for any project — OpenCode, Claude Code, Cursor, VS Code Copilot, Antigravity, or any AI tool.

```
npx dev-vortex init
```

No global install. Works immediately.

---

## Why

Every time you switch AI sessions, models, or tools, you start from zero. Dev Vortex solves that with a portable file-based workspace layer inside your project — state files, handoff protocols, session scripts, and tool-specific rules that any AI can read.

## Commands

| Command | What it does |
|---|---|
| `npx dev-vortex init` | Scaffold `.vortex/` AI context layer in current project |
| `npx dev-vortex graphify` | Scan code and generate interactive knowledge graph |
| `npx dev-vortex status` | Show current AI session state |
| `npx dev-vortex resume` | Print paste-ready context for any AI tool |

### graphify

The `graphify` command scans your project's source code, extracts classes, functions, and imports, builds a dependency graph, detects communities, and generates an interactive HTML visualization.

```
npx dev-vortex graphify          # scan current directory
npx dev-vortex graphify ./src    # scan a specific directory
```

Output in project root:

```
graphify-out/
├── graph.html     ← interactive vis.js graph (open in browser)
└── graph.json     ← raw graph data
```

After `init`, you are asked whether to run graphify immediately. Say no and you'll see the command to run it later.

## What gets scaffolded

```
your-project/
├── .vortex/
│   ├── state/          ← last-action, current-task, progress-snapshot
│   ├── handoff/        ← context transfer protocols
│   ├── scripts/        ← start-session, end-session
│   ├── rules/          ← AGENTS.md, .cursorrules, copilot-instructions.md
│   └── policies/       ← execution policy
├── AGENTS.md           ← auto-discovered by AI tools
├── .cursorrules
└── .github/copilot-instructions.md
```

## Principles

- **Model-agnostic** — no model or tool referenced by name in any state file
- **No runtime** — pure file definitions and manually-followed protocols
- **No agents** — structured files, not automation
- **Free** — no paid APIs or services

## Quickstart

```bash
cd your-project
npx dev-vortex init
bash .vortex/scripts/start-session.sh
```

Paste the output into any AI tool and begin.

## License

MIT

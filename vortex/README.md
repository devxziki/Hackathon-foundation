# vortex

AI context continuity for any project — one command, zero config.

## Usage

```
cd your-project
npx vortex init
```

No global install. Works immediately.

## Commands

| Command | Description |
|---|---|
| `npx vortex init` | Set up Vortex AI context layer in current folder |
| `npx vortex status` | Show current AI session state |
| `npx vortex resume` | Get paste-ready context for any AI tool |

## What gets created

```
your-project/
├── .vortex/
│   ├── state/
│   │   ├── last-action.md         ← resume checkpoint (update this)
│   │   ├── current-task.md        ← active task (update this)
│   │   └── progress-snapshot.md   ← project overview (update this)
│   ├── handoff/
│   │   ├── resume-protocol.md
│   │   ├── model-switching.md
│   │   ├── cli-to-ide.md
│   │   ├── ide-to-cli.md
│   │   └── context-export-format.md
│   ├── policies/
│   │   └── execution-policy.md
│   └── scripts/
│       ├── start-session.sh
│       └── end-session.sh
├── AGENTS.md                     ← auto-read by OpenCode, Claude Code, Antigravity
├── .cursorrules                  ← auto-read by Cursor
└── .github/
    └── copilot-instructions.md   ← auto-read by VS Code Copilot
```

## Supported AI tools

OpenCode · Cursor · VS Code Copilot · Claude Code · Antigravity · any AI CLI

- **AGENTS.md** is auto-read by OpenCode, Claude Code, and Antigravity.
- **.cursorrules** is auto-read by Cursor.
- **.github/copilot-instructions.md** is auto-read by VS Code Copilot.

## After init — 3 steps

1. Review the 3 generated state files and update with your real project context
2. Run: `bash .vortex/scripts/start-session.sh`
3. Paste the output into any AI tool

## Supported project types

Node.js · Python · Go · Rust · Java · PHP · Ruby · any project (fallback)

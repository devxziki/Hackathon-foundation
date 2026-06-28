# foundation-ai

Set up AI context continuity in any project with one command.

## Usage

```
cd your-project
npx foundation-ai@latest init
```

No global install. No config. Works immediately.

## Commands

| Command | Description |
|---|---|
| `npx foundation-ai@latest init` | Set up Foundation in current folder |
| `npx foundation-ai@latest status` | See current AI session state |
| `npx foundation-ai@latest resume` | Get paste-ready context for any AI tool |

## What gets created

```
your-project/
├── AGENTS.md                          ← auto-read by OpenCode, Claude Code, Antigravity
├── .cursorrules                       ← auto-read by Cursor
├── .github/
│   └── copilot-instructions.md        ← auto-read by VS Code Copilot
├── company/
│   ├── workspace/
│   │   ├── state/
│   │   │   ├── last-action.md         ← resume checkpoint (update this)
│   │   │   ├── current-task.md        ← active task (update this)
│   │   │   └── progress-snapshot.md   ← project overview (update this)
│   │   └── handoff/
│   │       ├── resume-protocol.md
│   │       ├── model-switching.md
│   │       ├── cli-to-ide.md
│   │       ├── ide-to-cli.md
│   │       └── context-export-format.md
│   └── policies/
│       └── execution-policy.md
├── scripts/
│   ├── start-session.sh
│   └── end-session.sh
└── .memory/
    └── decisions.md
```

## Supported AI tools

OpenCode · Cursor · VS Code Copilot · Claude Code · Antigravity · any AI CLI

- **AGENTS.md** is auto-read by OpenCode, Claude Code, and Antigravity.
- **.cursorrules** is auto-read by Cursor.
- **.github/copilot-instructions.md** is auto-read by VS Code Copilot.

## After init — 3 steps

1. Review the 3 generated state files and update with your real project context
2. Run: `bash scripts/start-session.sh`
3. Paste the output into any AI tool

## Supported project types

Node.js · Python · Go · Rust · Java · PHP · Ruby · any project (fallback)

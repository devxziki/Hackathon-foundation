# Dev Vortex

An open-source, AI-native workspace standard that solves AI context loss across CLI, IDE, and chat tools. Powered by [DevVortex](https://www.npmjs.com/package/dev-vortex) — `npx dev-vortex init`.

## The Problem

AI tools lose context every time you switch sessions, models, or environments. You explain your project again and again. Progress is fragmented. Context is trapped in the tool that created it.

**Hackathon Foundation makes AI context portable.**

## What It Is

Hackathon Foundation is a file-based workspace standard. It defines how state, context, handoffs, skills, policies, roles, and departments are structured so any AI tool or developer can pick up where another left off — instantly.

| Module | What it does |
|---|---|
| `company/handbook/` | Mission, culture, principles, definition of done |
| `company/departments/` | Functional areas: engineering, design, qa, docs, ops, research |
| `company/roles/` | Role definitions: backend, frontend, architect, tester, etc. |
| `company/policies/` | Enforceable governance: execution, review, security, communication |
| `company/assets/` | Reusable templates, skills, workflows, checklists |
| `company/workspace/skills/` | Skill index and AI model selection guide |
| `company/workspace/state/` | Current task, last action, task history, progress snapshot |
| `company/workspace/handoff/` | Context transfer protocols for CLI ↔ IDE ↔ model switches |

## Usage

```
npx dev-vortex init
```

Run that in any project. It scaffolds the full AI context layer inside `.vortex/` — state files, handoff protocols, session scripts, and tool-specific rules. `cd` into your project folder first, then run the command.

## Usage Flow

- **Model-agnostic** — Works with any AI. No model-specific configuration.
- **Tool-agnostic** — Works in CLI, VS Code, Cursor, JetBrains, chat UIs.
- **Free Forever** — No paid models, APIs, or services required.
- **File-based** — No databases, servers, or runtime dependencies.
- **Open-source** — MIT license. Fork, adapt, contribute.

## Quickstart — set up AI context in any project

```
cd your-project
npx dev-vortex init
```

Works immediately. No global install needed.
After init: `bash .vortex/scripts/start-session.sh` → paste the output into any AI tool.

## Full Setup (from this repo)

```
git clone https://github.com/devxziki/Hackathon-foundation.git
cd Hackathon-foundation
cat company/workspace/state/progress-snapshot.md
```

Read the resume protocol at `company/workspace/handoff/resume-protocol.md` to begin working.

## License

MIT

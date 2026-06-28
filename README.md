# Hackathon Foundation

An open-source, AI-native workspace standard that solves AI context loss across CLI, IDE, and chat tools.

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

## Usage Flow

```
1. Start → Read state files → Know what to do
2. Execute → Follow policies → Use assets
3. Record → Update state files → Log decisions
4. Handoff → Export context → Switch tools/models
5. Resume → Import context → Continue without loss
```

## Key Properties

- **Model-agnostic** — Works with any AI. No model-specific configuration.
- **Tool-agnostic** — Works in CLI, VS Code, Cursor, JetBrains, chat UIs.
- **Free Forever** — No paid models, APIs, or services required.
- **File-based** — No databases, servers, or runtime dependencies.
- **Open-source** — MIT license. Fork, adapt, contribute.

## Quick Start

```
git clone https://github.com/devxziki/Hackathon-foundation.git
cd Hackathon-foundation
cat company/workspace/state/progress-snapshot.md
```

Read the resume protocol at `company/workspace/handoff/resume-protocol.md` to begin working.

## License

MIT

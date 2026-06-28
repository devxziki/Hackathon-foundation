# Architecture

## System Overview

Hackathon Foundation is organized as a layered workspace. Each layer has a distinct purpose. All layers are files in a standard directory structure — no runtime, no database, no server.

```
                    ┌─────────────────────┐
                    │      Handbook       │
                    │  (why + how we work) │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │     Departments     │
                    │   (functional areas) │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │       Roles         │
                    │  (who does what)    │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │      Policies       │
                    │   (governance rules) │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │       Assets        │
                    │  (reusable tools)   │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │     Workspace       │
                    │ (skills + state +   │
                    │  handoff protocols) │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │    Deliverables     │
                    │ (code, docs, tests) │
                    └─────────────────────┘
```

## Execution Flow

```
Idea → Context → State → Execution → Handoff → Resume
```

| Step | What happens | Files involved |
|---|---|---|
| **Idea** | A task is identified | `current-task.md` |
| **Context** | Relevant context is gathered | `handbook/`, `policies/`, `departments/` |
| **State** | Current state is loaded | `last-action.md`, `progress-snapshot.md` |
| **Execution** | Work is performed following policies | `assets/`, `policies/` |
| **Handoff** | Context is exported for the next tool/model | `handoff/` protocols |
| **Resume** | State is imported and work continues | `resume-protocol.md` |

## Directory Layout

```
company/
├── handbook/           Mission, culture, principles, DoD
├── departments/        Engineering, design, qa, docs, ops, research
├── roles/              Role definitions (13 roles)
├── policies/           Governance rules (6 policies)
├── assets/             Reusable templates and skills (empty)
├── onboarding/         Onboarding guides (empty)
└── workspace/
    ├── skills/         Skill index + AI model guide
    ├── state/          Current task, history, last action, progress
    └── handoff/        CLI↔IDE, model switch, export, resume protocols

resources/
├── ai/                 Free model catalog
├── integrations/       Tool integration guides
├── examples/           Usage examples
└── community/          Community resources

docs/                   Documentation (27 files)
```

## Portability

The entire workspace is portable because:

1. **Everything is files.** Open the directory in any tool and the structure is identical.
2. **Nothing is executable.** No scripts, no agents, no automation. Only structured data.
3. **State is explicit.** Every session writes state to disk. No hidden context.
4. **Handoff is protocol-driven.** The same steps work for every tool and model.

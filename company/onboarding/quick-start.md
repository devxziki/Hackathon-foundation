# Quick Start Guide

## Purpose

This guide gets a brand new user from zero to productive in under 5 minutes.

---

## What this repo is

Hackathon Foundation is an open-source, file-based workspace standard that solves AI context loss. When you switch between AI tools (CLI, IDE, chat), your context normally resets. This framework provides structured state files, handoff protocols, and governance policies so any AI tool can pick up exactly where another left off — no databases, no servers, no subscriptions.

## Step 1: Clone and orient

```bash
git clone https://github.com/devxziki/Hackathon-foundation.git
cd Hackathon-foundation
```

Read these three files first, in order:

1. `docs/pitch.md` — what this project is (30 seconds)
2. `company/workspace/state/progress-snapshot.md` — current status (30 seconds)
3. `company/workspace/handoff/resume-protocol.md` — how to resume work (1 minute)

## Step 2: Understand the layout

```
company/
├── handbook/      Mission, culture, principles, DoD
├── departments/   6 departments with responsibilities
├── roles/         13 role definitions
├── policies/      6 governance policies
├── assets/        Reusable templates and workflows
├── onboarding/    Getting started guides
└── workspace/
    ├── skills/    Skill index and AI model guide
    ├── state/     Current task, last action, progress
    └── handoff/   Context transfer protocols
```

## Step 3: Assign your first task

1. Open `company/assets/templates/task-assignment.md`.
2. Fill in the fields: task name, assigned role, department, objective, acceptance criteria.
3. Save the filled template as the new task description.
4. Update `company/workspace/state/current-task.md` with the task details.
5. Follow `company/assets/workflows/new-task-workflow.md` to execute.

If you are unsure which role to assign, read the role definitions in `company/roles/` to find the best match for your task.

## Step 4: Resume after a break

1. Open the repository in any tool (terminal, VS Code, Cursor, chat).
2. Read `company/workspace/state/last-action.md` — this is the primary resume checkpoint.
3. Read `company/workspace/state/current-task.md` for task context.
4. Follow the 7-step protocol in `company/workspace/handoff/resume-protocol.md`.
5. Continue from the "Next expected action" in `last-action.md`.

## Step 5: Switch AI tools mid-task

To switch from one AI tool to another (e.g., from CLI to IDE, or from ChatGPT to Cursor):

1. Save all work and commit changes.
2. Update `company/workspace/state/last-action.md` with the exact state.
3. Create a context export file using `company/assets/templates/context-export.md` as a guide.
4. Follow `company/workspace/handoff/model-switching.md` if switching AI models.
5. Follow `company/workspace/handoff/cli-to-ide.md` or `company/workspace/handoff/ide-to-cli.md` depending on direction.
6. Open the target tool, pull the repo, read the transfer file, and continue.

## Key files reference

| What you need | File |
|---|---|
| Project pitch | `docs/pitch.md` |
| Project status | `company/workspace/state/progress-snapshot.md` |
| Resume after break | `company/workspace/handoff/resume-protocol.md` |
| Assign a task | `company/assets/templates/task-assignment.md` |
| Execute a new task | `company/assets/workflows/new-task-workflow.md` |
| Self-review checklist | `company/assets/templates/pr-checklist.md` |
| Role onboarding | `company/assets/templates/role-onboarding.md` |
| Context export format | `company/assets/templates/context-export.md` |
| AI model selection | `company/workspace/skills/ai-model-guide.md` |
| All capabilities | `company/workspace/skills/skill-index.md` |
| Policies | `company/policies/` |

## Need help?

If you are stuck:
- Read the relevant section of `company/handbook/` for principles.
- Check `company/roles/` to confirm the right role is assigned.
- The CEO (project owner) is the final decision-maker for all questions.

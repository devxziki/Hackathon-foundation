# Existing Project Setup Guide

## Purpose

How to add the Hackathon Foundation framework to a project that is already in progress — not a fresh repository. If you are starting a new project, use `company/onboarding/quick-start.md` instead.

---

## 1. Where to put it

Place all Hackathon Foundation directories at the **root of your repository**. Never in a subfolder.

```
your-project/
├── company/          ← HERE
├── .memory/          ← HERE
├── .summaries/       ← HERE
├── scripts/          ← HERE
├── resources/        ← HERE
├── .gitignore        ← append to this file
├── src/              ← your existing code
├── package.json      ← your existing config
└── README.md         ← your existing readme
```

**Why the root?** AI tools use the current working directory as their context root. If the framework is in a subfolder, the AI cannot find the state files without explicit path hints. At the root, every `company/workspace/state/last-action.md` reference works immediately.

Do not copy the `docs/` directory unless you want the public documentation. The core framework is: `company/`, `.memory/`, `.summaries/`, `scripts/`, `resources/`.

## 2. What to add to .gitignore

Add these 4 lines to your `.gitignore`:

```
# Hackathon Foundation — transient context files
.session-context.txt
.context-export.md
.context-transfer.md
.model-switch-context.md
```

These files are generated during handoffs and must never be committed. They change every session and contain no permanent value.

Do **not** gitignore `company/`, `.memory/`, or `.summaries/` — these are the framework itself.

## 3. How to write your first progress-snapshot.md

For a project already 50%+ complete, fill in `company/workspace/state/progress-snapshot.md` like this:

```markdown
# Progress Snapshot

## Phase summary

| Phase | Status | Files |
|---|---|---|
| Existing project work | In progress | (your existing file count) |

## Completed components

- (list what your project already has)
- Authentication system
- Database schema
- Frontend components

## Pending components

| Area | Description |
|---|---|
| (list what remains) | (description) |
| Payment integration | Stripe checkout flow |
| User dashboard | Analytics and history views |

## Current phase

Existing project — adopting Hackathon Foundation for AI-assisted development.
```

Do not invent phases. Just describe the real state of your project. The framework adapts to your existing work — it does not replace it.

## 4. How to write your first current-task.md

For a task already in progress (not starting fresh):

```markdown
# Current Task

## Status

- **Phase:** Active development
- **Task:** (what you are working on right now)
- **State:** In progress

## Objective

(describe the current task as it stands)

## What is already done on this task

- (what you have completed so far)
- (what is working)

## What remains

- (what still needs to be done)
- (known issues)

## Blockers

- (anything blocking, or "None")
```

This captures the mid-task state so the AI understands partial progress.

## 5. How to write your first last-action.md

For a developer who just discovered this framework mid-project:

```markdown
# Last Action

## Last executed action

- **Action:** Adopted Hackathon Foundation framework — this is the first session.
- **Timestamp:** (current date/time)

## Last modified file

- **File:** (the last file you modified before adopting the framework)
- **Change:** (what you changed in it)

## Last decision made

- **Decision:** (the most recent technical decision you made)
- **Rationale:** (why you made that decision)

## Next expected action

- **Action:** (the very next thing you were about to do)
- **By whom:** (your role or name)
- **Depends on:** (anything required before this action)

## Continuity notes

This is the first session using Hackathon Foundation. Previous work was done without structured state tracking.
The project already has: (list key existing features).
```

Be honest about the adoption state. The framework does not need a perfect history — it needs an accurate starting point.

## 6. The 10-minute setup checklist

- [ ] Copy `company/`, `.memory/`, `.summaries/`, `scripts/`, `resources/` to your project root
- [ ] Add 4 lines to `.gitignore` (`.session-context.txt`, `.context-export.md`, `.context-transfer.md`, `.model-switch-context.md`)
- [ ] Fill in `company/workspace/state/progress-snapshot.md` with your current project state
- [ ] Fill in `company/workspace/state/current-task.md` with your active task
- [ ] Fill in `company/workspace/state/last-action.md` with your last real action
- [ ] Run `bash scripts/validate.sh` — should pass with only expected stub warnings
- [ ] Run `bash scripts/start-session.sh` — paste output into your AI tool
- [ ] Begin first AI session

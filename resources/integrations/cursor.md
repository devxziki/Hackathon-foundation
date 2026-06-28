# Cursor IDE Integration Guide

## Purpose

How to use the Hackathon Foundation workspace with Cursor IDE for context-aware, continuous AI-assisted development.

---

## Prerequisites

- Cursor IDE installed
- Hackathon Foundation repository cloned locally
- The project root folder opened in Cursor (the folder containing `company/`)

## Step 1: Open project

Open the repository root folder in Cursor:

```
File → Open Folder → /path/to/Hackathon-foundation
```

Cursor uses the opened folder as its workspace root. All `@file` references are relative to this root.

## Step 2: Load context using @file mentions

In Cursor Chat or Composer, reference state files using the `@file` syntax:

```
Read the following files and understand the current state before we begin:

@company/workspace/state/last-action.md
@company/workspace/state/current-task.md
@company/workspace/state/progress-snapshot.md
```

Cursor will load these files into the conversation context. You can also reference policy files and role definitions the same way:

```
@company/policies/execution-policy.md
@company/roles/engineering/frontend-engineer.md
```

## Step 3: .cursorrules — auto-load context

Create `.cursorrules` in the project root. Cursor reads this file automatically on every session and treats it as system-level context.

```markdown
# .cursorrules — Auto-loaded by Cursor for every session

## Required reading — always load these files via @file before any work

@company/workspace/state/last-action.md
@company/workspace/state/current-task.md
@company/workspace/state/progress-snapshot.md

## Session contract

1. Read the 3 state files above before any work.
2. Update company/workspace/state/last-action.md before ending every session.
3. Commit all changes before switching tools.
4. Follow company/policies/execution-policy.md execution lifecycle.
5. Follow company/policies/review-policy.md for self-review before submitting.

## Role

If a role is specified, reference @company/roles/<dept>/<role>.md for your definition.
If no role is specified, ask for the role before proceeding.

## Context adaptation

If context window is limited, prioritize @company/workspace/state/last-action.md — it is the single most important file.
```

Create this file at: `.cursorrules` (project root).

## Step 4: Session loop inside Cursor

```
1. START SESSION
   - Cursor auto-loads .cursorrules
   - Use @file to load the 3 state files into chat
   - Read last-action.md and current-task.md

2. EXECUTE
   - Use Cursor Composer for multi-file edits
   - Use Cursor Chat for questions and code review
   - Follow company/policies/execution-policy.md lifecycle
   - Use company/assets/templates/ for output structure

3. UPDATE STATE via Cursor
   - Edit company/workspace/state/last-action.md using Cursor
   - Edit company/workspace/state/current-task.md if status changed
   - Add to company/workspace/state/task-history.md if task completed
   - Record decisions in .memory/decisions.md

4. COMMIT via Cursor terminal
   - Open integrated terminal (Ctrl+`)
   - git add -A
   - git commit -m "<descriptive message>"

5. END SESSION
   - Write .summaries/session-NNN.md via Cursor
   - Run bash scripts/end-session.sh in the integrated terminal
```

## Step 5: Handoff from Cursor to CLI or another IDE

1. Complete the current unit of work.
2. Update `company/workspace/state/last-action.md` via Cursor.
3. Commit all changes via the Cursor terminal:

```bash
git add -A
git commit -m "WIP: <current state>"
```

4. Run the end-session script:

```bash
bash scripts/end-session.sh
```

5. If switching machines:

```bash
git push origin main
```

6. Open the target tool, pull the repo, and follow its integration guide.

### Handoff from another tool to Cursor

1. Pull latest changes in the Cursor terminal:

```bash
git pull origin main
```

2. Check for transfer files in the file explorer or terminal:

```bash
ls .context-export.md .context-transfer.md .model-switch-context.md 2>/dev/null
```

3. If a transfer file exists, open and read it.
4. Use `@file` to load the state files into chat:

```
@company/workspace/state/last-action.md
@company/workspace/state/current-task.md
```

5. Begin work from the next expected action.

## Tips

- **Composer vs Chat:** Use Cursor Composer for multi-file edits (e.g., implementing a feature across multiple components). Use Cursor Chat for questions, code review, and single-file changes.
- **@file is your friend:** Always use `@file/path` to bring files into context. Do not rely on the AI's memory of what it has seen before.
- **Terminal is always there:** Use the integrated terminal for git operations, running scripts, and quick file checks without leaving Cursor.
- **.cursorrules persistence:** The `.cursorrules` file is loaded automatically — put your most-used context references there so you do not have to type them every session.
- **Session continuity:** Use `@company/workspace/state/last-action.md` as the first file in every chat. It tells the AI exactly where to continue.
- **Free Forever:** All workflows assume free AI models. No paid API configuration is needed or recommended.

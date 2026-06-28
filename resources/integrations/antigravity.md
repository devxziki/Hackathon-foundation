# Antigravity CLI Integration Guide

## Purpose

How to use the Hackathon Foundation workspace with Antigravity CLI for context-aware, continuous AI-assisted development.

---

## Prerequisites

- Antigravity CLI installed
- Hackathon Foundation repository cloned locally
- A compatible AI model configured in Antigravity

## Step 1: Start session

Navigate to the repository root and launch Antigravity:

```bash
cd /path/to/Hackathon-foundation
antigravity
```

Antigravity uses the current working directory as its project root. The repository structure becomes the AI's context.

## Step 2: Load context

Before giving any task instructions, load the state files as context. Antigravity reads context from the working directory, so the files are accessible by path:

```
Read company/workspace/state/last-action.md
Read company/workspace/state/current-task.md
Read company/workspace/state/progress-snapshot.md
```

For a faster setup, run the startup script:

```bash
bash scripts/start-session.sh
```

This prints a ready-to-paste context block to the terminal. Copy it and paste as your first prompt to Antigravity.

### First session (or new user)

Read these additional files once for orientation:

1. `docs/pitch.md` — project overview
2. `company/handbook/mission.md` — why this project exists
3. `company/handbook/engineering-principles.md` — technical standards
4. `company/roles/<department>/<role>.md` — role definition for the assigned role

### Every session

1. `company/workspace/state/last-action.md` — resume checkpoint
2. `company/workspace/state/current-task.md` — active task
3. `company/workspace/state/progress-snapshot.md` — project status

## Step 3: Session loop

Follow this loop for each Antigravity session:

```
1. START SESSION
   - cd to repo root, launch antigravity
   - Load state files (Step 2 above)
   - Read last-action.md and current-task.md

2. EXECUTE
   - Follow company/policies/execution-policy.md lifecycle
   - Use company/assets/templates/ for structure
   - Follow company/policies/review-policy.md for self-review

3. UPDATE STATE
   - Update company/workspace/state/last-action.md
   - Update company/workspace/state/current-task.md if status changed
   - Add to company/workspace/state/task-history.md if task completed
   - Record decisions in .memory/decisions.md

4. COMMIT
   - git add -A
   - git commit -m "<descriptive message>"

5. END SESSION
   - Write .summaries/session-NNN.md
   - Run bash scripts/end-session.sh to verify clean state
```

## Step 4: Handoff from Antigravity to another tool

1. Complete the current unit of work.
2. Update `company/workspace/state/last-action.md` with the exact last action and next expected action.
3. Commit all changes:

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

6. Open the target tool, pull the repo, and follow its integration guide or the Universal guide.

## Step 5: Handoff from another tool to Antigravity

1. Pull latest changes:

```bash
git pull origin main
```

2. Check for transfer files:

```bash
ls .context-export.md .context-transfer.md .model-switch-context.md 2>/dev/null
```

3. If a transfer file exists, read it first.
4. Run the startup script:

```bash
bash scripts/start-session.sh
```

5. Paste the output as your first prompt to Antigravity, or read the state files directly:

```bash
cat company/workspace/state/last-action.md
cat company/workspace/state/current-task.md
```

6. Begin work from the next expected action.

## Model selection

Antigravity supports multiple AI models. Use `company/workspace/skills/ai-model-guide.md` to select the best model for your current task type.

| Task type | Model characteristics to look for |
|---|---|
| Coding | Strong code generation, broad language support |
| Architecture | Deep reasoning, large context window |
| Research | Broad technology knowledge |
| Fast iteration | Low latency, fast generation |
| Documentation | Strong language understanding |

## Tips

- **Session continuity:** Always update `last-action.md` before ending a session. This is the most important file for continuity.
- **Context economy:** Do not load every file into context. Load the state files plus only the files relevant to the current task.
- **New models:** If you switch the AI model configured in Antigravity, follow `company/workspace/handoff/model-switching.md` to transfer context.
- **CLI tip:** Use `bash scripts/start-session.sh` at the start of every session to generate a consistent context block. Use `bash scripts/end-session.sh` at the end to verify a clean handoff.
- **Free Forever:** All workflows assume free AI models. No paid API configuration is needed or recommended.

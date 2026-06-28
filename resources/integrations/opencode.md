# OpenCode Integration Guide

## Purpose

How to use the Hackathon Foundation workspace with OpenCode CLI for context-aware, continuous AI-assisted development.

---

## Prerequisites

- OpenCode CLI installed (`npm install -g @opencode/cli` or your package manager)
- Hackathon Foundation repository cloned locally
- A compatible AI model configured in OpenCode

## Step 1: Point OpenCode at the repository

Start OpenCode from within the repository root:

```bash
cd /path/to/Hackathon-foundation
opencode
```

OpenCode will use the current directory as its workspace. The repository's file structure becomes the AI's context.

## Step 2: Load system context files

When starting a new OpenCode session, load these files as system context in order. This gives the AI the full picture before any work begins.

### First session (or new user)

1. `docs/pitch.md` — project overview (30 seconds)
2. `company/handbook/mission.md` — why this project exists
3. `company/handbook/company-culture.md` — values and principles
4. `company/handbook/engineering-principles.md` — technical standards
5. `company/handbook/repository-philosophy.md` — architectural reasoning
6. `company/handbook/definition-of-done.md` — quality criteria

### Every session

1. `company/workspace/state/last-action.md` — resume checkpoint
2. `company/workspace/state/current-task.md` — active task
3. `company/workspace/state/progress-snapshot.md` — project status

### Task-specific context

- `company/roles/<department>/<role>.md` — role definition for the assigned role
- `company/departments/<department>/README.md` — department overview
- Relevant files from `company/policies/` — governance rules
- `company/assets/templates/` — output templates

## Step 3: Recommended workflow

Follow this loop for each OpenCode session:

```
1. START SESSION
   - OpenCode in repo root
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
```

## Step 4: Handoff from OpenCode to another tool

When you need to switch from OpenCode to a different tool (IDE, chat, etc.):

1. Complete the current unit of work.
2. Commit all changes.
3. Update `company/workspace/state/last-action.md` with the exact last action and next expected action.
4. Create a context export at the project root:

```bash
cp company/assets/templates/context-export.md .context-export.md
# Edit .context-export.md with current session details
```

5. Push to remote if switching machines:

```bash
git push origin main
```

6. Open the target tool, clone or pull the repo, read `.context-export.md`, and follow `company/workspace/handoff/resume-protocol.md`.

## Step 5: Handoff from another tool to OpenCode

When resuming work from another tool in OpenCode:

1. Pull latest changes:

```bash
git pull origin main
```

2. Check for transfer files:

```bash
ls .context-export.md .context-transfer.md .model-switch-context.md 2>/dev/null
```

3. If a transfer file exists, read it first.
4. Read the state files in order:

```bash
cat company/workspace/state/last-action.md
cat company/workspace/state/current-task.md
cat company/workspace/state/progress-snapshot.md
```

5. Begin work from the next expected action.

## Model selection

OpenCode supports multiple AI models. Use `company/workspace/skills/ai-model-guide.md` to select the best model for your current task type.

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
- **New models:** If you switch the AI model configured in OpenCode, follow `company/workspace/handoff/model-switching.md` to transfer context.
- **Free Forever:** All workflows assume free AI models. No paid API configuration is needed or recommended.

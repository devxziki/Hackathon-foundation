# Model Switching — Context Transfer

## Purpose

Define how to switch between different AI models during a project without losing context, decisions, or progress. This enables using the right model for each phase of work.

## When to switch models

Consider switching models when:

- The current model's context window is too small for the current task.
- The current model produces consistently incorrect or low-quality output.
- The task type changes (e.g., moving from architecture to implementation).
- The current model is not available in the current environment.
- A faster model is preferred for rapid iteration.
- A more capable model is needed for complex reasoning.

## Pre-switch: Export context

Before switching to a different model, export the current context:

### Step 1: Record state

Update `.vortex/state/last-action.md` with:

- What was just completed.
- What remains to be done.
- Any decisions made.
- Any files created or modified.
- Any failed approaches attempted.

### Step 2: Save and commit

```
git add -A
git commit -m "WIP: context before model switch — <brief description>"
```

### Step 3: Generate context summary

Create a `.model-switch-context.md` file at the project root containing:

```
# Model Switch Context

## Source model
<model name>

## Target model
<model name>

## Completed work
<what was done>

## Remaining work
<what needs to be done>

## Key decisions
- <decision 1>
- <decision 2>

## Files to read
- <path 1>
- <path 2>

## Files to modify
- <path 1>
- <path 2>

## Known issues
- <issue 1>

## Current state
<git commit hash, branch>
```

## Post-switch: Import context

When beginning work with a new model:

### Step 1: Read the switch context

Read `.model-switch-context.md` for the full picture.

### Step 2: Read state files

```
.vortex/state/last-action.md
.vortex/state/current-task.md
.vortex/state/progress-snapshot.md
```

### Step 3: Read relevant policies

Read the policies that apply to the current task. The new model does not have the previous model's context — it must be provided explicitly.

### Step 4: Acknowledge context

The new model must confirm it has read and understood the context before beginning work.

### Step 5: Begin work

Start from the "Remaining work" or "Next expected action" in the context files.

## Adapting context for different models

Different models may need context presented differently:

| Model characteristic | Adaptation |
|---|---|
| Smaller context window | Provide only the most relevant files. Omit completed work details. |
| Larger context window | Include full history and all relevant files. The model can filter. |
| Code-focused model | Emphasize code files, API contracts, and technical specs. |
| Reasoning-focused model | Emphasize architecture docs, decision records, and constraints. |
| Faster model | Provide concise, direct instructions. Minimize background. |
| Slower, thorough model | Provide complete context. The model will process thoroughly. |

## Clean up

Remove `.model-switch-context.md` after the new model has acknowledged the context.

# New Task Workflow

## Purpose

Step-by-step workflow for starting and executing a brand new task from scratch. Follow this every time a new task begins.

---

## Prerequisites

Before starting, ensure you have:

- A task assignment from the CEO (use `company/assets/templates/task-assignment.md`)
- Read access to the repository
- Your role definition in `company/roles/`

---

## Step 1: Read state

Read the current state files to understand where the project stands:

```
company/workspace/state/current-task.md
company/workspace/state/last-action.md
company/workspace/state/progress-snapshot.md
company/workspace/state/task-history.md
```

If resuming after a break, follow `company/workspace/handoff/resume-protocol.md` first.

## Step 2: Select role

Identify which role is assigned to this task. Read the role definition:

```
company/roles/<department>/<role>.md
```

Confirm that the task matches the role's core responsibilities.

## Step 3: Read handbook context

Read the handbook sections relevant to the task:

- `company/handbook/mission.md` — always
- `company/handbook/company-culture.md` — always
- `company/handbook/engineering-principles.md` — for technical tasks
- `company/handbook/communication.md` — for tasks involving cross-role communication
- `company/handbook/definition-of-done.md` — always

## Step 4: Read relevant policies

Read the policies that apply to this task. At minimum:

- `company/policies/execution-policy.md` — mandatory lifecycle
- `company/policies/communication-policy.md` — reporting and blocker rules
- `company/policies/review-policy.md` — review process

Add policies based on task type (security, code quality, etc.).

## Step 5: Review available assets

Check `company/assets/` for:

- `company/assets/templates/` — output structure templates
- `company/assets/workflows/` — step-by-step workflows

Use the relevant assets. Do not structure output from scratch.

## Step 6: Plan

Write a brief plan before executing:

- Approach — how will you accomplish the task?
- Dependencies — what must exist first?
- Risk assessment — what could go wrong?
- Output structure — what files will you create or modify?

For small tasks, the plan may be a few sentences. Document it in `company/workspace/state/current-task.md`.

## Step 7: Execute

Produce the deliverable following:

- The task assignment acceptance criteria
- The relevant policies
- The available assets
- The execution lifecycle from `company/policies/execution-policy.md`:
  1. Specification — what you are building
  2. Planning — how you will build it
  3. Implementation — build it
  4. Review — check against DoD
  5. Finalization — save, update indexes

## Step 8: Self-review

Before submitting, review your own output against:

- Task assignment acceptance criteria
- Definition of Done (`company/handbook/definition-of-done.md`)
- Relevant policies
- Use `company/assets/templates/pr-checklist.md`

Fix any issues found during self-review.

## Step 9: Update state

After completing the task:

1. Update `company/workspace/state/last-action.md` with the last action taken.
2. Update `company/workspace/state/current-task.md` with new status or mark as complete.
3. If task is complete, add an entry to `company/workspace/state/task-history.md`.
4. If a decision was made during execution, record it in `.memory/decisions.md`.
5. Write a session summary to `.summaries/session-NNN.md`.

## Step 10: Handoff (if applicable)

If the task needs to be handed off to another role, tool, or model:

1. Follow `company/workspace/handoff/model-switching.md` for model switches.
2. Follow `company/workspace/handoff/cli-to-ide.md` or `company/workspace/handoff/ide-to-cli.md` for tool switches.
3. Use `company/assets/templates/context-export.md` as the filled export format.

---

## Quick reference

| Stage | Action | Key files |
|---|---|---|
| 1 | Read state | `state/current-task.md`, `state/last-action.md` |
| 2 | Select role | `roles/<dept>/<role>.md` |
| 3 | Read context | `handbook/mission.md`, `handbook/engineering-principles.md` |
| 4 | Read policies | `policies/execution-policy.md`, `policies/review-policy.md` |
| 5 | Find assets | `assets/templates/`, `assets/workflows/` |
| 6 | Plan | `state/current-task.md` |
| 7 | Execute | task assignment acceptance criteria |
| 8 | Review | `assets/templates/pr-checklist.md` |
| 9 | Update state | `state/last-action.md`, `state/task-history.md` |
| 10 | Handoff | `handoff/` protocols |

# Hello World — Dark Mode Toggle

## Purpose

A minimal end-to-end example showing how Hackathon Foundation guides a single task from assignment to completion. This demonstrates the full workflow: read state, assign task, execute, review, update state, handoff.

## Scenario

**Task:** Add a dark mode toggle to the frontend application.

**Role:** Frontend Engineer (`company/roles/engineering/frontend-engineer.md`)

**Department:** Engineering (`company/departments/engineering/`)

---

## Step 1: State before the task

### current-task.md

```markdown
# Current Task

## Status

- **Phase:** Feature implementation
- **Task:** None assigned
- **State:** Idle — waiting for new task
```

### last-action.md

```markdown
# Last Action

## Last executed action

- **Action:** Deployed v1.0 of the frontend with light theme only
- **Timestamp:** 2026-06-28 09:00

## Next expected action

- **Action:** Receive next feature assignment from CEO
```

### progress-snapshot.md (relevant excerpt)

```
- **Frontend features implemented:** User authentication, Dashboard layout, Data table, Light theme
```

---

## Step 2: Task assignment

The CEO fills out `company/assets/templates/task-assignment.md`:

```markdown
# Task Assignment

## Task Name

Add dark mode toggle to frontend

## Assigned Role

frontend-engineer

## Department

engineering

## Objective

Implement a dark mode toggle button that switches the UI between light and dark themes. The toggle should persist the user's preference across sessions.

## Acceptance Criteria

- [ ] Dark mode toggle button is visible in the top navigation bar
- [ ] Clicking the toggle switches all UI components between light and dark themes
- [ ] Theme preference is saved to localStorage and restored on page load
- [ ] Toggle uses the design system tokens from `company/assets/design-tokens`
- [ ] CSS transitions are smooth between theme switches
- [ ] No jarring flash of unstyled content on page load

## Relevant Policies

- `company/policies/code-quality-policy.md` — maintainability, single responsibility, consistency
- `company/policies/review-policy.md` — 3-stage review process
- `company/policies/execution-policy.md` — mandatory lifecycle

## Relevant Assets

- `company/assets/templates/pr-checklist.md` — self-review before submission
- `company/assets/workflows/new-task-workflow.md` — execution steps

## Deadline

ASAP
```

---

## Step 3: Role reads context

The Frontend Engineer follows `company/assets/workflows/new-task-workflow.md`:

1. **Reads state** — `current-task.md`, `last-action.md`, `progress-snapshot.md`
2. **Reads role definition** — `company/roles/engineering/frontend-engineer.md`
3. **Reads handbook** — `mission.md`, `company-culture.md`, `engineering-principles.md`
4. **Reads policies** — `execution-policy.md`, `code-quality-policy.md`, `review-policy.md`
5. **Reviews assets** — `pr-checklist.md`, `new-task-workflow.md`

---

## Step 4: Execution

The Frontend Engineer implements:

- A `ThemeToggle` React component
- A `useTheme` custom hook for state management
- CSS variables for theme tokens
- localStorage persistence logic
- A theme context provider wrapping the app root

---

## Step 5: State after the task

### current-task.md (updated)

```markdown
# Current Task

## Status

- **Phase:** Feature implementation
- **Task:** Add dark mode toggle to frontend
- **State:** Complete — ready for review
```

### last-action.md (updated)

```markdown
# Last Action

## Last executed action

- **Action:** Implemented dark mode toggle with theme persistence, smooth CSS transitions, and design system token integration
- **Timestamp:** 2026-06-28 10:30

## Last modified file

- **File:** src/components/ThemeToggle.tsx

## Next expected action

- **Action:** Peer review of dark mode implementation
- **By whom:** QA Engineer or Frontend Lead
```

### task-history.md (new entry added)

```markdown
2026-06-28 | Dark mode toggle — frontend implementation | Engineering | Complete
```

### progress-snapshot.md (updated)

```markdown
- **Frontend features implemented:** User authentication, Dashboard layout, Data table, Light theme, Dark mode toggle
```

---

## Step 6: Context export for handoff

If the Frontend Engineer needs to hand off to a reviewer or switch tools, they export context:

```markdown
# Context Export

## Project Summary

Hackathon Foundation — open-source AI workspace continuity framework.

## Current Task

Add dark mode toggle to frontend — implementation complete, awaiting review.

## Last Action

Implemented ThemeToggle component, useTheme hook, CSS variable theme tokens, and localStorage persistence.

## Pending Decisions

- Whether to use CSS variables or CSS-in-JS for theme tokens — settled on CSS variables for runtime switching performance

## Files Changed

- src/components/ThemeToggle.tsx: New toggle button component
- src/hooks/useTheme.ts: New theme state management hook
- src/styles/themes.css: Light and dark CSS variable definitions
- src/context/ThemeContext.tsx: New theme context provider
- src/App.tsx: Wrapped with ThemeProvider

## Constraints

- Must use existing design system tokens
- Free Forever — no paid theme libraries
- No flash of unstyled content on reload

## Next Expected Action

Peer review of the implementation. Review against pr-checklist.md.

## Open Questions

- Should the toggle animate or snap between themes? — snapped to instant for simplicity
```

---

## Key takeaways

| Concept | How it works in this example |
|---|---|
| **State before** | `current-task.md` shows idle, `last-action.md` shows prior deploy |
| **Task assignment** | CEO fills `task-assignment.md` template with acceptance criteria |
| **Role selection** | Frontend Engineer reads role definition, understands scope |
| **Context loading** | Role reads handbook, policies, assets before starting |
| **Execution** | Role follows `new-task-workflow.md`, builds the feature |
| **State after** | `current-task.md`, `last-action.md`, `task-history.md` all updated |
| **Handoff** | `.context-export.md` captures full context for reviewer or next tool |
| **Continuity** | Any AI tool can resume from `last-action.md` |

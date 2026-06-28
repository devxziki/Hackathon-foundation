# Execution Policy

## Purpose

Define the mandatory execution lifecycle for all work performed within the Vortex framework. Every task, regardless of size or department, must follow this lifecycle.

## Rule 1: All execution follows a mandatory lifecycle

Every task must pass through these stages in order:

```
Specification → Planning → Implementation → Review → Finalization
```

### Stage 1: Specification

Before any work begins, the task must be specified in writing. The specification must include:

- **Objective** — What needs to be done and why.
- **Inputs** — All context files, policies, and assets required.
- **Outputs** — The expected deliverables.
- **Constraints** — Any limits on approach, tools, or resources.
- **Definition of Done** — The specific criteria that determine completion.

A task without a written specification must not proceed to planning.

### Stage 2: Planning

Before implementation, the executor must produce a brief plan that includes:

- **Approach** — How the task will be executed.
- **Dependencies** — What must exist before execution can begin.
- **Risk assessment** — What could go wrong and how to mitigate.
- **Resource estimate** — Expected effort, context size, tooling needs.

Planning may be brief (one paragraph) for small tasks. It must be documented for all tasks.

### Stage 3: Implementation

The executor produces the deliverables specified in the specification. During implementation:

- All relevant policies must be followed.
- All relevant assets (templates, skills, workflows) must be used.
- Progress must be self-monitored against the plan.
- Blockers must be reported immediately.

### Stage 4: Review

The output must be reviewed against the Definition of Done before it is considered complete. Review follows the rules in the Review Policy.

### Stage 5: Finalization

Once review is passed, the output is finalized. Finalization includes:

- Saving the output to the correct location.
- Updating relevant indexes, summaries, or cross-references.
- Recording any decisions made during execution.
- Closing the task.

## Rule 2: No stage may be skipped

Every stage must be completed before the next stage begins. It is a violation to:

- Begin implementation without a specification.
- Begin implementation without a plan.
- Submit output without review.
- Consider a task complete without finalization.

The only exception is a task explicitly marked as "expedited" by the CEO, in which case the planning stage may be combined with the specification stage.

## Rule 3: Stages may iterate backward

If at any stage it is discovered that a previous stage was incomplete or incorrect, execution must return to that stage:

```
Implementation → Review → (fails) → Specification (revisit) → Planning → Implementation → Review
```

It is not permitted to "fix forward" by adjusting later stages to compensate for errors in earlier stages.

## Rule 4: Stage transitions must be explicit

Each transition between stages must be explicitly acknowledged:

- Specification → Planning: The executor confirms they understand the specification.
- Planning → Implementation: The CEO approves the plan for non-trivial tasks.
- Implementation → Review: The executor confirms output is ready for review.
- Review → Finalization: The reviewer confirms all criteria are met.

## Rule 5: Delegation does not skip stages

If a task is delegated from one role to another, the receiving role must repeat the Planning stage for their portion. The Specification stage does not need to be repeated, but the receiving role must confirm they understand it.

## Enforcement

Violations of this policy are reported to the CEO. Repeated violations may result in a role's execution authority being restricted.

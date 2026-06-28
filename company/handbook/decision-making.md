# Decision Making

## Purpose

This document defines how engineering decisions are evaluated and prioritized. Consistent decision-making ensures that all roles produce output that aligns with the company's values and principles.

## Decision priority

When evaluating trade-offs between competing concerns, use the following priority order. A higher-priority concern takes precedence over a lower-priority one.

| Priority | Concern | Why |
|---|---|---|
| 1 | Correctness | The output must do what it is supposed to do. Nothing else matters if it is wrong. |
| 2 | Maintainability | The output must be understandable and changeable by others. Most code is read far more often than it is written. |
| 3 | Simplicity | The simplest solution that satisfies correctness and maintainability is almost always the best. Complexity must be justified. |
| 4 | Performance | Performance matters, but only after correctness, maintainability, and simplicity are satisfied. |
| 5 | Optimization | Optimization is the last priority. Never optimize prematurely. Only optimize when there is evidence of a performance problem. |

## Decision-making framework

### Step 1: Understand the problem

Before proposing a solution, ensure the problem is understood:

- What is the task asking for?
- Who is the user?
- What constraints exist (time, tools, budget)?
- What does success look like?

### Step 2: Identify options

List the viable approaches. For each option, consider:

- Does it solve the problem correctly?
- How maintainable is it?
- How simple is it?
- What are the performance characteristics?

### Step 3: Evaluate against priorities

Rank the options using the priority order:

```
Example: Choosing a database

Option A: SQLite
- Correctness: ✅ Strong ACID compliance
- Maintainability: ✅ Zero configuration, file-based
- Simplicity: ✅ No server to manage
- Performance: ⚠️ Moderate, sufficient for hackathon scale
- Optimization: Not needed

Option B: PostgreSQL
- Correctness: ✅ Strong ACID compliance
- Maintainability: ⚠️ Requires server setup and configuration
- Simplicity: ❌ More complex to set up and manage
- Performance: ✅ Excellent
- Optimization: Not needed

Decision: SQLite. It satisfies correctness and maintainability with
superior simplicity. PostgreSQL's performance advantage is not needed
at hackathon scale.
```

### Step 4: Document the decision

Record the decision and the reasoning:

```
Decision: Use SQLite for the project database.

Reasoning:
- Sufficient for hackathon-scale data
- Zero configuration (file-based)
- No server to manage
- Good enough performance

Trade-offs accepted:
- Limited concurrent writes
- No user management or access control
- Not suitable for production-scale deployment

Reviewed by: CEO
Date: 2026-06-28
```

## When to optimize

Optimization has the lowest priority for a reason. Premature optimization adds complexity, reduces maintainability, and often solves problems that do not exist.

### Optimize when:

- There is evidence (benchmarks, logs, user reports) of a performance problem.
- The optimization does not significantly reduce maintainability.
- The optimization is justified by the project's requirements.

### Do not optimize when:

- The code is not yet working correctly.
- There is no evidence of a performance problem.
- The optimization would make the code significantly harder to understand.

## When to escalate

Some decisions should not be made by the AI alone. Escalate to the CEO when:

- The decision has significant architectural impact.
- The decision requires business or product knowledge the AI does not have.
- The options are evenly balanced and a human preference is needed.
- The decision might conflict with the project's stated goals.

## Handling trade-offs

When two concerns conflict, use the priority order to resolve the conflict:

| Conflict | Resolution |
|---|---|
| Simplicity vs. Performance | Simplicity wins unless there is evidence of a performance problem. |
| Maintainability vs. Speed | Maintainability wins. Code exists longer than the current sprint. |
| Correctness vs. Simplicity | Correctness wins. A simple wrong answer is still wrong. |
| Consistency vs. Innovation | Consistency wins for established patterns. Innovation requires justification. |

## Connection to engineering principles

The decision-making priority order is designed to support the engineering principles in [engineering-principles.md](./engineering-principles.md). Correctness supports reliability. Maintainability supports modularity and readability. Simplicity supports the principle of simplicity itself.

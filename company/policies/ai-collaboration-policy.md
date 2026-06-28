# AI Collaboration Policy

## Purpose

Define the rules for how multiple AI systems, tools, and agents collaborate within the Hackathon Foundation framework. These rules ensure consistency and reliability regardless of which AI system is used.

## Rule 1: All AI systems are interchangeable

The framework must work identically with any AI system that can read and write text. No policy, process, or asset may depend on behavior specific to a particular AI model, provider, or tool.

- Policies must not reference model names (Claude, Gemini, DeepSeek, etc.).
- Workflows must not depend on model-specific features.
- Templates must not assume capabilities beyond reading and writing files.

## Rule 2: Context is the only shared state

The only shared state between AI sessions is the content of the repository files:

- Every session begins by reading the current state of relevant files.
- Every session ends by writing changes back to the repository.
- No AI system may assume that another AI system has retained information from a prior session.
- No AI system may store state outside the repository (e.g., in its own memory or configuration).

## Rule 3: Sessions are stateless by default

Every AI session begins with no retained knowledge from prior sessions:

- All context must be provided explicitly through files in the repository.
- An AI must not rely on information from prior sessions that is not recorded in the repository.
- When an AI continues work from another AI, it must re-read the relevant context files.

## Rule 4: Conflict resolution follows a hierarchy

When two AI systems or roles produce conflicting output, resolution follows this hierarchy:

1. **Policy wins over precedent** — If a policy covers the conflict, the policy is the authority.
2. **Handbook wins over opinion** — If no policy exists, the handbook principles decide.
3. **Specification wins over implementation** — If the conflict is between what was specified and what was built, the specification is the authority. Deviations require specification updates.
4. **Early wins over late** — If all else is equal, the earlier output is preserved. The later output must adapt.

## Rule 5: Escalation rules

When conflict cannot be resolved at the role level, the following escalation path applies:

| Level | Who decides | When |
|---|---|---|
| Role level | The two involved roles agree | Conflict is resolvable through discussion |
| Department lead | Lead of the department owning the task | Roles cannot agree |
| Cross-department | Leads of involved departments | Conflict crosses department boundaries |
| CEO | Human CEO | All lower levels exhausted or CEO intervenes |

Escalation must be documented with:

- The conflict description.
- What was tried at each level.
- The final decision and rationale.

## Rule 6: Handoff requires explicit documentation

When a task moves from one AI to another, the handoff must be documented in the repository:

- What was completed.
- What remains to be done.
- What decisions were made.
- What context the receiving AI needs.
- Any known issues or risks.

The receiving AI must acknowledge the handoff before starting work.

## Rule 7: No assumptions about AI identity

A role must not assume that it is the same AI instance that performed prior work. All references to prior work must refer to recorded artifacts (files, commits, decisions), not to "what I did earlier" or "what we discussed."

## Enforcement

Violations of this policy that result in inconsistent output, lost work, or collaboration failure are reported to the CEO. The CEO may require all cross-AI collaboration to be done within a single explicit workflow from the assets directory.

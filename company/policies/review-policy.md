# Review Policy

## Purpose

Define the mandatory review process that all deliverables must pass before they are considered complete. This policy ensures consistent quality across all departments and roles.

## Rule 1: Every deliverable must be reviewed

No deliverable of any type may be submitted or merged without passing through a review. A deliverable is defined as any output that is committed to the repository, including:

- Code changes.
- Documentation.
- Design specifications.
- Configuration files.
- Architecture decisions.
- Test cases and test results.

## Rule 2: Three-stage review process

Every deliverable must pass through three stages before finalization:

```
Self-review → Peer review → Compliance check
```

### Stage 1: Self-review

Before submitting for peer review, the author must review their own deliverable against:

- The task specification — Does it do what was asked?
- The Definition of Done — Are all criteria met?
- The relevant policies — Does it comply?
- Edge cases — Are error states handled?

The author must confirm self-review is complete before proceeding.

### Stage 2: Peer review

A role other than the author reviews the deliverable. The peer review must verify:

- Correctness — The deliverable is technically correct.
- Completeness — All specified requirements are addressed.
- Consistency — The deliverable follows project conventions.
- Policy compliance — Relevant policies are followed.

The reviewer must either approve, request changes, or reject with justification.

### Stage 3: Compliance check

The deliverable is checked against automated and manual compliance rules:

- Policy compliance (relevant policies are followed).
- Format compliance (templates were used correctly).
- Cross-reference validity (links and references are correct).
- Standard compliance (naming, structure, conventions).

## Rule 3: Definition of Done enforcement

The Definition of Done for each task, as specified in the task specification, is the binding quality criteria. A deliverable is not complete until every DoD criterion is satisfied:

- **Must means must** — If the DoD states a criterion as a requirement, it is non-negotiable.
- **Should means verify** — If the DoD states a criterion as a recommendation, the reviewer may accept it with a documented deviation.
- **May means optional** — If the DoD lists an optional criterion, it is not required for approval.

The reviewer is responsible for checking every DoD criterion explicitly.

## Rule 4: Quality gates

A deliverable may not proceed past certain points without meeting quality gates:

| Gate | Location | Requirement |
|---|---|---|
| Pre-merge | Before code is merged | Self-review complete, peer review approved |
| Pre-release | Before release to users | All DoD criteria met, compliance check passed |
| Pre-deployment | Before deployment to production | Pre-release gate passed, Release Validator approved |

Each gate must be explicitly verified. A gate may not be skipped or waived without CEO approval.

## Rule 5: Review response time

Reviews must be completed within the following timeframes:

| Deliverable size | Maximum review time |
|---|---|
| Small (single file, < 50 lines) | 1 session |
| Medium (multiple files, < 200 lines) | 2 sessions |
| Large (significant change, > 200 lines) | 3 sessions |

If the reviewer cannot meet the deadline, they must communicate the expected delay to the author.

## Rule 6: Review quality

A review must be substantive. The following are not acceptable as sole review feedback:

- "Looks good" without further commentary.
- "Approved" without evidence of verification.
- Any feedback that does not reference a specific part of the deliverable.

A review must include specific observations, questions, or requested changes tied to the deliverable content.

## Rule 7: Dispute resolution

If the author disagrees with a review finding:

1. The author may provide a written rebuttal referencing the relevant policy, specification, or DoD.
2. The reviewer may accept the rebuttal or maintain the finding.
3. If the dispute persists, it is escalated to the department lead.
4. If the department lead cannot resolve it, it is escalated to the CEO.

The deliverable may not proceed until the dispute is resolved.

## Enforcement

Violations of this policy (skipping review, insufficient review, ignoring DoD) are reported to the CEO. Deliverables that pass review but are later found to have violated this policy are subject to:
- Reversal of the review decision.
- Required re-review from a different reviewer.
- Mandated process correction before future reviews.

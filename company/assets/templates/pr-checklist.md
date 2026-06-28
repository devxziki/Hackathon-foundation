# Pull Request Checklist

## Purpose

Mandatory checklist for every pull request. Enforces the Definition of Done, Code Quality Policy, and Review Policy. Complete all items before requesting review.

---

## 1. Code works

_Definition of Done — Criterion 1_

- [ ] All specified features are implemented
- [ ] Output matches expected behavior
- [ ] Edge cases are handled
- [ ] Errors are handled gracefully
- [ ] No known regressions
- [ ] Automated tests pass (where applicable)

## 2. Documentation updated

_Definition of Done — Criterion 2_

- [ ] README updated if project changed
- [ ] API documentation matches implementation
- [ ] Architecture decisions recorded (if applicable)
- [ ] Setup/configuration instructions are accurate
- [ ] Any new concepts are explained

## 3. Standards followed

_Definition of Done — Criterion 3 + Code Quality Policy_

- [ ] Naming conventions are consistent with codebase
- [ ] Folder structure follows project patterns
- [ ] Single Responsibility principle applies — no function/module/component does more than one thing
- [ ] Clean architecture — domain logic does not depend on frameworks or external APIs directly
- [ ] Simplicity over optimization — no premature optimization
- [ ] No dead code — no unused imports, variables, functions, or commented-out code
- [ ] Error handling patterns are consistent with the rest of the codebase

## 4. Self-review complete

_Review Policy — Stage 1_

- [ ] I have reviewed my own changes against the task specification
- [ ] All acceptance criteria from the task assignment are met
- [ ] All relevant policies are followed
- [ ] Edge cases are handled

## 5. No obvious bugs

_Definition of Done — Criterion 5_

- [ ] Manual testing confirms basic functionality
- [ ] Error conditions produce appropriate responses
- [ ] No console errors or warnings in development
- [ ] Tests cover the changes (new tests added or existing tests pass)

## 6. Ready for submission

_Definition of Done — Criterion 6_

- [ ] Build or compilation succeeds with no errors
- [ ] No debug code, console.log statements, or TODO comments remain
- [ ] Configuration is appropriate for the target environment
- [ ] Dependencies are documented (if new ones were added)

## Role-specific criteria

_Complete only the section relevant to this PR's role._

### Software Architect

- [ ] Architecture decisions are documented with rationale
- [ ] Trade-offs are explained
- [ ] Component boundaries are clearly defined

### Frontend Engineer

- [ ] Responsive layout works on target devices
- [ ] Accessibility basics covered (keyboard, screen reader labels, color contrast)
- [ ] Loading, empty, and error states are implemented
- [ ] Component follows the design system

### Backend Engineer

- [ ] Input validation is implemented
- [ ] Authentication and authorization are in place
- [ ] Database queries are parameterized
- [ ] Error responses follow API conventions

### QA / Test Engineer

- [ ] Test plan covers all acceptance criteria
- [ ] Test cases include edge cases
- [ ] All tests pass
- [ ] Bugs reported with reproduction steps

### DevOps Engineer

- [ ] CI/CD pipeline is configured
- [ ] Deployment process is documented
- [ ] Environment variables and secrets are configured
- [ ] Build is reproducible

### Documentation / Technical Writer

- [ ] All public APIs are documented
- [ ] Setup guide is tested step by step
- [ ] User guide covers key workflows
- [ ] Architecture is documented

---

## Review request checklist

_Complete before requesting peer review._

- [ ] All items above are checked
- [ ] Changes are committed and pushed
- [ ] PR description includes summary of changes
- [ ] PR description references the task assignment or issue

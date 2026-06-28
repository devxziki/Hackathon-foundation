# Definition of Done

## Purpose

The Definition of Done (DoD) defines the criteria that must be met before a task is considered complete. No output is accepted until all criteria are satisfied.

## Core criteria

A task is complete only when all of the following are true:

### 1. Code works

The implementation functions correctly:

- All specified features are implemented
- The output matches the expected behavior
- Edge cases are handled
- Errors are handled gracefully
- No known regressions

### 2. Documentation updated

Documentation reflects the current state of the code:

- README is updated if the project changed
- API documentation matches the implementation
- Architecture decisions are recorded
- Setup and deployment instructions are accurate
- Any new concepts are explained

### 3. Standards followed

The output complies with all applicable standards:

- Coding rules are followed (language-specific, framework-specific)
- Naming conventions are respected
- Folder structure conventions are followed
- Security rules are applied
- Performance guidelines are considered

### 4. Reviewed

The output has been reviewed:

- Code has been reviewed for correctness
- Architecture decisions have been reviewed for consistency
- Documentation has been reviewed for accuracy
- Any issues found during review have been addressed

### 5. No obvious bugs

The output has been verified:

- Automated tests pass (where applicable)
- Manual testing confirms basic functionality
- Error conditions produce appropriate responses
- No console errors or warnings in development

### 6. Ready for production (or hackathon submission)

The output is in a state that can be used:

- Build or compilation succeeds with no errors
- No debug code, console.log statements, or TODO comments remain
- Configuration is appropriate for the target environment
- Dependencies are documented

## Role-specific criteria

Each role has additional criteria specific to their responsibilities.

### Software Architect

- Architecture decisions are documented with rationale
- Trade-offs are explained
- The architecture is consistent with project goals
- Component boundaries are clearly defined

### Frontend Engineer

- Responsive layout works on target devices
- Accessibility basics are covered (keyboard navigation, screen reader labels, color contrast)
- Loading, empty, and error states are implemented
- Component follows the design system

### Backend Engineer

- Input validation is implemented
- Authentication and authorization are in place
- Database queries are parameterized
- Error responses follow API conventions

### API Engineer

- All endpoints are documented
- Request validation is complete
- Response formats are consistent
- Error codes are documented

### QA Engineer

- Test plan covers all acceptance criteria
- Test cases include edge cases
- All tests pass
- Bugs are reported with reproduction steps

### Security Engineer

- Threat model is documented
- Identified vulnerabilities are fixed or accepted
- Authentication and authorization are verified
- Input validation is verified

### DevOps Engineer

- CI/CD pipeline is configured
- Deployment process is documented
- Environment variables and secrets are configured
- Build is reproducible

### Documentation Engineer

- All public APIs are documented
- Setup guide is tested step by step
- User guide covers key workflows
- Architecture is documented

## Verification checklist

Before marking a task as done, verify each item:

```
[ ] Code works as specified
[ ] Documentation is updated
[ ] Standards are followed
[ ] Output has been reviewed
[ ] No obvious bugs remain
[ ] Ready for target environment
[ ] Role-specific criteria are met
```

## What done does NOT mean

Done does not mean:

- Perfect. Done means meets the standard, not that it is flawless.
- Final. Done means ready for the current phase, not that it will never change.
- Complete forever. Done means complete for this iteration.

## Connection to project lifecycle

The Definition of Done is applied during the Review and Testing stages of the [project-lifecycle.md](./project-lifecycle.md). It is the gate that determines whether output moves from Implementation to Deployment.

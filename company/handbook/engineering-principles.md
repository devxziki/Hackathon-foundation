# Engineering Principles

## Purpose

Engineering principles are the scientific laws of the company. They govern all technical work — from writing a single function to designing a complete system.

## Principles

### Single responsibility

Every component, function, module, and file should have exactly one responsibility. When something has more than one reason to change, it should be split.

- A function does one thing.
- A component renders one logical unit.
- A file defines one concept.
- A role owns one domain.

### Modularity

Systems should be composed of independent, interchangeable modules. Each module can be understood, tested, and changed without understanding the entire system.

- Dependencies between modules should be explicit and minimal.
- Modules communicate through well-defined interfaces.
- A module can be replaced without affecting other modules.

### Maintainability

Code is read far more often than it is written. Every line of code should be written with the understanding that someone else will need to read, understand, and change it.

- Write code that is easy to understand, even if it takes slightly longer to write.
- Name things clearly. A good name eliminates the need for most comments.
- Structure code so that common tasks are obvious and rare tasks are documented.

### Scalability through depth

Systems scale by adding depth, not breadth. The same patterns that work for a small project should work for a large one — they just have more instances of the same pattern.

- Design patterns that work at one scale work at all scales.
- Avoid adding new structural layers when existing layers can be extended.
- Complexity should grow linearly with features, not exponentially.

### Consistency

Consistency is more important than perfection. A consistently applied convention is easier to work with than a mix of individually superior approaches.

- Follow the project's established patterns, even if you know a better way.
- If a pattern needs to change, change it everywhere at once — not gradually.
- Consistency applies to naming, formatting, structure, and behavior.

### Readability

Code is written for humans first and computers second. If code is not readable, it is not maintainable, and if it is not maintainable, it is not done.

- Prefer clear code over clever code.
- Use descriptive names. A function name should describe what it does.
- Keep functions short. If a function does not fit on one screen, it is too long.
- Use comments to explain *why*, not *what*. The code itself should explain *what*.

### Testing mindset

Every piece of code should be written with testing in mind. If code is hard to test, it is probably poorly designed.

- Write tests alongside code, not after.
- Test behavior, not implementation.
- A test should fail for one reason only.
- Tests are documentation. They show how the code is expected to behave.

### Security awareness

Security is not a separate activity. It is embedded in every engineering decision.

- Validate all input, everywhere.
- Never trust user data.
- Follow the principle of least privilege.
- Document security decisions and assumptions.

### Documentation-first

Documentation is a first-class deliverable, not an afterthought. Code without documentation is incomplete.

- Every public API is documented.
- Every architecture decision is recorded.
- Every setup step is explained.
- Documentation is written alongside code and reviewed with the same rigor.

### Simplicity

The simplest solution that works is almost always the best solution. Complexity should be justified, not default.

- Solve the problem at hand, not problems you anticipate but do not have.
- If a solution is hard to explain, it is probably too complex.
- Prefer standard library solutions over custom implementations.
- Remove unused code. Dead code is a liability.

## How to use these principles

These principles are not a checklist to be followed mechanically. They are a framework for making engineering trade-offs:

- When choosing between two approaches, prefer the one that satisfies more principles.
- When a principle cannot be satisfied, document the exception and the reasoning.
- When principles conflict (e.g., simplicity vs. performance), use the priority defined in [decision-making.md](./decision-making.md).

## Connection to policies

These principles inform the specific rules in `company/policies/`. Each policy is a concrete application of one or more of these principles. If a policy contradicts a principle, the policy should be updated.

# Coding Philosophy

## Purpose

This document defines the philosophy that guides all code written under the Hackathon Foundation framework. It applies to every line of code, regardless of programming language, framework, or project type.

## Readable over clever

Code is written for humans first and computers second. The most elegant solution is the one that can be understood at a glance.

- Choose descriptive variable names over short ones: `userCount` not `uc`.
- Write straightforward logic instead of clever one-liners.
- If a solution requires a comment to explain *what* it does, it is not readable enough.
- Comments should explain *why*, not *what*. The code itself should explain *what*.

```python
# Clever (avoid)
x = [v for v in range(100) if all(v % i for i in range(2, int(v**0.5) + 1))]

# Readable (prefer)
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = [n for n in range(100) if is_prime(n)]
```

## Simple over complex

The simplest solution that satisfies the requirements is almost always the best. Complexity is a liability — it is harder to understand, test, and maintain.

- Solve the problem you have, not the one you anticipate.
- Do not add abstractions until they are needed.
- If a function does more than one thing, split it.
- If a class has more than one responsibility, split it.
- Favor standard library solutions over custom implementations.

## Consistency over personal preference

Consistency across the codebase matters more than any individual preference. A uniform codebase is easier to read, review, and maintain.

- Follow the project's established patterns, even if you know a different approach.
- Do not mix styles within the same codebase.
- Use the configuration files (`.editorconfig`, linter configs) to enforce consistency automatically.
- When introducing a new pattern, apply it consistently across all relevant files.

## Reuse over duplication

Duplicated code is a maintenance burden. Every duplication means a bug fix or improvement must be applied in multiple places.

- Extract repeated logic into shared functions or modules.
- Use existing assets and utilities before writing new ones.
- If code is duplicated three times, extract it.
- Prefer composition over inheritance for code reuse.

```python
# Duplication (avoid)
def validate_email(email):
    return "@" in email and "." in email

def validate_email_optional(email):
    if not email:
        return True
    return "@" in email and "." in email

# Reuse (prefer)
def validate_email(email):
    return "@" in email and "." in email

def validate_email_optional(email):
    return True if not email else validate_email(email)
```

## Architecture before implementation

Design the structure before writing the code. The cost of changing an architecture decision during implementation is much higher than changing it during design.

- Define interfaces before implementing them.
- Design data models before writing business logic.
- Plan component trees before writing components.
- Document architecture decisions before starting implementation.

## Principles in practice

### Naming

Names should reveal intent. A reader should understand what something does from its name alone.

- **Variables.** Nouns: `userCount`, `productList`, `isActive`.
- **Functions.** Verbs: `getUser()`, `validateInput()`, `formatDate()`.
- **Classes.** Nouns representing concepts: `User`, `Invoice`, `SessionManager`.
- **Booleans.** Predicates: `isActive`, `hasPermission`, `canEdit`.

### Functions

- Keep functions short. If a function does not fit on one screen, it is too long.
- Each function should have one responsibility.
- A function should have a reasonable number of parameters (3 or fewer is ideal).
- Use default parameter values instead of overloaded functions.

### Error handling

- Handle errors at the appropriate level. Do not catch exceptions you cannot handle.
- Return early from functions when preconditions are not met.
- Use specific error types rather than generic ones.
- Log errors with sufficient context for debugging.

### Testing

- Write tests alongside code.
- Test behavior, not implementation.
- One test should test one thing.
- Name tests to describe the expected behavior: `test_returns_error_when_email_is_invalid`.

## What this means for AI-generated code

AI coding assistants should produce code that:

- Reads naturally, as if written by an experienced engineer.
- Follows the project's established patterns and conventions.
- Uses the same naming conventions as existing code.
- Includes error handling and edge case coverage.
- Is structured with clear separation of concerns.
- Does not include unnecessary abstractions or over-engineering.

## Connection to engineering principles

This coding philosophy is a practical application of the engineering principles in [engineering-principles.md](./engineering-principles.md). Readability supports the Readability principle. Simplicity supports the Simplicity principle. Consistency supports the Consistency principle.

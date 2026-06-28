# Code Quality Policy

## Purpose

Define the standards for code quality that all engineering roles must follow. These rules ensure code is maintainable, consistent, and reliable across the entire codebase.

## Rule 1: Maintainability over cleverness

Code must be written for readability and maintainability first. The primary audience of code is other engineers (human and AI), not the compiler or interpreter.

- Code must be self-explanatory. If the logic is not obvious from reading it, the code must be restructured.
- Complex algorithms must be accompanied by a reference to the algorithm's name or source.
- Deeply nested conditionals must be replaced with guard clauses or early returns.
- Functions that exceed a single screen of content must be decomposed.

## Rule 2: Single Responsibility at all levels

Every unit of code must have exactly one responsibility:

- **Functions** — Do one thing. A function name must accurately describe everything the function does.
- **Modules** — Export one concern. A module should contain code that changes for the same reason.
- **Components** — Render one logical UI unit. A component should not mix data fetching with presentation without clear separation.

If a unit of code can be described using the word "and" (e.g., "this function validates and formats"), it is violating single responsibility.

## Rule 3: Clean architecture boundaries

Dependencies must point inward. Higher-level policy must not depend on lower-level detail.

- Domain logic must not depend on frameworks, databases, or external APIs directly.
- External integrations must be behind interfaces or abstractions defined by the domain.
- Infrastructure concerns (networking, persistence, I/O) must be separated from business logic.

## Rule 4: Simplicity over optimization

Correct and simple code is preferred over optimized but complex code.

- Optimize only when there is a measured performance problem. Premature optimization is not permitted.
- When optimization is required, the non-optimized version must be kept as a comment or in version history with a note explaining why the optimization was necessary.
- A 10% performance gain that doubles code complexity is not acceptable without CEO approval.

## Rule 5: Consistency across the codebase

All code in the project must follow the same conventions regardless of which role wrote it:

- Naming conventions must be consistent within each language (file names, variable names, function names, class names).
- File and folder structure must follow the project's established patterns.
- Error handling patterns must be consistent (same error type usage, same logging approach).
- State management patterns must be consistent within each application layer.

If a convention is not documented, the consistent use of the existing codebase convention is the rule.

## Rule 6: No dead code

Code that is not used must not exist in the codebase.

- Unused variables, imports, functions, and components must be removed.
- Commented-out code must not be committed. Use version control for historical reference.
- Deprecated code must be removed, not commented out. If it must be retained for reference, it must be moved to a clearly marked archive directory.

## Rule 7: Tests are part of the codebase

Test code must follow the same quality standards as production code. Tests are not second-class citizens:

- Tests must be readable and maintainable.
- Test setup must not be duplicated across test files.
- Test assertions must be specific. Avoid asserting against entire objects when a single property is sufficient.
- Tests must not depend on implementation details that are likely to change.

## Enforcement

Code review must verify compliance with this policy before any code is merged. Violations found after merge must be fixed in the next available cycle. Persistent violations may result in the responsible role requiring pre-approval of all code from the System Architect.

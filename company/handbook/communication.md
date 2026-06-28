# Communication

## Purpose

This document defines how AI employees communicate with the CEO (the user) and with each other. Clear, consistent communication prevents misunderstandings and ensures that every session is productive.

## CEO to AI communication

The CEO provides instructions to the AI. These instructions should be:

- **Clear.** State the task explicitly. Do not assume the AI can infer intent.
- **Complete.** Include all necessary context, rules, and references.
- **Concise.** Provide enough information without unnecessary detail.
- **Structured.** Use bullet points, sections, or templates to organize instructions.

### Effective task assignment

```
Task: Implement a user registration endpoint
Role: API Engineer
Context: .context/tech-stack.md, .context/api-guidelines.md
Rules: .rules/typescript.md, .rules/security.md, .rules/testing.md
Skill: .skills/build-api/
Template: .templates/api.md

The endpoint should accept email, password, and name.
Return user ID and token on success.
Return appropriate error codes on validation failure.
```

## AI to CEO communication

The AI responds to the CEO. Responses should follow these standards:

### Clear

State the result directly. Do not bury the answer in unnecessary explanation.

```
The registration endpoint is implemented.
Method: POST /api/auth/register
Status: Implemented, tested, documented.
```

### Concise

Provide enough detail to understand the output, but do not include information the CEO did not ask for.

```
The endpoint validates all inputs:
- Email: must be valid format
- Password: minimum 8 characters, 1 uppercase, 1 number
- Name: required, 1-100 characters

All validation errors return 400 with field-level messages.
```

### Professional

Maintain a professional tone. Use correct terminology. Avoid casual language.

```
I have reviewed the pull request and found two issues:
1. SQL injection vulnerability in the search endpoint
2. Missing error handling for database connection failures
```

### Explain reasoning

When making a technical decision, explain the reasoning. This helps the CEO understand the trade-offs.

```
I chose to use parameterized queries instead of string interpolation
because it prevents SQL injection attacks. This follows the security
rules in .rules/security.md.
```

### Avoid assumptions

Do not assume context that was not provided. If information is missing, ask for it.

```
I need clarification on:
1. Which database are we using for this endpoint?
2. Should the password be hashed with bcrypt or argon2?
3. Is there an existing user model I should extend?
```

### Acknowledge and confirm

Before starting work, confirm understanding of the task.

```
Understood. I will implement the registration endpoint as specified:
- Role: API Engineer
- POST /api/auth/register
- Input: email, password, name
- Output: user ID, token on success
- Rules: TypeScript, security, testing
- Template: API specification

I will start by reading the context files, then implement, test, and document.
```

## AI to AI communication

In this framework, AI employees do not communicate directly with each other. All communication flows through the CEO:

```
Frontend Engineer needs an API
        │
        ▼
CEO assigns Backend Engineer
        │
        ▼
Backend Engineer produces API spec
        │
        ▼
CEO reviews and approves
        │
        ▼
CEO provides spec to Frontend Engineer
```

This ensures the CEO maintains visibility into all decisions and nothing happens without oversight.

## Communication patterns

### Reporting progress

```
Status update:
✅ Registration endpoint implemented
✅ Tests written and passing
✅ Documentation updated
⏳ Login endpoint — in progress
❌ Password reset — blocked by email service decision
```

### Reporting issues

```
Issue: Database connection timeout on high-traffic endpoints
Severity: Medium
Impact: Users experience 5-second delays during peak usage
Suggested fix: Add connection pooling with max 10 concurrent connections
```

### Asking for clarification

```
The component spec mentions "loading state" but does not specify the
visual design. Should I use:
A) A spinner centered in the component
B) A skeleton screen matching the component layout
C) A simple text "Loading..."

Please advise.
```

## Tone guidelines

- **Be professional.** Use correct terminology. Avoid slang.
- **Be direct.** State the important information first.
- **Be specific.** Avoid vague statements like "there was an issue."
- **Be respectful.** Assume good intent.
- **Be honest.** If something is not working, say so. Do not hide problems.

## Conventions

- Use markdown formatting in all communication.
- Use bullet points for lists and `code` for technical terms.
- Use ✅ for completed items, ⏳ for in-progress, ❌ for blocked.
- Prefix code blocks with the language name.

## Connection to company culture

These communication standards support the company values defined in [company-culture.md](./company-culture.md). Clear communication is essential for quality, collaboration, and community.

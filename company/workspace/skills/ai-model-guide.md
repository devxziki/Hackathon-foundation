# AI Model Guide

## Purpose

This guide helps users manually select an appropriate AI model for different types of tasks. It does not automate selection — it provides reasoning about model characteristics so users can make informed choices.

## Selection principles

1. **No single model is best for everything.** Different models have different strengths in reasoning, code generation, speed, and context handling.
2. **Match model strengths to task requirements.** A model that excels at creative writing may not be the best choice for debugging a complex algorithm.
3. **Consider context window.** Longer tasks require models with larger context capacity.
4. **Consider speed.** Rapid iteration benefits from faster models even if they are slightly less capable.
5. **Free Forever constraint.** All model selections must respect the Free Forever policy — no paid models, no pay-per-use APIs.

## Task categories

### Coding

Tasks involving writing, debugging, or refactoring code.

**Recommended model characteristics:**
- Strong code generation training
- Good understanding of multiple languages and frameworks
- Ability to reason about code structure and logic
- Support for common programming languages used in the project

| Task complexity | Look for |
|---|---|
| Simple (single function, small component) | Broad code knowledge, fast response |
| Moderate (multiple files, feature implementation) | Strong code reasoning, moderate context |
| Complex (architecture, refactoring, optimization) | Deep reasoning, large context window |

### Architecture

Tasks involving system design, component structure, data flow, and technology decisions.

**Recommended model characteristics:**
- Strong reasoning and analytical capability
- Understanding of software design principles
- Ability to evaluate trade-offs
- Large context window for system-level thinking

| Task complexity | Look for |
|---|---|
| Component design | Good reasoning, design pattern knowledge |
| System architecture | Deep analytical capability, broad technology knowledge |
| Technology evaluation | Systematic comparison, trade-off analysis |

### Research

Tasks involving exploring new technologies, evaluating tools, or investigating best practices.

**Recommended model characteristics:**
- Broad knowledge of technology landscape
- Ability to synthesize information from multiple sources
- Critical evaluation capability
- Up-to-date training data

| Task type | Look for |
|---|---|
| Technology evaluation | Broad framework/library knowledge |
| Best practice research | Understanding of industry patterns |
| Tool comparison | Systematic analysis capability |

### Fast responses

Tasks requiring quick iteration, exploration, or simple questions.

**Recommended model characteristics:**
- Low latency
- Fast token generation
- Sufficient capability for the task at hand

| Task type | Look for |
|---|---|
| Quick prototyping | Fast generation, acceptable quality |
| Simple questions | Fast, concise responses |
| Exploratory work | Speed enables more iterations |
| Drafting | Acceptable first-pass quality, fast |

### Documentation

Tasks involving writing, editing, or structuring documentation.

**Recommended model characteristics:**
- Strong language understanding and generation
- Ability to organize information clearly
- Consistency in tone and style
- Understanding of technical concepts

### Review

Tasks involving code review, design review, or content review.

**Recommended model characteristics:**
- Strong attention to detail
- Knowledge of best practices and conventions
- Ability to identify edge cases and issues
- Systematic evaluation capability

## Decision workflow

Use this process for manual model selection:

```
1. Identify the task category (coding, architecture, research, etc.)
2. Assess the complexity (simple, moderate, complex)
3. Determine context requirements (small, medium, large)
4. Determine speed requirements (fast, balanced, thorough)
5. Consult the Free Model Catalog in resources/ai/ for current options
6. Select a model whose characteristics match the requirements
```

## Important notes

- **Model capabilities change.** A model that was best for coding six months ago may have been surpassed. Always check current model information in `resources/ai/`.
- **Free models have constraints.** Free tiers may have rate limits, context restrictions, or feature limitations. Check the specific model's current terms.
- **Test before committing.** For complex tasks, test the selected model on a small representative sample before committing to a full session.
- **You are not locked in.** If a model is not performing well for your task, switch to a different model. The framework is designed for model interchangeability.

## See also

- `resources/ai/` — Current Free Model Catalog
- `docs/FREE_MODELS_CATALOG.md` — Detailed model information
- `company/policies/ai-collaboration-policy.md` — Multi-model collaboration rules

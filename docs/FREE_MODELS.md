# Free Models

## Purpose

This document catalogs every free AI model supported by the Hackathon Foundation framework. Each entry describes the model's strengths, weaknesses, best use cases, and recommended engineering roles.

For the directory overview and philosophy, see [AI_DIRECTORY.md](./AI_DIRECTORY.md). For task-based model selection, see [MODEL_SELECTION_GUIDE.md](./MODEL_SELECTION_GUIDE.md).

## Models

### DeepSeek

**Access:** Web chat, API, local download

**Type:** Large language model (Mixture of Experts)

**Overview:** DeepSeek is a strong general-purpose model with particular strength in code generation and reasoning. It performs competitively with much larger models while being more efficient.

**Strengths:**
- Strong code generation across multiple languages
- Excellent reasoning and problem-solving
- Long context window
- Good instruction following
- Available for local execution

**Weaknesses:**
- Can be verbose in responses
- Less broad world knowledge than some larger models
- Multilingual support good but not best-in-class

**Best tasks:**
- Code generation and implementation
- Algorithm design and problem-solving
- Architecture reasoning
- Debugging complex issues

**Recommended roles:**
- Software Architect (architecture reasoning, technology evaluation)
- Backend Engineer (server logic, algorithm implementation)
- Full Stack Engineer (end-to-end feature delivery)
- API Engineer (API design and implementation)

**Example workflow:**
```
Task: Implement a paginated search API endpoint
Context: Project goals, API guidelines, database schema
Rules: TypeScript rules, security rules, testing rules
Skill: build-api
Model: DeepSeek
Outcome: DeepSeek generates well-structured endpoint code
         with input validation, error handling, and tests.
```

---

### Gemini Flash

**Access:** Web chat, API (Google AI Studio, Vertex AI)

**Type:** Large language model

**Overview:** Gemini Flash is Google's fast, efficient model designed for high-volume, low-latency tasks. It offers strong multimodal capabilities and a large context window at no cost.

**Strengths:**
- Very fast response times
- Large context window (1M+ tokens)
- Strong multimodal (image, audio, video understanding)
- Good at structured output (JSON, code)
- Generous free API tier

**Weaknesses:**
- Less creative than some alternatives
- Can be overly cautious on subjective topics
- Code generation quality slightly below top coding-specific models

**Best tasks:**
- Processing large documents or codebases
- Multimodal tasks (analyzing screenshots, diagrams)
- Quick iterations and prototyping
- Tasks requiring very long context

**Recommended roles:**
- Documentation Engineer (processing large codebases for docs)
- QA Engineer (analyzing screenshots, creating test plans from visual specs)
- Project Manager (summarizing long conversations, status reporting)
- Any role needing fast iteration

**Example workflow:**
```
Task: Understand a large existing codebase to write setup documentation
Context: Entire project codebase (pasted as context)
Rules: Documentation rules
Skill: write-documentation
Model: Gemini Flash (for the 1M+ context window)
Outcome: Gemini Flash reads the entire codebase in one pass
         and produces comprehensive setup documentation.
```

---

### Llama (Meta)

**Access:** Local download, cloud hosting (Groq, Together, etc.), web chat

**Type:** Large language model (dense transformer)

**Overview:** Meta's Llama family includes models at multiple sizes (3B, 8B, 70B, 405B). The smaller models run locally on consumer hardware. The larger models compete with the best in class.

**Strengths:**
- Open weights — can be run locally, no API dependency
- Multiple sizes for different resource constraints
- Strong community support and tooling
- Good multilingual capabilities
- Competitive code and reasoning quality

**Weaknesses:**
- Large models (70B+) require significant hardware
- Smaller models (3B, 8B) limited for complex tasks
- Local setup requires technical knowledge
- No official free hosted API (third-party providers available)

**Best tasks:**
- Local development without internet dependency
- Sensitive data that cannot be sent to external APIs
- Tasks matched to model size (small models for simple tasks, large for complex)

**Recommended roles:**
- Security Engineer (code review on local machine, sensitive data)
- Any role when offline or privacy-constrained
- DevOps Engineer (infrastructure scripting, local automation)

**Example workflow:**
```
Task: Review a pull request for security vulnerabilities
Context: PR diff, project security rules
Rules: Security rules, code review rules
Skill: review-code
Model: Llama 70B (run locally)
Outcome: Llama reviews the code locally, identifying
         potential security issues without sending code
         to an external API.
```

---

### MiMo

**Access:** Web chat, API

**Type:** Large language model

**Overview:** MiMo is a capable general-purpose model with a focus on balanced performance across code, reasoning, and creative tasks. It performs well in multilingual contexts and instruction following.

**Strengths:**
- Good balance across coding, reasoning, and creative tasks
- Strong instruction following
- Good multilingual support
- Clear, well-structured responses

**Weaknesses:**
- Not specialized — does not excel as much as domain-specific models
- Less community adoption than some alternatives
- Smaller ecosystem of tools and integrations

**Best tasks:**
- General-purpose development work
- Documentation and explanation
- Project planning and specification
- Creative problem-solving

**Recommended roles:**
- Product Manager (feature specifications, user stories)
- Documentation Engineer (general documentation)
- Project Manager (planning, status reports)
- Any role needing clear, structured communication

**Example workflow:**
```
Task: Write a feature specification for a real-time chat feature
Context: Project goals, design system, user research notes
Rules: Documentation rules
Skill: write-documentation
Model: MiMo
Outcome: MiMo produces a clear, well-structured feature spec
         with user stories, acceptance criteria, and technical notes.
```

---

### Qwen (Alibaba)

**Access:** Web chat, API, local download

**Type:** Large language model

**Overview:** Qwen is Alibaba's family of models with strong multilingual capabilities and competitive performance across code, math, and reasoning tasks. The Qwen2.5 series offers excellent code generation.

**Strengths:**
- Excellent multilingual support (especially Chinese + English)
- Strong code generation and math reasoning
- Multiple model sizes available
- Good long-context handling
- Open-weight versions available

**Weaknesses:**
- Smaller community in Western markets
- Some versions have weaker instruction following
- Creative writing quality varies by size

**Best tasks:**
- Bilingual or multilingual development
- Code generation and algorithm tasks
- Technical documentation in multiple languages
- Math and logic-heavy tasks

**Recommended roles:**
- Backend Engineer (code generation)
- API Engineer (API development)
- Full Stack Engineer (general development)
- Documentation Engineer (multilingual documentation)

**Example workflow:**
```
Task: Build a bilingual (English/Chinese) API endpoint
Context: API guidelines, database schema, multilingual requirements
Rules: TypeScript rules, security rules, testing rules
Skill: build-api
Model: Qwen
Outcome: Qwen generates the endpoint with proper
         bilingual error messages and documentation.
```

---

### Nemotron (NVIDIA)

**Access:** Web chat, API, local download

**Type:** Large language model

**Overview:** Nemotron is NVIDIA's family of models optimized for code generation and technical tasks. It leverages NVIDIA's expertise in GPU-optimized inference for fast performance.

**Strengths:**
- Strong code generation and technical reasoning
- Optimized for fast inference
- Good at structured output formats
- Competitive with top coding models
- Available in multiple sizes

**Weaknesses:**
- Less versatile for creative or general tasks
- Smaller ecosystem than more established models
- Documentation and community resources smaller

**Best tasks:**
- Code generation and review
- Structured data processing
- Technical problem-solving
- Performance-critical tasks requiring fast inference

**Recommended roles:**
- Code Reviewer (structured, thorough code review)
- QA Engineer (test generation, test plan creation)
- Performance Engineer (optimization suggestions)

**Example workflow:**
```
Task: Review a pull request for code quality and correctness
Context: PR diff, coding standards, project rules
Rules: Code review rules, language-specific rules
Skill: review-code
Model: Nemotron
Outcome: Nemotron provides a structured code review with
         specific issues identified, severity levels, and
         concrete fix suggestions.
```

---

### Gemma (Google)

**Access:** Local download, cloud hosting (Kaggle, Hugging Face)

**Type:** Small language model

**Overview:** Gemma is Google's family of lightweight, open models designed for efficient local execution. Gemma models are small enough to run on laptops and mobile devices while maintaining strong performance for their size.

**Strengths:**
- Very small and efficient (2B, 7B, 9B, 27B)
- Runs on consumer hardware (laptops, phones)
- Good performance for size
- Strong safety and alignment
- Easy to fine-tune

**Weaknesses:**
- Smaller models limited in capability
- Not competitive with large models for complex tasks
- Smaller context window than some alternatives
- Less effective for multilingual tasks

**Best tasks:**
- Simple code generation and completion
- Text classification and labeling
- Local prototyping and experimentation
- Tasks requiring privacy (runs entirely on-device)

**Recommended roles:**
- Any role during early prototyping
- Security Engineer (local code analysis)
- DevOps Engineer (local scripting)

**Example workflow:**
```
Task: Generate boilerplate code for a new React component
Context: Component spec from design, project coding style
Rules: React rules, TypeScript rules, Tailwind rules
Skill: build-component
Model: Gemma 9B (runs locally on laptop)
Outcome: Gemma generates the component boilerplate with
         correct imports, props interface, and Tailwind styles.
```

---

### GLM (Zhipu)

**Access:** Web chat, API

**Type:** Large language model

**Overview:** GLM (General Language Model) is developed by Zhipu AI. It offers strong performance in bilingual contexts and has a generous free API tier.

**Strengths:**
- Strong bilingual performance (Chinese + English)
- Good code generation quality
- Competitive reasoning capabilities
- Generous free API access
- Regular updates and improvements

**Weaknesses:**
- Less known outside Chinese markets
- Smaller community contributions
- Documentation primarily in Chinese
- Less third-party tool integration

**Best tasks:**
- Bilingual development projects
- Code generation with Chinese comments or documentation
- General engineering tasks
- Tasks requiring Chinese language support

**Recommended roles:**
- Full Stack Engineer (bilingual projects)
- Backend Engineer (general development)
- Documentation Engineer (bilingual documentation)

**Example workflow:**
```
Task: Build a Chinese-language e-commerce product page
Context: Design spec, product data API, bilingual requirements
Rules: React rules, TypeScript rules, Tailwind rules
Skill: build-component
Model: GLM
Outcome: GLM generates the component with Chinese text
         handling, proper i18n integration, and bilingual
         documentation.
```

---

### Kimi (Moonshot)

**Access:** Web chat, API

**Type:** Large language model

**Overview:** Kimi is developed by Moonshot AI with a focus on long-context understanding. It excels at processing and reasoning over very large documents.

**Strengths:**
- Very long context window (1M+ tokens)
- Strong document understanding and summarization
- Good at extracting information from large texts
- Competitive code generation
- Free web chat with generous usage limits

**Weaknesses:**
- Less known outside Chinese markets
- Smaller developer ecosystem
- API access may be limited in some regions
- Less community-contributed resources

**Best tasks:**
- Processing large codebases
- Document summarization and analysis
- Long-context reasoning
- Codebase-wide refactoring

**Recommended roles:**
- Documentation Engineer (processing large codebases)
- Software Architect (understanding large systems)
- Project Manager (summarizing long project histories)

**Example workflow:**
```
Task: Understand a large monorepo to suggest refactoring
Context: Entire repository structure and key files
Rules: Architecture rules, documentation rules
Skill: review-code
Model: Kimi (for the 1M+ context window)
Outcome: Kimi processes the full codebase, identifies
         duplication and coupling issues, and produces a
         refactoring plan with rationale.
```

---

### Granite (IBM)

**Access:** Local download, cloud hosting (Hugging Face, watsonx)

**Type:** Small to medium language model

**Overview:** Granite is IBM's family of open, permissively licensed models focused on code generation. They are designed for enterprise use but available freely.

**Strengths:**
- Permissive license (Apache 2.0)
- Specialized for code generation
- Efficient and fast
- Good for structured code tasks
- Can run on modest hardware

**Weaknesses:**
- Limited general knowledge
- Smaller model sizes limit complex reasoning
- Less community adoption
- Narrower task range than general models

**Best tasks:**
- Code generation in supported languages
- Code explanation and documentation
- Simple debugging tasks
- Boilerplate and scaffolding

**Recommended roles:**
- Frontend Engineer (component scaffolding)
- Backend Engineer (routine API code)
- Documentation Engineer (code explanation)

**Example workflow:**
```
Task: Generate boilerplate CRUD endpoints for a REST API
Context: Database schema, API guidelines
Rules: TypeScript rules, security rules
Skill: build-api
Model: Granite
Outcome: Granite generates the CRUD endpoints with proper
         routing, validation, and error handling following
         the project's conventions.
```

---

### Mistral (Mistral AI)

**Access:** Web chat (Le Chat), API (La Platforme), local download

**Type:** Large language model

**Overview:** Mistral offers a family of models from small (7B) to large with competitive performance. Their free tier provides generous access through Le Chat and the API.

**Strengths:**
- Strong code generation
- Excellent multilingual support (French, English, many others)
- Efficient models that punch above their weight
- Open-weight models available
- Generous free API tier

**Weaknesses:**
- Largest models require significant resources
- Some versions have inconsistent instruction following
- Smaller ecosystem than OpenAI or Google
- Creative tasks not as strong as specialized models

**Best tasks:**
- Code generation and debugging
- Multilingual development
- Technical documentation
- General engineering tasks

**Recommended roles:**
- Backend Engineer (code generation)
- Full Stack Engineer (general development)
- Documentation Engineer (technical writing)
- API Engineer (API development)

**Example workflow:**
```
Task: Debug a failing API endpoint in a Node.js application
Context: Error logs, endpoint code, database schema
Rules: Debugging rules
Skill: debug
Model: Mistral
Outcome: Mistral analyzes the error logs and code, identifies
         a race condition in the database transaction, and
         suggests a fix with corrected code.
```

---

## Model comparison summary

| Model | Size range | Best for | Access | Roles |
|---|---|---|---|---|
| DeepSeek | Large | Code, reasoning | Web, API, local | Architect, BE, FS |
| Gemini Flash | Large | Long context, speed, multimodal | Web, API | Docs, QA, PM |
| Llama | 3B-405B | Local, privacy | Local, cloud | Security, any |
| MiMo | Large | Balanced, structured output | Web, API | PM, Docs |
| Qwen | 3B-110B | Multilingual, code | Web, API, local | BE, API, Docs |
| Nemotron | Various | Code review, structured | Web, API, local | Reviewer, QA |
| Gemma | 2B-27B | Local, lightweight | Local | Prototyping, security |
| GLM | Large | Bilingual, code | Web, API | FS, Docs |
| Kimi | Large | Long context | Web, API | Docs, Architect |
| Granite | Small-medium | Code boilerplate | Local, cloud | FE, BE, Docs |
| Mistral | 7B-large | Code, multilingual | Web, API, local | BE, FE, Docs |

## Model lifecycle

Models in this directory go through a lifecycle:

1. **Evaluation.** A new free model is identified and evaluated against the selection criteria.
2. **Addition.** If it meets the criteria, an entry is added to this document.
3. **Monitoring.** The model's capabilities and free tier status are monitored.
4. **Update.** Entries are updated as models improve or change.
5. **Archive.** If a model becomes paid or is deprecated, its entry is moved to an archived section.

The directory is reviewed each quarter to ensure accuracy. Community contributions to model entries are welcome.

For the philosophy behind model selection, see [AI_DIRECTORY.md](./AI_DIRECTORY.md). For choosing the right model for your task, see [MODEL_SELECTION_GUIDE.md](./MODEL_SELECTION_GUIDE.md).

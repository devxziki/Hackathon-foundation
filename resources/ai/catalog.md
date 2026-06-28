# Free Model Catalog

## Purpose

Index of free AI models available for use with the Hackathon Foundation framework. Each profile documents the model's strengths, weaknesses, optimal use cases, and recommended engineering roles. All models listed here are freely accessible without paid subscriptions.

## Selection Guide

| If you need... | Choose... | Why |
|---|---|---|
| Best general coding | DeepSeek-Coder-V2 or Qwen2.5-Coder | Strongest code generation and reasoning |
| Long context window | Gemini Flash or Kimi | 1M+ token context, ideal for large codebases |
| Running locally | Llama 3 or Mistral | Permissively licensed, run on consumer hardware |
| Fast prototyping | Gemini Flash or GLM-4 | Low latency, good for rapid iteration |
| Math / logic reasoning | DeepSeek-R1 or QwQ | Chain-of-thought reasoning models |
| Multilingual support | Qwen or GLM | Strong non-English language performance |
| Lightweight / mobile | Gemma or Granite | Small footprint, fast inference |
| Instruction following | Nemotron or Mistral | Strong alignment and chat quality |

## Model Profiles

### DeepSeek-Coder-V2

- **Provider:** DeepSeek (深度求索)
- **Access:** Free via DeepSeek Chat / API (pay-as-you-go, very low cost)
- **Context window:** 128K tokens
- **Strengths:** Top-tier code generation, strong reasoning, 338B MoE architecture, supports 338 programming languages
- **Weaknesses:** Heavy (requires significant compute for full model), API may have rate limits
- **Best for:** Complex coding tasks, multi-file refactoring, algorithm design, system architecture
- **Recommended roles:** Backend Engineer, Full-Stack Engineer, Systems Architect
- **License:** Proprietary (free tier available)

### DeepSeek-R1

- **Provider:** DeepSeek (深度求索)
- **Access:** Free via DeepSeek Chat
- **Context window:** 128K tokens
- **Strengths:** Chain-of-thought reasoning, math, logic, self-verification of outputs
- **Weaknesses:** Slower due to reasoning process, overkill for simple tasks
- **Best for:** Complex problem-solving, mathematical proofs, algorithm design, debugging edge cases
- **Recommended roles:** Research Engineer, Quality Assurance Engineer
- **License:** MIT (model weights), Proprietary (chat interface)

### Gemini Flash

- **Provider:** Google
- **Access:** Free via Google AI Studio (rate-limited)
- **Context window:** 1M tokens
- **Strengths:** Massive context window, multimodal (text, images, audio, video), very low latency, free tier generous
- **Weaknesses:** Sometimes overly cautious, code quality slightly below dedicated code models
- **Best for:** Large codebase analysis, document processing, multimodal tasks, rapid prototyping
- **Recommended roles:** Documentation Engineer, Design Engineer, Frontend Engineer
- **License:** Proprietary (free tier available)

### Llama 3 (3.1 / 3.2)

- **Provider:** Meta
- **Access:** Free download (open weights), free via Hugging Face / Ollama
- **Context window:** 128K tokens
- **Strengths:** Open weights, excellent instruction following, strong general knowledge, run locally via Ollama
- **Weaknesses:** Smaller variants may lack specialized coding ability, requires local setup
- **Best for:** Local development, privacy-sensitive work, general-purpose assistance, offline use
- **Recommended roles:** All roles (generalist), Security Engineer (air-gapped environments)
- **License:** Custom (allowed for commercial use with >700M MAU restrictions)

### Qwen2.5-Coder

- **Provider:** Alibaba Cloud
- **Access:** Free via Hugging Face / API (very low cost)
- **Context window:** 128K tokens
- **Strengths:** Specialized coding model, strong multi-language support, competitive with GPT-4 on coding benchmarks
- **Weaknesses:** Less known in Western markets, API documentation primarily in Chinese
- **Best for:** Code generation, code review, multi-language projects, test writing
- **Recommended roles:** Backend Engineer, QA Engineer
- **License:** Apache 2.0 (open weights)

### Nemotron (4 340B Instruct)

- **Provider:** NVIDIA
- **Access:** Free via Hugging Face, NVIDIA API (free tier)
- **Context window:** 4K tokens (effective), supports 128K extended
- **Strengths:** Strong instruction following, high-quality synthetic data generation, alignment-tuned
- **Weaknesses:** Smaller context window, heavy model
- **Best for:** Instruction-tuned tasks, data generation, structured output, policy writing
- **Recommended roles:** Technical Writer, Policy Engineer, QA Engineer
- **License:** NVIDIA Open Model License (commercial use allowed)

### Gemma 2

- **Provider:** Google
- **Access:** Free download (open weights)
- **Context window:** 8K tokens
- **Strengths:** Lightweight (2B, 9B, 27B), runs on consumer hardware, good performance for size
- **Weaknesses:** Smaller context window, less capable than larger models for complex tasks
- **Best for:** Lightweight tasks, local inference, rapid prototyping, CI/CD automation
- **Recommended roles:** Operations Engineer, Frontend Engineer
- **License:** Gemma Terms (commercial use allowed)

### GLM-4

- **Provider:** Zhipu AI (智谱AI)
- **Access:** Free via Zhipu API (limited free credits)
- **Context window:** 128K tokens
- **Strengths:** Strong Chinese + English bilingual, tool use capabilities, competitive coding performance
- **Weaknesses:** Less known in Western markets, API is China-hosted
- **Best for:** Bilingual projects, tool-use agents, long-document tasks
- **Recommended roles:** Documentation Engineer, Full-Stack Engineer
- **License:** Proprietary (free tier available)

### Kimi (Moonshot)

- **Provider:** Moonshot AI (月之暗面)
- **Access:** Free via Kimi Chat
- **Context window:** 2M tokens (longest available)
- **Strengths:** Ultra-long context (2M tokens), strong document analysis, Chinese + English
- **Weaknesses:** Chat-only (limited API access), primarily designed for document processing
- **Best for:** Analyzing entire codebases, long document processing, compliance review
- **Recommended roles:** QA Engineer, Documentation Engineer, Security Engineer
- **License:** Proprietary (free tier available)

### Granite 3

- **Provider:** IBM
- **Access:** Free download (open weights), free via Hugging Face
- **Context window:** 128K tokens
- **Strengths:** Enterprise-focused, strong on structured data, code + NLP hybrid
- **Weaknesses:** Less capable on creative tasks, smaller community
- **Best for:** Enterprise patterns, structured data tasks, compliance, documentation
- **Recommended roles:** Operations Engineer, Security Engineer, Technical Writer
- **License:** Apache 2.0

### Mistral (7B / Mixtral 8x7B)

- **Provider:** Mistral AI
- **Access:** Free download (open weights), free via Ollama / Hugging Face
- **Context window:** 32K tokens
- **Strengths:** Excellent per-parameter performance, Mixtral MoE is efficient, strong coding + reasoning
- **Weaknesses:** 7B variant limited for complex tasks, Mixtral requires more memory
- **Best for:** Local inference, general-purpose coding, lightweight deployment
- **Recommended roles:** All roles
- **License:** Apache 2.0

### QwQ (Qwen-with-Reasoning)

- **Provider:** Alibaba Cloud
- **Access:** Free via Hugging Face
- **Context window:** 32K tokens
- **Strengths:** Chain-of-thought reasoning similar to DeepSeek-R1, strong math and logic, open weights
- **Weaknesses:** Slower due to reasoning, newer model with less ecosystem support
- **Best for:** Complex reasoning, mathematical problems, logical analysis, debugging
- **Recommended roles:** Research Engineer, QA Engineer
- **License:** Apache 2.0

## Capability Matrix

| Model | Code | Reasoning | Context | Speed | Local | Cost |
|---|---|---|---|---|---|---|
| DeepSeek-Coder-V2 | ★★★★★ | ★★★★☆ | 128K | ★★★★☆ | ✗ | Free-tier / Low API |
| DeepSeek-R1 | ★★★★☆ | ★★★★★ | 128K | ★★☆☆☆ | ✗ | Free |
| Gemini Flash | ★★★★☆ | ★★★★☆ | 1M | ★★★★★ | ✗ | Free-tier |
| Llama 3 | ★★★★☆ | ★★★★☆ | 128K | ★★★★☆ | ✓ | Free |
| Qwen2.5-Coder | ★★★★★ | ★★★★☆ | 128K | ★★★★☆ | ✓ | Free |
| Nemotron | ★★★☆☆ | ★★★★☆ | 4K | ★★★☆☆ | ✓ | Free |
| Gemma 2 | ★★★☆☆ | ★★★☆☆ | 8K | ★★★★★ | ✓ | Free |
| GLM-4 | ★★★★☆ | ★★★★☆ | 128K | ★★★★☆ | ✗ | Free-tier |
| Kimi | ★★★☆☆ | ★★★★☆ | 2M | ★★★☆☆ | ✗ | Free |
| Granite 3 | ★★★☆☆ | ★★★☆☆ | 128K | ★★★★☆ | ✓ | Free |
| Mistral | ★★★★☆ | ★★★★☆ | 32K | ★★★★★ | ✓ | Free |
| QwQ | ★★★★☆ | ★★★★★ | 32K | ★★☆☆☆ | ✓ | Free |

## Model Selection by Task Type

### Coding and Development
1. **DeepSeek-Coder-V2** — best overall code generation
2. **Qwen2.5-Coder** — best open-weights code model
3. **Gemini Flash** — best for large codebase context
4. **Llama 3** — best for local coding

### Code Review and QA
1. **DeepSeek-R1** — best for finding subtle bugs (reasoning)
2. **Qwen2.5-Coder** — best for automated review
3. **Nemotron** — best for structured review checklists

### Documentation and Writing
1. **Gemini Flash** — best for long document processing
2. **Kimi** — best for analyzing existing docs at scale
3. **Llama 3** — best for local writing tasks

### Architecture and Design
1. **DeepSeek-R1** — best for reasoning about trade-offs
2. **DeepSeek-Coder-V2** — best for generating architecture code
3. **Gemini Flash** — best for analyzing existing architecture

### Research and Exploration
1. **DeepSeek-R1** — best deep reasoning
2. **QwQ** — best open-weights reasoning
3. **Mistral** — best lightweight research assistant

## Notes

- All models listed have free tiers as of 2026. Terms may change — verify current pricing before building dependencies.
- "Free" means free to use without payment. Some models require API keys that are free to obtain.
- Local models require a machine with adequate RAM/VRAM. Quantized versions (GGUF, AWQ) are available for most open-weight models.
- Context window sizes are theoretical maximums; effective context may be lower depending on implementation and use case.
- Capability ratings are subjective comparisons based on community benchmarks and practical experience. They are relative, not absolute.

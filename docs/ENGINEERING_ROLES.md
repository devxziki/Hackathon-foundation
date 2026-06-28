# Engineering Roles

## Purpose

This document provides a detailed profile of every engineering role in the Hackathon Foundation company model. Each profile describes the role's purpose, required skills, concrete deliverables, and example work.

For the complementary responsibility definitions — including inputs, outputs, interactions, and applicable rules — see [RESPONSIBILITIES.md](./RESPONSIBILITIES.md).

---

## Software Architect

**Department:** Engineering

### Purpose

Defines the technical direction of the project. Makes decisions about system structure, technology choices, and engineering standards. The Software Architect ensures that the project is built on a solid technical foundation that can support the product requirements.

### Responsibilities

- Design overall system architecture
- Select the technology stack
- Define component boundaries and interfaces
- Document architecture decisions
- Review code for architectural consistency
- Ensure the architecture supports project goals

### Inputs

- Project goals
- Product feature specifications
- Technical constraints (free tools, free hosting, etc.)

### Outputs

- Architecture decision records
- System design documents
- Technology stack decisions
- Component diagrams

### Required Skills

- System design and architecture patterns
- Trade-off analysis (performance vs. simplicity, speed vs. quality)
- Knowledge of free and open-source technology stacks
- Ability to communicate technical decisions clearly
- Familiarity with common architectural patterns (MVC, microservices, serverless, etc.)

### Expected Deliverables

- Architecture decision record (ADR) for each major decision
- System architecture diagram
- Component specification documents
- Technology selection rationale
- API contract templates

### Example Work

```
Project: A hackathon project for a real-time collaborative whiteboard.

Architecture decisions made:
- WebSocket for real-time collaboration (free, built into browser APIs)
- SQLite for persistence (zero-cost, file-based, no server needed)
- Canvas API for rendering (no library dependency)
- Client-side state management with vanilla JavaScript (no framework overhead)

Rationale: Every decision kept the project free to host and zero-dependency,
maximizing hackathon velocity while minimizing infrastructure complexity.
```

---

## Product Manager

**Department:** Management

### Purpose

Defines what to build and why. The Product Manager ensures that every feature delivers value and aligns with the project vision. They translate the CEO's vision into concrete, actionable specifications.

### Responsibilities

- Define feature specifications
- Write user stories
- Prioritize the feature backlog
- Ensure features align with project goals
- Define acceptance criteria
- Communicate product decisions to the team

### Inputs

- Project vision and goals
- User needs and pain points
- Competitive landscape

### Outputs

- Feature specifications
- User stories
- Priority lists
- Acceptance criteria

### Required Skills

- Requirement analysis and specification writing
- User story creation
- Priority management
- Communication across technical and non-technical roles
- Understanding of minimum viable product (MVP) scoping

### Expected Deliverables

- Feature specification documents
- Prioritized backlog
- User story map
- Acceptance criteria checklists
- Feature scope decisions for each hackathon phase

### Example Work

```
Project: A hackathon project for a habit tracking app.

Feature specification: "Habit Streak Tracker"

User story:
"As a user, I want to see my current streak for each habit
so that I stay motivated to maintain consistency."

Acceptance criteria:
1. Each habit card displays the current streak count
2. Streak increases by 1 when habit is completed on consecutive days
3. Streak resets to 0 when a day is missed
4. Longest-ever streak is displayed below current streak
5. Streak data persists across page refreshes

Priority: High (core engagement feature)
Dependencies: User authentication, habit CRUD API
```

---

## Project Manager

**Department:** Management

### Purpose

Tracks progress, manages timelines, and removes blockers. The Project Manager ensures that the team delivers on time by breaking work into manageable tasks, tracking completion, and escalating issues.

### Responsibilities

- Break features into tasks
- Assign tasks to roles
- Track task completion
- Identify and escalate blockers
- Manage the project timeline
- Report status to the CEO
- Update project memory

### Inputs

- Feature priorities from Product Manager
- Task estimates from engineering roles
- Project timeline and deadlines

### Outputs

- Task lists
- Timeline
- Status reports
- Blocker logs

### Required Skills

- Task decomposition
- Time estimation
- Progress tracking
- Communication and escalation
- Familiarity with agile and hackathon workflows

### Expected Deliverables

- Task breakdown for each feature
- Project timeline with milestones
- Daily or per-session status updates
- Blocker log with status and resolution
- Updated `.memory/todos.md` and `.memory/timeline.md`

### Example Work

```
Project: 48-hour hackathon for a recipe sharing app.

Task breakdown for "User recipe submission":
1. Design recipe creation form (UI/UX Designer) — 2 hours
2. Build recipe creation API endpoint (API Engineer) — 3 hours
3. Implement recipe form component (Frontend Engineer) — 3 hours
4. Create recipes database table (Database Engineer) — 1 hour
5. Write form validation logic (Backend Engineer) — 2 hours
6. Test recipe submission flow (QA Engineer) — 1 hour

Timeline: Hours 8-12 of the hackathon
Blockers: None identified. Design is the dependency for frontend work.
```

---

## Frontend Engineer

**Department:** Engineering

### Purpose

Builds the user-facing parts of the application — components, pages, styles, and client-side state management. The Frontend Engineer transforms design specifications into working, interactive interfaces.

### Responsibilities

- Implement UI components from design specifications
- Write clean, idiomatic framework code (React, Vue, Svelte, etc.)
- Manage client-side state and data fetching
- Ensure responsive and accessible UI
- Follow the design system
- Write unit tests for components

### Inputs

- Design specs from UI/UX Designer
- API contracts from API Engineer
- Architecture from Software Architect

### Outputs

- UI components
- Pages and views
- Styles and themes
- Component tests

### Required Skills

- HTML, CSS, JavaScript (or TypeScript)
- Frontend framework (React, Vue, Svelte, or vanilla)
- Responsive design and CSS layout
- Basic accessibility (ARIA, semantic HTML, keyboard navigation)
- API integration (REST or GraphQL)
- Component testing

### Expected Deliverables

- Implemented components matching design specifications
- Responsive layouts for desktop and mobile
- Client-side state and data fetching logic
- Component unit tests
- Integration with backend APIs

### Example Work

```
Project: A hackathon project for a flashcard study app.

Task: Implement the "Study Session" page.

Design calls for:
- A card displayed in the center of the screen
- A "Flip" button that reveals the answer with a 3D flip animation
- "Correct" and "Incorrect" buttons after flipping
- A progress bar showing X of Y cards completed

Implementation plan:
1. Create `StudySession` page component
2. Create `Flashcard` component with flip animation (CSS transform)
3. Implement card data fetching from API endpoint
4. Track session progress in component state
5. Submit results to API on session completion
6. Add responsive layout and keyboard shortcuts
```

---

## Backend Engineer

**Department:** Engineering

### Purpose

Builds the server-side logic — business rules, data processing, authentication, and server-side state management. The Backend Engineer ensures that the application's core logic is correct, secure, and performant.

### Responsibilities

- Implement server-side business logic
- Design and implement data processing pipelines
- Implement authentication and authorization
- Write server-side tests
- Ensure API performance and reliability
- Document API behavior

### Inputs

- Architecture from Software Architect
- Feature specs from Product Manager
- Database schema from Database Engineer

### Outputs

- Server-side code
- Business logic implementations
- Server tests
- API integrations

### Required Skills

- Server-side language (Python, Node.js, Go, Java, etc.)
- REST or GraphQL API development
- Authentication and authorization patterns
- Database querying and ORM usage
- Server-side testing
- Error handling and logging

### Expected Deliverables

- Business logic implementation for each feature
- Authentication and authorization system
- Server-side validation and error handling
- Integration with database layer
- Server-side tests

### Example Work

```
Project: A hackathon project for a group expense splitting app.

Task: Implement the "Split Bill" logic.

Business rules:
1. A user creates a bill with total amount, description, and date
2. The user selects participants and specifies each person's share
3. If total shares don't equal the bill amount, show an error
4. The system creates individual debts for each participant
5. A participant's balance is updated across all bills

Implementation:
- `POST /api/bills` endpoint creates a bill and debt records
- `GET /api/balances/:userId` calculates net balance from all debts
- `POST /api/settle` marks a debt as paid
- Validation ensures shares sum to total before creation
- Each operation is wrapped in a database transaction
```

---

## Full Stack Engineer

**Department:** Engineering

### Purpose

Works across the entire application stack — frontend, backend, and database. The Full Stack Engineer is useful in smaller hackathon teams where a single person handles multiple layers. They produce complete features end to end.

### Responsibilities

- Build features across frontend, backend, and database layers
- Ensure frontend and backend integrate correctly
- Handle data modeling and API design
- Write tests across all layers
- Own feature delivery from start to finish
- Maintain consistency across the stack

### Inputs

- Feature specs from Product Manager
- Design specs from UI/UX Designer
- Architecture from Software Architect

### Outputs

- Complete features (frontend + backend + database)
- Integration tests
- End-to-end feature documentation

### Required Skills

- Frontend development (HTML, CSS, JavaScript, framework)
- Backend development (server-side language, API design)
- Database design and querying
- API integration between frontend and backend
- Testing across all layers
- Understanding of the full request-response lifecycle

### Expected Deliverables

- End-to-end feature implementations
- Database schema changes with migrations
- API endpoints with frontend integration
- Cross-layer tests
- Feature documentation

### Example Work

```
Project: A hackathon project for a bookmarks manager.

Task: Build the "Add Bookmark" feature end to end.

Full stack implementation:

Database layer:
- Create `bookmarks` table (id, url, title, description, tags, created_at)
- Write migration script

Backend layer:
- `POST /api/bookmarks` endpoint
- URL validation and metadata extraction (title, description)
- Tag parsing and storage
- Error handling for duplicate URLs

Frontend layer:
- "Add Bookmark" form with URL input
- Auto-fetch title and description via the API
- Tag input with autocomplete
- Success toast and list refresh on submission

Tests:
- Backend: unit test for URL validation, integration test for endpoint
- Frontend: component test for form submission
- E2E: full flow test from form fill to list update
```

---

## Database Engineer

**Department:** Engineering

### Purpose

Designs and manages the data layer — schema design, migrations, query optimization, and data integrity. The Database Engineer ensures that data is stored efficiently, accessed quickly, and remains consistent.

### Responsibilities

- Design database schema
- Write and manage migrations
- Optimize queries for performance
- Ensure data integrity and consistency
- Document the data model
- Seed development data

### Inputs

- Architecture from Software Architect
- Data requirements from Backend and API Engineers

### Outputs

- Schema definitions
- Migrations
- Seed data scripts
- Query documentation

### Required Skills

- Relational database design (normalization, relationships, indexes)
- SQL query writing and optimization
- Migration management
- Data modeling (entities, relationships, constraints)
- Understanding of NoSQL where appropriate

### Expected Deliverables

- Complete database schema with all tables, relationships, and constraints
- Migration files for version-controlled schema changes
- Seed data scripts for development and testing
- Query performance analysis and optimization
- Entity-relationship diagram

### Example Work

```
Project: A hackathon project for an event RSVP platform.

Schema design for events and attendees:

events
  id            UUID PRIMARY KEY
  title         TEXT NOT NULL
  description   TEXT
  date          TIMESTAMP NOT NULL
  location      TEXT
  capacity      INTEGER
  created_at    TIMESTAMP DEFAULT NOW()

attendees
  id            UUID PRIMARY KEY
  event_id      UUID REFERENCES events(id)
  name          TEXT NOT NULL
  email         TEXT NOT NULL
  status        TEXT CHECK(status IN ('confirmed', 'waitlisted', 'cancelled'))
  created_at    TIMESTAMP DEFAULT NOW()

Indexes:
- attendees(event_id, status) for counting confirmed attendees
- attendees(email) for duplicate prevention

Migration adds a check:
- If attendee count at capacity, new signups go to waitlist
```

---

## API Engineer

**Department:** Engineering

### Purpose

Designs and implements the API layer — endpoints, request/response formats, validation, and integration contracts. The API Engineer creates the contract that frontend and backend code both depend on.

### Responsibilities

- Design API contracts (REST, GraphQL, or other)
- Implement API endpoints
- Validate request data
- Write API integration tests
- Document API specifications
- Version APIs appropriately

### Inputs

- Architecture from Software Architect
- Feature specs from Product Manager
- Schema from Database Engineer

### Outputs

- API endpoints
- API documentation
- Integration tests
- Request/response schemas

### Required Skills

- API design principles (RESTful conventions, GraphQL schema design)
- Request validation and error handling
- API documentation (OpenAPI, GraphQL schema)
- API versioning strategies
- Integration testing
- Authentication and authorization in APIs

### Expected Deliverables

- Complete set of API endpoints for all features
- API specification document (OpenAPI or equivalent)
- Request validation schemas
- Integration test suite
- API error handling and status codes

### Example Work

```
Project: A hackathon project for a todo list application with sharing.

API design for task management:

GET    /api/tasks                — List user's tasks (filter by status, priority)
POST   /api/tasks                — Create a new task
GET    /api/tasks/:id            — Get task details
PUT    /api/tasks/:id            — Update a task
DELETE /api/tasks/:id            — Delete a task
POST   /api/tasks/:id/share      — Share task with another user
GET    /api/tasks/:id/shares     — List users a task is shared with

Response format:
{
  "data": { ... },
  "error": null,
  "meta": { "page": 1, "per_page": 20 }
}

Validation:
- title: required, 1-200 characters
- priority: enum (low, medium, high, urgent)
- due_date: optional ISO 8601 date
- status: enum (pending, in_progress, completed)
```

---

## QA Engineer

**Department:** Testing

### Purpose

Ensures the product meets quality standards. The QA Engineer designs test strategies, writes test cases, and verifies that every feature works correctly before it ships.

### Responsibilities

- Create test plans from feature specifications
- Write and execute manual test cases
- Write automated tests (unit, integration, end-to-end)
- Report bugs with clear reproduction steps
- Verify bug fixes
- Track test coverage

### Inputs

- Feature specs from Product Manager
- Code from engineering roles

### Outputs

- Test plans
- Test cases
- Bug reports
- Test coverage reports

### Required Skills

- Test case design (equivalence partitioning, boundary value analysis)
- Manual testing methodology
- Automated testing (unit, integration, E2E frameworks)
- Bug reporting and tracking
- Understanding of the full application stack
- Regression testing

### Expected Deliverables

- Test plan for each feature
- Manual test case checklist
- Automated test suite
- Bug reports with reproduction steps
- Test coverage summary
- Regression test results

### Example Work

```
Project: A hackathon project for a URL shortener.

Test plan for "Link Redirection" feature:

Functional tests:
1. Short URL redirects to the correct long URL
2. Visiting a non-existent short URL returns 404
3. Custom alias URLs work correctly
4. URL with query parameters redirects with parameters preserved
5. HTTPS URLs redirect correctly
6. Special characters in URLs are handled

Edge cases:
1. Very long URL (2048+ characters)
2. URL with Unicode characters
3. Expired link shows appropriate message
4. Rate limiting after N requests per minute

Automated tests:
- Unit: URL validation logic
- Integration: API endpoint for creation and redirect
- E2E: Browser test of full flow (create → visit → redirect)
```

---

## Security Engineer

**Department:** Engineering

### Purpose

Identifies and mitigates security risks. Ensures the application follows security best practices appropriate for a hackathon project. The Security Engineer prevents common vulnerabilities without adding unnecessary complexity.

### Responsibilities

- Perform threat modeling
- Review code for security vulnerabilities
- Test for common vulnerabilities (XSS, CSRF, SQL injection, etc.)
- Ensure secure authentication and authorization
- Document security decisions
- Verify dependency security

### Inputs

- Architecture from Software Architect
- Code from all engineering roles

### Outputs

- Security review reports
- Vulnerability assessments
- Security recommendations

### Required Skills

- Understanding of OWASP Top 10 vulnerabilities
- Authentication and authorization best practices
- Input validation and sanitization
- Secure coding practices
- Dependency vulnerability scanning
- Security mindset (thinking like an attacker)

### Expected Deliverables

- Security review of the application architecture
- Vulnerability assessment report
- Recommended security fixes
- Authentication and authorization implementation review
- Dependency security audit

### Example Work

```
Project: A hackathon project for a user-generated content platform.

Security review findings:

1. SQL Injection — CRITICAL
   User search endpoint uses string interpolation in SQL query.
   Fix: Use parameterized queries.

2. Stored XSS — HIGH
   Comment content is rendered as innerHTML without sanitization.
   Fix: Use textContent or DOMPurify for sanitization.

3. Missing Rate Limiting — MEDIUM
   Login endpoint has no rate limiting, enabling brute force attacks.
   Fix: Add rate limiting (5 attempts per minute per IP).

4. Insecure Direct Object Reference — MEDIUM
   DELETE /api/posts/:id does not verify post ownership.
   Fix: Add authorization check against authenticated user ID.

5. No CSRF Protection — MEDIUM
   State-changing endpoints accept GET requests.
   Fix: Restrict to POST and validate CSRF token.
```

---

## DevOps Engineer

**Department:** Operations

### Purpose

Ensures the project can be built, deployed, and run reliably. The DevOps Engineer sets up CI/CD pipelines, configures deployment environments, and ensures that the team can ship features quickly and safely.

### Responsibilities

- Set up CI/CD pipelines
- Configure deployment environments
- Manage infrastructure as code
- Set up monitoring and logging
- Ensure reproducible builds
- Document deployment procedures

### Inputs

- Architecture from Software Architect
- Deployment requirements from Project Manager

### Outputs

- CI/CD configurations
- Deployment scripts
- Infrastructure definitions
- Environment documentation

### Required Skills

- CI/CD platform experience (GitHub Actions, GitLab CI, etc.)
- Deployment platform knowledge (Vercel, Netlify, Railway, Fly.io, etc.)
- Basic infrastructure as code (Docker, Docker Compose)
- Environment configuration and secrets management
- Build optimization

### Expected Deliverables

- CI/CD pipeline configuration (build, test, deploy)
- Deployment configuration for all environments
- Docker configuration (if applicable)
- Environment setup documentation
- Build and deployment scripts

### Example Work

```
Project: A hackathon project with a React frontend and Node.js backend.

GitHub Actions CI/CD workflow:

name: CI/CD
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run lint
      - run: npm run test

  deploy:
    if: github.ref == 'refs/heads/main'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run build
      - name: Deploy frontend to Vercel
        uses: amondnet/vercel-action@v20
      - name: Deploy backend to Railway
        run: railway up
```

---

## Documentation Engineer

**Department:** Documentation

### Purpose

Captures and organizes project knowledge. Produces clear, accurate documentation so that users, contributors, and team members can understand and use the project effectively.

### Responsibilities

- Write and maintain README files
- Document API endpoints
- Write setup and deployment guides
- Create user guides
- Document architecture decisions
- Ensure documentation is consistent with the codebase

### Inputs

- Code and architecture from engineering roles
- Feature specs from Product Manager

### Outputs

- README files
- API documentation
- Setup guides
- User guides
- Architecture documentation

### Required Skills

- Technical writing and documentation structure
- Markdown and documentation formats
- Ability to understand and explain technical concepts
- API documentation (OpenAPI, JSDoc, etc.)
- Audience awareness (end users vs. developers vs. contributors)

### Expected Deliverables

- Project README with setup, usage, and architecture sections
- API reference documentation
- Setup and deployment guide
- User guide for the application
- Architecture documentation

### Example Work

```
Project: A hackathon project for a CLI tool that generates project scaffolds.

README structure:

# Project Scaffolder

A CLI tool that generates bootstrapped project structures
for hackathon projects.

## Setup

\`\`\`bash
npm install -g project-scaffolder
\`\`\`

## Usage

\`\`\`bash
scaffold new my-project --template react-express
\`\`\`

## Commands

| Command | Description |
|---------|-------------|
| `new`   | Create a new project from a template |
| `list`  | List available templates |
| `info`  | Show details about a template |

## Architecture

The tool uses a plugin-based template system where
each template is a directory with files and a manifest.json.
```

---

## UI/UX Designer

**Department:** Design

### Purpose

Designs the user experience and visual interface. The UI/UX Designer ensures that the product is usable, accessible, and visually consistent — within the constraints of a hackathon timeline.

### Responsibilities

- Create wireframes and mockups
- Design the component design system
- Define typography, color, spacing, and layout
- Ensure accessibility standards
- Provide design specifications to Frontend Engineer
- Review implemented UI for consistency

### Inputs

- Feature specs from Product Manager
- Project goals from `.context/project-goals.md`

### Outputs

- Wireframes
- Design specs
- Design system documentation
- Component mockups

### Required Skills

- Wireframing and prototyping (Figma, Penpot, or similar)
- Visual design principles (typography, color theory, layout)
- Basic accessibility knowledge (contrast, focus states, semantic structure)
- Design system thinking (reusable components, consistent spacing)
- Communication of design intent to developers

### Expected Deliverables

- Wireframes for each screen or feature
- Visual mockups with color, typography, and spacing
- Component design system (buttons, inputs, cards, modals, etc.)
- Design specifications for Frontend Engineer
- Accessibility review notes

### Example Work

```
Project: A hackathon project for a weather dashboard.

Design deliverables:

1. Wireframes:
   - Dashboard: 3-column layout with current weather, hourly forecast,
     and weekly overview
   - Search: Overlay modal with city autocomplete
   - Settings: Slide-out panel for temperature units and theme

2. Design system:
   - Colors: Blue palette for temperatures, gray for backgrounds
   - Typography: System font stack, 3 heading sizes, 1 body size
   - Components: WeatherCard, ForecastRow, SearchInput, TempToggle
   - Spacing: 4px grid, 16px base unit, 32px section spacing

3. Specs for Frontend:
   - WeatherCard: 280px wide, rounded corners (8px), drop shadow
   - Loading state: skeleton shimmer animation
   - Error state: inline message with retry button
   - Empty state: "Search for a city to get started" illustration
```

---

## Presentation Coach

**Department:** Design

### Purpose

Prepares the hackathon pitch. The Presentation Coach ensures that the team communicates their project effectively during the final presentation — which often determines hackathon success more than the code itself.

### Responsibilities

- Create presentation outline and slide deck
- Write talking points for each slide
- Prepare live demo script
- Coach the presenter on delivery
- Anticipate Q&A questions
- Time the presentation

### Inputs

- Project goals from Product Manager
- Feature demonstrations from engineering roles

### Outputs

- Slide deck
- Talking points
- Demo script
- Q&A preparation

### Required Skills

- Presentation structure and storytelling
- Slide deck creation
- Demo scripting and rehearsal
- Time management for presentations
- Anticipating audience questions
- Public speaking fundamentals

### Expected Deliverables

- Complete slide deck (typically 5-7 slides for a 3-5 minute pitch)
- Speaker notes or talking points for each slide
- Live demo script with timing
- Q&A preparation with likely questions and answers
- Presentation timing breakdown

### Example Work

```
Project: A hackathon project for an AI-powered study planner.

Presentation structure (5 minutes):

Slide 1: Problem (45s)
- "Students waste 40% of study time planning instead of studying"
- Keep it visual: show a cluttered calendar vs. a clean plan

Slide 2: Solution (60s)
- "StudyPlanner uses AI to generate optimized study schedules"
- Show the core interface screenshot

Slide 3: Live Demo (90s)
- "Let me show you how it works in 90 seconds"
- Script: Create account → input subjects → generate plan → adjust
- Backup: Recorded video in case of technical issues

Slide 4: Technical (45s)
- "Built with React, FastAPI, SQLite — all free, all open source"
- Simple architecture diagram

Slide 5: Impact (30s)
- "Beta users saved 3 hours per week on average"
- Future: mobile app, calendar sync, study group features

Q&A prep:
- "How does the AI generate schedules?" → Explain constraint-based algorithm
- "Is my data private?" → Yes, all data stored locally by default
- "How is this different from Google Calendar?" → Purpose-built for studying
```

---

## Role summary

| Role | Department | Core skill |
|---|---|---|
| Software Architect | Engineering | System design and technology decisions |
| Product Manager | Management | Feature definition and prioritization |
| Project Manager | Management | Task tracking and timeline management |
| Frontend Engineer | Engineering | UI components and client-side logic |
| Backend Engineer | Engineering | Server logic and business rules |
| Full Stack Engineer | Engineering | End-to-end feature delivery |
| Database Engineer | Engineering | Schema design and data management |
| API Engineer | Engineering | API contracts and integration |
| QA Engineer | Testing | Test planning and quality assurance |
| Security Engineer | Engineering | Vulnerability assessment and mitigation |
| DevOps Engineer | Operations | CI/CD and deployment |
| Documentation Engineer | Documentation | Technical writing and knowledge capture |
| UI/UX Designer | Design | User experience and visual design |
| Presentation Coach | Design | Pitch preparation and delivery |

## Future expansion

The role set is designed to grow. Potential future roles include:

| Role | Department | Purpose |
|---|---|---|
| Data Engineer | Engineering | Data pipelines and ETL processes |
| ML Engineer | Engineering | Machine learning model development |
| Mobile Engineer | Engineering | Mobile application development |
| Game Developer | Engineering | Game logic and rendering |
| SRE | Operations | Reliability and incident response |
| Technical Writer | Documentation | Advanced documentation and tutorials |
| Community Manager | Community | Issue triage and contribution management |
| Accessibility Specialist | Design | Accessibility auditing and remediation |

New roles are added when the existing set cannot cover a distinct responsibility. The structure of the repository — `.agents/<role>/` — makes adding new roles a matter of creating a new directory.

For the department structure that groups these roles, see [DEPARTMENTS.md](./DEPARTMENTS.md). For the complete responsibility definitions, see [RESPONSIBILITIES.md](./RESPONSIBILITIES.md). For how roles execute work together, see [WORKFLOW_OVERVIEW.md](./WORKFLOW_OVERVIEW.md). For how rules and skills guide role execution, see [RULES.md](./RULES.md) and [SKILLS.md](./SKILLS.md). For recommended AI models per role, see [FREE_MODELS.md](./FREE_MODELS.md) and [MODEL_SELECTION_GUIDE.md](./MODEL_SELECTION_GUIDE.md). For definitions of the terms used in this document, see [GLOSSARY.md](./GLOSSARY.md).

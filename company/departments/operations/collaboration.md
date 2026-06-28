# Operations — Collaboration

## Cross-department workflow

### Engineering → Operations

**Handoff:** Engineering provides build configurations, deployment manifests, health check endpoints, and observability instrumentation.

**Operations returns:** Deployed environments, CI/CD pipelines, monitoring dashboards, and deployment status.

**Check:** Operations verifies that Engineering's configurations produce working deployments in each environment.

### Design → Operations

**Handoff:** Design provides asset requirements, file format specifications, and delivery needs.

**Operations returns:** Asset delivery pipelines, optimized asset serving, and storage solutions.

**Check:** Operations verifies that assets are delivered correctly in each environment.

### Documentation → Operations

**Handoff:** Documentation provides deployment guide requirements and environment documentation structure.

**Operations returns:** Accurate deployment documentation, environment setup guides, and runbooks.

**Check:** Documentation verifies that operational documentation produces working environments.

### Quality Assurance → Operations

**Handoff:** QA provides test environment requirements, CI pipeline needs, and deployment verification criteria.

**Operations returns:** Configured test environments, integrated CI pipelines, and deployment verification tools.

**Check:** QA verifies that test environments match production configuration.

### Research → Operations

**Handoff:** Research provides infrastructure tool evaluations and automation recommendations.

**Operations returns:** Adopted tools integrated into the operational stack, with migration plans.

**Check:** Operations evaluates research recommendations against reliability and cost requirements.

## Escalation path

| Issue | Escalate to |
|---|---|
| Infrastructure outage | Operations Lead |
| Cross-department conflict | Department leads meeting |
| Security incident | CEO |
| Deployment failure | Operations Lead |

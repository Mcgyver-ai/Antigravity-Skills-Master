# Antigravity Agent Skills System

A comprehensive collection of specialized skills to supercharge your Antigravity agent's capabilities. These skills provide structured workflows, best practices, and expert knowledge for common software development tasks.

> **Inspired by** [Superpowers](https://github.com/obra/superpowers) and [Claude Code Plugins](https://github.com/wshobson/agents).

## Overview

The Skills System allows your agent to adopt specific personas and methodologies. Instead of guessing, the agent follows proven patterns for planning, debugging, designing, and optimizing.

## Available Skills

### 🚀 Core Workflow

- **`planning`**: Creates comprehensive, bite-sized implementation plans. Use this *before* writing code to ensure complex tasks are broken down effectively.
- **`writing-plans`**: Write comprehensive implementation plans with bite-sized tasks for engineers.
- **`executing-plans`**: Execute written implementation plans in batches with review checkpoints.
- **`finishing-a-development-branch`**: Complete development work with structured merge/PR/cleanup options.
- **`verification-before-completion`**: Evidence before claims - verify tests/builds before completion claims.
- **`brainstorming`**: Facilitates collaborative design sessions. Use this to refine ideas into specifications before implementation.
- **`creating-skills`** (Gemini Skill Creator): The meta-skill for building new skills. Follows the standardized structure and best practices for extending this system.

### 🏗️ Architecture & Backend

- **`backend-security-coder`**: Expert in secure backend coding practices (Input validation, Auth, API security).
- **`architect-review`**: Master architect for reviewing system designs, code changes, and architectural integrity.
- **`graphql-architect`**: Master GraphQL with federation, performance, and enterprise security.
- **`arm-cortex-expert`**: Senior embedded engineer for ARM Cortex-M firmware and drivers.
- **`blockchain-developer`**: Build Web3 apps, smart contracts, DeFi protocols, and NFT platforms.
- **`database-architect`**: Expert in database design, technology selection, and scalable architectures.
- **`postgresql-table-design`**: Specialist in PostgreSQL schema design, types, and constraints.
- **`payment-integration`**: Integrate Stripe, PayPal, handling checkout, subscriptions, and compliance.
- **`billing-automation`**: Build automated billing systems for recurring payments, invoicing, and subscription lifecycle.
- **`paypal-integration`**: Integrate PayPal payment processing with support for express checkout, subscriptions, and refunds.
- **`stripe-integration`**: Implement Stripe payment processing for robust, PCI-compliant payment flows.

### 🎨 Design & Frontend

- **`frontend-developer`**: React & Next.js expert. Specializes in modern UI, responsive layout, state management, and accessibility.
- **`ui-designer`**: Expert in UI components, layout systems, and visual design implementation.
- **`brand-identity`**: Your guide to brand guidelines, design tokens, and voice.
- **`design-system-architect`**: Expert in design tokens, component libraries, and theming infrastructure.
- **`accessibility-expert`**: WCAG compliance, inclusivity, and assistive technology expert.
- **`mobile-developer`**: Develop React Native, Flutter, or native mobile apps with modern architecture.
- **`unity-developer`**: Build Unity games with optimized C# scripts, efficient rendering, and proper asset management.
- **`javascript-pro`**: Master modern JavaScript with ES6+, async patterns, and Node.js optimization.
- **`typescript-pro`**: Master TypeScript with advanced types, generics, and strict type safety.

### 🛠️ Maintenance & Modernization

- **`code-refactoring`**: Refactor legacy codebases, migrate frameworks, and reduce technical debt.

### 🛡️ Quality Assurance & Security

- **`debugger`**: First responder for any error, test failure, or unexpected behavior.
- **`systematic-debugging`**: Use when encountering bugs - systematic root cause investigation before fixes.
- **`debugging-strategies`**: Master systematic debugging techniques and root cause analysis.
    - Scientific method application (Hypothesize → Experiment → Analyze).
    - Language-specific debugging tools (JS/TS, Python, Go).
    - Advanced techniques like binary search and differential debugging.
- **`error-handling-patterns`**: Best practices for writing resilient code. Covers exception handling, Result types, and error propagation patterns.
- **`code-reviewer`**: Review code for best practices, security, and maintainability.
- **`backend-security-coder`**: Implement secure coding practices for backend systems.
- **`frontend-security-coder`**: Expert in XSS prevention, output sanitization, and secure client-side coding.
- **`mobile-security-coder`**: Expert in secure mobile coding practices, WebView security, and mobile security patterns.
- **`pci-compliance`**: Implement PCI DSS compliance requirements for secure handling of payment card data.
- **`test-automator`**: Master AI-powered test automation, self-healing tests, and comprehensive quality engineering.
- **`e2e-testing-patterns`**: Master E2E testing with Playwright and Cypress for reliable test suites.
- **`test-driven-development`**: Use when implementing features/bugfixes - write tests first, watch fail, then code.
- **`security-auditor`**: Expert in DevSecOps, compliance, and cybersecurity auditing.

### ⚡ Operations & Reliability

- **`cloud-architect`**: Expert cloud architect for AWS/Azure/GCP, IaC, FinOps, and multi-cloud strategies.
- **`devops-troubleshooter`**: Expert incident response, debugging, and observability specialist.
- **`kubernetes-architect`**: Expert K8s architect for cloud-native, GitOps, and platform engineering.
- **`terraform-specialist`**: Expert Terraform/OpenTofu for advanced IaC and state management.
- **`hybrid-cloud-architect`**: Expert hybrid/multi-cloud for AWS/Azure/GCP/OpenStack integration.
- **`network-engineer`**: Expert cloud networking, security, SSL/TLS, and performance optimization.
- **`observability-engineer`**: Expert in production monitoring, logging, tracing, and incident response metrics (SLIs/SLOs).
- **`database-admin`**: Expert in cloud database operations, automation, and reliability.
- **`deployment-engineer`**: Expert in modern CI/CD pipelines, GitOps, and zero-downtime deployments.

### 📣 Communication & Strategy

- **`data-storytelling`**: Transform complex data into compelling narratives and visualizations.
- **`startup-analyst`**: Expert startup business analyst for market sizing, financial modeling, and strategic planning.
- **`competitive-landscape`**: Competitor analysis, differentiation, and Porter's Five Forces frameworks.
- **`market-sizing-analysis`**: TAM/SAM/SOM calculations and market opportunity analysis.
- **`startup-financial-modeling`**: Create 3-5 year financial projections, revenue forecasts, and burn rate analysis.
- **`startup-metrics-framework`**: Track and optimize key startup metrics (CAC, LTV, Burn, Rule of 40).
- **`team-composition-analysis`**: Hiring plans, org charts, compensation, and equity planning.
- **`security-auditor`**: DevSecOps, compliance, and cybersecurity audit expert.
- **`kpi-dashboard-design`**: Design effective KPI dashboards with metrics selection, visualization best practices, and real-time monitoring patterns.
- **`business-analyst`**: Master modern business analysis with AI-powered analytics, predictive models, and strategic recommendations.
- **`docs-architect`**: Create comprehensive technical documentation, manuals, and architecture guides.
- **`api-documenter`**: Master API documentation with OpenAPI 3.1, AI tools, and interactive portals.
- **`tutorial-engineer`**: Create step-by-step tutorials and educational content from code.
- **`content-marketer`**: Elite content strategist for AI-powered creation, SEO, and omnichannel distribution.
- **`seo-content-auditor`**: Analyzes content for quality, E-E-A-T, and SEO best practices.
- **`seo-content-planner`**: Creates comprehensive content outlines and topic clusters for SEO.
- **`seo-content-writer`**: Writes SEO-optimized content based on brief and keywords.
- **`seo-authority-builder`**: Analyzes E-E-A-T signals and builds authority/trust.
- **`seo-cannibalization-detector`**: Detects keyword overlap and cannibalization issues.
- **`seo-content-refresher`**: Identifies outdated content elements and suggests updates.
- **`seo-keyword-strategist`**: Analyzes keyword usage, density, and LSI opportunities.
- **`seo-meta-optimizer`**: Creates optimized meta titles, descriptions, and URLs.
- **`seo-snippet-hunter`**: Formats content for featured snippets and SERP features.
- **`seo-structure-architect`**: Optimizes content structure, headers, schema, and internal links.
- **`customer-support`**: Elite AI-powered support specialist for omnichannel CX and support automation.
- **`sales-automator`**: Create cold email sequences, proposals, and sales scripts.

### 🧪 Workflow & Collaborationgineering

- **`context-manager`**: AI context engineering specialist. Masters vector DBs, RAG, knowledge graphs, and multi-agent context orchestration.
- **`dx-optimizer`**: Improve developer experience, tooling, and async collaboration workflows.

### ⚡ Performance

- **`performance-engineer`**: Optimize applications and infrastructure for speed and scalability.
- **`sql-optimization-patterns`**: Expert in optimizing SQL queries and database performance.
- **`sql-pro`**: Master modern SQL, cloud-native DBs, and advanced query optimization. Use this for:
    - Analyzing `EXPLAIN` plans.
    - Designing efficient indexes.
    - Resolving N+1 query problems.
    - Optimizing database interactions.
- **`database-optimizer`**: Expert in modern database tuning, query optimization, indexing, caching, and scalable architectures.
- **`c-pro`**: Write efficient C code with proper memory management and system calls.
- **`cpp-pro`**: Write idiomatic C++ with modern features, RAII, and STL.
- **`golang-pro`**: Master Go 1.21+ with modern patterns, advanced concurrency, and performance optimization.
- **`rust-pro`**: Master Rust 1.75+ with modern async patterns, advanced type system, and performance.
- **`php-pro`**: Write idiomatic PHP code with generators, iterators, and SPL data structures.
- **`ruby-pro`**: Write idiomatic Ruby code with metaprogramming, Rails patterns, and performance optimization.

## How to Use

Simply ask your agent to use a specific skill. The agent has access to all skills in the `.agent/skills/` directory.

**Examples:**

> "Use the **planning** skill to create an implementation plan for the user authentication feature."

> "I have a slow query. Use the **sql-optimization-patterns** skill to help me analyze it."

> "Review my latest changes using the **code-reviewer** skill."

## Architecture

Each skill is a self-contained directory in `.agent/skills/<skill-name>/` containing:

- **`SKILL.md`**: The core instructions and prompt engineering for the agent.
- **`resources/`** (Optional): JSON files, templates, or markdown guides specific to that skill.
- **`scripts/`** (Optional): Helper scripts for the skill.

## Contributing

To create a new skill, use the **Gemini Skill Creator**:

1.  Ask the agent: "I want to create a new skill for [topic]."
2.  The agent will use the `creating-skills` skill to guide you through generating the directory structure and `SKILL.md`.

## Credits

This system is heavily inspired by and adapted from:
- **[Superpowers](https://github.com/obra/superpowers)** by Jesse Vincent
- **[Claude Code Agents](https://github.com/wshobson/agents)** by wshobson

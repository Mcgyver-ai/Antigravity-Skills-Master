# Antigravity Agent Skills System

A comprehensive collection of specialized skills to supercharge your Antigravity agent's capabilities. These skills provide structured workflows, best practices, and expert knowledge for common software development tasks.

> **Inspired by** [Superpowers](https://github.com/obra/superpowers) and [Claude Code Plugins](https://github.com/wshobson/agents).

## Overview

The Skills System allows your agent to adopt specific personas and methodologies. Instead of guessing, the agent follows proven patterns for planning, debugging, designing, and optimizing.

## Available Skills

### 🚀 Core Workflow

- **`planning`**: Creates comprehensive, bite-sized implementation plans. Use this *before* writing code to ensure complex tasks are broken down effectively.
- **`brainstorming`**: Facilitates collaborative design sessions. Use this to refine ideas into specifications before implementation.
- **`creating-skills`** (Gemini Skill Creator): The meta-skill for building new skills. Follows the standardized structure and best practices for extending this system.

### 🎨 Design & Frontend

- **`brand-identity`**: The single source of truth for your project's design. Contains:
    - **Design Tokens:** Colors, typography, spacing.
    - **Tech Stack:** Preferred libraries and coding standards.
    - **Voice & Tone:** Copywriting guidelines.

### 🐛 Quality & Debugging

- **`debugging-strategies`**: A systematic approach to solving bugs. Includes:
    - Scientific method application (Hypothesize -> Experiment -> Analyze).
    - Language-specific debugging tools (JS/TS, Python, Go).
    - Advanced techniques like binary search and differential debugging.
- **`error-handling-patterns`**: Best practices for writing resilient code. Covers exception handling, Result types, and error propagation patterns.
- **`code-reviewer`**: Acts as a Senior Code Reviewer. Use this to validate completed work against original plans and coding standards.

### ⚡ Performance

- **`sql-optimization-patterns`**: Master SQL performance. Use this for:
    - Analyzing `EXPLAIN` plans.
    - Designing efficient indexes.
    - Resolving N+1 query problems.
    - Optimizing database interactions.

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

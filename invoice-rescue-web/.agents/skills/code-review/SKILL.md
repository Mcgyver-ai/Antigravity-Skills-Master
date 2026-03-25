---
name: Basic Code Review
description: A starting point for AI-assisted code review within this repository.
---

# Basic Code Review Skill

This skill provides the structure for performing a basic code review on modified files.

## Instructions

1. **Understand Context**: Read the provided PR description or commit message (if applicable) to grasp the core goal of the changes.
2. **Review Syntax & Style**: Ensure the code follows consistent formatting conventions without excessive linting errors. Check for standard industry best practices on variable naming.
3. **Verify Safety Rules**: Adhere strictly to `.agents/rules/001-safe-ai-generation.md`. The code must never hardcode secrets, and edge cases must be logged and handled securely.
4. **Identify Logic Flaws**: Search for common logic errors such as off-by-one loops, incorrect conditionals, resource leaks, or missing null checks.
5. **Suggest Meaningful Improvements**: Provide concise, constructive feedback. Propose alternative structural designs only when the existing code is significantly inefficient.

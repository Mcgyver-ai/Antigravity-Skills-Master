# Workspace Directory

This directory contains guidelines, templates, and examples for the Builder Agent workflow.

## Best way to use this in your workflow

Use two layers:

**Layer 1 — Permanent skill**
Save the long Builder Agent Skill (`skills/builder-agent.md`) as the agent’s standing instruction.

**Layer 2 — Per-task prompt**
For each new task, send the Standard Request Template (`templates/intake-template.md`) or Master Builder Prompt (`templates/master-builder-prompt.md`) with the actual project details.

That combination works well because the guidance supports:
 strong task framing,
 explicit context,
 structured outputs,
 and chained subtask execution for harder work.

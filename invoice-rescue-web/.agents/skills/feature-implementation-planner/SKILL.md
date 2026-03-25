---
name: Feature Implementation Planner
description: Translates vague product or feature requests into a safe, structured implementation plan. Use this firmly whenever the user asks to add a new feature, plan a new page or flow, integrate auth/CRUD/dashboards, or turn vague ideas into concrete steps (e.g., "add a user profile" or "build a checkout"). Do NOT write any code before generating this plan.
---
# Feature Implementation Planner

**Purpose**: Transforms ambiguous feature requests into concrete, ordered implementation steps. By inspecting the repository first, it prevents hallucinated code and structural misalignment, guiding both the agent and the beginner developer on a safe path forward.

## When to use this skill

- When the user asks to "build a new feature," "add a page," "create a component," or "integrate" something new.
- When turning vague product ideas (e.g., "I want a user dashboard" or "let users upload avatars") into technical steps.
- When the path to implementation spans multiple files, touches databases, or carries architectural risk.

## When NOT to use this skill

- When the user provides an exact, granular implementation plan and explicitly says "Start coding."
- When fixing an isolated bug, typo, or specific style issue in a single file.
- When performing a routine code review or analyzing test failures.

## Execution Steps

### 1. Inspect the Repository

Before writing a single line of your plan, you MUST inspect the current state of the repository:

- Check `package.json`, `pyproject.toml`, or relevant manifests to identify the exact stack (React, Next.js, Django, Postgres, etc.).
- Inspect the file system structure (e.g., `src/app`, `src/components`, `lib/`, `api/`) to understand the architecture.
- Identify existing styling choices (e.g., Tailwind), component libraries (e.g., shadcn/ui), and state management.
**Do not assume any frameworks, folder names, or patterns without explicit evidence from the repository.**

### 2. Identify Missing Context

Review the user's initial request. Are there critical missing details?

- **Data**: Does this need new database tables or fields?
- **UI/UX**: Are there specific form fields, validation states, or loading states?
- **Auth**: Does this feature require the user to be logged in? Does it trigger role-based access control?
If critical details are missing, explicitly list your assumptions or prompt the user to clarify before finalizing the plan.

### 3. Draft the Implementation Plan

Break the work down into small, safe, ordered steps separating concerns. Use the following structured outline:

#### Step 1: Data & Auth (Backend/Schemas)

- Define what data models need to be created or updated.
- Identify what API endpoints, server actions, or backend logic are needed.

#### Step 2: Core Logic & Services

- Define where business logic, data formatting, or external API fetching will live.

#### Step 3: UI & Components (Frontend)

- Identify existing UI components that can be reused.
- Define new components that need to be created (e.g., `UserProfileForm`, `MetricCard`).

#### Step 4: Integration & Routing

- Define how the UI connects to the Data layer.
- Specify exact file paths to be created or modified based on the repo's existing structure.

#### Step 5: Validation & Edge Cases

- Define error states, loading spinners, and edge cases that need handling.
- Suggest what UI or integration tests should be added.

### 4. Constraints & Safety Checks

- **Preserve Architecture**: Do not recommend broad rewrites unless fundamentally necessary. Place new files exactly where existing conventions dictate.
- **Do not invent APIs**: Use the existing authentication and database clients discovered in Step 1.
- **Prefer Incremental Changes**: Architect the plan so that each step can be committed individually without breaking the app.

## Output Expectations

Present the final plan to the user in a readable markdown format without generating raw implementation code yet. End your output by asking the user: "Does this implementation plan align with your vision? If so, we can begin executing Step 1."

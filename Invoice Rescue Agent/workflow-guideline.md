# Workflow Guidelines

## Operating Flow

### Step 1: Frame the task

The agent should first identify:
what is being built
why it matters
what constraints exist
what output is expected

This follows the prompt guide’s core structure: instruction + context + input + output indicator.

### Step 2: Reduce ambiguity

The agent should rewrite the task internally into precise language:
 vague: “help me make this app”
 precise: “produce a phased production-readiness plan for this app using the current stack and listed blockers”

That matches the guide’s emphasis on being specific and direct, not imprecise.

### Step 3: Split big work into chained tasks

For anything substantial, the builder agent should not try to do everything in one pass. It should split work like this:
Understand the request
Define scope
Design structure
Produce implementation plan
Generate detailed execution prompt
Add validation and edge cases

That is directly aligned with prompt chaining for reliability, transparency, and controllability.

### Step 4: Carry forward only relevant context

Do not overload later steps with everything. Pass forward only:
confirmed requirements
selected architecture
accepted constraints
current subtask result

This is the practical side of context engineering: shape the context window intentionally, include relevant context, and filter noise.

### Step 5: Force structured outputs

Every response should have a fixed form. Examples:
phased plan
implementation checklist
architecture blocks
bug triage table
builder prompt
definition of done

The guide explicitly notes that examples and structured formatting improve output reliability.

## Best-Practice Rules for Your Workflow

These are the practical rules I recommend you enforce in every builder prompt:

### Prompt rules

- Put the main instruction first.
- Use separators like `###`.
- Ask for one output format only.
- State exact deliverables.
- Give examples where structure matters.
- Say what to produce, not only what to avoid.

### Workflow rules

- Start with the simplest useful version.
- Break complex work into smaller prompts.
- Reuse prior outputs as inputs to the next step.
- Keep assumptions explicit.
- Review each stage before moving on.

### Context rules

- Include only relevant project facts.
- Include stack, constraints, current state, and goal.
- Exclude random history and unrelated ideas.
- Treat context design as part of the build system, not an afterthought.

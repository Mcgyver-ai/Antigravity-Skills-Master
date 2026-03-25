---
name: pilot-client-onboarding-sops
description: Use this skill whenever the user is onboarding a pilot client, setting up a service delivery workflow, creating onboarding materials, standardizing weekly operations, or turning a manual service into repeatable SOPs. This skill is especially relevant for service businesses in early validation stages, including manual-first offers such as invoice follow-up, admin support, reporting, or operational assistance. Trigger even when the user does not explicitly say “SOP” if they are asking how to onboard clients, what information to collect, how to deliver the service consistently, how to structure weekly service work, or how to reduce chaos during pilot delivery.
---

# Pilot Client Onboarding and Service Delivery SOPs

## Purpose

Use this skill to turn an early-stage service into a **clear, repeatable operating process**.

This skill is for the phase where the service is already defined well enough to test with real clients, but delivery still needs structure. The goal is to help the user onboard pilot clients cleanly, collect the right information, run the service consistently, and document the service in a way that supports future automation or scale.

Prioritize **clarity, repeatability, and low operational friction** over sophistication.

---

## When to use this skill

Use this skill when the user wants to:

- onboard a new pilot client
- define what information to collect from a client
- create an intake checklist or onboarding checklist
- set up a recurring service workflow
- create weekly operating steps
- standardize service delivery
- write SOPs for a manual-first service
- define escalation rules or exception handling
- prepare client-facing setup or handover documents
- reduce chaos in delivery before building software
- convert a rough service idea into repeatable operational steps

This skill is especially useful when the user has already defined the offer and now needs help **running it consistently**.

---

## When not to use this skill

Do not use this skill when the user primarily needs:

- software architecture
- product UI/UX design
- code implementation
- debugging
- performance optimization
- legal or regulatory advice
- debt-collection compliance guidance
- a SaaS specification
- generic brainstorming with no service workflow involved

If the user is still unclear on the offer itself, the target customer, or what the service actually does, use a planning-oriented skill first.

---

## Required inputs

Collect or infer the following before writing SOPs:

1. **Service name**
2. **Who the service is for**
3. **Core promise / outcome**
4. **What the service includes**
5. **What the client must provide**
6. **What the operator must do each week**
7. **What counts as success**
8. **What situations require escalation or manual judgment**

If some of this is missing, do not invent it silently. State what is known, what is missing, and proceed with the minimum reasonable assumptions only when necessary.

---

## Optional inputs

Use these if available:

- offer document
- workflow notes
- tracker structure
- reminder stages
- sample client data
- example reports
- email/message templates
- pilot feedback notes
- delivery constraints
- pricing/package notes
- existing onboarding docs

---

## Core operating principles

### 1. Keep the service manual-first

Do not over-engineer the process. The SOP should support a service that can be delivered **today**, even without custom software.

### 2. Reduce ambiguity

A good SOP should make it obvious:

- what happens first
- what information is needed
- what gets updated
- what gets sent
- what gets escalated
- what gets reported

### 3. Separate client-facing steps from internal steps

Always distinguish:

- what the client sees or provides
- what the operator does internally
- what must be logged or tracked

### 4. Prefer checklists over vague advice

Write operational steps that someone can actually follow.

### 5. Preserve human judgment where tone, relationships, or edge cases matter

Do not force sensitive cases into rigid automation.

### 6. Design for reuse

Create SOPs that can be reused for multiple clients with minimal changes.

---

## Default workflow

When this skill is triggered, follow this sequence.

### Step 1: Clarify the service scope

Identify:

- the service outcome
- the service boundaries
- what is included
- what is excluded
- the pilot delivery model
- the delivery cadence

If the scope is fuzzy, tighten it before writing SOPs.

### Step 2: Identify onboarding requirements

Determine what the client must provide before service can begin.

Typical categories:

- business contact details
- billing or invoicing contact
- invoice data source
- invoice fields required
- follow-up preferences
- escalation preferences
- reporting preferences
- access or permissions needed
- preferred communication channel

### Step 3: Structure the onboarding stages

Default onboarding stages:

1. **Pilot fit check**
   - confirm the client matches the service
   - confirm the problem is real and current
   - confirm they are willing to follow the process

2. **Intake and data collection**
   - request required data
   - validate completeness
   - identify gaps or inconsistencies

3. **Tracker setup**
   - organize the working tracker
   - define invoice stages
   - define update ownership
   - define status fields

4. **Reminder and escalation setup**
   - define reminder stages
   - define message tone
   - define when manual review is required

5. **Communication setup**
   - define who receives updates
   - define reporting cadence
   - define approval requirements if any

6. **Pilot launch**
   - confirm start date
   - confirm first active batch of invoices
   - confirm first reporting date

7. **Feedback loop**
   - collect friction points
   - capture repeated questions
   - refine the SOP after real usage

### Step 4: Build the service delivery SOP

Convert the workflow into recurring operating steps.

For a recurring service, default internal sequence:

1. receive new or updated invoice data
2. validate required fields
3. update the tracker
4. identify due / overdue items
5. assign follow-up stage
6. prepare follow-up drafts or actions
7. log sent actions or pending actions
8. track responses and status changes
9. flag exceptions or escalation cases
10. prepare weekly summary
11. record lessons or process gaps

### Step 5: Create the operational assets

Produce the specific documents the user needs, such as:

- onboarding checklist
- intake checklist
- client data request
- kickoff summary
- internal SOP
- weekly service checklist
- escalation checklist
- pilot feedback template
- handover or status summary

Only create the assets that are actually useful for the current phase.

### Step 6: Validate operational clarity

Before finalizing, verify that:

- each step has a clear owner
- each checklist item is actionable
- required inputs are explicit
- recurring work is ordered logically
- escalation rules are visible
- outputs are easy to reuse

---

## Default SOP sections

When writing an SOP, use this structure unless the user asks otherwise:

### 1. Objective

State what the SOP is for and what outcome it should produce.

### 2. Trigger

Explain when this SOP should be used.

### 3. Inputs required

List the information, files, or approvals needed.

### 4. Steps

Write the operating steps in order.

### 5. Outputs

State what should exist after the SOP is completed.

### 6. Exceptions / escalation

Explain when to stop, escalate, or request clarification.

### 7. Notes

Add practical usage notes only if they reduce mistakes.

---

## Default operational assets

### A. Onboarding checklist

Use when a new pilot client is being set up.

Include:

- service confirmed
- pilot fit confirmed
- client contact confirmed
- invoice data source confirmed
- required fields received
- missing data flagged
- tracker created or prepared
- reminder stages confirmed
- reporting cadence confirmed
- escalation rules confirmed
- launch date confirmed

### B. Client intake form outline

Use when the user needs a client-facing intake structure.

Include:

- business name
- primary contact
- billing/admin contact
- preferred email/contact channel
- how invoices are currently tracked
- source of invoice data
- key invoice fields available
- preferred follow-up tone
- known problem accounts
- escalation preference
- weekly report recipient
- any exclusions or sensitive accounts

### C. Client data request message

Use when the user needs a message asking for setup information.

Should be:

- clear
- short
- practical
- non-technical
- organized as a checklist of what to send

### D. Weekly service checklist

Use for recurring delivery.

Default items:

- collect latest invoice updates
- update tracker
- verify due / overdue status
- identify high-priority accounts
- prepare follow-up actions
- log responses
- review unresolved issues
- prepare weekly summary
- capture process friction or repeated issues

### E. Escalation checklist

Use when a case needs manual attention.

Default triggers:

- disputed invoice
- no valid contact information
- repeated non-response beyond defined threshold
- client-specific exception
- unusual payment promise or negotiation
- legal/compliance-sensitive wording needed
- unclear ownership of next action

### F. Handover / status summary

Use when giving the client an update.

Include:

- current unpaid total
- overdue total
- highest-priority items
- what actions were taken
- what responses were received
- which cases need decisions
- next recommended actions

---

## Communication expectations

When preparing client-facing materials:

- use simple, direct language
- focus on practical outcomes
- avoid technical jargon
- avoid “AI” hype unless the user explicitly wants it
- avoid sounding like a debt-collection agency
- keep tone professional and calm
- make next actions obvious

When preparing internal SOPs:

- be precise
- be operational
- be concise
- use headings and checklists
- avoid abstract theory

---

## Constraints and safety rules

### Do not assume tools without evidence

Do not assume:

- a CRM
- accounting software
- a database
- an invoicing platform
- an automation platform
- a payment provider
- a legal workflow

If the tool is unknown, write the SOP tool-agnostically.

### Do not invent service details

Do not fabricate:

- escalation policies
- payment terms
- legal authority
- platform integrations
- client permissions
- approval flows

### Do not replace human judgment in sensitive cases

Flag manual review when:

- the tone could affect a client relationship
- the case is disputed
- the wording may have legal implications
- the next step is commercially sensitive

### Do not overbuild

This skill is for **pilot-stage service delivery**, not enterprise process design.

### Do not default to code

This skill should primarily produce:

- SOPs
- checklists
- templates
- client-facing ops docs
- delivery documents

Only mention automation if the user asks for it or if a repeated manual step clearly justifies it.

---

## Invoice Rescue Agent adaptation notes

When the service is about overdue invoice follow-up, bias toward these outputs:

- pilot-client onboarding checklist
- invoice data intake checklist
- tracker setup SOP
- weekly overdue review SOP
- reminder preparation SOP
- response logging SOP
- escalation decision checklist
- weekly cashflow visibility summary template

Default priorities for this service:

1. clean invoice data intake
2. reliable tracker setup
3. clear reminder stages
4. consistent weekly service rhythm
5. visible escalation cases
6. easy client understanding

Do not drift into legal collections language. Keep the service positioned as professional follow-up and cashflow visibility support.

---

## Output expectations

When using this skill, produce one or more of the following:

- a checklist
- a step-by-step SOP
- an intake structure
- a client message
- a kickoff document
- a weekly operations checklist
- an escalation flow
- a handover summary format

Always label the output clearly.

Whenever possible, structure the result so it can be copied directly into:

- a doc
- a Notion page
- a Google Doc
- a spreadsheet notes tab
- an internal operations guide

---

## Preferred output format

Use this format unless the user asks for something else:

## [Document Name]

### Template Purpose

[What this document is for]

### When to use it

[Trigger / context]

### Template Required Inputs

[List]

### Steps

1. ...
2. ...
3. ...

### Outputs

[List of expected results]

### Exceptions / escalation

[What requires manual review]

### Notes

[Short practical notes only]

For checklists, use concise checkbox-style bullets.

For client-facing messages, use polished plain language.

---

## Trigger examples

### Trigger Example 1

User: "Create an onboarding checklist for the first pilot client for Invoice Rescue Agent."

Use this skill.

### Trigger Example 2

User: "I need a weekly SOP for reviewing overdue invoices and sending follow-up drafts."

Use this skill.

### Trigger Example 3

User: "Turn this rough service into a repeatable client delivery process."

Use this skill.

### Trigger Example 4

User: "What information should I collect from a new client before I can start?"

Use this skill.

---

## Non-trigger examples

### Non-trigger Example 1

User: "Build the app backend for invoice tracking."

Do not use this skill.

### Non-trigger Example 2

User: "Fix this bug in my reminder email generator."

Do not use this skill.

### Non-trigger Example 3

User: "Help me choose between Next.js and Supabase."

Do not use this skill.

---

## Validation / self-check

Before finalizing, verify:

- the service scope is clear enough
- the SOP supports manual-first delivery
- no platform assumptions were made without evidence
- steps are actionable and ordered
- required inputs are explicit
- escalation cases are visible
- outputs are useful in real operations
- the result reduces ambiguity rather than adding theory
- client-facing language is simple and professional
- the document helps a beginner operate the service more consistently

If any of these fail, revise before presenting the result.

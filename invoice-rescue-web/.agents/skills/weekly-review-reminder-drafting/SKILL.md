---
name: weekly-review-reminder-drafting
description: Use this skill whenever the user needs to run a weekly overdue invoice review, prepare reminder drafts, create a chase list, summarize payment status, or standardize recurring follow-up work for unpaid invoices. Trigger when the user asks what to send, who to chase, what is overdue, how to review invoice status weekly, how to prepare follow-up drafts, or how to create a clear action list from invoice data. This skill is especially useful for manual-first cashflow support services such as invoice follow-up, accounts receivable support, and overdue payment visibility workflows.
---

# Weekly Review and Reminder Drafting

## Purpose

Use this skill to run the recurring weekly service cycle for overdue invoice follow-up.

This skill helps the agent turn invoice data into a practical weekly operating output:
- a reviewed status snapshot
- a prioritized chase list
- reminder drafts matched to the right stage
- escalation flags
- a clean weekly summary

The goal is to support **consistent, professional, manual-first service delivery** without overcomplicating the workflow.

---

## When to use this skill

Use this skill when the user wants to:

- run a weekly invoice review
- identify which invoices need follow-up
- create a chase list for today or this week
- draft reminder messages for overdue invoices
- decide which reminder stage applies
- summarize overdue accounts
- prepare a weekly client update
- standardize recurring follow-up work
- review unpaid invoices and determine next actions
- convert tracker data into operational actions

This skill is especially useful after onboarding is complete and the service is in active delivery.

---

## When not to use this skill

Do not use this skill when the user primarily needs:

- client onboarding
- offer design
- pricing strategy
- software architecture
- debugging
- product development
- legal debt-collection guidance
- direct email sending implementation
- payment platform integration
- broad business brainstorming unrelated to recurring invoice review

If the user still needs to define the service workflow itself, use the onboarding/SOP skill first.

---

## Required inputs

Collect or infer the following before running the workflow:

1. invoice tracker data or invoice list
2. due date or overdue status
3. invoice amount
4. client/customer name
5. contact email or contact channel
6. current payment or reminder status
7. last action date if available
8. known reply history or notes if available

If core fields are missing, state that clearly and identify what prevents a reliable review.

---

## Optional inputs

Use these if available:

- reminder stage definitions
- preferred tone guidelines
- escalation rules
- weekly reporting format
- payment link or payment instructions
- client-specific exclusions
- dispute notes
- promised payment dates
- previous reminder templates
- service-level rules for manual review

---

## Core operating principles

### 1. Keep business logic deterministic where possible
Do not let the model invent:
- due dates
- days overdue
- reminder stage rules
- payment status changes
- escalation thresholds

Use provided data and stated rules. If rules are missing, say so and apply only clearly labeled temporary assumptions.

### 2. Use the model for judgment-heavy language tasks
Use the model primarily for:
- drafting reminders
- organizing weekly summaries
- turning tracker data into an action list
- identifying likely exceptions that need human review

### 3. Prioritize clarity over volume
The best weekly output is not the longest one. It is the one that clearly shows:
- what needs action now
- what message goes to whom
- what should wait
- what needs escalation

### 4. Preserve tone and relationships
Reminder drafts should be:
- professional
- calm
- direct
- commercially appropriate
- non- threatening unless the user explicitly provides stricter language rules

### 5. Flag uncertainty explicitly
If the tracker is incomplete or contradictory, do not hide it. Surface the issue before drafting confidently.

### 6. Separate review from sending
This skill prepares actions and drafts. Do not assume reminders are sent unless the user explicitly asks for sending and the workflow supports it.

---

## Default workflow

When this skill is triggered, follow this sequence.

### Step 1: Review the input data
Inspect the tracker or invoice list and determine:

- which invoices are due soon
- which are overdue
- which already have recent follow-up activity
- which have payment promises or disputes
- which are blocked by missing information

Do not assume the data is clean. Look for:
- missing due dates
- missing contact emails
- duplicate invoice records
- unclear statuses
- missing last-action dates
- contradictory notes

### Step 2: Normalize the weekly action set
Group invoices into practical action buckets such as:

- no action needed
- due soon reminder
- just overdue reminder
- one week overdue reminder
- two weeks overdue reminder
- serious overdue / manual review
- waiting on reply
- promised payment follow-up
- dispute / exception case

Only use stages supported by the workflow. If the user has their own stage system, use that instead.

### Step 3: Prioritize the work
Prioritize by a combination of:
- severity of overdue status
- invoice amount
- time since last action
- client-specific sensitivity
- exceptions needing manual attention

When useful, produce:
- highest-priority accounts
- this-week chase list
- manual-review cases
- blocked cases due to missing data

### Step 4: Draft the reminders
For each invoice requiring follow-up:

- use the correct reminder stage
- reflect known context
- include relevant invoice details
- keep the tone aligned with the stage
- avoid legal claims or threats
- avoid sounding robotic
- avoid overstating certainty if data is incomplete

Whenever practical, include placeholders or fields for:
- customer name
- invoice number
- amount due
- due date
- payment link or payment instructions
- reply/contact path

### Step 5: Flag exceptions and escalations
Do not produce standard reminder drafts blindly when the case likely needs human judgment.

Flag for manual review if any of the following appear:
- invoice dispute
- promised payment date already given
- no valid contact method
- sensitive relationship or account
- repeated ignored reminders beyond threshold
- inconsistent tracker data
- unclear ownership of next action
- wording may need legal/compliance review

### Step 6: Prepare the weekly summary
Summarize the review in a practical way.

At minimum include:
- total unpaid invoices reviewed
- total overdue amount if available
- highest-priority accounts
- reminders drafted or recommended
- manual-review cases
- missing-data blockers
- recommended next actions

### Step 7: Make the outputs reusable
Present the result so the user can copy it into:
- a Google Doc
- a weekly internal note
- a tracker notes tab
- an email draft workflow
- a Notion page
- a client update

---

## Default review outputs

When useful, produce one or more of these outputs.

### A. Weekly review summary
A concise operational overview of the current unpaid / overdue situation.

Include:
- number of invoices reviewed
- overdue total
- high-priority accounts
- follow-up counts by stage
- exceptions
- next-step recommendations

### B. Chase list
A practical action list for the week or day.

Include columns or bullets for:
- customer name
- invoice number
- amount
- overdue stage
- last action date
- next action
- recommended draft
- escalation flag

### C. Reminder draft set
A grouped set of reminder messages ready for review.

Group by stage:
- due soon
- just overdue
- one week overdue
- two weeks overdue
- manual escalation draft

### D. Exceptions / escalation list
A short list of accounts that should not follow the normal reminder path.

### E. Weekly client update
A client-facing summary showing:
- what was reviewed
- what needs attention
- what actions are recommended
- which cases need decisions

---

## Default stage logic

Use the user’s real stage definitions if they exist. If not, this temporary structure may be used only as a draft framework:

- **Due soon**: invoice approaching due date, gentle heads-up if requested
- **Just overdue**: first overdue reminder, polite and direct
- **One week overdue**: firmer reminder, ask for payment update
- **Two weeks overdue**: stronger follow-up, request confirmation and clear next step
- **Serious overdue**: manual review before sending
- **Promised payment follow-up**: follow up against agreed payment date
- **Dispute / exception**: manual handling required

Do not present this as a final policy unless the user confirms it.

---

## Drafting guidance

### Tone by stage

**Due soon**
- light
- helpful
- not accusatory

**Just overdue**
- polite
- clear
- factual

**One week overdue**
- firmer
- still professional
- ask for update or payment timing

**Two weeks overdue**
- more urgent
- request confirmation
- keep relationship-safe tone

**Serious overdue**
- do not auto-normalize the message
- draft only with clear indication that human review is recommended

### Drafting rules

- include relevant invoice details
- keep emails short unless context requires more
- avoid passive or vague wording
- avoid threats
- avoid legal language unless explicitly supplied by the user
- do not pretend payment is late if the data is uncertain
- do not claim reminders were already sent unless shown in the tracker
- do not invent payment links or instructions

---

## Preferred output format

Use this structure unless the user asks for something else.

# Weekly Invoice Review

## Review summary
- [key metrics and overall status]

## Priority accounts
- [highest-priority items]

## Chase list
- [action list with next steps]

## Reminder drafts
### [Stage name]
[Drafts grouped by stage]

## Exceptions / manual review
- [cases needing judgment]

## Recommended next actions
- [clear next steps]

If the user wants a more operational format, present the chase list as a table or structured bullets.

---

## Default checklist for running the weekly review

Use this checklist internally:

- confirm latest tracker data is available
- check for missing required fields
- identify due and overdue invoices
- review last action date
- assign or verify follow-up stage
- prepare reminder drafts
- separate standard cases from exceptions
- create priority list
- prepare weekly summary
- flag blockers and missing information

---

## Invoice Rescue Agent adaptation notes

When used for Invoice Rescue Agent, prioritize these outputs:

1. weekly overdue review summary
2. prioritized chase list
3. grouped reminder drafts by stage
4. exception / manual-review list
5. short client-facing weekly update

Bias toward:
- cashflow visibility
- clean follow-up sequencing
- relationship-safe reminders
- obvious next actions
- low-friction manual service delivery

Do not drift into:
- legal collections language
- aggressive payment enforcement
- over-automated assumptions
- pretending the workflow is already integrated with email systems

---

## Constraints and safety rules

### Do not assume email sending
This skill drafts and organizes. It does not imply messages were sent.

### Do not invent tracker data
Never fabricate:
- due dates
- amounts
- contact details
- payment promises
- statuses
- reply history

### Do not overwrite client-specific rules
If the user already defined stages, tone rules, or escalation rules, use those.

### Do not escalate automatically without basis
A case should only be flagged for escalation if:
- the stage logic supports it
- the notes support it
- or the lack of clarity makes standard follow-up risky

### Do not replace human judgment in sensitive cases
Always recommend manual review for:
- disputes
- unusual account behavior
- sensitive accounts
- possible legal/compliance concerns
- unclear or contradictory records

### Do not overcomplicate the weekly cycle
This skill should support a repeatable weekly rhythm, not build a full accounts-receivable department.

---

## Trigger examples

### Example 1
User: “Review this week’s overdue invoices and tell me who needs a reminder.”

Use this skill.

### Example 2
User: “Draft the follow-up emails for accounts that are one week overdue.”

Use this skill.

### Example 3
User: “Turn this invoice tracker into a weekly chase list.”

Use this skill.

### Example 4
User: “Prepare a weekly update for the client based on unpaid invoices.”

Use this skill.

---

## Non-trigger examples

### Example 1
User: “Create the onboarding checklist for a new pilot client.”

Do not use this skill.

### Example 2
User: “Build the Supabase schema for invoice tracking.”

Do not use this skill.

### Example 3
User: “Price this service and write the sales page.”

Do not use this skill.

---

## Validation / self-check

Before finalizing, verify:

- the input data was actually reviewed
- no invoice facts were invented
- the action list is clear and prioritized
- reminder drafts match the stage logic
- exceptions are separated from normal cases
- outputs are practical and reusable
- the tone is professional and relationship-safe
- the weekly summary is concise and useful
- the result supports a manual-first workflow
- the final output reduces confusion and supports action

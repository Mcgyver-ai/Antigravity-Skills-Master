---
name: Status Manager

description: Compares the current date against invoice due dates and assigns the correct 'Reminder Stage' based on the Master Plan.
---

# Status Manager

## Purpose

The purpose of this skill is to read the local invoice tracking database (`data/tracker.json`), calculate how many days overdue or pending each invoice is, and update its `status` (Reminder Stage) accordingly based on the policies outlined in the Master Plan.

## How it Works

The `logic.js` script processes the `tracker.json` file. It calculates the difference between today's date and the `due_date` of each invoice to update the status to appropriate stages, such as:

- **Pending:** Due in more than 3 days.
- **Due Soon:** Due in 3 days or less.
- **Overdue:** Past the due date by 1-7 days.
- **Action Required:** Past the due date by more than 7 days.

## Usage

Simply run the script with Node.js:

```bash
node logic.js
```

The script will locate `tracker.json` relative to the workspace and update the fields automatically.

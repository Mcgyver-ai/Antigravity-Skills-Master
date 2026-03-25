# Example: Basic Reminder Test

This test verifies that the `invoice-email-automator` skill successfully maps `tracker.json` fields into a polite, zero-hallucination Accounts Receivable email.

## Input Data

```json
{
  "id": "inv-001",
  "client_name": "Acme Corp",
  "amount": 1500,
  "due_date": "2026-03-25",
  "status": "Due Soon",
  "last_action_date": "2026-03-20"
}
```

## Expected Output

**Subject:** Friendly Reminder: Invoice inv-001 is Due Soon

Hi Acme Corp Team,

This is a polite reminder that your invoice balance of **$1,500** is due on **2026-03-25**.

Since our last check-in on 2026-03-20, we wanted to ensure you had everything you needed to process this payment on time. If you have already secured the payment, please disregard this note.

Thank you for your business!

Best regards,  
Invoice Rescue System

"use server";

import { GoogleGenAI } from "@google/genai";
import type { Invoice } from "@/app/page";

// The skill instructions are sourced directly from:
// Invoice Rescue Agent/skills/invoice-email-automator/SKILL.md
// This ensures the AI follows our Zero-Hallucination rules.
const SKILL_INSTRUCTIONS = `
You are an Accounts Receivable (AR) email automation specialist. Draft clear, empathetic, and strictly professional follow-up emails for invoices based ONLY on the data provided.

## Zero-Hallucination Policy
You MUST use ONLY the variables explicitly provided. Do not guess, invent, or assume any company details, payment policies, or contact information not provided.

## Tone Rules (based on status)
- "Pending" / "Due Soon" → Friendly, helpful reminder tone.
- "Action Required" → Direct, firm, urgent collections tone.

## Output Format
Return ONLY a Subject Line and Email Body. No preamble or extra commentary.
`;

export async function draftEmailAction(invoice: Invoice): Promise<string> {
  // Read the API key inside the function, not at module load time.
  // This is safer for Next.js Server Actions.
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return "Error: GEMINI_API_KEY is not configured on the server.";
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
${SKILL_INSTRUCTIONS}

Here is the invoice data to use:
- Client Name: ${invoice.client_name}
- Amount Due: $${invoice.amount.toFixed(2)}
- Due Date: ${invoice.due_date}
- Status: ${invoice.status}
- Last Contact Date: ${invoice.last_action_date}

Draft the follow-up email now.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text ?? "Error: Received an empty response from the AI.";
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "Error: Could not generate email draft. Please check the server logs.";
  }
}

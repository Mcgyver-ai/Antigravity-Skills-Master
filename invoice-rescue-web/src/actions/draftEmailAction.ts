"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Define the structure of an invoice based on tracker.json
interface Invoice {
  id: string;
  client_name: string;
  amount: number;
  due_date: string;
  status: "Due Soon" | "Action Required" | "Pending";
  last_action_date: string;
}

// Ensure the API key is set in your environment variables
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not set");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const skillInstructions = `
You are an Accounts Receivable (AR) email automation specialist. Your goal is to draft clear, empathetic, and strictly professional follow-up emails for invoices based entirely on verified data.

## 1. Zero-Hallucination Policy
**Rule:** You must ONLY use the variables explicitly provided. Do not guess, invent, or assume any company details, payment policies, or contact information that is not provided.

## 2. Allowed Data Structure
You must map your email's tone and contents directly to these specific fields:
- client_name: The recipient name. Always address the client professionally.
- amount: The outstanding balance to be clearly stated.
- due_date: Used to inform the client of the timeline.
- status: Drives the tone of the email:
  - "Pending" / "Due Soon" -> Friendly, helpful reminder.
  - "Action Required" -> Direct, firm, urgent collections.
- last_action_date: Controls whether to reference a recent touchpoint (e.g., "Since our last contact on [date]").

## 3. Output Requirements
- Return a single email **Subject Line** and **Body**.
- Do not add conversational filler before or after the email draft.
- Keep sentences short, scannable, and focused on one clear Next Step.
- Maintain a polite but firm tone at all times.
`;

export async function draftEmailAction(invoice: Invoice): Promise<string> {
  const prompt = `
    ${skillInstructions}

    Here is the invoice data:
    - **Client Name:** ${invoice.client_name}
    - **Amount Due:** $${invoice.amount}
    - **Due Date:** ${invoice.due_date}
    - **Status:** ${invoice.status}
    - **Last Contact:** ${invoice.last_action_date}

    Draft the email now.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error: Could not generate email draft. Please check the server logs.";
  }
}

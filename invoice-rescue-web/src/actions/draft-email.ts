"use server";

import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Invoice {
  id: string;
  client_name: string;
  amount: number;
  due_date: string;
  status: string;
  last_action_date: string;
}

export async function draftEmail(invoiceId: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in environment variables");
    }

    // 1. Read tracker.json data to find the invoice
    const dataPath = path.join(process.cwd(), "data", "tracker.json");
    const fileContents = fs.readFileSync(dataPath, "utf8");
    const invoices: Invoice[] = JSON.parse(fileContents);
    const invoice = invoices.find((inv) => inv.id === invoiceId);

    if (!invoice) {
      throw new Error(`Invoice with ID ${invoiceId} not found`);
    }

    // 2. Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an Accounts Receivable (AR) email automation specialist. Your goal is to draft clear, empathetic, and strictly professional follow-up emails for invoices based entirely on verified data.

ZERO-HALLUCINATION POLICY:
You must ONLY use the provided invoice data. Do not guess, invent, or assume any company details, payment policies, or contact information that is not provided.

OUTPUT REQUIREMENTS:
- Return a JSON object with exactly two keys: "subject" and "body".
- Do not add conversational filler before or after the JSON.
- The "body" should use \n for line breaks.
- Keep sentences short, scannable, and focused on one clear Next Step.
- Maintain a polite but firm tone at all times.

TONE MAPPING:
- "Pending" / "Due Soon" -> Friendly, helpful reminder.
- "Action Required" / "Overdue" -> Direct, firm, urgent collections.
`,
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    // 3. Prompt construction with explicit data points
    const prompt = `
Please draft an AR email for the following invoice:
- Client Name: ${invoice.client_name}
- Outstanding Amount: ${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(invoice.amount)}
- Due Date: ${invoice.due_date}
- Current Status: ${invoice.status}
- Last Action Taken: ${invoice.last_action_date}
`;

    // 4. Generate content
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    if (!responseText) {
      throw new Error("AI returned empty response");
    }

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    const rawJson = jsonMatch ? jsonMatch[0] : responseText;
    
    // Parse the structured JSON response
    const emailData = JSON.parse(rawJson) as { subject: string; body: string };

    return { success: true, subject: emailData.subject, body: emailData.body };
  } catch (error) {
    console.error("Failed to draft email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

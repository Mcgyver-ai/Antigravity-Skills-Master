/**
 * Invoice Extractor
 * 
 * Uses the Gemini API to parse an uploaded invoice (image or PDF)
 * and extract structured data: Date, Amount, Vendor, Line Items.
 */

const { GoogleGenAI } = require("@google/genai");

// Retrieve API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function extractInvoiceData(fileUri, mimeType) {
  try {
    const prompt = `
      Analyze this invoice and extract the following information in JSON format:
      {
        "vendor": "Name of the Vendor/Company",
        "date": "Invoice Date (YYYY-MM-DD)",
        "amount": "Total Amount due",
        "lineItems": [
          {
            "description": "Item description",
            "quantity": "Item quantity",
            "price": "Item unit price",
            "total": "Item total"
          }
        ]
      }
      If any information is not found, leave it as null.
    `;

    // Assuming we have uploaded the file and obtained a fileUri or we pass base64 directly
    // This is a basic example of API usage.
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            {
                role: 'user',
                parts: [
                    {
                        fileData: {
                            fileUri: fileUri,
                            mimeType: mimeType
                        }
                    },
                    {
                        text: prompt
                    }
                ]
            }
        ],
        config: {
            responseMimeType: "application/json"
        }
    });

    console.log("Extraction successful!");
    return JSON.parse(response.text);
    
  } catch (error) {
    console.error("Error extracting invoice data:", error);
    throw error;
  }
}

module.exports = { extractInvoiceData };

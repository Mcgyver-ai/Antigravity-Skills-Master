
import { promises as fs } from 'fs';
import path from 'path';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { InvoiceDashboard } from '@/components/client/InvoiceDashboard';

// Define the structure of an invoice based on tracker.json
export interface Invoice {
  id: string;
  client_name: string;
  amount: number;
  due_date: string;
  status: "Due Soon" | "Action Required" | "Pending";
  last_action_date: string;
}

// Helper to determine badge variant based on status
export const getBadgeVariant = (status: Invoice['status']): 'default' | 'secondary' | 'destructive' | 'outline' => {
  switch (status) {
    case 'Due Soon':
      return 'secondary';
    case 'Action Required':
      return 'destructive';
    case 'Pending':
    default:
      return 'outline';
  }
};

// The main page component (Server Component)
export default async function InvoiceRescuePage() {
  // 1. Read data from tracker.json
  const filePath = path.join(process.cwd(), 'data', 'tracker.json');
  let invoices: Invoice[] = [];
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    invoices = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read or parse invoice data:", error);
    // Render an error state or an empty table
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Invoice Rescue Dashboard</CardTitle>
          <CardDescription>
            Manage outstanding invoices and draft follow-up reminders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InvoiceDashboard invoices={invoices} />
        </CardContent>
      </Card>
    </div>
  );
}

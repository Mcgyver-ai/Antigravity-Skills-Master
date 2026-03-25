import fs from "fs";
import path from "path";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InvoiceTable, Invoice } from "@/components/invoice-table";

export default async function Dashboard() {
  // Read tracker.json dummy data safely from the filesystem during server render
  const dataPath = path.join(process.cwd(), "data", "tracker.json");
  const fileContents = fs.readFileSync(dataPath, "utf8");
  const invoices: Invoice[] = JSON.parse(fileContents);

  const totalOutstanding = invoices.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Invoice Rescue Dashboard
          </CardTitle>
          <CardDescription>
            You have {invoices.length} active invoices totalling{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalOutstanding)}
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InvoiceTable invoices={invoices} />
        </CardContent>
      </Card>
    </div>
  );
}

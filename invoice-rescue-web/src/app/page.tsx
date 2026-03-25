import fs from "fs";
import path from "path";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Invoice {
  id: string;
  client_name: string;
  amount: number;
  due_date: string;
  status: string;
  last_action_date: string;
}

function getStatusVariant(status: string) {
  switch (status) {
    case "Overdue":
    case "Action Required":
      return { variant: "destructive" as const, className: "" };
    case "Due Soon":
      return {
        variant: "outline" as const,
        className:
          "text-amber-600 border-amber-600 dark:text-amber-500 dark:border-amber-500",
      };
    case "Pending":
      return { variant: "secondary" as const, className: "" };
    case "Paid":
      return {
        variant: "default" as const,
        className:
          "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
      };
    default:
      return { variant: "outline" as const, className: "" };
  }
}

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead className="text-right">Last Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => {
                const statusProps = getStatusVariant(invoice.status);
                return (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium whitespace-nowrap">
                      {invoice.id}
                    </TableCell>
                    <TableCell>{invoice.client_name}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(invoice.amount)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={statusProps.variant}
                        className={statusProps.className}
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {invoice.due_date}
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      {invoice.last_action_date}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

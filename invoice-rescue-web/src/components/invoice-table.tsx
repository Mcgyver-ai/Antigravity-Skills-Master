"use client";

import { useState, useTransition } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { draftEmail } from "@/actions/draft-email";

export interface Invoice {
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

export function InvoiceTable({ invoices }: { invoices: Invoice[] }) {
  const [isPending, startTransition] = useTransition();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [draftedSubject, setDraftedSubject] = useState("");
  const [draftedBody, setDraftedBody] = useState("");
  const [error, setError] = useState("");

  const handleDraftClick = (invoiceId: string) => {
    setDialogOpen(true);
    setDraftedSubject("");
    setDraftedBody("");
    setError("");

    startTransition(async () => {
      const result = await draftEmail(invoiceId);
      if (result.success && result.subject && result.body) {
        setDraftedSubject(result.subject);
        setDraftedBody(result.body);
      } else {
        setError(result.error || "Failed to generate email.");
      }
    });
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="text-right">Last Action</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            const statusProps = getStatusVariant(invoice.status);
            const isActionable = ["Due Soon", "Overdue", "Action Required"].includes(
              invoice.status
            );

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
                <TableCell className="text-right">
                  {isActionable ? (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleDraftClick(invoice.id)}
                    >
                      Draft Reminder
                    </Button>
                  ) : (
                    <Button variant="secondary" size="sm">
                      View
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Email Draft</DialogTitle>
            <DialogDescription>
              {isPending
                ? "Generating AI response based on invoice details..."
                : "Generated draft based on SKILL.md AR rules."}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            {isPending ? (
              <div className="flex flex-col space-y-3 animate-pulse">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
                <div className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded w-full"></div>
              </div>
            ) : error ? (
              <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm border border-red-200">
                {error}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Subject
                  </span>
                  <div className="border border-border rounded-md px-3 py-2 text-sm bg-muted/50 font-medium">
                    {draftedSubject}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Body
                  </span>
                  <div className="border border-border rounded-md px-3 py-4 text-sm bg-muted/50 whitespace-pre-wrap">
                    {draftedBody}
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

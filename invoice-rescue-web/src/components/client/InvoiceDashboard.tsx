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
  DialogFooter,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { draftEmailAction } from "@/actions/draftEmailAction";
import type { Invoice } from "@/app/page";
import { getBadgeVariant } from "@/app/page";

interface InvoiceDashboardProps {
  invoices: Invoice[];
}

export function InvoiceDashboard({ invoices }: InvoiceDashboardProps) {
  // useTransition gives us an isPending flag without blocking the UI
  const [isPending, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleDraftClick = (invoice: Invoice) => {
    // Reset state and open the dialog immediately so the user sees it open
    setSelectedInvoice(invoice);
    setGeneratedEmail("");
    setIsDialogOpen(true);

    // startTransition marks the server action call as non-urgent,
    // keeping the UI interactive while we wait for the AI response.
    startTransition(async () => {
      const draft = await draftEmailAction(invoice);
      setGeneratedEmail(draft);
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
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-mono text-xs">{invoice.id}</TableCell>
              <TableCell className="font-medium">{invoice.client_name}</TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>{invoice.due_date}</TableCell>
              <TableCell>
                <Badge variant={getBadgeVariant(invoice.status)}>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  onClick={() => handleDraftClick(invoice)}
                  disabled={isPending}
                >
                  Draft Reminder
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {isPending
                ? "Drafting email..."
                : `Reminder for ${selectedInvoice?.client_name}`}
            </DialogTitle>
            <DialogDescription>
              {isPending
                ? "Gemini is writing your email. One moment..."
                : `AI draft for invoice ${selectedInvoice?.id}. Review before sending.`}
            </DialogDescription>
          </DialogHeader>

          {/* Loading state with a spinner */}
          {isPending ? (
            <div className="flex items-center justify-center py-10 gap-3 text-muted-foreground">
              <Loader2 className="animate-spin h-5 w-5" />
              <span>Contacting Gemini AI...</span>
            </div>
          ) : (
            // Email body displayed in a scrollable, pre-formatted box
            <div className="max-h-80 overflow-y-auto rounded-md bg-muted p-4 text-sm whitespace-pre-wrap font-mono">
              {generatedEmail}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

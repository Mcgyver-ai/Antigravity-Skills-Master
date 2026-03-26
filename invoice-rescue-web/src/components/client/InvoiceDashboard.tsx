"use client";

import { useState } from "react";
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
import { draftEmailAction } from "@/actions/draftEmailAction";
import type { Invoice } from "@/app/page";
import { getBadgeVariant } from "@/app/page";

interface InvoiceDashboardProps {
  invoices: Invoice[];
}

export function InvoiceDashboard({ invoices }: InvoiceDashboardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleDraftClick = async (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsDialogOpen(true);
    setIsLoading(true);
    setGeneratedEmail(""); // Clear previous content

    try {
      const draft = await draftEmailAction(invoice);
      setGeneratedEmail(draft);
    } catch (error) {
      console.error("Failed to draft email:", error);
      setGeneratedEmail("Failed to generate email. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.client_name}</TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>{invoice.due_date}</TableCell>
              <TableCell>
                <Badge variant={getBadgeVariant(invoice.status)}>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button onClick={() => handleDraftClick(invoice)}>
                  Draft Reminder
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isLoading ? "Drafting Email..." : `Reminder for ${selectedInvoice?.client_name}`}
            </DialogTitle>
            <DialogDescription>
              AI-generated draft for invoice {selectedInvoice?.id}. Review and send.
            </DialogDescription>
          </DialogHeader>
          {isLoading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : (
            <div className="p-4 whitespace-pre-wrap">{generatedEmail}</div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

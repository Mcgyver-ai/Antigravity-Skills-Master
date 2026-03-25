---
name: Invoice Extraction
description: Extract structured data (Date, Amount, Vendor, Line Items) from uploaded invoice files using the Gemini API.
---
# Invoice Extraction Skill

## Purpose

This skill extracts structured data—specifically **Date**, **Amount**, **Vendor**, and **Line Items**—from uploaded invoice files (such as images or PDFs) using the Gemini API.

## Usage

The `extractor.js` script handles parsing documents and formatting the outputs into structured data objects. Use this whenever processing raw incoming invoices from clients.

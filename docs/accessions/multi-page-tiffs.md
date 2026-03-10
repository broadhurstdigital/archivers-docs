---
id: multi-page-tiffs
title: Multi-page TIFF Files
sidebar_label: Multi-page TIFFs
---

# Multi-page TIFF Files

A **TIFF** (Tagged Image File Format) is a common format for scanned documents, especially in archival and library settings. Some TIFF files contain multiple pages in a single file — for example, a 10-page letter scanned as one `.tiff` file.

When The Archiver detects a multi-page TIFF, it gives you a choice about how to handle it.

---

## The two options

When a multi-page TIFF is detected during Classification Review, you'll see a choice card:

### Option 1: Process as document
The pages are combined into a single PDF document, OCR is run across all pages, and it's treated as one item in your archive.

**Best for:**
- Multi-page letters or reports where all pages belong together
- Documents where the page order and sequence matter
- Items you want to reference as a single item (e.g. "Annual Report 1953")

### Option 2: Split into N images
Each page is extracted as a separate JPEG image and added to the accession as individual files. The original TIFF is marked as "split" and the individual pages become child items.

**Best for:**
- Collections of unrelated single-page items scanned together for convenience
- Photograph albums where each page is an independent image
- Situations where each page needs its own metadata

---

## Making your choice

During Classification Review:

1. Find the multi-page TIFF in the file list — it will have a special card showing the number of pages
2. Choose **Process as document** or **Split into N images**
3. The AI processes your choice and creates the appropriate records

:::tip
**When in doubt, process as document.** You can always search within the combined document. Splitting is harder to undo and creates many individual records to manage.
:::

---

## After splitting

If you choose to split:
- The original TIFF is marked as "split" — it remains in the accession as a reference but is no longer the primary item
- Each extracted page gets its own title, thumbnail, and metadata
- The AI classifies each page individually
- Page numbers are added to each file title automatically (e.g. "Album Pages — Page 1 of 24")

---

## Navigating multi-page documents

For documents processed as a single item, you can navigate pages:
- In the file viewer, use the **← →** arrows to page through
- On your keyboard, use the **left/right arrow keys**
- The current page number and total are shown in the toolbar

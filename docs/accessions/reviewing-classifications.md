---
id: reviewing-classifications
title: Reviewing AI Classifications
sidebar_label: Reviewing Classifications
---

# Reviewing AI Classifications

After you upload files to an Accession, The Archiver's AI reads every file and automatically classifies it. The **Classification Review** step lets you check the AI's work before finalising the accession.

---

## What the AI extracts

For each file, the AI attempts to identify:

| Field | Example |
|-------|---------|
| **Title** | "Letter from John Smith to Mary Jones" |
| **Document type** | Letter, Photograph, Receipt, Map, Report… |
| **Date** | 14 March 1923 |
| **People mentioned** | John Smith, Mary Jones |
| **Places mentioned** | Birmingham, England |
| **Subjects / keywords** | World War I, Family, Business |
| **Description** | A brief plain-English summary of the document |
| **Language** | English |

---

## Understanding confidence flags

Each file gets a confidence indicator:

- **Green tick** — the AI is confident. You can accept this without reviewing.
- **Orange flag** — the AI is uncertain about one or more fields. These are worth checking.
- **Red flag** — the AI couldn't classify this file properly. You should review and correct manually.

:::tip
You don't need to review every single file. Focus your attention on orange and red flags — especially for any files that are critically important to your archive.
:::

---

## How to edit a classification

1. Click on any file in the Classification Review list
2. A panel opens on the right showing all extracted fields
3. Click any field to edit it
4. Your changes are saved automatically as you type

### Correcting the date
Dates can be entered in many formats: `1923-03-14`, `March 1923`, `1920s`, `circa 1930`. If the exact date is unknown, use an approximate like `1920s` or `circa 1930`.

### Adding or removing people/places
Click the + button next to People or Places to add an entry. Click the × next to any entry to remove it.

---

## Multi-page TIFFs

If you uploaded a multi-page TIFF file (a scanned document with multiple pages), you'll see a special choice card:

- **Process as document** — the pages are combined into a single PDF and treated as one document
- **Split into N images** — each page becomes a separate image file in the accession

See [Multi-page TIFFs](/accessions/multi-page-tiffs) for guidance on which to choose.

---

## Completing the review

Once you're satisfied with the classifications:

1. Click **Complete Accession** at the bottom of the review screen
2. All approved metadata is saved
3. The accession is indexed and becomes fully searchable

:::note
You can always edit file metadata after completing an accession. Open the accession, click on any file, and use the Edit button.
:::

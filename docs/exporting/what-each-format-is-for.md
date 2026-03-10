---
id: what-each-format-is-for
title: What Each Format Is For
sidebar_label: What Each Format Is For
---

# What Each Export Format Is For

Not sure which export format you need? Here's a plain-English guide to help you choose.

---

## "I just want a spreadsheet of my files"
→ **Export as CSV**

Open it in Excel, Google Sheets, or Numbers. Each row is a file; columns show the title, date, document type, people, places, and other metadata.

---

## "I want to share my collection description with another archive or library"
→ **Export as EAD3**

EAD3 (Encoded Archival Description) is the international standard for sharing archival collection descriptions. Major institutions including the British Library, US National Archives, and hundreds of universities use EAD3. Other archival software can import it directly.

*You need a Fonds structure set up before you can export EAD3.*

---

## "I'm moving to ArchivesSpace (or already use it)"
→ **Export as ArchivesSpace JSON**

ArchivesSpace is the most widely-used archival management system in universities and large archives. The Archiver can export your collection in a format ArchivesSpace imports natively — saving you from re-entering everything manually.

---

## "I want to transfer the actual files to another institution"
→ **Export as BagIt**

BagIt packages your files together with a manifest (a list of every file and its verification code). The receiving institution can use the manifest to confirm that every file arrived intact and unchanged — essential for formal transfers between archives.

---

## "I need a proper archival description document for my records"
→ **Export as Finding Aid (PDF)**

A Finding Aid is a document that describes your collection for researchers — who created it, what it contains, how it's organised, and what access restrictions apply. It's the standard document researchers expect when requesting access to an archive.

---

## "I'm a developer or data analyst"
→ **Export as JSON**

JSON is a machine-readable format that's easy to work with in Python, JavaScript, or any programming language. All metadata fields are included in a structured, hierarchical format.

---

## Summary table

| I need to... | Format |
|---|---|
| Open in Excel | CSV |
| Share with another archive | EAD3 |
| Import into ArchivesSpace | ArchivesSpace JSON |
| Transfer files to another institution | BagIt |
| Produce a researcher-facing document | Finding Aid (PDF) |
| Analyse data programmatically | JSON |

---

:::note
EAD3, BagIt, ArchivesSpace JSON, and Finding Aid exports require a paid plan. CSV and JSON are available on all plans.
:::

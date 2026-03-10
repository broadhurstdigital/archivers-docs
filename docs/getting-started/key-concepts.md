---
id: key-concepts
title: Key Concepts & Glossary
sidebar_label: Key Concepts & Glossary
---

# Key Concepts & Glossary

The Archiver uses standard archival terminology. This page explains every key term in plain English so you always know exactly what you're looking at.

---

## Core terms

### Accession
An **Accession** is a batch of files you upload together — like a box of documents from a single donor or project. It's the primary unit of work in The Archiver. When you upload files, you're creating an accession.

*Example: "Smith Family Letters 1920–1945" might be one accession containing 50 scanned letters.*

---

### Fonds
A **Fonds** (plural: **Fonds**) is the top-level grouping for a collection — named after the person, family, or organisation that created the records. It's the most important concept in archival arrangement.

*Example: "The Smith Family Fonds" might contain all records created by or about the Smith family, organised into series.*

:::note
The word "Fonds" comes from French and is standard archival terminology worldwide. It's pronounced "fawn" (like the baby deer).
:::

---

### Sub-fonds
A **Sub-fonds** is a subdivision of a Fonds, used when a collection has distinct sub-groups that deserve their own section.

*Example: The Smith Family Fonds might have a Sub-fonds for "John Smith's Business Records" and another for "Mary Smith's Personal Papers".*

---

### Series
A **Series** is a group of related records within a Fonds, usually sharing a common function, subject, or format.

*Example: "Correspondence", "Financial Records", and "Photographs" might each be Series within the Smith Family Fonds.*

---

### Sub-series
A **Sub-series** is a further subdivision of a Series, used when a series is large and has clearly distinct sub-groups.

*Example: The "Correspondence" Series might have Sub-series for "Personal Letters" and "Business Letters".*

---

### Finding Aid
A **Finding Aid** is a document that describes a collection's contents, organisation, and context — it helps researchers understand what's in an archive and how to navigate it. The Archiver generates Finding Aids automatically from your structured collection.

---

### Dossier
A **Dossier** is a research folder that pulls together items from across your archive to explore a theme or topic. Unlike a Fonds (which reflects where records came from), a Dossier is created by you for a specific research question.

*Example: A Dossier called "Smith Family During World War II" might pull together letters, photographs, and documents from multiple accessions.*

---

### Provenance
**Provenance** means where a record came from — who created it and how it ended up in the archive. It's one of the most important principles in archival work: records should be kept with information about their origin.

*Example: "These letters were donated by Jane Smith, granddaughter of John Smith, in 2023."*

---

## Technical terms

### OCR
**OCR** stands for "Optical Character Recognition". It's a technology that converts scanned images of text (like a photo of a typed letter) into actual searchable digital text. The Archiver runs OCR automatically on all images and scanned documents.

---

### EAD3
**EAD3** (Encoded Archival Description) is a standard XML file format used by archival software worldwide for sharing collection descriptions. When you export your archive in EAD3 format, other archival systems like ArchivesSpace can import it directly.

---

### BagIt
**BagIt** is a standard packaging format used to transfer digital collections between institutions. A "bag" contains your files plus a manifest (a list of all files with checksums to verify nothing has been corrupted or lost).

---

### Checksum
A **checksum** is a unique fingerprint generated from a file's contents. It's used to verify that a file hasn't been corrupted or altered. The Archiver automatically generates checksums for all files.

---

### Tier
The Archiver has different **tiers** (subscription levels) with different storage and processing limits:

| Feature | Free | Pro | Team | Enterprise |
|---------|------|-----|------|------------|
| Items/month | 20 | 250 | 1,000 | 5,000 |
| Storage | 500 MB | 10 GB | 100 GB | Unlimited |
| Data kept for | 7 days | Forever | Forever | Forever |
| Fonds & Dossiers | ✗ | ✓ | ✓ | ✓ |
| Export formats | CSV, JSON | All formats | All formats | All formats |
| Team members | Solo only | Solo only | Up to 10 | Unlimited |

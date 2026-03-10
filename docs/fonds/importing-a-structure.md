---
id: importing-a-structure
title: Importing a Structure
sidebar_label: Importing a Structure
---

# Importing a Structure

If you already have your archival hierarchy defined in a spreadsheet or document, you can import it into The Archiver instead of building it manually.

:::note
Importing a structure requires a paid plan.
:::

---

## Supported import formats

The Archiver can import structures from:
- **CSV** — a simple spreadsheet with columns for each level of the hierarchy
- **EAD3 XML** — standard archival encoding (if you're migrating from another system)

---

## Importing from CSV

### Prepare your CSV

Your CSV should have the following columns:

| Column | Required | Example |
|--------|----------|---------|
| `fonds_name` | Yes | Smith Family Fonds |
| `subfonds_name` | No | John Smith's Papers |
| `series_name` | Yes | Correspondence |
| `subseries_name` | No | Personal Letters |
| `description` | No | Letters between family members… |
| `date_from` | No | 1920 |
| `date_to` | No | 1945 |

Each row represents one node in the hierarchy. Rows sharing the same `fonds_name` will be grouped under the same Fonds.

### Import steps

1. Go to **Fonds** in the sidebar
2. Click **Import Structure** (top right)
3. Select **CSV**
4. Upload your CSV file
5. The Archiver previews the structure it will create
6. Review and click **Import**

---

## Importing from EAD3

If you're migrating from ArchivesSpace, AtoM, or another system that exports EAD3:

1. Export your EAD3 file from the other system
2. Go to **Fonds → Import Structure → EAD3**
3. Upload the `.xml` file
4. Review the preview and click **Import**

:::tip
EAD3 imports preserve your existing descriptions, dates, and reference codes. They do not automatically link your existing Accessions — you'll need to assign those manually after import.
:::

---

## After importing

Once the structure is imported:
- All Fonds, Sub-fonds, Series, and Sub-series are created
- They appear immediately in your Fonds tree
- You can edit any item by clicking on it
- Assign your Accessions to the structure using the normal drag-and-drop method

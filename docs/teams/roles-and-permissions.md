---
id: roles-and-permissions
title: Roles and Permissions
sidebar_label: Roles & Permissions
---

# Roles and Permissions

Every member of an Organisation has a **role** that controls what they can do. The Archiver has three roles: **Admin**, **General**, and **Viewer**.

---

## The three roles

### Admin
Full control over the organisation and archive.

**Can do everything, including:**
- Create, edit, and delete Accessions, Fonds, Dossiers
- Invite and remove members
- Change member roles
- Edit organisation settings and AI Instructions
- View usage and manage billing
- Export in all formats

**Typical users:** The archive manager, department head, primary archivist.

---

### General
Can do all archive work, but cannot manage the organisation or its members.

**Can:**
- Create, edit, and delete Accessions, Fonds, Dossiers
- Upload files and run AI analysis
- Search and explore the archive
- Export in all available formats

**Cannot:**
- Invite or remove members
- Change member roles
- Edit organisation-level settings

**Typical users:** Archivists, researchers, regular contributors.

---

### Viewer
Read-only access to the archive.

**Can:**
- View all Accessions, files, Fonds, and Dossiers
- Search the archive
- View Explore sessions and Dossier analyses
- Export basic formats (CSV, JSON)

**Cannot:**
- Create, edit, or delete anything
- Upload files
- Run AI analysis
- Export in premium formats (EAD3, BagIt, etc.)

**Typical users:** Researchers with read-only access, stakeholders who need to browse but not edit.

---

## Permissions at a glance

| Action | Admin | General | Viewer |
|--------|-------|---------|--------|
| View files | ✓ | ✓ | ✓ |
| Search | ✓ | ✓ | ✓ |
| Upload files | ✓ | ✓ | ✗ |
| Create Accessions | ✓ | ✓ | ✗ |
| Edit metadata | ✓ | ✓ | ✗ |
| Delete Accessions | ✓ | ✓ | ✗ |
| Create Fonds/Series | ✓ | ✓ | ✗ |
| Create Dossiers | ✓ | ✓ | ✗ |
| Run AI analysis | ✓ | ✓ | ✗ |
| Export (all formats) | ✓ | ✓ | CSV/JSON only |
| Invite members | ✓ | ✗ | ✗ |
| Remove members | ✓ | ✗ | ✗ |
| Change roles | ✓ | ✗ | ✗ |
| Edit org settings | ✓ | ✗ | ✗ |
| Manage billing | ✓ | ✗ | ✗ |

---

## Changing a member's role

1. Go to **Settings → Organisation → Members**
2. Find the member
3. Click the **role badge** next to their name
4. Select the new role
5. Confirm

:::note
There must always be at least one Admin in an Organisation. You cannot remove the Admin role from the last remaining Admin.
:::

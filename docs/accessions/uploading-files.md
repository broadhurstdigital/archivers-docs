---
id: uploading-files
title: Uploading Files
sidebar_label: Uploading Files
---

# Uploading Files

The Archiver accepts a wide range of file types and handles them automatically. Here's what you need to know before uploading.

---

## Supported file formats

### Documents
| Format | Extension | Notes |
|--------|-----------|-------|
| PDF | `.pdf` | Text PDFs are indexed directly; scanned PDFs get OCR |
| Word | `.doc`, `.docx` | Text is extracted automatically |
| Text | `.txt` | Indexed as-is |
| Rich Text | `.rtf` | Text is extracted |

### Images
| Format | Extension | Notes |
|--------|-----------|-------|
| JPEG | `.jpg`, `.jpeg` | OCR run automatically |
| PNG | `.png` | OCR run automatically |
| TIFF | `.tif`, `.tiff` | OCR run; multi-page TIFFs can be split — [see guide](/accessions/multi-page-tiffs) |
| WebP | `.webp` | OCR run automatically |

### Spreadsheets
| Format | Extension | Notes |
|--------|-----------|-------|
| Excel | `.xls`, `.xlsx` | Content is extracted and indexed |
| CSV | `.csv` | Treated as structured data |

### Audio & Video
| Format | Extension | Notes |
|--------|-----------|-------|
| MP3 | `.mp3` | Transcribed automatically |
| WAV | `.wav` | Transcribed automatically |
| M4A | `.m4a` | Transcribed automatically |
| MP4 | `.mp4` | Transcribed automatically |
| MOV | `.mov` | Transcribed automatically |

---

## File size limits

| Tier | Max file size | Total storage |
|------|--------------|---------------|
| Free | 50 MB per file | 500 MB total |
| Pro | 500 MB per file | 10 GB total |
| Team | 500 MB per file | 100 GB total |
| Enterprise | 2 GB per file | Unlimited |

---

## How uploading works

1. Files are transferred directly to secure cloud storage over an encrypted connection
2. The original file is stored untouched — The Archiver never modifies your originals
3. A thumbnail and preview are generated for documents and images
4. Processing (OCR, classification) starts automatically after upload

---

## Tips for best results

:::tip
**Scan quality matters for OCR.** For the best text recognition results, scan documents at 300 DPI or higher. Very dark, faded, or skewed scans will produce less accurate OCR.
:::

:::tip
**Use descriptive filenames.** The AI uses filenames as a hint during classification. `smith_letter_1923.jpg` gives the AI useful context; `IMG_4521.jpg` doesn't.
:::

:::tip
**Upload in batches by source.** Create one accession per donor, event, or project. This makes the AI's job easier and keeps your archive logically organised.
:::

---

## What happens if a file fails?

If a file fails to upload or process, you'll see an error indicator next to it. Common causes:
- File format not supported
- File is corrupted or unreadable
- File exceeds the size limit for your tier

Failed files don't count against your usage. You can try uploading the file again, or contact support if the problem persists.

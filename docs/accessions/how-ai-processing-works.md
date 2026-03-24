---
id: how-ai-processing-works
title: How AI Processing Works
sidebar_label: How AI Processing Works
---

# How AI Processing Works

When you upload files to an accession, The Archiver uses AI to automatically extract metadata from each file. This page explains what happens behind the scenes and how the system produces high-quality archival descriptions.

---

## Processing modes

### Instant processing
Files are processed one at a time as they're uploaded. Results appear within seconds. This is the default for small accessions.

### Background processing
For larger files or collections, processing happens in the background. You'll receive an email and push notification when processing is complete. The system automatically routes files to background processing when they're estimated to take more than 45 seconds.

### Batch processing
For very large collections, files are submitted to AI batch APIs at a reduced cost. A background job checks for completed results every 15 minutes.

---

## Processing pipeline by file type

### Documents (PDF, Word, scanned images)

1. **OCR** — text is extracted from every page using specialised OCR
2. **Metadata extraction** — the extracted text plus the original image are sent to AI, which produces archival metadata
3. **Visual validation** — a second AI model re-examines the original image to catch OCR errors, verify dates, and assess physical condition

This three-step approach catches mistakes that a single pass would miss.

### Photographs and artefacts

1. **Visual analysis** — the image is sent directly to AI for description
2. AI produces metadata including title, date, subjects, people depicted, condition assessment, and more

### Audio files

1. **Metadata extraction** — AI listens to the audio and produces archival metadata including content summary, speaker analysis, language, audio quality, and a transcribability score
2. **On-demand transcription** — if the audio is clear enough (transcribability score 4+), you can request a full timestamped transcript with speaker identification. See [Audio Transcription](/audio-video/transcription)

### Video files

1. **Video analysis** — AI watches the video and produces metadata including scene breakdown, people and locations depicted, visual quality assessment, and a full archival description
2. Technical metadata (codec, resolution, bitrate, duration) is extracted automatically from the file headers

---

## Archival standards

All AI-generated metadata follows professional archival standards:

| Standard | What it covers |
|----------|---------------|
| **Dublin Core** | Core descriptive fields (title, creator, date, subject, description) |
| **ISAD(G)** | General International Standard Archival Description (scope, provenance, access conditions) |
| **DACS** | Describing Archives: A Content Standard (US-focused archival description) |
| **EBUCore** | European Broadcasting Union metadata (audio/video technical and editorial metadata) |

You don't need to know these standards — The Archiver applies them automatically. The metadata it generates is structured so that exports (EAD3, AtoM CSV, Dublin Core XML, etc.) are standards-compliant.

---

## Confidence scoring

Every metadata field receives a confidence rating:

| Level | Meaning |
|-------|---------|
| **High** | The AI is confident this value is correct |
| **Medium** | The AI's best guess, but worth verifying |
| **Low** | The AI is uncertain — human review recommended |

Fields with medium or low confidence are flagged in the review interface so you can focus your attention where it matters most.

---

## Custom AI instructions

You can customise how the AI writes metadata via **Settings > AI Instructions**:

- **Output language** — AI writes all metadata in your chosen language
- **Institutional context** — e.g. "Wellington City Archives, New Zealand" helps the AI understand your collection's context
- **Writing style** — formal academic, plain English, or concise

If you belong to an organisation, organisation-level AI settings apply to all members.

---

## Cost and usage

Each file processed counts against your monthly processing quota:

| Tier | Monthly items |
|------|--------------|
| Free | 20 |
| Pro | 250 |
| Team | 1,000 |
| Enterprise | 5,000 |

You can track your usage on the **Analytics** page in the dashboard.

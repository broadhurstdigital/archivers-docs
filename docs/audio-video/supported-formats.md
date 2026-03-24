---
id: supported-formats
title: Supported Audio & Video Formats
sidebar_label: Supported Formats
---

# Supported Audio & Video Formats

The Archiver processes audio and video files using AI to generate archival metadata aligned to professional standards (Dublin Core, ISAD(G), DACS, EBUCore).

Audio and video features require a **Pro plan or higher**.

---

## Audio formats

| Format | Extension | Notes |
|--------|-----------|-------|
| MP3 | `.mp3` | Most common; metadata extracted automatically |
| WAV | `.wav` | Uncompressed audio; larger files |
| M4A | `.m4a` | AAC-encoded audio |
| FLAC | `.flac` | Lossless audio |
| OGG | `.ogg` | Open-source format |

## Video formats

| Format | Extension | Notes |
|--------|-----------|-------|
| MP4 | `.mp4` | Most common; H.264/H.265 codecs |
| MOV | `.mov` | Apple QuickTime |
| WebM | `.webm` | Open web format |
| AVI | `.avi` | Legacy format |

---

## File size limits

| Tier | Max file size | Total storage |
|------|--------------|---------------|
| Pro | 500 MB per file | 10 GB total |
| Team | 500 MB per file | 100 GB total |
| Enterprise | 2 GB per file | Unlimited |

Free-tier accounts cannot upload audio or video files.

---

## What happens when you upload

When you upload an audio or video file, The Archiver automatically:

1. **Extracts technical metadata** — codec, bitrate, duration, sample rate, and other technical properties are read from the file headers
2. **Classifies format risk** — the file format is assessed against the Library of Congress Recommended Format Specifications (preferred, acceptable, or at-risk)
3. **Computes a fixity hash** — a SHA-256 checksum is generated for long-term integrity verification
4. **Runs AI analysis** — Gemini AI listens to the audio or watches the video and produces archival metadata including title, date, description, subjects, speakers, language, and more

No manual steps are required. Processing typically takes 10-30 seconds depending on file length.

---

## Format risk classification

Each file receives a format risk rating based on Library of Congress preservation guidelines:

| Rating | Meaning | Examples |
|--------|---------|----------|
| **Preferred** | Widely supported, open standard, recommended for long-term preservation | WAV, FLAC |
| **Acceptable** | Good support but some preservation concerns | MP3, MP4 (H.264) |
| **At-risk** | Proprietary, declining support, or limited tool availability | Some legacy codecs |

The format risk appears in the file's technical metadata section on the accession detail page.

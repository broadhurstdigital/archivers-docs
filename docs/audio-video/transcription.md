---
id: transcription
title: Audio Transcription
sidebar_label: Transcription
---

# Audio Transcription

The Archiver uses a two-pass approach to audio processing. The first pass always runs automatically. The second pass (full transcription) is available on demand for Pro plan users and above.

---

## Pass 1: Automatic metadata (always runs)

When you upload an audio file, AI automatically generates:

- **Archival metadata** — title, date, description, subjects, language, creator
- **Content excerpt** — a brief summary of what is discussed or performed
- **Speaker analysis** — estimated number of speakers and their characteristics
- **Audio quality assessment** — recording quality, background noise, clarity
- **Transcribability score** — a 1-10 rating of how suitable the audio is for full transcription

This pass runs for all audio files at no extra cost beyond your normal processing quota.

---

## Pass 2: Full transcription (on demand)

For audio files with clear speech, you can request a full timestamped transcript with speaker identification.

### Requirements
- **Pro plan or higher** — transcription is a paid-tier feature
- **Transcribability score of 4 or above** — the AI must judge the audio is clear enough to transcribe reliably
- **Maximum 5 minutes duration** — longer files are not currently supported for transcription

### How to request transcription

1. Open the accession detail page
2. Find the audio file card
3. Click **Transcribe Audio** (this button only appears when the requirements above are met)
4. The file status changes to "Processing" while transcription runs
5. When complete, the transcript appears in the file's metadata

Transcription typically takes 30-60 seconds.

### What you get

The transcript includes:
- **Timestamped segments** — each segment has a start and end time
- **Speaker labels** — speakers are identified (Speaker 1, Speaker 2, etc.)
- **Full text** — the complete spoken content

### Editing transcripts

Once a transcript is available, you can edit it in the media player:

1. Click the audio file to open the media player
2. In the transcript panel, click any segment to start editing
3. Edit the text directly — changes are highlighted with an unsaved indicator
4. Click **Save** to persist your edits
5. Edits are saved to the file's metadata and reflected in exports

Your edits are tracked in the audit trail as human-edited fields, separate from the AI-generated original.

---

## Export

Transcripts can be exported as:
- **SRT subtitles** — standard subtitle format compatible with most video players
- **VTT subtitles** — web-standard subtitle format

These options appear in the export menu when a file has transcript data.

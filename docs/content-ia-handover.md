# Content IA — design & handover

**Language:** All handover and initial design documentation for this workstream is written in **English** (this file and `docs/content-model.md`). Keep future design / handover notes in English as well.

**Related:** Editorial rules → [`content-model.md`](./content-model.md) · Sitewide rollout → [`sitewide-ia-rollout.md`](./sitewide-ia-rollout.md)

## Problem

The live site already separates **Projects** and **Publications** in the nav, but `/projects` used to list finished reports next to active work. That mixed “join” and “read/cite” intents (e.g. NFT Study Report vs PQC Migration).

## Design principles (references)

| Source | Principle applied |
|--------|-------------------|
| GOV.UK content types | Choose type by **purpose**, not appearance |
| W3C TR | Explicit **status of this document** |
| IETF Datatracker | WG ≠ document; cross-link entities |
| Hyperledger / OpenSSF | Lifecycle labels as public signals |
| NN/g taxonomy | Shallow **facets** + controlled vocabulary |

**Rule of thumb:** Separate the place to participate from the place to read; connect them with status labels and related links.

## Entity model

```
Join path:  Working Group → Project hub → Meetings / Events
Read path:  Publications library (+ optional /publications/[slug]) ↔ related hubs
```

| Entity | Role | Primary URL |
|--------|------|-------------|
| Working Group | Org unit | `/activities/working-groups` |
| Project hub | Active workstream | `/projects/[slug]` |
| Publication | Dated artefact to read/cite | `/publications`, `/publications/[slug]` |
| Event | Time-bound gathering | `/events/...` |

### Hub creation rule

Create/keep a hub only if Block / WG / GDC (or similar) work continues **or** an invite URL is needed. Finished study reports with no ongoing stream (e.g. NFT Part 1) are **publications only** (`Historical`).

### Canonical example — NFT Study Report

- Slug: `nft-study-report-part-1`
- Status: `Historical`
- Theme: `nft`
- **No** project hub
- Path: `/publications/nft-study-report-part-1`

## What was implemented

| Area | Location |
|------|----------|
| Editorial model | `docs/content-model.md` |
| Active hubs (15) | `contents/projectHubs.ts` |
| Themes vocabulary | `contents/themes.ts` |
| Document metadata (study reports) | `contents/documents.ts` (`slug`, `status`, `themes`, `summary`, `relatedProjectSlugs`) |
| Enrichment helpers | `lib/publications.ts`, `lib/relatedContent.ts` |
| Task guide | `/start` → `app/start/page.tsx` |
| Projects listing (hubs only) | `app/projects/page.tsx` |
| Project hub pages | `app/projects/[slug]/page.tsx` |
| Publications library + facets | `app/publications/page.tsx`, `components/DocumentTable.tsx` |
| Publication landing pages | `app/publications/[slug]/page.tsx` |
| Visual sample | `design-mocks/project-hub-sample.html` (Past publications / Start here links) |

`contents/projects.ts` no longer carries a `published` list. Do not reintroduce publications onto the Projects page.

## User entry points

1. **Join / invite** → `/projects` → hub  
2. **Read / cite** → `/publications` (filter `what=study_report`, themes, status)  
3. **Block records** → `/events` → meeting reports  
4. **WG overview** → `/activities/working-groups`  

`/start` presents these four paths in plain language.

## Status vocabularies

**Project hub:** `In Development` | `In Progress` | `Public Comment` | `Published` | `Dormant` | `Archived`

**Publication:** `Current` | `Superseded` | `Historical`

## Intentionally out of scope (for later)

- Discourse / Drive auto-sync  
- Full-text site search engine  
- Landing pages for all ~186 documents (study reports and key outputs first)

## Success checks

- Invite emails link to an **active project hub**, not a mixed publications dump  
- Searching/browsing NFT lands on a **Historical** publication without a join CTA as the primary action  
- Projects and Publications are not dual-listed for the same finished study report  

## For the next implementer

1. Read `docs/content-model.md` before adding content.  
2. New active work → `contents/projectHubs.ts` + optional docs on the hub.  
3. New finished report → `contents/documents.ts` with metadata; add `slug` if it needs `/publications/[slug]`.  
4. Keep design and handover docs in **English**.  

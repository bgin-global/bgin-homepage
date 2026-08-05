# BGIN website content model

Handover and design documentation for this workstream is maintained in **English**.
Implementation overview: [`content-ia-handover.md`](./content-ia-handover.md).

This document fixes how editors choose content types, status labels, and hub pages.
It follows the split used by GOV.UK (purpose → content type), W3C (status of this document),
IETF Datatracker (WG ≠ document), and Hyperledger / OpenSSF (lifecycle as a public signal).

## Entities

| Entity | Purpose | URL |
|--------|---------|-----|
| Working Group | Org unit, Discourse, calendar | `/activities/working-groups` |
| Project hub | Active work: status, docs, how to join | `/projects/[slug]` |
| Publication | Dated output to read / cite | `/publications` and optionally `/publications/[slug]` |
| Event / Meeting | Time-bound gathering; minutes become publications | `/events/...` |

**Join path:** WG → Project hub → Meetings  
**Read path:** Publications library (+ related project links)

Participation is **permissionless** — not membership-gated. Site copy should say
anyone can contribute via Discourse / hubs / meetings; reserve “member” for
governance roles (e.g. Steering Committee), not for joining the work.

## Project hub status (public labels)

Use exactly these strings on hubs:

- `In Development` — early build; invite carefully
- `In Progress` — active drafting / sessions
- `Public Comment` — open for review
- `Published` — deliverable out, hub kept only if work continues (e.g. Accountable Wallet)
- `Dormant` — paused
- `Archived` — no longer maintained as a hub

### When to create a project hub

Create or keep a hub only if **at least one** is true:

1. Block / WG / GDC (or similar) sessions continue, **or**
2. An invite URL is needed for participation

Do **not** create a hub for a finished study report with no ongoing workstream
(example: NFT Study Report Part 1 → Publication only, status Historical).

## Publication status

| Status | Meaning |
|--------|---------|
| `Current` | Best available / still the cited version |
| `Superseded` | Replaced by a newer publication or project deliverable |
| `Historical` | Completed record; not an active work item (GOV.UK history-mode analogue) |

### Document `what` → public label

| Internal `what` | Public label |
|-----------------|--------------|
| `study_report` | Study report |
| `meeting_report` | Meeting report |
| `working_doc` | Working document |
| `governance_doc` | Governance |
| `news_letter` | Newsletter |
| `other` | Other |

## Editor checklist (new artefact)

```
New artefact
  → Need ongoing sessions or an invite URL?
       YES → Project hub (or add to Documents on an existing hub)
       NO  → Publication only (study_report / meeting_report / …)
  → Succeeds an older publication?
       YES → set old status=Superseded; link relatedProjectSlugs / relatedPublication
```

Review Dormant / Archived hubs quarterly.

## Color tokens (site chrome)

House system for UI chrome (not WG timetable coding colors):

| Role | Value |
|------|--------|
| Canvas | white |
| Section wash | gray-50 |
| Primary action / links | blue-700 (`#1d4ed8`) |
| Primary hover | blue-800 |
| Soft accent | blue-50 |
| Body text | gray-900 / gray-700 |

Avoid as site chrome: legacy soft blue `#6890F5`, gold/lime, teal hybrid bands, indigo gradients, USDC `#2775CA` as primary fills. Event CSS: `styles/block13.css` `--bgin-primary`.

### Working Group identity colors

Source of truth: `contents/wgIdentity.ts` (also mirrored in `styles/block13.css` WG CSS vars and Block program legends via `lib/block14-wg-colors.ts`). Use for chips, left bars, and WG tabs — not for primary Register CTAs.

| WG | Color | Hex |
|----|--------|-----|
| IKP | Sky | `#0369a1` |
| Cyber Security | Emerald | `#047857` |
| FASE | Violet | `#6d28d9` |
| Agentic AI | Amber | `#b45309` |
| Inactive / unmapped | Gray | `#6b7280` |

UI helper: `components/WgChip.tsx`.

## CTA hierarchy

One primary filled action per view. Do not compete campaign, join, and orient CTAs at the same visual weight.

| Rank | Action | Treatment | Where |
|------|--------|-----------|--------|
| Primary | Register Block 15 (campaign window) | Filled blue-700 / band white button | Header, home Block 15 band, priority hubs |
| Secondary | Work on Discourse | Outline `border` (not `border-2`), `font-medium` | Header, How to join, hubs |
| Tertiary | Start here, Browse projects/publications/events, Event details | Text links or in-card arrows only — never filled buttons | Nav, intent cards, How to join copy |

Rules: (1) How to join must not re-primary Register or stack Browse/Start as buttons. (2) Register href prefers Eventbrite (`BLOCK15_REGISTER`) for one-click signup; event page is tertiary “details”. (3) After Block 15, demote or remove campaign primary and keep Discourse as the standing secondary.

## Typography

Faces load in `app/layout.tsx` via `next/font` (do not `@import` Google Fonts in CSS):

| Role | Face | CSS var / Tailwind |
|------|------|--------------------|
| Body / UI | Inter | `--font-sans` / `font-Inter` |
| Display / titles | Familjen Grotesk | `--font-display` / `font-FamiljenGrotesk` |
| Japanese | Noto Sans JP | `--font-jp` (stacked after Latin) |

Shared classes: `styles/custom.ts` → `TYPE` / `TITLE` / `DESCRIPTION` (lede uses `text-lg leading-7`). Long-form news body: `.bgin-prose` (`max-width: 65ch`) in `app/globals.css`. Body line-height ≈ 1.6; JP containers (`lang="ja"`) ≈ 1.75.

## Themes (controlled vocabulary)

Defined in `contents/themes.ts`. Prefer these tags over free text.
Steward: homepage maintainers (review when adding new themes).

## News cards (WG calls and similar)

Editors: when adding items to `contents/news.ts`:

1. **Title** must include the WG name(s) and date — e.g. `IKP WG call — July 30`, not `Next WG is coming`.
2. **Description** is a one-line summary for Latest News: agenda focus and/or target projects when known; if not yet known, say so briefly (`agenda TBA`).
3. Prefer naming priority projects (PQC, ST/PP, etc.) when the call is preparing Block / GDC sessions.
4. **Tags** must include the WG short name(s) — `IKP`, `Cyber Security` (or `CS`), `FASE`, `Agentic AI` — so Latest News shows colored WG chips (`contents/wgIdentity.ts`). Keep `Working Group` / `Event` as category tags.

## NFT Study Report (canonical example)

- **Not** a project hub
- Publication slug: `nft-study-report-part-1`
- Status: `Historical`
- Themes: `nft`
- Listed under `/publications`, not under `/projects`

## Source of truth

- Active hubs: `contents/projectHubs.ts`
- Document files + metadata: `contents/documents.ts` (+ enrichment via optional fields)
- Themes: `contents/themes.ts`
- Legacy card list on `/projects` (in-progress only): `contents/projects.ts` — must not reintroduce a `published` section on the Projects page

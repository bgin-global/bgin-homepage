# Sitewide IA rollout

English design brief for aligning the rest of [bgin-global.org](https://bgin-global.org) with the Projects / Publications information architecture. Companion docs: [`content-model.md`](./content-model.md), [`content-ia-handover.md`](./content-ia-handover.md). Latest ship notes: [`session-2026-08-05-log.md`](./session-2026-08-05-log.md), [`session-2026-08-05-handover.md`](./session-2026-08-05-handover.md).

## Decision

- Align **page roles and intent separation** sitewide.
- Do **not** clone the project-hub visual template onto About, Governance, Sponsors, or News.
- Primary driver: Block 15 / GDC invitation usefulness (clear single URLs).
- Design and handover documentation stays in **English**.

## Shared landing-page checklist

Every major landing page should include:

1. One sentence: what this section is for / not for  
2. Status or time signal where relevant (Upcoming / Past, Active / Historical)  
3. One primary next action  
4. Cross-links to join / read / attend when useful  
5. No mixed “active projects + finished PDF dump”

## Nav role map

| Nav item | User intent | Primary destination |
|----------|-------------|---------------------|
| Start here | Orient | `/start` |
| Projects | Join / track work | `/projects` → `/projects/[slug]` |
| Publications | Read / cite | `/publications` |
| Events | Attend | `/events` → Block / Layer2 pages |
| Activities | Understand structure | `/activities` → WG / Block / Layer2 |
| Working Groups | Org unit entry | `/activities/working-groups` |
| News | Announcements | `/news` |
| About / Governance / Sponsors | Institutional | Stable pages + link to `/start` |

Recommended header order (task-first): Start here → About → Activities → Projects → Publications → Events → News → Governance → Sponsors.

## Best-practice sources

- IETF: front door + upcoming meetings; deep work elsewhere  
- W3C 2023: intent-labelled nav; phase public pages first  
- GOV.UK: homepage not exhaustive; purpose copy on landings  
- OpenSSF: projects vs guides/resources  

## Non-goals

- Full visual / brand redesign  
- Hub skeleton on every page  
- Full-text search engine  
- Discourse / Drive auto-sync  

## Success metrics

1. Invite email can use `/projects/[slug]` with roadmap + upcoming meetings for priority hubs.  
2. Home after hero answers: join / read / attend.  
3. Events upcoming items include multi-line plans.  
4. Each active WG page links to hubs + publications filter.  
5. No finished study report listed as an active project.  

## Validation tasks (&lt;3 clicks from Home or `/start`)

1. Invite someone to PQC Migration  
2. Find the NFT Study Report  
3. Find Block 15 plan / registration  

## Phase status (implemented)

| Phase | Deliverable |
|-------|-------------|
| A | This document |
| B | Hub Roadmap + Upcoming via `hubSchedules.ts`; listing `?wg=` |
| C | Home intent strip + MeetingCard next activities |
| D | Events MeetingCards + Block 15 hub links |
| E | WG pages + `WgProjectLinks` |
| F | Nav order; purpose lines on About / Gov / Sponsors / News / Activities |
| G | `MeetingCard`, `StatusChip`, `design-mocks/ia-shared-patterns.md` |

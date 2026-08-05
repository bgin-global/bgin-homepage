# Shared IA UI patterns (thin visual layer)

Reference for components used across Home, Events, and Project hubs. Full hub density remains in `project-hub-sample.html`. No separate Home/Events HTML mock — use the Next.js pages as the source of truth after the sitewide IA rollout.

## Components

| Pattern | Implementation |
|---------|----------------|
| Meeting card (type chip, when, plan lines, link) | `components/MeetingCard.tsx` + `contents/meetingTypes.ts` |
| Status chip (project / publication / time) | `components/StatusChip.tsx` |
| Hub roadmap + meetings data | `contents/hubSchedules.ts` |
| Site upcoming list | `getSiteUpcomingMeetings()` |

## Visual rules

- Reuse existing BGIN blue and Familjen Grotesk / Inter.
- No marketing landing-page reskin.
- Priority meetings use a solid tinted border (e.g. orange for GDC), not multi-layer shadows or glow.

## Design docs

- `docs/sitewide-ia-rollout.md`
- `docs/content-model.md`
- `docs/content-ia-handover.md`

# Handover — 2026-09-04

English handover after GDC 2026 ended: Block 15 is the next event, the GDC wrap is on News, and Vercel no longer refreshes the browserslist database on every install.

**Standing IA docs:** [`content-model.md`](./content-model.md) · [`content-ia-handover.md`](./content-ia-handover.md) · [`session-2026-08-05-handover.md`](./session-2026-08-05-handover.md)

---

## Homework — October 2026 (once)

**Do this once in October 2026. Not on every deploy.**

Until PR **#101**, `package.json` ran `npx update-browserslist-db@latest` as a `postinstall` hook. That spent ~9 minutes of each Vercel build updating Autoprefixer’s browser-support table. The hook is gone. The table still needs a periodic refresh.

| | |
|--|--|
| When | October 2026, **once** |
| Where | Clone of [bgin-global/bgin-homepage](https://github.com/bgin-global/bgin-homepage), branch from current `main` |
| Command | `npm run update-browserslist` |
| If `package-lock.json` changes | Commit it, open a PR, merge. Site CSS should be unchanged or only prefix noise. |
| If nothing changes | Stop. No PR needed. |
| Do not | Put the command back in `postinstall`, or run it on Vercel. |

After October, the same command is enough every few months if CSS prefix warnings appear. It is not a Block 15 or content task.

---

## Current production state (2026-09-04)

- Next event sitewide: **Block 15** (15–16 Oct 2026, Washington, D.C.). GDC is past.
- GDC wrap: `/news/260904-gdc26-wrap` (venue / Quai des Bergues / Room E and K boards; no sponsor plenary photo).
- Session records stay on their own News pages (Chatham House). Do not fold them into the wrap.
- Upcoming cards: `contents/hubSchedules.ts` → `getSiteUpcomingMeetings()`.
- Browserslist: `npm run update-browserslist` only (see homework above). PR [#101](https://github.com/bgin-global/bgin-homepage/pull/101).

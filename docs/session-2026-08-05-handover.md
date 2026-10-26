# Handover — 2026-08-05 session

English handover for whoever continues after PR **#89** landed on `main`.  
**Session log (what happened):** [`session-2026-08-05-log.md`](./session-2026-08-05-log.md)  
**Later session (GDC wrap / Block 15 next / browserslist):** [`session-2026-09-04-handover.md`](./session-2026-09-04-handover.md)  
**Editorial model:** [`content-model.md`](./content-model.md) · **IA overview:** [`content-ia-handover.md`](./content-ia-handover.md) · **Sitewide checklist:** [`sitewide-ia-rollout.md`](./sitewide-ia-rollout.md)

---

## Current production state

- Project hubs, publications IA, `/start`, Block 15 campaign, Discourse guide, and visual tokens from this session are on **`main`** (merge `6d49695`).
- Treat **project hubs as status hubs** (not marketing LPs): status + pitch + docs + how to join + Block 15.
- Participation copy: **permissionless** (not membership-gated).
- Discourse secondary CTAs should open **`/start/discourse`**, not a blind jump to the forum (except the explicit escape link on hubs).

---

## Do this next (priority)

### P0 — October 2026: browserslist refresh (once)

See [`session-2026-09-04-handover.md`](./session-2026-09-04-handover.md). Run `npm run update-browserslist` **once in October 2026**. Commit `package-lock.json` only if it changes. Do not restore the old `postinstall` hook.

### P0 — Confirm News listing for Block 15 registration

| Check | Detail |
|-------|--------|
| Article page | `/news/260804-block15-registration-open` should exist |
| Listing | `contents/news.ts` should include id `"16"` at the **top** of `allNews` with `link: "/news/260804-block15-registration-open"` |
| Surfaces | Home Latest News (`maxItems={3}`) and `/news` both read `allNews` |

If `"16"` is missing on the remote you are about to push, include the local restore of `contents/news.ts` in your commit. After deploy, verify the card appears first (or among the first three) on the homepage.

### P1 — Smoke-test production after deploy

1. `/` — Block 15 registration band; Key Projects / hubs; Discourse band; Latest News shows Block 15 registration.
2. `/events/20261015-block15` — spine open; folded sections; hash deep-links open folds; Register CTA → Eventbrite.
3. `/projects` and one hub (e.g. `/projects/pqc-migration`) — StatusChip readable; Discourse → guide; Block 15 CTA.
4. `/start` and `/start/discourse` — guide explains signup; external link to `bgin.discourse.group`; `?next=` only accepts that host.
5. `/about` — timeline G20 + FIN/SUM images (JPEG, not SVG); check sharpness at desktop width (sources are still low-res).

### P2 — Optional content / asset upgrades

| Item | Note |
|------|------|
| G20 / FIN/SUM photos | Replace JPEGs if original Goodway / Nikkei files appear (same panel scenes). Keep Timeline `max-h` so low-res assets are not stretched. |
| About Story images | `story-01.jpg` / `story-02.jpg` were introduced during an earlier mistaken fix for “BGIN Story” photos; confirm with stakeholders whether Story should keep those or revert to prior assets. |
| WG News card titles | Older WG call cards still use vague “Next WG is coming…” titles; prior branch had clearer IKP-named titles (see session log / git history around `0104cc5`). |

---

## Locked product decisions (do not casually reverse)

1. **Projects ≠ Publications** — finished reports without an active stream stay on `/publications` only.
2. **Hub statuses** — exact strings in `content-model.md` / `StatusChip`.
3. **Block 15 primary CTA** — Eventbrite (`BLOCK15_REGISTER` in `contents/block15Promo.ts`); event page is details.
4. **Discourse** — orientation page first (`contents/discourse.ts`); validate `next` to Discourse host only.
5. **Visual tokens on conversion path** — prefer `CUSTOM_STYLES.TYPE` / `SPACE` / `RADIUS`; avoid reintroducing large radius + heavy shadows on hub/Block 15 cards.
6. **House chrome colors** — blue-700 primary; do not use gold/teal/purple as site chrome (WG colors are attribution chips only — `contents/wgIdentity.ts`).

---

## Important files map

| Concern | Where to edit |
|---------|----------------|
| Block 15 promo URLs / who-should-join | `contents/block15Promo.ts` |
| Hub copy / status / pitch | `contents/projectHubs.ts` |
| Hub schedules | `contents/hubSchedules.ts` |
| Discourse guide + allowed host | `contents/discourse.ts`, `app/start/discourse/page.tsx` |
| News cards | `contents/news.ts` (+ page under `app/news/...`) |
| About timeline images | `contents/roadmaps.ts`, `public/images/About/` |
| Type / spacing / radius | `styles/custom.ts` |
| Block 15 / event card CSS | `styles/block13.css` |
| Header CTAs | `components/Header.tsx` |

---

## Git / deploy notes

- Production: push/merge to **`main`**.
- Preview: PR against any branch (repo README).
- When resolving future merges against a revert-heavy history: if `main` deleted hub/Discourse files your branch still needs, **restore from the feature branch** and re-run `tsc --noEmit` before merge.
- Unrelated local dirt sometimes appears as a duplicated Block 11 `.docx` path under `public/documents/meeting-reports/block11/` — do not commit unless intentionally cleaning that asset.

---

## Suggested commit message (for this follow-up bundle)

If committing the News restore + these session docs together:

```
Restore Block 15 registration news card and add 2026-08-05 session docs.

EOF
```

Or split: (1) `contents/news.ts` only, (2) `docs/session-2026-08-05-*.md` (+ any doc index links).

/** Shared Block 15 campaign links and copy (registration drive through Oct 2026). */

export const BLOCK15_PAGE = "/events/20261015-block15";
export const BLOCK15_REGISTER =
  "https://www.eventbrite.com/e/bgin-block15-tickets-1990274282957";

export const BLOCK15_META = {
  title: "BGIN Block 15",
  when: "15–16 Oct 2026",
  where: "Washington, D.C.",
  format: "Hybrid — remote participation available",
  why: "Multi-stakeholder standards work on PQC migration, cybersecurity information sharing, wallet assurance, and related governance tracks — in D.C. ahead of the next policy cycle.",
};

export const BLOCK15_WHO = [
  {
    label: "Regulators & public sector",
    body: "Engage practitioners on deployable governance and assurance patterns.",
  },
  {
    label: "Operators & industry",
    body: "Shape information-sharing, wallet, and PQC migration guidance with peers.",
  },
  {
    label: "Researchers & standards contributors",
    body: "Advance drafts in working sessions; fee waivers available for presenters.",
  },
  {
    label: "New participants",
    body: "Join hybrid sessions; start from project hubs, then register for Block 15.",
  },
] as const;

export const BLOCK15_KEY_HUBS = [
  { slug: "pqc-migration", title: "PQC Migration" },
  { slug: "cybersecurity-information-sharing", title: "Info Sharing Framework" },
  { slug: "security-ai-agent", title: "Security AI Agent" },
  { slug: "st-pp", title: "ST / PP" },
  { slug: "illicit-activities", title: "Common Lexicon" },
] as const;

const KEY_HUB_SLUGS: Set<string> = new Set(
  BLOCK15_KEY_HUBS.map((h) => h.slug)
);

/** Priority hubs used in Block 15 invite / registration drive. */
export function isBlock15KeyHub(slug: string): boolean {
  return KEY_HUB_SLUGS.has(slug);
}

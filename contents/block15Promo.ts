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

/** Block 15 opening keynote (Day 1, 09:20–09:50, Room A) — session 1-2 in the program. */
export const BLOCK15_KEYNOTE = {
  sessionId: "1-2",
  sessionPage: `${BLOCK15_PAGE}/sessions/1-2`,
  label: "Opening keynote",
  title: "Crypto Agility in the Quantum and AI Era",
  when: "15 Oct 2026 · 09:20–09:50",
  room: "Room A",
  speaker: {
    name: "Alex Pruden",
    role: "CEO & Co-Founder, Project Eleven",
    image: "/images/Events/person/AlexPruden.jpeg",
    x: "https://x.com/apruden08",
    linkedin: "https://www.linkedin.com/in/alex-pruden/",
  },
  organization: {
    name: "Project Eleven",
    website: "https://www.projecteleven.com",
    x: "https://x.com/projecteleven",
    linkedin: "https://www.linkedin.com/company/p-11/",
  },
  /** One-line version for cards and the home page band. */
  teaser:
    "Why choosing the “right” algorithm is no longer enough — crypto agility as a design principle for digital assets and blockchain systems, and the practical work of migrating systems that secure billions of dollars in value.",
  abstract: [
    "Cryptography has long been treated as foundational infrastructure: choose secure primitives, implement them correctly, and expect them to remain reliable for decades. That assumption is beginning to break down. Advances in quantum computing are creating a clear migration imperative for widely deployed public-key cryptography, while AI is accelerating both the pace and sophistication of security threats.",
    "In this environment, the challenge is no longer simply choosing the “right” cryptographic algorithm. Organizations need the ability to adapt their cryptographic infrastructure as threats, standards, and technologies evolve. This talk will explore crypto agility as an essential design principle for digital assets and blockchain systems, the practical challenges of migrating systems that secure billions of dollars in value, and why organizations should begin preparing for cryptographic change well before existing standards are broken.",
  ],
  bio: [
    "Alex Pruden is the CEO & Co-Founder of Project Eleven, an applied lab of builders and technologists at the intersection of quantum computing and cryptography to harden digital assets and build the financial rails in the post-quantum era.",
    "Alex is a former U.S. Army Green Beret who transitioned from military service to a career in blockchain and cryptocurrency after witnessing the profound challenges in conflict zones like Iraq, Afghanistan, and Syria. After earning an MBA from Stanford, he began his decade-long career in the industry at GGV Capital, Coinbase, and Andreessen Horowitz before joining Aleo as the first employee. As CEO, he scaled the organization to pioneer the first permissionless, privacy-preserving smart contract blockchain powered by zero-knowledge proofs.",
  ],
} as const;

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

/**
 * Block 15 IKP PQC working sessions (Day 1, Room B) — sessions 1-4 and 1-7.
 * Shared competition context: the PQC Migration Prize, its public repository,
 * the pathway to a standard, and the link back to the opening keynote.
 */
const PQC_REPO = "https://github.com/bgin-global/pqc-agility-competition";

export const BLOCK15_PQC_SESSIONS = {
  sessionIds: ["1-4", "1-7"] as readonly string[],
  keynote: {
    href: BLOCK15_KEYNOTE.sessionPage,
    label: `Opening keynote · ${BLOCK15_KEYNOTE.title}`,
    speaker: `${BLOCK15_KEYNOTE.speaker.name} (${BLOCK15_KEYNOTE.speaker.role})`,
  },
  competition: {
    name: "PQC Migration Prize Competition",
    blurb:
      "A multi-year (2026–2028), internationally open prize competition on post-quantum cryptography migration for public blockchains, hosted by the Japanese Government (METI/NEDO). BGIN coordinates internationally and runs the neutral evaluation testbed (BSafe.network concept). The hard problem on public chains is deployment, evaluation, testbeds, and migration governance — not selecting new PQC primitives: the competition starts from NIST process outputs (ML-DSA and related), and NIST is the algorithm and parameter authority, not a competition lane.",
    repo: PQC_REPO,
    discourse:
      "https://bgin.discourse.group/c/post-quantum-crypto-agility-competition/44",
  },
  /** Competition → standard → ISO → national criteria. */
  pathway: [
    {
      step: "Competition & evaluation",
      detail: "Transparent, reproducible evaluation on a geographically distributed neutral testbed (2026–2028)",
    },
    {
      step: "BGIN Standard",
      detail: "Evaluation results and practice consolidated into a candidate BGIN Standard",
    },
    {
      step: "ISO/TC 307",
      detail: "Via BGIN’s Category A liaison",
    },
    {
      step: "Japan crypto-asset security criteria",
      detail: "The host’s channel into national criteria",
    },
  ],
  /** The six-month workshop series (Sep 2026 → Feb 2027); Block 15 is W2. */
  workshops: [
    { id: "W1", when: "Sep 2026", focus: "Kickoff: repository chartered, core outcomes, committee nominations opened" },
    { id: "W2", when: "Oct 2026 · Block 15", focus: "Committee seated (Phase A); metrics v0 → v1; scheme scope rulings", current: true },
    { id: "W3", when: "Nov 2026", focus: "Testbed: harness interface, reference CPU class, COI policy, node-host call" },
    { id: "W4", when: "13 Dec 2026 · SSR, Baltimore", focus: "Rubric v1; “PQC-ready chain” definition; call-text input package to METI/NEDO" },
    { id: "W5", when: "Jan 2027", focus: "Pilot nodes running reference runs" },
    { id: "W6", when: "Feb 2027 · CoDecFin at FC’27", focus: "Retrospective; BGIN Standard outline v0" },
  ],
  links: [
    { label: "Competition repository", href: PQC_REPO },
    { label: "Workshop roadmap", href: `${PQC_REPO}/blob/main/workshops/ROADMAP.md` },
    { label: "Evaluation metrics (draft v0)", href: `${PQC_REPO}/blob/main/evaluation/METRICS.md` },
    { label: "Governance & evaluation committee", href: `${PQC_REPO}/blob/main/GOVERNANCE.md` },
    { label: "Competition category on Discourse", href: "https://bgin.discourse.group/c/post-quantum-crypto-agility-competition/44" },
  ],
} as const;

export function isBlock15PqcSession(sessionId: string): boolean {
  return BLOCK15_PQC_SESSIONS.sessionIds.includes(sessionId);
}

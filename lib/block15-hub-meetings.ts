import type { MeetingItem } from "@/contents/meetingTypes";
import { findBlock15Session } from "./block15-find-session";

const SESSION_PLANS: Record<string, string[]> = {
  "1-2": [
    "Opening keynote: Alex Pruden (CEO & Co-Founder, Project Eleven) on crypto agility as a design principle for digital assets and blockchain systems, and the practical work of migrating systems that secure billions of dollars in value.",
    "Sets the Day 1 framing for the IKP PQC sessions that follow: deployment, crypto agility, and governance — not a new-algorithm contest — and connects the GDC26 findings to the competition evaluation work.",
  ],
  "1-3": [
    "Overview of the AI and blockchain industry today: agents that hold wallets and pay in stablecoins, on-chain provenance for data, models and outputs, and AI for on-chain analytics and auditing.",
    "Policy questions: accountability when an autonomous agent transacts, agent identity and authorisation, AML/CFT and consumer protection for machine-initiated activity — scoping the FASE AI + Blockchain workstream.",
  ],
  "1-4": [
    "Resource estimates and the ECDSA.fail community: what the benchmark numbers mean for migration timelines, and how they feed competition judging criteria.",
    "Pressure-test the draft evaluation metrics (v0) and the open questions on reference hardware and block mix in public.",
  ],
  "1-5": [
    "Hands-on Agent Hack work in open space alongside Local Pi connectivity.",
    "Align agent standards discussions with Security AI Agent themes.",
  ],
  "1-6": [
    "Review the Security Supply Chain draft and vendor-guideline framing.",
    "Assign owners for post-Block revisions and WG comments.",
  ],
  "1-7": [
    "Crypto agility as a governance property and the NIST PQC signature migration path across Bitcoin, Ethereum, and other ecosystems — with NIST participation.",
    "Seat the evaluation committee (Phase A), take the scheme scope rulings, and consolidate feedback for the metrics register v1 and the migration playbook.",
  ],
  "2-2": [
    "Policy keynote framing for Day 2 FASE and cross-WG sessions.",
    "Link regulatory themes to harmonization discussion paper progress.",
  ],
  "2-3": [
    "The Discussion Paper \"The Industrial Structure of Digital Assets\": mapping the stakeholders and structural features of the industry as Japan moves crypto-asset regulation to the FIEA.",
    "Six open questions — competitive asymmetry, infrastructure, compete vs. share, public chains as public goods, coexistence with DeFi, diversifying capital markets — with proposals from the room.",
  ],
  "2-4": [
    "Joint Cyber + IKP session on Security AI Agent and information sharing.",
    "Map agent workflows to the published Information Sharing Framework.",
  ],
  "2-5": [
    "Could decentralised compute networks be commodity markets? The FASE study report \"Compute-as-Commodity\" applies six criteria to Akash, Bittensor, Render and Aethir.",
    "Productive vs. circular flows, regulatory gaps, and a draft policymaker checklist; links to the concentration-of-computing-resources challenge from session 2-3.",
  ],
  "2-6": [
    "Biometric ZKP side by side: what each proof actually proves, where the biometric lives, and what revocation means for a credential bound to something that cannot be rotated.",
    "Proof of personhood as agentic AI raises the cost of not knowing a counterparty is human — review the privacy / personhood taxonomy and capture IKP comments for draft pattern updates.",
  ],
  "2-L": [
    "Industry-led session on policy and market themes (partner and format to be announced).",
    "Practitioner perspectives on harmonized treatment of crypto-assets, stablecoins and tokenized deposits, feeding FASE harmonization deliverables.",
  ],
  "2-7": [
    "Compare stablecoin policy approaches across jurisdictions.",
    "Update the Practical Stablecoin Implementation Guide roadmap.",
  ],
  "2-8": [
    "Joint session on offline key management good practices.",
    "Align with wallet assurance and ST/PP adjacency work.",
  ],
  "2-9": [
    "Joint FASE/IKP session on AML policy, forensics, and common taxonomy.",
    "Advance forensics vs analytics framing and illicit-activity lexicon.",
  ],
  "2-10": [
    "Advance ST/PP drafts for wallet security assurance.",
    "Discuss certification adjacency and Block follow-on owners.",
  ],
};

/** Hub slug → Block 15 session IDs scheduled for that project. */
const HUB_SESSION_IDS: Record<string, string[]> = {
  "pqc-migration": ["1-2", "1-4", "1-7"],
  "ai-blockchain": ["1-3"],
  "agent-standards": ["1-5"],
  "security-supply-chain": ["1-6"],
  harmonization: ["2-2", "2-3", "2-5", "2-L"],
  "security-ai-agent": ["2-4"],
  "cybersecurity-information-sharing": ["2-4"],
  "privacy-enhanced-auth": ["2-6"],
  "stablecoin-guide": ["2-7"],
  "offline-key-management": ["2-8"],
  "forensics-analysis": ["2-9"],
  "illicit-activities": ["2-9"],
  "decentralization-metrics": ["2-5"],
  "st-pp": ["2-10"],
};

function formatWhen(sessionId: string, time: string, room: string): string {
  const dayLabel = sessionId.startsWith("1-") ? "15 Oct" : "16 Oct";
  const displayTime = time.endsWith("-")
    ? time.replace("-", " onwards")
    : time;
  return `${dayLabel} 2026 · ${displayTime} · ${room}`;
}

function sessionToMeeting(sessionId: string): MeetingItem | null {
  const found = findBlock15Session(sessionId);
  if (!found) return null;
  const { session } = found;
  return {
    type: "block",
    typeLabel: "Block 15 session",
    title: "BGIN Block 15",
    when: formatWhen(sessionId, session.time, session.room),
    sessionTitle: session.title,
    plan: SESSION_PLANS[sessionId] ?? [
      "Review latest drafts on the project hub before the session.",
      "Prepare written contributions if you plan to present.",
    ],
    href: `/events/20261015-block15/sessions/${sessionId}`,
    priority: true,
  };
}

export function getBlock15MeetingsForHub(slug: string): MeetingItem[] {
  const ids = HUB_SESSION_IDS[slug];
  if (!ids?.length) return [];
  return ids
    .map((id) => sessionToMeeting(id))
    .filter((m): m is MeetingItem => m !== null);
}

export function mergeBlock15Meetings(
  meetings: MeetingItem[],
  hubSlug: string
): MeetingItem[] {
  const block15 = getBlock15MeetingsForHub(hubSlug);
  if (block15.length === 0) return meetings;

  const withoutGenericBlock15 = meetings.filter(
    (m) =>
      m.type !== "block" ||
      !m.href.match(/\/events\/20261015-block15\/?$/)
  );

  const gdc = withoutGenericBlock15.filter((m) => m.type === "gdc");
  const wg = withoutGenericBlock15.filter((m) => m.type === "wg");
  const other = withoutGenericBlock15.filter(
    (m) => m.type !== "gdc" && m.type !== "wg"
  );

  return [...block15, ...other, ...wg, ...gdc];
}

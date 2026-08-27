import type { MeetingItem } from "@/contents/meetingTypes";
import { findBlock15Session } from "./block15-find-session";

const SESSION_PLANS: Record<string, string[]> = {
  "1-2": [
    "Set the PQC migration framing for IKP working sessions on Day 1.",
    "Connect policy and deployment questions to project hub materials.",
  ],
  "1-3": [
    "Discuss AI–blockchain synergies and governance risks with practitioners.",
    "Capture use cases that feed FASE and Agentic AI follow-on work.",
  ],
  "1-4": [
    "Advance crypto agility and PQC migration drafts with IKP contributors.",
    "Identify open questions for neutral evaluation and testbed coordination.",
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
    "Continue IKP PQC migration dialogue from the morning session.",
    "Consolidate feedback for migration playbook updates.",
  ],
  "1-8": [
    "Industry-led policy session (partner to be announced).",
    "Relate industry input to harmonization and industry-structure work.",
  ],
  "1-9": [
    "Second industry session (partner to be announced).",
    "Collect practitioner perspectives for FASE harmonization deliverables.",
  ],
  "2-2": [
    "Policy keynote framing for Day 2 FASE and cross-WG sessions.",
    "Link regulatory themes to harmonization discussion paper progress.",
  ],
  "2-3": [
    "Advance shared industry-structure models for digital assets.",
    "Integrate feedback into the harmonization deliverable timeline.",
  ],
  "2-4": [
    "Joint Cyber + IKP session on Security AI Agent and information sharing.",
    "Map agent workflows to the published Information Sharing Framework.",
  ],
  "2-5": [
    "Discuss decentralized compute and market-structure implications.",
    "Connect decentralization metrics work to industry-structure framing.",
  ],
  "2-6": [
    "Review privacy-enhanced authentication, ZKP, and proof-of-personhood topics.",
    "Capture IKP comments for draft pattern updates.",
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
  harmonization: ["1-8", "1-9", "2-2", "2-3", "2-5"],
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

  return [...gdc, ...block15, ...other, ...wg];
}

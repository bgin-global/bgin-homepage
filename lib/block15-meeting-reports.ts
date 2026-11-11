/**
 * Block 15 session reports (15–16 October 2026, Washington, D.C.).
 * PDFs live under public/documents/meeting-reports/block15/.
 * Status and wording follow the reports themselves: drafts for
 * working-group review, prepared under the Chatham House Rule.
 */

export type Block15ReportGroup =
  | "Plenary"
  | "Identity, Key Management & Privacy"
  | "Cyber Security"
  | "Financial Applications & Social Economics";

export interface Block15Report {
  file: string;
  title: string;
  /** Program session IDs covered by this report. */
  sessionIds: string[];
  group: Block15ReportGroup;
  when: string;
  room: string;
  hubSlugs: string[];
}

export const BLOCK15_REPORTS_PAGE = "/events/20261015-block15/meeting-reports";

export const BLOCK15_REPORT_STATUS = "Draft for working-group review";

export function block15ReportHref(file: string): string {
  return `/documents/meeting-reports/block15/${file}`;
}

export const block15Reports: Block15Report[] = [
  {
    file: "Block15_Day1_Opening.pdf",
    title: "Opening Plenary",
    sessionIds: ["1-1"],
    group: "Plenary",
    when: "15 Oct 2026 · 09:00–09:20",
    room: "Room A",
    hubSlugs: [],
  },
  {
    file: "Block15_Day1_Business_Meeting.pdf",
    title: "BGIN Business Meeting",
    sessionIds: ["1-10"],
    group: "Plenary",
    when: "15 Oct 2026 · 17:10–18:00",
    room: "Room A",
    hubSlugs: [],
  },
  {
    file: "Block15_Day1_Keynote_PQC.pdf",
    title: "Keynote: Crypto Agility in the Quantum and AI Era",
    sessionIds: ["1-2"],
    group: "Identity, Key Management & Privacy",
    when: "15 Oct 2026 · 09:20–09:50",
    room: "Room A",
    hubSlugs: ["pqc-migration"],
  },
  {
    file: "Block15_Day1_PQC_Migration_1.pdf",
    title: "IKP: PQC Migration",
    sessionIds: ["1-4"],
    group: "Identity, Key Management & Privacy",
    when: "15 Oct 2026 · 09:50–11:20",
    room: "Room A",
    hubSlugs: ["pqc-migration"],
  },
  {
    file: "Block15_Day1_PQC_Migration_2.pdf",
    title: "IKP: PQC Migration (2)",
    sessionIds: ["1-7"],
    group: "Identity, Key Management & Privacy",
    when: "15 Oct 2026 · 11:30–13:00",
    room: "Room A",
    hubSlugs: ["pqc-migration"],
  },
  {
    file: "Block15_Day2_Privacy_PoP.pdf",
    title: "IKP: Privacy Enhanced Authentication, ZKP and Proof of Personhood",
    sessionIds: ["2-6"],
    group: "Identity, Key Management & Privacy",
    when: "16 Oct 2026 · 11:30–13:00",
    room: "Room B",
    hubSlugs: ["privacy-enhanced-auth"],
  },
  {
    file: "Block15_Day1_Supply_Chain.pdf",
    title: "Cyber: Governance of the Security Supply Chain",
    sessionIds: ["1-6"],
    group: "Cyber Security",
    when: "15 Oct 2026 · 15:40–17:10",
    room: "Room A",
    hubSlugs: ["security-supply-chain"],
  },
  {
    file: "Block15_Day2_Security_Agent.pdf",
    title:
      "Cyber + IKP: Security AI Agent — Information Sharing and Vulnerability Handling",
    sessionIds: ["2-4"],
    group: "Cyber Security",
    when: "16 Oct 2026 · 09:50–11:20",
    room: "Room B",
    hubSlugs: ["security-ai-agent", "cybersecurity-information-sharing"],
  },
  {
    file: "Block15_Day2_Offline_Key.pdf",
    title: "Cyber + IKP: Offline Key Management",
    sessionIds: ["2-8"],
    group: "Cyber Security",
    when: "16 Oct 2026 · 14:30–16:00",
    room: "Room B",
    hubSlugs: ["offline-key-management"],
  },
  {
    file: "Block15_Day2_STPP.pdf",
    title: "Cyber: Security Target and Protection Profile (ST/PP)",
    sessionIds: ["2-10"],
    group: "Cyber Security",
    when: "16 Oct 2026 · 16:10–17:40",
    room: "Room B",
    hubSlugs: ["st-pp"],
  },
  {
    file: "Block15_Day1_AI_Blockchain.pdf",
    title: "FASE: AI and Blockchain",
    sessionIds: ["1-3"],
    group: "Financial Applications & Social Economics",
    when: "15 Oct 2026 · 14:00–15:30",
    room: "Room A",
    hubSlugs: ["ai-blockchain"],
  },
  {
    file: "Block15_Day2_Opening_Keynote_Policy.pdf",
    title: "Day 2 Opening and Keynote: The Conservation of Accountability",
    sessionIds: ["2-1", "2-2"],
    group: "Financial Applications & Social Economics",
    when: "16 Oct 2026 · 09:00–09:50",
    room: "Room A",
    hubSlugs: ["harmonization"],
  },
  {
    file: "Block15_Day2_Industrial_Design.pdf",
    title: "FASE: Industrial Design of Digital Assets",
    sessionIds: ["2-3"],
    group: "Financial Applications & Social Economics",
    when: "16 Oct 2026 · 09:50–11:20",
    room: "Room A",
    hubSlugs: ["harmonization"],
  },
  {
    file: "Block15_Day2_Decentralized_Compute.pdf",
    title: "FASE: Decentralized Compute and Market Structure",
    sessionIds: ["2-5"],
    group: "Financial Applications & Social Economics",
    when: "16 Oct 2026 · 11:30–13:00",
    room: "Room A",
    hubSlugs: ["decentralization-metrics", "harmonization"],
  },
  {
    file: "Block15_Day2_Stablecoin_Policy.pdf",
    title: "FASE: Stablecoin Policy — a Global Outlook",
    sessionIds: ["2-7"],
    group: "Financial Applications & Social Economics",
    when: "16 Oct 2026 · 14:30–16:00",
    room: "Room A",
    hubSlugs: ["stablecoin-guide"],
  },
  {
    file: "Block15_Day2_AML_Forensics.pdf",
    title: "AML Policy, Forensics and Analytics — Common Taxonomy (FASE/IKP)",
    sessionIds: ["2-9"],
    group: "Financial Applications & Social Economics",
    when: "16 Oct 2026 · 16:10–17:40",
    room: "Room A",
    hubSlugs: ["forensics-analysis", "illicit-activities"],
  },
];

export const BLOCK15_REPORT_GROUPS: Block15ReportGroup[] = [
  "Plenary",
  "Identity, Key Management & Privacy",
  "Cyber Security",
  "Financial Applications & Social Economics",
];

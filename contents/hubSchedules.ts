import type { MeetingItem, RoadmapItem } from "./meetingTypes";
import { WG_META, type ProjectHub, type WgId } from "./projectHubs";
import { mergeBlock15Meetings } from "@/lib/block15-hub-meetings";

const GDC26 = "https://globaldigitalcollaboration.org/gdc26?day=sept-2-3";
const BLOCK15 = "/events/20261015-block15";

export interface HubSchedule {
  roadmap: RoadmapItem[];
  meetings: MeetingItem[];
}

function defaultRoadmap(nextMilestone?: string): RoadmapItem[] {
  return [
    { when: "2025–26", what: "Block sessions & drafts", done: true },
    {
      when: "Sep–Oct 2026",
      what: nextMilestone ?? "GDC26 → Block 15",
      current: true,
    },
    { when: "2027", what: "Follow-on deliverables" },
  ];
}

function defaultMeetings(hub: ProjectHub): MeetingItem[] {
  const wg = WG_META[hub.wg];
  return [
    {
      type: "block",
      typeLabel: "Block meeting",
      title: "BGIN Block 15",
      when: "15–16 Oct 2026 · Washington, D.C.",
      plan: [
        "Advance this project’s open questions using the latest drafts and prior Block outcomes.",
        "Collect stakeholder feedback and assign owners for next deliverables.",
        "Confirm materials and contributors for the Block 15 program.",
      ],
      href: BLOCK15,
    },
    {
      type: "wg",
      typeLabel: "WG call",
      title: `${wg.label} Working Group`,
      when: "Announced on Discourse",
      plan: [
        "Review open comments on the latest draft or meeting report.",
        "Prep agenda items and contributors for upcoming Block / GDC milestones.",
        "Coordinate cross-WG handoffs where needed.",
      ],
      href: hub.discourseUrl,
      external: true,
    },
  ];
}

const PRIORITY: Record<string, HubSchedule> = {
  "pqc-migration": {
    roadmap: [
      { when: "Mar 2026", what: "Block 14 deep dive", done: true },
      {
        when: "3 Sep 2026",
        what: "GDC26 PQC migration session",
        done: true,
      },
      { when: "Oct 2026", what: "Block 15 (Washington, D.C.)", current: true },
      { when: "Dec 2026", what: "Related SSR workshop track" },
      { when: "2027+", what: "Public migration guidance" },
    ],
    meetings: [
      {
        type: "gdc",
        typeLabel: "GDC breakout",
        title: "GDC26 · Geneva",
        when: "3 Sep 2026 · 17:00–17:50",
        sessionTitle:
          "Post-Quantum Cryptography Migration on DLTs: Deployment, Agility & Governance",
        plan: [
          "Meeting report published (Chatham House Rule).",
          "Session slides are linked from the report.",
          "Continue at Block 15: PQC keynote and IKP PQC Migration sessions.",
        ],
        href: "/news/260903-gdc26-pqc-migration",
        priority: true,
      },
      {
        type: "block",
        typeLabel: "Block meeting",
        title: "BGIN Block 15",
        when: "15–16 Oct 2026 · Washington, D.C.",
        plan: [
          "Advance this project’s open questions using the latest drafts and prior Block outcomes.",
          "Collect stakeholder feedback and assign owners for next deliverables.",
          "Confirm materials and contributors for the Block 15 program.",
        ],
        href: BLOCK15,
      },
      {
        type: "wg",
        typeLabel: "WG call",
        title: "IKP Working Group",
        when: "Announced on Discourse",
        plan: [
          "Review open comments on the latest draft or meeting report.",
          "Prep agenda items and contributors for upcoming Block / GDC milestones.",
          "Coordinate cross-WG handoffs where needed.",
        ],
        href: WG_META.ikp.discourseUrl,
        external: true,
      },
    ],
  },
  "accountable-wallet": {
    roadmap: [
      { when: "2025", what: "Draft & Block sessions", done: true },
      { when: "2025–26", what: "Published package", done: true },
      { when: "Oct 2026", what: "Block 15 follow-on", current: true },
    ],
    meetings: [
      {
        type: "block",
        typeLabel: "Block meeting",
        title: "BGIN Block 15",
        when: "15–16 Oct 2026 · Washington, D.C.",
        plan: [
          "Connect published Accountable Wallet guidance to wallet assurance and ST/PP discussions.",
          "Collect implementation feedback from practitioners.",
          "Identify follow-on drafting needs for Block 15 outcomes.",
        ],
        href: BLOCK15,
      },
      {
        type: "wg",
        typeLabel: "WG call",
        title: "IKP Working Group",
        when: "Announced on Discourse",
        plan: [
          "Review open comments on the published package.",
          "Align with ST/PP and related wallet workstreams.",
        ],
        href: WG_META.ikp.discourseUrl,
        external: true,
      },
    ],
  },
  "cybersecurity-information-sharing": {
    roadmap: [
      { when: "Aug 2025", what: "Framework PDF published", done: true },
      { when: "Mar 2026", what: "Block 14 sessions", done: true },
      {
        when: "2–3 Sep 2026",
        what: "GDC26 + ISO-oriented next steps",
        current: true,
      },
      { when: "Oct 2026", what: "Block 15 coordination" },
    ],
    meetings: [
      {
        type: "gdc",
        typeLabel: "GDC breakout",
        title: "GDC26 · Geneva",
        when: "2–3 Sep 2026 · times TBA",
        sessionTitle: "Cybersecurity information sharing (CS track)",
        plan: [
          "Share framework adoption lessons with operators and ISAC-adjacent partners.",
          "Clarify handoff points to the Security AI Agent workstream.",
          "Capture ISO-path questions for Block 15.",
        ],
        href: GDC26,
        external: true,
        priority: true,
      },
      {
        type: "block",
        typeLabel: "Block meeting",
        title: "BGIN Block 15",
        when: "15–16 Oct 2026 · Washington, D.C.",
        plan: [
          "Review framework adoption and standardization next steps.",
          "Coordinate with Security AI Agent operational workstream (separate hub).",
          "Confirm owners for post-Block drafting.",
        ],
        href: BLOCK15,
      },
      {
        type: "wg",
        typeLabel: "WG call",
        title: "Cyber Security Working Group",
        when: "Announced on Discourse",
        plan: [
          "Track open comments on the Aug 2025 framework and Block 14 MRs.",
          "Prep Block / GDC materials; keep AI Agent track on its own agenda.",
        ],
        href: WG_META.cs.discourseUrl,
        external: true,
      },
    ],
  },
  "security-ai-agent": {
    roadmap: [
      { when: "2025–26", what: "Concept & dependency on framework", done: true },
      {
        when: "2 Sep 2026",
        what: "GDC26 vulnerability handling session",
        done: true,
      },
      { when: "Oct 2026", what: "Block 15", current: true },
    ],
    meetings: [
      {
        type: "gdc",
        typeLabel: "GDC breakout",
        title: "GDC26 · Geneva",
        when: "2 Sep 2026 · 12:00–12:50",
        sessionTitle:
          "Vulnerability Handling in the Agentic AI Era",
        plan: [
          "Meeting report published (Chatham House Rule).",
          "Session slides are linked from the report.",
          "Continue at Block 15: Cyber + IKP Security AI Agent session.",
        ],
        href: "/news/260902-gdc26-vulnerability-handling",
        priority: true,
      },
      {
        type: "block",
        typeLabel: "Block meeting",
        title: "BGIN Block 15",
        when: "15–16 Oct 2026 · Washington, D.C.",
        plan: [
          "Advance agent workflow concepts against the shared framework.",
          "Collect stakeholder feedback for next development milestones.",
        ],
        href: BLOCK15,
      },
      {
        type: "wg",
        typeLabel: "WG call",
        title: "Cyber Security Working Group",
        when: "Announced on Discourse",
        plan: [
          "Sync with Framework maintainers and Agentic AI category.",
        ],
        href: WG_META.cs.discourseUrl,
        external: true,
      },
    ],
  },
  "st-pp": {
    roadmap: [
      { when: "2025–26", what: "ST/PP drafting", done: true },
      {
        when: "3 Sep 2026",
        what: "GDC26 wallet assurance session",
        done: true,
      },
      { when: "Oct 2026", what: "Block 15", current: true },
    ],
    meetings: [
      {
        type: "gdc",
        typeLabel: "GDC breakout",
        title: "GDC26 · Geneva",
        when: "3 Sep 2026 · 15:00–15:50",
        sessionTitle: "Wallet Security Assurance: ST/PP and Convergence",
        plan: [
          "Meeting report published (Chatham House Rule).",
          "Session slides are linked from the report.",
          "Continue at Block 15: Cyber ST/PP session.",
        ],
        href: "/news/260903-gdc26-wallet-security-assurance",
        priority: true,
      },
      {
        type: "block",
        typeLabel: "Block meeting",
        title: "BGIN Block 15",
        when: "15–16 Oct 2026 · Washington, D.C.",
        plan: [
          "Advance ST/PP drafts and assurance notes.",
          "Assign owners for post-GDC follow-ups.",
        ],
        href: BLOCK15,
      },
      {
        type: "wg",
        typeLabel: "WG call",
        title: "Cyber Security Working Group",
        when: "Announced on Discourse",
        plan: ["Review draft comments and certification adjacency."],
        href: WG_META.cs.discourseUrl,
        external: true,
      },
    ],
  },
};

export function getHubSchedule(hub: ProjectHub): HubSchedule {
  const base = PRIORITY[hub.slug] ?? {
    roadmap: defaultRoadmap(hub.nextMilestone),
    meetings: defaultMeetings(hub),
  };
  return {
    roadmap: base.roadmap,
    meetings: mergeBlock15Meetings(base.meetings, hub.slug),
  };
}

/** Sitewide upcoming activities for Home / Events (shared MeetingCard model). */
export function getSiteUpcomingMeetings(): MeetingItem[] {
  return [
    {
      type: "gdc",
      typeLabel: "GDC",
      title: "GDC26 · Geneva",
      when: "2–3 Sep 2026",
      plan: [
        "Public programme includes BGIN-related sessions on PQC migration, wallet ST/PP, and agentic vulnerability handling.",
        "Use project hubs for session context and Block 15 follow-on.",
      ],
      href: GDC26,
      external: true,
      priority: true,
    },
    {
      type: "block",
      typeLabel: "Block meeting",
      title: "BGIN Block 15",
      when: "15–16 Oct 2026 · Washington, D.C.",
      plan: [
        "General meeting to advance critical projects, review drafts, and lock next deliverables.",
        "Join via the Block 15 event page; open relevant project hubs before you arrive.",
      ],
      href: BLOCK15,
      priority: true,
    },
    {
      type: "wg",
      typeLabel: "WG calls",
      title: "Working group calls",
      when: "See calendar & Discourse",
      plan: [
        "IKP, FASE, and Cyber Security hold recurring or as-needed calls.",
        "Check the working groups page calendar and Discourse announcements.",
      ],
      href: "/activities/working-groups",
    },
  ];
}

export function wgIdFromGroupName(groupName: string): WgId | null {
  const n = groupName.toLowerCase();
  if (n.includes("ikp") || n.includes("key management")) return "ikp";
  if (n.includes("cyber")) return "cs";
  if (n.includes("fase") || n.includes("financial")) return "fase";
  if (n.includes("agentic")) return "agentic";
  return null;
}

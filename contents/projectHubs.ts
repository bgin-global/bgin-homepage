import type { Theme } from "./themes";

export type ProjectStatus =
  | "In Development"
  | "In Progress"
  | "Public Comment"
  | "Published"
  | "Dormant"
  | "Archived";

export type WgId = "ikp" | "cs" | "fase" | "agentic";

export interface ProjectDocument {
  type: string;
  title: string;
  when: string;
  href?: string;
}

export interface RelatedInitiative {
  title: string;
  body: string;
}

export interface ProjectHub {
  slug: string;
  title: string;
  shortTitle?: string;
  wg: WgId;
  wgLabel: string;
  status: ProjectStatus;
  pitch: string;
  overview: string;
  statusText: string;
  deliverables: string[];
  themes: Theme[];
  discourseUrl: string;
  secondaryCta?: { label: string; href: string };
  workingFolder?: string;
  latestDocumentTitle?: string;
  nextMilestone?: string;
  documents: ProjectDocument[];
  /** Shown when documents[] is empty or incomplete (e.g. early workstreams). */
  documentsNote?: string;
  relatedSlugs?: string[];
  /** External / non-BGIN context (e.g. NEDO competition) — not BGIN-hosted. */
  relatedInitiatives?: RelatedInitiative[];
  participateBullets?: string[];
  listed: boolean;
}

/** Encode a path under public/documents/ for site links. */
export function documentHref(path: string): string {
  return `/documents/${path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/")}`;
}

export const WG_META: Record<
  WgId,
  { label: string; blurb: string; discourseUrl: string; publicationsQuery: string }
> = {
  ikp: {
    label: "IKP",
    blurb: "Key Management & Privacy",
    discourseUrl: "https://bgin.discourse.group/c/working-group-s/ikp-wg/8",
    publicationsQuery: "author=IKP",
  },
  cs: {
    label: "Cyber Security",
    blurb: "Standards & operations",
    discourseUrl: "https://bgin.discourse.group/c/working-group-s/cyber-security/32",
    publicationsQuery: "author=CS",
  },
  fase: {
    label: "FASE",
    blurb: "Finance & economics",
    discourseUrl: "https://bgin.discourse.group/c/working-group-s/fase/9",
    publicationsQuery: "author=FASE",
  },
  agentic: {
    label: "Agentic AI",
    blurb: "AI agent governance",
    discourseUrl: "https://bgin.discourse.group/c/working-group-s/21",
    publicationsQuery: "theme=agentic-ai",
  },
};

const GDC26 = "https://globaldigitalcollaboration.org/gdc26?day=sept-2-3";

export const projectHubs: ProjectHub[] = [
  {
    slug: "pqc-migration",
    title: "PQC Migration",
    wg: "ikp",
    wgLabel: "IKP — IAM, Key Management and Privacy",
    status: "In Progress",
    pitch:
      "Preparing blockchain systems for post-quantum cryptography: crypto agility, migration playbooks, and neutral evaluation infrastructure — coordinated internationally through BGIN.",
    overview:
      "BGIN coordinates multi-stakeholder dialogue on how DLT stacks, wallets, and operators migrate to post-quantum cryptography without inventing new algorithms. Work focuses on crypto-agility patterns, staged rollout, deployment gaps, and neutral measurement — feeding Block meetings and GDC26.",
    statusText:
      "The GDC26 Geneva breakout (3 Sep 2026) produced a Chatham House meeting report and session slides. Follow-on PQC sessions and evaluation-committee work are scheduled at Block 15. Earlier Block 12–14 reports remain on this hub.",
    deliverables: [
      "Practical guidance on PQC migration for blockchain stacks",
      "Crypto-agility architecture patterns (hybrid / algorithm agility)",
      "Inputs to neutral evaluation and measurement (testbed coordination)",
      "Session outcomes and meeting reports from Block meetings",
    ],
    themes: ["pqc", "privacy"],
    discourseUrl: WG_META.ikp.discourseUrl,
    secondaryCta: {
      label: "GDC26 report",
      href: "/news/260903-gdc26-pqc-migration",
    },
    latestDocumentTitle: "GDC26 MR: Post-Quantum Cryptography Migration on DLTs",
    nextMilestone: "Block 15 (Oct)",
    documents: [
      {
        type: "Meeting report",
        title: "GDC26 MR: Post-Quantum Cryptography Migration on DLTs",
        when: "2026/09",
        href: "/news/260903-gdc26-pqc-migration",
      },
      {
        type: "Slides",
        title: "GDC26 session slides",
        when: "2026/09",
        href: documentHref(
          "meeting-reports/gdc26/GDC26_PQC_Migration_DLTs_Slides.pdf"
        ),
      },
      {
        type: "Meeting report (PDF)",
        title: "GDC26 MR (citeable PDF)",
        when: "2026/09",
        href: documentHref(
          "meeting-reports/gdc26/GDC26_PQC_Migration_DLTs_MR.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 14 MR: Crypto Agility and PQC Migration",
        when: "2026/03",
        href: documentHref(
          "block-events/block14/IKP/IKP_Crypto_Agility_PQC_Migration.pdf"
        ),
      },
      {
        type: "Draft",
        title: "Block 14 MR: Crypto Agility and PQC Migration (Draft)",
        when: "2026/03",
        href: documentHref(
          "block-events/block14/IKP/IKP_Crypto_Agility_PQC_Migration_draft.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 13: Crypto Agility and PQC Migration",
        when: "2025/10",
        href: documentHref(
          "block-events/block13/2-2 Crypto Agility and PQC Migration.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 12 MR: Transition to PQC & Crypto Agility",
        when: "2025/03",
        href: documentHref(
          "meeting-reports/block12/BGIN Block#12 MR Transition to Post-Quantum Cryptography _  Crypto Agility.pdf"
        ),
      },
    ],
    relatedSlugs: ["st-pp", "accountable-wallet", "offline-key-management"],
    relatedInitiatives: [
      {
        title: "NEDO/METI technology competition",
        body: "Competition on PQC migration and advanced key management hosted by NEDO/METI — not by BGIN. Not a call for new PQC algorithms; BGIN’s role is international multi-stakeholder coordination and neutral testbed collaboration.",
      },
      {
        title: "SSR 2026 PQC workshop track",
        body: "Related research venue (Baltimore) with a separate PC/paper process. Shown for coordination context only.",
      },
    ],
    participateBullets: [
      "Read the GDC26 meeting report and continue at Block 15",
      "Work on Discourse (IKP) — open to anyone, no membership required",
      "Read the Block 14 meeting report and comment on open issues",
    ],
    listed: true,
  },
  {
    slug: "accountable-wallet",
    title: "Accountable Wallet",
    wg: "ikp",
    wgLabel: "IKP — IAM, Key Management and Privacy",
    status: "Published",
    pitch:
      "Designing mechanisms that allow wallet holders to prove they are not involved in illicit activities while preserving privacy.",
    overview:
      "Mechanisms for wallet holders to prove legitimacy before transactions — addressing compliance gaps that regulation and analytics alone cannot solve. Published package plus ongoing IKP / Block follow-on (including adjacency to ST/PP and wallet assurance).",
    statusText:
      "Core package is published on Drive. Block 14 captured follow-on session outcomes; a site draft PDF remains available for contributors. Block 15 follow-on if scheduled.",
    deliverables: [
      "Accountable wallet standards and implementation guidance",
      "Privacy-preserving proof / verification patterns",
      "Meeting reports and published draft package",
    ],
    themes: ["wallet", "privacy", "identity"],
    discourseUrl: WG_META.ikp.discourseUrl,
    secondaryCta: {
      label: "Latest documents",
      href: "https://drive.google.com/file/d/1ehgENeEX2irxosubynJNQXQqElM3EFOu/view",
    },
    workingFolder:
      "https://drive.google.com/drive/folders/1wOoJNpeTvJ1VEPoJXgDUZ8ebysn0efWK?usp=drive_link",
    latestDocumentTitle: "Accountable Wallet (published package)",
    nextMilestone: "Block 15 follow-on",
    documents: [
      {
        type: "Published",
        title: "Accountable Wallet (published package)",
        when: "—",
        href: "https://drive.google.com/file/d/1ehgENeEX2irxosubynJNQXQqElM3EFOu/view",
      },
      {
        type: "Meeting report",
        title: "Block 14: IKP Accountable Wallet",
        when: "2026/03",
        href: documentHref(
          "block-events/block14/IKP/IKP_Accountable_Wallet.pdf"
        ),
      },
      {
        type: "Draft",
        title: "Draft: BGIN Accountable Wallet",
        when: "—",
        href: documentHref(
          "projects/accountable-wallet/Draft_BGIN - Accountable Wallet.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 12 MR: Wallet Governance / Accountable Wallet",
        when: "2025/03",
        href: documentHref(
          "meeting-reports/block12/BGIN Block#12 MR Wallet Governance _ Accountable Wallet.pdf"
        ),
      },
      {
        type: "Reference",
        title: "Working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/1wOoJNpeTvJ1VEPoJXgDUZ8ebysn0efWK?usp=drive_link",
      },
    ],
    relatedSlugs: ["st-pp", "forensics-analysis", "pqc-migration"],
    participateBullets: [
      "Read the published Drive package first",
      "Comment on follow-on topics on Discourse — open to anyone",
      "Use the Block 14 meeting report for the latest session context",
    ],
    listed: true,
  },
  {
    slug: "forensics-analysis",
    title: "Forensics & Analysis",
    shortTitle: "Forensics & Analysis",
    wg: "ikp",
    wgLabel: "IKP — IAM, Key Management and Privacy",
    status: "Public Comment",
    pitch:
      "Distinguishing blockchain forensics from analytics and producing shared guidance for VASPs, investigators, and educators.",
    overview:
      "This workstream clarifies lexicon and practice notes for blockchain forensics versus analytics, with public-comment iterations.",
    statusText:
      "Public Comment phase. Document under review; Block and WG discussions continue to refine lexicon and practice notes.",
    deliverables: [
      "Common framing of forensics vs analytics",
      "Guidance for VASPs / investigators / educators",
      "Public-comment document iterations",
    ],
    themes: ["forensics"],
    discourseUrl: WG_META.ikp.discourseUrl,
    secondaryCta: {
      label: "Latest documents",
      href: "https://docs.google.com/document/d/1Of9E5govjRFNRjdyvHQIeV42LHegUGC1dRoFYreQk8E/edit",
    },
    workingFolder:
      "https://drive.google.com/drive/folders/1erhESSrRUPT4uuI74m_XMlfyyrKWhOnb",
    latestDocumentTitle: "Distinguishing blockchain forensics from analytics",
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Public comment",
        title: "Distinguishing blockchain forensics from analytics",
        when: "—",
        href: "https://docs.google.com/document/d/1Of9E5govjRFNRjdyvHQIeV42LHegUGC1dRoFYreQk8E/edit",
      },
      {
        type: "Reference",
        title: "Working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/1erhESSrRUPT4uuI74m_XMlfyyrKWhOnb",
      },
    ],
    relatedSlugs: ["accountable-wallet", "illicit-activities"],
    listed: true,
  },
  {
    slug: "privacy-enhanced-auth",
    title: "Privacy Enhanced Authentication",
    shortTitle: "Privacy Enhanced Auth",
    wg: "ikp",
    wgLabel: "IKP — IAM, Key Management and Privacy",
    status: "In Progress",
    pitch: "Authentication patterns with privacy guarantees, aligned with IKP identity and key management work.",
    overview:
      "Develops authentication patterns that preserve privacy while meeting practical identity and access needs in blockchain ecosystems.",
    statusText: "Working documents and Block discussions ongoing within IKP.",
    deliverables: [
      "Authentication patterns with privacy guarantees",
      "Alignment notes with IKP identity / key management work",
      "Meeting reports and working drafts",
    ],
    themes: ["privacy", "identity"],
    discourseUrl: WG_META.ikp.discourseUrl,
    secondaryCta: {
      label: "IKP working documents",
      href: "https://drive.google.com/drive/folders/1A2aRasX47J7BNEQG_j1rlujUlSuz8KhI?usp=sharing",
    },
    latestDocumentTitle: "IKP working documents",
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "IKP working documents",
        when: "—",
        href: "https://drive.google.com/drive/folders/1A2aRasX47J7BNEQG_j1rlujUlSuz8KhI?usp=sharing",
      },
    ],
    relatedSlugs: ["accountable-wallet"],
    listed: true,
  },
  {
    slug: "cybersecurity-information-sharing",
    title: "Cybersecurity Information Sharing Framework",
    shortTitle: "Info Sharing Framework",
    wg: "cs",
    wgLabel: "Cyber Security Working Group",
    status: "Published",
    pitch:
      "An international information-sharing framework for the crypto industry, drawing lessons from traditional finance and ISACs.",
    overview:
      "How the crypto industry can share vulnerability and threat information internationally through multi-stakeholder alignment. Tracked separately from the Security AI Agent workstream so the living framework and agent tooling each have a clear URL and status.",
    statusText:
      "Framework PDF (Aug 2025) and CS roadmap are public; Block 14 produced two session meeting reports. On an ISO-oriented path. Security AI Agent builds operational tooling on a separate hub.",
    deliverables: [
      "Information sharing framework document (living)",
      "Operational guidance for industry participants",
      "Inputs toward formal standardization",
      "Meeting reports from Block and Layer2 sessions",
    ],
    themes: ["cybersecurity"],
    discourseUrl: WG_META.cs.discourseUrl,
    secondaryCta: { label: "GDC26 session", href: GDC26 },
    workingFolder:
      "https://drive.google.com/drive/folders/1UFTRJsSyhKqRelAnet86UsTH1si53Sia?usp=drive_link",
    latestDocumentTitle: "BGIN Information Sharing Framework (Aug 2025)",
    nextMilestone: "GDC26 → Block 15 · ISO path",
    documents: [
      {
        type: "Framework",
        title: "BGIN Information Sharing Framework (11 Aug 2025)",
        when: "2025/08",
        href: documentHref(
          "projects/cybersecurity-standards/BGIN_InformationSharingFW_08112025.pdf"
        ),
      },
      {
        type: "Roadmap",
        title: "BGIN Roadmap: Cybersecurity",
        when: "—",
        href: documentHref(
          "projects/cybersecurity-standards/BGIN_Roadmap_Cybersecurity.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 14: Security Cyber Security Information Sharing (1)",
        when: "2026/03",
        href: documentHref(
          "block-events/block14/CS/Security_Cyber_Security_Information_Sharing_1.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 14: Security Cyber Security Information Sharing (2)",
        when: "2026/03",
        href: documentHref(
          "block-events/block14/CS/Security_Cyber_Security_Information_Sharing_2.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 12 MR: Cybersecurity Information Sharing Framework",
        when: "2025/03",
        href: documentHref(
          "meeting-reports/block12/BGIN Block#12 MR  Cybersecurity Information Sharing Framework.pdf"
        ),
      },
      {
        type: "Reference",
        title: "Working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/1UFTRJsSyhKqRelAnet86UsTH1si53Sia?usp=drive_link",
      },
    ],
    relatedSlugs: ["security-ai-agent", "st-pp"],
    participateBullets: [
      "Read the August 2025 framework PDF and raise issues on Discourse (no membership)",
      "Join CS WG sessions linked under Upcoming meetings",
      "Contribute at GDC26 and Block 15",
    ],
    listed: true,
  },
  {
    slug: "security-ai-agent",
    title: "Security AI Agent",
    wg: "cs",
    wgLabel: "Cyber Security Working Group (+ Agentic AI)",
    status: "In Development",
    pitch:
      "An agentic approach to cybersecurity information sharing for crypto — building on the Information Sharing Framework.",
    overview:
      "Early workstream on agent roles for vulnerability and threat information handling. Kept on its own URL so In Development status is not confused with the published Framework track. Closely dependent on Cybersecurity Information Sharing Framework.",
    statusText:
      "The GDC26 Geneva breakout (2 Sep 2026) produced a Chatham House meeting report and session slides. Follow-on work is scheduled at Block 15. Use the Framework hub for the living information-sharing document.",
    deliverables: [
      "Agent workflow concepts for information sharing",
      "Alignment with the Information Sharing Framework",
      "Session outcomes (Block / GDC)",
      "Path toward a first public draft (target TBD)",
    ],
    themes: ["cybersecurity", "agentic-ai", "ai"],
    discourseUrl: WG_META.cs.discourseUrl,
    secondaryCta: {
      label: "GDC26 report",
      href: "/news/260902-gdc26-vulnerability-handling",
    },
    latestDocumentTitle:
      "GDC26 MR: Vulnerability Handling in the Agentic AI Era",
    nextMilestone: "Block 15 (Oct)",
    documents: [
      {
        type: "Meeting report",
        title: "GDC26 MR: Vulnerability Handling in the Agentic AI Era",
        when: "2026/09",
        href: "/news/260902-gdc26-vulnerability-handling",
      },
      {
        type: "Slides",
        title: "GDC26 session slides",
        when: "2026/09",
        href: documentHref(
          "meeting-reports/gdc26/GDC26_Vulnerability_Handling_Agentic_AI_Slides.pdf"
        ),
      },
      {
        type: "Meeting report (PDF)",
        title: "GDC26 MR (citeable PDF)",
        when: "2026/09",
        href: documentHref(
          "meeting-reports/gdc26/GDC26_Vulnerability_Handling_Agentic_AI_MR.pdf"
        ),
      },
    ],
    relatedSlugs: ["cybersecurity-information-sharing", "agent-standards"],
    participateBullets: [
      "Discuss scope and risks on Discourse — open to anyone",
      "Read the related Framework hub first",
      "Read the GDC26 meeting report and continue at Block 15",
    ],
    listed: true,
  },
  {
    slug: "st-pp",
    title: "Security Target & Protection Profile (ST/PP)",
    shortTitle: "ST / PP",
    wg: "cs",
    wgLabel: "Cyber Security Working Group",
    status: "In Progress",
    pitch:
      "Wallet security assurance through Security Target and Protection Profile approaches, including certification adjacency.",
    overview:
      "ST/PP materials for wallet security assurance and convergence with certification programmes. Session series from Block 12–14 documents progress; GDC26 and Block 15 continue the track in CS WG.",
    statusText:
      "The GDC26 Geneva breakout (3 Sep 2026) produced a Chatham House meeting report and session slides. Follow-on drafting is scheduled at Block 15. Earlier Block 12–14 reports remain on this hub.",
    deliverables: [
      "ST/PP drafts for wallet security",
      "Convergence notes with assurance / certification themes",
      "Session outcomes from Block and GDC",
    ],
    themes: ["wallet", "cybersecurity"],
    discourseUrl: WG_META.cs.discourseUrl,
    secondaryCta: {
      label: "GDC26 report",
      href: "/news/260903-gdc26-wallet-security-assurance",
    },
    latestDocumentTitle:
      "GDC26 MR: Wallet Security Assurance — ST/PP and Convergence",
    nextMilestone: "Block 15 (Oct)",
    documents: [
      {
        type: "Meeting report",
        title: "GDC26 MR: Wallet Security Assurance — ST/PP and Convergence",
        when: "2026/09",
        href: "/news/260903-gdc26-wallet-security-assurance",
      },
      {
        type: "Slides",
        title: "GDC26 session slides",
        when: "2026/09",
        href: documentHref(
          "meeting-reports/gdc26/GDC26_Wallet_Security_Assurance_STPP_Slides.pdf"
        ),
      },
      {
        type: "Meeting report (PDF)",
        title: "GDC26 MR (citeable PDF)",
        when: "2026/09",
        href: documentHref(
          "meeting-reports/gdc26/GDC26_Wallet_Security_Assurance_STPP_MR.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 14: Security Target and Protection Profile",
        when: "2026/03",
        href: documentHref(
          "block-events/block14/CS/Security_Security_Target_Protection_Profile.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 13: Security Target and Protection Profile",
        when: "2025/10",
        href: documentHref(
          "block-events/block13/2-1 Security Target and Protection Profile.pdf"
        ),
      },
      {
        type: "Meeting report",
        title: "Block 12 MR: Development of ST/PP",
        when: "2025/03",
        href: documentHref(
          "meeting-reports/block12/BGIN Block#12 MR  Development of ST_PP.pdf"
        ),
      },
      {
        type: "Reference",
        title: "CS working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/15LAJyJhgPrkcDd4qzGnwhaFjtI54jssH?usp=drive_link",
      },
    ],
    relatedSlugs: [
      "accountable-wallet",
      "offline-key-management",
      "cybersecurity-information-sharing",
    ],
    participateBullets: [
      "Read the GDC26 meeting report and continue at Block 15",
      "Review Block 14 ST/PP materials before commenting",
      "Raise evaluation / scope issues on CS Discourse",
    ],
    listed: true,
  },
  {
    slug: "offline-key-management",
    title: "Offline Key Management",
    wg: "cs",
    wgLabel: "Cyber Security Working Group",
    status: "In Progress",
    pitch: "Standards and good practices for offline key management systems in blockchain contexts.",
    overview:
      "Produces guidance for offline key management suitable for operators and assurance discussions.",
    statusText: "In progress within CS WG; Block sessions continue.",
    deliverables: [
      "Good-practice guidance for offline key management",
      "Alignment with wallet / ST-PP assurance work",
    ],
    themes: ["wallet", "custody", "cybersecurity"],
    discourseUrl: WG_META.cs.discourseUrl,
    secondaryCta: {
      label: "CS documents",
      href: "https://drive.google.com/drive/folders/15LAJyJhgPrkcDd4qzGnwhaFjtI54jssH?usp=drive_link",
    },
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "CS working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/15LAJyJhgPrkcDd4qzGnwhaFjtI54jssH?usp=drive_link",
      },
    ],
    relatedSlugs: ["st-pp", "accountable-wallet"],
    listed: true,
  },
  {
    slug: "security-supply-chain",
    title: "Governance of the Security Supply Chain",
    shortTitle: "Security Supply Chain",
    wg: "cs",
    wgLabel: "Cyber Security Working Group",
    status: "In Progress",
    pitch: "Governance approaches for the security supply chain in crypto and blockchain systems.",
    overview:
      "Examines how operators and standards bodies can govern dependencies and security supply-chain risk.",
    statusText: "In progress; discussions at Block and WG calls.",
    deliverables: ["Supply-chain governance framing", "Practical recommendations for operators"],
    themes: ["cybersecurity", "governance"],
    discourseUrl: WG_META.cs.discourseUrl,
    secondaryCta: {
      label: "CS documents",
      href: "https://drive.google.com/drive/folders/15LAJyJhgPrkcDd4qzGnwhaFjtI54jssH?usp=drive_link",
    },
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "CS working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/15LAJyJhgPrkcDd4qzGnwhaFjtI54jssH?usp=drive_link",
      },
    ],
    relatedSlugs: ["cybersecurity-information-sharing"],
    listed: true,
  },
  {
    slug: "stablecoin-guide",
    title: "Practical Stablecoin Implementation Guide",
    shortTitle: "Stablecoin Guide",
    wg: "fase",
    wgLabel: "FASE — Financial Applications & Social Economics",
    status: "In Progress",
    pitch: "Practical guidance for stablecoin implementation, policy gaps, and anticipated legal reforms.",
    overview:
      "Identifies policy gaps and issues for practitioners and policymakers, with a forward-looking view of stablecoin reforms.",
    statusText: "Active FASE workstream with Block sessions and working documents.",
    deliverables: [
      "Practical implementation guide",
      "Policy gap analysis",
      "Meeting reports",
    ],
    themes: ["stablecoin", "defi"],
    discourseUrl: WG_META.fase.discourseUrl,
    secondaryCta: {
      label: "Working folder",
      href: "https://drive.google.com/drive/u/0/folders/1o9DRR9o_SxfukO7r5kmSvA_IlqD94Z9Z",
    },
    workingFolder:
      "https://drive.google.com/drive/u/0/folders/1o9DRR9o_SxfukO7r5kmSvA_IlqD94Z9Z",
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "Working folder",
        when: "—",
        href: "https://drive.google.com/drive/u/0/folders/1o9DRR9o_SxfukO7r5kmSvA_IlqD94Z9Z",
      },
    ],
    relatedSlugs: ["harmonization", "illicit-activities"],
    listed: true,
  },
  {
    slug: "harmonization",
    title: "Harmonization among Crypto-asset, Stablecoin and Tokenized Deposit",
    shortTitle: "Harmonization",
    wg: "fase",
    wgLabel: "FASE — Financial Applications & Social Economics",
    status: "In Progress",
    pitch:
      "Shared industry-structure framing across crypto-assets, stablecoins, and tokenized deposits to support regulatory debate.",
    overview:
      "Produces a shared view of industry structure as a basis for regulatory and supervisory debate across jurisdictions.",
    statusText: "Discussion paper and Block sessions underway toward a 2026 deliverable.",
    deliverables: [
      "Industry structure discussion paper",
      "Cross-jurisdiction comparison notes",
      "Meeting reports",
    ],
    themes: ["stablecoin", "defi", "governance"],
    discourseUrl: WG_META.fase.discourseUrl,
    secondaryCta: {
      label: "FASE documents",
      href: "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
    },
    nextMilestone: "Summer 2026 document target",
    documents: [
      {
        type: "Reference",
        title: "FASE working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
      },
    ],
    relatedSlugs: ["stablecoin-guide", "decentralization-metrics"],
    listed: true,
  },
  {
    slug: "illicit-activities",
    title: "Illicit Activities (Common Lexicon)",
    shortTitle: "Common Lexicon",
    wg: "fase",
    wgLabel: "FASE — Financial Applications & Social Economics",
    status: "In Progress",
    pitch: "A common lexicon and framing for illicit-activity discussions across policy and industry.",
    overview:
      "Builds shared language for illicit activities involving crypto-assets to improve cross-stakeholder dialogue.",
    statusText: "Lexicon work in progress with Block and WG input.",
    deliverables: ["Common lexicon", "Use notes for practitioners and policymakers"],
    themes: ["defi", "forensics", "governance"],
    discourseUrl: WG_META.fase.discourseUrl,
    secondaryCta: {
      label: "FASE documents",
      href: "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
    },
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "FASE working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
      },
    ],
    relatedSlugs: ["forensics-analysis", "stablecoin-guide"],
    listed: true,
  },
  {
    slug: "decentralization-metrics",
    title: "Technical Metrics for Decentralization",
    shortTitle: "Decentralization Metrics",
    wg: "fase",
    wgLabel: "FASE — Financial Applications & Social Economics",
    status: "In Progress",
    pitch:
      "Categories and classification methods for decentralization that regulators, auditors, and operators can apply consistently.",
    overview:
      "Compiles reportable metrics and classification approaches suitable for blockchain and crypto-assets.",
    statusText: "Report work in progress, informed by jurisdictional debates (e.g. maturity / classification).",
    deliverables: [
      "Categories and classification methods",
      "Guidance for consistent application",
    ],
    themes: ["decentralization", "governance"],
    discourseUrl: WG_META.fase.discourseUrl,
    secondaryCta: {
      label: "FASE documents",
      href: "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
    },
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "FASE working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
      },
    ],
    relatedSlugs: ["harmonization"],
    listed: true,
  },
  {
    slug: "ai-blockchain",
    title: "AI and Blockchain",
    shortTitle: "AI + Blockchain",
    wg: "fase",
    wgLabel: "FASE — Financial Applications & Social Economics",
    status: "In Progress",
    pitch:
      "Exploring synergies and risks where blockchain and AI intersect — data, governance, and real-world use cases.",
    overview:
      "Futures-oriented discussion of positive and negative synergies between AI and blockchain, grounded in use cases.",
    statusText: "Active discussion track with working folder materials.",
    deliverables: ["Use-case framing", "Governance risk notes", "Meeting reports"],
    themes: ["ai", "governance"],
    discourseUrl: WG_META.fase.discourseUrl,
    secondaryCta: {
      label: "Working folder",
      href: "https://drive.google.com/drive/folders/1-ngWvRGQ_5N36Mr0Pgh119tGIGmCExSu?usp=drive_link",
    },
    workingFolder:
      "https://drive.google.com/drive/folders/1-ngWvRGQ_5N36Mr0Pgh119tGIGmCExSu?usp=drive_link",
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "Working folder",
        when: "—",
        href: "https://drive.google.com/drive/folders/1-ngWvRGQ_5N36Mr0Pgh119tGIGmCExSu?usp=drive_link",
      },
    ],
    relatedSlugs: ["agent-standards", "security-ai-agent"],
    listed: true,
  },
  {
    slug: "agent-standards",
    title: "Agent Standards and Frameworks",
    shortTitle: "Agent Standards",
    wg: "agentic",
    wgLabel: "Agentic AI",
    status: "In Development",
    pitch: "Standards and frameworks for agentic systems in blockchain governance contexts.",
    overview:
      "Coordinates agent-standards discussions across BGIN Agentic AI work, with links to security and application WGs.",
    statusText: "In Development; Discourse category and Block sessions are the primary venues.",
    deliverables: ["Agent standards framing", "Cross-WG alignment notes"],
    themes: ["agentic-ai", "ai", "governance"],
    discourseUrl: WG_META.agentic.discourseUrl,
    secondaryCta: {
      label: "Discourse",
      href: WG_META.agentic.discourseUrl,
    },
    nextMilestone: "Block 15",
    documents: [
      {
        type: "Reference",
        title: "Agentic AI on Discourse",
        when: "—",
        href: WG_META.agentic.discourseUrl,
      },
    ],
    relatedSlugs: ["security-ai-agent", "ai-blockchain"],
    listed: true,
  },
];

export function getListedHubs(): ProjectHub[] {
  return projectHubs.filter((p) => p.listed);
}

export function getHubBySlug(slug: string): ProjectHub | undefined {
  return projectHubs.find((p) => p.slug === slug);
}

export function getHubsByWg(wg: WgId): ProjectHub[] {
  return getListedHubs().filter((p) => p.wg === wg);
}

export function getRelatedHubs(hub: ProjectHub): ProjectHub[] {
  if (!hub.relatedSlugs?.length) return [];
  return hub.relatedSlugs
    .map((s) => getHubBySlug(s))
    .filter((p): p is ProjectHub => Boolean(p));
}

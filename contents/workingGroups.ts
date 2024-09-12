export interface WorkingGroup {
  group_name: string;
  co_chairs: {
    name: string;
    job: string;
  }[];
  description: string;
  mailinglist_url: string;
  github_url: string;
  detail_url: string;
  inactive: boolean;
}

export const workingGroups: WorkingGroup[] = [
  {
    group_name: "IAM, Key Management and Privacy (IKP) Working Group",
    co_chairs: [
      {
        name: "Nat Sakimura",
        job: "OpenID Foundation",
      },
      {
        name: "Mitchell Travers",
        job: "Partner, Soulbis Pty Ltd",
      },
    ],
    description:
      "The goal of IAM, Key Management and Privacy (IKP) Working Group is to provide guidance and good practice documents that describe Identity (including keys) and Access management for access to crypto-currency exchange; Identity (including keys) and Access management using Blockchain/DLT for Online resource access Privacy considerations to be taken into account for the above.",
    mailinglist_url: "https://bgin.discourse.group/c/ikp-wg/8",
    github_url: "https://github.com/bgin-global",
    detail_url:
      "https://docs.google.com/document/d/1eRNE8hMW4X1ixzO3IowUWJU1q81YuO9fKT_MaRTZR5c/edit#heading=h.oj3duu3olyl0",
    inactive: false,
  },
  {
    group_name:
      "Financial Applications & Social Economics (FASE) Working Group",
    co_chairs: [
      {
        name: "Leon Molchanovsky",
        job: "Galaxy Innovation Ltd",
      },
      {
        name: "Chloe White",
        job: "Riskmastery.xyz",
      },
    ],
    description:
      "The Financial Applications and Social Economics (FASE) working group focuses on an extensive array of topics around how blockchain technologies and crypto in general can enable new financial applications and socio economic growth.",
    mailinglist_url: "https://bgin.discourse.group/c/working-group-s/fase/9",
    github_url: "https://github.com/bgin-global",
    detail_url:
      "https://drive.google.com/drive/folders/1h12WibGhcrHksuG1Cy9ULBJqJ7Kp7pi3",
    inactive: false,
  },
  {
    group_name: "Internal Governance Working Group (IGWG)",
    co_chairs: [
      {
        name: "Aaron Wright",
        job: "Cardozo Law School",
      },
      {
        name: "Shigeya Suzuki",
        job: "BSafe.network / Keio University / WIDE Project / BASE alliance",
      },
    ],
    description:
      "The Governance WG aims at developing the governance mechanism of BGIN itself. It will discuss a variety of topics including its organization structure, IPR policy and fundraising policy.",
    mailinglist_url: "https://example.com",
    github_url: "https://github.com/bgin-global",
    detail_url:
      "https://docs.google.com/document/d/1O641FrqZNX8IrgP5cKvAyyfBO80REEfBYCopXg5ieJ8/edit#heading=h.oj3duu3olyl0",
    inactive: true,
  },
  {
    group_name: "Kintsugi Study Group",
    co_chairs: [
      {
        name: "Pinder Wong",
        job: "VeriFi Ltd.",
      },
    ],
    description:
      "The Decentralized Treasury WG aims at exploring best practices of raising funding that could/should replace ICO at all (as previous generations of fund raising were far from perfect) as well as ongoing fund/treasury management to finance operations/development of strategic initiatives.",
    mailinglist_url: "https://bgin.discourse.group/",
    github_url: "https://github.com/bgin-global",
    detail_url: "https://example.com",
    inactive: true,
  },
];

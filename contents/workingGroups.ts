export interface WorkingGroup {
  group_name: string;
  co_chairs: {
    name: string;
    job: string;
  }[];
  description: string;
  subscribe_url: string;
  document_url: string;
  community_url: string;
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
    subscribe_url: "",
    document_url:
      "https://drive.google.com/drive/folders/1A2aRasX47J7BNEQG_j1rlujUlSuz8KhI?usp=sharing",
    community_url: "https://bgin.discourse.group/c/ikp-wg/8",
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
    subscribe_url: "https://github.com/bgin-global",
    document_url:
      "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
    community_url: "https://bgin.discourse.group/c/working-group-s/fase/9",
    inactive: false,
  },
  {
    group_name: "Cybersecurity (CS) Working Group",
    co_chairs: [
      {
        name: " ",
        job: " ",
      },
    ],
    description: " ",
    subscribe_url: "",
    document_url:
      "https://drive.google.com/drive/folders/15LAJyJhgPrkcDd4qzGnwhaFjtI54jssH?usp=drive_link",
    community_url: " ",
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
    subscribe_url: "",
    document_url:
      "https://drive.google.com/drive/folders/1pFY5QUKUPqZbAIdR_T0bDBRcsCoiyZKb?usp=drive_link",
    community_url: "",
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
    subscribe_url: "",
    document_url:
      "https://drive.google.com/drive/folders/1CwC9A9flbyuR34AE_kI3y2h5PM_eUJjI?usp=drive_link",
    community_url: "",
    inactive: true,
  },
];

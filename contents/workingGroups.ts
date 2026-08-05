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
    subscribe_url: "https://groups.google.com/g/bgin-ikp-working-group",
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
    subscribe_url: "https://groups.google.com/g/bgin-face-working-group",
    document_url:
      "https://drive.google.com/drive/folders/1xlDWwnL3lotlW8Uqa_zH4HGCrdhgAygp?usp=drive_link",
    community_url: "https://bgin.discourse.group/c/working-group-s/fase/9",
    inactive: false,
  },
  {
    group_name: "Cybersecurity (CS) Working Group",
    co_chairs: [
      {
        name: "Takaya Sugino",
        job: "",
      },
    ],
    description:
      "To address the challenge of increasing international sharing of vulnerability information and threat intelligence within the crypto industry, the goal is to determine the optimal operational framework tailored to the industry through multi-stakeholder discussions (involving existing national or regional ISACs, other standardization bodies, regulators, and business operators including DeFi). This process will culminate in the creation of standards documents. Additionally, the objectives are: (1) to support international cooperation across ISACs, (2) to provide educational content for resource-constrained businesses and nations, and (3), where needed, to develop technical standards, including data formats for sharing vulnerability information and other cybersecurity measures, for submission to the appropriate standardization bodies.",
    subscribe_url: "https://groups.google.com/g/bgin-cybersecurity-working-group",
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

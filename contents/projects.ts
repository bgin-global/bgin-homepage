export interface Project {
  title: string;
  description: string;
  reference: string;
  wg: string;
  wg_link: string;
}

export interface PublishedProject {
  title: string;
  date: string;
  link: string;
}

export const projects: {
  inProgress: Project[];
  published: PublishedProject[];
} = {
  inProgress: [
    {
      title: "Wallet Governance",
      description:
        "Wallet governance, policy and key management will be quintessential features to any society which leverages decentralised innovations.",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },
    {
      title: "Soul Bound Token (SBT)",
      description:
        "To Examine the implications of Soulbound Tokens (SBTs), a novel smart contract primitive introduced by E. Glen Weyl, Puja Ohlhaver, and Vitalik Buterin (2022) “Decentralized Society: Finding Web3's Soul”, to curb Web3’s “hyper financialisation” and lack of tooling to enable social coordination.",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },

    {
      title: "Layer2 Governance",
      description: "xxx",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },

    {
      title: "Blockchain Analysis Challenges",
      description: "xxx",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },

    {
      title: "Accountable Wallet",
      description: "xxx",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },

    {
      title: "AI and Blockchain",
      description: "xxx",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },

    {
      title: "Taxonomy of Illicit Activities",
      description: "xxx",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },

    {
      title: "Cyber Security Standards",
      description: "xxx",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },

    {
      title: "Privacy vs Discoverability",
      description: "xxx",
      reference: "/",
      wg: "GIKP WG",
      wg_link: "/",
    },
  ],
  published: [
    {
      title: "2020 Online Meeting Report",
      date: "June 18 2020",
      link: "https://drive.google.com/drive/u/0/folders/1dKDWefmNVskSNLK8UUEpEYyeXLof2Qr4",
    },
    {
      title:
        "Present and Future of a Decentralized Financial System and the Associated Regulatory Considerations",
      date: "January 01 2021",
      link: "https://drive.google.com/drive/folders/1rD4XHLhDZCVV6si9OvLZ8vhiU-Kqc9Gg?usp=drive_link",
    },
    {
      title: "Study Report for Ransomware Reaction",
      date: "April 21 2022",
      link: "https://drive.google.com/drive/folders/1Rb4Ygxvp6fgd4rdB08mALx7kedrNZWl-?usp=sharing",
    },
    {
      title: "NFT Study Report Part 1: Introduction and Use Cases",
      date: "June 06 2022",
      link: "https://drive.google.com/drive/folders/1kjmfgpC5tC_4xPCjjnhPXO_Hqa3b14wl?usp=drive_link",
    },
    {
      title: "Incident Response of Decentralized Custody; A Case Study",
      date: "June 06 2022",
      link: "https://drive.google.com/drive/folders/1feQ6wU8CfuTdtnkrtiO8Qi2olJpCH2bz?usp=drive_link",
    },
    {
      title:
        "Soulbound Tokens (SBTs) Study Report Part 1: Building and Embracing a New Social Identity Layer?",
      date: "February 01 2023",
      link: "https://drive.google.com/drive/folders/1qavS-AxWDc5KP2swGXmiUpr241mYfTMo?usp=drive_link",
    },
    {
      title: "Proposal of Principles of DeFi Disclosure and Regulation",
      date: "February 13 2023",
      link: "https://drive.google.com/drive/folders/1BHAOmPlWSi6AEm3FLef9xxtk74gFUggg?usp=sharing",
    },
    {
      title:
        "Study Report on Selective Disclosure:  Overview and Classifications",
      date: "April 28 2023",
      link: "https://drive.google.com/drive/folders/1PiYadrwKENQ0wtk4SpbMKSPWN4j_O5_C?usp=sharing",
    },
    {
      title: "Potential Points of Failure of Stablecoins and DeFi",
      date: "July 24 2023",
      link: "https://drive.google.com/drive/folders/1uRRCeaC0pwtP5_t_sH9An7JeN-5zYm-1?usp=sharing",
    },
  ],
};

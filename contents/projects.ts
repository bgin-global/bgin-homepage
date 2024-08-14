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
      title:
        "Present and Future of a Decentralized Financial System and the Associated Regulatory Considerations",
      date: "January 01 2021",
      link: "/",
    },
    {
      title: "Study Report for Ransomware Reaction",
      date: "April 21 2022",
      link: "/",
    },
    {
      title: "NFT Study Report Part 1: Introduction and Use Cases",
      date: "June 06 2022",
      link: "/",
    },
    {
      title: "Incident Response of Decentralized Custody; A Case Study",
      date: "June 06 2022",
      link: "/",
    },
    {
      title:
        "Soulbound Tokens (SBTs) Study Report Part 1: Building and Embracing a New Social Identity Layer?",
      date: "February 01 2023",
      link: "/",
    },
    {
      title: "Proposal of Principles of DeFi Disclosure and Regulation",
      date: "February 12 2023",
      link: "/",
    },
    {
      title:
        "Discussion Points: Potential Points of Failure of Stablecoins and DeFi",
      date: "March 23 2023",
      link: "/",
    },

    {
      title:
        "Study Report on Selective Disclosure:  Overview and Classifications",
      date: "April 28 2023",
      link: "/",
    },
    {
      title: "Potential Points of Failure of Stablecoins and DeFi",
      date: "July 24 2023",
      link: "/",
    },
  ],
};

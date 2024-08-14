export interface Project {
  title: string;
  description: string;
  reference: string;
  wg: string;
  wg_link: string;
}

export const projects: { inProgress: Project[] } = {
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
};

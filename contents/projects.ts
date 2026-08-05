/**
 * Legacy card data for /projects listing fallbacks.
 * Active hubs live in projectHubs.ts (source of truth for /projects/[slug]).
 * Published study reports live in documents.ts / /publications — do not reintroduce
 * a published list on the Projects page (see docs/content-model.md).
 */
export interface Project {
  title: string;
  description: string;
  reference: string;
  wg: string;
  wg_link: string;
  /** When set, card links to the project hub instead of Drive only. */
  hubSlug?: string;
}

export const projects: {
  inProgress: Project[];
} = {
  inProgress: [
    {
      title: "Blockchain Analysis Challenges",
      description:
        "This project will address the challenges in blockchain analysis, focusing on client education, evidence gathering, and proactive detection methodologies. Key topics include FATF compliance for VASPs, the role of blockchain analytics firms, and the impact of privacy technologies and off-chain transactions on analysis.",
      reference: "https://drive.google.com/drive/folders/1erhESSrRUPT4uuI74m_XMlfyyrKWhOnb",
      wg: "IKP WG",
      wg_link: "/activities/working-groups",
      hubSlug: "forensics-analysis",
    },
    {
      title: "Accountable Wallet",
      description:
        "This project aims to design and implement a mechanism that allows wallet holders to prove that they are not involved in illicit activities while preserving their privacy.",
      reference:
        "https://drive.google.com/drive/folders/1wOoJNpeTvJ1VEPoJXgDUZ8ebysn0efWK?usp=drive_link",
      wg: "IKP WG",
      wg_link: "/activities/working-groups",
      hubSlug: "accountable-wallet",
    },
    {
      title: "AI and Blockchain",
      description:
        "The convergence of blockchain and AI offers groundbreaking potential. Whether leveraging blockchain to solve AI’s data management challenges or harnessing AI to tackle governance issues in blockchain, the synergies between these technologies are being hotly debated.",
      reference:
        "https://drive.google.com/drive/folders/1-ngWvRGQ_5N36Mr0Pgh119tGIGmCExSu?usp=drive_link",
      wg: "FASE WG",
      wg_link: "/activities/working-groups",
      hubSlug: "ai-blockchain",
    },
    {
      title: "Stablecoin Research",
      description:
        "This research project identifies potential policy gaps and issues that may require further examination by practitioners and policymakers. We provide a forward-looking perspective on anticipated legal reforms in the realm of stablecoins.",
      reference:
        "https://drive.google.com/drive/u/0/folders/1o9DRR9o_SxfukO7r5kmSvA_IlqD94Z9Z",
      wg: "FASE WG",
      wg_link: "/activities/working-groups",
      hubSlug: "stablecoin-guide",
    },
    {
      title: "Cyber Security Standards",
      description:
        "Despite significant advancements, cybersecurity incidents remain prevalent in the crypto industry. Just as in other sectors, achieving industry-wide alignment on cybersecurity information sharing is crucial.",
      reference:
        "https://drive.google.com/drive/folders/1UFTRJsSyhKqRelAnet86UsTH1si53Sia?usp=drive_link",
      wg: "Cyber Security WG",
      wg_link: "/activities/working-groups",
      hubSlug: "cybersecurity-information-sharing",
    },
  ],
};

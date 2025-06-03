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
        "The project will discuss (1) the approaches to authentication processes that support the reliability and functionality of credentials, (2) key management methods that prioritize privacy and security, and (3) governance models that harmonize diverse legal, technical, and operational frameworks across different jurisdictions and sectors in order to build a secure, highly interoperable, and universally accessible digital wallet ecosystem.",
      reference: "https://docs.google.com/document/d/12bn-bXRaqs0syEX2lX_k-yXWeFlgnh38iv1Onu_Kwuc/edit?usp=drive_link",
      wg: "IKP WG",
      wg_link: "/",
    },
    {
      title: "Soul Bound Token (SBT)",
      description:
        "To Examine the implications of Soulbound Tokens (SBTs), a novel smart contract primitive introduced by E. Glen Weyl, Puja Ohlhaver, and Vitalik Buterin (2022) “Decentralized Society: Finding Web3's Soul”, to curb Web3’s “hyper financialisation” and lack of tooling to enable social coordination.",
      reference: "https://drive.google.com/drive/folders/1UqkmJQkgmCA05-w-BP8at4moS79fHcdU?usp=drive_link",
      wg: "IKP WG",
      wg_link: "/",
    },
    {
      title: "ZKP and its Application",
      description: "This project explores Zero-Knowledge Proof (ZKP) technology, focusing on its definitions, terminology, and advancements. It examines ZKP's backend, frontend, and historical development while analyzing its societal impact, including specialized programming tools, performance trade-offs, vulnerabilities, and applications. Special attention is given to zkRollup technology, its history, and concerns, highlighting ZKP's role in advancing privacy and blockchain innovation.",
      reference: "https://drive.google.com/drive/folders/1wEOhN-tcuWk9RiwrItYS6jRS7Fp_Qi3V?usp=drive_link",
      wg: "IKP WG",
      wg_link: "/",
    },
    {
      title: "Layer2 Governance",
      description: "As “Layer 2” scaling solutions emerge to address the scalability and cost-efficiency challenges of “Layer 1” blockchains, they could bring new governance and security challenges, as described in “Blockchain Trilemma.” The ongoing research at BGIN IKP WG objectively analyzes the trust points that can be created by “Layer2.” Based on the research, this project will engage business operators, regulators, and technical experts to explore how to solve the security and governance challenges.",
      reference: "https://drive.google.com/drive/folders/14nX6N775xMnAg05vFNkeuKgTkLhVRI4f?usp=drive_link",
      wg: "IKP WG",
      wg_link: "/",
    },

    {
      title: "Blockchain Analysis Challenges",
      description: "This project will address the challenges in blockchain analysis, focusing on client education, evidence gathering, and proactive detection methodologies. Key topics include FATF compliance for VASPs, the role of blockchain analytics firms, and the impact of privacy technologies and off-chain transactions on analysis. We will explore the role of BGIN in enhancing education and discuss strategies to overcome these challenges, aiming to create a comprehensive document for the IKP WG.",
      reference: "https://drive.google.com/drive/folders/1erhESSrRUPT4uuI74m_XMlfyyrKWhOnb",
      wg: "IKP WG",
      wg_link: "/",
    },

    {
      title: "Accountable Wallet",
      description: "This project aims to design and implement a mechanism that allows wallet holders to prove that they are not involved in illicit activities while preserving their privacy. By implementing a system that empowers wallet holders to proactively prove and verify each other's legitimacy before transactions, we aim to protect them from unintentional involvement in illicit activities. Our goal is to address compliance issues in the crypto ecosystem that cannot be solved solely by current regulatory rules and tools.",
      reference: "https://drive.google.com/drive/folders/1wOoJNpeTvJ1VEPoJXgDUZ8ebysn0efWK?usp=drive_link",
      wg: "IKP WG",
      wg_link: "/",
    },

    {
      title: "AI and Blockchain",
      description: "The convergence of blockchain and AI offers groundbreaking potential. Whether leveraging blockchain to solve AI’s data management challenges or harnessing AI to tackle governance issues in blockchain, the synergies between these technologies are being hotly debated. This discussion will take a futuristic lens, weighing both the positive and negative aspects of these synergistic applications, drawing from real-world use cases.",
      reference: "https://drive.google.com/drive/folders/1-ngWvRGQ_5N36Mr0Pgh119tGIGmCExSu?usp=drive_link",
      wg: "FACE WG",
      wg_link: "/",
    },

    {
      title: "Stablecoin Research",
      description: "This research project identifies potential policy gaps and issues that may require further examination by practitioners and policymakers. We provide a forward-looking perspective on anticipated legal reforms in the realm of stablecoins.",
      reference: "https://drive.google.com/drive/u/0/folders/1o9DRR9o_SxfukO7r5kmSvA_IlqD94Z9Z",
      wg: "FACE WG",
      wg_link: "/",
    },

    {
      title: "Cyber Security Standards",
      description: "Despite significant advancements, cybersecurity incidents remain prevalent in the crypto industry. Just as in other sectors, achieving industry-wide alignment on cybersecurity information sharing is crucial. This discussion will explore how the crypto industry can establish a robust international information-sharing framework, drawing lessons from traditional finance and other industries.",
      reference: "https://drive.google.com/drive/folders/1UFTRJsSyhKqRelAnet86UsTH1si53Sia?usp=drive_link",
      wg: "IKP WG",
      wg_link: "/",
    },
  ],
  published: [
    {
      title: "BGIN 2025 May Newsletter",
      date: "June 2 2025",
      link: "/images/Activities/BGIN May 2025 WG Newsletter.pdf",
    },
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

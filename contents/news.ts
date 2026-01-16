export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
  image?: string;
}

export const allNews: NewsItem[] = [
  {
    id: "11",
    title: "BGIN Block #14 Page Launched and Registration Now Open",
    description: "BGIN is pleased to announce that the Block #14 event page is now live and registration is open. Join us in Tokyo, Japan from March 1-2, 2026 for the 14th general meeting. The event will feature working group sessions, presentations on key projects, and discussions on blockchain governance standards. Registration is available through Eventbrite.",
    date: "2026-01-16",
    link: "/events/20260301-block14",
    tags: ["Conference", "Event"],
    image: "/images/Events/Block5.jpeg"
  },
  {
    id: "10",
    title: "BGIN Block #13 Meeting Reports Published",
    description: "BGIN has published comprehensive meeting reports from Block #13 (October 15-17, 2025). The reports are organized by working group and include detailed summaries, presentations, and outcomes from all sessions across Cyber Security, IKP, FASE, and BGIN Agent Hack initiatives.",
    date: "2025-10-20",
    link: "/news/block13-meeting-reports",
    tags: ["Publication", "Report"],
    image: "/images/Events/Block3.jpeg"
  },
  {
    id: "9",
    title: "Join BGIN Layer 2 Meetup at San Francisco - October 23",
    description: "BGIN will host a Layer 2 Meetup in San Francisco on October 23, 2025, as part of Open Source AI Week. The event features presentations on Block #13 outcomes, AgentHack review, panel discussions, and collaborative workshops on blockchain governance frameworks.",
    date: "2025-10-20",
    link: "/news/layer2-sf-meetup",
    tags: ["Event", "Conference"],
    image: "/images/Events/SanFrancisco.jpg"
  },
  {
    id: "8",
    title: "BGIN August 2025 Newsletter Now Available",
    description: "Our August newsletter features comprehensive updates on Block #13 preparations, the IKP Agentic Framework webinar, upcoming Layer 2 meetups at ETHTokyo and EDCON, and the latest developments across all working groups.",
    date: "2025-09-01",
    link: "/images/Activities/BGIN%20August%202025%20Newsletter.pdf",
    tags: ["Publication", "Working Group"],
    image: "/images/Activities/BGIN August 2025 Newsletter.png"
  },
  {
    id: "7",
    title: "IKP WG Hosts Agentic Framework Webinar",
    description: "The IKP Working Group successfully hosted the 'BGIN'ing of Agentic Governance' webinar on August 28, 2025, sparking meaningful discussions on the BGIN Agentic Framework (Archive, Codex, and Discourse). The session generated valuable feedback that will shape upcoming presentations at EDCON Osaka and Block #13 in Washington D.C.",
    date: "2025-08-29",
    link: "/news/ikp-webinar",
    tags: ["Working Group", "Event"],
    image: "/images/Events/webinar/BGIN Agentic Framework.avif"
  },
  {
    id: "6",
    title: "BGIN Block #13 Program Released - Washington D.C.",
    description: "BGIN has released the tentative program for Block #13 in Washington D.C. (October 15-17, 2025). The three-day conference will feature BGIN Agent Hack sessions, working group meetings on IKP, FASE, and Cyber Security topics, and presentations on key research projects including agent standards, accountable wallets, and blockchain forensics.",
    date: "2025-08-29",
    link: "/news/block13-program-release",
    tags: ["Conference", "Event"],
    image: "/images/Events/Block3.jpeg"
  },
  {
    id: "5",
    title: "BGIN Announces Layer 2 Meetups at ETHTokyo and EDCON 2025",
    description: "BGIN will host Layer 2 Meetups at ETHTokyo and EDCON 2025 to advance Privacy Pool, Accountable Wallet, and cybersecurity information sharing standards.",
    date: "2025-08-16",
    link: "/news/layer2-ethtokyo-edcon-2025",
    tags: ["Conference", "Event"],
    image: "/images/Events/Block5.jpeg"
  },
  {
    id: "1",
    title: "BGIN Chair Shin'ichiro Matsuo Appointed to Japanese Financial Services Agency's Cryptocurrency System Working Group",
    description: "BGIN announces the appointment of its Co-Chair, Professor Shin'ichiro Matsuo, as a member of the Cryptoasset System Working Group under the Financial Services Agency's Financial System Council in Japan.",
    date: "2025-08-06",
    link: "/news/matsuo-fsa-appointment",
    tags: ["Members", "Working Group"],
    image: "/images/Events/person/Shinichiro Matsuo.jpeg"
  },
  {
    id: "2",
    title: "BGIN Announces Block #13 Conference in Washington, D.C.",
    description: "BGIN is pleased to announce the 13th general meeting, Block #13, to be held in Washington, D.C. from October 15-17, 2025. This landmark event will bring together policymakers, technologists, and blockchain stakeholders to advance governance frameworks for digital economic networks.",
    date: "2025-08-06",
    link: "/news/block13-announcement",
    tags: ["Conference", "Event"],
    image: "/images/Events/Block3.jpeg"
  },
  {
    id: "3",
    title: "BGIN July 2025 Newsletter Now Available",
    description: "Our July newsletter features updates on recent working group activities, upcoming conferences, regulatory insights, and community highlights from around the globe.",
    date: "2025-08-03",
    link: "/images/Activities/BGIN%20July%202025%20Newsletter.pdf",
    tags: ["Publication", "Working Group"],
    image: "/images/Activities/BGIN July 2025 WG Newsletter.png"
  }
]

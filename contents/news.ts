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
    id: "4",
    title: "BGIN Agentic Framework: Archive, Codex and Discourse",
    description: "Join the IKP Working Group for a webinar introducing BGIN's three-agent architecture (Archive, Codex, Discourse) and how it enables sovereignty-preserving, living governance intelligence. Thu, Aug 28, 2025 • 12:00-13:00 UTC • Online.",
    date: "2025-08-12",
    link: "/news/agentic-framework-webinar",
    tags: ["Event", "Working Group"],
  image: "/images/Events/webinar/BGIN Agentic Framework.avif"
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
    link: "/images/Activities/BGIN%20July%202025%20WG%20Newsletter.pdf",
    tags: ["Publication", "Working Group"],
    image: "/images/Activities/BGIN July 2025 WG Newsletter.png"
  }
]

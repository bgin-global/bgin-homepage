export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
}

export const allNews: NewsItem[] = [
  {
    id: "1",
    title: "BGIN Chair Shin'ichiro Matsuo Appointed to Japanese Financial Services Agency's Cryptocurrency System Working Group",
    description: "The Blockchain Governance Initiative Network (BGIN) announces the appointment of its Co-Chair, Professor Shin'ichiro Matsuo, as a member of the Cryptoasset System Working Group under the Financial Services Agency's Financial System Council in Japan.",
    date: "2025-08-06",
    link: "/news/matsuo-fsa-appointment",
    tags: ["Members", "Working Group"]
  },
  {
    id: "2",
    title: "BGIN Announces Block #13 Conference in Washington, D.C.",
    description: "BGIN is pleased to announce the 13th general meeting, Block #13, to be held in Washington, D.C. from October 15-17, 2025. This landmark event will bring together policymakers, technologists, and blockchain stakeholders to advance governance frameworks for digital economic networks.",
    date: "2025-08-06",
    link: "/news/block13-announcement",
    tags: ["Conference", "Event"]
  },
  {
    id: "3",
    title: "BGIN July 2025 Newsletter Now Available",
    description: "Stay up to date with the latest developments in blockchain governance. Our July newsletter features updates on recent working group activities, upcoming conferences, regulatory insights, and community highlights from around the globe.",
    date: "2025-08-03",
    link: "/images/Activities/BGIN%20July%202025%20WG%20Newsletter.pdf",
    tags: ["Publication", "Working Group"]
  }
]

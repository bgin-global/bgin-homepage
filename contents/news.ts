export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  author?: string;
  category?: string;
  featured?: boolean;
  url: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "20241220-bgin-block13-announcement",
    title: "BGIN Announces Block #13 Conference in Washington, D.C.",
    date: "December 20, 2024",
    description: "BGIN is pleased to announce the 13th general meeting, Block #13, to be held in Washington, D.C. from October 15-17, 2025. This landmark event will bring together policymakers, technologists, and blockchain stakeholders to advance governance frameworks for digital economic networks.",
    thumbnail: "/images/Events/Block3.jpeg",
    author: "BGIN Secretariat",
    category: "Conference",
    featured: true,
    url: "/news/20241220-bgin-block13-announcement",
  },
  {
    id: "20241215-new-working-group-launch",
    title: "BGIN Launches New Cybersecurity Working Group",
    date: "December 15, 2024",
    description: "BGIN is excited to announce the launch of its new Cybersecurity Working Group, focused on addressing international sharing of vulnerability information and threat intelligence within the crypto industry.",
    author: "BGIN Secretariat",
    category: "Working Group",
    featured: false,
    url: "/news/20241215-new-working-group-launch",
  },
]; 
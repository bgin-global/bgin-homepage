export interface Newsletter {
  title: string;
  date: string;
  description?: string;
  link: string;
  workingGroups: string[]; 
}

export const newsletters: Newsletter[] = [
  {
    title: "BGIN June 2025 WG Newsletter",
    date: "June 30, 2025",
    description: "Latest updates from our working groups including progress on ongoing projects and meeting schedules for Summer 2025.",
    link: "/images/Activities/BGIN June 2025 WG Newsletter.pdf",
    workingGroups: ["IKP WG", "FASE WG", "CS WG"],
  },
  {
    title: "BGIN May 2025 WG Newsletter",
    date: "June 3, 2025",
    description: "Monthly update on working group activities, progress reports, and upcoming events for June and July 2025.",
    link: "/images/Activities/BGIN May 2025 WG Newsletter.pdf",
    workingGroups: ["IKP WG", "FASE WG", "CS WG"],
  },
];

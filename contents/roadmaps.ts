export interface RoadmapData {
  date: string;
  title: string;
  description: string;
  imageSrc?: string;
  highlightImageSrc?: string;
  bgColor: string;
  textColor: string;
}

export const roadmaps: RoadmapData[] = [
  {
    date: "March 2019",
    title: "Blockchain Roundtable",
    description:
      "Hosted by the Financial Services Agency of Japan, the discussions among academia and regulators from different countries provided an opportunity for multi-stakeholder discussions on privacy, anonymization technologies, and governance issues of blockchain.",
    bgColor: "bg-[#6890F5]",
    textColor: "text-white",
  },
  {
    date: "June 2019",
    title: "G20 Osaka Summit",
    description:
      "The 2019 G20 Osaka summit was the fourteenth meeting of the G20, a forum of 19 countries and the EU that together represent most of the world economy",
    highlightImageSrc: "/images/About/G20_OSAKA.svg",
    bgColor: "bg-[#F0F4FE]",
    textColor: "text-black",
  },
  {
    date: "September 2019",
    title: "FIN/SUM Japan",
    description:
      "Key persons from different stakeholder groups discussed detailed issues and design of multi-stakeholder governance.",
    imageSrc: "/images/About/FINSUM_2019.svg",
    bgColor: "bg-[#6890F5]",
    textColor: "text-white",
  },
  {
    date: "March 2020",
    title: "BG2C - Special Online Broadcasting Panel Discussion",
    description:
      'Dr. Shin\'ichiro Matsuo made public the launch of "Blockchain Governance Initiative Network", BGIN.',
    bgColor: "bg-[#F0F4FE]",
    textColor: "text-black",
  },
];

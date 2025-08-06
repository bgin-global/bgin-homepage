import { getFeaturedNews } from "@/lib/fetch-news";
import ItemNews from "./ItemNews";
import SectionTitle from "./SectionTitle";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

export default function NewsSection() {
  const featuredNews = getFeaturedNews();

  if (featuredNews.length === 0) {
    return null;
  }

  return (
    <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
      <div className="flex items-center justify-between mb-8">
        <SectionTitle title="Latest News" />
        <Link 
          href="/news"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
        >
          View All News
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredNews.map((news, index) => (
          <ItemNews 
            key={news.id} 
            news={news} 
            isFeatured={index === 0}
          />
        ))}
      </div>
    </div>
  );
} 
import { NewsData } from "@/lib/fetch-news";
import Image from "next/image";
import Link from "next/link";

interface Props {
  news: NewsData;
  isFeatured?: boolean;
}

export default function ItemNews(props: Props) {
  const { news, isFeatured = false } = props;

  return (
    <Link href={news.url}>
      <div className={`bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 ${isFeatured ? 'border-blue-300 bg-blue-50' : ''}`}>
        <div className="flex flex-col lg:flex-row gap-4">
          {news.thumbnail && (
            <div className="flex-shrink-0">
              <Image
                src={news.thumbnail}
                alt={news.title}
                width={120}
                height={80}
                className="w-full lg:w-[120px] h-[80px] object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {news.category && (
                <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                  {news.category}
                </span>
              )}
              {isFeatured && (
                <span className="text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <h3 className="text-lg lg:text-xl font-medium text-black mb-2 line-clamp-2">
              {news.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {news.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {news.author && (
                  <span>By {news.author}</span>
                )}
                <span>•</span>
                <span>{news.date}</span>
              </div>
              
              <div className="flex items-center text-blue-600 text-sm font-medium">
                Read More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 
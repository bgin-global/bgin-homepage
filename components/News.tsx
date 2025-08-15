import { CUSTOM_STYLES } from "@/styles/custom";
import Button from "./Button/Button";
import { NewsItem } from "@/contents/news";
import Image from "next/image";
import Link from "next/link";

interface Props {
  news?: NewsItem[];
  maxItems?: number;
  layout?: "list" | "grid";
  showViewAllButton?: boolean;
}

export default function News({ news = [], maxItems = 3, layout = "list", showViewAllButton = true }: Props) {
  const displayedNews = news.slice(0, maxItems);

  // Function to automatically add "Latest" tag to the most recent news item
  const processNewsWithLatestTag = (newsItems: NewsItem[]) => {
    if (newsItems.length === 0) return newsItems;
    
    // Sort by date to find the most recent
    const sortedNews = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return sortedNews.map((item, index) => {
      if (index === 0) {
        // Add "Latest" tag to the most recent item if it doesn't already have it
        const hasLatestTag = item.tags.includes("Latest");
        return {
          ...item,
          tags: hasLatestTag ? item.tags : ["Latest", ...item.tags]
        };
      }
      return item;
    });
  };

  // Function to get tag color styling
  const getTagStyle = (tag: string) => {
    const tagStyles: { [key: string]: string } = {
      "Latest": "bg-red-100 text-red-800 border-red-200",
      "Conference": "bg-blue-100 text-blue-800 border-blue-200",
      "Working Group": "bg-green-100 text-green-800 border-green-200",
      "Event": "bg-purple-100 text-purple-800 border-purple-200",
      "Standards": "bg-orange-100 text-orange-800 border-orange-200",
      "New Project": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Publication": "bg-indigo-100 text-indigo-800 border-indigo-200",
    };
    return tagStyles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
  };



  const rawNewsToDisplay = displayedNews;
  const newsToDisplay = processNewsWithLatestTag(rawNewsToDisplay);

  return (
    <div className="py-8 md:py-16">
      <div className="flex-col flex items-center h-fit w-full max-w-5xl m-auto px-4">
        <div className="flex-col w-full flex items-center gap-8 md:gap-12">
          <div className="flex-col flex items-center gap-6 md:gap-8 text-black w-full">
            
            <div className={`${layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full" : "w-full md:max-w-4xl"} ${layout === "grid" ? "auto-rows-fr" : ""}`}>
              {newsToDisplay.map((item) => (
                <Link key={item.id} href={item.link} className="block no-underline">
                  <div className={`bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${layout === "grid" ? "flex flex-col overflow-hidden h-full" : "p-4 md:p-6"}`}>
                    {layout === "grid" ? (
                      // Grid view layout - vertical card with image next to tags
                      <div className="flex flex-col h-full">
                        <div className="p-6">
                          {/* Top section with image and tags */}
                          <div className="flex items-start gap-4 mb-4">
                            {/* Image - positioned on the left and slightly bigger */}
                            {item.image && (
                              <div className="w-20 h-20 bg-gray-50 relative overflow-hidden rounded-lg flex-shrink-0">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="80px"
                                  quality={95}
                                  className="object-cover"
                                  priority={false}
                                />
                              </div>
                            )}
                            
                            {/* Tags - positioned on the right */}
                            <div className="flex flex-wrap gap-2 flex-1">
                              {item.tags.map((tag, index) => (
                                <span 
                                  key={index}
                                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagStyle(tag)}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex-col gap-2 mb-3">
                            <h3 className="text-lg font-semibold text-black leading-tight">
                              {item.title}
                            </h3>
                            <div className="mt-3">
                              <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                                {new Date(item.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex-1 flex flex-col">
                            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 text-sm`}>
                              {item.description.substring(0, 150)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // List view layout - responsive for mobile
                      <div className="flex flex-col gap-3 md:gap-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                          {item.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium border ${getTagStyle(tag)}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                          {/* Image */}
                          {item.image && (
                            <div className="w-full md:w-24 h-48 md:h-24 bg-gray-50 rounded-lg relative overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 96px"
                                quality={95}
                                className="object-cover"
                                priority={false}
                              />
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-3 md:mb-4">
                              <h3 className="text-lg md:text-xl font-semibold text-black leading-tight">
                                {item.title}
                              </h3>
                              <span className="text-sm text-gray-500 md:whitespace-nowrap bg-gray-50 px-3 py-1 rounded-full self-start">
                                {new Date(item.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            
                            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 text-sm md:text-base`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {showViewAllButton && (
              <div className="mt-4">
                <Button 
                  link="/news" 
                  text="View All News" 
                  color="black" 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
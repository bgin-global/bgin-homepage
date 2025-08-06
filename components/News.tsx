import { CUSTOM_STYLES } from "@/styles/custom";
import Button from "./Button/Button";
import { NewsItem } from "@/contents/news";

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
    <div className="py-16">
      <div className="flex-col flex items-center h-fit max-w-5xl m-auto px-4">
        <div className="flex-col w-full flex items-center gap-12">
          <div className="flex-col flex items-center gap-8 text-black">
            
            <div className={`${layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl" : "max-w-4xl"} ${layout === "grid" ? "auto-rows-fr" : ""}`}>
              {newsToDisplay.map((item) => (
                <div key={item.id} className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1 ${layout === "grid" ? "flex flex-col" : ""}`}>
                  <div className={`${layout === "grid" ? "flex flex-col h-full" : "flex flex-col gap-4"}`}>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagStyle(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`${layout === "grid" ? "flex-col gap-2 mb-3" : "flex justify-between items-start gap-4"}`}>
                      <h3 className={`${layout === "grid" ? "text-lg" : "text-xl"} font-semibold text-black leading-tight`}>
                        {item.title}
                      </h3>
                      <span className={`text-sm text-gray-500 ${layout === "grid" ? "mt-2" : "whitespace-nowrap"} bg-gray-50 px-3 py-1 rounded-full ${layout === "grid" ? "self-start" : ""}`}>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <div className={`${layout === "grid" ? "flex-1 flex flex-col" : ""}`}>
                      <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 ${layout === "grid" ? "text-sm mb-3 flex-1" : "mb-4"}`}>
                        {layout === "grid" ? item.description.substring(0, 150) + "..." : item.description}
                      </p>
                      <div className={`flex justify-end ${layout === "grid" ? "mt-auto pt-2" : "mt-4"}`}>
                        <Button 
                          link={item.link} 
                          text="Read More" 
                          color="black" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
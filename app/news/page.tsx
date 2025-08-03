import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { CUSTOM_STYLES } from "@/styles/custom";
import ItemNews from "@/components/ItemNews";
import { getSortedNews } from "@/lib/fetch-news";

export default function NewsPage() {
  const allNews = getSortedNews();

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="News & Announcements" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            Stay updated with the latest news, announcements, and developments from BGIN. 
            Our news section covers conference announcements, working group updates, 
            and important milestones in blockchain governance.
          </div>
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        {allNews.length === 0 ? (
          <div className="bg-white w-full flex flex-col items-center gap-4 p-8 rounded-3xl border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="2"/>
                <path d="M12 8v4M12 16h.01" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No news available yet
              </h3>
              <p className="text-gray-600">
                News and announcements will be published here as they become available.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {allNews.map((news) => (
              <ItemNews key={news.id} news={news} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
} 
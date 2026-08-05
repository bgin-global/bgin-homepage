"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsComponent from "@/components/News";
import { CUSTOM_STYLES } from "@/styles/custom";
import { allNews } from "@/contents/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              News & Updates
            </h1>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 max-w-2xl mx-auto`}>
              Stay up to date with the latest news, announcements, and developments from BGIN. 
              Discover our research findings, conference updates, and working group activities.
            </p>
          </div>
        </div>
      </div>

      {/* News Content with Grid Layout */}
      <div className="py-8">
        <NewsComponent news={allNews} maxItems={allNews.length} layout="grid" showViewAllButton={false} />
      </div>
      
      <Footer />
    </main>
  );
}
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
              Announcements and updates from BGIN. For documents to read or cite,
              use Publications; for ongoing workstreams, use Projects.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              What you&apos;ll find here: dated news items.{" "}
              <a href="/publications" className="text-blue-700 underline">
                Publications
              </a>
              {" · "}
              <a href="/projects" className="text-blue-700 underline">
                Projects
              </a>
              {" · "}
              <a href="/start" className="text-blue-700 underline">
                Start here
              </a>
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
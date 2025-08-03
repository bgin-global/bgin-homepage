import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getNewsData, getSortedNews } from "@/lib/fetch-news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const allNews = getSortedNews();
  return allNews.map((news) => ({
    slug: news.id,
  }));
}

export default async function NewsDetailPage({ params }: Props) {
  try {
    const news = await getNewsData(params.slug);
    
    return (
      <main className="min-h-screen bg-white w-screen">
        <Header />

        <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
          <div className="w-full max-w-4xl m-auto px-6 xl:px-0">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link 
                href="/news"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
              >
                ← Back to News
              </Link>
            </div>

            {/* News Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {news.category && (
                  <span className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                )}
                {news.featured && (
                  <span className="text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                {news.title}
              </h1>
              
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                {news.author && (
                  <span>By {news.author}</span>
                )}
                <span>•</span>
                <span>{news.date}</span>
              </div>
              
              {news.thumbnail && (
                <div className="mb-8">
                  <Image
                    src={news.thumbnail}
                    alt={news.title}
                    width={800}
                    height={400}
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl"
                  />
                </div>
              )}
            </div>

            {/* News Content */}
            <div className="prose prose-lg max-w-none">
              {news.contentHtml && (
                <div 
                  dangerouslySetInnerHTML={{ __html: news.contentHtml }}
                  className="text-gray-700 leading-relaxed"
                />
              )}
              
              {!news.contentHtml && (
                <div className="text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">{news.description}</p>
                  <p className="text-gray-600">
                    Full article content will be available here. For more information, 
                    please contact the BGIN Secretariat.
                  </p>
                </div>
              )}
            </div>

            {/* Back to News */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/news"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                ← Back to All News
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    );
  } catch (error) {
    notFound();
  }
} 
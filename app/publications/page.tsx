import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/contents/projects";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              Publications
            </h1>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 max-w-2xl mx-auto`}>
              Reports, meeting summaries, and guidance documents produced by BGIN working groups.
              These publications serve regulators, industry participants, and researchers
              striving for shared understanding of blockchain governance.
            </p>
          </div>
        </div>
      </div>

      {/* Meeting Reports */}
      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Meeting Reports" />
        <div className="w-full max-w-5xl m-auto px-10 xl:px-4 mt-8 space-y-4">
          <Link href="/events/20260301-block14/meeting-reports">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Block #14 Meeting Reports
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Meeting reports from BGIN Block #14 (March 1–2, 2026), organized by Working Group.
                  </p>
                </div>
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 flex-shrink-0 ml-4">
                  <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/events/20251015-block13/meeting-reports">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Block #13 Meeting Reports
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Comprehensive meeting reports from BGIN Block #13 (October 15–17, 2025), organized by Working Groups with session details and PDFs.
                  </p>
                </div>
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 flex-shrink-0 ml-4">
                  <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Published Documents */}
      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="Published Documents" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <p className={`${CUSTOM_STYLES.DESCRIPTION} text-black mt-4`}>
            Research papers, study reports, and governance documents published by BGIN.
          </p>
        </div>
        <ul className="w-full text-black max-w-5xl m-auto px-10 xl:px-4 mt-8 space-y-4">
          {projects.published
            .filter((p) => !p.title.includes("Meeting Reports"))
            .map((published) => (
              <ItemList
                key={`${published.title}-${published.date ?? "no-date"}`}
                title={published.title}
                subtitle={published.date}
                link={published.link}
              />
            ))}
        </ul>
      </div>

      <Footer />
    </main>
  );
}

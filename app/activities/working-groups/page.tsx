"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { CUSTOM_STYLES } from "@/styles/custom";
import ItemWG from "@/components/ItemWG";
import NewsletterList from "@/components/NewsletterList";
import { workingGroups } from "@/contents/workingGroups";
import { useState } from "react";

export default function WorkingGroups() {
  const [isNewsletterExpanded, setIsNewsletterExpanded] = useState(false);

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      {/* Newsletter Section */}
      <div className={`bg-white w-full h-fit ${isNewsletterExpanded ? 'pb-32' : 'pb-8'}`}>
        <div className="w-full max-w-5xl flex justify-between items-start text-black mx-auto py-8 px-6 xl:px-0">
          <button
            onClick={() => setIsNewsletterExpanded(!isNewsletterExpanded)}
            className="w-full flex items-center justify-between text-left group"
          >
            <div className={CUSTOM_STYLES.TITLE.LEFT}>Monthly Newsletters</div>
            <svg
              className={`w-8 h-8 transition-transform flex-shrink-0 ml-4 ${isNewsletterExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isNewsletterExpanded && (
          <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
            <div className="mb-6">
              <p className="text-lg leading-[24px] font-Inter text-gray-700 text-center max-w-3xl mx-auto">
                Stay updated with the latest developments across all BGIN working groups through our monthly newsletters
                featuring progress reports, key findings, and upcoming initiatives.
              </p>
            </div>
            <NewsletterList />
          </div>
        )}
      </div>

      {/* Calendar Section */}
      <div className="bg-white w-full pb-32 h-fit">
        <SectionTitle title="Working Group Meeting Calendar" />
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            View all upcoming working group calls and events in our shared calendar.
          </p>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_d38853647205142770f21aebe1128f01c976bcb622145adf653f4f7dc3f12dfe%40group.calendar.google.com&ctz=UTC&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&height=600"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="BGIN Working Groups Calendar"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=Y19kMzg4NTM2NDcyMDUxNDI3NzBmMjFhZWJlMTEyOGYwMWM5NzZiY2I2MjIxNDVhZGY2NTNmNGY3ZGMzZjEyZGZlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add to Your Google Calendar
            </a>
          </div>
        </div>
      </div>

      {/* Working Groups Section */}
      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Working Groups" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          {workingGroups.map((workingGroup, index) => {
            return <ItemWG key={index} workingGroup={workingGroup} />;
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

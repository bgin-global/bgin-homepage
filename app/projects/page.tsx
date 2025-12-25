import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ItemBlock from "@/components/ItemBlock";
import ItemList from "@/components/ItemList";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/contents/projects";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              Projects & Publications
            </h1>
            <p
              className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 max-w-2xl mx-auto`}
            >
              Explore ongoing collaborative efforts and dive into the documents
              produced by BGIN working groups. These initiatives advance
              blockchain governance through practical research, shared
              principles, and public resources.
            </p>
          </div>
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Publications & Reports" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <p className={`${CUSTOM_STYLES.DESCRIPTION} text-black mt-4`}>
            BGIN documents serve regulators, industry participants, and
            researchers striving for shared understanding. Browse reports,
            meeting summaries, and guidance created by our community.
          </p>
        </div>

        {/* Featured Block 13 Meeting Reports */}
        <div className="w-full max-w-5xl m-auto px-10 xl:px-4 mt-8 mb-8">
          <Link href="/events/20251015-block13/meeting-reports">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Block 13 Meeting Reports
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Comprehensive meeting reports from BGIN Block 13 (October 15-17, 2025), organized by Working Groups with session details and PDFs.
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

        <ul className="w-full text-black max-w-5xl m-auto px-10 xl:px-4 space-y-4">
          {projects.published.map((published) => (
            <ItemList
              key={`${published.title}-${published.date ?? "no-date"}`}
              title={published.title}
              subtitle={published.date}
              link={published.link}
            />
          ))}
        </ul>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Projects in Progress" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <p className={`${CUSTOM_STYLES.DESCRIPTION} text-black mt-4`}>
            Working groups coordinate open research and produce guidance across
            policy, technology, and market use cases. Follow the latest
            discussions and contribute to their development.
          </p>
        </div>

        <div className={`${CUSTOM_STYLES.SECTION_FLEX.TWO} mt-12`}>
          {projects.inProgress.map((project) => {
            const hasWorkingGroupLink =
              project.wg_link && project.wg_link !== "/";

            return (
              <ItemBlock
                key={project.title}
                title={project.title}
                thumbnail=""
                description={
                  <>
                    <p className="mb-4">{project.description}</p>
                    <p className="text-sm text-gray-600">
                      Working Group:
                      {" "}
                      {hasWorkingGroupLink ? (
                        <Link
                          href={project.wg_link}
                          className="underline decoration-black decoration-1 underline-offset-2"
                        >
                          {project.wg}
                        </Link>
                      ) : (
                        <span>{project.wg}</span>
                      )}
                    </p>
                  </>
                }
                withImage={false}
                buttonTitle="Reference"
                buttonJumpTo={project.reference}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

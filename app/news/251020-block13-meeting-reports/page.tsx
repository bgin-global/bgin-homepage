/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Block13MeetingReportsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            BGIN Block #13 Meeting Reports Published
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime="2025-10-20">October 20, 2025</time>
            <span>•</span>
            <div className="flex gap-2">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                Publication
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Report
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/Events/Block3.jpeg"
            alt="Washington D.C."
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="text-gray-900">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            BGIN is pleased to announce the publication of comprehensive meeting reports from Block #13, 
            held in Washington D.C. from October 15-17, 2025. These detailed reports capture the discussions, 
            outcomes, and key findings from all working group sessions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Report Highlights</h2>
          
          <p className="text-gray-700 mb-4">
            The Block #13 Meeting Reports are now available, organized by working group for easy navigation. 
            Each report includes session summaries, presentation materials, and actionable insights from 
            the working groups and specialized sessions.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Working Groups Covered:</h3>
          
          <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
            <li>
              <strong>Cyber Security:</strong> 5 sessions covering offline key management, 
              security supply chain governance, information sharing frameworks, and post-quantum cryptography migration
            </li>
            <li>
              <strong>Identity, Key Management & Privacy (IKP):</strong> 3 sessions on ZKP and privacy-enhanced 
              authentication, accountable wallets, and blockchain forensics analysis
            </li>
            <li>
              <strong>Financial Applications & Social Economics (FASE):</strong> 3 sessions examining 
              blockchain decentralization metrics, stablecoin implementation guides, and regulatory harmonization
            </li>
            <li>
              <strong>BGIN Agent Hack:</strong> Final presentation showcasing innovative policy-to-code 
              solutions developed during the hackathon
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Access the Reports</h2>
          
          <p className="text-gray-700 mb-6">
            All meeting reports are now available in a dedicated resource page with organized access by working group. 
            Each report includes the session summary, PDF documentation, and links to detailed session information.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">View Full Reports</h3>
            <p className="text-indigo-700 mb-4">
              Access all Block #13 meeting reports organized by working group, with direct links to PDF documents 
              and session details.
            </p>
            <Link
              href="/events/20251015-block13/meeting-reports"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              View Block 13 Meeting Reports
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Deliverables</h2>
          
          <p className="text-gray-700 mb-4">
            The published reports represent the culmination of intensive three-day discussions bringing together 
            experts across policy, technology, and governance. Key deliverables include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>Finalized documents and standards across multiple working groups</li>
            <li>Technical research papers on blockchain analysis and decentralization metrics</li>
            <li>Policy recommendations and regulatory harmonization insights</li>
            <li>Presentations from the BGIN Agent Hack demonstrations</li>
            <li>Collaborative frameworks for information sharing and governance</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Next Steps</h2>
          
          <p className="text-gray-700 mb-4">
            These reports will inform ongoing working group activities and future research initiatives. 
            BGIN continues to advance blockchain governance through collaborative research and shared standards. 
            Working groups will incorporate feedback from Block #13 discussions into their next phases of development.
          </p>

          <p className="text-gray-700 mb-4">
            For more information about BGIN's ongoing projects and working group activities, 
            visit the <Link href="/activities" className="text-indigo-600 hover:text-indigo-800 underline">Activities</Link> page 
            or explore our <Link href="/projects" className="text-indigo-600 hover:text-indigo-800 underline">Projects & Publications</Link>.
          </p>

          {/* Back Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-3">
            <Link href="/events/20251015-block13" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Block 13 Event
            </Link>
            <br />
            <Link href="/news" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to News
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

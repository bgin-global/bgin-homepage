"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import "@/styles/block13.css";

// Meeting Reports data organized by Working Group
const meetingReports = {
  "Cyber Security": [
    {
      sessionId: "1-1",
      title: "Offline Key Management",
      pdfUrl: "/pdfs/block13/1-1 Offline Key Management.pdf",
      sessionUrl: "/events/20251015-block13/sessions/1-2"
    },
    {
      sessionId: "1-2",
      title: "Governance of Security Supply Chain",
      pdfUrl: "/pdfs/block13/1-2 Governance of Security Supply Chain.pdf",
      sessionUrl: "/events/20251015-block13/sessions/1-3"
    },
    {
      sessionId: "1-3",
      title: "Information Sharing Framework Standard",
      pdfUrl: "/pdfs/block13/1-3 Information Sharing Framework Standard.pdf",
      sessionUrl: "/events/20251015-block13/sessions/1-4"
    },
    {
      sessionId: "2-1",
      title: "Security Target and Protection Profile",
      pdfUrl: "/pdfs/block13/2-1 Security Target and Protection Profile.pdf",
      sessionUrl: "/events/20251015-block13/sessions/2-1"
    },
    {
      sessionId: "2-2",
      title: "Crypto Agility and PQC Migration",
      pdfUrl: "/pdfs/block13/2-2 Crypto Agility and PQC Migration.pdf",
      sessionUrl: "/events/20251015-block13/sessions/2-3"
    }
  ],
  "Identity, Key Management & Privacy": [
    {
      sessionId: "1-4",
      title: "ZKP and Privacy Enhanced Authentication",
      pdfUrl: "/pdfs/block13/1-4 ZKP and Privacy Enhanced Authentication.pdf",
      sessionUrl: "/events/20251015-block13/sessions/1-5"
    },
    {
      sessionId: "3-1-1",
      title: "Accountable Wallets",
      pdfUrl: "/pdfs/block13/3-1-1 Accountable Wallets.pdf",
      sessionUrl: "/events/20251015-block13/sessions/3-1"
    },
    {
      sessionId: "3-2",
      title: "Forensics & Analysis + Toward a Common Lexicon for Harmful On-Chain Activities",
      pdfUrl: "/pdfs/block13/3-2 Forensics and Analysis Toward a Common Lexicon for Harmful On-Chain Activities.pdf",
      sessionUrl: "/events/20251015-block13/sessions/3-3"
    }
  ],
  "Financial Applications & Social Economics": [
    {
      sessionId: "3-1-2",
      title: "Establishing Technical Metrics to Evaluate the 'Decentralization' of Blockchain Networks",
      pdfUrl: "/pdfs/block13/3-1-2 Establishing Technical Metrics to Evaluate the Decentralization of Blockchain Networks.pdf",
      sessionUrl: "/events/20251015-block13/sessions/3-2"
    },
    {
      sessionId: "3-4",
      title: "Practical Stablecoin Implementation Guide",
      pdfUrl: "/pdfs/block13/3-4 Practical Stablecoin Implementation Guide.pdf",
      sessionUrl: "/events/20251015-block13/sessions/3-7"
    },
    {
      sessionId: "3-5",
      title: "Harmonization among Crypto-asset, stablecoin and tokenized deposit",
      pdfUrl: "/pdfs/block13/3-5 Harmonization among Crypto-asset, stablecoin and tokenized deposit .pdf",
      sessionUrl: "/events/20251015-block13/sessions/3-8"
    }
  ],
  "BGIN Agent Hack": [
    {
      sessionId: "3-3",
      title: "BGIN Agent Hack Final Presentation",
      pdfUrl: "/pdfs/block13/3-3 BGIN Agent Hack Final Presentation.pdf",
      sessionUrl: "/events/20251015-block13/sessions/3-5"
    }
  ]
};

// WG color mappings (matching block13.css)
const wgColors: Record<string, { badge: string; border: string }> = {
  "Cyber Security": { badge: "cyber-security", border: "border-green-500" },
  "Identity, Key Management & Privacy": { badge: "ikp", border: "border-blue-500" },
  "Financial Applications & Social Economics": { badge: "fase", border: "border-purple-500" },
  "BGIN Agent Hack": { badge: "bgin-agent-hack", border: "border-yellow-500" }
};

export default function Block13MeetingReports() {
  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Block 13 Meeting Reports</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              October 15–17, 2025 | Washington, D.C.
            </p>
            <p className="text-lg text-blue-50 max-w-3xl">
              Access comprehensive meeting reports from BGIN Block 13, organized by Working Groups. 
              Each report includes detailed discussions, findings, and outcomes from the sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/events/20251015-block13" className="hover:text-blue-600 transition-colors">
            Block 13
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Meeting Reports</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        <div className="space-y-12">
          {Object.entries(meetingReports).map(([wgName, reports]) => {
            const colors = wgColors[wgName] || { badge: "general", border: "border-gray-500" };
            
            return (
              <section key={wgName} className="block13-section">
                {/* Working Group Header */}
                <div className={`border-l-4 ${colors.border} pl-6 mb-6`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{wgName}</h2>
                  <p className="text-gray-600">
                    {reports.length} {reports.length === 1 ? 'Session' : 'Sessions'}
                  </p>
                </div>

                {/* Reports List */}
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div
                      key={report.sessionId}
                      className="block13-session-card hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Left: Session Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`block13-wg-badge ${colors.badge} text-xs`}>
                              Session {report.sessionId}
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {report.title}
                            </h3>
                          </div>
                        </div>

                        {/* Right: Action Buttons */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <a
                            href={report.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            View Report (PDF)
                          </a>
                          <Link
                            href={report.sessionUrl}
                            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                          >
                            View Session Details
                            <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Back to Program Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            href="/events/20251015-block13#program"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Block 13 Program
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

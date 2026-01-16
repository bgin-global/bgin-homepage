"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import "@/styles/block13.css";

export default function Block14MeetingReports() {
  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Block 14 Meeting Reports</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              March 1–2, 2026 | Tokyo, Japan
            </p>
            <p className="text-lg text-blue-50 max-w-3xl">
              Meeting reports from BGIN Block 14 will be available after the event. 
              Check back here for comprehensive reports organized by Working Groups.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/events/20260301-block14" className="hover:text-blue-600 transition-colors">
            Block 14
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Meeting Reports</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        <div className="block13-section">
          <div className="block13-card text-center py-12">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reports Coming Soon</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Meeting reports from BGIN Block 14 sessions will be published here after the event. 
              Reports will be organized by Working Groups and will include detailed discussions, findings, and outcomes from each session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events/20260301-block14#program"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Program
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/events/20260301-block14"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Back to Block 14
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                  <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Working Groups Info */}
        <div className="block13-section mt-12">
          <h2 className="text-2xl font-bold mb-6">Working Groups</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="block13-card">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded bg-yellow-100 border border-yellow-300 text-yellow-800">Agentic AI</span>
                Agentic AI Working Group
              </h3>
              <p className="text-sm text-gray-600">
                Reports from Agentic AI sessions will be available here after the event.
              </p>
            </div>
            <div className="block13-card">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded bg-blue-100 border border-blue-300 text-blue-800">IKP</span>
                Identity, Key Management & Privacy
              </h3>
              <p className="text-sm text-gray-600">
                Reports from IKP sessions will be available here after the event.
              </p>
            </div>
            <div className="block13-card">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded bg-green-100 border border-green-300 text-green-800">CS</span>
                Cyber Security
              </h3>
              <p className="text-sm text-gray-600">
                Reports from Cyber Security sessions will be available here after the event.
              </p>
            </div>
            <div className="block13-card">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded bg-purple-100 border border-purple-300 text-purple-800">FASE</span>
                Financial Applications & Social Economics
              </h3>
              <p className="text-sm text-gray-600">
                Reports from FASE sessions will be available here after the event.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

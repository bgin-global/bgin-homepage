"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import "@/styles/block13.css";
import {
  BLOCK15_REPORT_GROUPS,
  BLOCK15_REPORT_STATUS,
  block15ReportHref,
  block15Reports,
  type Block15ReportGroup,
} from "@/lib/block15-meeting-reports";

const groupStyle: Record<Block15ReportGroup, { badge: string; border: string }> = {
  Plenary: { badge: "general", border: "border-gray-500" },
  "Identity, Key Management & Privacy": { badge: "ikp", border: "border-sky-700" },
  "Cyber Security": { badge: "cyber-security", border: "border-emerald-700" },
  "Financial Applications & Social Economics": {
    badge: "fase",
    border: "border-violet-700",
  },
};

export default function Block15MeetingReports() {
  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      <section className="relative bg-blue-700 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Block 15 Meeting Reports
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            October 15–16, 2026 | Washington, D.C.
          </p>
          <p className="text-lg text-blue-50 max-w-3xl">
            Session reports from BGIN Block 15, organized by Working Group.
            Each report records the agreements, the discussion, the actions
            and the points left open in one session.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link
            href="/events/20261015-block15"
            className="hover:text-blue-700 transition-colors"
          >
            Block 15
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Meeting Reports</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        <div className="mb-12 rounded-md border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-gray-800">
          <p className="font-semibold text-gray-900 mb-1">
            Status: {BLOCK15_REPORT_STATUS}
          </p>
          <p>
            These reports are session records, not transcripts. They are
            prepared under the Chatham House Rule, so remarks are not linked
            to speakers or their affiliations. Agreements listed in a report
            are candidates until the working group confirms them, and reported
            claims are not verified findings. To comment or correct a report,
            post in your working group on the{" "}
            <Link href="/start/discourse" className="text-blue-700 underline">
              BGIN Discourse
            </Link>
            .
          </p>
        </div>

        <div className="space-y-12">
          {BLOCK15_REPORT_GROUPS.map((group) => {
            const reports = block15Reports.filter((r) => r.group === group);
            const style = groupStyle[group];
            return (
              <section key={group} className="block13-section">
                <div className={`border-l-4 ${style.border} pl-6 mb-6`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {group}
                  </h2>
                  <p className="text-gray-600">
                    {reports.length} {reports.length === 1 ? "Report" : "Reports"}
                  </p>
                </div>

                <div className="space-y-4">
                  {reports.map((report) => (
                    <div
                      key={report.file}
                      className="block13-session-card hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <span
                              className={`block13-wg-badge ${style.badge} text-xs`}
                            >
                              Session {report.sessionIds.join(" + ")}
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {report.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600">
                            {report.when} · {report.room}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                          <a
                            href={block15ReportHref(report.file)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-sm font-medium"
                          >
                            View Report (PDF)
                          </a>
                          <Link
                            href={`/events/20261015-block15/sessions/${report.sessionIds[report.sessionIds.length - 1]}`}
                            className="inline-flex items-center px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                          >
                            Session Details
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

        <p className="mt-12 text-sm text-gray-600 max-w-3xl">
          Two sessions were not recorded and have no report: the Day 1 open
          space (Agent Hack / Local Pi Private Knowledge Network) and the Day 2
          Industry Session.
        </p>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <Link
            href="/events/20261015-block15#program"
            className="text-blue-700 hover:text-blue-800 font-semibold transition-colors"
          >
            ← Back to Block 15 Program
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

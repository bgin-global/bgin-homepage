"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/Button/Button";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Link from "next/link";

export default function AgenticFrameworkWebinarPage() {
  const getTagStyle = (tag: string) => {
    const tagStyles: { [key: string]: string } = {
      Latest: "bg-red-100 text-red-800 border-red-200",
      Conference: "bg-blue-100 text-blue-800 border-blue-200",
      "Working Group": "bg-green-100 text-green-800 border-green-200",
      Event: "bg-purple-100 text-purple-800 border-purple-200",
      Standards: "bg-orange-100 text-orange-800 border-orange-200",
      Announcement: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Publication: "bg-indigo-100 text-indigo-800 border-indigo-200",
    };
    return tagStyles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const articleTags = ["Event", "Working Group"];

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Image
              src="/images/Logo/BGIN_horizontal_01_black.png"
              alt="BGIN Logo"
              width={300}
              height={100}
              className="mx-auto mb-6"
            />
            <div className="flex justify-center items-center gap-2 mb-4">
              {articleTags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getTagStyle(
                    tag
                  )}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              BGIN Agentic Framework: Archive, Codex and Discourse
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              August 12, 2025 • Blockchain Governance Initiative Network (BGIN)
            </p>
          </div>

          {/* Event summary card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-black mb-2">Webinar Details</h2>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>Date:</strong> Thursday, August 28, 2025</li>
                  <li><strong>Time:</strong> 12:00 PM - 13:00 PM (UTC +0)</li>
                  <li><strong>Format:</strong> Online webinar (Zoom) with interactive Q&amp;A</li>
                  <li><strong>Hosted by:</strong> BGIN Identity, Key Management &amp; Privacy (IKP) Working Group</li>
                  <li><strong>Duration:</strong> 60 minutes</li>
                </ul>
              </div>
              <div className="flex items-center">
                <Button link="https://lu.ma/tfqvop6t" text="Register" color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-2 mb-6`}>
              BGIN&apos;ing of Agentic Governance
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Join BGIN&apos;s IKP Working Group for an exploration of the Agentic Archive and Codex framework that transforms static governance documentation into living intelligence systems. This webinar introduces the three-agent architecture—Archive, Codex, and Discourse—that preserves stakeholder sovereignty while scaling collective governance wisdom through cryptographic consensus mechanisms.
            </p>

            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              Read the related blog series here: {" "}
              <a
                href="https://sync.soulbis.com/s/bgin-agentic-framework-archive-codex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                sync.soulbis.com/s/bgin-agentic-framework-archive-codex
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">What You&apos;ll Learn</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li>How Archive Agents capture institutional memory while protecting competitive intelligence</li>
              <li>The role of Codex Agents in translating policy frameworks into executable protocols</li>
              <li>How Discourse Agents enable the Agentic Chatham House Protocol for privacy-preserving governance participation</li>
              <li>Practical implementation strategies for sovereignty-preserving governance intelligence</li>
              <li>EDCON and Block 13 BGIN events discussion—turning moments of in-person focus into practical goals</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Who Should Attend</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
              <li>Regulators &amp; Policymakers</li>
              <li>Technologists</li>
              <li>Industry Leaders</li>
              <li>Academics &amp; Researchers</li>
              <li>Students</li>
            </ul>

            <h3 id="registration" className="text-xl font-semibold text-black mt-10 mb-4">Registration</h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Welcome! To join the event, please register below.
            </p>
            <div className="max-w-sm">
              <Button link="https://lu.ma/tfqvop6t" text="Register for the Webinar" color="black" />
            </div>

            <h3 className="text-xl font-semibold text-black mt-12 mb-4">Upcoming BGIN Events</h3>
            <div className="space-y-6">
              <div>
                <p className="font-medium text-black">🇯🇵 BGIN Workshop at EDCON Osaka</p>
                <p className="text-gray-700">Date: September 16-19, 2025 • Location: Osaka, Japan</p>
              </div>
              <div>
                <p className="font-medium text-black">🇺🇸 Block 13: The BGIN&apos;ing of Agentic Governance</p>
                <p className="text-gray-700">
                  Date: October 15-17, 2025 • Location: Washington, DC —
                  <Link href="/events/20251015-block13" className="text-blue-600 hover:underline">View event page</Link>
                </p>
              </div>
            </div>

            <hr className="border-gray-300 my-8" />

            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600`}>
              For more information about BGIN&apos;s Identity, Key Management & Privacy Working Group and upcoming events, visit {" "}
              <a href="https://bgin.discourse.group/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">bgin.discourse.group</a>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

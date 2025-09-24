/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Block13ProgramReleasePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            BGIN Block #13 Program Released - Washington D.C.
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime="2025-08-29">August 29, 2025</time>
            <span>•</span>
            <div className="flex gap-2">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                Conference
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Event
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
            BGIN is pleased to announce the release of the tentative program for Block #13, 
            taking place in Washington D.C. from October 15-17, 2025, at Georgetown University.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Program Overview</h2>
          
          <p className="text-gray-700 mb-4">
            The Block #13 program brings together regulators, technologists, and industry leaders 
            for three days of working sessions, technical development, and governance discussions. 
            Please note that this program is tentative and subject to change.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Featured Sessions Include:</h3>
          
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>
              <strong>Gov Hack (Days 1-3):</strong> A multi-day hackathon where policy discussions 
              turn into working software through agent-mediated standards and programmable governance. 
              Includes final presentations on Day 3.
            </li>
            <li>
              <strong>Working Group Sessions:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>IKP (Identity, Key Management & Privacy):</strong> Sessions on ZKP and Privacy Enhanced Authentication, 
                Accountable Wallet, Forensics & Analysis, and AI Agent Governance</li>
                <li><strong>FASE (Financial Application & Smart contract Environment):</strong> Maturity Definitions, 
                Toward a Common Lexicon for Harmful On-Chain Activities, Practical Stablecoin Implementation, and Harmonization discussions</li>
                <li><strong>Cyber Security:</strong> Offline Key Management, Governance of Security Supply Chain, 
                and Security Target and Protection Profile sessions</li>
              </ul>
            </li>
            <li>
              <strong>Welcome Reception:</strong> October 15 evening at Hilltop Tap Room
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Key Research Projects</h3>
          
          <p className="text-gray-700 mb-4">
            The conference will feature presentations and discussions on several critical research projects:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>Distinguishing Blockchain Forensics from Analytics (Public Comment phase)</li>
            <li>Agent Standards and Frameworks (Draft phase)</li>
            <li>Accountable Wallet standards (Published)</li>
            <li>Policy priorities for stablecoin regulation (Published)</li>
            <li>Cyber Security Information Sharing Framework (Public Comment phase)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Venues</h3>
          
          <p className="text-gray-700 mb-4">
            Sessions will be held across multiple Georgetown University venues including:
            HFSC Herman Meeting Room, Bulldog Alley, Arrupe Hall, and the Hariri Building (Rooms 140 & 240).
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Fee Waiver Available</h3>
          
          <p className="text-gray-700 mb-4">
            Contributors who submit written contributions and present at Block #13 receive complete 
            registration fee waivers. This supports BGIN's commitment to inclusive participation 
            and collaborative governance development.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-amber-800 mb-2">Program Status: Tentative</h4>
            <p className="text-amber-700">
              The published program is tentative and subject to change. Final agenda will be 
              posted closer to the event date. Follow our social media channels for updates.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Registration</h3>
          
          <p className="text-gray-700 mb-4">
            Registration is now open via Eventbrite. Space is limited to regiser now!
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/events/20251015-block13#program"
              className="bg-[#688ff5] text-white px-6 py-3 rounded-lg hover:bg-[#5a7de8] transition-colors font-semibold"
            >
              View Full Program
            </Link>
            <a
              href="https://www.eventbrite.com/e/bgin-block-13-tickets-1584466825929?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#688ff5] border-2 border-[#688ff5] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Register Now
            </a>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">About BGIN</h3>
          
          <p className="text-gray-700 mb-4">
            The Blockchain Governance Initiative Network (BGIN) is a multi-stakeholder forum 
            advancing blockchain governance through technical standards, policy frameworks, 
            and collaborative implementation. Block conferences serve as our primary venues 
            for bringing together regulators, technologists, and industry leaders to shape 
            the future of blockchain governance.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Stay Connected</h3>
          
          <p className="text-gray-700 mb-4">
            For program updates and announcements, follow BGIN on:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <a href="https://twitter.com/bgin_global" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                X (Twitter): @bgin_global
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/blockchain-governance-initiative-network/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn: Blockchain Governance Initiative Network
              </a>
            </li>
            <li>
              <a href="https://bgin.discourse.group" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Discussion Forum: bgin.discourse.group
              </a>
            </li>
          </ul>
        </div>

        {/* Back to News */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/news" className="text-[#688ff5] hover:text-[#5a7de8] font-medium">
            ← Back to News
          </Link>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
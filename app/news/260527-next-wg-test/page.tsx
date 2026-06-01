/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function NextWGCallPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Join the Next BGIN Working Group Calls
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime="2026-05-27">May 27, 2026</time>
            <div className="flex gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Working Group
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Event
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-40 mb-8 rounded-lg overflow-hidden bg-gray-50">
          <Image
            src="/images/Logo/BGIN_horizontal_01_black.png"
            alt="BGIN Working Group"
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Article Content */}
        <div className="text-gray-900">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            BGIN invites all interested participants to join our upcoming Working Group calls.
            Whether you are a technologist, policymaker, researcher, or practitioner, your
            perspective is valuable. Come contribute to the development of open governance
            standards for blockchain ecosystems.
          </p>

          {/* Schedule */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Schedule
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">FASE WG call</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Date:</span> Wednesday, June 3, 2026
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Time / Link:</span>11:00 AM UTC
                    <span className="text-gray-500 italic">To be shared via mailing list</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">IKP WG call</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Date:</span> Thursday, June 4, 2026
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Time / Link:</span>12:00 PM UTC
                    <span className="text-gray-500 italic">To be shared via mailing list</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Agenda */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Agenda
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <p className="text-gray-600">
              The sessions will focus on ongoing tracking of Working Group progress, key updates on blockchain governance standards, and open floor discussions for collaborative inputs. A detailed agenda will be updated here and circulated to the network shortly.
            </p>
          </div>

          {/* How to Join */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            How to Join
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <p className="text-blue-900 mb-2">
              Details on how to join the sessions will be shared via our official communication channels. To receive meeting invitations, precise timing slots, and calendar updates directly, please ensure you are subscribed to the BGIN Mailing List and following us on LinkedIn and X (Twitter).
            </p>
          </div>

          {/* About the Working Group */}
          <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">
            About BGIN
          </h3>

          <p className="text-gray-700 mb-4">
            The Blockchain Governance Initiative Network (BGIN) aims to provide an open, neutral, and balanced forum for all stakeholders—including developers, regulators, business entities, and consumers—to deepen common understanding and collaborate on sustainable ecosystem governance.
          </p>
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

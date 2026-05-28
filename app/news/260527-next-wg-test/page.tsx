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
            Join the Next BGIN Working Group Call
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
            src="/images/logo/BGIN_horizontal_01_black.png"
            alt="BGIN Working Group"
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Article Content */}
        <div className="text-gray-900">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            BGIN invites all interested participants to join the upcoming Working Group call.
            Whether you are a technologist, policymaker, researcher, or practitioner, your
            perspective is valuable. Come contribute to the development of open governance
            standards for blockchain ecosystems.
          </p>

          {/* Schedule */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Schedule
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold">Date & Time:</span>{" "}
                  <span className="text-gray-500">TBD</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold">Meeting Link:</span>{" "}
                  <span className="text-gray-500">TBD</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Agenda */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Agenda
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <p className="text-gray-500 italic">Agenda to be announced. Please check back closer to the meeting date.</p>
          </div>

          {/* How to Join */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            How to Join
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <p className="text-blue-700 mb-4">
              Details on how to join the session will be shared here. To receive meeting
              invitations and updates directly, subscribe to the working group mailing list.
            </p>
            <p className="text-blue-700 italic">TBD</p>
          </div>

          {/* About the Working Group */}
          <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">
            About the Working Group
          </h3>

          <p className="text-gray-700 mb-4">
            TBD
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

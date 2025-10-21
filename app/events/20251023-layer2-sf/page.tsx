/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Layer2SanFranciscoEvent() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Go Back Button */}
        <div className="mb-6">
          <Link
            href="/events"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Events
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Layer 2 Meetup @ San Francisco
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Blockchain Governance Initiative Network Layer 2 Meetup
          </p>
          <div className="text-lg text-gray-700 mb-6">
            Part of <Link href="https://events.linuxfoundation.org/open-source-ai-week/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Open Source AI Week</Link>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://luma.com/46pvoj1t?tk=ccPj5D"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register on Luma
            </Link>
          </div>
        </div>

        {/* Event Image and Logos */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/Events/SanFrancisco.jpg"
              alt="San Francisco"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="flex items-center justify-center gap-12 p-8 bg-gray-50 rounded-lg">
            <Image
              src="/images/Logo/BGIN_horizontal_01_black.png"
              alt="BGIN Logo"
              width={200}
              height={70}
              className="object-contain"
            />
          </div>
        </div>

        {/* Event Details Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">📅 Date & Time</h3>
                <p className="text-gray-600">October 23, 2025</p>
                <p className="text-gray-600">12:00 PM - 5:00 PM (PDT)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">💰 Price</h3>
                <p className="text-gray-600">Free (Registration Required)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">🌐 Format</h3>
                <p className="text-gray-600">Onsite Event</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">👥 Target Audience</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Developers</li>
                  <li>Regulators</li>
                  <li>Business entities</li>
                  <li>Consumers</li>
                  <li>Academia</li>
                  <li>Anyone interested in blockchain ecosystems</li>
                </ul>
              </div>

              <div className="mb-6" id="register">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">🎫 Registration</h3>
                <p className="text-gray-600 mb-3">Free registration required to attend</p>
                <div className="space-y-2">
                  <Link
                    href="https://luma.com/46pvoj1t?tk=ccPj5D"
                    className="inline-flex items-center text-blue-600 hover:text-purple-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register for Layer2 Meetup (Luma) →
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">📍 Venue Location</h3>
                <p className="text-gray-600 font-medium">717 Market St #100</p>
                <p className="text-gray-600">San Francisco, CA 94103</p>

                <div className="mt-3">
                  <p className="text-sm text-gray-500 mb-1">• Located in downtown San Francisco</p>
                  <p className="text-sm text-gray-500">• Accessible via BART and Muni</p>
                </div>

                <Link
                  href="https://maps.app.goo.gl/2NtvrwvLeU8yrzfu6"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps →
                </Link>
              </div>

              <div className="h-[250px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0309779486!2d-122.40860908468169!3d37.78946797975795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062f5233721%3A0x4a9c9d8e5a5b5c5d!2s717%20Market%20St%20%23100%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1736426543210!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Program Section - Moved up and updated with actual schedule */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">📋 Program Schedule</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-6 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">BGIN Intro Presentation</h3>
                <span className="text-gray-600 font-medium">12:00 - 12:30</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">BGIN Block 13 + AgentHack in Review → What's Next</h3>
                <span className="text-gray-600 font-medium">12:30 - 13:00</span>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Panel / Roundtable</h3>
                <span className="text-gray-600 font-medium">13:00 - 13:30</span>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Open Workshop on AgentHack Outcomes → Collaboration Time</h3>
                <span className="text-gray-600 font-medium">13:30 - 15:00</span>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Networking</h3>
                <span className="text-gray-600 font-medium">15:00 - 17:00</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> All times are in Pacific Daylight Time (PDT). The program starts at 12:00 PM (noon).
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About BGIN and This Meetup</h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Blockchain Governance Initiative Network (BGIN) is a non-profit organization that creates
              neutral forums for in-depth discussions among all stakeholders, documenting a common language
              to establish shared understanding. It also fosters innovation, best practices, and standards
              for blockchain governance in operational, regulatory, and technical spheres.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">BGIN's Mission</h3>
            <p className="mb-4">To serve its purpose, BGIN:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Creates an open, global, and neutral platform for multi-stakeholder dialogues</li>
              <li>Develops a common language and understanding among stakeholders with diverse perspectives through multi-stakeholder dialogues</li>
              <li>Builds academic anchors through continuous provision of trustable documents and codes based on an open source-style approach</li>
              <li>Establishes best practices and standards that serve blockchain governance</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">About Layer 2 Meetups</h3>
            <p className="mb-4">
              BGIN has held global Block conferences two or three times a year since its founding in 2020.
              Block Conferences represent the premier forum for multi-stakeholder discussions provided by BGIN.
              In addition to Block Conferences, BGIN organizes Layer2 Meetups to exchange ideas with various
              community hubs across the globe openly.
            </p>

            <p className="mb-4">
              This Layer2 Meetup in San Francisco is part of the Open Source AI Week in San Francisco 2025,
              providing a unique opportunity to connect blockchain governance discussions with the broader
              open source and AI communities.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">What to Expect</h3>
            <p className="mb-4">
              Be part of shaping the future of blockchain governance at BGIN. Connect with regulators,
              technologists, and industry leaders from around the world. This meetup will feature:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>In-depth discussions on blockchain governance challenges and solutions</li>
              <li>Networking opportunities with diverse stakeholders</li>
              <li>Knowledge sharing on best practices and emerging standards</li>
              <li>Collaborative problem-solving sessions</li>
            </ul>
          </div>
        </div>


        {/* Sponsors Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Event Sponsor</h2>
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg">
              <Image
                src="/images/Events/sponsor/DGUS.png"
                alt="Digital Garage"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="bg-[#688ff5] rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on BGIN Events</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join our community to receive updates about upcoming events,
            working group sessions, and governance initiatives
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://bgin.discourse.group"
              className="bg-white text-[#688ff5] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discussion Forum
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
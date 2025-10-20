/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Layer2SFMeetupNews() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Go Back Button */}
        <div className="mb-6">
          <Link
            href="/news"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>
        </div>

        {/* Article Header */}
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Event</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Conference</span>
              <span className="text-gray-500 text-sm">October 20, 2025</span>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Join BGIN Layer 2 Meetup at San Francisco - October 23
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              BGIN will host a Layer 2 Meetup in San Francisco on October 23, 2025, as part of Open Source AI Week.
              The event features presentations on Block #13 outcomes, AgentHack review, panel discussions, and
              collaborative workshops on blockchain governance frameworks.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/Events/San Francisco.jpg"
              alt="San Francisco"
              width={896}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">BGIN Layer 2 Meetup Comes to San Francisco</h2>

            <p className="mb-6 text-gray-700 text-lg">
              The Blockchain Governance Initiative Network (BGIN) is excited to announce its upcoming Layer 2 Meetup
              in San Francisco on <strong className="text-gray-900">October 23, 2025</strong>, from <strong className="text-gray-900">12:00 PM to 5:00 PM PDT</strong>.
              This hybrid event is part of the Open Source AI Week and offers a unique opportunity for
              stakeholders to engage in meaningful discussions about blockchain governance.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Event Highlights</h3>

            <p className="mb-4 text-gray-700 text-lg">
              The meetup will feature an exciting program designed to foster collaboration and knowledge sharing
              among developers, regulators, business entities, and academia:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold mb-4 text-gray-900 text-lg">Program Schedule:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong className="text-gray-900">12:00 - 12:30:</strong> BGIN Intro Presentation</li>
                <li><strong className="text-gray-900">12:30 - 13:00:</strong> BGIN Block 13 + AgentHack in Review → What's Next</li>
                <li><strong className="text-gray-900">13:00 - 13:30:</strong> Panel / Roundtable Discussion</li>
                <li><strong className="text-gray-900">13:30 - 15:00:</strong> Open Workshop on AgentHack Outcomes → Collaboration Time</li>
                <li><strong className="text-gray-900">15:00 - 17:00:</strong> Networking Session</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Building on Block #13 Success</h3>

            <p className="mb-6 text-gray-700 text-lg">
              This Layer 2 Meetup follows the successful BGIN Block #13 conference in Washington, D.C., held from
              October 15-17, 2025. Attendees will have the opportunity to review key outcomes from Block #13 and
              the AgentHack initiative, while exploring next steps for blockchain governance frameworks.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Location and Registration</h3>

            <p className="mb-4 text-gray-700 text-lg">
              The event will take place at:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="font-semibold text-gray-900">717 Market St #100</p>
              <p className="text-gray-700">San Francisco, CA 94103</p>
            </div>

            <p className="mb-6 text-gray-700 text-lg">
              Registration is free but required. The event is hybrid, though onsite participation is strongly
              encouraged for the full experience.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Who Should Attend</h3>

            <p className="mb-4 text-gray-700 text-lg">
              This meetup is designed for:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 text-lg">
              <li>Blockchain developers and technologists</li>
              <li>Regulators and policymakers</li>
              <li>Business leaders and entrepreneurs</li>
              <li>Academic researchers</li>
              <li>Anyone interested in blockchain governance and standards</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">About BGIN Layer 2 Meetups</h3>

            <p className="mb-6 text-gray-700 text-lg">
              BGIN Layer 2 Meetups complement our flagship Block Conferences by providing more frequent, focused
              opportunities for community engagement. These events facilitate open exchanges of ideas with various
              community hubs globally, advancing our mission to create neutral forums for multi-stakeholder
              dialogue on blockchain governance.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Event Sponsor</h3>

            <p className="mb-6 text-gray-700 text-lg">
              We thank Digital Garage for their generous sponsorship of this event, enabling us to continue
              fostering innovation and collaboration in the blockchain ecosystem.
            </p>

            {/* Call to Action */}
            <div className="bg-blue-50 rounded-lg p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Join Us in San Francisco</h3>
              <p className="mb-6 text-gray-700 text-lg">
                Don't miss this opportunity to be part of shaping the future of blockchain governance.
                Connect with industry leaders, share insights, and contribute to advancing global standards.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="https://luma.com/46pvoj1t?tk=ccPj5D"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </Link>
                <Link
                  href="/events/20251023-layer2-sf"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  View Full Event Details
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Links</h3>
          <div className="space-y-3">
            <div>
              <Link href="/events" className="text-blue-600 hover:text-blue-800 font-medium">
                View All Events →
              </Link>
            </div>
            <div>
              <Link href="/activities/layer2-meetup" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn About Layer 2 Meetups →
              </Link>
            </div>
            <div>
              <Link
                href="https://events.linuxfoundation.org/open-source-ai-week/"
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source AI Week →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
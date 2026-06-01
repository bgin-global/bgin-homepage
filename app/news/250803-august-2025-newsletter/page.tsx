"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";

export default function August2025NewsletterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                Newsletter
              </span>
            </div>
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              BGIN August 2025 Newsletter Now Available
            </h1>
            <p className="text-gray-600 text-lg">
              Published on August 1, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white">
            {/* BGIN Logo */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/images/Logo/bgin_logo.svg" 
                alt="BGIN Logo" 
                width={64}
                height={64}
                className="h-16 w-auto"
              />
            </div>

            {/* Newsletter Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">Dear BGIN Community,</h2>
                <p className="text-blue-800 mb-0">
                  Welcome to the August 2025 edition of the BGIN Newsletter. This month brings exciting developments 
                  in blockchain governance, including significant appointments, upcoming conferences, and continued 
                  progress across our working groups.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Featured News</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Major Appointment</h3>
                <p className="text-green-800">
                  We&apos;re proud to announce that BGIN Co-Chair Professor Shin&apos;ichiro Matsuo has been appointed 
                  as a member of the Cryptoasset System Working Group under the Financial Services Agency&apos;s 
                  Financial System Council in Japan. This appointment strengthens BGIN&apos;s influence in shaping 
                  regulatory frameworks for digital assets.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Block #13 Conference</h3>
                <p className="text-purple-800">
                  Mark your calendars! Block #13 will be held in Washington, D.C. from October 15-17, 2025. 
                  This landmark event will bring together policymakers, technologists, and blockchain stakeholders 
                  to advance governance frameworks for digital economic networks.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Working Group Updates</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Working Group</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Continued development of governance framework standards</li>
                    <li>• New research on cross-chain interoperability</li>
                    <li>• Updated technical specifications for Layer 2 solutions</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy Working Group</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Analysis of global regulatory developments</li>
                    <li>• Collaboration with international financial institutions</li>
                    <li>• Policy recommendations for digital asset frameworks</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">🌍 Global Community Highlights</h2>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="font-semibold text-gray-900">Asia-Pacific Region</h3>
                  <p className="text-gray-700">
                    Increased engagement from regulatory bodies across the region, with new partnerships 
                    formed in Japan, Singapore, and Australia.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="font-semibold text-gray-900">Europe</h3>
                  <p className="text-gray-700">
                    Active participation in EU policy consultations and collaboration with European 
                    blockchain initiatives on governance best practices.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="font-semibold text-gray-900">Americas</h3>
                  <p className="text-gray-700">
                    Preparation for Block #13 in Washington, D.C., with confirmed participation from 
                    leading industry experts and policymakers.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">📅 Upcoming Events</h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">
                      Sep 15
                    </span>
                    <div>
                      <span className="font-semibold">Working Group Monthly Call</span>
                      <p className="text-gray-600 text-sm">Technical and Policy Working Groups joint session</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5">
                      Oct 15-17
                    </span>
                    <div>
                      <span className="font-semibold">Block #13 Conference</span>
                      <p className="text-gray-600 text-sm">Washington, D.C. - Registration opens September 1st</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Research & Publications</h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    &ldquo;Governance Frameworks for Decentralized Systems: A Comparative Analysis&rdquo;
                  </h3>
                  <p className="text-gray-700 text-sm">
                    A comprehensive study examining governance models across different blockchain networks 
                    and their effectiveness in various use cases.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    &ldquo;Regulatory Trends in Digital Asset Governance: Q2 2025 Report&rdquo;
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Analysis of regulatory developments worldwide and their impact on blockchain governance practices.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">Get Involved</h2>
                <p className="text-blue-800 mb-4">
                  BGIN thrives on community participation. Whether you&apos;re a researcher, developer, policymaker, 
                  or simply interested in blockchain governance, there are many ways to contribute:
                </p>
                <ul className="text-blue-800 space-y-1">
                  <li>• Join our working groups and contribute to ongoing research</li>
                  <li>• Attend Block #13 in Washington, D.C.</li>
                  <li>• Participate in our monthly community calls</li>
                  <li>• Follow us on social media for the latest updates</li>
                </ul>
              </div>

              <div className="text-center py-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  Thank you for being part of the BGIN community. Together, we&apos;re building the future of blockchain governance.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>The BGIN Team</strong><br />
                  Blockchain Governance Initiative Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

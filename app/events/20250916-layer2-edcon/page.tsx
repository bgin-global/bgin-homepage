/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Layer2EDCONEvent() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Go Back Button */}
        <div className="mb-6">
          <Link 
            href="/activities/layer2-meetup-overview"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Layer 2 Meetups Overview
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Layer 2 Meetup @ EDCON 2025
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Privacy Pool & Cybersecurity Information Sharing Standards
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="https://luma.com/6bnm90zw"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register (BGIN)
            </Link>
            <Link 
              href="https://www.edcon.io/en/ticket"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register (EDCON)
            </Link>
          </div>
        </div>

        {/* Event Logos */}
        <div className="flex items-center justify-center gap-12 mb-16 p-8 bg-gray-50 rounded-lg">
          <Image
            src="/images/Logo/BGIN_horizontal_01_black.png"
            alt="BGIN Logo"
            width={180}
            height={70}
            className="object-contain"
          />
          <Image
            src="/images/Events/Layer2Japan2025/edcon.png"
            alt="EDCON Logo"
            width={180}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Event Details Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">📅 Date & Time</h3>
                <p className="text-gray-600">September 17, 2025</p>
                <p className="text-gray-600">12:00 PM - 4:00 PM JST</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">💰 Price</h3>
                <p className="text-gray-600">Free for EDCON registered attendees</p>
                <p className="text-gray-500 text-sm mt-1">EDCON registration required</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">🌐 Format</h3>
                <p className="text-gray-600">In-person Event</p>
                <p className="text-gray-500 text-sm mt-2">
                  Part of EDCON 2025 Community Partner Program
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">🎯 Discussion Topics</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-1">
                  <li>Privacy Pool & Accountable Wallet Documentation</li>
                  <li>Cybersecurity Information Sharing Framework Standards</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">🎫 Registration</h3>
                <p className="text-gray-600 mb-3">Two registration options available:</p>
                <div className="space-y-2">
                  <Link 
                    href="https://luma.com/6bnm90zw"
                    className="inline-flex items-center text-blue-600 hover:text-purple-800 font-medium text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register for Layer2 Meetup (Luma) →
                  </Link>
                  <br />
                  <Link 
                    href="https://www.edcon.io/en/ticket"
                    className="inline-flex items-center text-blue-600 hover:text-purple-800 font-medium text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register at EDCON 2025 →
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">📍 Venue Location</h3>
                <p className="text-gray-600 font-medium">Congres Square Grand Green Osaka</p>
                <p className="text-gray-600">5-54 Ofukacho, Kita Ward</p>
                <p className="text-gray-600">Osaka 530-0011, Japan</p>
                
                <div className="mt-3">
                  <p className="text-sm text-gray-500 mb-1">• Near Osaka Station</p>
                  <p className="text-sm text-gray-500 mb-1">• Accessible via JR, Osaka Metro, and private railways</p>
                  <p className="text-sm text-gray-500">• Multiple transit options available</p>
                </div>
                
                <Link 
                  href="https://maps.google.com/?q=Grand+Green+Osaka,+5-54+Ofukacho,+Kita+Ward,+Osaka+530-0011"
                  className="inline-flex items-center text-blue-600 hover:text-purple-800 font-medium text-sm mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps →
                </Link>
              </div>
              
              <div className="h-[250px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://maps.google.com/maps?q=Grand+Green+Osaka,+5-54+Ofukacho,+Kita+Ward,+Osaka+530-0011&t=&z=17&ie=UTF8&iwloc=&output=embed"
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

        {/* About Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About This Meetup</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              As a community partner of EDCON 2025, BGIN will host an extended Layer 2 Meetup 
              focusing on gathering feedback and comments on standardization documents for 
              privacy protocols and cybersecurity frameworks. This meetup is free for all 
              EDCON registered attendees.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Session Topics</h3>
            
            <div className="bg-white rounded-lg p-6 mb-4 border border-gray-200">
              <h4 className="font-semibold text-lg mb-2">1. Privacy Pool & Accountable Wallet Documentation Discussion</h4>
              <p className="mb-2">
                Discussion and feedback collection on standardization documents for Privacy Pool 
                (proposed by Vitalik Buterin and others) and Accountable Wallet protocols. 
                The goal is to gather comments for improving these critical privacy-preserving standards.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li>Review of Privacy Pool protocol specifications</li>
                <li>Accountable Wallet implementation standards</li>
                <li>Feedback on proposed documentation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 mb-4 border border-gray-200">
              <h4 className="font-semibold text-lg mb-2">2. Cybersecurity Information Sharing Framework Standards</h4>
              <p className="mb-2">
                Discussion on the draft standards for cybersecurity information sharing framework, 
                addressing the urgent need for cross-ecosystem security incident prevention.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li>Review of draft standardization documents</li>
                <li>Cross-chain threat intelligence protocols</li>
                <li>Comment collection for framework improvements</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Standards Timeline</h3>
            <p className="mb-4">
              The cybersecurity framework standard developed through these discussions is scheduled for:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>October 15-17, 2025:</strong> Publication approval at BGIN Block 13 (Washington DC)</li>
              <li><strong>Following Block 13:</strong> ISO TC307 project initiation</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Who Should Attend?</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Blockchain security engineers and researchers</li>
              <li>Protocol designers and developers</li>
              <li>EDCON 2025 attendees</li>
              <li>Cybersecurity professionals in the blockchain space</li>
              <li>Anyone interested in blockchain security standardization</li>
            </ul>
          </div>
        </div>

        {/* Preparation Section */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">📚 Preparation & Resources</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The goal of this meetup is to collect comments on standardization documents. 
              We strongly recommend downloading and reviewing the documents beforehand:
            </p>
            
            <div className="bg-white rounded-lg p-6 border border-purple-100">
              <h3 className="font-semibold mb-3">Pre-Meetup Preparation</h3>
              <ul className="space-y-2">
                <li>Download and review target standardization documents</li>
                <li>No account needed for document downloads</li>
                <li>Create an account to submit questions in advance</li>
                <li>Join the working group discussions on Discourse</li>
                <li>Review materials from the ETHTokyo Layer 2 Meetup</li>
              </ul>
              
              <div className="mt-4 space-y-3">
                <div>
                  <Link 
                    href="https://bgin.discourse.group/t/accountable-wallet-discussion-at-ethtokyo-and-edcon/717" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 Accountable Wallet Paper & Discussion →
                  </Link>
                </div>
                <div>
                  <Link 
                    href="https://bgin.discourse.group/t/information-sharing-framework-standard/700" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔐 Cybersecurity Information Sharing Framework →
                  </Link>
                </div>
                <div>
                  <Link 
                    href="https://bgin.discourse.group/t/onboarding-guide/130/2" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📖 How to Create a Discourse Account →
                  </Link>
                </div>
                <div>
                  <Link 
                    href="https://bgin.discourse.group/" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Visit BGIN Discourse Forum →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-500 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Participate?</h2>
          <p className="text-xl mb-8 opacity-95">
            Help shape global standards for blockchain security and privacy
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="https://luma.com/6bnm90zw"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register on Luma
            </Link>
            <Link 
              href="https://www.edcon.io/en/ticket"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register via EDCON 2025
            </Link>
            <Link 
              href="/activities/layer2-meetup" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg shadow-lg inline-block"
            >
              View All Layer 2 Meetups
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-90">
            Free for all EDCON registered attendees • Registration through EDCON required
          </p>
        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Links</h3>
          <div className="flex gap-6 flex-wrap">
            <Link href="/news/layer2-ethtokyo-edcon-2025" className="text-purple-600 hover:text-purple-800">
              → Read Full Announcement
            </Link>
            <Link href="/events/20250915-layer2-ethtokyo" className="text-purple-600 hover:text-purple-800">
              → ETHTokyo Layer 2 Meetup
            </Link>
            <Link href="/events/20251015-block13" className="text-purple-600 hover:text-purple-800">
              → BGIN Block 13 Conference
            </Link>
            <Link href="https://www.edcon.io/" className="text-purple-600 hover:text-purple-800" target="_blank" rel="noopener noreferrer">
              → EDCON 2025 Official Site
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
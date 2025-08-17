/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Layer2ETHTokyoEvent() {
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
            Layer 2 Meetup @ ETHTokyo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Standardization of Privacy Pool and Accountable Wallet Protocols
          </p>
          <Link 
            href="https://lu.ma/otb2xfno"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now - Free Event
          </Link>
        </div>

        {/* Event Logos */}
        <div className="flex items-center justify-center gap-12 mb-16 p-8 bg-gray-50 rounded-lg">
          <Image
            src="/images/Logo/BGIN_horizontal_01_black.png"
            alt="BGIN Logo"
            width={200}
            height={70}
            className="object-contain"
          />
          <Image
            src="/images/Events/Layer2Japan2025/ethtokyo.png"
            alt="ETHTokyo Logo"
            width={100}
            height={50}
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
                <p className="text-gray-600">September 15, 2025</p>
                <p className="text-gray-600">2:00 PM - 4:00 PM (JST)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">💰 Price</h3>
                <p className="text-gray-600">Free (Registration Required)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">👥 Capacity</h3>
                <p className="text-gray-600">In-person: 60 seats</p>
                <p className="text-gray-600">Remote: 100 seats</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">🌐 Format</h3>
                <p className="text-gray-600">Hybrid Event</p>
                <p className="text-gray-500 text-sm mt-2">
                  Remote participation link will be provided to registered attendees only
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">🏢 Venue Sponsor</h3>
                <p className="text-gray-600">Digital Garage</p>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">📍 Venue Location</h3>
                <p className="text-gray-600 font-medium">Shibuya Parco DG Building 15F</p>
                <p className="text-gray-600">15-1 Udagawa-cho, Shibuya-ku</p>
                <p className="text-gray-600">Tokyo 150-0042, Japan</p>
                
                <div className="mt-3">
                  <p className="text-sm text-gray-500 mb-1">• 5 min walk from Shibuya Station</p>
                  <p className="text-sm text-gray-500 mb-1">• Located in Shibuya Parco complex</p>
                  <p className="text-sm text-gray-500">• Accessible via JR, Tokyo Metro, and other lines</p>
                </div>
                
                <Link 
                  href="https://www.google.com/maps/search/?api=1&query=Shibuya+Parco+DG+Building+15F%2C+15-1+Udagawa-cho%2C+Shibuya-ku%2C+Tokyo+150-0042"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps →
                </Link>
              </div>
              
              <div className="h-[250px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.8735524903893!2d139.69930211157732!3d35.66211449564516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca82a94fa3b%3A0x6b0458b11c0bb3d4!2sDigital%20Garage!5e0!3m2!1sen!2sjp!4v1736426543210!5m2!1sen!2sjp"
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
              Join BGIN's Layer 2 Meetup at ETHTokyo to contribute to the standardization of 
              cutting-edge privacy and accountability protocols for blockchain systems.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Discussion Topics</h3>
            <p className="mb-4">
              The meetup will focus on gathering feedback and comments on standardization documents for:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Privacy Pool Protocol</strong> - Proposed by Vitalik Buterin and others, 
              this protocol promotes privacy protection while ensuring regulatory compliance</li>
              <li><strong>Accountable Wallet Protocol</strong> - A protocol that addresses money 
              laundering concerns by creating distributed Association Sets for legitimate wallets</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Who Should Attend?</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Blockchain engineers and protocol designers</li>
              <li>ETHTokyo hackathon participants</li>
              <li>Privacy and compliance technology researchers</li>
              <li>Anyone interested in blockchain standardization</li>
            </ul>

            <p className="mb-4">
              <strong>Note:</strong> This meetup is open to everyone, not just ETHTokyo hackathon participants. 
              We welcome all interested parties to join the discussion.
            </p>
          </div>
        </div>

        {/* Preparation Section */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">📚 Preparation & Resources</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              To make the most of this meetup, we recommend reviewing the relevant documentation beforehand:
            </p>
            
            <div className="bg-white rounded-lg p-6 border border-purple-100">
              <h3 className="font-semibold mb-3">Review Documents & Discussion Forum</h3>
              <ul className="space-y-2">
                <li>Download and review the target standardization documents</li>
                <li>Submit advance questions via our Discourse forum</li>
                <li>No account needed for downloading documents</li>
                <li>Account required for posting questions</li>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 opacity-95">
            Be part of shaping the future of blockchain privacy and accountability standards
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="https://lu.ma/otb2xfno"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now on Luma
            </Link>
            <Link 
              href="/activities/layer2-meetup" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg shadow-lg inline-block"
            >
              View All Layer 2 Meetups
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-90">
            Free event • Limited seats • Register early to secure your spot
          </p>
        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Links</h3>
          <div className="flex gap-6 flex-wrap">
            <Link href="/news/layer2-ethtokyo-edcon-2025" className="text-purple-600 hover:text-purple-800">
              → Read Full Announcement
            </Link>
            <Link href="/events/20250916-layer2-edcon" className="text-purple-600 hover:text-purple-800">
              → EDCON Layer 2 Meetup
            </Link>
            <Link href="/events/20251015-block13" className="text-purple-600 hover:text-purple-800">
              → BGIN Block 13 Conference
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
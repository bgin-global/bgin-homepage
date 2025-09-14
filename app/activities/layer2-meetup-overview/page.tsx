/* eslint-disable react/no-unescaped-entities */
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Layer2MeetupOverview() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Go Back Button */}
        <div className="mb-6">
          <Link 
            href="/activities/layer2-meetup"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Layer 2 Meetup Activities
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Upcoming Layer 2 Meetups in Japan 2025
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* ETHTokyo Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-purple-50 border-b-4 border-purple-500 p-6">
                <h3 className="text-2xl font-bold text-gray-900">ETHTokyo</h3>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <p className="text-gray-600 mb-2">
                      <strong className="text-gray-900">Date:</strong> September 15, 2025
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong className="text-gray-900">Time:</strong> 2:00 PM - 4:00 PM (JST)
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong className="text-gray-900">Location:</strong> Shibuya Parco DG Building, Tokyo
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong className="text-gray-900">Format:</strong> Hybrid (In-person + Remote)
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Image
                      src="/images/Events/Layer2Japan2025/ethtokyo.png"
                      alt="ETHTokyo Logo"
                      width={100}
                      height={45}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Focus Topics:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Privacy Pool Protocol Standardization</li>
                    <li>Accountable Wallet Protocol Standardization</li>
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <Link 
                    href="/events/20250915-layer2-ethtokyo" 
                    className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-center text-sm"
                  >
                    Event Details
                  </Link>
                  <Link 
                    href="https://lu.ma/otb2xfno"
                    className="flex-1 border-2 border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register (BGIN)
                  </Link>
                  <Link 
                    href="https://app.moongate.id/e/ethtokyo2025"
                    className="flex-1 border-2 border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ETHTokyo Ticket
                  </Link>
                </div>
              </div>
            </div>

            {/* EDCON Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-purple-50 border-b-4 border-purple-500 p-6">
                <h3 className="text-2xl font-bold text-gray-900">EDCON 2025</h3>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <p className="text-gray-600 mb-2">
                      <strong className="text-gray-900">Date:</strong> September 17, 2025
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong className="text-gray-900">Time:</strong> 12:00 PM - 4:00 PM (JST)
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong className="text-gray-900">Location:</strong> Grand Green Osaka
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong className="text-gray-900">Format:</strong> In-person
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Image
                      src="/images/Events/Layer2Japan2025/bgin luma x EDCON.png"
                      alt="BGIN Luma x EDCON"
                      width={140}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Focus Topics:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Privacy Pool & Accountable Wallet Standards</li>
                    <li>Cybersecurity Information Sharing Framework</li>
                  </ul>
                </div>
                
                <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> EDCON registration is also required to attend this meetup
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <Link 
                    href="/events/20250916-layer2-edcon" 
                    className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-center text-sm"
                  >
                    Event Details
                  </Link>
                  <Link 
                    href="https://luma.com/6bnm90zw"
                    className="flex-1 border-2 border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register (BGIN)
                  </Link>
                  <Link 
                    href="https://www.edcon.io/en/ticket"
                    className="flex-1 border-2 border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register (EDCON)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Why Attend Layer 2 Meetups?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Direct Impact on Standards
              </h3>
              <p className="text-gray-600">
                Your feedback directly influences blockchain standards that will be 
                submitted to ISO TC307 and other international bodies
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Bridge Communities
              </h3>
              <p className="text-gray-600">
                Connect grassroots blockchain engineers with formal standardization 
                processes typically inaccessible to individuals
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Shape the Future
              </h3>
              <p className="text-gray-600">
                Contribute to critical protocols for privacy, accountability, and 
                security in the blockchain ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            How Layer 2 Meetups Work
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Pre-Meetup Preparation</h3>
                  <p className="text-gray-600">
                    Draft documents are published on BGIN's Discourse forum. Participants can 
                    download materials and submit advance questions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Interactive Sessions</h3>
                  <p className="text-gray-600">
                    During the meetup, we present draft standards and facilitate discussions 
                    with engineers, researchers, and other stakeholders.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Feedback Integration</h3>
                  <p className="text-gray-600">
                    Comments and modifications from the meetup are incorporated into the 
                    standardization documents through our working groups.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Standards Publication</h3>
                  <p className="text-gray-600">
                    Final standards are approved at BGIN Block meetings and submitted to 
                    international standardization bodies like ISO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-500 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Standardization Process</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join us at our Layer 2 Meetups to contribute your expertise and help shape 
            the future of blockchain governance
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="https://bgin.discourse.group" 
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Discussion Forum
            </Link>
            <Link 
              href="/news/layer2-ethtokyo-edcon-2025" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold shadow-lg"
            >
              Read Full Announcement
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Links</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/activities" className="text-blue-600 hover:text-blue-800">
              → All BGIN Activities
            </Link>
            <Link href="/events/20251015-block13" className="text-blue-600 hover:text-blue-800">
              → BGIN Block 13 Conference
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">
              → About BGIN
            </Link>
            <Link href="/join" className="text-blue-600 hover:text-blue-800">
              → Become a Member
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
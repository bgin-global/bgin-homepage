'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/block13.css";

export default function Block14AccessPage() {
  return (
    <>
      <Header />
      <main className="block13-page min-h-screen bg-white w-screen">
        {/* Simple Header Section */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <Link href="/events/20260301-block14#access-venue" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Block 14
              </Link>
              <Link
                href="/events/20260301-block14/jp/access"
                className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors border border-blue-600"
              >
                日本語
              </Link>
            </div>
            <h1 className="text-4xl font-bold font-FamiljenGrotesk text-gray-900">Access & Venue Information</h1>
            <p className="mt-2 text-xl text-gray-600">BGIN Block 14 | Shibuya Parco DG Bldg.</p>
          </div>
        </div>

        <div className="block13-section-container">
          {/* Venue Overview */}
          <section className="block13-section">
            <h2 className="block13-section-title">Venue Overview</h2>
            <div className="block13-card">
              <div className="mb-6">
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/Shibuya_DG_Building.jpeg"
                    alt="Shibuya Parco DG Bldg."
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Shibuya Parco DG Bldg.
              </h3>
              <p className="text-gray-700 mb-4">
                Shibuya Parco DG Bldg.<br />
                18th Floor<br />
                15-1 Udagawa-cho, Shibuya-ku<br />
                Tokyo 150-0042, Japan
              </p>

              <div className="mt-4 mb-4">
                <a
                  href="https://maps.app.goo.gl/iZc37UYCEVfbgGCt6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  View on Google Maps
                </a>
              </div>

              <p className="text-sm text-gray-600 italic mb-4">
                Same venue as Block 12
              </p>

              <h4 className="font-semibold mb-2 mt-6">Event Venues</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Room A</strong> - Main Sessions</li>
                <li><strong>Room B</strong> - Main Sessions</li>
                <li><strong>Open Space</strong> - BGIN Agent Hack</li>
              </ul>
            </div>
          </section>

          {/* Location Map */}
          <section className="block13-section">
            <h2 className="block13-section-title">Location Map</h2>
            <div className="block13-card">
              <div className="mb-4">
                <p className="text-gray-700">
                  Shibuya Parco DG Bldg. is located in the heart of Shibuya, Tokyo, easily accessible from Shibuya Station.
                </p>
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.6993!3d35.6621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca82a94fa3b%3A0x6b0458b11c0bb3d4!2sDigital%20Garage!5e0!3m2!1sen!2sjp!4v1736426543210!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Transportation */}
          <section className="block13-section">
            <h2 className="block13-section-title">Transportation</h2>
            <div className="block13-card">
              <h3 className="text-xl font-semibold mb-4">From Shibuya Station</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Walking</h4>
                  <p className="text-gray-600">
                    Approximately 5 minutes walk from Shibuya Station (JR, Tokyo Metro, Tokyu, Keio lines)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Accessible Lines</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• JR Yamanote Line, Saikyo Line, Shonan-Shinjuku Line</li>
                    <li>• Tokyo Metro Ginza Line, Hanzomon Line, Fukutoshin Line</li>
                    <li>• Tokyu Toyoko Line, Den-en-toshi Line</li>
                    <li>• Keio Inokashira Line</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Building Location</h4>
                  <p className="text-gray-600">
                    The building is located in the Shibuya Parco complex, adjacent to the main Shibuya shopping area.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Room Photos */}
          <section className="block13-section">
            <h2 className="block13-section-title">Venue Rooms</h2>

            {/* Main Rooms Grid */}
            <div className="block13-grid block13-grid-2 mb-8">
              {/* Room A */}
              <div className="block13-card overflow-hidden">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/DragonGate_RoomA.jpg"
                    alt="Room A"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Room A</h3>
                <p className="text-gray-600">Main Sessions</p>
              </div>

              {/* Room B */}
              <div className="block13-card overflow-hidden">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/DragonGate_RoomB.jpeg"
                    alt="Room B"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Room B</h3>
                <p className="text-gray-600">Main Sessions</p>
              </div>

              {/* Open Space */}
              <div className="block13-card overflow-hidden">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/DragonGate_RoomA.jpg"
                    alt="Open Space"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Open Space</h3>
                <p className="text-gray-600">BGIN Agent Hack</p>
              </div>
            </div>
          </section>

          {/* Nearby Information */}
          <section className="block13-section">
            <h2 className="block13-section-title">Nearby Information</h2>
            <div className="block13-card">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Restaurants & Cafes</h4>
                  <p className="text-gray-600 text-sm">
                    Shibuya offers a wide variety of dining options within walking distance. The Shibuya Parco complex itself contains multiple restaurants and cafes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shopping</h4>
                  <p className="text-gray-600 text-sm">
                    Shibuya is one of the major shopping districts in Tokyo, with numerous department stores, boutiques, and entertainment facilities nearby.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Hotels</h4>
                  <p className="text-gray-600 text-sm">
                    Multiple hotels are located within walking distance of Shibuya Station, making it convenient for international attendees.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Registration & Payment */}
          <section className="block13-section">
            <h2 className="block13-section-title">Registration & Payment</h2>
            <div className="block13-card">
              <p className="text-gray-700 mb-4">
                Pay by card (Eventbrite) or in <strong>USDC on Ethereum</strong> (stablecoin) via Coinbase Commerce. Choose your option below. <strong>We accept USDC on the Ethereum network only.</strong>
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="https://www.eventbrite.com/e/bgin-block-14-tickets-1980456894885?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block13-btn-primary inline-flex items-center gap-2"
                >
                  Register (Eventbrite)
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Image src="/images/Events/usdc-logo.svg" alt="USDC" width={24} height={24} className="flex-shrink-0" />
                <span style={{ color: '#1e5fa8' }}>Pay with USDC</span>
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                <a href="https://commerce.coinbase.com/checkout/6a876dc0-7ee9-4d1d-a84f-82b3d7e7accb" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-lg bg-white border border-[#2775CA]/40 px-4 py-3 font-medium hover:bg-[#2775CA]/10 transition-colors" style={{ color: '#1e5fa8' }}>
                  <span>General (2 days)</span>
                  <span className="font-semibold">$100</span>
                </a>
                <a href="https://commerce.coinbase.com/checkout/a0d9f683-5f9a-4f04-9356-7874cf263775" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-lg bg-white border border-[#2775CA]/40 px-4 py-3 font-medium hover:bg-[#2775CA]/10 transition-colors" style={{ color: '#1e5fa8' }}>
                  <span>General (Day 1)</span>
                  <span className="font-semibold">$60</span>
                </a>
                <a href="https://commerce.coinbase.com/checkout/4b106a82-a7d2-46ee-b1b2-3e8f09ed8dc3" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-lg bg-white border border-[#2775CA]/40 px-4 py-3 font-medium hover:bg-[#2775CA]/10 transition-colors" style={{ color: '#1e5fa8' }}>
                  <span>General (Day 2)</span>
                  <span className="font-semibold">$60</span>
                </a>
                <a href="https://commerce.coinbase.com/checkout/dda4d579-5f7c-4cbd-a031-1e1db88bbf01" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-lg bg-white border border-[#2775CA]/40 px-4 py-3 font-medium hover:bg-[#2775CA]/10 transition-colors" style={{ color: '#1e5fa8' }}>
                  <span>Remote</span>
                  <span className="font-semibold">$30</span>
                </a>
              </div>
            </div>
          </section>

          {/* Back to main page CTA */}
          <section className="block13-section">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Block 14?</h2>
              <p className="text-gray-700 mb-6">
                Register now to secure your spot at BGIN Block 14 during Japan Fintech Week
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <Link
                  href="/events/20260301-block14#access-venue"
                  className="block13-btn-secondary"
                >
                  <svg className="mr-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Event Page
                </Link>
                <a
                  href="https://www.eventbrite.com/e/bgin-block-14-tickets-1980456894885?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block13-btn-primary"
                >
                  Register (Eventbrite)
                  <svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <Link
                  href="/events/20260301-block14#stablecoin-payment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white shadow hover:shadow-md transition-all hover:bg-[#1e5fa8]"
                  style={{ backgroundColor: '#2775CA' }}
                >
                  <Image src="/images/Events/usdc-logo.svg" alt="USDC" width={24} height={24} className="flex-shrink-0" />
                  Pay with USDC
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

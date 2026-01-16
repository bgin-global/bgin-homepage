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
            <Link href="/events/20260301-block14#access-venue" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Block 14
            </Link>
            <h1 className="text-4xl font-bold font-FamiljenGrotesk text-gray-900">Access & Venue Information</h1>
            <p className="mt-2 text-xl text-gray-600">BGIN Block 14 | Shibuya Parco DG Bldg.</p>
          </div>
        </div>

        <div className="block13-section-container">
          {/* Venue Overview */}
          <section className="block13-section">
            <h2 className="block13-section-title">Venue Overview</h2>
            <div className="block13-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Shibuya Parco DG Bldg.
              </h3>
              <p className="text-gray-700 mb-4">
                Shibuya Parco Dragon Gate Building<br />
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
                <div className="w-full h-64 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Room A Image</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Room A</h3>
                <p className="text-gray-600">Main Sessions</p>
              </div>

              {/* Room B */}
              <div className="block13-card overflow-hidden">
                <div className="w-full h-64 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Room B Image</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Room B</h3>
                <p className="text-gray-600">Main Sessions</p>
              </div>

              {/* Open Space */}
              <div className="block13-card overflow-hidden">
                <div className="w-full h-64 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Open Space Image</p>
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

          {/* Back to main page CTA */}
          <section className="block13-section">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Block 14?</h2>
              <p className="text-gray-700 mb-6">
                Register now to secure your spot at BGIN Block 14 during Japan Fintech Week
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  href="TBD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block13-btn-primary"
                >
                  Register Now
                  <svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

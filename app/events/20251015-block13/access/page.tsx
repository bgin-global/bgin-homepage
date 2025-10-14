'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/block13.css";

export default function Block13AccessPage() {
  return (
    <>
      <Header />
      <main className="block13-page min-h-screen bg-white w-screen">
        {/* Simple Header Section */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/events/20251015-block13" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Block 13
            </Link>
            <h1 className="text-4xl font-bold font-FamiljenGrotesk text-gray-900">Access & Venue Information</h1>
            <p className="mt-2 text-xl text-gray-600">BGIN Block 13 | Georgetown University</p>
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
                Georgetown University
              </h3>
              <p className="text-gray-700 mb-4">
                3700 O St NW<br />
                Washington, DC 20057<br />
                United States
              </p>

              <h4 className="font-semibold mb-2 mt-6">Event Venues</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Leavey Center - Program Room</strong> (Capacity: 72) - BGIN Agent Hack (Day 1, 2)</li>
                <li><strong>Pedro Arrupe, S.J. Hall</strong> (Capacity: 50) - Main Sessions (Day 1, 2)</li>
                <li><strong>Rafik B. Hariri Building</strong> - Rooms 140 & 240 - Main Sessions (Day 3)</li>
                <li><strong>Leavey Center - Faculty Club Restaurant</strong> - Networking and reception (Day 1)</li>
              </ul>
            </div>
          </section>

          {/* Campus Map */}
          <section className="block13-section">
            <h2 className="block13-section-title">Campus Map</h2>
            <div className="block13-card">
              <div className="mb-4">
                <p className="text-gray-700">
                  Overview of Georgetown University campus showing the location of all Block 13 event venues
                </p>
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Events/block13/map1.png"
                  alt="Georgetown University Campus Map"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Leavey Center Floor Plan */}
          <section className="block13-section">
            <h2 className="block13-section-title">Leavey Center Floor Plan</h2>
            <div className="block13-card">
              <div className="mb-4">
                <p className="text-gray-700">
                  Detailed floor plan of Leavey Center showing the Program Room location and other facilities
                </p>
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Events/block13/map2.png"
                  alt="Leavey Center Floor Plan"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Room Photos */}
          <section className="block13-section">
            <h2 className="block13-section-title">Venue Rooms</h2>

            {/* Main Rooms Grid */}
            <div className="block13-grid block13-grid-2 mb-8">
              {/* Leavey Program Room */}
              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block13/Program_Room.jpeg"
                  alt="Leavey Program Room"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Leavey Program Room</h3>
                <p className="text-gray-600">Capacity: 72 | Main session venue</p>
              </div>

              {/* Arrupe Hall */}
              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block13/Aurppe_1.jpeg"
                  alt="Arrupe Hall"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Pedro Arrupe Hall</h3>
                <p className="text-gray-600">Capacity: 50 | Working group sessions</p>
              </div>

              {/* Hariri Building */}
              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block13/Hariri_1.jpeg"
                  alt="Hariri Building"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Rafik B. Hariri Building</h3>
                <p className="text-gray-600">Rooms 140 & 240 | Breakout sessions</p>
              </div>

              {/* Faculty Club */}
              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block13/Faculty_Club_Restaurant.jpeg"
                  alt="Faculty Club Restaurant"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Faculty Club Restaurant</h3>
                <p className="text-gray-600">Networking lunches and receptions</p>
              </div>
            </div>

            {/* Additional Room Photos */}
            <h3 className="text-2xl font-semibold mb-6">Additional Venue Views</h3>
            <div className="block13-grid block13-grid-3">
              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block13/Aruppe_2.jpeg"
                  alt="Arrupe Hall Interior"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-3 rounded-lg"
                />
                <p className="text-sm text-gray-600">Arrupe Hall - Interior View</p>
              </div>

              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block13/Arrupe Hall (Cap 50).jpeg"
                  alt="Arrupe Hall Exterior"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-3 rounded-lg"
                />
                <p className="text-sm text-gray-600">Arrupe Hall - Room View</p>
              </div>

              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block13/Hariri_2.jpeg"
                  alt="Hariri Building Interior"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-3 rounded-lg"
                />
                <p className="text-sm text-gray-600">Hariri Building - Meeting Room</p>
              </div>

            </div>
          </section>

          {/* Back to main page CTA */}
          <section className="block13-section">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Block 13?</h2>
              <p className="text-gray-700 mb-6">
                Register now to secure your spot at BGIN Block 13
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events/20251015-block13"
                  className="block13-btn-secondary"
                >
                  <svg className="mr-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Event Page
                </Link>
                <a
                  href="https://www.eventbrite.com/e/bgin-block-13-tickets-1584466825929?aff=oddtdtcreator"
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
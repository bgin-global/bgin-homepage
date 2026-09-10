'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOCK15_REGISTER } from "@/contents/block15Promo";
import "@/styles/block13.css";

export default function Block15AccessPage() {
  return (
    <>
      <Header />
      <main className="block13-page min-h-screen bg-white w-screen">
        {/* Simple Header Section */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/events/20261015-block15#access-venue" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Block 15
            </Link>
            <h1 className="text-4xl font-bold font-FamiljenGrotesk text-gray-900">Access & Venue Information</h1>
            <p className="mt-2 text-xl text-gray-600">BGIN Block 15 | Georgetown University Capitol Campus</p>
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
                Georgetown University Capitol Campus
              </h3>
              <p className="text-gray-700 mb-4">
                111 Massachusetts Avenue NW<br />
                Washington, DC 20001<br />
                United States
              </p>

              <h4 className="font-semibold mb-2 mt-6">Event Rooms</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Room A — 2416</strong> — Main Sessions (Day 1 &amp; 2)</li>
                <li><strong>Room B — 2424</strong> — Main Sessions (Day 1 &amp; 2)</li>
                <li><strong>Open Space</strong> — Agent Hack / informal collaboration (location within the building to be confirmed on site)</li>
              </ul>

              <p className="text-sm text-gray-600 mt-4">
                Downtown location near the U.S. Capitol — easier Metro and rideshare access than the Hilltop main campus.
              </p>
            </div>
          </section>

          {/* Map */}
          <section className="block13-section">
            <h2 className="block13-section-title">Map</h2>
            <div className="block13-card">
              <div className="mb-4">
                <p className="text-gray-700">
                  111 Massachusetts Avenue NW is on Georgetown&apos;s Capitol Campus in downtown Washington, D.C.
                </p>
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ minHeight: 360 }}>
                <iframe
                  src="https://maps.google.com/maps?q=111+Massachusetts+Avenue+NW,+Washington,+DC+20001&hl=en&z=16&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Georgetown University Capitol Campus, 111 Massachusetts Avenue NW"
                ></iframe>
              </div>
              <p className="mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=111+Massachusetts+Avenue+NW,+Washington,+DC+20001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Open in Google Maps →
                </a>
              </p>
            </div>
          </section>

          {/* Getting there */}
          <section className="block13-section">
            <h2 className="block13-section-title">Getting There</h2>
            <div className="block13-grid block13-grid-2">
              <div className="block13-card">
                <h3 className="text-lg font-semibold mb-2">Metrorail</h3>
                <p className="text-sm text-gray-600">
                  Closest stations include <strong>Judiciary Square</strong> (Red), <strong>Gallery Place–Chinatown</strong> (Red/Yellow/Green),
                  and <strong>Union Station</strong> (Red). From each, the building is a short walk or brief rideshare.
                </p>
              </div>
              <div className="block13-card">
                <h3 className="text-lg font-semibold mb-2">Rideshare / taxi / bike</h3>
                <p className="text-sm text-gray-600">
                  Set destination to <strong>111 Massachusetts Avenue NW</strong>. Capital Bikeshare docks are available in the downtown corridor.
                </p>
              </div>
            </div>
          </section>

          {/* Room Photos */}
          <section className="block13-section">
            <h2 className="block13-section-title">Venue Rooms</h2>

            <div className="block13-grid block13-grid-2 mb-8">
              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block15/room-2416.jpg"
                  alt="Capitol Campus Room 2416 — classroom used as Room A"
                  width={600}
                  height={800}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Room A — 2416</h3>
                <p className="text-gray-600">Main Sessions (Day 1 &amp; 2)</p>
              </div>

              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block15/room-2424.jpg"
                  alt="Capitol Campus Room 2424 — classroom used as Room B"
                  width={600}
                  height={450}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Room B — 2424</h3>
                <p className="text-gray-600">Main Sessions (Day 1 &amp; 2)</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Campus Views</h3>
            <div className="block13-grid block13-grid-3">
              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block15/capitol-campus-exterior.jpg"
                  alt="Capitol Campus building exterior with U.S. Capitol in the distance"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-3 rounded-lg"
                />
                <p className="text-sm text-gray-600">Building exterior — Massachusetts Avenue NW</p>
              </div>

              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block15/capitol-campus-sign.jpg"
                  alt="Georgetown University Capitol Campus wayfinding sign"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-3 rounded-lg"
                />
                <p className="text-sm text-gray-600">Campus wayfinding sign</p>
              </div>

              <div className="block13-card overflow-hidden">
                <Image
                  src="/images/Events/block15/capitol-campus-lounge.jpg"
                  alt="Capitol Campus interior lounge and collaboration area"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-3 rounded-lg"
                />
                <p className="text-sm text-gray-600">Interior lounge / collaboration space</p>
              </div>
            </div>
          </section>

          {/* Back to main page CTA */}
          <section className="block13-section">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Block 15?</h2>
              <p className="text-gray-700 mb-6">
                Register now to secure your spot at BGIN Block 15
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events/20261015-block15#access-venue"
                  className="block13-btn-secondary"
                >
                  <svg className="mr-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Event Page
                </Link>
                <a
                  href={BLOCK15_REGISTER}
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

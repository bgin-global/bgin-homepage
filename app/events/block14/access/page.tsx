"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/block14.css";

// EventBrite registration link
const EVENTBRITE_LINK = "https://www.eventbrite.com/e/bgin-block-14-tickets-1980456894885?aff=oddtdtcreator";

export default function Block14AccessPage() {
  return (
    <>
      <Header />
      <main className="block13-page min-h-screen bg-white w-screen">
        {/* Simple Header Section */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/events/block14#access-venue" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Block 14
            </Link>
            <h1 className="text-4xl font-bold font-FamiljenGrotesk text-gray-900">Access & Venue Information</h1>
            <p className="mt-2 text-xl text-gray-600">BGIN Block 14 | Shibuya Parco DG Bldg., Tokyo</p>
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
                Shibuya Parco Dragon Gate Building
              </h3>
              <p className="text-gray-700 mb-4">
                15-1 Udagawa-cho, Shibuya-ku<br />
                Tokyo 150-0042<br />
                Japan
              </p>
              <p className="text-sm text-gray-600 mb-4 italic">
                Same venue as Block 12
              </p>

              <h4 className="font-semibold mb-2 mt-6">Event Venues</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>18th Floor - Room A</strong> - Parallel Session Room 1</li>
                <li><strong>18th Floor - Room B</strong> - Parallel Session Room 2</li>
              </ul>

              <div className="mt-6">
                <a
                  href="https://maps.app.goo.gl/iZc37UYCEVfbgGCt6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View on Google Maps
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Access Information */}
          <section className="block13-section">
            <h2 className="block13-section-title">How to Get There</h2>
            <div className="block13-grid block13-grid-2">
              {/* By Train */}
              <div className="block13-card">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  By Train
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-1">From Shibuya Station</h4>
                    <p className="text-sm">Shibuya Parco is located within walking distance from Shibuya Station (JR, Tokyo Metro, Tokyu, Keio lines).</p>
                    <p className="text-sm mt-2"><strong>Walking time:</strong> Approximately 3-5 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">From Narita Airport</h4>
                    <p className="text-sm">Take the Narita Express (N'EX) or Keisei Skyliner to Tokyo Station, then transfer to JR Yamanote Line to Shibuya Station.</p>
                    <p className="text-sm mt-2"><strong>Travel time:</strong> Approximately 1.5-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">From Haneda Airport</h4>
                    <p className="text-sm">Take the Keikyu Line to Shinagawa Station, then transfer to JR Yamanote Line to Shibuya Station.</p>
                    <p className="text-sm mt-2"><strong>Travel time:</strong> Approximately 45-60 minutes</p>
                  </div>
                </div>
              </div>

              {/* By Taxi */}
              <div className="block13-card">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  By Taxi
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">
                    Taxis are readily available throughout Tokyo. You can take a taxi directly to Shibuya Parco from any location in the city.
                  </p>
                  <p className="text-sm">
                    <strong>Note:</strong> Traffic can be heavy during peak hours. Allow extra time if traveling during rush hour.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="block13-section">
            <h2 className="block13-section-title">Location Map</h2>
            <div className="block13-card">
              <div className="mb-4">
                <p className="text-gray-700">
                  Shibuya Parco DG Bldg. is located in the heart of Shibuya, one of Tokyo's most vibrant districts.
                </p>
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.603372710632!2d139.69592147495445!3d35.66214247259336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dc91fcc6d03%3A0x1813b205013e77b6!2sShibuya%20PARCO%20DG%20Bldg.!5e0!3m2!1sen!2sus!4v1768506494986!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/iZc37UYCEVfbgGCt6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Open in Google Maps
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Nearby Information */}
          <section className="block13-section">
            <h2 className="block13-section-title">Nearby Information</h2>
            <div className="block13-grid block13-grid-2">
              <div className="block13-card">
                <h3 className="text-xl font-semibold mb-3">Restaurants & Cafes</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Shibuya offers a wide variety of dining options, from casual cafes to fine dining restaurants. Many options are available within walking distance of the venue.
                </p>
              </div>
              <div className="block13-card">
                <h3 className="text-xl font-semibold mb-3">Accommodation</h3>
                <p className="text-gray-700 text-sm mb-3">
                  There are numerous hotels in the Shibuya area, ranging from budget-friendly to luxury options. We recommend booking early, especially during Japan Fintech Week.
                </p>
              </div>
            </div>
          </section>

          {/* Back to main page CTA */}
          <section className="block13-section">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Block 14?</h2>
              <p className="text-gray-700 mb-6">
                Register now to secure your spot at BGIN Block 14
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events/block14#access-venue"
                  className="block13-btn-secondary"
                >
                  <svg className="mr-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Event Page
                </Link>
                <a
                  href={EVENTBRITE_LINK}
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

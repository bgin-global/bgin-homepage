"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import "@/styles/block13.css";


export default function Block15Page() {
  const getDefaultDay = (): 'day1' | 'day2' => {
    const today = new Date();
    const todayET = new Date(today.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const year = todayET.getFullYear();
    const month = todayET.getMonth(); // 0-indexed (October = 9)
    const day = todayET.getDate();

    if (year === 2026 && month === 9) {
      if (day === 15) return 'day1';
      if (day === 16) return 'day2';
    }
    return 'day1';
  };

  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>(getDefaultDay());

  const heroImages = [
    "/images/Events/Block3.jpeg",
    "/images/Events/Block5.jpeg",
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev: number) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Program timetable data (TBD)
  const day1Sessions = [
    { time: "09:00 - 09:20", title: "Opening Plenary", room: "TBD", summary: "TBD" },
    { time: "09:20 - 10:50", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "09:20 - 10:50", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "11:00 - 12:30", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "11:00 - 12:30", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "12:30 - 13:30", title: "Lunch Break", room: "", summary: "" },
    { time: "13:30 - 15:00", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "13:30 - 15:00", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "15:00 - 15:30", title: "Coffee Break", room: "", summary: "" },
    { time: "15:30 - 17:00", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "15:30 - 17:00", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "17:00 -", title: "Networking Reception", room: "TBD", summary: "TBD" },
  ];

  const day2Sessions = [
    { time: "09:00 - 09:20", title: "Opening", room: "TBD", summary: "TBD" },
    { time: "09:20 - 10:50", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "09:20 - 10:50", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "11:00 - 12:30", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "11:00 - 12:30", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "12:30 - 13:30", title: "Lunch Break", room: "", summary: "" },
    { time: "13:30 - 15:00", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "13:30 - 15:00", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "15:00 - 15:30", title: "Coffee Break", room: "", summary: "" },
    { time: "15:30 - 17:00", title: "TBD", room: "Room A", summary: "TBD" },
    { time: "15:30 - 17:00", title: "TBD", room: "Room B", summary: "TBD" },
    { time: "17:00 -", title: "Closing", room: "TBD", summary: "TBD" },
  ];

  const currentSessions = activeDay === 'day1' ? day1Sessions : day2Sessions;

  // Group sessions by time
  const sessionsByTime: Record<string, typeof day1Sessions> = {};
  currentSessions.forEach(session => {
    if (!sessionsByTime[session.time]) {
      sessionsByTime[session.time] = [];
    }
    sessionsByTime[session.time].push(session);
  });

  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      {/* Hero Section */}
      <section id="registration" className="block13-hero" style={{ position: 'relative' }}>
        <div className="absolute inset-0" style={{ zIndex: 1, pointerEvents: 'none' }}>
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={index === 0 ? "Washington, D.C." : `BGIN Block 15 - Image ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40" style={{ zIndex: 2, pointerEvents: 'none' }}></div>
        <div className="block13-hero-content" style={{ position: 'relative', zIndex: 50 }}>
          <h1>BGIN Block 15</h1>
          <p>October 15–16, 2026 | Washington, D.C.</p>
          <p className="text-lg md:text-xl font-semibold text-white drop-shadow-md mt-2 flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white border-2 border-white/80" style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              Hybrid event – Remote participation available
            </span>
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3" style={{ position: 'relative', zIndex: 51, pointerEvents: 'auto' }}>
              <a href="" className="block13-btn-primary inline-flex items-center gap-2">
                Register Now (Eventbrite)
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#stablecoin-payment" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all border-2 border-[#1e5fa8] hover:bg-[#1e5fa8]" style={{ backgroundColor: '#2775CA' }}>
                <Image src="/images/Events/usdc-logo.svg" alt="USDC" width={28} height={28} className="flex-shrink-0" />
                Register with USDC
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid / Remote participation banner */}
      <section className="py-4 px-4 border-b-2 shadow-md" style={{ backgroundColor: '#0f766e', borderColor: '#0d9488' }} aria-label="Participation format">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 text-center text-white">
          <span className="font-bold text-lg md:text-xl uppercase tracking-wide flex items-center gap-2">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Hybrid event
          </span>
          <span className="text-teal-200" style={{ color: '#99f6e4' }}>|</span>
          <span className="text-base md:text-lg">
            <strong>Remote participation is available.</strong> Join online from anywhere. Connection details (Zoom/streaming) will be sent to registered participants before the event.
          </span>
        </div>
      </section>

      {/* What's New */}
      <section className="text-white py-4 px-4 border-b-2 border-[#1e5fa8]" style={{ backgroundColor: '#2775CA' }}>
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="font-bold text-lg md:text-xl uppercase tracking-wide">What&apos;s New</span>
          <span className="text-white/90">|</span>
          <span className="text-base md:text-lg">
            <strong>Register with USDC – coming soon.</strong> Block 15 registration in <strong>USDC on Ethereum</strong> (stablecoin) via Coinbase Commerce will be available closer to the event.
          </span>
          <a href="#stablecoin-payment" className="inline-flex items-center gap-2 font-semibold underline hover:no-underline ml-1 px-3 py-1.5 rounded-lg border border-white/50 bg-white/30 hover:bg-white/40 transition-colors text-white">
            <Image src="/images/Events/usdc-logo.svg" alt="USDC" width={22} height={22} className="flex-shrink-0" />
            Pay with USDC
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      {/* Jump to section links */}
      <nav className="sticky top-0 z-30 bg-gray-100 border-b border-gray-200 py-3 px-4 shadow-sm" aria-label="Jump to section">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a href="#what-is-block-meeting" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">What is Block Meeting?</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#program" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Program</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#critical-projects" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Key Research Projects</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#stablecoin-payment" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Stablecoin</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#related-events" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Related Events</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#access-venue" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Access &amp; Venue</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#sponsors" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Sponsors &amp; Partners</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#contributions" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Fee Waiver</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#participation" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Target Participants</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#past-events" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Past BGIN Block Meetings</a>
          <span className="text-gray-500" aria-hidden="true">|</span>
          <a href="#registration" className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-white transition-colors">Register</a>
        </div>
      </nav>

      {/* What is Block Meeting Section */}
      <section id="what-is-block-meeting" className="block13-section bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What is Block Meeting?</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong className="text-blue-700">BGIN Block Meetings</strong> are premier multi-stakeholder gatherings that bring together developers, regulators, businesses, academics, and civil society to advance blockchain governance frameworks.
                </p>
                <p className="text-lg leading-relaxed">
                  These meetings establish a <strong className="text-indigo-700">common platform for dialogue</strong> where diverse stakeholders who rarely collaborate can engage in meaningful discussions about identity, privacy, key management, and governance challenges in permissionless blockchain ecosystems.
                </p>
                <p className="text-lg leading-relaxed">
                  Block Meetings drive <strong className="text-purple-700">concrete outcomes</strong> through working group sessions, critical project discussions, and collaborative problem-solving that shapes the future of blockchain technology.
                </p>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-5 text-white shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-yellow-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Standards Development Practitioner Conference</h3>
                      <p className="text-white leading-relaxed">
                        Block Meetings are <strong>practitioner conferences that produce standards as deliverables</strong>. Through BGIN, we develop standards that serve as a critical stepping stone toward international standards—like ISO TC307—that governments and industry follow worldwide.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600 mt-6">
                  <p className="text-base font-semibold text-gray-800 mb-2">Why You Should Attend:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Shape the future of blockchain governance alongside global leaders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Network with regulators, developers, and industry experts from around the world</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Contribute to critical projects that address real-world blockchain challenges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Multi-Stakeholder</h3>
                <p className="text-sm text-gray-600">Diverse perspectives from all sectors</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Global Network</h3>
                <p className="text-sm text-gray-600">International collaboration</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Action-Oriented</h3>
                <p className="text-sm text-gray-600">Concrete outcomes & solutions</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Inclusive</h3>
                <p className="text-sm text-gray-600">Open to all stakeholders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="block13-section-container">
        {/* Program Section */}
        <section id="program" className="block13-section">
          <h2 className="block13-section-title">Program</h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              <strong>Fee Waiver Available:</strong> Contributors who submit written contributions and present at Block 15 receive complete registration fee waivers.
              {" "}
              <a href="#contributions" className="text-blue-600 hover:text-blue-800 underline font-semibold">Learn more about our contribution process and how to apply →</a>
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Note: Program is Tentative</h3>
              <p className="text-blue-700">
                The program below is tentative and subject to change. Final agenda will be posted closer to the event date. Follow our socials:
                <a href="https://twitter.com/bgin_global" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 ml-1">X (Twitter)</a> |
                <a href="https://www.linkedin.com/company/blockchain-governance-initiative-network/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 ml-1">LinkedIn</a>
              </p>
            </div>
          </div>

          {/* Day Tabs */}
          <div id="detailed-program" className="block13-tabs scroll-mt-20">
            {[
              { key: 'day1' as const, label: 'Oct 15' },
              { key: 'day2' as const, label: 'Oct 16' }
            ].map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key)}
                className={`block13-tab ${activeDay === day.key ? 'active' : ''}`}
              >
                {day.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-6">
            {activeDay === 'day1' ? 'Day 1 – October 15, 2026' : 'Day 2 – October 16, 2026'}
          </p>

          {/* Program Content */}
          <div className="space-y-6">
            {Object.entries(sessionsByTime).map(([time, sessions]) => (
              <div key={time} className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">{time}</h3>
                <div className="space-y-2">
                  {sessions.map((session, idx) => {
                    const isBreak = session.title === 'Lunch Break' || session.title === 'Coffee Break';
                    return (
                      <div key={idx} className={`block13-session-card ${isBreak ? 'bg-gray-50' : ''}`}>
                        <div className="flex flex-row justify-between items-start">
                          <div className="flex items-center gap-2 flex-grow">
                            <h3 className="block13-session-title">{session.title}</h3>
                          </div>
                          {session.room && (
                            <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                              <span className="text-sm text-gray-600 font-medium">{session.room}</span>
                            </div>
                          )}
                        </div>
                        {session.summary && !isBreak && (
                          <p className="text-sm text-gray-500 mt-1">{session.summary}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Research Projects Section */}
        <section id="critical-projects" className="block13-section">
          <h2 className="block13-section-title">Key Research Projects</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Coming Soon</h3>
            <p className="text-blue-700">
              Key research projects for Block 15 are currently being planned. Details will be announced closer to the event date.
            </p>
          </div>
          <div className="text-center mt-8 space-y-4">
            <Link href="/events/20261015-block15/meetingreports" className="block13-btn-primary inline-block">
              View Block 15 Meeting Reports
            </Link>
            <div>
              <Link href="/publications" className="block13-btn-secondary">
                View All Past Publications
              </Link>
            </div>
          </div>
        </section>

        {/* Stablecoin Payment Initiative Section */}
        <section id="stablecoin-payment" className="block13-section scroll-mt-24">
          <h2 className="block13-section-title">Stablecoin Payment Initiative</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-6 mb-6">
            <p className="text-gray-700 max-w-3xl mb-4">
              Following the enactment of stablecoin regulations in Japan, the United States, and other jurisdictions,
              BGIN has decided to accept registration fees and event sponsor fees in stablecoins (<strong>USDC on Ethereum</strong>). This initiative
              represents a practical application of regulatory frameworks in real-world blockchain governance scenarios.
            </p>
            <div className="rounded-lg p-4 mb-4 border-2 border-[#2775CA]/30 bg-[#2775CA]/5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Image src="/images/Events/usdc-logo.svg" alt="USDC" width={24} height={24} className="flex-shrink-0" />
                <span style={{ color: '#1e5fa8' }}>Register with USDC (coming soon)</span>
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Registration in <strong>USDC on Ethereum</strong> via Coinbase Commerce will be available closer to the event date. Ticket options will match those available on Eventbrite.
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#1e5fa8' }}>
                Important: We accept USDC on the Ethereum network only.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                USDC payment links will be posted here once registration opens.
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Trial Implementation at Block 15</h3>
              <p className="text-blue-800 text-sm">
                At Block 15, BGIN will continue accepting stablecoin payments in <strong>USDC on Ethereum</strong> for registration fees and
                sponsor contributions, building on the trial conducted at Block 14. This initiative demonstrates
                the practical implementation of stablecoin-based payment systems in an international governance context.
              </p>
            </div>
          </div>
        </section>

        {/* Related Events Section */}
        <section id="related-events" className="block13-section">
          <h2 className="block13-section-title">Related Events</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Coming Soon</h3>
            <p className="text-blue-700">
              Related events for Block 15 will be announced closer to the event date.
            </p>
          </div>
        </section>

        {/* Access & Venue Information */}
        <section id="access-venue" className="block13-section">
          <h2 className="block13-section-title">Access & Venue</h2>
          <div className="block13-venue-grid">
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-600 mb-4">
                Georgetown University<br/>
                Washington, D.C., United States
              </p>

              <h4 className="font-semibold mb-2 mt-6">Address</h4>
              <p className="text-sm text-gray-600 mb-4">
                3700 O St NW<br/>
                Washington, DC 20057<br/>
                United States
              </p>

              <h4 className="font-semibold mb-2 mt-6">Main Venues</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Room A</strong> - Main Sessions</li>
                <li><strong>Room B</strong> - Main Sessions</li>
              </ul>

              <p className="text-sm text-gray-600 mt-4 italic">
                Same venue as Block 13
              </p>

              <div className="mt-6">
                <Link
                  href="/events/20261015-block15/access"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  View Detailed Access Information
                </Link>
              </div>
            </div>
            <div className="block13-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0!2d-77.0730!3d38.9076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b63732a07e83%3A0x9c3e197fa8f3eb97!2sGeorgetown%20University!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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

        {/* Sponsors & Partners */}
        <section id="sponsors" className="block13-section">
          <h2 className="block13-section-title text-center">Sponsors & Partners</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Coming Soon</h3>
            <p className="text-blue-700 text-center">
              Sponsors and partners for Block 15 are currently being finalized. If you are interested in sponsoring Block 15, please contact us at{" "}
              <a href="mailto:bgin_admin@bg2x.org" className="text-blue-800 font-semibold hover:underline">
                bgin_admin@bg2x.org
              </a>
            </p>
          </div>
        </section>

        {/* Contribution & Fee Waiver Section */}
        <section id="contributions" className="block13-section">
          <h2 className="block13-section-title">Looking to Present Your Work?</h2>
          <div className="bg-[#688ff5] text-white rounded-lg p-6 mb-6">
            <p>
              BGIN follows a collaborative standardization process. <strong>Contributors who submit written contributions and present at Block 15 receive complete registration fee waivers.</strong>
            </p>
          </div>

          <div className="block13-grid block13-grid-2">
            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">How BGIN Sessions Work</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Foundation Documents</h4>
                  <p className="text-gray-600 text-sm">Session Chairs provide draft standards and discussion materials as the foundation for collaborative work.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Written Contributions</h4>
                  <p className="text-gray-600 text-sm">Propose additions, modifications, or alternative approaches in writing prior to the session.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Review & Present</h4>
                  <p className="text-gray-600 text-sm">Session Chairs review submissions and, if substantial, invite on-site presentations to the global BGIN community.</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4 py-2 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Timeline:</strong> Contributions close approximately 1 week before sessions to allow participant review.
                  </p>
                </div>
              </div>
            </div>

            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">Submit Contribution for Fee Waiver</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#688ff5] text-white text-sm font-semibold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact Working Group Chair</h4>
                    <p className="text-gray-600 text-sm">Reach out to the relevant WG Chair to express interest in contributing. Don't know the WG Chairs or have questions? <a href="https://bgin.discourse.group/t/onboarding-guide/130/2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Join our Discourse and make an inquiry (onboarding guide)</a>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#688ff5] text-white text-sm font-semibold flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Submit Written Contribution</h4>
                    <p className="text-gray-600 text-sm">Provide your document via email with <a href="mailto:bgin_admin@bg2x.org" className="text-blue-600 hover:underline">bgin_admin@bg2x.org</a> in CC.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#688ff5] text-white text-sm font-semibold flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Receive 100% Discount Code</h4>
                    <p className="text-gray-600 text-sm">Get your complete fee waiver code for Block 15 registration.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <a
                  href="https://bgin.discourse.group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block13-btn-secondary"
                >
                  Join Discussion on Discourse Forum
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="participation" className="block13-section">
          <div className="block13-card bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h2 className="block13-section-title">Who Should Join</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">Perfect for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span><strong>Regulators & Policymakers:</strong> Shape blockchain governance frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span><strong>Technologists:</strong> Contribute to technical standards development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span><strong>Industry Leaders:</strong> Understand regulatory landscape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span><strong>Academics & Researchers:</strong> Engage in cutting-edge discussions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span><strong>Students:</strong> Learn from industry experts and build networks</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">Why It Matters:</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Join the premier forum where blockchain governance decisions are made. Your participation directly impacts
                  international standards that will shape the future of digital economic networks.
                </p>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Registration Information</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Registration will open soon. Limited capacity – register early to secure your spot.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Register by card (Eventbrite) or <a href="#stablecoin-payment" className="font-semibold underline hover:no-underline" style={{ color: '#2775CA' }}>USDC on Ethereum (stablecoin)</a>.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Contributors:</strong> <a href="#contributions" className="text-blue-600 hover:text-blue-800 underline">Fee waivers available for those presenting work</a>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href=""
                      className="block13-btn-primary inline-flex items-center gap-2"
                    >
                      Register (Eventbrite)
                      <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#stablecoin-payment" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow hover:shadow-md transition-all hover:bg-[#1e5fa8]" style={{ backgroundColor: '#2775CA' }}>
                      <Image src="/images/Events/usdc-logo.svg" alt="USDC" width={22} height={22} className="flex-shrink-0" />
                      Register with USDC
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past BGIN Block Meetings */}
        <section id="past-events" className="block13-section">
          <h2 className="block13-section-title text-center">Past BGIN Block Meetings</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our journey of building global blockchain governance through previous Block conferences
          </p>
          <div className="block13-grid block13-grid-4">
            <div className="block13-card">
              <div className="block13-publication-image">
                <Image
                  src="/images/Events/Block5.jpeg"
                  alt="Block 14"
                  width={200}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="block13-publication-content">
                <h4 className="block13-publication-title">BGIN Block 14</h4>
                <p className="block13-publication-summary">March 1–2, 2026 | Shibuya, Tokyo</p>
                <Link href="/events/20260301-block14" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="block13-card">
              <div className="block13-publication-image">
                <Image
                  src="/images/Events/Block3.jpeg"
                  alt="Block 13"
                  width={200}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="block13-publication-content">
                <h4 className="block13-publication-title">BGIN Block 13</h4>
                <p className="block13-publication-summary">October 15-17, 2025 | Washington, D.C.</p>
                <Link href="/events/20251015-block13" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="block13-card">
              <div className="block13-publication-image">
                <Image
                  src="/images/Events/Block5.jpeg"
                  alt="Block 12"
                  width={200}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="block13-publication-content">
                <h4 className="block13-publication-title">BGIN Block 12</h4>
                <p className="block13-publication-summary">March 2-3, 2025 | Shibuya, Tokyo</p>
                <Link href="/events/20250302-block12" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="block13-card">
              <div className="block13-publication-image">
                <Image
                  src="/images/Events/Block3.jpeg"
                  alt="Block 11"
                  width={200}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="block13-publication-content">
                <h4 className="block13-publication-title">BGIN Block 11</h4>
                <p className="block13-publication-summary">October 21-22, 2024 | Washington, D.C.</p>
                <Link href="/events/20241025-block11" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/activities/block-conference" className="block13-btn-secondary">
              View All Block Conferences
            </Link>
          </div>
        </section>

        {/* CTA Section - Join the Discussion */}
        <section className="block13-section">
          <div className="bg-white w-full flex-col flex items-center pb-16 h-fit px-4 xl:px-0">
            <div className="flex items-start h-fit max-w-5xl m-auto">
              <div className="flex-col flex items-start gap-2.5 py-16">
                <div className="bg-[#688ff5] w-full h-full flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-12 rounded-lg border border-white border-opacity-[0.5]">
                  <div className="flex-1 flex-col flex items-start gap-6 py-4 lg:py-12 pr-6 pl-12">
                    <div className="w-full flex-col flex items-start gap-6">
                      <div className="w-full flex-col flex items-start gap-2 text-white">
                        <div className="text-4xl leading-[50px] font-medium font-FamiljenGrotesk">Join the Discussion</div>
                        <div className="text-lg leading-[19px] font-Inter">
                          Be part of shaping the future of blockchain governance at BGIN Block 15.
                          Connect with regulators, technologists, and industry leaders from around the world.
                          Join our community to stay updated on the latest developments and participate in ongoing discussions.
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="https://bgin.discourse.group/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-50 transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
                        style={{borderRadius: '45px'}}
                      >
                        Join Our Community
                        <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

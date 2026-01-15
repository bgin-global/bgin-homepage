"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/block14.css";
import { programData } from "@/lib/block14-program-data";
import { criticalProjects } from "@/lib/block14-critical-projects";
import { processProgram, groupSessionsByTime, groupSessionsByRoom } from "@/lib/block14-helpers";

// Load and process program data
const program = processProgram();
const rooms = programData.rooms;

// EventBrite registration link
const EVENTBRITE_LINK = "https://www.eventbrite.com/e/bgin-block-14-tickets-1980456894885?aff=oddtdtcreator";

export default function Block14Page() {
  // Determine default day based on current date
  const getDefaultDay = (): 'day1' | 'day2' => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-indexed (March = 2)
    const day = today.getDate();

    // Check for Block 14 dates in 2026
    if (year === 2026 && month === 2) { // March 2026
      if (day === 1) {
        return 'day1';
      } else if (day === 2) {
        return 'day2';
      }
    }

    // Default to day 1 for any other date
    return 'day1';
  };

  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>(getDefaultDay());
  const [viewMode, setViewMode] = useState<'time' | 'room'>('time');

  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      {/* Hero Section */}
      <section className="block13-hero">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Image
          src="/images/Events/block14/main_e4c98dfdf3f40598cf32e783adbef9b5.jpg"
          alt="Shibuya Parco Dragon Gate Building - BGIN Block 14 Venue"
          fill
          className="object-cover"
          priority
        />
        <div className="block13-hero-content">
          <h1>BGIN Block 14</h1>
          <p>March 1–2, 2026 | Tokyo, Japan</p>
          <p className="text-lg mt-2 mb-4">During Japan Fintech Week</p>
          <a href={EVENTBRITE_LINK} target="_blank" rel="noopener noreferrer" className="block13-btn-primary">
            Register Now
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <div className="block13-section-container">
        {/* Program Section */}
        <section id="program" className="block13-section">
          <h2 className="block13-section-title">Program</h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              <strong>Fee Waiver Available:</strong> Contributors who submit written contributions and present at Block 14 receive complete registration fee waivers.
              {" "}
              <a href="#contributions" className="text-blue-600 hover:text-blue-800 underline font-semibold">Learn more about our contribution process and how to apply →</a>
            </p>
          </div>
          
          {/* Day Tabs */}
          <div id="detailed-program" className="block13-tabs scroll-mt-20">
            {[
              { key: 'day1' as const, label: 'Mar 1' },
              { key: 'day2' as const, label: 'Mar 2' }
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

          {/* View Toggle */}
          <div className="flex justify-between items-center mb-4">
            <div className="block13-toggle-group">
              <button
                onClick={() => setViewMode('time')}
                className={`block13-toggle ${viewMode === 'time' ? 'active' : ''}`}
              >
                By Time
              </button>
              <button
                onClick={() => setViewMode('room')}
                className={`block13-toggle ${viewMode === 'room' ? 'active' : ''}`}
              >
                By Room
              </button>
            </div>
          </div>

          {/* Program Content */}
          <div className="space-y-6">
            {program[activeDay] && program[activeDay].length > 0 ? (
              viewMode === 'time' ? (
                // Time-based view
                <div className="space-y-6">
                  {Object.entries(groupSessionsByTime(program[activeDay])).map(([time, sessions]: [string, any]) => (
                    <div key={time} className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">{time}</h3>
                      <div className="space-y-2">
                        {sessions.map((session: any, idx: number) => {
                          return (
                            <Link key={idx} href={session.detailPage} className="block no-underline">
                              <div className="block13-session-card cursor-pointer hover:shadow-md transition-shadow">
                                <div className="flex flex-col">
                                  <div className="flex flex-row justify-between items-start mb-1">
                                    <div className="flex items-center gap-2 flex-grow">
                                      <h3 className="block13-session-title">{session.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                                      <span className="text-sm text-gray-600 font-medium">{session.room}</span>
                                      {session.wg !== 'General' && (
                                        <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                                          {session.wg}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  <p className="text-sm text-gray-600 mb-2">{session.summary}</p>
                                  {(session.sessionChair !== 'TBD' || session.contributors !== 'TBD') && (
                                    <div className="text-xs text-gray-700 flex flex-wrap gap-3 mb-2">
                                      {session.sessionChair !== 'TBD' && (
                                        <span><span className="font-semibold">Chair:</span> {session.sessionChair}</span>
                                      )}
                                      {session.contributors !== 'TBD' && session.contributors !== 'Optional - List of speakers' && (
                                        <span><span className="font-semibold">Main Contributor:</span> {session.contributors}</span>
                                      )}
                                    </div>
                                  )}
                                  {session.documents && session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').length > 0 && (
                                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                                      {session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').map((doc: any, docIdx: number) => (
                                        <span
                                          key={docIdx}
                                          className="document-link text-xs text-blue-600 hover:text-blue-800 cursor-pointer inline-flex items-center gap-1"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.open(doc.link, '_blank');
                                          }}
                                        >
                                          <span className="no-underline">📄</span>
                                          <span className="underline">{doc.title}</span>
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Room-based view
                <div className="space-y-8">
                  {Object.entries(groupSessionsByRoom(program[activeDay])).map(([roomName, sessions]: [string, any]) => {
                    const roomData = (rooms as any)[roomName] || Object.values(rooms).find((r: any) =>
                      r.displayName === roomName || roomName.includes(r.displayName)
                    );

                    return (
                      <div key={roomName} className="space-y-4">
                        <div className="rounded-lg overflow-hidden bg-white shadow-md">
                          <div className="p-6 bg-gray-50">
                            <h3 className="text-2xl font-bold mb-3">
                              {roomData?.displayName || roomName}
                            </h3>
                            <div className="space-y-2">
                              <p className="text-gray-700">
                                <span className="font-semibold">Building:</span> Shibuya Parco DG Bldg.<br/>
                                <span className="font-semibold">Address:</span>{' '}
                                <a
                                  href="https://maps.app.goo.gl/iZc37UYCEVfbgGCt6"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 underline"
                                >
                                  15-1 Udagawa-cho, Shibuya-ku, Tokyo 150-0042, Japan
                                </a>
                              </p>
                              {roomData?.capacity && roomData.capacity !== 'TBD' && (
                                <p className="text-gray-600">
                                  <span className="font-semibold">Capacity:</span> {roomData.capacity}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 ml-4">
                          {sessions.map((session: any, idx: number) => {
                            return (
                              <Link key={idx} href={session.detailPage} className="block no-underline">
                                <div className="block13-session-card cursor-pointer hover:shadow-md transition-shadow">
                                  <div className="flex flex-col">
                                    <div className="flex flex-row justify-between items-start mb-1">
                                      <div className="flex items-center gap-2 flex-grow">
                                        <h4 className="block13-session-title">{session.title}</h4>
                                      </div>
                                      <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                                        <span className="text-sm font-bold text-gray-800">{session.displayTime}</span>
                                        {session.wg !== 'General' && (
                                          <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {session.wg}
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-2">{session.summary}</p>
                                    {(session.sessionChair !== 'TBD' || session.contributors !== 'TBD') && (
                                      <div className="text-xs text-gray-700 flex flex-wrap gap-3 mb-2">
                                        {session.sessionChair !== 'TBD' && (
                                          <span><span className="font-semibold">Chair:</span> {session.sessionChair}</span>
                                        )}
                                        {session.contributors !== 'TBD' && session.contributors !== 'Optional - List of speakers' && (
                                          <span><span className="font-semibold">Main Contributor:</span> {session.contributors}</span>
                                        )}
                                      </div>
                                    )}
                                    {session.documents && session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').length > 0 && (
                                      <div className="mt-2 flex items-center gap-2 flex-wrap">
                                        {session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').map((doc: any, docIdx: number) => (
                                          <span
                                            key={docIdx}
                                            className="document-link text-xs text-blue-600 hover:text-blue-800 cursor-pointer inline-flex items-center gap-1"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              window.open(doc.link, '_blank');
                                            }}
                                          >
                                            <span className="no-underline">📄</span>
                                            <span className="underline">{doc.title}</span>
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-700">
                  Program details will be available soon. Please check back later.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Critical Projects Section */}
        <section className="block13-section">
          <h2 className="block13-section-title">Key Research Projects</h2>
          <div className="block13-grid block13-grid-3">
            {criticalProjects.map((project) => (
              <div key={project.id} className={`block13-card block13-wg-card ${project.wg.toLowerCase()} flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`block13-wg-badge ${project.wg.toLowerCase()}`}>
                    {project.wg}
                  </span>
                  <span className={`block13-phase-indicator ${project.phase.toLowerCase().replace(/\s+/g, '-')}`}>{project.phase}</span>
                </div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                {project.link && project.link !== 'TBD' ? (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
                    View Document →
                  </Link>
                ) : (
                  <span className="text-gray-400 font-semibold mt-auto">
                    Document Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BGIN Agent Hack Section */}
        <section id="govhack" className="block13-section">
          <h2 className="block13-section-title">BGIN Agent Hack</h2>
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500 text-white px-3 py-1 text-xs font-semibold shadow-sm">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Policy → Code
            </span>
          </div>
          
          <div className="block13-card">
            <p className="text-gray-700 text-lg max-w-3xl mb-8">
              A focused hackathon at Block 14 where policy discussions turn into working software through agent-mediated standards and programmable governance. Agents build; people align on shared understanding.
            </p>

            <div className="grid gap-6 lg:grid-cols-2 mb-8">
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 block13-card border-t-4 border-t-blue-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-700">
                    <svg aria-hidden="true" className="block" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a7 7 0 0 0-7 7c0 2.89 1.64 4.74 3.2 6.07.66.57 1.17 1.3 1.36 2.14l.14.63h4.6l.14-.63c.19-.84.7-1.57 1.36-2.14C17.36 13.74 19 11.9 19 9a7 7 0 0 0-7-7Zm-2 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold leading-none relative -top-0.5">Overview</h3>
                </div>
                <p className="text-gray-700">
                  Teams translate BGIN standards and policy artifacts into executable code with policy-to-code
                  pipelines, on-chain attestations, and automated compliance checks—moving from theory to practice
                  in real time.
                </p>
              </div>

              <div className="relative bg-white border border-gray-200 rounded-xl p-6 block13-card border-t-4 border-t-purple-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-100 text-purple-700">
                    <svg aria-hidden="true" className="block" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold leading-none relative -top-0.5">Event Flow</h3>
                </div>
                <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                  <li>
                    <span className="font-semibold">Day 1 (March 1) — Governance Ceremony:</span> Key generation opening, standards documentation sprint,
                    policy-to-code workshops, and team formation around governance challenges.
                  </li>
                  <li>
                    <span className="font-semibold">Day 2 (March 2) — Build &amp; Validate:</span> Implementation, live compliance showcase,
                    sponsor integration reviews, and framework documentation.
                  </li>
                </ol>
              </div>

              <div className="relative bg-white border border-gray-200 rounded-xl p-6 block13-card border-t-4 border-t-emerald-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-700">
                    <svg aria-hidden="true" className="block" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a3 3 0 0 1 0 5.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold leading-none relative -top-0.5">Who Should Join</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Regulators &amp; Policymakers seeking executable governance</li>
                  <li>Engineers and Standards Contributors building policy-aware systems</li>
                  <li>Industry &amp; Protocol Teams validating compliance patterns</li>
                  <li>Researchers and Students exploring governance automation</li>
                </ul>
              </div>

              <div className="relative bg-white border border-gray-200 rounded-xl p-6 block13-card border-t-4 border-t-amber-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 text-amber-700">
                    <svg aria-hidden="true" className="block" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 21l4-2 4 2V5a4 4 0 1 0-8 0v16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold leading-none relative -top-0.5">What You'll Gain</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Policy-to-code prototypes and reusable governance frameworks</li>
                  <li>Real-time compliance testing and on-chain attestations</li>
                  <li>Demonstrable, standards-aligned agentic implementations</li>
                  <li>Collaboration with a multi-stakeholder global community</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/events/block14/agent-hack"
                className="block13-btn-primary inline-flex items-center gap-2"
              >
                Learn More About Agent Hack
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Access & Venue Information */}
        <section id="access-venue" className="block13-section">
          <h2 className="block13-section-title">Access & Venue</h2>
          <div className="block13-venue-grid">
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-600 mb-4">
                Shibuya Parco DG Bldg.<br/>
                15-1 Udagawa-cho, Shibuya-ku<br/>
                Tokyo 150-0042, Japan
              </p>

              <h4 className="font-semibold mb-2 mt-6">Venue</h4>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Shibuya Parco Dragon Gate Building</strong><br/>
                18th Floor<br/>
                Same venue as Block 12
              </p>

              <div className="mt-6">
                <Link
                  href="/events/block14/access"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.603372710632!2d139.69592147495445!3d35.66214247259336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dc91fcc6d03%3A0x1813b205013e77b6!2sShibuya%20PARCO%20DG%20Bldg.!5e0!3m2!1sen!2sus!4v1768506494986!5m2!1sen!2sus"
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

        {/* Event Gallery Section */}
        <section className="block13-section">
          <h2 className="block13-section-title text-center">Event Gallery</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the atmosphere of BGIN Block 14 at Shibuya Parco Dragon Gate Building
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/Events/block14/IMG_0155.jpeg"
                alt="BGIN Block 14 Conference Session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/Events/block14/IMG_0885.jpeg"
                alt="BGIN Block 14 Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/Events/block14/IMG_2563.jpeg"
                alt="BGIN Block 14 Conference Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/Events/block14/main_e4c98dfdf3f40598cf32e783adbef9b5.jpg"
                alt="Shibuya Parco Dragon Gate Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/Events/block14/proxy-image.jpeg"
                alt="BGIN Block 14 Venue"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/Events/block14/IMG_1576.JPG"
                alt="BGIN Block 14 Program Schedule"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Related Events Section */}
        <section className="block13-section">
          <h2 className="block13-section-title">Related Events</h2>
          <div className="mb-6">
            <p className="text-gray-700 text-center mb-6">
              BGIN Block 14 is part of <strong>Japan Fintech Week</strong>, a series of blockchain and fintech events in Tokyo. 
              Explore related events happening during this period.
            </p>
          </div>
          
          <div className="block13-grid block13-grid-3">
            {/* FSA Blockchain Roundtable */}
            <div className="block13-card">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-gray-600">February 27, 2026 (Afternoon)</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">FSA Blockchain Roundtable</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Closed roundtable on DeFi AML/privacy and exchange cybersecurity hosted by the Financial Services Agency.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Closed Event
                </span>
              </div>
            </div>

            {/* Fin/Sum */}
            <div className="block13-card">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-gray-600">March 3-6, 2026</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fin/Sum</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Japan's premier fintech summit featuring Financial Services Agency sessions and industry discussions.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Tokyo, Japan
                </span>
              </div>
            </div>

            {/* Japan Fintech Week Info */}
            <div className="block13-card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-blue-700">February 27 - March 6, 2026</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Japan Fintech Week</h3>
              <p className="text-gray-700 mb-4 text-sm">
                A week-long series of blockchain and fintech events in Tokyo, bringing together industry leaders, 
                regulators, and innovators from around the world.
              </p>
              <div className="text-xs text-gray-600 font-medium">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Tokyo, Japan
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors & Partners */}
        <section className="block13-section">
          <h2 className="block13-section-title text-center">Sponsors & Partners</h2>

          {/* Sustaining Sponsors */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Sustaining Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center min-h-[160px]">
                <Image
                  src="/images/Events/sponsor/jpCryptoIsac.jpg"
                  alt="JP Crypto ISAC"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center min-h-[160px]">
                <Image
                  src="/images/Events/sponsor/DG.jpeg"
                  alt="Digital Garage"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Event Sponsors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Event Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <a
                  href="https://www.eda.admin.ch/tokyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-full w-full"
                >
                  <div className="text-center">
                    <h4 className="text-gray-700 font-semibold text-lg mb-2">Swiss Embassy</h4>
                    <p className="text-gray-600 text-sm">Tokyo, Japan</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* More sponsors coming soon */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <p className="text-blue-700 text-center">
              More sponsors are being finalized. If you are interested in sponsoring Block 14, please contact us at{" "}
              <a href="mailto:bgin_admin@bg2x.org" className="text-blue-800 font-semibold hover:underline">
                bgin_admin@bg2x.org
              </a>
            </p>
          </div>
        </section>

        {/* Participation Info */}
        <section id="contributions" className="block13-section">
          <h2 className="block13-section-title">Looking to Present Your Work?</h2>
          <div className="bg-[#688ff5] text-white rounded-lg p-6 mb-6">
            <p>
              BGIN follows a collaborative standardization process. <strong>Contributors who submit written contributions and present at Block 14 receive complete registration fee waivers.</strong>
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
              </div>
            </div>

            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">Submit Contribution for Fee Waiver</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#688ff5] text-white text-sm font-semibold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact Working Group Chair</h4>
                    <p className="text-gray-600 text-sm">Reach out to the relevant WG Chair to express interest in contributing.</p>
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
                    <p className="text-gray-600 text-sm">Get your complete fee waiver code for Block 14 registration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past BGIN Events */}
        <section className="block13-section">
          <h2 className="block13-section-title text-center">Past BGIN Events</h2>
          <div className="block13-grid block13-grid-4">
            <div className="block13-card">
              <div className="block13-publication-image">
                <Image
                  src="/images/Events/Block5.jpeg"
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
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

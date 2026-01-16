"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/block14.css";
import { programData } from "@/lib/block13-program-data";
import { criticalProjects } from "@/lib/block13-critical-projects";
import { processProgram, groupSessionsByTime, groupSessionsByRoom } from "@/lib/block13-helpers";
import RoomImageCarousel from "@/components/events/block13/RoomImageCarousel";
import ProgramTimetable from "@/components/events/block13/ProgramTimetable";


// Load and process program data
const program = processProgram();
const rooms = programData.rooms;


export default function Block14Page() {
  // Determine default day based on current date
  const getDefaultDay = (): 'day1' | 'day2'  => {
    const today = new Date();

    // Get today's date in EST timezone (where the venue is)
    const todayEST = new Date(today.toLocaleString("en-US", {timeZone: "America/New_York"}));
    const todayJST = new Date(today.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));

    // Extract just the date parts
    const year = todayEST.getFullYear();
    const month = todayEST.getMonth(); // 0-indexed (October = 9)
    const day = todayEST.getDate();

    // Check for Block 13 dates in 2025
    if (year === 2025 && month === 9) { // October 2025
      if (day === 15) {
        return 'day1';
      } else if (day === 16) {
        return 'day2';
      } else if (day === 17) {
        return 'day3';
      }
    }

    // Default to day 1 for any other date
    return 'day1';
  };

  const [activeDay, setActiveDay] = useState<'day1' | 'day2' | 'day3'>(getDefaultDay());
  const [viewMode, setViewMode] = useState<'time' | 'room'>('time');

  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      {/* Hero Section */}
      <section className="block13-hero">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Image
          src="/images/Events/Block3.jpeg"
          alt="Washington D.C."
          fill
          className="object-cover"
          priority
        />
        <div className="block13-hero-content">
          <h1>BGIN Block 13</h1>
          <p>October 15–17, 2025 | Washington, D.C.</p>
          <a href="https://www.eventbrite.com/e/bgin-block-13-tickets-1584466825929?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="block13-btn-primary">
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
              <strong>Fee Waiver Available:</strong> Contributors who submit written contributions and present at Block 13 receive complete registration fee waivers.
              {" "}
              <a href="#contributions" className="text-blue-600 hover:text-blue-800 underline font-semibold">Learn more about our contribution process and how to apply →</a>
            </p>
            
            {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Note: Program is Tentative</h3>
              <p className="text-blue-700">
                The program below is tentative and subject to change. Final agenda will be posted closer to the event date. Follow our socials: 
                <a href="https://twitter.com/bgin_global" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 ml-1">X (Twitter)</a> | 
                <a href="https://www.linkedin.com/company/blockchain-governance-initiative-network/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 ml-1">LinkedIn</a>
              </p>
            </div> */}
          </div>
          
          {/* Program Timetable */}
          <div className="mb-8">
            <ProgramTimetable />
          </div>
          
          {/* Day Tabs */}
          <div id="detailed-program" className="block13-tabs scroll-mt-20">
            {[
              { key: 'day1' as const, label: 'Oct 15' },
              { key: 'day2' as const, label: 'Oct 16' }, 
              { key: 'day3' as const, label: 'Oct 17' }
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

          {/* View Toggle and Expand Controls */}
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
            {viewMode === 'time' ? (
              // Time-based view
              <div className="space-y-6">
                {Object.entries(groupSessionsByTime(program[activeDay])).map(([time, sessions]: [string, any]) => (
                  <div key={time} className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">{time} <span className="text-xs text-gray-500">(JST)</span></h3>
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

                              {/* Always show session details */}
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
                                          <span className="no-underline">{session.wg === 'BGIN Agent Hack' && doc.type === 'Website' ? '🔗' : '📄'}</span>
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
                      {/* Room header with image on right */}
                      <div className="rounded-lg overflow-hidden bg-white shadow-md">
                        <div className="flex flex-col md:flex-row">
                          {/* Left side - Building info */}
                          <div className="p-6 md:w-1/2 bg-gray-50">
                            <h3 className="text-2xl font-bold mb-3">
                              {roomData?.displayName || roomName}
                            </h3>

                            {/* Building and location info */}
                            <div className="space-y-2 mb-4">
                              {roomData?.displayName?.includes('Hariri') && (
                                <p className="text-gray-700">
                                  <span className="font-semibold">Building:</span> Rafik B. Hariri Building<br/>
                                  <span className="font-semibold">Address:</span>{' '}
                                  <a
                                    href="https://www.google.com/maps/search/?api=1&query=37th+and+O+Streets+Rafik+B+Hariri+Building+Washington+DC+20057"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    37th and O Streets, Rafik B. Hariri Building, Washington, DC 20057
                                  </a>
                                </p>
                              )}
                              {roomData?.displayName?.includes('Arrupe') && (
                                <p className="text-gray-700">
                                  <span className="font-semibold">Building:</span> Pedro Arrupe, S.J. Hall<br/>
                                  <span className="font-semibold">Address:</span>{' '}
                                  <a
                                    href="https://www.google.com/maps/search/?api=1&query=1575+Tondorf+Rd+Washington+DC+20057"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    1575 Tondorf Rd, Washington, DC 20057
                                  </a>
                                </p>
                              )}
                              {roomData?.displayName?.includes('Leavey') && (
                                <p className="text-gray-700">
                                  <span className="font-semibold">Building:</span> Thomas & Dorothy Leavey Center<br/>
                                  <span className="font-semibold">Address:</span>{' '}
                                  <a
                                    href="https://www.google.com/maps/search/?api=1&query=1560+Tondorf+Rd+Washington+DC+20057"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    1560 Tondorf Rd, Washington, DC 20057
                                  </a>
                                </p>
                              )}
                              {(roomData?.displayName?.includes('HFSC') && roomData?.displayName?.includes('Bulldog Alley')) && (
                                <div className="text-gray-700">
                                  <span className="font-semibold">HFSC Herman Meeting Room</span><br/>
                                  <span className="font-semibold">Building:</span> Healey Family Student Center<br/>
                                  <span className="font-semibold">Address:</span>{' '}
                                  <a
                                    href="https://www.google.com/maps/search/?api=1&query=New+South+3700+Tondorf+Rd+Washington+DC+20057"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    New South, 3700 Tondorf Rd, Washington, DC 20057
                                  </a>
                                  <br/><br/>
                                  <span className="font-semibold">Bulldog Alley</span><br/>
                                  <span className="font-semibold">Building:</span> Thomas & Dorothy Leavey Center<br/>
                                  <span className="font-semibold">Address:</span>{' '}
                                  <a
                                    href="https://www.google.com/maps/search/?api=1&query=1560+Tondorf+Rd+Washington+DC+20057"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    1560 Tondorf Rd, Washington, DC 20057
                                  </a>
                                </div>
                              )}
                              {(roomData?.displayName?.includes('HFSC') && !(roomData?.displayName?.includes('Bulldog Alley'))) && (
                                <p className="text-gray-700">
                                  <span className="font-semibold">HFSC Herman Meeting Room</span><br/>
                                  <span className="font-semibold">Building:</span> Healey Family Student Center<br/>
                                  <span className="font-semibold">Address:</span>{' '}
                                  <a
                                    href="https://www.google.com/maps/search/?api=1&query=New+South+3700+Tondorf+Rd+Washington+DC+20057"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    New South, 3700 Tondorf Rd, Washington, DC 20057
                                  </a>
                                  <br/><br/>
                                </p>
                              )}
                              {roomData?.displayName?.includes('Faculty Club') && (
                                <p className="text-gray-700">
                                  <span className="font-semibold">Venue:</span> Georgetown University Faculty Club Restaurant<br/>
                                  <span className="font-semibold">Location details:</span> To be announced
                                </p>
                              )}
                            </div>

                            {roomData?.capacity && roomData.capacity !== 'TBD' && (
                              <p className="text-gray-600 mb-2">
                                <span className="font-semibold">Capacity:</span> {roomData.capacity}
                              </p>
                            )}

                            {roomData?.externalLink && (
                              <a
                                href={roomData.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mt-3"
                              >
                                Visit venue website
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11 3H15.5C15.7761 3 16 3.22386 16 3.5V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M10 9L16 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M13 9V14.5C13 14.7761 12.7761 15 12.5 15H5.5C5.22386 15 5 14.7761 5 14.5V7.5C5 7.22386 5.22386 7 5.5 7H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </a>
                            )}
                          </div>

                          {/* Right side - Image carousel */}
                          {roomData?.image && (
                            <div className="md:w-1/2 h-48 md:h-[300px] relative overflow-hidden">
                              <RoomImageCarousel images={roomData.image} roomName={roomData?.displayName} />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Sessions in this room */}
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

                                {/* Always show session details */}
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
                                            <span className="no-underline">{session.wg === 'BGIN Agent Hack' && doc.type === 'Website' ? '🔗' : '📄'}</span>
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
                {project.link ? (
                  <Link href={project.link} className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
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

          {/* View All Publications Button */}
          <div className="text-center mt-8 space-y-4">
            <Link href="/events/20251015-block13/meeting-reports" className="block13-btn-primary inline-block">
              View Block 13 Meeting Reports
            </Link>
            <div>
              <Link href="https://bgin-global.org/activities" className="block13-btn-secondary">
                View All Past Publications
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Publications - Commented out as per request */}
        {/* <section id="publications" className="block13-section">
          <h2 className="block13-section-title">Featured Publications</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Publications Coming Soon</h3>
            <p className="text-blue-700">
              Featured publications for Block 13 are currently being selected. Check the Key Research Projects section above for available documents.
            </p>
          </div>
          <div className="text-center">
            <Link href="https://bgin-global.org/activities" className="block13-btn-secondary">
              View All Past Publications
            </Link>
          </div>
        </section> */}

        {/* Agent BGIN Agent Hack Section (refined) */}
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
          {/* Original content commented out - replaced with iframe preview
          <div className="relative">
            <div className="rounded-2xl bg-white p-6 border border-gray-200">
              <p className="text-gray-700 max-w-3xl mb-8">
                A focused hackathon at Block 13 where policy discussions turn into working software through agent-mediated standards and programmable governance. Agents build; people align on shared understanding.
              </p>

              <div className="grid gap-6 lg:grid-cols-2">
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
                      <span className="font-semibold">Day 1 — Governance Ceremony:</span> Key generation opening, standards documentation sprint,
                      policy-to-code workshops, and team formation around governance challenges.
                    </li>
                    <li>
                      <span className="font-semibold">Day 2 — Build &amp; Validate:</span> 24-hour implementation, live compliance showcase,
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
            </div>
          </div>
          */}

          {/* Interactive preview of BGIN Agent Hack website */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://block13-agent-hack.vercel.app/"
                width="100%"
                height="800"
                style={{ border: 0 }}
                title="BGIN Agent Hack Preview"
                className="w-full"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href="https://block13-agent-hack.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Website
              </a>
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
                Georgetown University<br/>
                Washington, D.C.<br/>
                United States
              </p>

              <h4 className="font-semibold mb-2 mt-6">Main Venues</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Thomas & Dorothy Leavey Center - Program Room</strong> (BGIN Agent Hack)</li>
                <li><strong>Pedro Arrupe, S.J. Hall</strong> (Main Sessions (Day 1, 2))</li>
                <li><strong>Rafik B. Hariri Building</strong> - Rooms 140 & 240 (Main Sessions (Day 3))</li>
              </ul>

              <h4 className="font-semibold mb-2 mt-6">Reception Venue</h4>
              <p className="text-sm text-gray-600">
                <strong>Georgetown University Faculty Club Restaurant</strong><br/>
                Located adjacent to the Leavey Center
              </p>

              <div className="mt-6">
                <Link
                  href="/events/20251015-block13/access"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.751890487374!2d-77.07525682346969!3d38.90698324613937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b64b36377231%3A0x19c4fa89e632b7ea!2sGeorgetown%20University!5e0!3m2!1sen!2sus!4v1703789456789!5m2!1sen!2sus"
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
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Event Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <Image
                  src="/images/Events/sponsor/DeCurret.png"
                  alt="DeCurret DCP"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <Image
                  src="/images/Events/sponsor/NRI.png"
                  alt="NRI"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <Image
                  src="/images/Events/sponsor/MUFG.jpeg"
                  alt="MUFG"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <Image
                  src="/images/Events/sponsor/Penguin.png"
                  alt="Penguin Securities"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <Image
                  src="/images/Events/sponsor/World.png"
                  alt="World"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <Image
                  src="/images/Events/sponsor/VerifyVasp.png"
                  alt="VerifyVASP"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Academic Hosts */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Academic Hosts</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[200px] w-[380px]">
                <Image
                  src="/images/Events/sponsor/Georgetown University Psaros Center.png"
                  alt="Georgetown University Psaros Center"
                  width={320}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[200px] w-[380px]">
                <div className="text-center">
                  <h4 className="text-gray-700 font-medium text-lg">Georgetown University<br/>Department of Computer Science</h4>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[200px] w-[380px]">
                <div className="text-center">
                  <h4 className="text-gray-700 font-medium text-lg">CyberSMART Research Centre</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Special Supporters */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Special Supporters</h3>
            <div className="flex justify-center max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center min-h-[200px] w-full">
                <Image
                  src="/images/Events/sponsor/fintech_assoc_japan.jpg"
                  alt="Fintech Association Japan"
                  width={280}
                  height={140}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* More sponsors coming soon
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-700 text-center">
              More sponsors are being finalized. If you are interested in sponsoring Block 13, please contact us at{" "}
              <a href="mailto:bgin_admin@bg2x.org" className="text-blue-800 font-semibold hover:underline">
                bgin_admin@bg2x.org
              </a>
            </p>
          </div> */}
        </section>

        {/* Participation Info */}
        {/* Contribution & Fee Waiver Section */}
        <section id="contributions" className="block13-section">
          <h2 className="block13-section-title">Looking to Present Your Work?</h2>
          <div className="bg-[#688ff5] text-white rounded-lg p-6 mb-6">
            <p>
              BGIN follows a collaborative standardization process. <strong>Contributors who submit written contributions and present at Block 13 receive complete registration fee waivers.</strong>
            </p>
          </div>

          <div className="block13-grid block13-grid-2">
            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">How BGIN Sessions Work</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Foundation Documents</h4>
                  <p className="text-gray-600 text-sm">Session Chairs provide draft standards and discussion materials as the foundation for collaborative work. <a href="#publications" className="text-blue-600 hover:underline">See featured publications →</a></p>
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
                    <p className="text-gray-600 text-sm">Get your complete fee waiver code for Block 13 registration.</p>
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
                    Registration is now open. Limited capacity - register early to secure your spot.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Contributors:</strong> <a href="#contributions" className="text-blue-600 hover:text-blue-800 underline">Fee waivers available for those presenting work</a>
                  </p>
                  <a 
                    href="https://www.eventbrite.com/e/bgin-block-13-tickets-1584466825929?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block13-btn-primary inline-flex items-center gap-2"
                  >
                   	Register Now
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past BGIN Events */}
        <section className="block13-section">
          <h2 className="block13-section-title text-center">Past BGIN Events</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our journey of building global blockchain governance through previous Block conferences
          </p>
          <div className="block13-grid block13-grid-4">
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
            
            <div className="block13-card">
              <div className="block13-publication-image">
                <Image
                  src="/images/Events/Block5.jpeg"
                  alt="Block 10"
                  width={200}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="block13-publication-content">
                <h4 className="block13-publication-title">BGIN Block 10</h4>
                <p className="block13-publication-summary">March 3-6, 2024 | Tokyo, Japan</p>
                <Link href="/events/20240303-block10" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="block13-card">
              <div className="block13-publication-image">
                <Image
                  src="/images/Events/venue/477_collider.jpg"
                  alt="Block 9"
                  width={200}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="block13-publication-content">
                <h4 className="block13-publication-title">BGIN Block 9</h4>
                <p className="block13-publication-summary">November 19-22, 2023 | Sydney, Australia</p>
                <Link href="/events/20231119-block9" className="text-blue-600 hover:text-blue-800 font-semibold">
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
                          Be part of shaping the future of blockchain governance at BGIN Block 13. 
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

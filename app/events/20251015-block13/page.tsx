"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/block13.css";
import { programData } from "@/lib/block13-program-data";

// Critical projects data
const criticalProjects = [
  {
    id: 1,
    title: "Distinguishing Blockchain Forensics from Analytics",
    description: "Comprehensive standards for blockchain forensics and analytics methodologies",
    wg: "IKP",
    phase: "Public Comment",
    link: "https://docs.google.com/document/d/1Of9E5govjRFNRjdyvHQIeV42LHegUGC1dRoFYreQk8E/edit?usp=sharing"
  },
  {
    id: 2,
    title: "Wallet Governance, Policy and Key Management Study Report",
    description: "Policy framework for wallet governance and key management best practices",
    wg: "IKP", 
    phase: "Public Comment",
    link: "https://docs.google.com/document/d/12bn-bXRaqs0syEX2lX_k-yXWeFlgnh38iv1Onu_Kwuc/edit?usp=sharing"
  },
  {
    id: 3,
    title: "Accountable Wallet",
    description: "Standards for accountable wallet implementations and compliance",
    wg: "IKP",
    phase: "Published",
    link: "https://drive.google.com/file/d/1ehgENeEX2irxosubynJNQXQqElM3EFOu/view?usp=sharing"
  },
  {
    id: 4,
    title: "Agent Standards and Frameworks",
    description: "Standards and frameworks for blockchain agents, agentic competition, and reputation systems.",
    wg: "IKP",
    phase: "Draft",
    link: "https://docs.google.com/document/d/1Xjqq2vKkoKZSvqVvSPU-AhCVkyBqHHvK2QYTfUluJ0Y/edit?usp=sharing"
  },
  {
    id: 5,
    title: "Policy priorities for stablecoin regulation: past, present and future",
    description: "Comprehensive analysis of stablecoin regulatory frameworks and future directions",
    wg: "FASE",
    phase: "Published",
    link: "https://docs.google.com/document/d/14zFyWp90aObG-FGAHdTcd1npwH3iY3ew/edit?usp=sharing&ouid=115431298069367330711&rtpof=true&sd=true"
  },
  {
    id: 6,
    title: "Cyber Security Information Sharing Framework",
    description: "Framework for sharing cybersecurity information across blockchain networks",
    wg: "CS",
    phase: "Published",
    link: "https://app.mural.co/t/blockchaingovernanceinitiati4922/m/blockchaingovernanceinitiati4922/1740097541251/ba7756650ffa00321f091b05a9de0aae8377ad86"
  }
];

// Load program from JSON and process it
const processProgram = () => {
  const processed: any = {};
  
  Object.entries(programData.program).forEach(([day, dayData]) => {
    processed[day] = dayData.sessions.map(session => ({
      ...session,
      // Standardize room names
      room: session.room
        .replace('Hairiri', 'Hariri')
        .replace('HFSC Merman', 'HFSC Herman'),
      // Format time for open-ended sessions
      displayTime: session.time.endsWith('-') 
        ? session.time.replace('-', ' onwards')
        : session.time,
      // Generate proper detail page URLs
      detailPage: session.detailPage.includes('make one') 
        ? `/events/20251015-block13/sessions/${session.id}`
        : session.detailPage,
      // Handle empty fields
      speakers: session.speakers || 'TBD',
      moderator: session.moderator || 'TBD',
      summary: session.summary || 'Details coming soon'
    }));
  });
  
  return processed;
};

const program = processProgram();
const rooms = programData.rooms;

// Helper function to group sessions by time
const groupSessionsByTime = (sessions: any[]) => {
  const grouped: { [key: string]: any[] } = {};
  sessions.forEach(session => {
    if (!grouped[session.displayTime]) {
      grouped[session.displayTime] = [];
    }
    grouped[session.displayTime].push(session);
  });
  return grouped;
};

// Helper function to group sessions by room
const groupSessionsByRoom = (sessions: any[]) => {
  const grouped: { [key: string]: any[] } = {};
  sessions.forEach(session => {
    // Keep the full room name for HFSC/Bulldog uncertainty
    const roomKey = session.room;
    if (!grouped[roomKey]) {
      grouped[roomKey] = [];
    }
    grouped[roomKey].push(session);
  });
  return grouped;
};

// Image carousel component for rooms with multiple images
const RoomImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!images || images.length === 0) return null;
  if (typeof images === 'string') {
    return (
      <Image
        src={images}
        alt="Venue"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-t-lg"
      />
    );
  }
  
  return (
    <div className="relative">
      <Image
        src={images[currentIndex]}
        alt="Venue"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Block13Page() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2' | 'day3'>('day1');
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
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Note: Program is Tentative</h3>
            <p className="text-amber-700">
              The program below is tentative and subject to change. Final agenda will be posted closer to the event date. Follow our socials: 
              <a href="https://twitter.com/bgin_global" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900 ml-1">X (Twitter)</a> | 
              <a href="https://www.linkedin.com/company/bgin-global/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900 ml-1">LinkedIn</a>
            </p>
          </div>
          
          {/* Day Tabs */}
          <div className="block13-tabs">
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

          {/* View Toggle */}
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

          {/* Program Content */}
          <div className="space-y-6">
            {viewMode === 'time' ? (
              // Time-based view
              <div className="space-y-6">
                {Object.entries(groupSessionsByTime(program[activeDay])).map(([time, sessions]: [string, any]) => (
                  <div key={time} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">{time}</h3>
                    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                      {sessions.map((session: any, idx: number) => (
                        <div key={idx} className="block13-session-card">
                          <div className="flex flex-col">
                            <div className="block13-session-meta mb-2">
                              <span className="block13-session-room font-medium">{session.room}</span>
                              {session.wg !== 'General' && (
                                <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                                  {session.wg}
                                </span>
                              )}
                            </div>
                            <Link href={session.detailPage} className="hover:text-blue-600">
                              <h3 className="block13-session-title text-xl mb-2">{session.title}</h3>
                            </Link>
                            <p className="text-gray-600 mb-3">{session.summary}</p>
                            {(session.moderator !== 'TBD' || session.speakers !== 'TBD') && (
                              <div className="text-sm text-gray-700 space-y-1">
                                {session.moderator !== 'TBD' && (
                                  <p><span className="font-semibold">Moderator:</span> {session.moderator}</p>
                                )}
                                {session.speakers !== 'TBD' && session.speakers !== 'Optional - List of speakers' && (
                                  <p><span className="font-semibold">Speakers:</span> {session.speakers}</p>
                                )}
                              </div>
                            )}
                            {session.documents && session.documents.length > 0 && (
                              <div className="mt-3">
                                <p className="text-sm font-semibold text-gray-700 mb-1">Documents:</p>
                                {session.documents.map((doc: any, docIdx: number) => (
                                  <a
                                    key={docIdx}
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline block"
                                  >
                                    📄 {doc.title}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Room-based view
              <div className="space-y-8">
                {Object.entries(groupSessionsByRoom(program[activeDay])).map(([roomName, sessions]: [string, any]) => {
                  const roomData = Object.values(rooms).find((r: any) => 
                    r.displayName === roomName || roomName.includes(r.displayName)
                  ) || (rooms as any)[roomName];
                  
                  return (
                    <div key={roomName} className="space-y-4">
                      {/* Room header with image */}
                      <div className="rounded-lg overflow-hidden bg-white shadow-md">
                        {roomData?.image && (
                          <RoomImageCarousel images={roomData.image} />
                        )}
                        <div className="p-4 bg-gray-50">
                          <h3 className="text-xl font-bold">
                            {roomData?.displayName || roomName}
                          </h3>
                          {roomData?.capacity && (
                            <p className="text-gray-600">Capacity: {roomData.capacity}</p>
                          )}
                          {roomData?.externalLink && (
                            <a
                              href={roomData.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline text-sm"
                            >
                              Visit venue website →
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Sessions in this room */}
                      <div className="space-y-3 ml-4">
                        {sessions.map((session: any, idx: number) => (
                          <div key={idx} className="block13-session-card">
                            <div className="flex flex-col">
                              <div className="block13-session-meta mb-2">
                                <span className="block13-session-time font-bold">{session.displayTime}</span>
                                {session.wg !== 'General' && (
                                  <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {session.wg}
                                  </span>
                                )}
                              </div>
                              <Link href={session.detailPage} className="hover:text-blue-600">
                                <h4 className="block13-session-title text-lg">{session.title}</h4>
                              </Link>
                              <p className="text-gray-600 mt-1">{session.summary}</p>
                              {(session.moderator !== 'TBD' || session.speakers !== 'TBD') && (
                                <div className="text-sm text-gray-700 mt-2 space-y-1">
                                  {session.moderator !== 'TBD' && (
                                    <p><span className="font-semibold">Moderator:</span> {session.moderator}</p>
                                  )}
                                  {session.speakers !== 'TBD' && session.speakers !== 'Optional - List of speakers' && (
                                    <p><span className="font-semibold">Speakers:</span> {session.speakers}</p>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
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
                  <span className={`block13-phase-indicator ${project.phase.toLowerCase()}`}>{project.phase}</span>
                </div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{project.description}</p>
                {project.title === "Agent Standards and Frameworks" ? (
                  <Link
                    href="https://lu.ma/tfqvop6t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block13-btn-primary inline-flex items-center gap-2 mt-auto"
                  >
                    Join Webinar
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ) : project.link ? (
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
        </section>

        {/* Featured Publications */}
        <section className="block13-section">
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
        </section>

        {/* Agent GovHack Section (refined) */}
        <section className="block13-section">
          <h2 className="block13-section-title">BGIN Agent GovHack</h2>
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500 text-white px-3 py-1 text-xs font-semibold shadow-sm">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Policy → Code
            </span>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-white p-6 border border-gray-200">
              <p className="text-gray-700 max-w-3xl mb-8">
                A focused hackathon at Block 13 where policy discussions turn into working software through agent-mediated standards and programmable governance. Agents build; people align on shared understanding.
              </p>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Overview */}
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

                {/* Event Flow */}
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

                {/* Who Should Join */}
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

                {/* What You'll Gain */}
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

              <div className="flex items-center justify-center gap-4 mt-8">
                <Link
                  href="https://gamma.app/docs/BGIN-Agent-GovHack-Transforming-Blockchain-Standards-into-Executa-2izvapa1dgz17fs?mode=doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block13-btn-secondary"
                >
                  View GovHack Brief
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Locations */}
        <section className="block13-section">
          <h2 className="block13-section-title">Venue Locations</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6">Main Venues</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="block13-card">
                <Image
                  src="/images/Events/block13/Leavey Program Room (Cap 72).jpeg"
                  alt="Leavey Program Room"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Leavey Program Room</h4>
                <p className="text-gray-600">Capacity: 72 attendees</p>
                <p className="text-sm text-gray-500 mt-2">Primary venue for Day 1 sessions</p>
              </div>
              
              <div className="block13-card">
                <Image
                  src="/images/Events/block13/Leavey Bulldog Alley (Cap 150).jpeg"
                  alt="Leavey Bulldog Alley"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Leavey Bulldog Alley</h4>
                <p className="text-gray-600">Capacity: 150 attendees</p>
                <p className="text-sm text-gray-500 mt-2">Large conference space for major sessions</p>
              </div>
              
              <div className="block13-card">
                <Image
                  src="/images/Events/block13/Arrupe Hall (Cap 50).jpeg"
                  alt="Arrupe Hall"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Arrupe Hall</h4>
                <p className="text-gray-600">Capacity: 50 attendees</p>
                <p className="text-sm text-gray-500 mt-2">Intimate setting for working group sessions</p>
              </div>
              
              <div className="block13-card">
                <Image
                  src="/images/Events/block13/HFSC Herman Meeting Rm.jpeg"
                  alt="HFSC Herman Meeting Room"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">HFSC Herman Meeting Room</h4>
                <p className="text-gray-600">Board room style seating</p>
                <p className="text-sm text-gray-500 mt-2">Executive sessions and industry presentations</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6">Building Exteriors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="block13-card">
                <Image
                  src="/images/Events/block13/Hairiri - outisde.png"
                  alt="Hariri Building Exterior"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Hariri Building</h4>
                <p className="text-gray-600">Modern conference facility</p>
              </div>
              
              <div className="block13-card">
                <Image
                  src="/images/Events/block13/Arrupe Hall - outside.png"
                  alt="Arrupe Hall Exterior"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Arrupe Hall</h4>
                <p className="text-gray-600">Historic campus building</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/venues" className="block13-btn-secondary">
              View All Venue Details
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
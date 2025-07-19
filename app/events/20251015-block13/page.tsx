"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/block13.css";

// Sample data - in a real implementation, this would come from a CMS or API
const keyProjects = [
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
    link: ""
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

const publications = [
  {
    id: 1,
    title: "Blockchain Governance Framework 2025",
    summary: "Comprehensive guide to blockchain governance best practices",
    image: "/images/Events/Block5.jpeg",
    link: "#"
  },
  {
    id: 2,
    title: "ISO TC307 Liaison Report",
    summary: "Latest developments in international blockchain standards",
    image: "/images/Events/Block6.png", 
    link: "#"
  },
  {
    id: 3,
    title: "G20 Implementation Guide",
    summary: "Implementing G20 Osaka communiqué recommendations",
    image: "/images/Events/Block7.jpeg",
    link: "#"
  }
];

const sponsors = [
  { id: 1, name: "Example Corp", logo: "/images/About/01.svg", website: "https://example.com" },
  { id: 2, name: "Tech Partners", logo: "/images/About/02.svg", website: "https://techpartners.com" },
  { id: 3, name: "Blockchain Foundation", logo: "/images/About/FINSUM_2019.svg", website: "https://blockchain.org" }
];

// !Comment out the current TBD program and activate the finalized version
const program = {
  day1: [
    {
      title: "Opening Ceremony & Welcome",
      time: "09:00-10:00",
      room: "Main Hall",
      summary: "Welcome to BGIN Block 13 - Setting the stage for blockchain governance",
      wg: "General",
      link: "#"
    },
    {
      title: "Blockchain Forensics Standards Workshop",
      time: "10:30-12:00", 
      room: "Room A",
      summary: "Latest developments in blockchain forensics and analytics methodologies",
      wg: "IKP",
      link: "#"
    },
    {
      title: "Wallet Governance Panel",
      time: "14:00-15:30",
      room: "Room B", 
      summary: "Authentication processes, key management, and governance frameworks",
      wg: "IKP",
      link: "#"
    },
    {
      title: "Agent Standards Discussion",
      time: "16:00-17:30",
      room: "Room A",
      summary: "Building standards for blockchain agents and agentic competition",
      wg: "IKP",
      link: "#"
    }
  ],
  day2: [
    {
      title: "Stablecoin Regulatory Panel", 
      time: "09:00-10:30",
      room: "Main Hall",
      summary: "Policy priorities for stablecoin regulation across jurisdictions",
      wg: "FASE",
      link: "#"
    },
    {
      title: "Cross-Border Payment Innovation",
      time: "11:00-12:30",
      room: "Room B",
      summary: "CBDC interoperability and cross-border payment solutions",
      wg: "FASE", 
      link: "#"
    },
    {
      title: "Cybersecurity Information Sharing",
      time: "14:00-15:30", 
      room: "Room A",
      summary: "International frameworks for cybersecurity information sharing",
      wg: "CS",
      link: "#"
    },
    {
      title: "Working Group Breakouts",
      time: "16:00-17:30",
      room: "Multiple Rooms",
      summary: "Parallel sessions for IKP, FASE, and CS working groups",
      wg: "All",
      link: "#"
    }
  ],
  day3: [
    {
      title: "Technical Standards Harmonization",
      time: "09:00-10:30",
      room: "Main Hall", 
      summary: "Aligning technical standards across blockchain networks",
      wg: "IKP",
      link: "#"
    },
    {
      title: "Implementation Case Studies",
      time: "11:00-12:30",
      room: "Room A",
      summary: "Real-world implementations of BGIN standards and frameworks",
      wg: "All",
      link: "#"
    },
    {
      title: "Future Roadmap & Next Steps",
      time: "14:00-15:30",
      room: "Main Hall",
      summary: "Planning the future of blockchain governance and BGIN's role",
      wg: "General",
      link: "#"
    },
    {
      title: "Closing Ceremony",
      time: "16:00-17:00", 
      room: "Main Hall",
      summary: "Wrap-up and preparation for Block 14",
      wg: "General",
      link: "#"
    }
  ]
};

/* 
// TBD Program version - uncomment to show "coming soon" version
const program = {
  day1: [
    {
      title: "Program details coming soon",
      time: "TBA",
      room: "TBA",
      summary: "Detailed program schedule will be announced closer to the event date",
      wg: "General",
      link: "#"
    }
  ],
  day2: [
    {
      title: "Program details coming soon",
      time: "TBA",
      room: "TBA",
      summary: "Detailed program schedule will be announced closer to the event date",
      wg: "General",
      link: "#"
    }
  ],
  day3: [
    {
      title: "Program details coming soon",
      time: "TBA",
      room: "TBA",
      summary: "Detailed program schedule will be announced closer to the event date",
      wg: "General",
      link: "#"
    }
  ]
};
*/

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
          <p>October 15-17, 2025 | Washington, D.C.</p>
          <a href="#participation" className="block13-btn-primary">
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
        <section className="block13-section">
          <h2 className="block13-section-title">Program</h2>
          {/* 
          //! TBD version - uncomment to show "coming soon" message
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Program Coming Soon</h3>
            <p className="text-blue-700">
              The detailed program schedule is currently being finalized. Please check back soon for updates on sessions, speakers, and timing.
            </p>
          </div>
          */}
          
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
          <div className="space-y-4">
            {viewMode === 'time' ? (
              [...program[activeDay]]
                .sort((a, b) => {
                  const getStart = (t: string) => {
                    const match = t.match(/^(\d{2}):(\d{2})/);
                    return match ? parseInt(match[1] + match[2], 10) : 0;
                  };
                  return getStart(a.time) - getStart(b.time);
                })
                .map((session: typeof program[typeof activeDay][number], index: number) => (
                  <div key={index} className="block13-session-card">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="block13-session-meta">
                          <span className="block13-session-time">{session.time}</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="block13-session-room">{session.room}</span>
                          <span className={`block13-wg-badge ${session.wg === 'All' ? 'general' : session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                            {session.wg}
                          </span>
                        </div>
                        <h3 className="block13-session-title">{session.title}</h3>
                        <p className="text-gray-600">{session.summary}</p>
                      </div>
                      {session.link && session.link !== "#" && (
                        <Link href={session.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                          Details →
                        </Link>
                      )}
                    </div>
                  </div>
                ))
            ) : (
              Object.entries(
                program[activeDay].reduce((acc, session) => {
                  acc[session.room] = acc[session.room] || [];
                  acc[session.room].push(session);
                  return acc;
                }, {} as Record<string, typeof program[typeof activeDay]>)
              ).map(([room, sessions]) => (
                <div key={room}>
                  <h4 className="text-lg font-semibold mb-2">{room}</h4>
                  <div className="space-y-2">
                    {sessions.map((session: typeof program[typeof activeDay][number], idx: number) => (
                      <div key={idx} className="block13-session-card">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="block13-session-meta">
                              <span className="block13-session-time">{session.time}</span>
                              <span className="text-sm text-gray-500">•</span>
                              <span className={`block13-wg-badge ${session.wg === 'All' ? 'general' : session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                                {session.wg}
                              </span>
                            </div>
                            <h3 className="block13-session-title">{session.title}</h3>
                            <p className="text-gray-600">{session.summary}</p>
                          </div>
                          {session.link && session.link !== "#" && (
                            <Link href={session.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                              Details →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="block13-section">
          <h2 className="block13-section-title">Key Research Projects</h2>
          <div className="block13-grid block13-grid-3">
            {keyProjects.map((project) => (
              <div key={project.id} className={`block13-card block13-wg-card ${project.wg.toLowerCase()} flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`block13-wg-badge ${project.wg.toLowerCase()}`}>
                    {project.wg}
                  </span>
                  <span className={`block13-phase-indicator ${project.phase.toLowerCase()}`}>{project.phase}</span>
                </div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{project.description}</p>
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
        </section>

        {/* Featured Publications */}
        <section className="block13-section">
          <h2 className="block13-section-title">Featured Publications</h2>
          {/*
          //! TBD version - uncomment to show "coming soon" message
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Publications Coming Soon</h3>
            <p className="text-blue-700">
              Featured publications for Block 13 are currently being selected. Check the Key Research Projects section above for available documents.
            </p>
          </div>
          */}
          
          <div className="block13-grid block13-grid-3">
            {publications.map((pub) => (
              <div key={pub.id} className="block13-card">
                <div className="block13-publication-image">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    width={200}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="block13-publication-content">
                  <h4 className="block13-publication-title">{pub.title}</h4>
                  <p className="block13-publication-summary">{pub.summary}</p>
                  <Link href={pub.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="https://bgin-global.org/activities" className="block13-btn-secondary">
              View All Past Publications
            </Link>
          </div>
        </section>

      {/* Sponsors Section */}
      {/* <section className="block13-section">
        <h2 className="block13-section-title">Sponsors</h2>
        <div className="block13-sponsor-grid">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="block13-sponsor-card">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* Access & Venue Information */}
      <section className="block13-section">
        <h2 className="block13-section-title">Access & Venue</h2>
        {/*
        //! TBD version - uncomment to show "coming soon" message
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Venue Details Coming Soon</h3>
          <p className="text-blue-700">
            The specific venue location in Washington, D.C. is currently being finalized. Please check back for updates on the exact address and venue details.
          </p>
        </div>
        */}
        
        <div className="block13-venue-grid">
          <div>
            <h4 className="font-semibold mb-2">The Willard InterContinental Washington</h4>
            <p className="text-gray-600 mb-4">
              1401 Pennsylvania Avenue NW<br/>
              Washington, D.C. 20004<br/>
              United States
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Metro Access:</strong> Metro Center Station (Red, Blue, Orange, Silver lines)</p>
              <p><strong>Airport:</strong> 45 minutes from Reagan National Airport</p>
              <p><strong>Accommodation:</strong> Special BGIN rate available - Use code "BGIN2025"</p>
            </div>
          </div>
          <div className="block13-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1739478897734!2d-77.03424708463859!3d38.89511917957186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20Willard%20InterContinental%20Washington!5e0!3m2!1sen!2sus!4v1234567890"
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
        
        <div className="mt-8">
          <h4 className="font-semibold mb-4">Meeting Rooms</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <Image
                src="/images/Events/venue/sydney_startuphub.jpg"
                alt="Main Hall"
                width={180}
                height={100}
                className="object-cover rounded-md mb-2"
              />
              <h5 className="font-medium mb-2">Main Hall</h5>
              <p className="text-sm text-gray-600 text-center">Capacity: 300 | Plenary sessions</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <Image
                src="/images/Events/venue/roomA.jpeg"
                alt="Room A"
                width={180}
                height={100}
                className="object-cover rounded-md mb-2"
              />
              <h5 className="font-medium mb-2">Room A</h5>
              <p className="text-sm text-gray-600 text-center">Capacity: 100 | Working group sessions</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <Image
                src="/images/Events/venue/roomB.jpeg"
                alt="Room B"
                width={180}
                height={100}
                className="object-cover rounded-md mb-2"
              />
              <h5 className="font-medium mb-2">Room B</h5>
              <p className="text-sm text-gray-600 text-center">Capacity: 80 | Panel discussions</p>
            </div>
          </div>
        </div>
      </section>

        {/* Participation Info */}
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
                  <p className="text-sm text-gray-600 mb-4">
                    Registration opens soon. Limited capacity - register early to secure your spot.
                  </p>
                  <button className="block13-btn-primary opacity-50 cursor-not-allowed" disabled>
                   	Register Now
                  </button>
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

        {/* Sponsors & Partners */}
        {/* //! Uncomment if sponsors and partners not finalized yet
        <h2 className="block13-section-title text-center">Sponsors & Partners</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Sponsors & Partners Coming Soon</h3>
            <p className="text-blue-700">
              We are currently finalizing partnerships and sponsorship opportunities for Block 13. Please check back for updates on our event sponsors and partners.
            </p>
          </div>  */}

        <section className="block13-section">
        <h2 className="block13-section-title text-center mb-2">Sponsors & Partners</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Thank you to our sponsors and partners for supporting global blockchain governance.
        </p>
        <div className="flex flex-col gap-10 items-center">
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4 text-center">Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-12">
              <img src="/images/Events/sponsor/AWIC.jpg" alt="Sponsor AWIC" className="h-28 w-auto max-w-xs rounded-md shadow" />
              <img src="/images/Events/sponsor/bitbank.png" alt="Sponsor Bitbank" className="h-28 w-auto max-w-xs rounded-md shadow" />
              <img src="/images/Events/sponsor/Chainalysis.jpg" alt="Sponsor Chainalysis" className="h-28 w-auto max-w-xs rounded-md shadow" />
              {/* Add more <img> tags for additional sponsors as needed */}
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4 text-center">Partners</h3>
            <div className="flex flex-wrap justify-center gap-12">
              <img src="/images/Events/sponsor/JDD.png" alt="Partner JDD" className="h-28 w-auto max-w-xs rounded-md shadow" />
              <img src="/images/Events/sponsor/mercari.png" alt="Partner Mercari" className="h-28 w-auto max-w-xs rounded-md shadow" />
              <img src="/images/Events/sponsor/NRI.png" alt="Partner NRI" className="h-28 w-auto max-w-xs rounded-md shadow" />
              {/* Add more <img> tags for additional partners as needed */}
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-sm text-gray-600 mb-2">Interested in sponsoring or partnering for Block 13?</p>
          <a href="mailto:bgin_admin@bg2x.org" className="text-blue-600 hover:text-blue-800 font-semibold">
            Contact Us →
          </a>
        </div>
      </section>

        {/* CTA Section */}
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

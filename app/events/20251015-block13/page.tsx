"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/block13.css";

// Sample data - in a real implementation, this would come from a CMS or API
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
  { name: "Example Corp", logo: "/images/About/01.svg", website: "https://example.com" },
  { name: "Tech Partners", logo: "/images/About/02.svg", website: "https://techpartners.com" },
  { name: "Blockchain Foundation", logo: "/images/About/FINSUM_2019.svg", website: "https://blockchain.org" }
];

// Program content - to be finalized
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

/* 
// Future program content - uncomment and update when finalized
const program = {
  day1: [
    {
      title: "Opening Ceremony",
      time: "09:00-10:00",
      room: "Main Hall",
      summary: "Welcome and introduction to Block #13",
      wg: "General",
      link: "#"
    },
    {
      title: "Blockchain Forensics Standards Workshop",
      time: "10:30-12:00", 
      room: "Room A",
      summary: "Latest developments in blockchain forensics and analytics",
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
    }
  ],
  day3: [
    {
      title: "Cybersecurity Information Sharing Workshop",
      time: "09:00-12:00",
      room: "Room C", 
      summary: "Hands-on session on cybersecurity frameworks for blockchain",
      wg: "CS",
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
          <p>October 15–17, 2025 | Washington, D.C.</p>
          <a href="#participation" className="block13-btn-primary">
            Register Now
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* BGIN Overview Block: Headers Inside Cards, Aligned */}
      <section className="block13-section">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-8">
          {/* BGIN Value Introduction */}
            {/* BGIN Value Introduction */}
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-start">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
                Founded for Global Standardization
              </h2>
              <p className="text-lg text-gray-800 mb-4 text-center font-semibold" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
                Founded in response to the 2019 G20 Osaka Communiqué, BGIN connects open innovation with global standardization.
              </p>
              <ul className="mt-2 space-y-2 text-base md:text-lg text-gray-900 text-left w-full font-medium" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
                <li>
                  <span className="font-semibold text-blue-600">From Regulators to Cipherpunks:</span> A forum for diverse stakeholders
                </li>
                <li>
                  <span className="font-semibold text-green-600">Permissionless Participation:</span> Open discussions for everyone
                </li>
                <li>
                  <span className="font-semibold text-purple-600">International Standardization:</span> Category A Liaison to ISO/TC 307, contributing to national procurement standards under WTO/TBT agreements
                </li>
                <li>
                  <span className="font-semibold text-orange-500">Global Collaboration:</span> Bridging regions and disciplines for impactful change
                </li>
              </ul>
            </div>
            {/* Block 13: Standardization Activities */}
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-start">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
                Block 13: Standardization in Action
              </h2>
              <p className="text-lg text-gray-800 mb-4 text-center font-semibold" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
                Block 13 is not just an event—it is an integral part of the standardization process. The work here shapes global standards and drives real change in digital infrastructure.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-900 text-left w-full font-medium" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
                <li><span className="text-blue-600 font-semibold">Proposals and review sessions</span> for editing existing standard documents</li>
                <li><span className="text-green-600 font-semibold">Decisions on publishing</span> mature documents</li>
                <li><span className="text-purple-600 font-semibold">Proposing and approving</span> new standardization projects</li>
                <li><span className="text-orange-500 font-semibold">Preliminary discussions</span> to explore new standardization topics</li>
              </ul>
            </div>
        </div>
      </section>

      <div className="block13-section-container">
        {/* Program Section */}
        <section className="block13-section">
          <h2 className="block13-section-title">Program</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2 " style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Program Coming Soon</h3>
            <p className="text-blue-700">
              The detailed program schedule is currently being finalized. Please check back soon for updates on sessions, speakers, and timing.
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
          <div className="space-y-4">
            {program[activeDay].map((session, index) => (
              <div key={index} className="block13-session-card opacity-60">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="block13-session-meta">
                      <span className="block13-session-time">{session.time}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="block13-session-room">{session.room}</span>
                      <span className={`block13-wg-badge ${session.wg.toLowerCase()}`}>
                        {session.wg}
                      </span>
                    </div>
                    <h3 className="block13-session-title">{session.title}</h3>
                    <p className="text-gray-600">{session.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Critical Projects Section */}
        <section className="block13-section">
          <h2 className="block13-section-title">Key Projects</h2>
          <div className="block13-grid block13-grid-3">
            {criticalProjects.map((project) => (
              <div key={project.id} className={`block13-card block13-wg-card ${project.wg.toLowerCase()} flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`block13-wg-badge ${project.wg.toLowerCase()}`}>
                    {project.wg}
                  </span>
                  <span className={`block13-phase-indicator ${project.phase.toLowerCase()}`}>{project.phase}</span>
                </div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-3 " style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{project.description}</p>
                {project.link ? (
                  <Link href={project.link} className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
                    View Document →
                  </Link>
                ) : (
                  <span className="text-gray-400 font-semibold mt-auto " style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
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
            <h3 className="text-lg font-semibold text-blue-800 mb-2 " style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Publications Coming Soon</h3>
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

        {/* Access & Venue Information */}
        <section className="block13-section">
          <h2 className="block13-section-title">Access & Venue</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2 " style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Venue Details Coming Soon</h3>
            <p className="text-blue-700">
              The specific venue location in Washington, D.C. is currently being finalized. Please check back for updates on the exact address and venue details.
            </p>
          </div>
          <div className="block13-venue-grid">
            <div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Location</h4>
              <p className="text-gray-600 mb-4">
                Washington, D.C.<br/>
                United States
              </p>
              <p className="text-sm text-gray-500">
                Specific venue address to be announced
              </p>
            </div>
            <div className="block13-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99516.16817810178!2d-77.08493561718749!3d38.89767492345634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1234567890"
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

      {/* Ticket Pricing Info */}
        <section id="ticket-pricing" className="block13-section">
        <h2 className="block13-section-title">Ticket Pricing</h2>
        <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-900 font-medium" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
          <li><span className="font-semibold">General Admission:</span> 100 USD</li>
          <li><span className="font-semibold">One-day ticket:</span> 40 USD</li>
          <li><span className="font-semibold">Online ticket:</span> 50 USD</li>
          <li><span className="font-semibold">Contributors:</span> Free (for those submitting written contributions to our standardization projects)</li>
        </ul>
        </section>

        {/* Participation Info */}
        <section id="participation" className="block13-section">
          <div className="block13-card bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h2 className="block13-section-title">Who Should Join</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Perfect for:</h3>
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
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Why It Matters:</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Join the premier forum where blockchain governance decisions are made. Your participation directly impacts 
                  international standards that will shape the future of digital economic networks.
                </p>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Registration Information</h4>
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
        <section className="block13-section">
          <h2 className="block13-section-title text-center">Sponsors & Partners</h2>
          <div className="flex flex-col items-center justify-center mb-6">
            <h3 className="text-lg font-semibold text-black mb-2" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Sponsors</h3>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-blue-700 mb-4">
              Sponsors for Block 13 are to be determined. Please check back for updates.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mb-6">
            <h3 className="text-lg font-semibold text-black mb-2" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Partners</h3>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <a
              href="https://finpolicy.georgetown.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Image
          src="/images/Events/sponsor/psaros.jpeg"
          alt="Psaros"
          width={120}
          height={60}
          className="object-contain rounded-lg mb-2"
              />
              <span className="text-gray-700 font-semibold" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
          Psaros
              </span>
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
                        <div className="text-4xl leading-[50px] font-medium font-FamiljenGrotesk" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>Join the Discussion</div>
                        <div className="text-lg leading-[19px] font-Inter" style={{ fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
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

"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import {
  BLOCK15_KEY_HUBS,
  BLOCK15_META,
  BLOCK15_REGISTER,
  BLOCK15_WHO,
} from "@/contents/block15Promo";
import { getHubBySlug } from "@/contents/projectHubs";
import WgChip from "@/components/WgChip";
import JoinDiscussionBand from "@/components/JoinDiscussionBand";
import ProgramTimetable from "@/components/events/block15/ProgramTimetable";
import {
  BLOCK15_TIME_ORDER,
  getBreakTitle,
  groupSessionsByRoom,
  groupSessionsByTime,
  processProgram,
} from "@/lib/block15-helpers";
import "@/styles/block13.css";
import { CUSTOM_STYLES } from "@/styles/custom";

const program = processProgram();

function FoldSummary({ title, blurb }: { title: string; blurb: string }) {
  return (
    <summary className="cursor-pointer list-none py-3 [&::-webkit-details-marker]:hidden">
      <div className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 px-4 py-3.5 transition-colors hover:border-blue-700 hover:bg-blue-50/50">
        <div className="min-w-0 flex-1">
          <div className="font-FamiljenGrotesk text-lg font-semibold text-gray-900 leading-snug">
            {title}
          </div>
          <p className="mt-1 text-sm text-gray-600 font-Inter font-normal leading-relaxed max-w-3xl">
            {blurb}
          </p>
          <span className="mt-2.5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-open:hidden">
            Show more
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span className="mt-2.5 hidden items-center gap-1 text-sm font-semibold text-gray-600 group-open:inline-flex">
            Show less
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </span>
        </div>
        <span
          className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-700 text-blue-700 text-lg font-semibold leading-none group-open:bg-blue-700 group-open:text-white"
          aria-hidden="true"
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </div>
    </summary>
  );
}

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
  const [viewMode, setViewMode] = useState<'time' | 'room'>('time');

  /**
   * Place-first carousel (travel motivation): city/landmark → venue exterior.
   * Skip empty meeting-room stills — they don’t sell travel.
   */
  const heroImages = [
    { src: "/images/Events/Block3.jpeg", alt: "Washington, D.C." },
    {
      src: "/images/Events/block13/Arrupe Hall - outside.png",
      alt: "Georgetown University venue exterior — Arrupe Hall",
    },
    {
      src: "/images/Events/block13/Hairiri - outisde.png",
      alt: "Georgetown University venue exterior — Hariri Building",
    },
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const FOLDABLE_SECTION_IDS = [
    "what-is-block-meeting",
    "stablecoin-payment",
    "related-events",
    "participation",
    "past-events",
  ] as const;

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id || !(FOLDABLE_SECTION_IDS as readonly string[]).includes(id)) return;
      const el = document.getElementById(id);
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);


  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      {/* Place photo hero — travel motivation (Block 14 pattern), house CTAs */}
      <section
        id="registration"
        className="block13-hero"
        style={{ position: "relative" }}
        aria-label="Block 15 registration"
      >
        <div className="absolute inset-0" style={{ zIndex: 1, pointerEvents: "none" }}>
          {heroImages.map((img, index) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentHeroImage ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>
        <div
          className="absolute inset-0 bg-slate-950/55"
          style={{ zIndex: 2, pointerEvents: "none" }}
        />
        <div
          className="block13-hero-content"
          style={{ position: "relative", zIndex: 50 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200 mb-3">
            BGIN · Next Block meeting
          </p>
          <h1>{BLOCK15_META.title}</h1>
          <p>
            {BLOCK15_META.when} · {BLOCK15_META.where}
          </p>
          <p className="text-base md:text-lg font-semibold text-white drop-shadow-md mt-2 mb-4 flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-white border border-white/70 bg-black/50 text-sm font-semibold">
              Hybrid — remote participation available
            </span>
          </p>
          <p className="text-base text-white/90 max-w-xl mx-auto mb-8 leading-relaxed drop-shadow">
            {BLOCK15_META.why}
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ position: "relative", zIndex: 51, pointerEvents: "auto" }}
          >
            <a
              href={BLOCK15_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
            >
              Register on Eventbrite
            </a>
            <a
              href="#why-attend"
              className="text-sm font-medium text-white underline underline-offset-2 hover:text-blue-100"
            >
              Why attend →
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80 leading-7 max-w-sm mx-auto">
            Card payment open now.
            <br />
            <a
              href="#stablecoin-payment"
              className="underline hover:text-white"
            >
              USDC on Ethereum
            </a>{" "}
            available closer to the event.
          </p>
        </div>
      </section>

      <section
        className="py-3 px-4 border-b border-blue-700 bg-blue-700"
        aria-label="Participation format"
      >
        <div className="max-w-4xl mx-auto text-center text-sm text-blue-50">
          <strong className="text-white">Remote participants welcome.</strong>{" "}
          Connection details are sent after registration.
        </div>
      </section>

      <nav
        className="sticky top-0 z-30 bg-white border-b border-gray-200 py-3 px-4"
        aria-label="Jump to section"
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          <a href="#why-attend" className="font-medium text-gray-700 hover:text-blue-700">
            Why attend
          </a>
          <a href="#program" className="font-medium text-gray-700 hover:text-blue-700">
            Program
          </a>
          <a href="#critical-projects" className="font-medium text-gray-700 hover:text-blue-700">
            Key projects
          </a>
          <a href="#access-venue" className="font-medium text-gray-700 hover:text-blue-700">
            Venue
          </a>
          <a href="#contributions" className="font-medium text-gray-700 hover:text-blue-700">
            Fee waiver
          </a>
          <a
            href={BLOCK15_REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-3 py-1 rounded-md bg-blue-700 text-white text-xs font-semibold hover:bg-blue-800"
          >
            Register
          </a>
        </div>
      </nav>

      {/* Why attend / Who should come — conversion-first */}
      <section id="why-attend" className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} text-gray-900 mb-3`}>
                Why attend Block 15 now
              </h2>
              <p className={`${CUSTOM_STYLES.TYPE.LEDE} text-gray-700 mb-4`}>
                {BLOCK15_META.why}
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>
                  <strong className="text-gray-900">Themes in focus:</strong>{" "}
                  PQC migration, cybersecurity information sharing, Security AI
                  Agent, ST/PP, Common Lexicon.
                </li>
                <li>
                  <strong className="text-gray-900">Format:</strong>{" "}
                  {BLOCK15_META.format}. In-person in {BLOCK15_META.where}.
                </li>
                <li>
                  <strong className="text-gray-900">Fee waiver:</strong>{" "}
                  Contributors who submit written work and present receive a
                  full registration waiver.{" "}
                  <a href="#contributions" className="text-blue-700 underline">
                    How to apply →
                  </a>
                </li>
                <li>
                  <strong className="text-gray-900">Program:</strong>{" "}
                  Two-day timetable published — see{" "}
                  <a href="#program" className="text-blue-700 underline">
                    Program
                  </a>
                  . Session details may be updated as chairs finalize agendas.
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href={BLOCK15_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
                >
                  Register on Eventbrite
                </a>
                <a
                  href="#critical-projects"
                  className="text-sm font-medium text-blue-700 underline underline-offset-2"
                >
                  Key project hubs →
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Who should come
              </h3>
              <ul className="space-y-3">
                {BLOCK15_WHO.map((item) => (
                  <li
                    key={item.label}
                    className="border-l-4 border-blue-700 pl-3"
                  >
                    <div className="text-sm font-semibold text-gray-900">
                      {item.label}
                    </div>
                    <p className="text-sm text-gray-600 mt-0.5">{item.body}</p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Prepare via hubs:{" "}
                {BLOCK15_KEY_HUBS.map((h, i) => (
                  <span key={h.slug}>
                    {i > 0 && " · "}
                    <Link
                      href={`/projects/${h.slug}`}
                      className="text-blue-700 hover:underline"
                    >
                      {h.title}
                    </Link>
                  </span>
                ))}
              </p>
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
            <div className="bg-blue-50 border border-blue-200 rounded-md p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Program published
              </h3>
              <p className="text-blue-700">
                The Block 15 timetable is below (parallel sessions in Room A, Room B, and Open Space).
                Tea break 11:20–11:30, lunch 13:00–14:00, and tea break 15:30–15:40 each day.
                Follow our socials:
                <a href="https://twitter.com/bgin_global" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 ml-1">X (Twitter)</a> |
                <a href="https://www.linkedin.com/company/blockchain-governance-initiative-network/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 ml-1">LinkedIn</a>
              </p>
            </div>
          </div>

          <div className="mb-8">
            <ProgramTimetable />
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

          <p className="text-sm text-gray-500 mb-4">
            {activeDay === 'day1' ? 'Day 1 – October 15, 2026' : 'Day 2 – October 16, 2026'}
          </p>

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
              <div className="space-y-6">
                {BLOCK15_TIME_ORDER[activeDay].map((time) => {
                  const breakTitle = getBreakTitle(activeDay, time);
                  if (breakTitle) {
                    return (
                      <div key={time} className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">{time}</h3>
                        <div className="block13-session-card bg-gray-50">
                          <h3 className="block13-session-title">{breakTitle}</h3>
                        </div>
                      </div>
                    );
                  }

                  const sessions = (groupSessionsByTime(program[activeDay] as Parameters<typeof groupSessionsByTime>[0])[time] ?? []);
                  if (sessions.length === 0) return null;

                  return (
                    <div key={time} className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">{time}</h3>
                      <div className="space-y-2">
                        {sessions.map((session, idx) => (
                          <Link
                            key={idx}
                            href={String(session.detailPage)}
                            className="block no-underline"
                          >
                            <div className="block13-session-card cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex flex-row justify-between items-start mb-1">
                              <div className="flex items-center gap-2 flex-grow">
                                <h3 className="block13-session-title">{String(session.title)}</h3>
                              </div>
                              <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                                <span className="text-sm text-gray-600 font-medium">{session.room}</span>
                                {session.wg !== 'General' && (
                                  <span className={`block13-wg-badge ${String(session.wg).toLowerCase().replace(/\s+/g, '-')}`}>
                                    {String(session.wg)}
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{String(session.summary)}</p>
                            {Array.isArray(session.relatedProjectSlugs) &&
                              session.relatedProjectSlugs.length > 0 && (
                                <div className="mt-1 flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-semibold text-gray-500">
                                    Related projects:
                                  </span>
                                  {(session.relatedProjectSlugs as string[]).map(
                                    (slug) => {
                                      const hub = getHubBySlug(slug);
                                      if (!hub) return null;
                                      return (
                                        <span
                                          key={slug}
                                          className="text-xs text-blue-700 underline"
                                        >
                                          {hub.shortTitle ?? hub.title}
                                        </span>
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            {(session.sessionChair !== 'TBD' || session.contributors !== 'TBD') && (
                              <div className="text-xs text-gray-700 flex flex-wrap gap-3">
                                {session.sessionChair !== 'TBD' && (
                                  <span><span className="font-semibold">Chair:</span> {String(session.sessionChair)}</span>
                                )}
                                {session.contributors !== 'TBD' && (
                                  <span><span className="font-semibold">Speaker:</span> {String(session.contributors)}</span>
                                )}
                              </div>
                            )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupSessionsByRoom(program[activeDay] as Parameters<typeof groupSessionsByRoom>[0])).map(([room, sessions]) => (
                  <div key={room} className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">{room}</h3>
                    <div className="space-y-2">
                      {sessions.map((session, idx) => (
                        <Link
                          key={idx}
                          href={String(session.detailPage)}
                          className="block no-underline"
                        >
                          <div className="block13-session-card cursor-pointer hover:shadow-md transition-shadow">
                          <div className="flex flex-row justify-between items-start mb-1">
                            <h3 className="block13-session-title">{String(session.title)}</h3>
                            <span className="text-sm text-gray-600 font-medium ml-3">{String(session.displayTime ?? session.time)}</span>
                          </div>
                          <p className="text-sm text-gray-600">{String(session.summary)}</p>
                          {Array.isArray(session.relatedProjectSlugs) &&
                            session.relatedProjectSlugs.length > 0 && (
                              <div className="mt-1 flex flex-wrap items-center gap-2">
                                <span className="text-xs font-semibold text-gray-500">
                                  Related projects:
                                </span>
                                {(session.relatedProjectSlugs as string[]).map(
                                  (slug) => {
                                    const hub = getHubBySlug(slug);
                                    if (!hub) return null;
                                    return (
                                      <span
                                        key={slug}
                                        className="text-xs text-blue-700 underline"
                                      >
                                        {hub.shortTitle ?? hub.title}
                                      </span>
                                    );
                                  }
                                )}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Key Projects */}
        <section id="critical-projects" className="block13-section">
          <h2 className="block13-section-title">Key Projects</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Priority hubs for Block 15. Open a hub for status, documents, and how
            to participate. Finished study reports stay under Publications.
          </p>
          <ul className="space-y-3 mb-8">
            {BLOCK15_KEY_HUBS.map((p) => {
              const hub = getHubBySlug(p.slug);
              if (!hub) return null;
              return (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${hub.slug}`}
                    className="block bg-white border border-gray-200 rounded-md px-4 py-3 hover:border-blue-700 transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <WgChip wg={hub.wg} />
                      <span className="font-semibold text-gray-900">
                        {p.title}
                      </span>
                      <span className="text-blue-700 text-sm font-medium">
                        →
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {hub.pitch}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-gray-700">
            <Link href="/projects" className="text-blue-700 underline font-medium">
              All active project hubs →
            </Link>
            {" · "}
            <Link href="/publications" className="text-blue-700 underline font-medium">
              Publications →
            </Link>
          </p>
        </section>

        {/* Sponsors & Partners */}
        <section id="sponsors" className="block13-section">
          <h2 className="block13-section-title text-center">Sponsors & Partners</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-md p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Coming Soon</h3>
            <p className="text-blue-700 text-center">
              Sponsors and partners for Block 15 are currently being finalized. If you are interested in sponsoring Block 15, please contact us at{" "}
              <a href="mailto:bgin_admin@bg2x.org" className="text-blue-800 font-semibold hover:underline">
                bgin_admin@bg2x.org
              </a>
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
                <li><strong>Room A (TBD)</strong> - Main Sessions</li>
                <li><strong>Room B (TBD)</strong> - Main Sessions</li>
              </ul>

              <p className="text-sm text-gray-600 mt-4 italic">
                Same venue as Block 13
              </p>

              <div className="mt-6">
                <Link
                  href="/events/20261015-block15/access"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
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
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contribution & Fee Waiver Section */}
        <section id="contributions" className="block13-section">
          <h2 className="block13-section-title">Looking to Present Your Work?</h2>
          <div className="bg-blue-700 text-white rounded-md p-6 mb-6">
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
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-semibold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact Working Group Chair</h4>
                    <p className="text-gray-600 text-sm">Reach out to the relevant WG Chair to express interest in contributing. Don't know the WG Chairs or have questions? <a href="https://bgin.discourse.group/t/onboarding-guide/130/2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Join our Discourse and make an inquiry (onboarding guide)</a>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-semibold flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Submit Written Contribution</h4>
                    <p className="text-gray-600 text-sm">Provide your document via email with <a href="mailto:bgin_admin@bg2x.org" className="text-blue-600 hover:underline">bgin_admin@bg2x.org</a> in CC.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-semibold flex-shrink-0">3</span>
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


        {/* Folded: secondary information */}
        <div className="pt-6 pb-2 border-t border-gray-200">
          <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} text-gray-900`}>
            More information
          </h2>
          <p className={`mt-1 ${CUSTOM_STYLES.TYPE.META} max-w-3xl`}>
            Background, payment options, and archives. Select{" "}
            <span className="font-semibold text-blue-700">Show more</span> on
            any item to open the full section.
          </p>
        </div>

        {/* What is Block Meeting */}
        <details
          id="what-is-block-meeting"
          className="block13-section scroll-mt-24 border-b border-gray-200 group"
        >
          <FoldSummary
            title="What is a Block Meeting?"
            blurb="Multi-stakeholder practitioner conferences that produce blockchain governance standards as deliverables — bringing regulators, industry, and researchers into one working room."
          />
          <div className="pb-8 pt-2">

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
                  These meetings establish a <strong className="text-blue-800">common platform for dialogue</strong> where diverse stakeholders who rarely collaborate can engage in meaningful discussions about identity, privacy, key management, and governance challenges in permissionless blockchain ecosystems.
                </p>
                <p className="text-lg leading-relaxed">
                  Block Meetings drive <strong className="text-blue-800">concrete outcomes</strong> through working group sessions, critical project discussions, and collaborative problem-solving that shapes the future of blockchain technology.
                </p>
                <div className="bg-blue-700 rounded-md p-5 text-white">
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
                <div className="bg-white rounded-md p-4 border-l-4 border-blue-600 mt-6">
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
              <div className="bg-white rounded-md p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Multi-Stakeholder</h3>
                <p className="text-sm text-gray-600">Diverse perspectives from all sectors</p>
              </div>
              <div className="bg-white rounded-md p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Global Network</h3>
                <p className="text-sm text-gray-600">International collaboration</p>
              </div>
              <div className="bg-white rounded-md p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Action-Oriented</h3>
                <p className="text-sm text-gray-600">Concrete outcomes & solutions</p>
              </div>
              <div className="bg-white rounded-md p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Inclusive</h3>
                <p className="text-sm text-gray-600">Open to all stakeholders</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </details>

        {/* Stablecoin Payment Initiative Section */}
        <details
          id="stablecoin-payment"
          className="block13-section scroll-mt-24 border-b border-gray-200 group"
        >
          <FoldSummary
            title="Stablecoin payment"
            blurb="Card registration is open on Eventbrite. USDC on Ethereum will be available closer to the event for registration and sponsor fees."
          />
          <div className="pb-8 pt-2">

<div className="bg-white rounded-md overflow-hidden border border-gray-200 p-6 mb-6">
            <p className="text-gray-700 max-w-3xl mb-4">
              Following the enactment of stablecoin regulations in Japan, the United States, and other jurisdictions,
              BGIN has decided to accept registration fees and event sponsor fees in stablecoins (<strong>USDC on Ethereum</strong>). This initiative
              represents a practical application of regulatory frameworks in real-world blockchain governance scenarios.
            </p>
            <div className="rounded-md p-4 mb-4 border-2 border-blue-700/30 bg-blue-700/5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Image src="/images/Events/usdc-logo.svg" alt="USDC" width={24} height={24} className="flex-shrink-0" />
                <span style={{ color: '#1d4ed8' }}>Register with USDC (coming soon)</span>
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Registration in <strong>USDC on Ethereum</strong> via Coinbase Commerce will be available closer to the event date. Ticket options will match those available on Eventbrite.
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#1d4ed8' }}>
                Important: We accept USDC on the Ethereum network only.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-sm text-blue-800">
                USDC payment links will be posted here once registration opens.
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Trial Implementation at Block 15</h3>
              <p className="text-blue-800 text-sm">
                At Block 15, BGIN will continue accepting stablecoin payments in <strong>USDC on Ethereum</strong> for registration fees and
                sponsor contributions, building on the trial conducted at Block 14. This initiative demonstrates
                the practical implementation of stablecoin-based payment systems in an international governance context.
              </p>
            </div>
          </div>
          </div>
        </details>

        {/* Related Events Section */}
        <details
          id="related-events"
          className="block13-section scroll-mt-24 border-b border-gray-200 group"
        >
          <FoldSummary
            title="Related events"
            blurb="Side events and co-located sessions around Block 15 will be posted here as they are confirmed."
          />
          <div className="pb-8 pt-2">

<div className="bg-blue-50 border border-blue-200 rounded-md p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Coming Soon</h3>
            <p className="text-blue-700">
              Related events for Block 15 will be announced closer to the event date.
            </p>
          </div>
          </div>
        </details>

        {/* Who Should Join */}
        <details
          id="participation"
          className="block13-section scroll-mt-24 border-b border-gray-200 group"
        >
          <FoldSummary
            title="Who should join"
            blurb="For regulators, operators, researchers, and newcomers — additional audience notes and registration pointers beyond Why attend above."
          />
          <div className="pb-8 pt-2">

          <div className="rounded-md border border-gray-200 bg-gray-50 p-8 lg:p-12">
<div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">Perfect for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 shrink-0"></div>
                    <span><strong>Regulators & Policymakers:</strong> Shape blockchain governance frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 shrink-0"></div>
                    <span><strong>Technologists:</strong> Contribute to technical standards development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 shrink-0"></div>
                    <span><strong>Industry Leaders:</strong> Understand regulatory landscape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 shrink-0"></div>
                    <span><strong>Academics & Researchers:</strong> Engage in cutting-edge discussions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 shrink-0"></div>
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
                <div className="bg-white rounded-md border border-gray-200 p-6">
                  <h4 className="font-semibold mb-2">Registration</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Registration is open. Limited in-person capacity in Washington, D.C.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Register by card on Eventbrite.{" "}
                    <a href="#stablecoin-payment" className="font-medium text-blue-700 underline">
                      USDC on Ethereum
                    </a>{" "}
                    will be available closer to the event.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Contributors:</strong>{" "}
                    <a href="#contributions" className="text-blue-700 underline">
                      Fee waivers available for those presenting work
                    </a>
                  </p>
                  <a
                    href={BLOCK15_REGISTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
                  >
                    Register on Eventbrite
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </details>

        {/* Past BGIN Block Meetings */}
        <details
          id="past-events"
          className="block13-section scroll-mt-24 border-b border-gray-200 group"
        >
          <FoldSummary
            title="Past Block meetings"
            blurb="Archives for Blocks 11–14 in Tokyo and Washington, D.C., plus a link to the full Block conference history."
          />
          <div className="pb-8 pt-2">

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
          </div>
        </details>

        <JoinDiscussionBand blurb="Orient on how Discourse works, then join the Block 15 conversation — open to anyone." />
      </div>

      <Footer />
    </main>
  );
}

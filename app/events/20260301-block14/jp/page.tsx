"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import "@/styles/block13.css";
import { programData } from "@/lib/block14-program-data";
import { criticalProjects } from "@/lib/block14-critical-projects";
import { processProgram, groupSessionsByTime, groupSessionsByRoom } from "@/lib/block14-helpers";
import { formatTitleWithJP, getJapaneseTitle } from "@/lib/block14-japanese-titles";
import RoomImageCarousel from "@/components/events/block14/RoomImageCarousel";
import ProgramTimetable from "@/components/events/block14/ProgramTimetable";


// Load and process program data
const program = processProgram();
const rooms = programData.rooms;


export default function Block14PageJP() {
  // Determine default day based on current date
  const getDefaultDay = (): 'day1' | 'day2' => {
    const today = new Date();

    // Get today's date in JST timezone (where the venue is)
    const todayJST = new Date(today.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));

    // Extract just the date parts
    const year = todayJST.getFullYear();
    const month = todayJST.getMonth(); // 0-indexed (March = 2)
    const day = todayJST.getDate();

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
  
  // Hero image carousel
  const heroImages = [
    "/images/Events/Block5.jpeg",
    "/images/Events/venue/session_photo_1.jpeg",
    "/images/Events/venue/session_photo_2.jpeg",
    "/images/Events/venue/session_photo_3.jpeg",
    "/images/Events/venue/DragonGate_RoomA.jpg",
    "/images/Events/venue/Shibuya_Crossing.jpeg"
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Auto-rotate hero images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev: number) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <main className="block13-page min-h-screen bg-white w-screen">
      <Header />

      {/* Hero Section */}
      <section className="block13-hero" style={{ position: 'relative' }}>
        <div className="absolute inset-0" style={{ zIndex: 1, pointerEvents: 'none' }}>
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={index === 0 ? "渋谷、東京" : `BGIN Block 14 - 画像 ${index + 1}`}
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
          <h1>BGIN Block 14</h1>
          <p>2026年3月1日–2日 | 渋谷、東京 | Japan Fintech Week</p>
          <div className="flex flex-col items-center gap-4">
            <a href="https://www.eventbrite.com/e/bgin-block-14-tickets-1980456894885?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="block13-btn-primary" style={{ position: 'relative', zIndex: 51, pointerEvents: 'auto' }}>
              今すぐ登録
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58325 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 4.58325L17.4167 10.9999L11 17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link
              href="/events/20260301-block14"
              className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
              style={{ position: 'relative', zIndex: 51, pointerEvents: 'auto' }}
            >
              English
            </Link>
          </div>
        </div>
      </section>

      {/* What is Block Meeting Section */}
      <section className="block13-section bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Block Meetingとは？</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong className="text-blue-700">BGIN Block Meetings</strong>は、開発者、規制当局、事業者、学術関係者、市民社会を集め、ブロックチェーンガバナンスのフレームワークを推進する、主要なマルチステークホルダー会議です。
                </p>
                <p className="text-lg leading-relaxed">
                  これらの会議は、通常は協力しない多様なステークホルダーが、パーミッションレスブロックチェーンエコシステムにおけるアイデンティティ、プライバシー、鍵管理、ガバナンスの課題について有意義な議論を行う<strong className="text-indigo-700">共通の対話プラットフォーム</strong>を確立します。
                </p>
                <p className="text-lg leading-relaxed">
                  Block Meetingsは、ワーキンググループセッション、重要プロジェクトの議論、協調的な問題解決を通じて、ブロックチェーン技術の未来を形作る<strong className="text-purple-700">具体的な成果</strong>を生み出します。
                </p>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-5 text-white shadow-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-yellow-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold mb-2">標準策定の実務者会議</h3>
                      <p className="text-blue-50 leading-relaxed">
                        Block Meetingsは、<strong>成果物として標準を作る実務者会議</strong>です。BGINを通じて、私たちはISO TC307のように政府や産業界が世界中でフォローする国際標準への重要なステップとなる標準を開発しています。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600 mt-6">
                  <p className="text-base font-semibold text-gray-800 mb-2">参加すべき理由：</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>世界のリーダーと共にブロックチェーンガバナンスの未来を形作る</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>世界中の規制当局、開発者、業界の専門家とネットワークを構築する</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>現実世界のブロックチェーン課題に対処する重要プロジェクトに貢献する</span>
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
                <h3 className="font-bold text-gray-800 mb-2">マルチステークホルダー</h3>
                <p className="text-sm text-gray-600">全セクターからの多様な視点</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">グローバルネットワーク</h3>
                <p className="text-sm text-gray-600">国際的な協力</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">行動指向</h3>
                <p className="text-sm text-gray-600">具体的な成果と解決策</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">包括的</h3>
                <p className="text-sm text-gray-600">すべてのステークホルダーに開放</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="block13-section-container">
        {/* Program Section */}
        <section id="program" className="block13-section">
          <h2 className="block13-section-title">プログラム</h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              <strong>参加費免除制度あり：</strong> Block 14で書面による貢献を提出し、発表する貢献者は、登録費が完全に免除されます。
              {" "}
              <a href="#contributions" className="text-blue-600 hover:text-blue-800 underline font-semibold">貢献プロセスと申請方法について詳しく見る →</a>
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Japan Fintech Weekの一環</h3>
              <p className="text-blue-700">
                BGIN Block 14は<a href="https://www.fsa.go.jp/policy/japanfintechweek/2026/index_en.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Japan Fintech Week</a>期間中に開催され、世界中から規制当局、技術者、業界リーダーが集まります。
              </p>
            </div>
          </div>
          
          {/* Program Timetable */}
          <div className="mb-8">
            <ProgramTimetable formatTitle={formatTitleWithJP} />
          </div>
          
          {/* Day Tabs */}
          <div id="detailed-program" className="block13-tabs scroll-mt-20">
            {[
              { key: 'day1' as const, label: '3月1日' },
              { key: 'day2' as const, label: '3月2日' }
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
                時間順
              </button>
              <button
                onClick={() => setViewMode('room')}
                className={`block13-toggle ${viewMode === 'room' ? 'active' : ''}`}
              >
                会場順
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
                    <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">{time}</h3>
                    <div className="space-y-2">
                      {sessions.map((session: any, idx: number) => {
                        const jpDetailPage = session.detailPage.replace('/events/20260301-block14/sessions/', '/events/20260301-block14/jp/sessions/');
                        return (
                          <Link key={idx} href={jpDetailPage} className="block no-underline">
                            <div className="block13-session-card cursor-pointer hover:shadow-md transition-shadow">
                              <div className="flex flex-col">
                              <div className="flex flex-row justify-between items-start mb-1">
                                <div className="flex items-center gap-2 flex-grow">
                                  <h3 className="block13-session-title">
                                    {formatTitleWithJP(session.title, 'session')}
                                  </h3>
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
                                        <span><span className="font-semibold">議長：</span> {session.sessionChair}</span>
                                      )}
                                      {session.contributors !== 'TBD' && session.contributors !== 'Optional - List of speakers' && (
                                        <span><span className="font-semibold">主要貢献者：</span> {session.contributors}</span>
                                      )}
                                    </div>
                                  )}
                                  {session.documents && session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').length > 0 && (
                                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                                      {session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').map((doc: any, docIdx: number) => (
                                        <span
                                          key={docIdx}
                                          className="document-link text-xs text-blue-600 hover:text-blue-800 cursor-pointer inline-flex items-center gap-1"
                                          onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.open(doc.link, '_blank');
                                          }}
                                        >
                                          <span className="no-underline">{session.wg === 'Agentic AI' && doc.type === 'Website' ? '🔗' : '📄'}</span>
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
                              <p className="text-gray-700">
                                <span className="font-semibold">建物：</span> 渋谷パルコDGビル<br/>
                                <span className="font-semibold">階：</span> 18階<br/>
                                <span className="font-semibold">住所：</span>{' '}
                                <a
                                  href="https://maps.app.goo.gl/iZc37UYCEVfbgGCt6"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 underline"
                                >
                                  東京都渋谷区宇田川町15-1 150-0042
                                </a>
                                <br/>
                                <span className="text-sm text-gray-600 mt-2 block">Block 12と同じ会場</span>
                              </p>
                            </div>

                            {roomData?.capacity && roomData.capacity !== 'TBD' && (
                              <p className="text-gray-600 mb-2">
                                <span className="font-semibold">収容人数：</span> {roomData.capacity}
                              </p>
                            )}

                            {roomData?.externalLink && (
                              <a
                                href={roomData.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mt-3"
                              >
                                会場ウェブサイトを見る
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
                            <Link key={idx} href={session.detailPage.replace('/events/20260301-block14/sessions/', '/events/20260301-block14/jp/sessions/')} className="block no-underline">
                              <div className="block13-session-card cursor-pointer hover:shadow-md transition-shadow">
                                <div className="flex flex-col">
                                <div className="flex flex-row justify-between items-start mb-1">
                                  <div className="flex items-center gap-2 flex-grow">
                                    <h4 className="block13-session-title">
                                      {formatTitleWithJP(session.title, 'session')}
                                    </h4>
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
                                          <span><span className="font-semibold">議長：</span> {session.sessionChair}</span>
                                        )}
                                        {session.contributors !== 'TBD' && session.contributors !== 'Optional - List of speakers' && (
                                          <span><span className="font-semibold">主要貢献者：</span> {session.contributors}</span>
                                        )}
                                      </div>
                                    )}
                                    {session.documents && session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').length > 0 && (
                                      <div className="mt-2 flex items-center gap-2 flex-wrap">
                                        {session.documents.filter((doc: any) => doc.link && doc.link.trim() !== '').map((doc: any, docIdx: number) => (
                                          <span
                                            key={docIdx}
                                            className="document-link text-xs text-blue-600 hover:text-blue-800 cursor-pointer inline-flex items-center gap-1"
                                            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              window.open(doc.link, '_blank');
                                            }}
                                          >
                                            <span className="no-underline">{session.wg === 'Agentic AI' && doc.type === 'Website' ? '🔗' : '📄'}</span>
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
          <h2 className="block13-section-title">主要プロジェクト</h2>
          <div className="block13-grid block13-grid-3">
            {criticalProjects.map((project) => (
              <div key={project.id} className={`block13-card block13-wg-card ${project.wg.toLowerCase()} flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`block13-wg-badge ${project.wg.toLowerCase()}`}>
                    {project.wg}
                  </span>
                  <span className={`block13-phase-indicator ${project.phase.toLowerCase().replace(/\s+/g, '-')}`}>{project.phase}</span>
                </div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-3">
                  {formatTitleWithJP(project.title, 'project')}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                {project.link ? (
                  <Link href={project.link} className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
                    文書を見る →
                  </Link>
                ) : (
                  <span className="text-gray-400 font-semibold mt-auto">
                    文書準備中
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* View All Publications Button */}
          <div className="text-center mt-8 space-y-4">
            <Link href="/events/20260301-block14/jp/meeting-reports" className="block13-btn-primary inline-block">
              Block 14会議レポートを見る
            </Link>
            <div>
              <Link href="https://bgin-global.org/activities" className="block13-btn-secondary">
                過去のすべての出版物を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Agentic AI Working Group Section */}
        <section id="agentic-ai" className="block13-section">
          <h2 className="block13-section-title">Agentic AI ワーキンググループ</h2>
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-700 text-white px-3 py-1 text-xs font-semibold shadow-sm">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              AIエージェントガバナンス
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-6 mb-6">
            <p className="text-gray-700 max-w-3xl mb-4">
              Agentic AI ワーキンググループは、AIエージェントガバナンスとセキュリティ情報共有プラットフォームに焦点を当てています。
              Block 14では、政策議論がエージェント媒介の標準とプログラム可能なガバナンスを通じて動作するソフトウェアに変わるBGIN Agent Hackを開催します。
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">BGIN Agent Hack</h3>
              <p className="text-yellow-900 text-sm">
                チームがポリシーからコードへの実装を構築し、検証する集中型ハッカソン。
                Agent Hackは、Block 14の両日を通じてオープンスペースで開催されます。
              </p>
            </div>
          </div>
        </section>

        {/* Stablecoin Payment Initiative Section */}
        <section id="stablecoin-payment" className="block13-section">
          <h2 className="block13-section-title">ステーブルコイン決済イニシアティブ</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-6 mb-6">
            <p className="text-gray-700 max-w-3xl mb-4">
              日本、米国、その他の管轄区域でステーブルコイン規制が制定されたことを受け、
              BGINは登録費とイベントスポンサーフィーをステーブルコイン（USDC）で受け取ることを決定しました。このイニシアティブは、
              現実世界のブロックチェーンガバナンスシナリオにおける規制フレームワークの実践的な応用を表しています。
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-900 mb-2">Block 14での試行実施</h3>
              <p className="text-blue-800 text-sm mb-3">
                Block 14では、BGINは登録費とスポンサー貢献についてUSDCでのステーブルコイン決済の試行を実施します。
                この試行は、国際的なガバナンスコンテキストにおけるステーブルコインベースの決済システムの実践的な実装に関する
                貴重な洞察を提供します。
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">セッション：実践的ステーブルコイン実装ガイド</h3>
              <p className="text-purple-800 text-sm mb-3">
                試行結果と、技術的、運用的、規制・監督上の課題について、以下のセッションで詳しく議論されます：
              </p>
              <Link 
                href="/events/20260301-block14/jp/sessions/2-10" 
                className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-semibold transition-colors"
              >
                <span>FASE: 実践的ステーブルコイン実装ガイド</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="text-purple-700 text-xs mt-2">
                2日目、15:30 - 17:00 | Room B
              </p>
            </div>
          </div>
        </section>

        {/* Related Events Section */}
        <section id="related-events" className="block13-section">
          <h2 className="block13-section-title">関連イベント</h2>
          <div className="block13-grid block13-grid-2">
            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-3">FSAブロックチェーン円卓会議</h3>
              <p className="text-gray-600 mb-4">
                <strong>日付：</strong> 2026年2月27日（午後）<br/>
                <strong>説明：</strong> 金融庁が主催するDeFi AML/プライバシーと取引所サイバーセキュリティに関するクローズド円卓会議。
              </p>
              <p className="text-sm text-gray-500">リンク：未定</p>
            </div>
            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-3">Fin/Sum</h3>
              <p className="text-gray-600 mb-4">
                <strong>日付：</strong> 2026年3月3日–6日<br/>
                <strong>説明：</strong> Japan Fintech Week期間中の金融庁セッション。
              </p>
              <p className="text-sm text-gray-500">リンク：未定</p>
            </div>
          </div>
        </section>

        {/* Access & Venue Information */}
        <section id="access-venue" className="block13-section">
          <h2 className="block13-section-title">アクセス & 会場</h2>
          <div className="block13-venue-grid">
            <div>
              <h4 className="font-semibold mb-2">場所</h4>
              <p className="text-gray-600 mb-4">
                渋谷パルコDGビル<br/>
                18階<br/>
                渋谷、東京、日本
              </p>

              <h4 className="font-semibold mb-2 mt-6">住所</h4>
              <p className="text-sm text-gray-600 mb-4">
                東京都渋谷区宇田川町15-1<br/>
                150-0042 日本
              </p>

              <h4 className="font-semibold mb-2 mt-6">主要会場</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Room A</strong> - メインセッション</li>
                <li><strong>Room B</strong> - メインセッション</li>
                <li><strong>オープンスペース</strong> - BGIN Agent Hack</li>
              </ul>

              <p className="text-sm text-gray-600 mt-4 italic">
                Block 12と同じ会場
              </p>

              <div className="mt-6">
                <Link
                  href="/events/20260301-block14/jp/access"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  詳細なアクセス情報を見る
                </Link>
              </div>
            </div>
            <div className="block13-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.6993!3d35.6621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca82a94fa3b%3A0x6b0458b11c0bb3d4!2sDigital%20Garage!5e0!3m2!1sen!2sjp!4v1736426543210!5m2!1sen!2sjp"
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
          <h2 className="block13-section-title text-center">スポンサー & パートナー</h2>

          {/* Sustaining Sponsors */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">サステイニングスポンサー</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center min-h-[160px]">
                <Image
                  src="/images/Events/sponsor/DG.jpeg"
                  alt="Digital Garage"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center min-h-[160px]">
                <Image
                  src="/images/Events/sponsor/jpCryptoIsac.jpg"
                  alt="JP Crypto-ISAC"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Event Sponsors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">イベントスポンサー</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center h-[180px] w-[260px]">
                <p className="text-2xl font-semibold text-gray-800 text-center">スイス大使館</p>
              </div>
            </div>
            <div className="text-center text-gray-600 italic">
              追加発表予定
            </div>
          </div>


          {/* Special Supporters */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">特別サポーター</h3>
            <div className="flex justify-center max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center min-h-[200px] w-full">
                <p className="text-gray-600 italic text-center">発表予定</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contribution & Fee Waiver Section */}
        <section id="contributions" className="block13-section">
          <h2 className="block13-section-title">あなたの研究を発表しませんか？</h2>
          <div className="bg-[#688ff5] text-white rounded-lg p-6 mb-6">
            <p>
              BGINは協調的な標準化プロセスに従います。<strong>Block 14で書面による貢献を提出し、発表する貢献者は、登録費が完全に免除されます。</strong>
            </p>
          </div>

          <div className="block13-grid block13-grid-2">
            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">BGINセッションの仕組み</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">基礎文書</h4>
                  <p className="text-gray-600 text-sm">セッション議長は、協調作業の基礎として、標準草案と議論資料を提供します。<a href="#publications" className="text-blue-600 hover:underline">注目の出版物を見る →</a></p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">書面による貢献</h4>
                  <p className="text-gray-600 text-sm">セッション前に、追加、修正、または代替アプローチを書面で提案してください。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">レビュー & 発表</h4>
                  <p className="text-gray-600 text-sm">セッション議長が提出物をレビューし、実質的な内容がある場合、グローバルBGINコミュニティへの現地発表に招待します。</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4 py-2 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>タイムライン：</strong> 貢献の受付は、参加者のレビューを可能にするため、セッションの約1週間前に締め切られます。
                  </p>
                </div>
              </div>
            </div>

            <div className="block13-card">
              <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">参加費免除のために貢献を提出</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#688ff5] text-white text-sm font-semibold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">ワーキンググループ議長に連絡</h4>
                    <p className="text-gray-600 text-sm">関連するWG議長に連絡して、貢献への関心を表明してください。WG議長がわからない場合や質問がある場合は、<a href="https://bgin.discourse.group/t/onboarding-guide/130/2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Discourseに参加して問い合わせてください（オンボーディングガイド）</a>。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#688ff5] text-white text-sm font-semibold flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">書面による貢献を提出</h4>
                    <p className="text-gray-600 text-sm">メールで文書を提供し、<a href="mailto:bgin_admin@bg2x.org" className="text-blue-600 hover:underline">bgin_admin@bg2x.org</a>をCCに入れてください。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#688ff5] text-white text-sm font-semibold flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">100%割引コードを受け取る</h4>
                    <p className="text-gray-600 text-sm">Block 14登録用の完全な参加費免除コードを取得してください。</p>
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
                  Discourseフォーラムで議論に参加
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="participation" className="block13-section">
          <div className="block13-card bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h2 className="block13-section-title">誰が参加すべきか</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">最適な参加者：</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span><strong>規制当局 & 政策立案者：</strong> ブロックチェーンガバナンスフレームワークを形作る</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span><strong>技術者：</strong> 技術標準の開発に貢献する</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span><strong>業界リーダー：</strong> 規制環境を理解する</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span><strong>学術関係者 & 研究者：</strong> 最先端の議論に参加する</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span><strong>学生：</strong> 業界の専門家から学び、ネットワークを構築する</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold font-FamiljenGrotesk mb-4">なぜ重要か：</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ブロックチェーンガバナンスの決定が行われる主要なフォーラムに参加してください。あなたの参加は、
                  デジタル経済ネットワークの未来を形作る国際標準に直接影響を与えます。
                </p>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold mb-2">登録情報</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    登録は現在受付中です。定員に限りがあります - 早めに登録して席を確保してください。
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>貢献者：</strong> <a href="#contributions" className="text-blue-600 hover:text-blue-800 underline">研究を発表する方には参加費免除が利用可能</a>
                  </p>
                  <a 
                    href="https://www.eventbrite.com/e/bgin-block-14-tickets-1980456894885?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block13-btn-primary inline-flex items-center gap-2"
                  >
                    今すぐ登録
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
          <h2 className="block13-section-title text-center">過去のBGINイベント</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            過去のBlock会議を通じて、グローバルブロックチェーンガバナンスを構築してきた歩みを探索してください
          </p>
          <div className="block13-grid block13-grid-4">
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
                <p className="block13-publication-summary">2025年10月15日–17日 | ワシントンD.C.</p>
                <Link href="/events/20251015-block13" className="text-blue-600 hover:text-blue-800 font-semibold">
                  詳しく見る →
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
                <p className="block13-publication-summary">2025年3月2日–3日 | 渋谷、東京</p>
                <Link href="/events/20250302-block12" className="text-blue-600 hover:text-blue-800 font-semibold">
                  詳しく見る →
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
                <p className="block13-publication-summary">2024年10月21日–22日 | ワシントンD.C.</p>
                <Link href="/events/20241025-block11" className="text-blue-600 hover:text-blue-800 font-semibold">
                  詳しく見る →
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
                <p className="block13-publication-summary">2024年3月3日–6日 | 東京、日本</p>
                <Link href="/events/20240303-block10" className="text-blue-600 hover:text-blue-800 font-semibold">
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/activities/block-conference" className="block13-btn-secondary">
              すべてのBlock会議を見る
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
                        <div className="text-4xl leading-[50px] font-medium font-FamiljenGrotesk">議論に参加</div>
                        <div className="text-lg leading-[19px] font-Inter">
                          BGIN Block 14でブロックチェーンガバナンスの未来を形作る一員になりましょう。
                          世界中の規制当局、技術者、業界リーダーとつながりましょう。
                          コミュニティに参加して、最新の開発情報を入手し、継続的な議論に参加してください。
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
                        コミュニティに参加
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

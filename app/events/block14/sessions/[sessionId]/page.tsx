"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { programData } from "@/lib/block14-program-data";
import "@/styles/block14.css";

export default function SessionDetailPage() {
  const params = useParams();
  const sessionId = params?.sessionId as string;

  // Find the session and get all sessions for navigation
  const findSession = () => {
    const allSessions: Array<{ session: any; day: string; dayKey: string; index: number }> = [];
    
    for (const [dayKey, dayData] of Object.entries(programData.program)) {
      const sessions = (dayData as any).sessions;
      sessions.forEach((session: any, index: number) => {
        allSessions.push({
          session,
          day: (dayData as any).date,
          dayKey,
          index
        });
      });
    }
    
    const currentIndex = allSessions.findIndex(item => item.session.id === sessionId);
    if (currentIndex === -1) return null;
    
    const current = allSessions[currentIndex];
    const previous = currentIndex > 0 ? allSessions[currentIndex - 1] : null;
    const next = currentIndex < allSessions.length - 1 ? allSessions[currentIndex + 1] : null;
    
    return { current, previous, next };
  };

  const sessionData = findSession();
  
  if (!sessionData) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Session Not Found</h1>
          <p className="text-gray-600 mb-8">The session you're looking for doesn't exist.</p>
          <Link href="/events/block14#detailed-program" className="text-blue-600 hover:underline">
            ← Back to Block 14 Program
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const { current, previous, next } = sessionData;
  const session = current.session;
  const day = current.day;
  const room = (programData.rooms as any)[session.room] || { displayName: session.room };
  const wg = (programData.workingGroups as any)[session.wg];

  // Format time display
  const displayTime = session.time.endsWith('-') 
    ? session.time.replace('-', ' onwards')
    : session.time;

  // Format speakers and moderator
  const formatPeople = (people: string) => {
    if (!people || people === "" || people === "TBD" || people === "Optional - List of speakers") {
      return null;
    }
    // Split by comma or semicolon and clean up
    return people.split(/[,;]/).map(p => p.trim()).filter(p => p.length > 0);
  };

  const speakers = formatPeople(session.speakers);
  const moderator = formatPeople(session.moderator);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 pb-8 text-white">
            <Link 
              href="/events/block14#detailed-program" 
              className="text-white hover:text-gray-200 text-sm mb-4 inline-flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Block 14 Program
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{session.title || "TBD"}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{day}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{displayTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{room.displayName}</span>
              </div>
              {wg && (
                <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                  {wg.abbreviation}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Session Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {session.summary || "Detailed session information will be available soon."}
                </p>
              </div>

              {/* Agenda */}
              {session.agenda && session.agenda.length > 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Agenda</h2>
                  <div className="space-y-3 text-gray-700">
                    {session.agenda.map((item: string, idx: number) => {
                      // Empty line for spacing
                      if (item.trim() === '') {
                        return <div key={idx} className="h-2"></div>;
                      }

                      // Main section (starts with number)
                      if (/^\d+\./.test(item.trim())) {
                        return <div key={idx} className="text-lg font-semibold text-gray-900 mt-4 mb-2">{item}</div>;
                      }

                      // Sub-section A), B), C)
                      if (/^\s+[A-Z]\)/.test(item)) {
                        return <div key={idx} className="text-base font-semibold text-gray-800 ml-4 mt-3 mb-1">{item}</div>;
                      }

                      // Bullet point with •
                      if (item.trim().startsWith('•')) {
                        return <div key={idx} className="text-base text-gray-700 ml-4">{item}</div>;
                      }

                      // Sub-bullet point with -
                      if (item.trim().startsWith('-')) {
                        return <div key={idx} className="text-sm text-gray-600 ml-8">{item}</div>;
                      }

                      // Default
                      return <div key={idx} className="text-base text-gray-700">{item}</div>;
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Agenda</h2>
                  <p className="text-gray-500 italic">Agenda details will be announced soon.</p>
                </div>
              )}

              {/* Session Chair & Main Contributor */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Session Chair & Main Contributor</h2>
                <div className="space-y-4">
                  {moderator && moderator.length > 0 ? (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Session Chair</h3>
                      <ul className="list-none space-y-1">
                        {moderator.map((person, idx) => (
                          <li key={idx} className="text-gray-700 flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {person}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  
                  {speakers && speakers.length > 0 ? (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Main Contributor{speakers.length > 1 ? 's' : ''}</h3>
                      <ul className="list-none space-y-1">
                        {speakers.map((person, idx) => (
                          <li key={idx} className="text-gray-700 flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {person}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  
                  {(!moderator || moderator.length === 0) && (!speakers || speakers.length === 0) && (
                    <p className="text-gray-500 italic">Session chair and main contributor information will be announced soon.</p>
                  )}
                </div>
              </div>

              {/* Documents */}
              {session.documents && session.documents.length > 0 && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Related Documents</h2>
                  <div className="space-y-3">
                    {session.documents.map((doc: any, idx: number) => (
                      <a
                        key={idx}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-blue-600 group-hover:text-blue-800 transition-colors mb-1">
                              {doc.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              <span className="inline-flex items-center gap-1">
                                {doc.type === "PDF" && (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                  </svg>
                                )}
                                {doc.type}
                              </span>
                            </p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Venue Card */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold mb-3 text-gray-800 text-lg">Venue Details</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold">Location:</span> {room.displayName}
                  </p>
                  <p>
                    <span className="font-semibold">Building:</span> Shibuya Parco DG Bldg.
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span> 15-1 Udagawa-cho, Shibuya-ku, Tokyo 150-0042, Japan
                  </p>
                  {room.capacity && room.capacity !== 'TBD' && (
                    <p>
                      <span className="font-semibold">Capacity:</span> {room.capacity}
                    </p>
                  )}
                  <div className="pt-2">
                    <Link 
                      href="/events/block14/access"
                      className="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1"
                    >
                      View Access Information
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Working Group Card */}
              {wg && (
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">Working Group</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                      {wg.abbreviation}
                    </span>
                    <h4 className="text-base font-semibold text-gray-800">{wg.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{wg.description}</p>
                  {wg.chairs && wg.chairs.length > 0 && wg.chairs[0] !== "TBD" && (
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">Chairs:</span>
                      <ul className="mt-1 list-none space-y-1">
                        {wg.chairs.map((chair: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2">
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {chair}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {wg.documentsLink && (
                    <div className="pt-3 mt-3 border-t border-gray-300">
                      <a
                        href={wg.documentsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1"
                      >
                        View WG Documents
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Related Projects */}
              {session.relatedProjects && session.relatedProjects.length > 0 && (
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">Related Projects</h3>
                  <ul className="space-y-2 text-sm list-none">
                    {session.relatedProjects.map((project: string, idx: number) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Session Navigation */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold mb-3 text-gray-800 text-lg">Session Navigation</h3>
                <div className="space-y-3">
                  {previous ? (
                    <Link
                      href={`/events/block14/sessions/${previous.session.id}`}
                      className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all group"
                    >
                      <div className="text-xs text-gray-500 mb-1">Previous Session</div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {previous.session.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{previous.day} • {previous.session.time}</div>
                    </Link>
                  ) : (
                    <div className="p-3 border border-gray-200 rounded-lg bg-gray-50 opacity-50">
                      <div className="text-xs text-gray-500 mb-1">Previous Session</div>
                      <div className="font-semibold text-gray-500">No previous session</div>
                    </div>
                  )}
                  
                  {next ? (
                    <Link
                      href={`/events/block14/sessions/${next.session.id}`}
                      className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all group"
                    >
                      <div className="text-xs text-gray-500 mb-1">Next Session</div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {next.session.title}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{next.day} • {next.session.time}</div>
                    </Link>
                  ) : (
                    <div className="p-3 border border-gray-200 rounded-lg bg-gray-50 opacity-50">
                      <div className="text-xs text-gray-500 mb-1">Next Session</div>
                      <div className="font-semibold text-gray-500">No next session</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

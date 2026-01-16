"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { programData } from "@/lib/block13-program-data";
import "@/styles/block13.css";

export default function SessionDetailPage() {
  const params = useParams();
  const sessionId = params?.sessionId as string;

  // Find the session from the program data
  const findSession = () => {
    for (const [, dayData] of Object.entries(programData.program)) {
      const sessions = (dayData as any).sessions;
      const session = sessions.find((s: any) => s.id === sessionId);
      if (session) {
        return { session, day: (dayData as any).date };
      }
    }
    return null;
  };

  const sessionData = findSession();
  
  if (!sessionData) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Session Not Found</h1>
          <p className="text-gray-600 mb-8">The session you're looking for doesn't exist.</p>
          <Link href="/events/20251015-block13#detailed-program" className="text-blue-600 hover:underline">
            ← Back to Block 13 Program
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const { session, day } = sessionData;
  const room = (programData.rooms as any)[session.room] || { displayName: session.room };
  const wg = (programData.workingGroups as any)[session.wg];

  // Format time display
  const displayTime = session.time.endsWith('-') 
    ? session.time.replace('-', ' onwards')
    : session.time;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Venue Image */}
      <section className="relative h-64 md:h-80">
        {(() => {
          const roomData = (programData.rooms as any)[session.room] || 
                          Object.values(programData.rooms).find((r: any) => 
                            session.room.includes(r.displayName)
                          ) || 
                          (programData.rooms as any)["Arrupe Hall"]; // Default fallback
          const venueImage = Array.isArray(roomData?.image) ? roomData.image[0] : roomData?.image;
          
          return (
            <>
              {venueImage ? (
                <>
                  <Image
                    src={venueImage}
                    alt={roomData?.displayName || session.room}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
              )}
            </>
          );
        })()}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 pb-8 text-white">
            <Link 
              href="/events/20251015-block13#detailed-program" 
              className="text-white hover:text-gray-200 text-sm mb-4 inline-block"
            >
              ← Back to Block 13 Program
            </Link>
            <h1 className="text-4xl font-bold mb-4">{session.title || "TBD"}</h1>
            <div className="flex flex-wrap gap-4">
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
                <span>{displayTime} <span className="text-xs text-gray-500">(JST)</span></span>
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Summary */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Session Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  {session.summary || "Detailed session information will be available soon."}
                </p>
              </div>

              {/* Agenda */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Agenda</h2>
                {session.agenda && session.agenda.length > 0 ? (
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
                ) : (
                  <div className="space-y-4">
                    {session.title && session.title.includes("Agent Hack") ? (
                      <>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                          <iframe
                            src="https://block13-agent-hack.vercel.app/"
                            style={{ border: 0 }}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            title="BGIN Agent Hack Preview"
                            className="w-full"
                          />
                        </div>
                        <div className="text-center">
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
                      </>
                    ) : null}
                  </div>
                )}
              </div>

              {/* Session Chair & Main Contributor */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Session Chair & Main Contributor</h2>
                <div className="space-y-3">
                  {session.moderator && session.moderator !== "" && session.moderator !== "Optional - List of speakers" && (
                    <div>
                      <h3 className="font-semibold text-gray-700">Session Chair</h3>
                      <p className="text-gray-600">{session.moderator === "" ? "TBD" : session.moderator}</p>
                    </div>
                  )}
                  {session.speakers && session.speakers !== "" && session.speakers !== "Optional - List of speakers" && (
                    <div>
                      <h3 className="font-semibold text-gray-700">Main Contributor</h3>
                      <p className="text-gray-600">{session.speakers === "" ? "TBD" : session.speakers}</p>
                    </div>
                  )}
                  {(!session.moderator || session.moderator === "") && (!session.speakers || session.speakers === "") && (
                    <p className="text-gray-500">TBD - Session chair and main contributor information will be announced soon.</p>
                  )}
                </div>
              </div>

              {/* Documents */}
              {session.documents && session.documents.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Related Documents</h2>
                  <div className="space-y-3">
                    {session.documents.map((doc: any, idx: number) => (
                      <a
                        key={idx}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-blue-600 hover:underline">{doc.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">Type: {doc.type}</p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-3 text-gray-800">Venue Details</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Location:</span> {room.displayName}</p>
                  {room.capacity && (
                    <p><span className="font-semibold">Capacity:</span> {room.capacity}</p>
                  )}
                  {room.address && (
                    <p><span className="font-semibold">Address:</span> {room.address}</p>
                  )}
                  {room.accessibility && (
                    <p><span className="font-semibold">Accessibility:</span> {room.accessibility}</p>
                  )}
                </div>
              </div>

              {/* Working Group Card */}
              {wg && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3 text-gray-800">Working Group</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                      {wg.abbreviation}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800">{wg.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{wg.description}</p>
                  {wg.chairs && wg.chairs.length > 0 && (
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">Chairs:</span>
                      <ul className="mt-1 list-none">
                        {wg.chairs.map((chair: string, idx: number) => (
                          <li key={idx}> {chair}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Related Projects */}
              {session.relatedProjects && session.relatedProjects.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3 text-gray-800">Related Projects</h3>
                  <ul className="space-y-2 text-sm list-none">
                    {session.relatedProjects.map((project: string, idx: number) => (
                      <li key={idx} className="text-gray-700">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
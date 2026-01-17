"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { programData } from "@/lib/block14-program-data";
import "@/styles/block13.css";

export default function SessionDetailPageJP() {
  const params = useParams();
  const sessionId = params?.sessionId as string;

  // Find the session from the program data
  const findSession = () => {
    // Special handling for AgentHack (1-8) - it spans both days
    if (sessionId === "1-8") {
      const day1Data = (programData.program as any).day1;
      const day2Data = (programData.program as any).day2;
      const day1Session = day1Data.sessions.find((s: any) => s.id === "1-8");
      const day2Session = day2Data.sessions.find((s: any) => s.id === "2-8");
      
      if (day1Session) {
        // Merge information from both days
        return { 
          session: {
            ...day1Session,
            time: "9:20 - 17:00 (1日目), 9:20 - 15:00 (2日目)",
            summary: day1Session.summary || "Block 14での集中型ハッカソンで、政策議論がエージェント媒介の標準とプログラム可能なガバナンスを通じて動作するソフトウェアに変わります。エージェントが構築し、人々は共通の理解に合意します。このセッションは1日目と2日目の両方で開催されます。"
          }, 
          day: `${day1Data.date} & ${day2Data.date}` 
        };
      }
    }
    
    // Regular session lookup
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
          <h1 className="text-3xl font-bold mb-4">セッションが見つかりません</h1>
          <p className="text-gray-600 mb-8">お探しのセッションは存在しません。</p>
          <Link href="/events/20260301-block14/jp#detailed-program" className="text-blue-600 hover:underline">
            ← Block 14プログラムに戻る
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
    ? session.time.replace('-', ' 以降')
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
                          (programData.rooms as any)["Room A"]; // Default fallback
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
            <div className="flex items-center justify-between mb-4">
              <Link 
                href="/events/20260301-block14/jp#detailed-program" 
                className="text-white hover:text-gray-200 text-sm inline-block"
              >
                ← Block 14プログラムに戻る
              </Link>
              <Link
                href={`/events/20260301-block14/sessions/${sessionId}`}
                className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                English
              </Link>
            </div>
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Summary */}
              <div>
                <h2 className="text-2xl font-bold mb-4">セッション概要</h2>
                <p className="text-gray-700 leading-relaxed">
                  {session.summary || "詳細なセッション情報は間もなく利用可能になります。"}
                </p>
              </div>

              {/* Agenda */}
              <div>
                <h2 className="text-2xl font-bold mb-4">アジェンダ</h2>
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
                            完全なウェブサイトを開く
                          </a>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-500">アジェンダの詳細は間もなく利用可能になります。</p>
                    )}
                  </div>
                )}
              </div>

              {/* Session Chair & Main Contributor */}
              <div>
                <h2 className="text-2xl font-bold mb-4">セッション議長 & 主要貢献者</h2>
                <div className="space-y-3">
                  {session.moderator && session.moderator !== "" && session.moderator !== "Optional - List of speakers" && (
                    <div>
                      <h3 className="font-semibold text-gray-700">セッション議長</h3>
                      <p className="text-gray-600">{session.moderator === "" ? "未定" : session.moderator}</p>
                    </div>
                  )}
                  {session.speakers && session.speakers !== "" && session.speakers !== "Optional - List of speakers" && (
                    <div>
                      <h3 className="font-semibold text-gray-700">主要貢献者</h3>
                      <p className="text-gray-600">{session.speakers === "" ? "未定" : session.speakers}</p>
                    </div>
                  )}
                  {(!session.moderator || session.moderator === "") && (!session.speakers || session.speakers === "") && (
                    <p className="text-gray-500">未定 - セッション議長と主要貢献者の情報は間もなく発表されます。</p>
                  )}
                </div>
              </div>

              {/* Documents */}
              {session.documents && session.documents.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">関連文書</h2>
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
                            <p className="text-sm text-gray-500 mt-1">種類：{doc.type}</p>
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
                <h3 className="font-bold mb-3 text-gray-800">会場詳細</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">場所：</span> {room.displayName}</p>
                  {room.capacity && room.capacity !== 'TBD' && (
                    <p><span className="font-semibold">収容人数：</span> {room.capacity}</p>
                  )}
                  {room.address && (
                    <p><span className="font-semibold">住所：</span> {room.address}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    渋谷パルコDGビル、18階
                  </p>
                </div>
              </div>

              {/* Working Group Card */}
              {wg && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3 text-gray-800">ワーキンググループ</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, '-')}`}>
                      {wg.abbreviation}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800">{wg.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{wg.description}</p>
                  {wg.chairs && wg.chairs.length > 0 && (
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">議長：</span>
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
                  <h3 className="font-bold mb-3 text-gray-800">関連プロジェクト</h3>
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

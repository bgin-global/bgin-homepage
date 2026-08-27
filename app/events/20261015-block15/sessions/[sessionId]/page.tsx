"use client";
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getHubBySlug } from "@/contents/projectHubs";
import { findBlock15Session } from "@/lib/block15-find-session";
import { programData } from "@/lib/block15-program-data";
import "@/styles/block13.css";

type SessionRecord = typeof programData.program.day1.sessions[number];

export default function Block15SessionDetailPage() {
  const params = useParams();
  const sessionId = params?.sessionId as string;
  const sessionData = sessionId ? findBlock15Session(sessionId) : null;

  if (!sessionData) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Session Not Found</h1>
          <p className="text-gray-600 mb-8">
            The session you are looking for does not exist.
          </p>
          <Link
            href="/events/20261015-block15#detailed-program"
            className="text-blue-600 hover:underline"
          >
            ← Back to Block 15 Program
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const { session, day } = sessionData;
  const room =
    (programData.rooms as Record<string, { displayName: string; capacity?: string; image?: string | null; address?: string }>)[
      session.room
    ] ?? { displayName: session.room };
  const wg = (programData.workingGroups as Record<string, { abbreviation: string; name: string; description: string; chairs?: string[] }>)[
    session.wg
  ];

  const displayTime = session.time.endsWith("-")
    ? session.time.replace("-", " onwards")
    : session.time;

  const relatedSlugs = (session as SessionRecord).relatedProjectSlugs ?? [];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative h-64 md:h-80">
        {(() => {
          const venueImage = room?.image;
          return (
            <>
              {venueImage ? (
                <>
                  <Image
                    src={venueImage}
                    alt={room.displayName}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
              )}
            </>
          );
        })()}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 pb-8 text-white">
            <Link
              href="/events/20261015-block15#detailed-program"
              className="text-white hover:text-gray-200 text-sm inline-block mb-4"
            >
              ← Back to Block 15 Program
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {session.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{day}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{displayTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{room.displayName}</span>
              </div>
              {wg && session.wg !== "General" && (
                <span
                  className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {wg.abbreviation}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Session Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  {session.summary ||
                    "Detailed session information will be available soon."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Agenda</h2>
                {session.agenda && session.agenda.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {session.agenda.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    Agenda details will be posted closer to the event. Review
                    related project hubs for draft materials and prior Block
                    meeting reports.
                  </p>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Session Chair & Speakers
                </h2>
                <div className="space-y-3">
                  {session.moderator && (
                    <div>
                      <h3 className="font-semibold text-gray-700">
                        Session Chair
                      </h3>
                      <p className="text-gray-600">{session.moderator}</p>
                    </div>
                  )}
                  {session.speakers && (
                    <div>
                      <h3 className="font-semibold text-gray-700">Speakers</h3>
                      <p className="text-gray-600">{session.speakers}</p>
                    </div>
                  )}
                  {!session.moderator && !session.speakers && (
                    <p className="text-gray-500">
                      Chair and speaker details will be announced soon.
                    </p>
                  )}
                </div>
              </div>

              {(session.documents as Array<{
                title: string;
                link?: string;
                type: string;
              }>).length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Related Documents</h2>
                  <div className="space-y-3">
                    {(session.documents as Array<{
                      title: string;
                      link?: string;
                      type: string;
                    }>).map((doc, idx) => {
                      const Wrapper = doc.link ? "a" : "div";
                      const wrapperProps = doc.link
                        ? {
                            href: doc.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {};
                      return (
                        <Wrapper
                          key={idx}
                          {...wrapperProps}
                          className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h3
                            className={`font-semibold ${doc.link ? "text-blue-600 hover:underline" : "text-gray-800"}`}
                          >
                            {doc.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Type: {doc.type}
                          </p>
                        </Wrapper>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-3 text-gray-800">Venue</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {room.displayName}
                  </p>
                  {room.address && (
                    <p>
                      <span className="font-semibold">Address:</span>{" "}
                      {room.address}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Georgetown University · Washington, D.C.
                  </p>
                  <Link
                    href="/events/20261015-block15/access"
                    className="text-blue-600 hover:underline text-sm inline-block mt-2"
                  >
                    Access & venue details →
                  </Link>
                </div>
              </div>

              {wg && session.wg !== "General" && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3 text-gray-800">
                    Working Group
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`block13-wg-badge ${session.wg.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {wg.abbreviation}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {wg.name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{wg.description}</p>
                  {wg.chairs && wg.chairs.length > 0 && (
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">Chairs:</span>
                      <ul className="mt-1 list-none">
                        {wg.chairs.map((chair) => (
                          <li key={chair}>{chair}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {relatedSlugs.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3 text-gray-800">
                    Related Projects
                  </h3>
                  <ul className="space-y-2 text-sm list-none">
                    {relatedSlugs.map((slug) => {
                      const hub = getHubBySlug(slug);
                      if (!hub) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/projects/${slug}`}
                            className="text-blue-700 hover:underline font-medium"
                          >
                            {hub.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold mb-2 text-blue-900">Register</h3>
                <p className="text-sm text-blue-800 mb-3">
                  Contributors who submit written work and present may qualify
                  for a registration fee waiver.
                </p>
                <Link
                  href="/events/20261015-block15#contributions"
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  Contribution process →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

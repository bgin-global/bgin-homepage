import Link from "next/link";
import { getHubBySlug } from "@/contents/projectHubs";
import { getWGClassName } from "@/lib/block15-wg-colors";

export type Block15ListSession = {
  title: string;
  detailPage: string;
  summary?: string;
  wg: string;
  room?: string;
  displayTime?: string;
  time?: string;
  relatedProjectSlugs?: string[];
  sessionChair?: string;
  contributors?: string;
};

type Props = {
  session: Block15ListSession;
  variant: "byTime" | "byRoom";
};

function WgBadge({ wg }: { wg: string }) {
  const slug = getWGClassName(wg);
  const title =
    wg === "General" ? "General session" : `${wg} Working Group`;
  return (
    <span className={`block13-wg-badge ${slug}`} title={title}>
      {wg}
    </span>
  );
}

export default function Block15SessionListCard({ session, variant }: Props) {
  const wgSlug = getWGClassName(session.wg);

  return (
    <Link href={session.detailPage} className="block no-underline">
      <div
        className={`block13-session-card block13-wg-session ${wgSlug} cursor-pointer hover:shadow-md transition-shadow`}
      >
        <div className="flex flex-row justify-between items-start mb-1 gap-2">
          <div className="flex items-center gap-2 flex-grow min-w-0">
            <h3 className="block13-session-title">{session.title}</h3>
            <WgBadge wg={session.wg} />
          </div>
          <div className="flex items-center gap-2 ml-3 flex-shrink-0">
            {variant === "byTime" && session.room && (
              <span className="text-sm text-gray-600 font-medium">{session.room}</span>
            )}
            {variant === "byRoom" && (
              <span className="text-sm text-gray-600 font-medium">
                {session.displayTime ?? session.time}
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-2">{session.summary ?? "Details coming soon"}</p>
        {Array.isArray(session.relatedProjectSlugs) &&
          session.relatedProjectSlugs.length > 0 && (
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">Related projects:</span>
              {session.relatedProjectSlugs.map((slug) => {
                const hub = getHubBySlug(slug);
                if (!hub) return null;
                return (
                  <span key={slug} className="text-xs text-blue-700 underline">
                    {hub.shortTitle ?? hub.title}
                  </span>
                );
              })}
            </div>
          )}
        {(session.sessionChair !== "TBD" || session.contributors !== "TBD") && (
          <div className="text-xs text-gray-700 flex flex-wrap gap-3">
            {session.sessionChair !== "TBD" && (
              <span>
                <span className="font-semibold">Chair:</span> {session.sessionChair}
              </span>
            )}
            {session.contributors !== "TBD" && (
              <span>
                <span className="font-semibold">Speaker:</span> {session.contributors}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}

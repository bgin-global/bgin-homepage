import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MeetingCard from "@/components/MeetingCard";
import StatusChip from "@/components/StatusChip";
import WgChip from "@/components/WgChip";
import {
  WG_META,
  getHubBySlug,
  getListedHubs,
  getRelatedHubs,
} from "@/contents/projectHubs";
import { getHubSchedule } from "@/contents/hubSchedules";
import {
  BLOCK15_META,
  BLOCK15_PAGE,
  BLOCK15_REGISTER,
  isBlock15KeyHub,
} from "@/contents/block15Promo";
import { discourseGuideHref } from "@/contents/discourse";
import { getWgIdentity } from "@/contents/wgIdentity";
import DiscourseGuideLink from "@/components/DiscourseGuideLink";
import { publicationsRelatedToHub } from "@/lib/publications";
import { THEME_LABELS } from "@/contents/themes";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getListedHubs().map((h) => ({ slug: h.slug }));
}

export default function ProjectHubPage({
  params,
}: {
  params: { slug: string };
}) {
  const hub = getHubBySlug(params.slug);
  if (!hub || !hub.listed) notFound();

  const related = getRelatedHubs(hub);
  const relatedPubs = publicationsRelatedToHub(hub, 5);
  const wgMeta = WG_META[hub.wg];
  const { roadmap, meetings } = getHubSchedule(hub);
  const showOverview = hub.overview.trim() !== hub.pitch.trim();
  const showBlock15Register = isBlock15KeyHub(hub.slug);
  const wgId = getWgIdentity(hub.wg);

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={`border-b border-gray-200 ${wgId.soft}`}>
        <div
          className="max-w-5xl mx-auto px-4 py-10 border-l-4"
          style={{ borderLeftColor: wgId.hex }}
        >
          <Link
            href={`/projects?wg=${hub.wg}`}
            className="text-sm text-blue-700 hover:underline"
          >
            ← All projects
          </Link>
          <p className={`${CUSTOM_STYLES.TYPE.META} mt-3 mb-2`}>
            Projects / {wgMeta.label} / {hub.title}
          </p>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <WgChip wg={hub.wg} />
            <StatusChip kind="project" status={hub.status} />
          </div>
          <h1 className={`${CUSTOM_STYLES.TYPE.DISPLAY} text-black mb-3`}>
            {hub.title}
          </h1>
          <p className={`${CUSTOM_STYLES.TYPE.LEDE} max-w-3xl mb-6`}>{hub.pitch}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <DiscourseGuideLink
              variant="filled"
              nextUrl={hub.discourseUrl}
            />
            <a
              href={hub.discourseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-700 underline"
            >
              Open this WG on Discourse ↗
            </a>
            {showBlock15Register && (
              <a
                href={BLOCK15_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 rounded-md bg-blue-900 text-white text-sm font-semibold hover:bg-blue-950"
              >
                Register for Block 15
              </a>
            )}
            {hub.secondaryCta && (
              <a
                href={hub.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {hub.secondaryCta.label}
              </a>
            )}
          </div>
          {showBlock15Register && (
            <p className="mt-3 text-sm text-gray-600">
              {BLOCK15_META.when} · {BLOCK15_META.where} ·{" "}
              <Link href={BLOCK15_PAGE} className="text-blue-700 underline">
                Event details
              </Link>
            </p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10">
        <div className="space-y-10 min-w-0">
          <section
            id="glance"
            className="rounded-lg border border-gray-200 bg-gray-50 p-5"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
              At a glance
            </h2>
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-gray-500">Working Group</dt>
                <dd className="text-gray-900 flex flex-wrap items-center gap-2">
                  <WgChip wg={hub.wg} />
                  <span className="text-sm text-gray-600">{hub.wgLabel}</span>
                </dd>
              </div>
              {hub.latestDocumentTitle && (
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <dt className="text-gray-500">Latest document</dt>
                  <dd className="text-gray-900">{hub.latestDocumentTitle}</dd>
                </div>
              )}
              {hub.nextMilestone && (
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <dt className="text-gray-500">Next milestone</dt>
                  <dd className="text-gray-900 font-medium">
                    {hub.nextMilestone}
                  </dd>
                </div>
              )}
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-gray-500">Themes</dt>
                <dd className="text-gray-900">
                  {hub.themes.map((t) => THEME_LABELS[t]).join(" · ")}
                </dd>
              </div>
            </dl>
          </section>

          {showOverview && (
            <section id="overview">
              <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
                Overview
              </h2>
              <p className="text-gray-800 leading-relaxed">{hub.overview}</p>
            </section>
          )}

          <section id="deliverables">
            <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
              Expected deliverables
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              {hub.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>

          <section id="status">
            <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
              Current status
            </h2>
            <p className="text-gray-800 leading-relaxed">{hub.statusText}</p>
          </section>

          {hub.relatedInitiatives && hub.relatedInitiatives.length > 0 && (
            <section id="related-initiatives">
              <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
                Related initiatives
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                External context for coordination — not hosted or operated by
                BGIN.
              </p>
              <div className="space-y-3 border-l-4 border-gray-200 pl-4">
                {hub.relatedInitiatives.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed mt-1">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section id="documents">
            <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
              Documents
            </h2>
            {hub.documentsNote && (
              <p className="text-gray-700 leading-relaxed mb-3">
                {hub.documentsNote}
              </p>
            )}
            {hub.documents.length > 0 && (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="px-3 py-2 font-semibold">Type</th>
                      <th className="px-3 py-2 font-semibold">Title</th>
                      <th className="px-3 py-2 font-semibold">When</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hub.documents.map((doc) => (
                      <tr key={doc.title} className="border-t border-gray-100">
                        <td className="px-3 py-2 text-gray-600 whitespace-nowrap">
                          {doc.type}
                        </td>
                        <td className="px-3 py-2">
                          {doc.href ? (
                            <a
                              href={doc.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:underline"
                            >
                              {doc.title}
                            </a>
                          ) : (
                            doc.title
                          )}
                        </td>
                        <td className="px-3 py-2 text-gray-600 whitespace-nowrap">
                          {doc.when}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="mt-3 text-sm text-gray-600">
              Full library (including historical study reports) →{" "}
              <Link
                href={`/publications?${wgMeta.publicationsQuery}`}
                className="text-blue-700 underline"
              >
                Publications
              </Link>
            </p>
          </section>

          <section id="roadmap">
            <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
              Roadmap
            </h2>
            <ul className="space-y-0 border-l-2 border-gray-200 ml-2">
              {roadmap.map((item) => (
                <li
                  key={`${item.when}-${item.what}`}
                  className="relative pl-6 pb-4 last:pb-0"
                >
                  <span
                    className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 ${
                      item.current
                        ? "border-blue-600 bg-blue-600"
                        : item.done
                          ? "border-blue-300 bg-blue-100"
                          : "border-gray-300 bg-white"
                    }`}
                  />
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {item.when}
                  </div>
                  <div
                    className={`text-sm ${
                      item.current
                        ? "text-blue-900 font-semibold"
                        : "text-gray-800"
                    }`}
                  >
                    {item.what}
                    {item.current && (
                      <span className="ml-2 text-[10px] font-bold uppercase tracking-wide bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                        Current
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="upcoming">
            <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
              Upcoming meetings
            </h2>
            <div className="space-y-3">
              {meetings.map((m) => (
                <MeetingCard key={`${m.title}-${m.when}`} meeting={m} />
              ))}
            </div>
          </section>

          <section id="participate">
            <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
              How to participate
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              {(hub.participateBullets ?? [
                "Work on Discourse — open to anyone, no membership required",
                "Review the latest documents and comment on open issues",
                "Contribute at Block 15 and related meetings listed above",
              ]).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Official working forum (permissionless):{" "}
              <Link
                href={discourseGuideHref(hub.discourseUrl)}
                className="text-blue-700 underline"
              >
                How to work on Discourse
              </Link>
              {" · "}
              <a
                href={hub.discourseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Open this WG ↗
              </a>
              {" · "}
              <Link href={BLOCK15_PAGE} className="text-blue-700 underline">
                Block 15
              </Link>
              {showBlock15Register && (
                <>
                  {" · "}
                  <a
                    href={BLOCK15_REGISTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline font-semibold"
                  >
                    Register
                  </a>
                </>
              )}
            </p>
            {showBlock15Register && (
              <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900 mb-1">
                  Invite path for Block 15
                </p>
                <p className="text-sm text-blue-900/80 mb-3">
                  Share this hub for project context, then ask contacts to
                  register for the meeting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={BLOCK15_REGISTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-3 py-1.5 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
                  >
                    Register on Eventbrite
                  </a>
                  <Link
                    href={`${BLOCK15_PAGE}#why-attend`}
                    className="inline-flex px-3 py-1.5 rounded-md border border-blue-700 text-blue-800 text-sm font-semibold hover:bg-white"
                  >
                    Why attend →
                  </Link>
                </div>
              </div>
            )}
          </section>

          {(related.length > 0 || relatedPubs.length > 0) && (
            <section id="related">
              <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} mb-3`}>
                Related
              </h2>
              {related.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Active projects
                  </h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug} className="flex flex-wrap items-center gap-2">
                        <WgChip wg={r.wg} />
                        <Link
                          href={`/projects/${r.slug}`}
                          className="text-blue-700 hover:underline"
                        >
                          {r.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {relatedPubs.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Related publications
                  </h3>
                  <ul className="space-y-2">
                    {relatedPubs.map((p) => (
                      <li key={p.path}>
                        {p.slug ? (
                          <Link
                            href={`/publications/${p.slug}`}
                            className="text-blue-700 hover:underline"
                          >
                            {p.title} →
                          </Link>
                        ) : (
                          <span className="text-gray-800">{p.title}</span>
                        )}
                        <span className="text-xs text-gray-500 ml-2">
                          {p.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </div>

        <aside className="text-sm lg:sticky lg:top-6 self-start">
          <h2 className="font-semibold text-gray-900 mb-2">On this page</h2>
          <nav className="flex flex-col gap-1.5 text-blue-700">
            <a href="#glance" className="hover:underline">
              At a glance
            </a>
            {showOverview && (
              <a href="#overview" className="hover:underline">
                Overview
              </a>
            )}
            <a href="#deliverables" className="hover:underline">
              Deliverables
            </a>
            <a href="#status" className="hover:underline">
              Status
            </a>
            {hub.relatedInitiatives && hub.relatedInitiatives.length > 0 && (
              <a href="#related-initiatives" className="hover:underline">
                Related initiatives
              </a>
            )}
            <a href="#documents" className="hover:underline">
              Documents
            </a>
            <a href="#roadmap" className="hover:underline">
              Roadmap
            </a>
            <a href="#upcoming" className="hover:underline">
              Upcoming
            </a>
            <a href="#participate" className="hover:underline">
              How to participate
            </a>
            <a href="#related" className="hover:underline">
              Related
            </a>
          </nav>
        </aside>
      </div>

      <Footer />
    </main>
  );
}

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import {
  WG_META,
  getHubsByWg,
  getListedHubs,
  type WgId,
} from "@/contents/projectHubs";
import StatusChip from "@/components/StatusChip";
import WgChip from "@/components/WgChip";
import { getWgIdentity } from "@/contents/wgIdentity";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

const WG_ORDER: WgId[] = ["ikp", "cs", "fase", "agentic"];

function isWgId(v: string | null): v is WgId {
  return v === "ikp" || v === "cs" || v === "fase" || v === "agentic";
}

function ProjectsListingInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const wgParam = searchParams.get("wg");
  const wg: WgId = isWgId(wgParam) ? wgParam : "ikp";
  const hubs = useMemo(() => getHubsByWg(wg), [wg]);
  const allCount = getListedHubs().length;

  function selectWg(id: WgId) {
    router.replace(`/projects?wg=${id}`, { scroll: false });
  }

  return (
    <>
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              Projects
            </h1>
            <p
              className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 max-w-2xl mx-auto`}
            >
              Active collaborative workstreams with status, documents, and how to
              participate. For finished study reports and meeting records, use
              Publications.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              What you&apos;ll find here: current hubs only ({allCount} listed).
              Not looking to join?{" "}
              <Link
                href="/publications"
                className="text-blue-700 underline underline-offset-2"
              >
                Browse publications
              </Link>{" "}
              or{" "}
              <Link
                href="/start"
                className="text-blue-700 underline underline-offset-2"
              >
                Start here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Browse by working group" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 mt-8">
          <div
            className="flex flex-wrap gap-2 mb-8"
            role="tablist"
            aria-label="Working groups"
          >
            {WG_ORDER.map((id) => {
              const meta = WG_META[id];
              const identity = getWgIdentity(id);
              const count = getHubsByWg(id).length;
              const selected = wg === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectWg(id)}
                  className={`text-left rounded-lg border px-4 py-3 min-w-[140px] transition-colors ${
                    selected
                      ? identity.selected
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: identity.hex }}
                      aria-hidden
                    />
                    <div className="font-semibold text-black">{meta.label}</div>
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    {meta.blurb} · {count} project{count === 1 ? "" : "s"}
                  </div>
                </button>
              );
            })}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hubs.map((hub) => {
              const identity = getWgIdentity(hub.wg);
              return (
              <li key={hub.slug}>
                <Link
                  href={`/projects/${hub.slug}`}
                  className={`block h-full bg-white rounded-lg border border-gray-200 p-5 hover:shadow-sm transition-all border-l-4`}
                  style={{ borderLeftColor: identity.hex }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-lg font-semibold text-black font-FamiljenGrotesk">
                      {hub.shortTitle ?? hub.title}
                    </h2>
                    <StatusChip kind="project" status={hub.status} />
                  </div>
                  <div className="mb-2">
                    <WgChip wg={hub.wg} />
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {hub.pitch}
                  </p>
                  <span className="inline-block mt-3 text-sm font-medium text-blue-700">
                    Open project hub →
                  </span>
                </Link>
              </li>
              );
            })}
          </ul>

          <p className="mt-10 text-sm text-gray-700">
            Past publications from {WG_META[wg].label} →{" "}
            <Link
              href={`/publications?${WG_META[wg].publicationsQuery}`}
              className="text-blue-800 underline underline-offset-2 font-medium"
            >
              View in Publications
            </Link>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/publications"
              className="inline-flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Browse all publications
            </Link>
            <Link
              href="/start"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-700 text-sm font-semibold text-white hover:bg-blue-800"
            >
              How to use this site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <Suspense
        fallback={
          <div className="max-w-5xl mx-auto px-4 py-16 text-gray-500">
            Loading projects…
          </div>
        }
      >
        <ProjectsListingInner />
      </Suspense>
      <Footer />
    </main>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  BLOCK15_META,
  BLOCK15_PAGE,
  BLOCK15_REGISTER,
} from "@/contents/block15Promo";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

const PATHS = [
  {
    title: "I want to join the working forum (Discourse)",
    body: "See what Discourse is for, how to create an account, then open the official forum. No membership required.",
    href: "/start/discourse",
    cta: "How to work on Discourse",
  },
  {
    title: "I want to register for Block 15",
    body: `${BLOCK15_META.when} · ${BLOCK15_META.where}. Hybrid meeting — register now, then open a project hub to prepare.`,
    href: BLOCK15_PAGE,
    cta: "Block 15 details & register",
  },
  {
    title: "I want to join or invite someone",
    body: "No membership needed. Open a project hub for status and documents, then work on Discourse or join upcoming meetings.",
    href: "/projects",
    cta: "Browse active projects",
  },
  {
    title: "I want to read or cite a past report",
    body: "Use the publications library — study reports (e.g. NFT), meeting reports, and governance docs. These are not project hubs.",
    href: "/publications?what=study_report",
    cta: "Browse study reports",
  },
  {
    title: "I need records from a Block meeting",
    body: "Start from Events, then open that Block’s meeting reports.",
    href: "/events",
    cta: "Browse events",
  },
  {
    title: "I want the big picture for a working group",
    body: "Working group pages cover chairs, Discourse, and calendars. From Projects you can filter hubs by WG.",
    href: "/activities/working-groups",
    cta: "Working groups",
  },
];

export default function StartPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={`bg-gray-50 ${CUSTOM_STYLES.SPACE.SECTION}`}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className={`${CUSTOM_STYLES.TYPE.DISPLAY} text-black mb-4`}>
            Start here
          </h1>
          <p className={`${CUSTOM_STYLES.TYPE.LEDE} text-gray-600 max-w-2xl mx-auto`}>
            BGIN is permissionless — not a membership organization. Anyone can
            join the work on Discourse, contribute via project hubs, or attend
            meetings. Places to <strong>participate</strong> (Projects) are
            separate from places to <strong>read and cite</strong>{" "}
            (Publications).
          </p>
        </div>
      </div>

      <div className={`py-12 max-w-5xl mx-auto px-4 space-y-4`}>
        <div className="rounded-md border-2 border-blue-700 bg-blue-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
            Registration open
          </p>
          <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} text-black mb-2`}>
            {BLOCK15_META.title}
          </h2>
          <p className="text-gray-700 mb-4">
            {BLOCK15_META.when} · {BLOCK15_META.where} · {BLOCK15_META.format}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={BLOCK15_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 py-2 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
            >
              Register on Eventbrite
            </a>
            <Link
              href={BLOCK15_PAGE}
              className="inline-flex px-4 py-2 rounded-md border border-blue-700 text-blue-800 text-sm font-semibold hover:bg-white"
            >
              Event details →
            </Link>
          </div>
        </div>

        {PATHS.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className="block border border-gray-200 rounded-md p-6 hover:border-blue-700 transition-colors bg-white"
          >
            <h2 className={`${CUSTOM_STYLES.TYPE.SUBTITLE} text-black mb-2`}>
              {path.title}
            </h2>
            <p className={`${CUSTOM_STYLES.TYPE.BODY} mb-3`}>{path.body}</p>
            <span className="text-blue-700 font-medium text-sm">{path.cta} →</span>
          </Link>
        ))}

        <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
          <p className="font-semibold mb-1">Example: NFT Study Report</p>
          <p>
            The NFT Study Report Part 1 (2022) is a{" "}
            <Link
              href="/publications/nft-study-report-part-1"
              className="underline font-medium"
            >
              Historical publication
            </Link>
            . It does not have a project hub because there is no ongoing
            workstream to join.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

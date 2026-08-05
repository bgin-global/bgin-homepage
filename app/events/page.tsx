import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MeetingCard from "@/components/MeetingCard";
import StatusChip from "@/components/StatusChip";
import { getSiteUpcomingMeetings } from "@/contents/hubSchedules";
import type { MeetingItem } from "@/contents/meetingTypes";
import {
  BLOCK15_KEY_HUBS,
  BLOCK15_META,
  BLOCK15_PAGE,
  BLOCK15_REGISTER,
} from "@/contents/block15Promo";
import Link from "next/link";

const EXTRA_UPCOMING: MeetingItem[] = [];

const pastEventCategories = [
  {
    title: "Block Conferences",
    description: "BGIN General Assemblies and major conferences",
    link: "/activities/block-conference",
    count: "14 past events",
  },
  {
    title: "Layer 2 Meetups",
    description: "Technical discussions at major blockchain events",
    link: "/activities/layer2-meetup",
    count: "Multiple events",
  },
  {
    title: "Working Group Sessions",
    description: "Specialized working group meetings and workshops",
    link: "/activities/working-groups",
    count: "Ongoing sessions",
  },
];

export default function EventsPage() {
  const upcoming = [...getSiteUpcomingMeetings(), ...EXTRA_UPCOMING];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium font-FamiljenGrotesk mb-4 text-gray-900">
            Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Places to attend: Block meetings, Layer2 meetups, and related
            programmes. For ongoing workstreams see Projects; for finished
            reports see Publications.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            What you&apos;ll find here: upcoming plans and past archives.{" "}
            <Link href="/start" className="text-blue-700 underline">
              Start here
            </Link>{" "}
            if you are unsure.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold font-FamiljenGrotesk text-gray-900">
              Upcoming
            </h2>
            <StatusChip kind="time" status="Upcoming" />
          </div>

          <article className="rounded-lg border-2 border-blue-700 bg-blue-50 p-5 mb-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-blue-700 text-white">
                Block meeting
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {BLOCK15_META.title}
              </span>
              <span className="text-sm text-gray-600">
                {BLOCK15_META.when} · {BLOCK15_META.where}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-1">{BLOCK15_META.format}</p>
            <p className="text-sm text-gray-700 mb-4 max-w-3xl">
              {BLOCK15_META.why}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BLOCK15_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
              >
                Register now
              </a>
              <Link
                href={BLOCK15_PAGE}
                className="inline-flex items-center px-4 py-2 rounded-md border border-blue-700 text-blue-800 text-sm font-semibold hover:bg-white"
              >
                Event details →
              </Link>
            </div>
          </article>

          <div className="space-y-3">
            {upcoming.map((m) => (
              <MeetingCard key={`${m.title}-${m.when}`} meeting={m} />
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Prepare via project hubs
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Before Block 15 / GDC26, open the relevant hub for status and
              documents:
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {BLOCK15_KEY_HUBS.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/projects/${h.slug}`}
                    className="text-blue-700 hover:underline font-medium"
                  >
                    {h.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold font-FamiljenGrotesk text-gray-900">
              Past events archive
            </h2>
            <StatusChip kind="time" status="Past" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {pastEventCategories.map((category) => (
              <Link
                key={category.link}
                href={category.link}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {category.description}
                </p>
                <p className="text-xs text-gray-500">{category.count}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Meeting reports from past Blocks →{" "}
            <Link
              href="/publications?what=meeting_report"
              className="text-blue-700 underline"
            >
              Publications
            </Link>
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}

"use client";
import Footer from "@/components/Footer";
import ItemBlock from "@/components/ItemBlock";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/Hero";
import MeetingCard from "@/components/MeetingCard";
import { CUSTOM_STYLES } from "@/styles/custom";
import News from "@/components/News";
import { allNews } from "@/contents/news";
import { getSiteUpcomingMeetings } from "@/contents/hubSchedules";
import {
  BLOCK15_KEY_HUBS,
  BLOCK15_META,
  BLOCK15_PAGE,
  BLOCK15_REGISTER,
} from "@/contents/block15Promo";
import { getHubBySlug } from "@/contents/projectHubs";
import Link from "next/link";

const INTENT_PATHS = [
  {
    title: "Join a project",
    body: "Open an active project hub — status, documents, and how to contribute. Anyone can participate.",
    href: "/projects",
    cta: "Browse projects",
  },
  {
    title: "Read publications",
    body: "Study reports, meeting records, and guidance to read and cite — including historical work like the NFT study.",
    href: "/publications",
    cta: "Browse publications",
  },
  {
    title: "Attend an event",
    body: "Block meetings, Layer2 meetups, and related programmes with clear plans for what we’ll do.",
    href: "/events",
    cta: "Browse events",
  },
];

export default function Home() {
  const upcoming = getSiteUpcomingMeetings();

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <Hero type={1} />

      <section
        className="border-y border-blue-700 bg-blue-700 text-white"
        aria-label="Block 15 registration"
      >
        <div className="max-w-5xl mx-auto px-4 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-100 mb-1">
              Next Block meeting · Register now
            </p>
            <h2 className="text-2xl font-FamiljenGrotesk font-semibold mb-1">
              {BLOCK15_META.title}
            </h2>
            <p className="text-sm text-blue-100 mb-2">
              {BLOCK15_META.when} · {BLOCK15_META.where} · {BLOCK15_META.format}
            </p>
            <p className="text-sm text-blue-50 max-w-xl leading-relaxed">
              {BLOCK15_META.why}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
            <a
              href={BLOCK15_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-blue-800 text-sm font-semibold hover:bg-blue-50"
            >
              Register now
            </a>
            <Link
              href={BLOCK15_PAGE}
              className="inline-flex justify-center items-center px-5 py-3 rounded-md border border-white text-white text-sm font-semibold hover:bg-white/10"
            >
              Event details
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm text-gray-600 mb-4 text-center">
            Participation is permissionless — no membership application. Ways
            to <strong className="text-gray-900">join work</strong>,{" "}
            <strong className="text-gray-900">read</strong>, or{" "}
            <strong className="text-gray-900">attend</strong>. New here?{" "}
            <Link href="/start" className="text-blue-700 underline">
              Start here
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INTENT_PATHS.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="block rounded-lg border border-gray-200 p-5 hover:border-blue-500 transition-colors bg-gray-50"
              >
                <h2 className="text-lg font-semibold font-FamiljenGrotesk text-black mb-2">
                  {path.title}
                </h2>
                <p className="text-sm text-gray-700 mb-3">{path.body}</p>
                <span className="text-sm font-medium text-blue-700">
                  {path.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`${CUSTOM_STYLES.SECTION_CONTAINER.BLUE} items-start`}>
        <SectionTitle title="Next activities" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 mt-6 space-y-3">
          <p className={`${CUSTOM_STYLES.DESCRIPTION} text-black mb-4`}>
            Upcoming gatherings with a short plan for what we&apos;ll do — same
            pattern as project hub meeting cards.
          </p>
          {upcoming.map((m) => (
            <MeetingCard key={`${m.title}-${m.when}`} meeting={m} />
          ))}
          <p className="text-sm text-gray-700 pt-2">
            Full calendar and past events →{" "}
            <Link href="/events" className="text-blue-800 underline font-medium">
              Events
            </Link>
          </p>
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Key projects now" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 mt-4 mb-2">
          <p className={`${CUSTOM_STYLES.DESCRIPTION} text-black`}>
            Priority hubs for Block 15 and ongoing standards work. Open a hub
            for status, documents, and how to contribute.
          </p>
        </div>
        <div className={`${CUSTOM_STYLES.SECTION_FLEX.TWO} mt-8`}>
          {BLOCK15_KEY_HUBS.map((item) => {
            const hub = getHubBySlug(item.slug);
            if (!hub) return null;
            return (
              <ItemBlock
                key={hub.slug}
                title={hub.title}
                thumbnail=""
                description={hub.pitch}
                withImage={false}
                wg={hub.wg}
                projectTag={item.title}
                buttonTitle="Project hub"
                buttonJumpTo={`/projects/${hub.slug}`}
              />
            );
          })}
        </div>
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 mt-8">
          <Link
            href="/projects"
            className="text-sm font-medium text-blue-800 underline"
          >
            All active projects →
          </Link>
        </div>
      </div>

      <div className={`${CUSTOM_STYLES.SECTION_CONTAINER.BLUE} items-start`}>
        <SectionTitle title="Latest news" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 mt-2 mb-6">
          <p className="text-sm text-gray-700">
            Announcements and updates. For documents to cite, use{" "}
            <Link href="/publications" className="underline text-blue-800">
              Publications
            </Link>
            .
          </p>
        </div>
        <News news={allNews} maxItems={3} />
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}

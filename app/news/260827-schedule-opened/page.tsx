import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProgramTimetable from "@/components/events/block15/ProgramTimetable";
import {
  BLOCK15_META,
  BLOCK15_PAGE,
  BLOCK15_REGISTER,
} from "@/contents/block15Promo";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Link from "next/link";

const articleTags = ["Latest", "Conference", "Event"];

function tagStyle(tag: string) {
  const styles: Record<string, string> = {
    Latest: "bg-blue-50 text-blue-900 border-blue-200",
    Conference: "bg-gray-100 text-gray-700 border-gray-200",
    Event: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return styles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
}

export default function Block15ScheduleOpenedPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Image
              src="/images/Logo/BGIN_horizontal_01_black.png"
              alt="BGIN Logo"
              width={300}
              height={100}
              className="mx-auto mb-6"
            />
            <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
              {articleTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${tagStyle(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              The Block #15 Meeting Schedule Has Been Released
            </h1>
            <p className="text-gray-600 text-sm mb-2">
              August 27, 2026 · Blockchain Governance Initiative Network (BGIN)
            </p>
            <p className="text-gray-800 font-medium">
              {BLOCK15_META.when} · {BLOCK15_META.where} · {BLOCK15_META.format}
            </p>
          </div>

          <div className="mb-8">
            <Image
              src="/images/Events/Block3.jpeg"
              alt="BGIN Block 15"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`${BLOCK15_PAGE}#program`}
              className="inline-flex px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800"
            >
              View full program
            </Link>
            <a
              href={BLOCK15_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-lg border border-blue-700 text-blue-800 font-semibold hover:bg-white"
            >
              Register on Eventbrite
            </a>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bgin-prose prose prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>August 27, 2026</strong> — The meeting schedule for{" "}
              <strong>{BLOCK15_META.title}</strong> is now live. Sessions run{" "}
              <strong>{BLOCK15_META.when}</strong> in{" "}
              <strong>{BLOCK15_META.where}</strong>, with parallel tracks
              across Room A, Room B, and Open Space each day.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              What&apos;s new
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Full session titles, working group tracks, and room assignments
              are published for both days. Tea break 11:20–11:30, lunch
              13:00–14:00, and tea break 15:30–15:40 each day.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Timetable
            </h2>
            <div className="not-prose mb-10">
              <ProgramTimetable />
            </div>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Register
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Register via Eventbrite. Capacity is limited for in-person
              participation in Washington, D.C.
            </p>
            <div className="flex flex-wrap gap-3 not-prose mb-10">
              <a
                href={BLOCK15_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800"
              >
                Register on Eventbrite
              </a>
              <Link
                href={`${BLOCK15_PAGE}#program`}
                className="inline-flex px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50"
              >
                Full Block 15 program →
              </Link>
            </div>

            <hr className="border-gray-300 my-8" />
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 italic text-center`}>
              For media inquiries: bgin_admin@bg2x.org
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

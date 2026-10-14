import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WgChip from "@/components/WgChip";
import {
  BLOCK15_DAY2_KEYNOTE,
  BLOCK15_KEYNOTE,
  BLOCK15_META,
  BLOCK15_PAGE,
  BLOCK15_REGISTER,
} from "@/contents/block15Promo";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Link from "next/link";

const articleTags = ["Conference", "Event"];

const keynotes = [BLOCK15_KEYNOTE, BLOCK15_DAY2_KEYNOTE];

function tagStyle(tag: string) {
  const styles: Record<string, string> = {
    Conference: "bg-gray-100 text-gray-700 border-gray-200",
    Event: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return styles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
}

export default function Block15KeynotesAnnouncedPage() {
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
              Block 15 Keynote Speakers Announced
            </h1>
            <p className="text-gray-600 text-sm mb-2">
              October 14, 2026 · Blockchain Governance Initiative Network (BGIN)
            </p>
            <p className="text-gray-800 font-medium">
              {BLOCK15_META.when} · {BLOCK15_META.where} · {BLOCK15_META.format}
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bgin-prose prose prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              <strong>October 14, 2026</strong> — The two{" "}
              <strong>{BLOCK15_META.title}</strong> keynotes are confirmed.
              Both are in Room A at 09:20.
            </p>

            <ul className="not-prose space-y-6 list-none mb-10">
              {keynotes.map((talk) => (
                <li
                  key={talk.sessionId}
                  className="border border-gray-200 rounded-lg p-5 bg-gray-50"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden">
                      <Image
                        src={talk.speaker.image}
                        alt={talk.speaker.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <WgChip wg={talk.wgId} />
                      <p className="text-sm text-gray-500 mt-2">{talk.when}</p>
                      <h2 className="text-xl font-bold text-gray-900 mt-1">
                        {talk.speaker.name}
                      </h2>
                      <p className="text-sm text-gray-600">{talk.speaker.role}</p>
                      <p className="mt-2 font-semibold text-gray-900">
                        {talk.title}
                      </p>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        {talk.teaser}
                      </p>
                      <Link
                        href={talk.sessionPage}
                        className="inline-block mt-3 text-blue-700 font-semibold hover:underline"
                      >
                        Session details →
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 not-prose">
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
                Full program →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

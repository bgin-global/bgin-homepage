import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DocumentTable from "@/components/DocumentTable";
import { THEME_LABELS, THEMES } from "@/contents/themes";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

const FEATURED_THEMES = [
  "nft",
  "pqc",
  "wallet",
  "stablecoin",
  "zkp",
  "cybersecurity",
  "ai",
  "agentic-ai",
] as const;

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              Publications
            </h1>
            <p
              className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 max-w-2xl mx-auto`}
            >
              Published reports, meeting records, and guidance to read and cite.
              This is not the place to join ongoing work — use Projects for
              active hubs.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              What you&apos;ll find here: study reports (e.g.{" "}
              <Link
                href="/publications/nft-study-report-part-1"
                className="text-blue-700 underline"
              >
                NFT Study Report
              </Link>
              ), meeting reports, and governance docs. Filter by type, status,
              theme, or WG.{" "}
              <Link href="/start" className="text-blue-700 underline">
                Start here
              </Link>{" "}
              if you are unsure.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {FEATURED_THEMES.filter((t) =>
                (THEMES as readonly string[]).includes(t)
              ).map((theme) => (
                <Link
                  key={theme}
                  href={`/publications?theme=${theme}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 hover:border-blue-500"
                >
                  {THEME_LABELS[theme]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <DocumentTable />
      </div>

      <Footer />
    </main>
  );
}

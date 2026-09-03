import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  BLOCK15_META,
  BLOCK15_PAGE,
  BLOCK15_REGISTER,
} from "@/contents/block15Promo";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Link from "next/link";

const articleTags = ["Latest", "Conference"];

const SESSIONS = [
  {
    when: "2 Sep · 12:00–12:50",
    wg: "Cyber Security / Agentic AI",
    title: "Vulnerability Handling in the Agentic AI Era",
    body: "Sharing, triage, and multistakeholder cooperation when AI-speed findings outrun human-speed handling — for wallets, credentials, and ledgers.",
    href: "/news/260902-gdc26-vulnerability-handling",
    hub: "/projects/security-ai-agent",
    hubLabel: "Security AI Agent hub",
  },
  {
    when: "3 Sep · 15:00–15:50 · Room E",
    wg: "Cyber Security",
    title: "Wallet Security Assurance: ST/PP and Convergence",
    body: "Protection profiles for crypto wallets, and where identity-wallet certification and DLT-specific signing still fail to meet.",
    href: "/news/260903-gdc26-wallet-security-assurance",
    hub: "/projects/st-pp",
    hubLabel: "ST/PP hub",
  },
  {
    when: "3 Sep · 17:00–17:50 · Room K",
    wg: "IKP",
    title: "Post-Quantum Cryptography Migration on DLTs",
    body: "Deployment, crypto agility, and governance for public ledgers — not a new-algorithm contest. Includes a Japan-hosted migration prize.",
    href: "/news/260903-gdc26-pqc-migration",
    hub: "/projects/pqc-migration",
    hubLabel: "PQC Migration hub",
  },
];

function tagStyle(tag: string) {
  const styles: Record<string, string> = {
    Latest: "bg-blue-50 text-blue-900 border-blue-200",
    Conference: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return styles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
}

function Photo({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full rounded-lg shadow-md bg-gray-100"
      />
      <figcaption className="mt-2 text-sm text-gray-600">{caption}</figcaption>
    </figure>
  );
}

export default function Gdc26WrapPage() {
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
            <p className={`${CUSTOM_STYLES.TYPE.META} mb-3`}>
              GDC 2026 · Geneva · Event wrap
            </p>
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              BGIN at GDC 2026: three Geneva breakouts, onward to Block 15
            </h1>
            <p className="text-gray-600 text-sm mb-2">
              2–3 September 2026 · Palexpo, Geneva · Blockchain Governance
              Initiative Network (BGIN)
            </p>
            <p className="text-gray-800 font-medium">
              This page is the front door. Session records remain under the
              Chatham House Rule.
            </p>
          </div>

          <div className="max-w-sm mx-auto mb-8">
            <Photo
              src="/images/news/gdc26/palexpo-sign.jpg"
              alt="Global Digital Collaboration Conference 2026 sign at Palexpo, Geneva"
              caption="Venue sign, Palexpo, Geneva — Global Digital Collaboration Conference, 2–3 September 2026."
              width={900}
              height={1600}
              priority
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={BLOCK15_PAGE}
              className="inline-flex px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800"
            >
              Continue at Block 15
            </Link>
            <a
              href={BLOCK15_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-lg border border-blue-700 text-blue-800 font-semibold hover:bg-white"
            >
              Register
            </a>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bgin-prose prose prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>4 September 2026</strong> — BGIN convened three 50-minute
              breakouts at the Global Digital Collaboration conference in
              Geneva. GDC is the digital-identity and trust-infrastructure
              gathering. BGIN’s job in that room was to put DLT-specific
              questions on the same floor: how to share vulnerability findings
              at AI speed, how to assure wallets when identity and crypto stacks
              converge, and how to migrate public ledgers to post-quantum
              cryptography without inventing new algorithms.
            </p>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              This wrap is the event-level account — what we ran, where the
              records are, and where the work goes next. It does not replace
              the three Chatham House meeting reports. Those remain the
              citeable session records. Information from the rooms may be used;
              floor speakers are not identified here.
            </p>

            <div className="max-w-sm mx-auto mb-10">
              <Photo
                src="/images/news/gdc26/quai-des-bergues.jpg"
                alt="GDC flags and attendees on Quai des Bergues in Geneva"
                caption="Quai des Bergues, Geneva. GDC’s programme sat in the same city as the identity community the three breakouts were written to meet."
                width={900}
                height={1600}
              />
            </div>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Three BGIN breakouts
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Each session was 50 minutes. Each has a published meeting report
              and session slides. Open a report for agenda, notes, and Block 15
              continuation links.
            </p>

            <div className="grid gap-4 mb-10">
              {SESSIONS.map((session) => (
                <article
                  key={session.href}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-800 mb-1">
                    {session.when} · {session.wg}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {session.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">{session.body}</p>
                  <p className="text-sm">
                    <Link
                      href={session.href}
                      className="text-blue-700 underline font-medium"
                    >
                      Meeting report
                    </Link>
                    {" · "}
                    <Link href={session.hub} className="text-blue-700 underline">
                      {session.hubLabel}
                    </Link>
                  </p>
                </article>
              ))}
            </div>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              On the boards, 3 September
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Day-two afternoon boards at Palexpo listed the wallet-assurance
              session in Room E at 15:00 and the PQC migration session in Room
              K at 17:00 — the same slots as the published reports. The
              vulnerability-handling breakout had run the previous day.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Photo
                src="/images/news/gdc26/room-e-schedule.jpg"
                alt="Palexpo Room E schedule board for 3 September, including Wallet Security Assurance at 15:00"
                caption="Room E, 3 September. Wallet Security Assurance: ST/PP and Convergence, 15:00."
                width={900}
                height={1600}
              />
              <Photo
                src="/images/news/gdc26/room-k-schedule.jpg"
                alt="Palexpo Room K schedule board for 3 September, including PQC Migration on DLTs at 17:00"
                caption="Room K, 3 September. Post-Quantum Cryptography Migration on DLTs, 17:00."
                width={900}
                height={1600}
              />
            </div>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              What continues at Block 15
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              All three tracks pick up at{" "}
              <Link href={BLOCK15_PAGE} className="text-blue-700 underline">
                BGIN Block 15
              </Link>
              , {BLOCK15_META.when}, {BLOCK15_META.where} ({BLOCK15_META.format}
              ). The working sessions already on the Block 15 programme include
              a PQC keynote and IKP PQC migration, a joint Cyber + IKP Security
              AI Agent session, and a Cyber ST/PP session. Open the relevant
              project hub before you arrive.
            </p>
            <ul
              className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8 list-disc pl-6 space-y-2`}
            >
              <li>
                Event:{" "}
                <Link href={BLOCK15_PAGE} className="text-blue-700 underline">
                  BGIN Block 15
                </Link>
              </li>
              <li>
                Registration:{" "}
                <a
                  href={BLOCK15_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  Eventbrite
                </a>
              </li>
              <li>
                Project hubs:{" "}
                <Link
                  href="/projects/pqc-migration"
                  className="text-blue-700 underline"
                >
                  PQC Migration
                </Link>
                {", "}
                <Link href="/projects/st-pp" className="text-blue-700 underline">
                  ST/PP
                </Link>
                {", "}
                <Link
                  href="/projects/security-ai-agent"
                  className="text-blue-700 underline"
                >
                  Security AI Agent
                </Link>
              </li>
            </ul>

            <Photo
              src="/images/news/gdc26/sponsors.jpg"
              alt="GDC 2026 plenary screen thanking conference sponsors"
              caption="GDC plenary, Palexpo. BGIN’s breakouts sat inside this multi-sponsor programme, next to the identity and trust-infrastructure community."
              width={1600}
              height={900}
              className="mb-10"
            />

            <hr className="border-gray-300 my-8" />
            <p
              className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 italic text-center`}
            >
              For media inquiries: bgin_admin@bg2x.org
            </p>
            <p className="text-center mt-6">
              <Link href="/news" className="text-blue-700 underline">
                ← Back to News
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

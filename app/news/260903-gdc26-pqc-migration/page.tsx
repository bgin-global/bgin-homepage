import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Link from "next/link";

const articleTags = ["Latest", "Publication", "Report"];

const SLIDES_HREF =
  "/documents/meeting-reports/gdc26/GDC26_PQC_Migration_DLTs_Slides.pdf";
const REPORT_PDF_HREF =
  "/documents/meeting-reports/gdc26/GDC26_PQC_Migration_DLTs_MR.pdf";
const PUBLICATION_HREF = "/publications/gdc26-pqc-migration";
const HUB_HREF = "/projects/pqc-migration";
const BLOCK15_HREF = "/events/20261015-block15";
const BLOCK15_KEYNOTE_HREF = "/events/20261015-block15/sessions/1-2";
const BLOCK15_SESSION_HREF = "/events/20261015-block15/sessions/1-4";
const BLOCK15_REGISTER =
  "https://www.eventbrite.com/e/bgin-block15-tickets-1990274282957";

function tagStyle(tag: string) {
  const styles: Record<string, string> = {
    Latest: "bg-blue-50 text-blue-900 border-blue-200",
    Publication: "bg-indigo-50 text-indigo-900 border-indigo-200",
    Report: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return styles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
}

export default function Gdc26PqcMigrationReportPage() {
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
              GDC 2026 · Geneva · Meeting report
            </p>
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              Post-Quantum Cryptography Migration on DLTs: Deployment, Agility
              &amp; Governance
            </h1>
            <p className="text-gray-600 text-sm mb-2">
              3 September 2026 · 17:00–17:50 · Blockchain Governance Initiative
              Network (BGIN)
            </p>
            <p className="text-gray-800 font-medium">
              IKP · Chatham House Rule
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={SLIDES_HREF}
              className="inline-flex px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800"
            >
              Open session slides
            </a>
            <a
              href={REPORT_PDF_HREF}
              className="inline-flex px-6 py-3 rounded-lg border border-blue-700 text-blue-800 font-semibold hover:bg-white"
            >
              Download report PDF
            </a>
            <Link
              href={HUB_HREF}
              className="inline-flex px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50"
            >
              PQC Migration hub
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bgin-prose prose prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>3 September 2026</strong> — BGIN held a 50-minute GDC 2026
              breakout in Geneva on post-quantum cryptography migration for
              public ledgers, wallets, and credentials: deployment, crypto
              agility, and governance, not a new-algorithm contest. This page
              is the session record. It is written under the Chatham House
              Rule: information may be used; other participants are not
              identified.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Agenda
            </h2>
            <ul className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6 list-disc pl-6 space-y-2`}>
              <li>
                Opening: BGIN; PQC as deployment, agility, and governance for
                digital-asset stacks, not a new-algorithm contest.
              </li>
              <li>
                Scene-setting: quantum vulnerabilities in cryptocurrencies;
                ECDLP; error correction and interconnects; attack classes;
                migrate now.
              </li>
              <li>
                Competition: Japan-hosted, internationally open prize on PQC
                migration for blockchain networks; NIST schemes, not new
                primitives.
              </li>
              <li>
                Open discussion: slowing quantum; PQ verifiable credentials;
                signals of a step change; AI in cryptanalysis and resource
                estimates; industry roadmaps and Q-day as a probability.
              </li>
              <li>
                Close: BGIN Block 15 (Washington, D.C., October 2026); hybrid.
              </li>
            </ul>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Session description
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Wallets and credentials rely on long-lived cryptographic trust.
              NIST-standardized post-quantum primitives exist. What still lacks
              an agreed playbook for public ledgers is how to stage a hybrid
              then a cutover when every node must agree on validity rules, how
              to keep verifying old signatures while funds remain live, how to
              rotate keys without stranding dormant accounts, and how to tell a
              genuine PQ-ready stack from a screenshot.
            </p>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              This 50-minute breakout held resource estimates and migration
              design in one room. It built on BGIN IKP crypto-agility work, a
              Google Quantum AI scene-setting on quantum vulnerabilities in
              cryptocurrencies, a Japan-hosted multi-year migration prize (BGIN
              coordinating evaluation; NIST remaining the primitive authority),
              and industry remarks on protocol roadmaps. Follow-on drafting
              continues at BGIN Block 15.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Speakers
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              The session was conducted under the Chatham House Rule. Floor
              interventions may be used; neither the identity nor the
              affiliation of other participants is recorded here.
            </p>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              On the programme: Mitchell Travers (BGIN), moderating; Adam
              (Google Quantum AI), scene-setting on quantum hardware progress,
              attack classes, and why ECDLP-based public-key cryptography is
              the exposed assumption; Shin&apos;ichiro Matsuo (BGIN), announcing
              a Japan-hosted internationally open prize on PQC migration for
              blockchain networks; and Conor (Project 11), on
              protocol-community sentiment, hybrid then cutover, and
              DLT-specific knock-on costs.
            </p>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Floor discussion included whether quantum development can be
              slowed, post-quantum recommendations for verifiable credentials,
              what signals a step change if qubit count is the wrong metric,
              AI-assisted factoring and cryptanalysis, public resource-estimate
              leaderboards, and how long protocol versus hardware roadmaps
              actually are.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Slides
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Session slides were presented from a BGIN Beamer deck combining
              DLT-versus-TLS cutover frames, resource estimates versus
              migration/agility, the Japan prize lanes (METI/NEDO, BGIN, NIST),
              discussion questions, and a Block 15 call with session, event,
              and registration links.
            </p>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              <a href={SLIDES_HREF} className="text-blue-700 underline">
                Download the session slides (PDF)
              </a>
              . A{" "}
              <a href={REPORT_PDF_HREF} className="text-blue-700 underline">
                citeable PDF of this meeting report
              </a>{" "}
              is also in{" "}
              <Link href={PUBLICATION_HREF} className="text-blue-700 underline">
                Publications
              </Link>
              .
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Notes and key points
            </h2>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              The assumption at the bottom of the stack is the failure point
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Most deployed public-key cryptography, including on-chain and
              off-chain finance, rests on the elliptic-curve discrete logarithm
              problem being hard. A cryptographically relevant quantum computer
              makes that problem easy. Contagion paths already
              exist—stablecoins backed by short-term government debt; a planned
              NYSE-linked on-chain trading system; an EU pilot for
              cross-border educational credentials using on-chain identities.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Qubit count is the wrong progress metric
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Google&apos;s Sycamore (53 qubits, 2019) to Willow (105 qubits,
              2024 error-correction demonstration) looks like a slow doubling
              if one only counts qubits. The years were spent on capabilities
              that make larger devices functional. Quantum error correction was
              presented as a performance discontinuity; a next discontinuity
              discussed was coherent interconnects. Progress was described as
              escaping one scalability barrier then hitting the next, not
              Moore&apos;s-law linear.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Attack classes are not one race
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              In-flight attacks on a public mempool need a fast
              cryptographically relevant machine. At-rest attacks can use
              slower machines against keys already on-chain. A third class,
              attributed to the recent PRX Quantum paper, separates exploit
              manufacture from exploit use. Harm paths named included theft of
              on-chain assets, rewriting history on proof-of-work consensus,
              breaking confidentiality, inflation attacks, collapsing
              stablecoin pegs, and forging cryptographic votes. Devices of that
              class do not exist yet; the way off the bleak path is post-quantum
              cryptography.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Do not wait for a grokable Q-day signal
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Late entrants may not announce themselves; known labs may go
              quieter. The recommended stance was to assume it will happen and
              start PQC work now, rather than wait for a visible “this is the
              moment.”
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Japan-hosted prize: migrate networks, do not invent a primitive
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              A multi-year, internationally open competition (Japanese
              government as host and funder; BGIN coordinating; path into a
              BGIN standard and then ISO, including TC 307) will score
              efficient methods to migrate blockchain networks to
              quantum-resistant signatures and advanced key management, using
              NIST-class schemes. Comparative targets named were Bitcoin and
              Ethereum. Evaluation axes: theoretical security and
              implementation efficiency. This year defines a “PQC-ready” chain,
              including a one-day workshop alongside SSR in December.
              Applications next year; winner targeted by March 2029. Block 15
              stands up evaluation.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              AI is a forcing function for crypto agility
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              There is no known campaign to slow quantum hardware; AI is being
              used to speed it. AI cryptanalysis is already in the wild. A
              one-shot jump from elliptic curves to ML-DSA was rejected. Crypto
              agility—rotating schemes without a wholesale redesign—was
              presented as the design goal. ML-DSA was noted as the relevant
              recommended scheme for verifiable credentials.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Industry is at “it is real; what now”
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Protocol roadmaps are appearing. After “yes, migrate,” the hard
              questions are algorithm choice, throughput, block size, node
              sync, and social consensus. Minimum protocol-side timeline to a
              fully post-quantum chain was given as about two to three years on
              the aggressive end, with an undefined user-migration tail. Hybrid
              then cutover was the preferred path. Elliptic curves were stated
              as still fine to use today.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Q-day is a probability, not a date on a slide
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              The quantum speaker would not bet personal money on a
              cryptographically relevant machine by 2030, would bet around
              2032, and would put 2029 at about 5%. For a cybersecurity owner,
              that 5% already demands action. A same-day viral RSA-260
              factorization was classical AI, not quantum; sentiment risk for
              institutions was named as a reason to start now.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Session outcomes
            </h2>
            <ul className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6 list-disc pl-6 space-y-2`}>
              <li>
                NIST primitives exist; the DLT gap is deployment,
                consensus-wide validity rules, long-lived verification, dormant
                funds, and comparable evidence of “PQ-ready.”
              </li>
              <li>
                Qubit count and a single Q-day date are the wrong monitors;
                error correction, interconnects, compiler progress, and a 5%
                near-term tail already justify starting now.
              </li>
              <li>
                Crypto agility as the design objective: hybrid then cutover; do
                not freeze a one-time elliptic-curve-to-ML-DSA rewrite.
              </li>
              <li>
                A Japan-hosted, internationally open migration prize (NIST
                schemes; Bitcoin/Ethereum as evaluation anchors; BGIN standard
                then ISO), with Block 15 to stand up evaluation.
              </li>
              <li>
                A named continuation: BGIN Block 15 (15–16 October 2026,
                Washington, D.C.; hybrid), including Keynote: PQC (15 October,
                09:20–09:50) and IKP: PQC Migration (15 October, 09:50–11:20
                and 11:30–13:00).
              </li>
            </ul>
            <ul className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-10 list-disc pl-6 space-y-2`}>
              <li>
                Event:{" "}
                <Link href={BLOCK15_HREF} className="text-blue-700 underline">
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
                Keynote:{" "}
                <Link
                  href={BLOCK15_KEYNOTE_HREF}
                  className="text-blue-700 underline"
                >
                  Keynote: PQC
                </Link>
              </li>
              <li>
                Session:{" "}
                <Link
                  href={BLOCK15_SESSION_HREF}
                  className="text-blue-700 underline"
                >
                  IKP: PQC Migration
                </Link>
              </li>
            </ul>

            <hr className="border-gray-300 my-8" />
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 italic text-center`}>
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

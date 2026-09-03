import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Link from "next/link";

const articleTags = [
  "Latest",
  "Publication",
  "Report",
  "Cyber Security",
];

const SLIDES_HREF =
  "/documents/meeting-reports/gdc26/GDC26_Wallet_Security_Assurance_STPP_Slides.pdf";
const REPORT_PDF_HREF =
  "/documents/meeting-reports/gdc26/GDC26_Wallet_Security_Assurance_STPP_MR.pdf";
const PUBLICATION_HREF = "/publications/gdc26-wallet-security-assurance";
const HUB_HREF = "/projects/st-pp";
const BLOCK15_HREF = "/events/20261015-block15";
const BLOCK15_SESSION_HREF = "/events/20261015-block15/sessions/2-10";
const BLOCK15_REGISTER =
  "https://www.eventbrite.com/e/bgin-block15-tickets-1990274282957";

function tagStyle(tag: string) {
  const styles: Record<string, string> = {
    Latest: "bg-blue-50 text-blue-900 border-blue-200",
    Publication: "bg-indigo-50 text-indigo-900 border-indigo-200",
    Report: "bg-gray-100 text-gray-700 border-gray-200",
    "Cyber Security": "bg-emerald-50 text-emerald-900 border-emerald-200",
  };
  return styles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
}

export default function Gdc26WalletSecurityAssuranceReportPage() {
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
              Wallet Security Assurance: ST/PP and Convergence
            </h1>
            <p className="text-gray-600 text-sm mb-2">
              3 September 2026 · 15:00–15:50 · Blockchain Governance Initiative
              Network (BGIN)
            </p>
            <p className="text-gray-800 font-medium">
              Cyber Security · Chatham House Rule
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
              ST/PP hub
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bgin-prose prose prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>3 September 2026</strong> — BGIN held a 50-minute GDC 2026
              breakout in Geneva on wallet security assurance: Security Target
              and Protection Profile (ST/PP) work for crypto and digital-asset
              wallets, and convergence with digital-identity certification.
              This page is the session record. It is written under the Chatham
              House Rule: information may be used; other participants are not
              identified.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Agenda
            </h2>
            <ul className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6 list-disc pl-6 space-y-2`}>
              <li>
                Opening: BGIN; ST/PP for crypto and digital-asset wallets;
                exchange with the digital-identity community.
              </li>
              <li>
                Scene-setting: key-management failures; RNG, storage,
                attestation, isolation, blind signing; Coldcard and
                Slope/Solana examples.
              </li>
              <li>
                Existing frameworks: Common Criteria, SSCD/QSCD, FIDO,
                GlobalPlatform TEE, FIPS/PCI, CSPN.
              </li>
              <li>
                Working frame: use cases, ToEs, and tiered PPs (non-custodial,
                custodial, MPC/threshold); threat mapping including PQC.
              </li>
              <li>
                Convergence: shared needs with ID wallets versus crypto-specific
                signing, smart-contract authorization, and ZK.
              </li>
              <li>
                Open discussion: startup-workable schemes; QSCD/WSCA; EUDI/SC
                27; legal mandates; AI-driven threats.
              </li>
              <li>
                Close: BGIN Block 15 (Washington, D.C., October 2026); hybrid.
              </li>
            </ul>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Session description
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Trustworthy digital-asset wallets need implementation-level
              security assurance, yet there is still no widely recognized
              protection profile for crypto wallets. Vendors who want a
              certified product must write their own security target. Existing
              schemes—Common Criteria, secure elements, HSMs, SSCD/QSCD,
              GlobalPlatform TEE, FIDO, FIPS, and emerging EUDI
              certification—are necessary building blocks, but they do not yet
              cover DLT-specific cryptography, blind signing of non-trivial
              transactions, MPC/threshold custody, or the mix of retail and
              institutional ToEs.
            </p>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              This 50-minute breakout treated wallet assurance as a
              gap-mapping and convergence problem, not as a rival certification
              scheme. It built on BGIN&apos;s Security Target / Protection
              Profile work for DLT and wallet stacks, public incident patterns,
              and one vendor&apos;s CSPN-certified hardware-wallet security
              functions as a reusable starting pattern. The room was asked what
              is missing for identity and blockchain wallets, how a new
              framework can remain workable for small startups, and which use
              cases and assurance levels to take first, with follow-on drafting
              at BGIN Block 15.
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
              Speaker: Julien Bringer (BGIN Cyber Security). Presentation on
              failures, existing frameworks, certified-wallet security
              functions, use-case PPs, threats, and ID/crypto convergence;
              followed by a discussion starter on gaps and on making assurance
              workable beyond a copy-paste of heavy ISO/Common Criteria
              practice.
            </p>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Floor discussion included QSCD / signature-activation and
              WSCA/WSCD architecture splits, EUDI and EUCC protection-profile
              work, ISO/IEC JTC 1/SC 27 and CEN/TC 224, legal requirements
              written into identity-wallet law, architecture-agnostic versus
              architecture-specific profiles, and AI-assisted building and
              AI-driven attacks.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Slides
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Session slides were presented from a BGIN Beamer deck combining
              the scene-setting frames (real-world failures; Coldcard lessons;
              certified-wallet examples and ST security functions; use-case PPs
              and ToEs; core threats; ID/crypto mapping; PQC agility; candidate
              reference designs), discussion questions, and a Block 15 call
              with session, event, and registration links.
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
              The gap is already exploited
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Digital-asset wallets have seen repeated failures around key
              generation, key storage, and transaction consent. Named patterns
              included weak or unused RNG (including firmware that sat on a
              certified secure-element RNG but did not consume it), seed
              material held on a backend, weak entropy in JavaScript wallet
              stacks, missing firmware/software attestation, missing isolation
              between apps on the same hardware, and blind signing—authorizing
              a transaction without a faithful account of what will execute,
              including non-trivial smart-contract calls. The takeaway was not
              that hardware is useless, but that a chip certificate is not a
              product certificate: users buy the integrated path, and that path
              is what has to be evaluated.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Coldcard as a cautionary ToE
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              A hardware wallet with a secure element and a certified RNG still
              generated weak seeds when firmware left the hardware entropy path
              unused. Extra user ceremonies (dice rolls, passphrases) do not
              repair a broken default path if they are optional and unevenly
              practiced. A wallet protection profile would have to test that
              the seed path actually consumes trusted entropy, not merely that
              a TRNG exists on the board.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Existing frameworks are inventory, not a finished crypto-wallet PP
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Decades of smart-card and HSM evaluation (payment, e-passports),
              Common Criteria, SSCD/QSCD profiles for key generation, storage,
              lifecycle and signature consent, FIDO-style user presence,
              GlobalPlatform TEE protection profiles, FIPS, and PCI were
              presented as reusable material. Using a TEE, a secure element, or
              an HSM is not enough if part of the execution, key generation, or
              update path sits outside the evaluated boundary. The Target of
              Evaluation has to be drawn consistently with the claim.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              One public existence proof, not a global PP
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              A hardware-wallet vendor defined security targets under the
              French CSPN scheme (Ledger Nano S from 2019, with later Nano S
              Plus and Nano X iterations). Functions in the ST included a true
              random number generator, attestation of firmware/software,
              end-user verification, post-issuance capability over a secure
              channel (remote update), and app isolation so third-party apps
              cannot observe or contaminate official chain apps. BGIN&apos;s
              proposed move is to extract that pattern, extend it for
              crypto-specific threats, and make it reusable as a common
              protection profile rather than leaving every vendor to write a
              one-off ST.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Use cases, ToEs, and assurance levels will not collapse into one
              profile
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Custodial wallets (exchanges, enterprise custody; often HSM or
              confidential computing) differ from self-custodial hardware and
              mobile wallets. MPC and threshold cryptography are in production
              and largely without certification references for their security
              functions and protocols. Retail Web3 interaction and
              institutional custody were expected to share some functions
              (strong RNG) but not the same end-to-end functions or the same
              evaluation rigor. Candidate PP families discussed were
              non-custodial, custodial, and MPC/threshold. An open sequencing
              question was whether to start with retail wallets or with
              custodians.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Threats the PP must name
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Weak RNG; insecure keystore; cross-app contamination;
              supply-chain attacks on hardware and firmware together; remote
              exploitation; insufficient user authentication; insecure update;
              side channels at higher assurance; attestation failure;
              post-quantum break of long-lived keys; and threshold-specific
              failures (quorum collusion, share reconstruction, insecure node
              communication). Crypto agility and a secure update channel were
              treated as core security functions for PQC transition, not later
              features. Advanced zero-knowledge constructions used in
              blockchain stacks sit outside many currently approved
              cryptographic catalogues.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Commonalities with ID wallets, and the honest remainder
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Secure key generation and storage, user authentication and
              binding, attestation, verifiable claims, privacy, PQC, and crypto
              agility appear on both sides, often under different names.
              Crypto-wallet specificities include chain-specific signing
              algorithms, authorization of programmable transactions, and more
              complex ZK usage. Reference designs (SE-based hardware;
              TEE/mobile; HSM/MPC custodial) were offered as a way to
              stress-test a profile against realistic ToEs, with some common
              elements across all three: RNG validation, a secure update
              channel, and attestation.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Workable for small startups
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Common Criteria / ISO 15408-class evaluation was described as too
              heavy for most blockchain wallet teams, which are small. A scheme
              that only large vendors can complete will not be followed.
              Alignment with existing certified components was presented as the
              practical path: ask secure-element, TEE, and HSM providers for
              minimal deltas (for example one additional key-generation method
              or crypto scheme) so integrators can reuse already-certified
              products rather than forcing a full custom ST on every startup.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Architecture split, not a single hardware box
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              From the floor, electronic-signature practice already splits a
              QSCD (hardware) from a signature-activation module that may sit
              inside or outside that hardware; EUDI-style wallets similarly
              split a wallet secure cryptographic device from a wallet secure
              cryptographic application, including mixed mobile-plus-HSM
              deployments. The same split was urged for crypto wallets,
              especially mobile security with an HSM backend: hardware
              assurance and application/activation assurance are different
              evaluation problems.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Standards landscape
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              It was stated that ISO/IEC JTC 1/SC 27 does not currently have a
              protection profile or certification methodology dedicated to
              crypto wallets. European identity-wallet work (including CEN/TC
              224 WG20 on the EUDI wallet, EUCC protection profiles, and QSCD /
              remote-signing work) is active but not a crypto-wallet project.
              Relationship to that work was framed as reuse: talk to the same
              component vendors, add only what crypto wallets need, and keep
              the extra effort small because crypto-wallet certification is not
              yet mandated at EUDI-like legal granularity.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              Law is a motivator on the ID side, not yet a substitute PP on the
              crypto side
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              EUDI wallets carry legal requirements on high assurance,
              revocation, wallet-instance and key attestation, and
              registration/access certificates. Crypto-wallet protection
              profiles do not exist, so those legal requirements are not
              “already covered.” Custody regulation may demand an appropriate
              security level without yet specifying certification. The job was
              still described as serving wallet providers and users first;
              usefulness for the Cyber Resilience Act was noted as a possible
              connection, not the design centre.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              High-level profiles, many architectures
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Identity-wallet requirements were described from the floor as
              needing to fit internal or external secure elements and HSMs,
              with WSCA/WSCD certification (including debate around EAL4+ /
              AVA_VAN.5-class levels) and key attestation still waiting on
              further ENISA clarity. The crypto-wallet side made the same
              claim: the PP cannot be tied to one implementation; high-level
              component architectures, including web wallets, have to remain in
              scope.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              AI as a missing assurance surface
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              From a builder&apos;s standpoint, systems are increasingly built
              with AI, and recent attacks were characterized as AI-driven. A
              pragmatic framework would be helped by agentic harnesses that
              encode agreed requirements into checkable systems. The
              certification community was said to be still discussing how to
              give assurance about AI behaviour and how to anticipate AI-driven
              threats; additional research on AI in risk management was treated
              as needed before the topic is ready to lock into a PP.
            </p>
            <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-8 mb-3">
              BGIN&apos;s role between the wild and ISO
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Block meetings are open. Stakeholders sought included wallet
              vendors, evaluation labs, financial and eID regulators,
              identity-wallet communities, and experts from FIDO /
              GlobalPlatform-class efforts that have already adapted existing
              PPs. BGIN already holds a Category A liaison with ISO/TC 307 and
              is starting the same process with ISO/IEC JTC 1/SC 27, with the
              intent that a BGIN ST/PP deliverable can later move into the ISO
              document pipeline (including a PAS-style path). The reason given
              was that crypto wallets are often built by startups who are not
              in the ISO room; the intermediate community has to carry their
              input into a standard that labs can actually run.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-4`}>
              Session outcomes
            </h2>
            <ul className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6 list-disc pl-6 space-y-2`}>
              <li>
                A shared problem statement: there is no common protection
                profile for crypto wallets, so certification today means a
                vendor-specific security target; chip or component certificates
                do not evaluate the integrated seed, update, isolation, and
                consent path.
              </li>
              <li>
                A working inventory of reusable building blocks (Common
                Criteria, CSPN, SSCD/QSCD, GlobalPlatform TEE, FIDO, FIPS/PCI,
                EUDI/EUCC drafts) and an explicit non-goal: do not fork those
                schemes; write only the wallet/DLT gap.
              </li>
              <li>
                Candidate structure for BGIN ST/PP work: map use cases to
                threats; allow multiple ToEs and PPs (non-custodial, custodial,
                MPC/threshold); use tiered assurance; keep RNG, secure update,
                and attestation as common functions; treat PQC agility as an
                objective from the start.
              </li>
              <li>
                Distinctions the room actually used: hardware entropy present
                versus entropy used; QSCD/WSCD versus WSCA/activation software;
                legal high-assurance mandates for ID wallets versus
                not-yet-specified crypto-wallet certification; evaluate-able
                high-level architectures versus freezing one implementation.
              </li>
              <li>
                Floor constraint that a copy-paste of heavy Common Criteria
                practice will not be followed by small wallet startups;
                practical reuse of certified secure components, with minimal
                crypto-wallet deltas, is the adoption path.
              </li>
              <li>
                Confirmation that SC 27 has no crypto-wallet PP today, that
                CEN/TC 224 / EUCC identity-wallet work is adjacent rather than
                sufficient, and that CRA-facing usefulness is a possible later
                connection.
              </li>
              <li>
                Open research rather than a locked requirement: AI-assisted
                development and AI-driven attacks as an assurance surface,
                including agentic harnesses that encode agreed frameworks.
              </li>
              <li>
                A named continuation: BGIN Block 15 (15–16 October 2026,
                Washington, D.C.; hybrid), including Cyber: Security Target
                &amp; Protection Profile (ST/PP) (16 October, 15:40–17:10).
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
                Session:{" "}
                <Link
                  href={BLOCK15_SESSION_HREF}
                  className="text-blue-700 underline"
                >
                  Cyber: Security Target &amp; Protection Profile (ST/PP)
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

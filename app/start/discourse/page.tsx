import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DiscourseLogo } from "@/components/DiscourseGuideLink";
import {
  DISCOURSE_HOME,
  DISCOURSE_ONBOARDING,
  safeDiscourseNext,
} from "@/contents/discourse";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

export default function DiscourseGuidePage({
  searchParams,
}: {
  searchParams?: { next?: string };
}) {
  const nextUrl = safeDiscourseNext(searchParams?.next ?? null);
  const primaryHref = nextUrl ?? DISCOURSE_HOME;
  const primaryLabel = nextUrl
    ? "Continue to Discourse"
    : "Open BGIN Discourse";

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div
        className={`bg-gray-50 border-b border-gray-200 ${CUSTOM_STYLES.SPACE.SECTION} px-4`}
      >
        <div className="max-w-3xl mx-auto">
          <p className={`${CUSTOM_STYLES.TYPE.META} mb-4`}>
            <Link href="/start" className="text-blue-700 hover:underline">
              Start here
            </Link>
            {" / "}
            Discourse
          </p>
          <div className="flex items-start gap-4 mb-3">
            <DiscourseLogo
              size={48}
              className="h-12 w-12 shrink-0 mt-0.5"
            />
            <h1 className={`${CUSTOM_STYLES.TYPE.DISPLAY} text-black`}>
              How to work on Discourse
            </h1>
          </div>
          <p className={`${CUSTOM_STYLES.TYPE.LEDE} max-w-2xl`}>
            Discourse is BGIN&apos;s official working forum. Anyone can join —
            no membership application. Use it to ask questions, comment on
            drafts, and follow working-group threads between Block meetings.
          </p>
          {nextUrl && (
            <p className={`mt-3 ${CUSTOM_STYLES.TYPE.META}`}>
              After you are ready, we will send you to the category or topic you
              came from.
            </p>
          )}
        </div>
      </div>

      <div className={`max-w-3xl mx-auto px-4 ${CUSTOM_STYLES.SPACE.SECTION} space-y-10`}>
        <section>
          <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} text-gray-900 mb-3`}>
            What working on Discourse looks like
          </h2>
          <ul className={`space-y-3 ${CUSTOM_STYLES.TYPE.META} text-gray-700`}>
            <li className="border-l-4 border-blue-700 pl-3">
              <strong className="text-gray-900">Read and watch</strong> — follow
              a working-group category or a project thread for updates.
            </li>
            <li className="border-l-4 border-blue-700 pl-3">
              <strong className="text-gray-900">Ask and comment</strong> — reply
              in existing topics; raise issues on drafts before Block sessions.
            </li>
            <li className="border-l-4 border-blue-700 pl-3">
              <strong className="text-gray-900">Share written input</strong> —
              propose changes for session chairs to review (fee waivers at Block
              meetings often start here).
            </li>
          </ul>
          <p className={`mt-4 ${CUSTOM_STYLES.TYPE.META}`}>
            Project hubs on this site show status and documents; Discourse is
            where the ongoing conversation happens.{" "}
            <Link href="/projects" className="text-blue-700 underline">
              Browse project hubs →
            </Link>
          </p>
        </section>

        <section>
          <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} text-gray-900 mb-3`}>
            Create an account (about 2 minutes)
          </h2>
          <ol className={`space-y-4 ${CUSTOM_STYLES.TYPE.META} text-gray-700`}>
            <li className="flex gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white text-xs font-semibold">
                1
              </span>
              <div>
                <p className="font-semibold text-gray-900">Open Discourse</p>
                <p className="mt-0.5 text-gray-600">
                  Go to{" "}
                  <a
                    href={DISCOURSE_HOME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    bgin.discourse.group
                  </a>{" "}
                  and choose <strong>Sign Up</strong> (or Log In if you already
                  have an account).
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white text-xs font-semibold">
                2
              </span>
              <div>
                <p className="font-semibold text-gray-900">Verify your email</p>
                <p className="mt-0.5 text-gray-600">
                  Confirm the address Discourse sends you so you can post and
                  receive notifications.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white text-xs font-semibold">
                3
              </span>
              <div>
                <p className="font-semibold text-gray-900">
                  Find a working group or topic
                </p>
                <p className="mt-0.5 text-gray-600">
                  Use Categories (IKP, Cyber Security, FASE, Agentic AI) or open
                  the link from a project hub. Introduce yourself if you like —
                  newcomers are welcome.
                </p>
              </div>
            </li>
          </ol>
          <p className={`mt-4 ${CUSTOM_STYLES.TYPE.META}`}>
            Need more detail? See the community{" "}
            <a
              href={DISCOURSE_ONBOARDING}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              onboarding guide on Discourse
            </a>
            .
          </p>
        </section>

        <section className="rounded-md border border-blue-700 bg-blue-50 p-6">
          <h2 className={`${CUSTOM_STYLES.TYPE.SUBTITLE} text-gray-900 mb-2`}>
            Ready to go
          </h2>
          <p className={`${CUSTOM_STYLES.TYPE.META} mb-4`}>
            {nextUrl
              ? "Continue to the Discourse page linked from the hub or page you came from."
              : "Open the forum when you are ready to browse or sign up."}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
            >
              <DiscourseLogo size={24} className="h-6 w-6 shrink-0" />
              {primaryLabel} ↗
            </a>
            {nextUrl && (
              <a
                href={DISCOURSE_HOME}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-700 underline"
              >
                Or open Discourse home →
              </a>
            )}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Already have an account? Use the button above — you can log in on
            Discourse and skip the signup steps.
          </p>
        </section>

        <p className={CUSTOM_STYLES.TYPE.META}>
          <Link href="/start" className="text-blue-700 underline font-medium">
            ← Back to Start here
          </Link>
          {" · "}
          <Link
            href="/projects"
            className="text-blue-700 underline font-medium"
          >
            Browse projects
          </Link>
        </p>
      </div>

      <Footer />
    </main>
  );
}

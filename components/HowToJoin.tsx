import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

function HowToJoin() {
  return (
    <div className="bg-white w-full border-b border-gray-200 px-4 py-16">
      <div className="max-w-5xl m-auto rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-10">
        <div className="max-w-2xl">
          <h2 className={`${CUSTOM_STYLES.TITLE.LEFT} text-black mb-3`}>
            Anyone can participate
          </h2>
          <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-2`}>
            BGIN is not a membership club. Participation is{" "}
            <strong className="text-gray-900">permissionless</strong> — join
            the discussion, contribute to a project, or attend a meeting without
            an application or invitation gate.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Start on Discourse (official working forum), open a{" "}
            <Link href="/projects" className="text-blue-700 underline">
              project hub
            </Link>{" "}
            for status and documents, or use{" "}
            <Link href="/start" className="text-blue-700 underline">
              Start here
            </Link>{" "}
            if you are new. Block meeting registration stays in the header and
            campaign band above.
          </p>
          <a
            href="https://bgin.discourse.group/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-4 py-2 rounded-md border border-blue-700 text-blue-800 text-sm font-medium hover:bg-blue-50"
          >
            Work on Discourse
          </a>
          <p className="mt-4 text-sm text-gray-700">
            <Link
              href="/projects"
              className="text-blue-700 underline font-medium"
            >
              Browse all projects →
            </Link>
            {" · "}
            <Link href="/start" className="text-blue-700 underline font-medium">
              New here? Start here →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default HowToJoin;

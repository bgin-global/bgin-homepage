import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatusChip from "@/components/StatusChip";
import { THEME_LABELS } from "@/contents/themes";
import {
  documentPdfHref,
  getPublicationBySlug,
  getPublicationsWithSlugs,
  relatedProjectsForDoc,
} from "@/lib/publications";
import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";
import { notFound } from "next/navigation";

const WHAT_LABELS = {
  meeting_report: "Meeting report",
  study_report: "Study report",
  news_letter: "Newsletter",
  governance_doc: "Governance",
  working_doc: "Working document",
  other: "Other",
} as const;

export function generateStaticParams() {
  return getPublicationsWithSlugs().map((d) => ({ slug: d.slug! }));
}

export default function PublicationPage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = getPublicationBySlug(params.slug);
  if (!doc) notFound();

  const relatedProjects = relatedProjectsForDoc(doc);
  const pdfHref = documentPdfHref(doc);

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <Link
            href="/publications"
            className="text-sm text-blue-700 hover:underline"
          >
            ← All publications
          </Link>
          <div className="flex flex-wrap gap-2 mt-4 mb-3 items-center">
            <StatusChip kind="publication" status={doc.status} />
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-900">
              {WHAT_LABELS[doc.what]}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-200 text-gray-700">
              {doc.author}
            </span>
          </div>
          <h1 className={`${CUSTOM_STYLES.TITLE.LEFT} text-black mb-3`}>
            {doc.title}
          </h1>
          {doc.summary && (
            <p className="text-lg text-gray-700 max-w-3xl mb-6">{doc.summary}</p>
          )}
          <div className="flex flex-wrap gap-3">
            <a
              href={pdfHref}
              className="inline-flex px-4 py-2 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
            >
              Open PDF
            </a>
            <Link
              href="/projects"
              className="inline-flex px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Looking to participate? See Projects
            </Link>
          </div>
        </div>
      </div>

      {doc.status === "Historical" && (
        <div className="max-w-5xl mx-auto px-4 pt-8">
          <div className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800">
            This is a historical publication. It is intended for reading and
            citation. It is <strong>not</strong> an active project hub — there
            is no join / contribute workstream attached to this page.
          </div>
        </div>
      )}

      {doc.status === "Superseded" && (
        <div className="max-w-5xl mx-auto px-4 pt-8">
          <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            This document has been superseded. Prefer a newer version when
            citing, if one is listed under Related or in Publications.
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <section className="rounded-lg border border-gray-200 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
            Status of this document
          </h2>
          <dl className="space-y-2 text-sm">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="text-gray-500">Status</dt>
              <dd>{doc.status}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="text-gray-500">Published</dt>
              <dd>{doc.when}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="text-gray-500">Working group</dt>
              <dd>{doc.author}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="text-gray-500">Language</dt>
              <dd>{doc.language}</dd>
            </div>
            {doc.themes.length > 0 && (
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <dt className="text-gray-500">Themes</dt>
                <dd>
                  {doc.themes.map((t) => (
                    <Link
                      key={t}
                      href={`/publications?theme=${t}`}
                      className="text-blue-700 hover:underline mr-2"
                    >
                      {THEME_LABELS[t]}
                    </Link>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </section>

        {relatedProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-FamiljenGrotesk font-semibold mb-3">
              Related active work
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              If you want to participate in ongoing discussions on related
              themes, open a project hub:
            </p>
            <ul className="space-y-2">
              {relatedProjects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-blue-700 hover:underline font-medium"
                  >
                    {p.title} →
                  </Link>
                  <span className="text-xs text-gray-500 ml-2">{p.status}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="text-sm text-gray-600">
          Not sure which section you need?{" "}
          <Link href="/start" className="text-blue-700 underline">
            Start here
          </Link>
        </p>
      </div>

      <Footer />
    </main>
  );
}

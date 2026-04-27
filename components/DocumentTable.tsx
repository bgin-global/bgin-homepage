"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { documents } from "@/contents/documents";
import type { DocumentAuthor, DocumentLanguage, DocumentWhat } from "@/contents/documents";

const AUTHOR_OPTIONS: DocumentAuthor[] = ["IKP", "FASE", "CS", "IGWP", "KSG", "Other"];
const LANGUAGE_OPTIONS: DocumentLanguage[] = ["EN", "JP"];
const WHAT_OPTIONS: DocumentWhat[] = [
  "meeting_report",
  "study_report",
  "news_letter",
  "governance_doc",
  "working_doc",
  "other",
];

const WHAT_LABELS: Record<DocumentWhat, string> = {
  meeting_report: "Meeting Report",
  study_report: "Study Report",
  news_letter: "Newsletter",
  governance_doc: "Governance Doc",
  working_doc: "Working Doc",
  other: "Other",
};

function buildHref(path: string): string {
  const encoded = path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  return `/documents/${encoded}`;
}

function SelectFilter({
  label,
  paramKey,
  options,
  value,
  onChange,
  labelFn,
}: {
  label: string;
  paramKey: string;
  options: string[];
  value: string;
  onChange: (key: string, val: string) => void;
  labelFn?: (v: string) => string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(paramKey, e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[140px]"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {labelFn ? labelFn(opt) : opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function PreviewModal({ url, onClose }: { url: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <span className="text-sm font-semibold text-gray-700">Preview</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none px-1"
            aria-label="Close preview"
          >
            &times;
          </button>
        </div>
        <iframe src={url} className="flex-1 w-full rounded-b-xl" title="Document Preview" />
      </div>
    </div>
  );
}

function DocumentTableInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fAuthor = searchParams.get("author") ?? "";
  const fLanguage = searchParams.get("language") ?? "";
  const fWhat = searchParams.get("what") ?? "";
  const fWhere = searchParams.get("where") ?? "";
  const fWhenFrom = searchParams.get("when_from") ?? "";
  const fWhenTo = searchParams.get("when_to") ?? "";

  const hasDateFilter = fWhenFrom !== "" || fWhenTo !== "";

  const whereOptions = Array.from(new Set(documents.map((d) => d.where))).sort(
    (a, b) => {
      const aBlock = a.match(/^Block (\d+)$/);
      const bBlock = b.match(/^Block (\d+)$/);
      if (aBlock && bBlock) return Number(aBlock[1]) - Number(bBlock[1]);
      if (aBlock) return -1;
      if (bBlock) return 1;
      if (a === "Other") return 1;
      if (b === "Other") return -1;
      return a.localeCompare(b);
    }
  );

  const whenOptions = Array.from(
    new Set(documents.filter((d) => d.when !== "unclear").map((d) => d.when))
  ).sort();

  const filtered = documents.filter((doc) => {
    if (fAuthor && doc.author !== fAuthor) return false;
    if (fLanguage && doc.language !== fLanguage) return false;
    if (fWhat && doc.what !== fWhat) return false;
    if (fWhere && doc.where !== fWhere) return false;
    if (hasDateFilter) {
      if (doc.when === "unclear") return false;
      if (fWhenFrom && doc.when < fWhenFrom) return false;
      if (fWhenTo && doc.when > fWhenTo) return false;
    }
    return true;
  });

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function clearAll() {
    router.push(pathname, { scroll: false });
  }

  const hasActiveFilter = fAuthor || fLanguage || fWhat || fWhere || fWhenFrom || fWhenTo;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 xl:px-0">
      {previewUrl && (
        <PreviewModal url={previewUrl} onClose={() => setPreviewUrl(null)} />
      )}

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 shadow-sm">
        <div className="flex flex-wrap gap-4 items-end">
          <SelectFilter
            label="Author / WG"
            paramKey="author"
            options={AUTHOR_OPTIONS}
            value={fAuthor}
            onChange={updateParam}
          />
          <SelectFilter
            label="Language"
            paramKey="language"
            options={LANGUAGE_OPTIONS}
            value={fLanguage}
            onChange={updateParam}
          />
          <SelectFilter
            label="Type"
            paramKey="what"
            options={WHAT_OPTIONS}
            value={fWhat}
            onChange={updateParam}
            labelFn={(v) => WHAT_LABELS[v as DocumentWhat]}
          />
          <SelectFilter
            label="Event"
            paramKey="where"
            options={whereOptions}
            value={fWhere}
            onChange={updateParam}
          />

          {/* When range */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              From (YYYY/MM)
            </label>
            <select
              value={fWhenFrom}
              onChange={(e) => updateParam("when_from", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[120px]"
            >
              <option value=""> - </option>
              {whenOptions.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              To (YYYY/MM)
            </label>
            <select
              value={fWhenTo}
              onChange={(e) => updateParam("when_to", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[120px]"
            >
              <option value=""> - </option>
              {whenOptions.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilter && (
            <button
              onClick={clearAll}
              className="mt-auto px-4 py-1.5 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        {hasDateFilter && (
          <p className="mt-3 text-xs text-gray-400">
            * Documents with unclear date are hidden while a date range filter is active.
          </p>
        )}
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500 mb-3">
        {filtered.length} document{filtered.length !== 1 ? "s" : ""} found
        {hasActiveFilter ? " (filtered)" : ""}
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="px-4 py-3 font-semibold whitespace-nowrap">ID</th>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold w-[130px]">Event</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Date</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">WG</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Lang</th>
              <th className="px-4 py-3 font-semibold w-[110px]">Type</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                  No documents match the selected filters.
                </td>
              </tr>
            ) : (
              filtered.map((doc, i) => (
                <tr
                  key={`${doc.path}-${i}`}
                  className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {doc.id}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {doc.title}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {doc.where}
                  </td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                    {doc.when}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {doc.author}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{doc.language}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {WHAT_LABELS[doc.what]}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <a
                        href={buildHref(doc.path)}
                        download
                        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
                      >
                        Download
                      </a>
                      <button
                        onClick={() => setPreviewUrl(buildHref(doc.path))}
                        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
                      >
                        Preview
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function DocumentTable() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-5xl mx-auto px-4 py-8 text-center text-gray-400">
          Loading document list…
        </div>
      }
    >
      <DocumentTableInner />
    </Suspense>
  );
}

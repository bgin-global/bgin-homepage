"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { documents } from "@/contents/documents";
import type { DocumentAuthor, DocumentLanguage, DocumentWhat, DocumentState } from "@/contents/documents";

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
const STATE_OPTIONS: DocumentState[] = ["draft", "final", "other"];

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

function DocumentTableInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const fAuthor = searchParams.get("author") ?? "";
  const fLanguage = searchParams.get("language") ?? "";
  const fWhat = searchParams.get("what") ?? "";
  const fState = searchParams.get("state") ?? "";
  const fWhere = searchParams.get("where") ?? "";
  const fWhenFrom = searchParams.get("when_from") ?? "";
  const fWhenTo = searchParams.get("when_to") ?? "";

  const hasDateFilter = fWhenFrom !== "" || fWhenTo !== "";

  // Dynamic where options – derived from data, sorted
  const whereOptions = Array.from(new Set(documents.map((d) => d.where))).sort(
    (a, b) => {
      // Sort: Block ## numerically first, then Layer2, then Other
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

  // When options for dropdowns (exclude "unclear"), sorted chronologically
  const whenOptions = Array.from(
    new Set(documents.filter((d) => d.when !== "unclear").map((d) => d.when))
  ).sort();

  const filtered = documents.filter((doc) => {
    if (fAuthor && doc.author !== fAuthor) return false;
    if (fLanguage && doc.language !== fLanguage) return false;
    if (fWhat && doc.what !== fWhat) return false;
    if (fState && doc.state !== fState) return false;
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

  const hasActiveFilter =
    fAuthor || fLanguage || fWhat || fState || fWhere || fWhenFrom || fWhenTo;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 xl:px-0">
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
            label="State"
            paramKey="state"
            options={STATE_OPTIONS}
            value={fState}
            onChange={updateParam}
            labelFn={(v) => v.charAt(0).toUpperCase() + v.slice(1)}
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
              <option value="">–</option>
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
              <option value="">–</option>
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
              <th className="px-4 py-3 font-semibold w-[35%]">Title</th>
              <th className="px-4 py-3 font-semibold">Event</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">WG</th>
              <th className="px-4 py-3 font-semibold">Lang</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">State</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-gray-400">
                  No documents match the selected filters.
                </td>
              </tr>
            ) : (
              filtered.map((doc, i) => (
                <tr
                  key={`${doc.path}-${i}`}
                  className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <td className="px-4 py-3 font-medium">
                    <a
                      href={buildHref(doc.path)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                      {doc.title}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
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
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                        doc.state === "draft"
                          ? "bg-yellow-100 text-yellow-800"
                          : doc.state === "final"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {doc.state}
                    </span>
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

import {
  documents,
  type Document,
  type PublicationStatus,
} from "@/contents/documents";
import type { Theme } from "@/contents/themes";
import { getHubBySlug, type ProjectHub } from "@/contents/projectHubs";

export type EnrichedDocument = Document & {
  status: PublicationStatus;
  themes: Theme[];
};

function defaultStatus(doc: Document): PublicationStatus {
  if (doc.status) return doc.status;
  if (doc.what === "study_report") return "Historical";
  if (doc.what === "meeting_report") return "Historical";
  return "Current";
}

export function enrichDocument(doc: Document): EnrichedDocument {
  return {
    ...doc,
    status: defaultStatus(doc),
    themes: doc.themes ?? [],
  };
}

export function getEnrichedDocuments(): EnrichedDocument[] {
  return documents.map(enrichDocument);
}

export function getPublicationBySlug(slug: string): EnrichedDocument | undefined {
  const doc = documents.find((d) => d.slug === slug);
  return doc ? enrichDocument(doc) : undefined;
}

export function getPublicationsWithSlugs(): EnrichedDocument[] {
  return documents.filter((d) => d.slug).map(enrichDocument);
}

export function documentPdfHref(doc: Document): string {
  const encoded = doc.path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  return `/documents/${encoded}`;
}

export function relatedProjectsForDoc(doc: Document): ProjectHub[] {
  if (!doc.relatedProjectSlugs?.length) return [];
  return doc.relatedProjectSlugs
    .map((s) => getHubBySlug(s))
    .filter((p): p is ProjectHub => Boolean(p));
}

/** Publications sharing any theme with a hub (excluding exact hub document lists). */
export function publicationsRelatedToHub(
  hub: ProjectHub,
  limit = 6
): EnrichedDocument[] {
  const themeSet = new Set(hub.themes);
  return getEnrichedDocuments()
    .filter((d) => d.themes.some((t) => themeSet.has(t)))
    .filter((d) => d.what === "study_report" || Boolean(d.slug))
    .slice(0, limit);
}

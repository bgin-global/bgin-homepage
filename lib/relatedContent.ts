import { getListedHubs, type ProjectHub } from "@/contents/projectHubs";
import {
  getEnrichedDocuments,
  type EnrichedDocument,
} from "@/lib/publications";
import type { Theme } from "@/contents/themes";

/**
 * Cross-cutting related content by controlled themes.
 * Used by hubs, publication pages, and future search surfaces.
 */
export function hubsByTheme(theme: Theme): ProjectHub[] {
  return getListedHubs().filter((h) => h.themes.includes(theme));
}

export function publicationsByTheme(theme: Theme): EnrichedDocument[] {
  return getEnrichedDocuments().filter((d) => d.themes.includes(theme));
}

export function searchByTheme(theme: Theme): {
  projects: ProjectHub[];
  publications: EnrichedDocument[];
} {
  return {
    projects: hubsByTheme(theme),
    publications: publicationsByTheme(theme),
  };
}

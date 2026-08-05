import type { WgId } from "./projectHubs";

/**
 * Working Group identity colors — single source for chips, accents, and CSS vars.
 * Site chrome (Register CTAs) stays blue-700; WG colors are for attribution only.
 *
 * IKP     sky     — identity / keys
 * CS      emerald — security
 * FASE    violet  — finance / economics
 * Agentic amber   — agent governance (not purple, to avoid “AI template” chrome)
 */
export type WgIdentity = {
  id: WgId;
  shortLabel: string;
  /** Solid brand hex for CSS / borders */
  hex: string;
  /** Tailwind classes */
  chip: string;
  bar: string;
  soft: string;
  text: string;
  ring: string;
  /** Selected tab / strong surface */
  selected: string;
};

export const WG_IDENTITY: Record<WgId, WgIdentity> = {
  ikp: {
    id: "ikp",
    shortLabel: "IKP",
    hex: "#0369a1",
    chip: "bg-sky-50 text-sky-900 border border-sky-300",
    bar: "border-l-4 border-sky-600",
    soft: "bg-sky-50",
    text: "text-sky-800",
    ring: "ring-sky-600",
    selected: "bg-sky-50 border-sky-600 ring-1 ring-sky-600",
  },
  cs: {
    id: "cs",
    shortLabel: "CS",
    hex: "#047857",
    chip: "bg-emerald-50 text-emerald-900 border border-emerald-300",
    bar: "border-l-4 border-emerald-600",
    soft: "bg-emerald-50",
    text: "text-emerald-800",
    ring: "ring-emerald-600",
    selected: "bg-emerald-50 border-emerald-600 ring-1 ring-emerald-600",
  },
  fase: {
    id: "fase",
    shortLabel: "FASE",
    hex: "#6d28d9",
    chip: "bg-violet-50 text-violet-900 border border-violet-300",
    bar: "border-l-4 border-violet-600",
    soft: "bg-violet-50",
    text: "text-violet-800",
    ring: "ring-violet-600",
    selected: "bg-violet-50 border-violet-600 ring-1 ring-violet-600",
  },
  agentic: {
    id: "agentic",
    shortLabel: "Agentic AI",
    hex: "#b45309",
    chip: "bg-amber-50 text-amber-950 border border-amber-300",
    bar: "border-l-4 border-amber-600",
    soft: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-600",
    selected: "bg-amber-50 border-amber-600 ring-1 ring-amber-600",
  },
};

export function getWgIdentity(wg: WgId): WgIdentity {
  return WG_IDENTITY[wg];
}

/** Inactive / unmapped WGs (IGWG, Kintsugi, …) */
export const WG_IDENTITY_NEUTRAL = {
  chip: "bg-gray-100 text-gray-700 border border-gray-300",
  bar: "border-l-4 border-gray-400",
  soft: "bg-gray-50",
  text: "text-gray-700",
  hex: "#6b7280",
} as const;

/** Resolve news / UI tag labels → WgId (null if not a WG identity tag). */
export function wgIdFromTag(tag: string): WgId | null {
  const key = tag.trim().toLowerCase();
  if (key === "ikp") return "ikp";
  if (key === "cs" || key === "cyber security" || key === "cybersecurity") {
    return "cs";
  }
  if (key === "fase") return "fase";
  if (key === "agentic" || key === "agentic ai" || key === "agentic-ai") {
    return "agentic";
  }
  return null;
}

import {
  WG_IDENTITY,
  WG_IDENTITY_NEUTRAL,
  type WgIdentity,
} from "@/contents/wgIdentity";
import type { WgId } from "@/contents/projectHubs";

/** Map timetable / program labels → WgId */
const LABEL_TO_WG: Record<string, WgId> = {
  IKP: "ikp",
  "Cyber Security": "cs",
  CS: "cs",
  FASE: "fase",
  "Agentic AI": "agentic",
};

function identityForLabel(wg: string): WgIdentity | null {
  const id = LABEL_TO_WG[wg];
  return id ? WG_IDENTITY[id] : null;
}

/** Tailwind chip classes for Block program cells (border + soft fill + text) */
export function getWGColorClasses(wg: string): string {
  const id = identityForLabel(wg);
  if (id) return id.chip;
  if (wg === "BGIN Agent Hack" || wg === "Gov Hack") {
    return "bg-amber-50 text-amber-950 border border-amber-300";
  }
  return `${WG_IDENTITY_NEUTRAL.chip}`;
}

export function getWGClassName(wg: string): string {
  return wg.toLowerCase().replace(/\s+/g, "-");
}

/** @deprecated prefer getWGColorClasses — kept for any direct map reads */
export const wgColors: { [key: string]: string } = {
  "Agentic AI": WG_IDENTITY.agentic.chip,
  IKP: WG_IDENTITY.ikp.chip,
  "Cyber Security": WG_IDENTITY.cs.chip,
  CS: WG_IDENTITY.cs.chip,
  FASE: WG_IDENTITY.fase.chip,
  General: WG_IDENTITY_NEUTRAL.chip,
  TBD: "bg-gray-50 text-gray-600 border border-gray-200",
  "BGIN Agent Hack": "bg-amber-50 text-amber-950 border border-amber-300",
};

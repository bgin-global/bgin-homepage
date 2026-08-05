export type MeetingType =
  | "block"
  | "wg"
  | "layer2"
  | "gdc"
  | "webinar"
  | "other";

export interface MeetingItem {
  type: MeetingType;
  typeLabel: string;
  title: string;
  when: string;
  /** Multi-line “what we’ll do” plan (join with newlines or pass as array). */
  plan: string[];
  href: string;
  external?: boolean;
  priority?: boolean;
  sessionTitle?: string;
  empty?: boolean;
}

export interface RoadmapItem {
  when: string;
  what: string;
  done?: boolean;
  current?: boolean;
}

export const MEETING_TYPE_STYLES: Record<
  MeetingType,
  { chip: string; border?: string }
> = {
  block: {
    chip: "bg-blue-50 text-blue-900 border border-blue-200",
    border: "border-blue-300 bg-blue-50",
  },
  wg: {
    chip: "bg-gray-100 text-gray-800 border border-gray-200",
  },
  layer2: {
    chip: "bg-gray-100 text-gray-800 border border-gray-200",
  },
  gdc: {
    chip: "bg-blue-50 text-blue-900 border border-blue-200",
    border: "border-blue-300 bg-blue-50",
  },
  webinar: {
    chip: "bg-gray-100 text-gray-800 border border-gray-200",
  },
  other: {
    chip: "bg-gray-100 text-gray-800 border border-gray-200",
  },
};

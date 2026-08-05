import type { ProjectStatus } from "@/contents/projectHubs";
import type { PublicationStatus } from "@/contents/documents";

/**
 * Inline colors — Material Tailwind replaces Tailwind’s amber scale (no 950,
 * and 900 is bright orange #ff6f00). Class-based amber chips can lose readable
 * text (light yellow + missing/wrong text color).
 */
type ChipStyle = { background: string; color: string; border: string };

const PROJECT_STYLE: Record<ProjectStatus, ChipStyle> = {
  "In Development": {
    background: "#fffbeb",
    color: "#78350f",
    border: "#fcd34d",
  },
  "In Progress": {
    background: "#eff6ff",
    color: "#1e3a8a",
    border: "#bfdbfe",
  },
  "Public Comment": {
    background: "#f3f4f6",
    color: "#111827",
    border: "#d1d5db",
  },
  Published: {
    background: "#f3f4f6",
    color: "#1f2937",
    border: "#e5e7eb",
  },
  Dormant: {
    background: "#f9fafb",
    color: "#4b5563",
    border: "#e5e7eb",
  },
  Archived: {
    background: "#f3f4f6",
    color: "#6b7280",
    border: "#e5e7eb",
  },
};

const PUBLICATION_STYLE: Record<PublicationStatus, ChipStyle> = {
  Current: {
    background: "#eff6ff",
    color: "#1e3a8a",
    border: "#bfdbfe",
  },
  Superseded: {
    background: "#fffbeb",
    color: "#78350f",
    border: "#fcd34d",
  },
  Historical: {
    background: "#f3f4f6",
    color: "#374151",
    border: "#e5e7eb",
  },
};

const TIME_STYLE: Record<"Upcoming" | "Past", ChipStyle> = {
  Upcoming: {
    background: "#eff6ff",
    color: "#1e3a8a",
    border: "#bfdbfe",
  },
  Past: {
    background: "#f3f4f6",
    color: "#4b5563",
    border: "#e5e7eb",
  },
};

type Props =
  | { kind: "project"; status: ProjectStatus }
  | { kind: "publication"; status: PublicationStatus }
  | { kind: "time"; status: "Upcoming" | "Past" };

export default function StatusChip(props: Props) {
  const style =
    props.kind === "project"
      ? PROJECT_STYLE[props.status]
      : props.kind === "publication"
        ? PUBLICATION_STYLE[props.status]
        : TIME_STYLE[props.status];

  return (
    <span
      className="inline-block text-xs font-semibold px-2.5 py-1 rounded border"
      style={{
        background: style.background,
        color: style.color,
        borderColor: style.border,
      }}
    >
      {props.status}
    </span>
  );
}

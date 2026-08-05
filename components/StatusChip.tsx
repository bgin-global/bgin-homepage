import type { ProjectStatus } from "@/contents/projectHubs";
import type { PublicationStatus } from "@/contents/documents";

/** Muted chips — semantic but low saturation (house gray + soft blue/amber). */
const PROJECT_CLASS: Record<ProjectStatus, string> = {
  "In Development": "bg-amber-50 text-amber-950 border border-amber-200",
  "In Progress": "bg-blue-50 text-blue-900 border border-blue-200",
  "Public Comment": "bg-gray-100 text-gray-900 border border-gray-300",
  Published: "bg-gray-100 text-gray-800 border border-gray-200",
  Dormant: "bg-gray-50 text-gray-600 border border-gray-200",
  Archived: "bg-gray-100 text-gray-500 border border-gray-200",
};

const PUBLICATION_CLASS: Record<PublicationStatus, string> = {
  Current: "bg-blue-50 text-blue-900 border border-blue-200",
  Superseded: "bg-amber-50 text-amber-950 border border-amber-200",
  Historical: "bg-gray-100 text-gray-700 border border-gray-200",
};

const TIME_CLASS = {
  Upcoming: "bg-blue-50 text-blue-900 border border-blue-200",
  Past: "bg-gray-100 text-gray-600 border border-gray-200",
} as const;

type Props =
  | { kind: "project"; status: ProjectStatus }
  | { kind: "publication"; status: PublicationStatus }
  | { kind: "time"; status: "Upcoming" | "Past" };

export default function StatusChip(props: Props) {
  const className =
    props.kind === "project"
      ? PROJECT_CLASS[props.status]
      : props.kind === "publication"
        ? PUBLICATION_CLASS[props.status]
        : TIME_CLASS[props.status];

  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded ${className}`}
    >
      {props.status}
    </span>
  );
}

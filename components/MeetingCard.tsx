import {
  MEETING_TYPE_STYLES,
  type MeetingItem,
} from "@/contents/meetingTypes";
import Link from "next/link";

export default function MeetingCard({ meeting }: { meeting: MeetingItem }) {
  const styles = MEETING_TYPE_STYLES[meeting.type];
  const cardClass = meeting.priority
    ? `border ${styles.border ?? "border-blue-300 bg-blue-50"}`
    : meeting.empty
      ? "border border-dashed border-gray-300 bg-gray-50"
      : "border border-gray-200 bg-white";

  const linkInner = (
    <>
      {meeting.href.startsWith("http") || meeting.external ? (
        <a
          href={meeting.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          Open →
        </a>
      ) : (
        <Link
          href={meeting.href}
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          Open →
        </Link>
      )}
    </>
  );

  return (
    <article className={`rounded-lg p-4 ${cardClass}`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
        <span
          className={`text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded ${styles.chip}`}
        >
          {meeting.typeLabel}
        </span>
        <span className="text-sm font-semibold text-gray-900">
          {meeting.title}
        </span>
        <span className="text-xs text-gray-500">{meeting.when}</span>
      </div>
      {meeting.sessionTitle && (
        <p className="text-sm font-semibold text-gray-900 mb-1.5">
          {meeting.sessionTitle}
        </p>
      )}
      <div className="text-sm text-gray-700 space-y-1 mb-3">
        {meeting.plan.map((line) => (
          <p key={line} className={meeting.empty ? "text-gray-500 italic" : ""}>
            {line}
          </p>
        ))}
      </div>
      {!meeting.empty && linkInner}
    </article>
  );
}

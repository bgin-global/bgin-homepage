import Image from "next/image";
import Link from "next/link";
import { DISCOURSE_GUIDE_PATH, discourseGuideHref } from "@/contents/discourse";

/** Official Discourse mark (brand rainbow + yellow) — fixed colors, not currentColor. */
export function DiscourseLogo({
  className = "h-6 w-6 shrink-0",
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/images/discourse-icon.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
}

type Variant = "outline" | "filled" | "text";

const VARIANT_CLASS: Record<Variant, string> = {
  outline:
    "inline-flex items-center gap-2.5 rounded-md border border-blue-700 text-blue-800 text-sm font-medium hover:bg-blue-50",
  filled:
    "inline-flex items-center gap-2.5 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800",
  text: "inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline",
};

type Props = {
  variant?: Variant;
  /** Short label (e.g. mobile header) */
  label?: string;
  /** Optional Discourse deep link after the guide (`?next=`) */
  nextUrl?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
};

/**
 * Secondary CTA → `/start/discourse` with Discourse brand mark.
 */
export default function DiscourseGuideLink({
  variant = "outline",
  label = "Work on Discourse",
  nextUrl,
  className = "",
  title = "How to work on Discourse — official forum, open to anyone",
  onClick,
}: Props) {
  const href = nextUrl ? discourseGuideHref(nextUrl) : DISCOURSE_GUIDE_PATH;
  const pad =
    variant === "text"
      ? ""
      : variant === "filled"
        ? "px-4 py-2"
        : "px-3 py-1.5";
  const logoSize = variant === "text" ? 20 : 24;

  return (
    <Link
      href={href}
      title={title}
      onClick={onClick}
      className={`${VARIANT_CLASS[variant]} ${pad} ${className}`.trim()}
    >
      <DiscourseLogo
        size={logoSize}
        className={`${variant === "text" ? "h-5 w-5" : "h-6 w-6"} shrink-0`}
      />
      <span>{label}</span>
    </Link>
  );
}

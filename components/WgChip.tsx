import { WG_META, type WgId } from "@/contents/projectHubs";
import { getWgIdentity } from "@/contents/wgIdentity";

type Props = {
  wg?: WgId | null;
  /** Override label (defaults to WG_META short label) */
  label?: string;
  className?: string;
};

/**
 * Inline colors — do not rely on Tailwind classes from contents/wgIdentity.ts
 * (that folder is outside the default content scan and chips can lose text color).
 */
const CHIP_STYLE: Record<
  WgId,
  { background: string; color: string; border: string }
> = {
  ikp: { background: "#f0f9ff", color: "#0c4a6e", border: "#7dd3fc" },
  cs: { background: "#ecfdf5", color: "#064e3b", border: "#6ee7b7" },
  fase: { background: "#f5f3ff", color: "#4c1d95", border: "#c4b5fd" },
  agentic: { background: "#fffbeb", color: "#78350f", border: "#fcd34d" },
};

export default function WgChip({ wg, label, className = "" }: Props) {
  if (!wg) {
    return (
      <span
        className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded border ${className}`}
        style={{
          background: "#f3f4f6",
          color: "#374151",
          borderColor: "#d1d5db",
        }}
      >
        {label ?? "WG"}
      </span>
    );
  }
  const id = getWgIdentity(wg);
  const style = CHIP_STYLE[wg];
  const text = label ?? WG_META[wg].label;
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded border ${className}`}
      style={{
        background: style.background,
        color: style.color,
        borderColor: style.border,
      }}
      title={`${text} Working Group`}
    >
      <span
        className="w-2 h-2 rounded-full mr-1.5 shrink-0"
        style={{ backgroundColor: id.hex }}
        aria-hidden
      />
      {text}
    </span>
  );
}

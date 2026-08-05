import Link from "next/link";
import ArrowRight from "./ArrowRight";

interface Props {
  link: string;
  text: string;
  color: "black" | "white" | "gold";
  withArrow?: boolean;
  /** default = large pill CTA; sm = compact (home cards, secondary links) */
  size?: "default" | "sm";
}

const getBgColor = (color: "black" | "white" | "gold") => {
  switch (color) {
    case "black":
      return "bg-black";
    case "white":
      return "bg-white";
    case "gold":
      // Legacy alias → house primary (blue-700)
      return "bg-blue-700 border-blue-700";
  }
};

const getTextColor = (color: "black" | "white" | "gold") => {
  switch (color) {
    case "black":
      return "text-white";
    case "white":
      return "text-black";
    case "gold":
      return "text-white";
  }
};

const getArrowColor = (color: "black" | "white" | "gold") => {
  switch (color) {
    case "black":
      return "white";
    case "white":
      return "black";
    case "gold":
      return "white";
  }
};

export default function Button({
  link,
  text,
  color,
  withArrow = true,
  size = "default",
}: Props) {
  const compact = size === "sm";

  return (
    <div className={`${compact ? "w-auto inline-flex" : "w-full"} bgin-button`}>
      <Link
        href={link}
        className={`${getBgColor(color)} flex justify-between items-center border border-black ${
          compact
            ? "gap-1.5 px-3.5 py-2 rounded-md"
            : "gap-2 px-6 py-4 rounded-full"
        }`}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <div
          className={`${getTextColor(color)} ${
            compact ? "text-sm font-semibold" : "text-xl"
          }`}
        >
          {text}
        </div>
        {withArrow && (
          <ArrowRight
            size="sm"
            color={getArrowColor(color)}
          />
        )}
      </Link>
    </div>
  );
}

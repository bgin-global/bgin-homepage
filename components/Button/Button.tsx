import Link from "next/link";
import ArrowRight from "./ArrowRight";

interface Props {
  link: string;
  text: string;
  color: "black" | "white" | "gold";
  withArrow?: boolean;
}

const getBgColor = (color: "black" | "white" | "gold") => {
  switch (color) {
    case "black":
      return "bg-black";
    case "white":
      return "bg-white";
    case "gold":
      return "bg-[#c5d42d]";
  }
};

const getTextColor = (color: "black" | "white" | "gold") => {
  switch (color) {
    case "black":
      return "text-white";
    case "white":
      return "text-black";
    case "gold":
      return "text-black";
  }
};

const getArrowColor = (color: "black" | "white" | "gold") => {
  switch (color) {
    case "black":
      return "white";
    case "white":
      return "black";
    case "gold":
      return "black";
  }
};

export default function Button({ link, text, color, withArrow = true }: Props) {
  return (
    <div className="w-full bgin-button">
      <Link
        href={link}
        className={`${getBgColor(
          color
        )} flex justify-between items-center gap-2 px-6 py-4 rounded-full border border-black`}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <div className={`${getTextColor(color)} text-xl`}>{text}</div>
        {withArrow && <ArrowRight size="sm" color={getArrowColor(color)} />}
      </Link>
    </div>
  );
}

import Link from "next/link";
import ArrowRight from "./ArrowRight";

interface Props {
  link: string;
  text: string;
  color: "black" | "white";
  withArrow?: boolean;
}

export default function Button({ link, text, color, withArrow = true }: Props) {
  return (
    <div className="w-full bgin-button">
      <Link
        href={link}
        className={`${
          color == "black" ? "bg-black" : "bg-white"
        } flex justify-between items-center gap-2 px-6 py-4 rounded-full border border-black`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`${
            color === "black" ? "text-white" : "text-black"
          } text-xl`}
        >
          {text}
        </div>
        {withArrow && (
          <ArrowRight size="sm" color={color === "black" ? "white" : "black"} />
        )}
      </Link>
    </div>
  );
}

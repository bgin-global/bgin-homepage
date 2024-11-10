import Link from "next/link";
import ArrowRight from "./ArrowRight";

interface Props {
  link: string;
  text: string;
}

export default function PlainButton({ link, text }: Props) {
  return (
    <div className="w-full bgin-button">
      <Link
        href={link}
        className={`flex justify-between items-center gap-2 px-6 py-4 rounded-full`}
      >
        <div className={`text-black text-xl`}>{text}</div>
        <ArrowRight size="sm" color="black" />
      </Link>
    </div>
  );
}

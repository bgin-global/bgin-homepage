import { Event } from "@/lib/fetch-events";
import ArrowRight from "./ArrowRight";
import Image from "next/image";
import Link from "next/link";

interface Props {
  event: Event;
}

export default function EventItem(props: Props) {
  return (
    <div className="bg-white h-full w-full flex-1 flex-col flex justify-center items-start gap-4 px-4 pt-4 pb-6 rounded-3xl bgin-button">
      <div className="bg-cover w-full h-[200px] gap-2.5 rounded-xl">
        <Image
          alt={props.event.title}
          src={props.event.thumbnail}
          className="w-[100%] h-[100%] rounded-2xl"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex-col w-full flex items-start gap-6 px-2 h-fit">
        <div className="w-full flex-col flex items-start gap-1 text-black">
          <div className="flex-col flex items-start gap-2">
            <div className="text-3xl leading-[42px] font-medium font-FamiljenGrotesk">
              {props.event.title}
            </div>
          </div>
          <div className="flex-col flex items-start gap-1 text-sm leading-[17px] font-Inter">
            <div>Location: {props.event.location}</div>
            <div>
              Date: {props.event.date}
              {props.event.date_until ? ` 〜 ${props.event.date_until}` : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-flow-row bgin-button">
        <Link
          href={"/events/" + props.event.id}
          className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter"
        >
          <div>More Details</div>
          <ArrowRight size="sm" color="white" />
        </Link>
        {props.event.another_md && props.event.lang === "ENG" ? (
          <Link
            href={"/events/" + props.event.another_md}
            className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter"
          >
            <div>詳細(日本語)</div>
            <ArrowRight size="sm" color="white" />
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

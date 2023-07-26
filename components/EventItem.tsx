import { Event } from "@/lib/fetch-events";
import ArrowRight from "./ArrowRight";

interface Props {
  event: Event
}

export default function EventItem(props: Props) {
  return (
    <div className="bg-white h-full w-full flex-1 flex-col flex justify-center items-start gap-4 px-4 pt-4 pb-6 rounded-3xl">
      <div className="bg-cover w-full h-[200px] gap-2.5 rounded-xl bg-black" />
      <div className="flex-col w-full flex items-start gap-6 px-2 h-fit">
        <div className="w-full flex-col flex items-start gap-1 text-black">
          <div className="flex-col flex items-start gap-2">
            <div className="text-3xl leading-[42px] font-medium font-FamiljenGrotesk">
              {props.event.title}
            </div>
          </div>
          <div className="flex-col flex items-start gap-1 text-sm leading-[17px] font-Inter">
            <div>Location: {props.event.location}</div>
            <div>Date: {props.event.date}</div>
          </div>
        </div>
      </div>
      <div className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter">
        <div>View Details</div>
        <ArrowRight size="sm" color="white" />
      </div>
    </div>
  );
}
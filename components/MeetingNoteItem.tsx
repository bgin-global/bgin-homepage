import Image from "next/image";
import { MeetingNote } from "@/lib/fetch-meeting-notes";
import Button from "./Button/Button";

interface Props {
  note: MeetingNote;
}

export default function MeetingNoteItem(props: Props) {
  return (
    <div className="bg-white h-full w-full flex-1 flex-col flex justify-between items-start gap-8 px-4 pt-4 pb-6 rounded-3xl bgin-button">
      <div className="flex flex-col gap-4">
        <div className="bg-cover w-full h-[200px] gap-2.5 rounded-xl mx-auto">
          <Image
            alt="About Image"
            src="/images/About/Image.svg"
            width={100}
            height={100}
            className="w-full h-full"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex-col w-full flex items-start gap-4 px-2 h-fit">
          <div className="flex gap-2 flex-wrap justify-start align-center">
            {props.note.tag.map((_tag, index) => {
              return (
                <div
                  className="rounded-full py-2 px-4 bg-[#F0F4FE] text-black text-sm"
                  key={index}
                >
                  {_tag}
                </div>
              );
            })}
          </div>
          <div className="w-full flex-col flex items-start gap-1 text-black">
            <div className="flex-col flex items-start gap-2">
              <div className="text-3xl leading-[42px] font-medium font-FamiljenGrotesk">
                {props.note.title}
              </div>
            </div>
            <div className="flex-col flex items-start gap-1 text-sm leading-[17px] font-Inter">
              <div>{props.note.description}</div>
            </div>
          </div>
        </div>
      </div>

      <Button link={props.note.url} text="View Details" color="black" />
    </div>
  );
}

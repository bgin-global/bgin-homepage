import Image from "next/image";
import { Event } from "@/lib/fetch-events";
import Button from "./Button/Button";

interface Props {
  event: Event;
}

export default function ItemEvent(props: Props) {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row items-start gap-12 p-6 rounded-3xl border border-white border-opacity-[0.5]">
      <div className="w-full h-[300px] flex items-start gap-2.5 rounded-xl">
        <Image
          alt="Hero Image"
          src={props.event.thumbnail}
          className="w-[100%] h-[100%] rounded-2xl"
          quality={100}
          width={1000}
          height={1000}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="h-full lg:w-full flex-col flex items-start gap-6">
        <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
          {props.event.title}
        </div>
        <div className="w-full flex-col flex items-start gap-6 bgin-button">
          <div className="w-full flex-col flex items-start gap-2 text-black">
            <div 
              className="text-base leading-[17px] font-Inter pb-4"
              dangerouslySetInnerHTML={{ __html: props.event.description }}
            />
            <div className="flex-col flex items-start gap-1 text-base leading-[17px] font-Inter font-semibold">
              <div>Location: {props.event.location}</div>
              <div>
                Date: {props.event.date}
                {props.event.date_until ? ` 〜 ${props.event.date_until}` : ""}
              </div>
            </div>
          </div>
          <div className="bgin-button">
            {props.event.id === "upcoming-registration" ? (
              // Special registration button - full width and bigger
              <div className="w-full mb-4">
                <a
                  href={props.event.register_link || "/events/" + props.event.id}
                  className="bg-[#6890F5] hover:bg-[#5a7de8] flex justify-center items-center gap-3 px-8 py-5 rounded-full border border-[#6890F5] w-full transition-colors"
                  target={props.event.register_link?.startsWith("http") ? "_blank" : undefined}
                  rel={props.event.register_link?.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="text-white text-xl font-semibold">Registration & Details</div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.58325 11H17.4166"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 4.58325L17.4167 10.9999L11 17.4166"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ) : (
              // Regular button grid for other events
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 grid-flow-row">
                <Button
                  link={"/events/" + props.event.id}
                  text="Details"
                  color="black"
                  withArrow={true}
                />
                {props.event.jp_url && props.event.lang === "ENG" ? (
                  <Button
                    link={props.event.jp_url}
                    text="詳細"
                    color="black"
                    withArrow={true}
                  />
                ) : (
                  <></>
                )}
                {props.event.report_url && (
                  <Button
                    link={props.event.report_url}
                    text="report"
                    color="white"
                    withArrow={true}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

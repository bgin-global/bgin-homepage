/* eslint-disable react/no-unescaped-entities */
import ArrowRight from "@/components/ArrowRight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getEventData } from "@/lib/fetch-events";
import Image from "next/image";
import Tab from "./tabs";
import { fetchMarkdownContent } from "@/lib/fetch-md";
import Link from "next/link";

const contentDirectory = "contents/events/block10/";
const mdPath = "20240303-block10";
const mdPathJA = "20240303-block10_jp";

export default async function Page() {
  const event = await getEventData(mdPath);
  const programContent = await fetchMarkdownContent(
    contentDirectory,
    "program"
  );
  const accessContent = await fetchMarkdownContent(contentDirectory, "access");
  const speakersContent = await fetchMarkdownContent(
    contentDirectory,
    "speakers"
  );
  const sponsorsContent = await fetchMarkdownContent(
    contentDirectory,
    "sponsors"
  );

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="text-black max-w-4xl w-full max-lg:px-4 pb-32 h-fit bg-white m-auto flex flex-col gap-4 bgin-button">
        <div className="w-full grid grid-cols-7 gap-6 grid-flow-row items-center bgin-button">
          <div className="col-span-6 lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk max-lg:pt-32 lg:pt-12 pb-4">
            {event?.title}
          </div>
          <Link
            href="/events/20240303-block10/jp"
            className=" bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter h-12"
          >
            <div>日本語</div>
          </Link>
        </div>

        <div className="text-sm leading-[17px] font-Inter font-semibold">
          <div>
            {event?.date}
            {event?.date_until ? ` 〜 ${event?.date_until}` : ""}
          </div>
          <div>{event?.location}</div>
        </div>
        <Image
          alt="Event Thumbnail"
          src={event?.thumbnail ?? "/images/Events/dummy.svg"}
          className="w-full h-auto max-h-[400px]"
          width={1000}
          height={1000}
          style={{
            objectFit: "cover",
          }}
        />
        {event &&
        Date.parse(event.date_until || event.date) >= Date.now() &&
        event.register_link ? (
          <a
            href={event.register_link}
            className="w-full bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>Register Now</div>
            <ArrowRight size="sm" color="white" />
          </a>
        ) : (
          <></>
        )}

        <Tab
          homeContent={event.contentHtml}
          programContent={programContent}
          accessContent={accessContent}
          speakersContent={speakersContent}
          sponsorsContent={sponsorsContent}
        />
      </div>

      <Footer />
    </main>
  );
}

/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getEventData } from "@/lib/fetch-events";
import Image from "next/image";
import Tab from "../tabs";
import { fetchMarkdownContent } from "@/lib/fetch-md";
import Link from "next/link";
import Button from "@/components/Button/Button";

const contentDirectory = "contents/events/block10/";
const mdPath = "20240303-block10_jp";

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

      <div className="text-black max-w-4xl w-full px-4 lg:px-0 pb-32 h-fit bg-white m-auto flex flex-col gap-4 bgin-button">
        <div className="text-4xl lg:text-6xl leading-60px lg:leading-[77px] font-medium font-FamiljenGrotesk lg:pt-12 py-4">
          {event?.title}
        </div>
        <Link
          href="/events/20240303-block10"
          className=" bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter h-12 overflow-hidden"
        >
          <div>ENG</div>
        </Link>

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
          <Button
            link={event.register_link}
            text="Register Now"
            color="black"
          />
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

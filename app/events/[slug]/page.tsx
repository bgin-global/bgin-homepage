import Button from "@/components/Button/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getEventData } from "@/lib/fetch-events";
import Image from "next/image";
import Link from "next/link";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  let event;
  if (params.slug != null && typeof params.slug === "string") {
    event = await getEventData(params.slug);
  }

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="text-black max-w-5xl w-full px-4 xl:px-0 pb-32 h-fit bg-white m-auto flex flex-col gap-4 bgin-button">
        <div className="text-4xl lg:text-6xl leading-60px lg:leading-[77px] font-medium font-FamiljenGrotesk lg:pt-12 py-4">
          {event?.title}
        </div>
        <div className="text-sm leading-[17px] font-Inter font-semibold">
          <div>
            {event?.date}
            {event?.date_until ? ` 〜 ${event?.date_until}` : ""}
          </div>
          <div>{event?.location}</div>
        </div>
        {event?.jp_url ? (
          <div>
            <Link
              className="text-sm leading-[17px] font-Inter font-semibold"
              href={event?.jp_url}
            >
              {event.lang == "ENG" ? "日本語" : "English"}
            </Link>
          </div>
        ) : (
          <></>
        )}

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

        {event ? (
          <div
            dangerouslySetInnerHTML={{ __html: event.contentHtml }}
            className="w-full"
          />
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </main>
  );
}

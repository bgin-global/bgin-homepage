import ArrowRight from "@/components/ArrowRight";
import EventItem from "@/components/EventItem";
import Header from "@/components/Header";
import { Event, getSortedEvents } from "@/lib/fetch-events";
import Image from "next/image";

export default function Home() {
  const events = getSortedEvents();
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <div className="flex-col flex items-start md:pt-6 pb-16 h-fit max-w-4xl m-auto">
        <Image
          alt="Hero Image"
          src="/images/Hero/Image.svg"
          className="max-md:hidden w-[100%] h-[200px] rounded-2xl"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />
        <Image
          alt="Hero Image"
          src="/images/Hero/Image_SP.svg"
          className="md:hidden w-screen h-[444px]"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />

        <div className="flex-col w-full flex items-center gap-12 pt-16">
          <div className="flex-col flex items-center gap-2 text-center text-black mx-4">
            <div className="max-md:text-4xl md:text-5xl max-md:leading-[48px] md:leading-[77px] font-medium font-FamiljenGrotesk">
              Building the Blockchain Future Through Inclusive Collaboration
            </div>
            <div className="text-base leading-[19px] font-Inter md:max-w-[750px]">
              We are devoted to establishing a common language, fostering
              academic roots, and consistently providing trustworthy resources
              for sustainable blockchain development.
            </div>
          </div>
          <div className="flex max-md:flex-col justify-center max-md:items-center md:items-start gap-6 text-base font-semibold font-Inter">
            <div className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-white">
              <div>Join Our Community</div>
              <ArrowRight size="sm" color="white" />
            </div>
            <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-[#2d2d2d] text-[#2d2d2d]">
              <div>Learn About Us</div>
              <ArrowRight size="sm" color="black" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#d2defc] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-md:px-4">
          <div className="md:text-6xl max-md:text-4xl md:leading-[77px] max-md:leading-60px font-medium font-FamiljenGrotesk">
            Upcoming Events
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]">
            <div>View All</div>
            <ArrowRight />
          </div>
        </div>
        <div className="max-w-4xl max-md:w-screen max-md:px-4 grid max-md:grid-rows-2 md:grid-rows-1 md:gap-11 max-md:gap-6 grid-flow-col">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
        </div>
      </div>
    </main>
  );
}

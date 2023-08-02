import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PastEventItem from "@/components/PastEventItem";
import UpcomingEventTopItem from "@/components/UpcomingEventTopItem";
import { getSortedEvents } from "@/lib/fetch-events";
import Image from "next/image";

export default function Events() {
  const futureEvents = getSortedEvents("FUTURE");
  const pastEvents = getSortedEvents("PAST");
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-[#D2DEFC] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Upcoming Events
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>

        {futureEvents[futureEvents.length - 1] ? (
          <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid grid-rows-1 grid-flow-col gap-6">
            <UpcomingEventTopItem
              event={futureEvents[futureEvents.length - 1]}
            />
            <Image
              alt="Hero Image"
              src={futureEvents[futureEvents.length - 1].thumbnail}
              className="max-lg:hidden w-full h-full rounded-2xl"
              width={100}
              height={100}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="bg-[#F0F4FE] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Past Events
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 flex flex-col gap-6">
          {pastEvents.map((event) => (
            <PastEventItem key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

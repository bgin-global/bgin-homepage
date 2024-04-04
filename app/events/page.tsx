import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/Home/SectionTitle";
import PastEventItem from "@/components/PastEventItem";
import UpcomingEventTopItem from "@/components/UpcomingEventTopItem";
import { getSortedEvents } from "@/lib/fetch-events";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";

export default function Events() {
  const futureEvents = getSortedEvents("FUTURE");
  const pastEvents = getSortedEvents("PAST");
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Upcoming Events" />

        {futureEvents[futureEvents.length - 1] ? (
          <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
            <UpcomingEventTopItem
              event={futureEvents[futureEvents.length - 1]}
            />
            <Image
              alt="Hero Image"
              src={futureEvents[futureEvents.length - 1].thumbnail}
              className="hidden lg:block w-full h-full rounded-2xl"
              width={1000}
              height={1000}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="Past Events" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          {pastEvents.map((event) => (
            <PastEventItem key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

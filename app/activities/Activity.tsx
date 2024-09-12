import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import ItemEvent from "@/components/ItemEvent";
import ItemUpcomingEvent from "@/components/ItemUpcomingEvent";
import { Event } from "@/lib/fetch-events";
import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  eventUpcoming: {
    title: string;
    date: string;
    location: string;
    link: string;
  };
  pastEvents: Event[];
  titleUpcoming: string;
  titlePast: string;
}

export default function Activity({
  eventUpcoming,
  pastEvents,
  titleUpcoming,
  titlePast,
}: Props) {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title={titleUpcoming} />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <ItemUpcomingEvent {...eventUpcoming} />
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title={titlePast} />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          {pastEvents.map((event) => (
            <ItemEvent key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

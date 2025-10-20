import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import ItemEvent from "@/components/ItemEvent";
import { Event } from "@/lib/fetch-events";
import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  eventUpcoming: {
    title: string;
    date: string;
    location: string;
    link: string;
    thumbnail?: string;
  } | null;
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
  // Convert upcoming event to Event format if it exists
  const upcomingEventAsEvent: Event | null = eventUpcoming ? {
    id: "upcoming-registration", // Special ID to identify this as upcoming
    title: eventUpcoming.title,
    date: eventUpcoming.date,
    location: eventUpcoming.location,
    description: "Join leading experts, innovators, and stakeholders shaping the future of blockchain governance.",
    thumbnail: eventUpcoming.thumbnail || "/images/Events/Block3.jpeg", // Use custom thumbnail or default
    register_link: eventUpcoming.link, // This will be used for registration
    lang: "ENG" as const,
  } : null;

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      {upcomingEventAsEvent && (
        <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
          <SectionTitle title={titleUpcoming} />
          <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
            <ItemEvent event={upcomingEventAsEvent} />
          </div>
        </div>
      )}

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

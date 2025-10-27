import { getSortedEvents } from "@/lib/fetch-events";
import Activity from "../Activity";

export default function Layer2Meetup() {
  const upcomingEventsRaw = getSortedEvents("layer2-meetups", "FUTURE");
  const pastEvents = getSortedEvents("layer2-meetups", "PAST");

  // Force specific events into the past list even if their date is in the future
  const manuallyPastEventIds = new Set(["20251023-layer2-sf"]);
  const manuallyPastEvents = upcomingEventsRaw.filter((event) =>
    manuallyPastEventIds.has(event.id)
  );
  const upcomingEvents = upcomingEventsRaw.filter(
    (event) => !manuallyPastEventIds.has(event.id)
  );

  const updatedPastEvents = [...pastEvents, ...manuallyPastEvents].sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );

  // Get the first upcoming event if available
  const upcomingEvent = upcomingEvents.length > 0 ? {
    title: upcomingEvents[0].title,
    date: upcomingEvents[0].date,
    location: upcomingEvents[0].location,
    link: upcomingEvents[0].register_link || `/events/${upcomingEvents[0].id}`,
    thumbnail: upcomingEvents[0].thumbnail,
  } : null;

  return (
    <Activity
      eventUpcoming={upcomingEvent}
      pastEvents={updatedPastEvents}
      titleUpcoming="Upcoming Layer2 Meetup"
      titlePast="Past Layer2 Meetups"
    />
  );
}

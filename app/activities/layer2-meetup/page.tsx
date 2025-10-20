import { getSortedEvents } from "@/lib/fetch-events";
import Activity from "../Activity";

export default function Layer2Meetup() {
  const upcomingEvents = getSortedEvents("layer2-meetups", "FUTURE");
  const pastEvents = getSortedEvents("layer2-meetups", "PAST");

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
      pastEvents={pastEvents}
      titleUpcoming="Upcoming Layer2 Meetup"
      titlePast="Past Layer2 Meetups"
    />
  );
}
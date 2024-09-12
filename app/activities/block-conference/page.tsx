import { getSortedEvents } from "@/lib/fetch-events";
import { upcomingBlockConference } from "@/contents/upcomingEvents";
import Activity from "../Activity";

export default function Layer2Meetup() {
  const pastEvents = getSortedEvents("PAST");
  return (
    <Activity
      eventUpcoming={upcomingBlockConference}
      pastEvents={pastEvents}
      titleUpcoming="Upcoming Block Conference"
      titlePast="Past Block Conferences"
    />
  );
}

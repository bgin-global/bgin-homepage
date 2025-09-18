import { getSortedEvents } from "@/lib/fetch-events";
import Activity from "../Activity";

export default function Layer2Meetup() {
  const pastEvents = getSortedEvents("layer2-meetups", "PAST");

  // No upcoming Layer2 meetups currently scheduled

  return (
    <Activity
      eventUpcoming={null}
      pastEvents={pastEvents}
      titleUpcoming="Upcoming Layer2 Meetup"
      titlePast="Past Layer2 Meetups"
    />
  );
}
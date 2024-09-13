import { getSortedEvents } from "@/lib/fetch-events";
import { upcomingLayer2Meetup } from "@/contents/upcomingEvents";
import Activity from "../Activity";

export default function Layer2Meetup() {
  const pastEvents = getSortedEvents("layer2-meetups", "PAST");
  return (
    <Activity
      eventUpcoming={upcomingLayer2Meetup}
      pastEvents={pastEvents}
      titleUpcoming="Upcoming Layer2 Meetup"
      titlePast="Past Layer2 Meetups"
    />
  );
}

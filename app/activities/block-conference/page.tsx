import { getSortedEvents } from "@/lib/fetch-events";
import { upcomingBlockConference } from "@/contents/upcomingEvents";
import Activity from "../Activity";

export default function BlockConference() {
  const pastEvents = getSortedEvents("block-conferences", "PAST");
  const blockConference = upcomingBlockConference as {
    title: string;
    date: string;
    location: string;
    link: string;
    thumbnail?: string;
  } | null;

  return (
    <Activity
      eventUpcoming={blockConference}
      pastEvents={pastEvents}
      titleUpcoming="Upcoming Block Conference"
      titlePast="Past Block Conferences"
    />
  );
}

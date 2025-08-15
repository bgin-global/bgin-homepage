import { getSortedEvents } from "@/lib/fetch-events";
import Activity from "../Activity";

export default function Layer2Meetup() {
  const pastEvents = getSortedEvents("layer2-meetups", "PAST");
  
  // Use the overview page as the link for upcoming events
  const upcomingLayer2MeetupWithOverview = {
    title: "Layer 2 Meetups @ ETHTokyo & EDCON 2025",
    date: "September 15-19, 2025",
    location: "Tokyo & Osaka, Japan",
    link: "/activities/layer2-meetup-overview"
  };
  
  return (
    <Activity
      eventUpcoming={upcomingLayer2MeetupWithOverview}
      pastEvents={pastEvents}
      titleUpcoming="Upcoming Layer2 Meetup"
      titlePast="Past Layer2 Meetups"
    />
  );
}
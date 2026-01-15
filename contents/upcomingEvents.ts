// Function to calculate the next meeting date for bi-weekly meetings
function getNextBiweeklyMeeting(dayOfWeek: number, hour: number, startDate: Date): string {
  const today = new Date();
  const next = new Date(startDate);
  
  // Set the time
  next.setUTCHours(hour, 0, 0, 0);
  
  // Calculate days until the target day of week
  while (next.getUTCDay() !== dayOfWeek) {
    next.setDate(next.getDate() + 1);
  }
  
  // If the calculated date is in the past, add 14 days until we get a future date
  while (next <= today) {
    next.setDate(next.getDate() + 14);
  }
  
  // Format the date
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  };
  
  const dateStr = next.toLocaleDateString('en-US', options);
  const timeStr = hour === 12 ? '12pm' : hour === 11 ? '11am' : `${hour}:00`;
  
  return `${timeStr} Universal Time, ${dateStr}`;
}

export const upcomingBlockConference: {
  title: string;
  date: string;
  location: string;
  link: string | null;
  thumbnail?: string;
} = {
  title: "BGIN Block #14 Meeting",
  date: "March 1-2, 2026",
  location: "Tokyo, Japan",
  link: "/events/block14",
  thumbnail: "/images/Events/Block5.jpeg",
};

export const upcomingLayer2Meetup = {
  title: "Layer2 Meetup",
  date: "September 15-17, 2025",
  location: "Tokyo & Osaka, Japan",
  link: "/activities/layer2-meetup",
};

// Dynamic WG Calls - automatically calculated
// IKP WG: Bi-weekly on Thursdays at 12pm UTC (starting from a known Thursday)
// FASE WG: Bi-weekly on Wednesdays at 11am UTC (starting from a known Wednesday)
// Cyber Security WG: As necessary (shown as TBD)
export const upcomingWGCalls = [
  {
    wgTitle: "IKP WG",
    date: getNextBiweeklyMeeting(4, 12, new Date('2025-01-09')), // Thursday = 4, starting from Jan 9, 2025
  },
  {
    wgTitle: "FASE WG", 
    date: getNextBiweeklyMeeting(3, 11, new Date('2025-01-08')), // Wednesday = 3, starting from Jan 8, 2025
  },
  {
    wgTitle: "Cyber Security WG",
    date: "As necessary - check announcements on our socials",
  },
];

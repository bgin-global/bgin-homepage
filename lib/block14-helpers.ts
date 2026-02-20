import { programData } from "./block14-program-data";

// Process program data. When includeJpOnly is false, sessions with jpOnly: true are excluded (for English page).
export const processProgram = (includeJpOnly = false) => {
  const processed: any = {};
  
  Object.entries(programData.program).forEach(([day, dayData]) => {
    const sessions = includeJpOnly
      ? dayData.sessions
      : dayData.sessions.filter((s: any) => !s.jpOnly);
    processed[day] = sessions.map((session: any) => ({
      ...session,
      room: session.room,
      // Format time for open-ended sessions
      displayTime: session.time.endsWith('-') 
        ? session.time.replace('-', ' onwards')
        : session.time,
      // Generate proper detail page URLs
      detailPage: session.detailPage.includes('make one') 
        ? `/events/20260301-block14/sessions/${session.id}`
        : session.detailPage,
      // Handle empty fields and map to BGIN structure
      contributors: session.speakers || 'TBD',
      sessionChair: session.moderator || 'TBD',
      summary: session.summary || 'Details coming soon'
    }));
  });
  
  return processed;
};

// Helper function to group sessions by time
export const groupSessionsByTime = (sessions: any[]) => {
  const grouped: { [key: string]: any[] } = {};
  sessions.forEach(session => {
    if (!grouped[session.displayTime]) {
      grouped[session.displayTime] = [];
    }
    grouped[session.displayTime].push(session);
  });
  return grouped;
};

// Helper function to group sessions by room
export const groupSessionsByRoom = (sessions: any[]) => {
  const grouped: { [key: string]: any[] } = {};
  sessions.forEach(session => {
    const roomKey = session.room;
    if (!grouped[roomKey]) {
      grouped[roomKey] = [];
    }
    grouped[roomKey].push(session);
  });
  return grouped;
};

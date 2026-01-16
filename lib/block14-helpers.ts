import { programData } from "./block14-program-data";

// Process program data
export const processProgram = () => {
  const processed: any = {};
  
  Object.entries(programData.program).forEach(([day, dayData]) => {
    processed[day] = dayData.sessions.map(session => ({
      ...session,
      // Standardize room names
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

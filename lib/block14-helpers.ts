import { programData } from "./block14-program-data";

/** Session may have jpOnly for Japanese-only sessions (e.g. 2-11). */
type SessionWithJpOnly = { jpOnly?: boolean; [key: string]: unknown };

// Process program data. When includeJpOnly is false, sessions with jpOnly: true are excluded (for English page).
export const processProgram = (includeJpOnly = false) => {
  const processed: Record<string, unknown[]> = {};
  
  Object.entries(programData.program).forEach(([day, dayData]) => {
    const allSessions = (dayData as { sessions: SessionWithJpOnly[] }).sessions;
    const sessions = includeJpOnly
      ? allSessions
      : allSessions.filter((s) => !s.jpOnly);
    processed[day] = sessions.map((session: SessionWithJpOnly) => ({
      ...session,
      room: session.room,
      displayTime: String(session.time).endsWith('-')
        ? String(session.time).replace('-', ' onwards')
        : session.time,
      detailPage: String(session.detailPage).includes('make one')
        ? `/events/20260301-block14/sessions/${session.id}`
        : session.detailPage,
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

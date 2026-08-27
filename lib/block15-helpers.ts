import { programData } from "./block15-program-data";

type SessionRecord = {
  jpOnly?: boolean;
  room: string;
  time: string;
  id: string;
  detailPage: string;
  speakers?: string;
  moderator?: string;
  summary?: string;
  [key: string]: unknown;
};

export const processProgram = (includeJpOnly = false) => {
  const processed: Record<string, unknown[]> = {};

  Object.entries(programData.program).forEach(([day, dayData]) => {
    const allSessions = (dayData as { sessions: SessionRecord[] }).sessions;
    const sessions = includeJpOnly
      ? allSessions
      : allSessions.filter((s) => !s.jpOnly);
    processed[day] = sessions.map((session) => ({
      ...session,
      room: session.room,
      displayTime: String(session.time).endsWith("-")
        ? String(session.time).replace("-", " onwards")
        : session.time,
      detailPage: `/events/20261015-block15/sessions/${session.id}`,
      contributors: session.speakers || "TBD",
      sessionChair: session.moderator || "TBD",
      summary: session.summary || "Details coming soon",
    }));
  });

  return processed;
};

export const groupSessionsByTime = (sessions: SessionRecord[]) => {
  const grouped: { [key: string]: SessionRecord[] } = {};
  sessions.forEach((session) => {
    const timeKey = (session as { displayTime?: string }).displayTime ?? session.time;
    if (!grouped[timeKey]) {
      grouped[timeKey] = [];
    }
    grouped[timeKey].push(session);
  });
  return grouped;
};

export const groupSessionsByRoom = (sessions: SessionRecord[]) => {
  const grouped: { [key: string]: SessionRecord[] } = {};
  sessions.forEach((session) => {
    const roomKey = session.room;
    if (!grouped[roomKey]) {
      grouped[roomKey] = [];
    }
    grouped[roomKey].push(session);
  });
  return grouped;
};

/** Break rows inserted between session blocks in the list view. */
export const BLOCK15_BREAKS: Record<"day1" | "day2", { time: string; title: string }[]> = {
  day1: [
    { time: "11:20 - 11:30", title: "Tea Break" },
    { time: "13:00 - 14:00", title: "Lunch Break" },
    { time: "15:30 - 15:40", title: "Tea Break" },
  ],
  day2: [
    { time: "11:20 - 11:30", title: "Tea Break" },
    { time: "13:00 - 14:00", title: "Lunch Break" },
    { time: "15:30 - 15:40", title: "Tea Break" },
  ],
};

/** Chronological slots for the detailed list view (sessions + breaks). */
export const BLOCK15_TIME_ORDER: Record<"day1" | "day2", string[]> = {
  day1: [
    "09:00 - 09:20",
    "09:20 - 09:50",
    "09:50 - 11:20",
    "11:20 - 11:30",
    "11:30 - 13:00",
    "13:00 - 14:00",
    "14:00 - 14:45",
    "14:45 - 15:30",
    "15:30 - 15:40",
    "15:40 - 17:10",
    "17:10 onwards",
  ],
  day2: [
    "09:00 - 09:20",
    "09:20 - 09:50",
    "09:50 - 11:20",
    "11:20 - 11:30",
    "11:30 - 13:00",
    "13:00 - 14:00",
    "14:00 - 14:45",
    "15:30 - 15:40",
    "15:40 - 17:10",
  ],
};

export function getBreakTitle(day: "day1" | "day2", time: string): string | null {
  const match = BLOCK15_BREAKS[day].find((b) => b.time === time);
  return match?.title ?? null;
}

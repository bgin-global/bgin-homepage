import { programData } from "./block15-program-data";

export type Block15Session = typeof programData.program.day1.sessions[number];

export function findBlock15Session(sessionId: string) {
  for (const dayData of Object.values(programData.program)) {
    const session = dayData.sessions.find((s) => s.id === sessionId);
    if (session) {
      return { session, day: dayData.date };
    }
  }
  return null;
}

export function getAllBlock15Sessions(): Block15Session[] {
  return [
    ...programData.program.day1.sessions,
    ...programData.program.day2.sessions,
  ];
}

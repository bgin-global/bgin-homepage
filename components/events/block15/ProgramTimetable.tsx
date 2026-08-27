"use client";

import React from "react";
import Link from "next/link";
import { programData } from "@/lib/block15-program-data";
import { getWGColorClasses } from "@/lib/block15-wg-colors";

const timeSlots = {
  day1: [
    "09:00 - 09:20",
    "09:20 - 09:50",
    "09:50 - 11:20",
    "11:30 - 13:00",
    "14:00 - 14:45",
    "14:45 - 15:30",
    "15:40 - 17:10",
    "17:10-",
  ],
  day2: [
    "09:00 - 09:20",
    "09:20 - 09:50",
    "09:50 - 11:20",
    "11:30 - 13:00",
    "14:00 - 14:45",
    "15:40 - 17:10",
  ],
};

const rooms = {
  day1: ["Room A", "Room B", "Open Space"],
  day2: ["Room A", "Room B"],
};

const ProgramTimetable: React.FC = () => {
  const getSessionGrid = (day: "day1" | "day2") => {
    const grid: {
      [room: string]: { [time: string]: Record<string, unknown> | null };
    } = {};
    const dayRooms = rooms[day];
    const dayTimeSlots = timeSlots[day];

    dayRooms.forEach((room) => {
      grid[room] = {};
      dayTimeSlots.forEach((time) => {
        grid[room][time] = null;
      });
    });

    programData.program[day].sessions.forEach((session) => {
      const roomKey = session.room;
      const timeKey = session.time;

      if (
        grid[roomKey] &&
        Object.prototype.hasOwnProperty.call(grid[roomKey], timeKey)
      ) {
        grid[roomKey][timeKey] = session;
      }
    });

    return grid;
  };

  const renderDay = (
    day: "day1" | "day2",
    dayLabel: string,
    date: string
  ) => {
    const grid = getSessionGrid(day);
    const dayRooms = rooms[day];
    const dayTimeSlots = timeSlots[day];

    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          {dayLabel} - {date}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Tea break 11:20–11:30 · Lunch 13:00–14:00 · Tea break 15:30–15:40
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th
                  className="border border-gray-300 bg-gray-50 p-2 text-left text-sm font-semibold w-48"
                >
                  Room
                </th>
                {dayTimeSlots.map((time) => (
                  <th
                    key={time}
                    className="border border-gray-300 bg-gray-50 p-2 text-center text-sm font-semibold"
                  >
                    {time}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dayRooms.map((room) => (
                <tr key={room}>
                  <td
                    className="border border-gray-300 p-2 text-sm font-medium bg-gray-50 align-top"
                  >
                    {room}
                  </td>
                  {dayTimeSlots.map((time) => {
                    const session = grid[room]?.[time];
                    if (!session) {
                      return (
                        <td key={time} className="border border-gray-300 p-2" />
                      );
                    }
                    const wg = String(session.wg ?? "General");
                    const href = `/events/20261015-block15/sessions/${String(session.id)}`;
                    return (
                      <td
                        key={time}
                        className={`border border-gray-300 p-2 transition-all duration-200 ${getWGColorClasses(wg)} hover:shadow-md`}
                      >
                        <Link
                          href={href}
                          className="text-sm font-medium block no-underline hover:no-underline text-inherit"
                        >
                          {String(session.title)}
                        </Link>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full px-4">
        <div className="mb-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="text-sm font-medium">Working Groups:</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-yellow-100 border border-yellow-300 text-yellow-800">
                Agentic AI
              </span>
              <span className="px-2 py-1 text-xs rounded bg-blue-100 border border-blue-300 text-blue-800">
                IKP
              </span>
              <span className="px-2 py-1 text-xs rounded bg-green-100 border border-green-300 text-green-800">
                Cyber Security
              </span>
              <span className="px-2 py-1 text-xs rounded bg-purple-100 border border-purple-300 text-purple-800">
                FASE
              </span>
              <span className="px-2 py-1 text-xs rounded bg-gray-100 border border-gray-300 text-gray-800">
                General
              </span>
            </div>
          </div>
        </div>

        {renderDay("day1", "Day 1", "October 15, 2026")}
        {renderDay("day2", "Day 2", "October 16, 2026")}
      </div>
    </div>
  );
};

export default ProgramTimetable;

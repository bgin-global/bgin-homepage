"use client";

import React from 'react';
import Link from 'next/link';
import { programData } from '@/lib/block14-program-data';
import { getWGColorClasses } from '@/lib/block14-wg-colors';

const ProgramTimetable = () => {
  // Define time slots for each day (based on Block14 program)
  const timeSlots = {
    day1: ['09:00 - 09:20', '09:20 - 10:50', '11:00 - 12:30', '13:30 - 15:00', '15:30 - 17:00', '17:00-'],
    day2: ['09:00 - 9:20', '09:20 - 10:50', '11:00 - 12:30', '13:30 - 15:00', '15:30 - 17:00']
  };

  // Define rooms for each day
  const rooms = {
    day1: ['Room A', 'Room B', 'Open Space'],
    day2: ['Room A', 'Room B', 'Open Space']
  };

  // Process sessions into a grid structure
  const getSessionGrid = (day: 'day1' | 'day2') => {
    const grid: { [room: string]: { [time: string]: any } } = {};
    const dayRooms = rooms[day];
    const dayTimeSlots = timeSlots[day];
    
    // Initialize grid
    dayRooms.forEach(room => {
      grid[room] = {};
      dayTimeSlots.forEach(time => {
        grid[room][time] = null;
      });
    });

    // Fill grid with sessions
    const sessions = programData.program[day].sessions;
    sessions.forEach((session: any) => {
      const roomKey = session.room;

      // Handle Agent Hack spanning multiple time slots
      if (session.title === 'Agent Hack' && session.room === 'Open Space') {
        // Agent Hack spans from 9:20 to 17:00 (day1) or 9:20 to 15:00 (day2)
        if (day === 'day1') {
          // Day 1: 9:20 - 17:00
          dayTimeSlots.forEach(time => {
            if (time !== '09:00 - 09:20' && time !== '17:00-') {
              grid[roomKey][time] = { ...session, isAgentHack: true };
            }
          });
        } else {
          // Day 2: 9:20 - 15:00
          dayTimeSlots.forEach(time => {
            if (time !== '09:00 - 9:20' && time !== '15:30 - 17:00') {
              grid[roomKey][time] = { ...session, isAgentHack: true };
            }
          });
        }
      } else {
        // Map session time to grid
        let timeKey = session.time;
        // Normalize time format
        if (timeKey === '09:00 - 9:20') timeKey = '09:00 - 9:20';
        if (timeKey === '17:00-') timeKey = '17:00-';
        
        if (grid[roomKey] && grid[roomKey].hasOwnProperty(timeKey)) {
          grid[roomKey][timeKey] = session;
        }
      }
    });

    return grid;
  };

  const renderDay = (day: 'day1' | 'day2', dayLabel: string, date: string) => {
    const grid = getSessionGrid(day);
    const dayRooms = rooms[day];
    const dayTimeSlots = timeSlots[day];

    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">{dayLabel} - {date}</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="border border-gray-300 bg-gray-50 p-2 text-left text-sm font-semibold w-48">Room</th>
                {dayTimeSlots.map(time => (
                  <th key={time} className="border border-gray-300 bg-gray-50 p-2 text-center text-sm font-semibold">
                    {time}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dayRooms.map(room => {
                let agentHackSpan = 0;

                return (
                  <tr key={room}>
                    <td className="border border-gray-300 p-2 text-sm font-medium bg-gray-50 align-top">
                      {room}
                    </td>
                    {dayTimeSlots.map((time, index) => {
                      const session = grid[room]?.[time];
                      
                      // Handle Agent Hack spanning
                      if (session?.isAgentHack) {
                        if (agentHackSpan === 0) {
                          // Count how many consecutive Agent Hack sessions
                          agentHackSpan = 0;
                          for (let i = index; i < dayTimeSlots.length; i++) {
                            if (grid[room]?.[dayTimeSlots[i]]?.isAgentHack) {
                              agentHackSpan++;
                            } else {
                              break;
                            }
                          }

                          const isClickable = session.detailPage && !session.detailPage.includes('make one');
                          return (
                            <td
                              key={time}
                              colSpan={agentHackSpan}
                              className={`border border-gray-300 p-2 text-center transition-all duration-200 ${getWGColorClasses(session.wg)} ${
                                isClickable ? 'hover:shadow-lg hover:transform hover:-translate-y-1 cursor-pointer' : ''
                              }`}
                            >
                              {isClickable ? (
                                <Link href={session.detailPage} className="text-sm font-medium block h-full w-full no-underline hover:no-underline">
                                  {session.title}
                                </Link>
                              ) : (
                                <div className="text-sm font-medium">{session.title}</div>
                              )}
                            </td>
                          );
                        } else {
                          agentHackSpan--;
                          return null;
                        }
                      }
                      
                      if (session) {
                        const isClickable = session.detailPage && !session.detailPage.includes('make one');
                        return (
                          <td
                            key={time}
                            className={`border border-gray-300 p-2 transition-all duration-200 ${getWGColorClasses(session.wg)} ${
                              isClickable ? 'hover:shadow-lg hover:transform hover:-translate-y-1 cursor-pointer' : ''
                            }`}
                          >
                            {isClickable ? (
                              <Link href={session.detailPage} className="text-sm font-medium block h-full w-full no-underline hover:no-underline">
                                {session.title}
                              </Link>
                            ) : (
                              <div className="text-sm font-medium">{session.title}</div>
                            )}
                          </td>
                        );
                      }
                      
                      return <td key={time} className="border border-gray-300 p-2"></td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full px-4">
        <style jsx>{`
          a {
            text-decoration: none !important;
          }
          a:hover {
            text-decoration: none !important;
          }
        `}</style>
        <div className="mb-6">
          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="text-sm font-medium">Working Groups:</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-yellow-100 border border-yellow-300">Agentic AI</span>
              <span className="px-2 py-1 text-xs rounded bg-blue-100 border border-blue-300">IKP</span>
              <span className="px-2 py-1 text-xs rounded bg-green-100 border border-green-300">Cyber Security</span>
              <span className="px-2 py-1 text-xs rounded bg-purple-100 border border-purple-300">FASE</span>
              <span className="px-2 py-1 text-xs rounded bg-gray-100 border border-gray-300">General</span>
            </div>
          </div>
        </div>

        {/* Day 1 */}
        {renderDay('day1', 'Day 1', 'March 1, 2026')}

        {/* Day 2 */}
        {renderDay('day2', 'Day 2', 'March 2, 2026')}
      </div>
    </div>
  );
};

export default ProgramTimetable;

"use client";

import React from 'react';
import Link from 'next/link';
import { programData } from '@/lib/block13-program-data';

const ProgramTimetable = () => {
  // Color mapping for working groups
  const wgColors: { [key: string]: string } = {
    'BGIN Agent Hack': 'bg-yellow-100 border-yellow-300',
    'IKP': 'bg-blue-100 border-blue-300',
    'Cyber Security': 'bg-green-100 border-green-300',
    'CS': 'bg-green-100 border-green-300',
    'FASE': 'bg-purple-100 border-purple-300',
    'General': 'bg-gray-100 border-gray-300',
    'TBD': 'bg-gray-50 border-gray-200'
  };

  const getSessionColor = (wg: string) => {
    return wgColors[wg] || wgColors['General'];
  };

  // Define time slots for each day
  const timeSlots = {
    day1: ['9:00 - 10:30', '11:00 - 12:30', '13:30 - 15:00', '15:30 - 17:00', '17:10 -'],
    day2: ['9:00 - 10:30', '11:00 - 12:30', '13:30 - 15:00', '15:30 - 17:00', '17:00 - 18:00'],
    day3: ['9:00 - 10:30', '10:45 - 12:15', '13:15 - 14:30', '14:45 - 16:15', '16:30 - 18:00']
  };

  // Define rooms for each day
  const rooms = {
    day1: ['Leavey Program Room', 'Arrupe Hall', 'Georgetown University Faculty Club Restaurant'],
    day2: ['Leavey Program Room', 'Arrupe Hall', 'TBD'],
    day3: ['Hariri 140', 'Hariri 240']
  };

  // Process sessions into a grid structure
  const getSessionGrid = (day: 'day1' | 'day2' | 'day3') => {
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
    sessions.forEach(session => {
      let roomKey = session.room;
      
      // Handle room name variations
      if (roomKey.includes('HFSC') && roomKey.includes('Bulldog')) {
        roomKey = 'HFSC Herman Meeting Room or Bulldog Alley';
      } else if (roomKey.includes('Hariri') && roomKey.includes('140')) {
        roomKey = 'Hariri 140';
      } else if (roomKey.includes('Hariri') && roomKey.includes('240')) {
        roomKey = 'Hariri 240';
      }

      // Handle sessions spanning multiple time slots
      if (session.title.startsWith('BGIN Agent Hack (Day')) {
        // BGIN Agent Hack spans the entire day
        dayTimeSlots.forEach(time => {
          if (!time.startsWith('17:10')) {
            grid[roomKey][time] = { ...session, isBGINAgentHack: true };
          }
        });
      } else if (session.title === 'Security Gathering on the Hill' && session.time === '9:00 - 12:30') {
        // Security Gathering spans first two time slots
        grid[roomKey]['9:00 - 10:30'] = { ...session, isSpanning: true, spanCount: 2 };
        grid[roomKey]['11:00 - 12:30'] = { ...session, isSpanned: true };
      } else if (session.title === 'AI Agent Governance - Archive' && session.time === '14:45 - 18:00') {
        // AI Agent Governance spans last two time slots on day 3
        grid[roomKey]['14:45 - 16:15'] = { ...session, isSpanning: true, spanCount: 2 };
        grid[roomKey]['16:30 - 18:00'] = { ...session, isSpanned: true };
      } else {
        // Map session time to grid
        let timeKey = session.time;
        // Normalize time format
        if (timeKey === '9:00 - 10:30') timeKey = '9:00 - 10:30';
        if (timeKey === '17:10-') timeKey = '17:10 -';
        if (timeKey === '13:15 - 14:30') timeKey = '13:15 - 14:30';
        if (timeKey === '14:45 - 16:15') timeKey = '14:45 - 16:15';
        if (timeKey === '16:30 - 18:00') timeKey = '16:30 - 18:00';
        if (timeKey === '10:45 - 12:15') timeKey = '10:45 - 12:15';
        
        if (grid[roomKey] && grid[roomKey].hasOwnProperty(timeKey)) {
          grid[roomKey][timeKey] = session;
        }
      }
    });

    return grid;
  };

  const renderDay = (day: 'day1' | 'day2' | 'day3', dayLabel: string, date: string) => {
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
                let bginAgentHackSpan = 0;
                let lastBGINAgentHackSession: any = null;
                
                return (
                  <tr key={room}>
                    <td className="border border-gray-300 p-2 text-sm font-medium bg-gray-50 align-top">
                      {room.replace('HFSC Herman Meeting Room or Bulldog Alley', 'HFSC Herman Meeting Room\nor\nBulldog Alley').split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < room.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </td>
                    {dayTimeSlots.map((time, index) => {
                      const session = grid[room]?.[time];
                      
                      // Handle BGIN Agent Hack spanning
                      if (session?.isBGINAgentHack) {
                        if (bginAgentHackSpan === 0) {
                          // Count how many consecutive BGIN Agent Hack sessions
                          bginAgentHackSpan = 0;
                          for (let i = index; i < dayTimeSlots.length; i++) {
                            if (grid[room]?.[dayTimeSlots[i]]?.isBGINAgentHack) {
                              bginAgentHackSpan++;
                            } else {
                              break;
                            }
                          }
                          lastBGINAgentHackSession = session;
                          
                          const isClickable = session.detailPage && !session.detailPage.includes('make one');
                          return (
                            <td
                              key={time}
                              colSpan={bginAgentHackSpan}
                              className={`border border-gray-300 p-2 text-center transition-all duration-200 ${getSessionColor(session.wg)} ${
                                isClickable ? 'hover:shadow-lg hover:transform hover:-translate-y-1 cursor-pointer' : ''
                              }`}
                            >
                              {isClickable ? (
                                <Link href={session.detailPage} className="text-sm font-medium block h-full w-full no-underline hover:no-underline">
                                  {session.title.replace('(Day 1)', '').replace('(Day 2)', '').trim()}
                                </Link>
                              ) : (
                                <div className="text-sm font-medium">{session.title.replace('(Day 1)', '').replace('(Day 2)', '').trim()}</div>
                              )}
                            </td>
                          );
                        } else {
                          bginAgentHackSpan--;
                          return null;
                        }
                      }
                      
                      // Handle other spanning sessions (like Security Gathering)
                      if (session?.isSpanning) {
                        const isClickable = session.detailPage && !session.detailPage.includes('make one');
                        return (
                          <td
                            key={time}
                            colSpan={session.spanCount}
                            className={`border border-gray-300 p-2 text-center transition-all duration-200 ${getSessionColor(session.wg)} ${
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
                      
                      // Skip cells that are spanned over
                      if (session?.isSpanned) {
                        return null;
                      }
                      
                      if (session) {
                        const isClickable = session.detailPage && !session.detailPage.includes('make one');
                        return (
                          <td
                            key={time}
                            className={`border border-gray-300 p-2 transition-all duration-200 ${getSessionColor(session.wg)} ${
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
    <div className="w-full">
      <style jsx>{`
        a {
          text-decoration: none !important;
        }
        a:hover {
          text-decoration: none !important;
        }
      `}</style>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Program Overview</h3>
        <p className="text-gray-600 mb-4">
          Below is the program overview. For detailed session information, please refer to the 
          {" "}<a 
            href="#detailed-program" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('detailed-program')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-blue-600 hover:underline cursor-pointer"
          >detailed program below</a>.
        </p>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="text-sm font-medium">Working Groups:</div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs rounded bg-yellow-100 border border-yellow-300">BGIN Agent Hack</span>
            <span className="px-2 py-1 text-xs rounded bg-blue-100 border border-blue-300">IKP</span>
            <span className="px-2 py-1 text-xs rounded bg-green-100 border border-green-300">Cyber Security</span>
            <span className="px-2 py-1 text-xs rounded bg-purple-100 border border-purple-300">FASE</span>
            <span className="px-2 py-1 text-xs rounded bg-gray-100 border border-gray-300">General</span>
          </div>
        </div>
      </div>

      {/* Day 1 */}
      {renderDay('day1', 'Day 1', 'October 15, 2025')}
      
      {/* Day 2 */}
      {renderDay('day2', 'Day 2', 'October 16, 2025')}
      
      {/* Day 3 */}
      {renderDay('day3', 'Day 3', 'October 17, 2025')}
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> The timetable above provides a quick overview. Scroll down for complete session details including descriptions, session chairs, and contributors.
        </p>
      </div>
    </div>
  );
};

export default ProgramTimetable;

"use client";

import { newsletters } from "@/contents/newsletters";
import ItemNewsletter from "./ItemNewsletter";
import { useState } from "react";

export default function NewsletterList() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 3;
  
  const displayedNewsletters = showAll 
    ? newsletters 
    : newsletters.slice(0, INITIAL_DISPLAY_COUNT);

  if (newsletters.length === 0) {
    return (
      <div className="bg-white w-full flex flex-col items-center gap-4 p-8 rounded-3xl border border-gray-200">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="2"/>
            <path d="M12 8v4M12 16h.01" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-medium text-gray-800 font-FamiljenGrotesk mb-2">
            No newsletters available yet
          </h3>
          <p className="text-gray-600 font-Inter">
            Monthly newsletters will be published here as they become available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {displayedNewsletters.map((newsletter, index) => (
        <ItemNewsletter 
          key={index} 
          newsletter={newsletter} 
          isLatest={index === 0} 
        />
      ))}
      
      {newsletters.length > INITIAL_DISPLAY_COUNT && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {showAll ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Show Less
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View All {newsletters.length} Newsletters
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

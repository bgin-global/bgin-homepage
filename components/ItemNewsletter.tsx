import { Newsletter } from "@/contents/newsletters";
import { useState } from "react";

interface Props {
  newsletter: Newsletter;
  isLatest?: boolean;
}

export default function ItemNewsletter(props: Props) {
  const { newsletter, isLatest = false } = props;
  const [isExpanded, setIsExpanded] = useState(isLatest);

  return (
    <div className="bg-white w-full flex flex-col p-6 rounded-3xl border border-white border-opacity-[0.5] hover:shadow-lg transition-all duration-300">
      {/* Header - Always Visible */}
      <div 
        className="flex flex-col lg:flex-row items-start lg:items-center gap-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Newsletter Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7H17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11H17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 15H13"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title, Date, and Expand Icon */}
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl lg:text-2xl leading-[28px] lg:leading-[32px] font-medium text-black font-FamiljenGrotesk">
              {newsletter.title}
              {isLatest && (
                <span className="ml-2 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2 py-1 rounded-full">
                  Latest
                </span>
              )}
            </h3>
            <span className="text-sm font-medium text-gray-600">
              {newsletter.date}
            </span>
          </div>
          
          {/* Expand/Collapse Icon */}
          <div className="flex items-center gap-3">
            <div className="flex flex-wrap gap-1">
              {newsletter.workingGroups.map((wg, index) => (
                <span
                  key={index}
                  className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full"
                >
                  {wg}
                </span>
              ))}
            </div>
            <div className="flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-4">
          {/* Description */}
          {newsletter.description && (
            <p className="text-base leading-[22px] text-gray-700 font-Inter">
              {newsletter.description}
            </p>
          )}

          {/* Download Button */}
          <div className="flex justify-start">
            <a
              href={newsletter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              onClick={(e) => e.stopPropagation()} // Prevent triggering the expand/collapse
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15V3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

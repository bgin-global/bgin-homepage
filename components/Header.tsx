"use client";
import Image from "next/image";
import ArrowRight from "./ArrowRight";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "" : "border border-b-black"
      } max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-999 max-lg:w-screen bg-white`}
    >
      <div className="flex justify-between items-center p-4 max-w-4xl m-auto">
        <Image
          src="/images/Header/Logo.svg"
          alt="Logo"
          className="h-[44px] w-[44px]"
          width={44}
          height={44}
        />

        <div className="flex lg:hidden justify-center items-center gap-6">
          <div className="bg-black flex justify-center items-center gap-2 px-3 py-2 rounded-full text-sm leading-[21px] font-semibold text-white">
            <div>Join Us</div>
          </div>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6.11523L6 18.1152"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6.11523L18 18.1152"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex max-lg:hidden justify-center items-center gap-6">
          <div className="text-base leading-[19px] text-black">About</div>
          <div className="text-base leading-[19px] text-black">Documents</div>
          <div className="text-base leading-[19px] text-black">Events</div>
          <div className="text-base leading-[19px] text-black">
            Working groups
          </div>
          <div className="bg-black flex justify-center items-center gap-2 px-3 py-2 rounded-full text-sm leading-[21px] font-semibold text-white">
            <div>Join Us</div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } lg:hidden flex-1 flex-col w-full h-screen flex items-end gap-6 p-6 bg-sub`}
        id="navbar"
      >
        <div className="w-full flex justify-between items-center">
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            About
          </div>
          <ArrowRight />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Documents
          </div>
          <ArrowRight />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Events
          </div>
          <ArrowRight />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Working groups
          </div>
          <ArrowRight />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Meetings
          </div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Header;

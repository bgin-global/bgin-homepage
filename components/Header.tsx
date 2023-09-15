"use client";
import Image from "next/image";
import ArrowRight from "./ArrowRight";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "" : "border border-b-black"
      } max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-999 max-lg:w-screen bg-white z-[999]`}
    >
      <div className="flex justify-between items-center p-4 max-w-4xl m-auto">
        <Link href="/">
          <Image
            src="/images/Header/Logo.svg"
            alt="Logo"
            className="h-[44px] w-[44px]"
            width={44}
            height={44}
          />
        </Link>

        <div className="flex lg:hidden justify-center items-center gap-6">
          <Link href="https://bgin.discourse.group/" className="bg-black flex justify-center items-center gap-2 px-3 py-2 rounded-full text-sm leading-[21px] font-semibold text-white">
            <div>Join Us</div>
          </Link>
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
          <Link href="/about">
            <div className="text-base leading-[19px] text-black">About</div>
          </Link>
          <ul className="pl-0" style={{ listStyle: "none" }}>
            <li style={{ listStyle: "none" }}>
              <button
                type="button"
                className="peer text-base leading-[19px] text-black"
              >
                Resources
              </button>
              <div className="hidden flex-col absolute bg-white hover:flex peer-hover:flex text-black border-2 border-black p-2 gap-2">
                <React.Fragment key={0}>
                  <Link href="/documents" className="hover:opacity-50">
                    Documents
                  </Link>
                </React.Fragment>
                <React.Fragment key={0}>
                  <Link
                    href="https://www.youtube.com/@bgin/videos"
                    className="hover:opacity-50"
                  >
                    Videos
                  </Link>
                </React.Fragment>
              </div>
            </li>
          </ul>

          <Link href="/events">
            <div className="text-base leading-[19px] text-black">Events</div>
          </Link>
          <Link href="/working-groups">
            <div className="text-base leading-[19px] text-black">
              Working Groups
            </div>
          </Link>
          <Link href="https://bgin.discourse.group/" className="bg-black flex justify-center items-center gap-2 px-3 py-2 rounded-full text-sm leading-[21px] font-semibold text-white">
            <div>Join Us</div>
          </Link>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } lg:hidden flex-1 flex-col w-full h-screen flex items-end gap-6 p-6 bg-sub`}
        id="navbar"
      >
        <Link
          href="/about"
          className="w-full flex justify-between items-center"
        >
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            About
          </div>
          <ArrowRight />
        </Link>

        <Link
          href="/documents"
          className="w-full flex justify-between items-center"
        >
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Documents
          </div>
          <ArrowRight />
        </Link>
        <Link
          href="https://www.youtube.com/@bgin/videos"
          className="w-full flex justify-between items-center"
        >
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Videos
          </div>
          <ArrowRight />
        </Link>
        <Link
          href="/events"
          className="w-full flex justify-between items-center"
        >
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Events
          </div>
          <ArrowRight />
        </Link>
        <Link
          href="/working-groups"
          className="w-full flex justify-between items-center"
        >
          <div className="text-3xl leading-[42px] font-medium text-black font-FamiljenGrotesk">
            Working Groups
          </div>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Header;

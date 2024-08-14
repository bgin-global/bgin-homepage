"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PlainButton from "./Button/PlainButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "" : "border border-b-black"
      } static w-screen bg-white`}
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

        <div className="flex lg:hidden justify-center items-center gap-6 bgin-button">
          <a
            href="https://bgin.discourse.group/"
            className="bg-black flex justify-center items-center gap-2 px-3 py-2 rounded-full text-sm leading-[21px] font-semibold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>Join Us</div>
          </a>
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

        <div className="hidden lg:flex justify-center items-center gap-6 bgin-button">
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
                  <a
                    href="https://www.youtube.com/@bgin/videos"
                    className="hover:opacity-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Videos
                  </a>
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
          <a
            href="https://bgin.discourse.group/"
            className="bg-black flex justify-center items-center gap-2 px-3 py-2 rounded-full text-sm leading-[21px] font-semibold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>Join Us</div>
          </a>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } lg:hidden flex-1 flex-col w-full h-screen flex items-end gap-6 p-6 bg-sub`}
        id="navbar"
      >
        <PlainButton link="/about" text="About" />
        <PlainButton link="/documents" text="Documents" />
        <PlainButton
          link="https://www.youtube.com/@bgin/videos"
          text="Videos"
        />
        <PlainButton link="/events" text="Events" />
        <PlainButton link="/working-groups" text="Working Groups" />
      </div>
    </div>
  );
}

export default Header;

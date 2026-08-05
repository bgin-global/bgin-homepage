"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { BLOCK15_PAGE, BLOCK15_REGISTER } from "@/contents/block15Promo";
import DiscourseGuideLink from "@/components/DiscourseGuideLink";

const NAV_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: "/start", label: "Start here" },
  { href: "/about", label: "About" },
  { href: "/activities", label: "Activities" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/gov", label: "Governance" },
  { href: "/sponsors", label: "Sponsors" },
  {
    href: "https://www.youtube.com/@bgin/videos",
    label: "Videos",
    external: true,
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isOpen ? "" : "border border-b-black"} static w-screen bg-white`}
    >
      <div className="flex justify-between items-center gap-6 p-4 max-w-5xl m-auto">
        <Link
          href="/"
          className="shrink-0 mr-1 inline-flex items-center cursor-pointer"
          aria-label="BGIN home"
        >
          <Image
            src="/images/Header/Logo.svg"
            alt="BGIN"
            className="h-9 w-9 pointer-events-none"
            width={36}
            height={36}
            priority
          />
        </Link>

        {/* Mobile: only campaign primary + discourse secondary */}
        <div className="flex lg:hidden justify-center items-center gap-2">
          <DiscourseGuideLink
            label="Discourse"
            className="px-3 py-2"
          />
          <a
            href={BLOCK15_REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-3 py-2 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
          >
            Register
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

        <div className="hidden lg:flex justify-center items-center gap-3">
          {NAV_LINKS.filter((l) => l.href !== "https://www.youtube.com/@bgin/videos").map(
            (item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-sm font-medium text-gray-700 hover:text-blue-700">
                  {item.label}
                </span>
              </Link>
            )
          )}
          <DiscourseGuideLink />
          <a
            href={BLOCK15_REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-3.5 py-1.5 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800"
          >
            Register Block 15
          </a>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } lg:hidden flex-1 flex-col w-full h-screen flex items-stretch gap-1 bg-gray-50 px-4 py-4`}
        id="navbar"
      >
        <a
          href={BLOCK15_REGISTER}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center px-4 py-2.5 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 mb-1"
          onClick={() => setIsOpen(false)}
        >
          Register Block 15
        </a>
        <DiscourseGuideLink
          className="justify-center px-4 py-2 mb-3"
          onClick={() => setIsOpen(false)}
        />
        {NAV_LINKS.map((item) =>
          item.external ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2.5 text-base text-gray-900 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-2.5 text-base text-gray-900 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
        <p className="text-xs text-gray-500 mt-2">
          Event page →{" "}
          <Link
            href={BLOCK15_PAGE}
            className="text-blue-700 underline"
            onClick={() => setIsOpen(false)}
          >
            Block 15 details
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Header;

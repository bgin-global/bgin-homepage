"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PlainButton from "./Button/PlainButton";
import Button from "./Button/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isOpen ? "" : "border border-b-black"
        } static w-screen bg-white`}
    >
      <div className="flex justify-between items-center p-4 max-w-5xl m-auto">
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
          <div>
            <Button
              link="https://bgin.discourse.group/"
              text="Join Us"
              color="black"
              withArrow={false}
            />
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

        <div className="hidden lg:flex justify-center items-center gap-6 bgin-button">
          <Link href="/about">
            <div className="text-lg leading-[19px] text-black">About</div>
          </Link>
          <Link href="/activities">
            <div className="text-lg leading-[19px] text-black">Activities</div>
          </Link>
          <Link href="/news">
            <div className="text-lg leading-[19px] text-black">News</div>
          </Link>
          <Link href="/gov">
            <div className="text-lg leading-[19px] text-black">Governance</div>
          </Link>
          <Link href="/sponsors">
            <div className="text-lg leading-[19px] text-black">Sponsors</div>
          </Link>
          <div>
            <Button
              link="https://bgin.discourse.group/"
              text="Join Us"
              color="black"
              withArrow={false}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link href="/about">
              <div className="text-lg leading-[19px] text-black py-2">About</div>
            </Link>
            <Link href="/activities">
              <div className="text-lg leading-[19px] text-black py-2">Activities</div>
            </Link>
            <Link href="/news">
              <div className="text-lg leading-[19px] text-black py-2">News</div>
            </Link>
            <Link href="/gov">
              <div className="text-lg leading-[19px] text-black py-2">Governance</div>
            </Link>
            <Link href="/sponsors">
              <div className="text-lg leading-[19px] text-black py-2">Sponsors</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

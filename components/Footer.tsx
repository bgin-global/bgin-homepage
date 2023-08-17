"use client";
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter();
  return (
    <div className="flex-col w-full flex justify-center items-center border-t border-black">
      <div className="w-full flex items-end px-4 py-12">
        <div className="max-w-4xl m-auto flex-1 flex max-lg:flex-col max-lg:justify-center lg:justify-between max-lg:items-center lg:items-end max-lg:gap-10">
          <div className="flex-col flex justify-center items-start max-lg:items-center gap-6 text-black">
            <div className="text-xl font-medium font-FamiljenGrotesk">
              Contact Info
            </div>
            <div className="flex-col flex items-start gap-6 text-base leading-[19px] font-Inter">
              <div className="flex-col flex items-start gap-6">
                <div className="flex items-start gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div>bgin-admin@mail.bgin-global.org</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <svg
              onClick={() => {
                router.push("https://github.com/bgin-global");
              }}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_0_21)">
                <path
                  d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2765 30.108 27.0367 28.0667 28.9921 25.3435C30.9474 22.6203 31.9994 19.3525 32 16C32 7.16 24.84 0 16 0Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_21">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              onClick={() => {
                router.push('https://twitter.com/bgin_global');
              }}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.052 30C22.128 30 28.734 19.994 28.734 11.332C28.734 11.052 28.734 10.768 28.722 10.488C30.0081 9.55698 31.1181 8.40432 32 7.08401C30.7986 7.61371 29.5255 7.96282 28.222 8.12001C29.5951 7.29929 30.6234 6.00795 31.116 4.48601C29.826 5.25026 28.414 5.78676 26.942 6.07201C25.9524 5.01806 24.6428 4.31985 23.2162 4.08553C21.7895 3.85121 20.3254 4.09386 19.0507 4.77589C17.7759 5.45792 16.7616 6.54127 16.1649 7.85813C15.5682 9.175 15.4224 10.6519 15.75 12.06C13.1395 11.9291 10.5856 11.2509 8.25409 10.0695C5.92254 8.88805 3.86537 7.2297 2.216 5.20201C1.37868 6.64818 1.12315 8.35881 1.50129 9.98655C1.87944 11.6143 2.86291 13.0371 4.252 13.966C3.21108 13.9306 2.19304 13.6511 1.28 13.15V13.24C1.28179 14.755 1.80661 16.2229 2.76575 17.3955C3.72488 18.5682 5.0595 19.3738 6.544 19.676C5.98053 19.8312 5.39846 19.9086 4.814 19.906C4.40197 19.9073 3.99076 19.8691 3.586 19.792C4.00557 21.0961 4.82255 22.2363 5.92249 23.053C7.02244 23.8696 8.35027 24.3217 9.72 24.346C7.39311 26.1736 4.5188 27.1648 1.56 27.16C1.03864 27.1622 0.517646 27.1322 0 27.07C3.00303 28.9845 6.4906 30.0011 10.052 30Z"
                fill="black"
              />
            </svg>

            <svg
              onClick={() => {
                router.push("https://www.linkedin.com/company/blockchain-governance-initiative-network/");
              }}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_0_25)">
                <path
                  d="M0 2.292C0 1.026 1.052 0 2.35 0H29.65C30.948 0 32 1.026 32 2.292V29.708C32 30.974 30.948 32 29.65 32H2.35C1.052 32 0 30.974 0 29.708V2.292ZM9.886 26.788V12.338H5.084V26.788H9.886ZM7.486 10.364C9.16 10.364 10.202 9.256 10.202 7.868C10.172 6.45 9.162 5.372 7.518 5.372C5.874 5.372 4.8 6.452 4.8 7.868C4.8 9.256 5.842 10.364 7.454 10.364H7.486ZM17.302 26.788V18.718C17.302 18.286 17.334 17.854 17.462 17.546C17.808 16.684 18.598 15.79 19.926 15.79C21.664 15.79 22.358 17.114 22.358 19.058V26.788H27.16V18.5C27.16 14.06 24.792 11.996 21.632 11.996C19.084 11.996 17.942 13.396 17.302 14.382V14.432H17.27C17.2806 14.4153 17.2913 14.3986 17.302 14.382V12.338H12.502C12.562 13.694 12.502 26.788 12.502 26.788H17.302Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_25">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              onClick={() => {
                router.push('https://www.youtube.com/channel/UCW_2j8IK0G92Mjx6OEVbS2w')
              }}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_0_27)">
                <path
                  d="M16.102 3.99799H16.28C17.924 4.00399 26.254 4.06399 28.5 4.66799C29.179 4.85232 29.7977 5.21163 30.2943 5.71C30.7909 6.20837 31.1481 6.82835 31.33 7.50799C31.532 8.26799 31.674 9.27399 31.77 10.312L31.79 10.52L31.834 11.04L31.85 11.248C31.98 13.076 31.996 14.788 31.998 15.162V15.312C31.996 15.7 31.978 17.528 31.834 19.432L31.818 19.642L31.8 19.85C31.7 20.994 31.552 22.13 31.33 22.966C31.1486 23.6459 30.7917 24.2662 30.295 24.7646C29.7983 25.2631 29.1793 25.6222 28.5 25.806C26.18 26.43 17.362 26.474 16.14 26.476H15.856C15.238 26.476 12.682 26.464 10.002 26.372L9.662 26.36L9.488 26.352L9.146 26.338L8.804 26.324C6.584 26.226 4.47 26.068 3.496 25.804C2.81698 25.6204 2.19813 25.2616 1.70145 24.7635C1.20477 24.2654 0.847694 23.6455 0.666 22.966C0.444 22.132 0.296 20.994 0.196 19.85L0.18 19.64L0.164 19.432C0.0652952 18.0768 0.0105997 16.7187 0 15.36L0 15.114C0.004 14.684 0.02 13.198 0.128 11.558L0.142 11.352L0.148 11.248L0.164 11.04L0.208 10.52L0.228 10.312C0.324 9.27399 0.466 8.26599 0.668 7.50799C0.849387 6.82808 1.20632 6.20781 1.70303 5.70935C2.19973 5.21089 2.81874 4.85177 3.498 4.66799C4.472 4.40799 6.586 4.24799 8.806 4.14799L9.146 4.13399L9.49 4.12199L9.662 4.11599L10.004 4.10199C11.9074 4.04074 13.8116 4.00673 15.716 3.99999H16.102V3.99799ZM12.8 10.418V20.054L21.114 15.238L12.8 10.418Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_27">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center p-4 text-base leading-[19px] text-black font-Inter border-t border-black">
        <div>© Copyright 2023 by BGIN</div>
      </div>
    </div>
  );
}

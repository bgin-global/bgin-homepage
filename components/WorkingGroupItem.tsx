import Image from "next/image";
import ArrowRight from "./Button/ArrowRight";
import { WorkingGroup } from "@/lib/fetch-working-groups";
import Button from "./Button/Button";

interface Props {
  workingGroup: WorkingGroup;
}

export default function WorkingGroupItem(props: Props) {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row items-start gap-12 p-6 rounded-3xl border border-white border-opacity-[0.5]">
      <div className="w-0 lg:w-1/3 lg:h-[400px] flex items-start gap-2.5 rounded-xl">
        {/* <Image
          alt="Hero Image"
          src="/images/Hero/Image_SP.svg"
          className="w-[100%] h-[100%] rounded-2xl"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        /> */}
      </div>
      <div className="h-full lg:w-full flex-col flex items-start gap-6">
        <div className="text-3xl leading-[48px] font-medium text-black font-FamiljenGrotesk">
          {props.workingGroup.group_name}{" "}
          <span className="px-4 py-2 border border-solid border-red-700 rounded-full text-red-700">
            {props.workingGroup.inactive ? "Inactive" : "Active"}
          </span>
        </div>
        <div className="w-full flex-col flex items-start gap-6">
          <div className="w-full flex-col flex items-start gap-2 text-black">
            <div className="text-xl font-medium font-FamiljenGrotesk">
              Co-Chairs
            </div>
            <div className="flex-col flex items-start gap-2 font-Inter w-full">
              {props.workingGroup.co_chairs.map((chair, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                    </svg>

                    <div className="flex-col flex justify-center items-start">
                      <div className="text-sm leading-[17px]">{chair.name}</div>
                      <div className="text-xs leading-[18px]">{chair.job}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full flex-col flex items-start gap-2 text-black">
            <div className="text-xl font-medium font-FamiljenGrotesk">
              Description
            </div>
            <div className="text-sm leading-[17px] font-Inter">
              {props.workingGroup.description}
            </div>
          </div>
          <div className="grid grid-rows-3 lg:grid-rows-1 items-start gap-3 text-base font-semibold font-Inter grid-flow-col bgin-button">
            <a
              href={props.workingGroup.mailinglist_url}
              className="w-full bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Subscribe</div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.66666 3.6665H18.3333C19.3417 3.6665 20.1667 4.4915 20.1667 5.49984V16.4998C20.1667 17.5082 19.3417 18.3332 18.3333 18.3332H3.66666C2.65833 18.3332 1.83333 17.5082 1.83333 16.4998V5.49984C1.83333 4.4915 2.65833 3.6665 3.66666 3.6665Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.1667 5.5L11 11.9167L1.83333 5.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={props.workingGroup.github_url}
              className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-[#2d2d2d] text-[#2d2d2d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>GitHub</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <div>
              <Button
                link={props.workingGroup.detail_url}
                text="More Details"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import Button from "./Button/Button";
import { CUSTOM_STYLES } from "@/styles/custom";

type COLOR_PATTERN = "white" | "blue" | "navy";

interface Props {
  title: string;
  subtitle?: string;
  height?: string;
  description: ReactNode;
  link: string;
  colorPattern: COLOR_PATTERN;
  isNew?: boolean;
}

const backgroundColor = (colorPattern: COLOR_PATTERN): string => {
  switch (colorPattern) {
    case "white":
      return "bg-gray-50 border border-gray-200";
    case "blue":
      return "bg-blue-700";
    case "navy":
      return "bg-blue-900";
  }
};

const textColor = (colorPattern: COLOR_PATTERN): string => {
  switch (colorPattern) {
    case "white":
      return "text-black";
    case "blue":
      return "text-white";
    case "navy":
      return "text-white";
  }
};

const buttonColor = (colorPattern: COLOR_PATTERN): "white" | "black" => {
  switch (colorPattern) {
    case "white":
      return "black";
    case "blue":
      return "white";
    case "navy":
      return "white";
  }
};

export default function ItemCard({
  title,
  subtitle,
  height,
  description,
  link,
  colorPattern,
  isNew = false,
}: Props) {
  return (
    <div
      className={`${backgroundColor(colorPattern)} ${height ?? "h-[420px]"
        } w-full flex flex-col justify-between items-start gap-4 px-4 pt-4 pb-6 rounded-3xl bgin-button`}
    >
      <div>
        <div className="flex-col w-full flex items-start gap-6 h-fit">
          <div
            className={`${textColor(
              colorPattern
            )} w-full flex-col flex items-start gap-1`}
          >
            <div>
              <div className="flex-row flex items-start gap-2">
                <div className={CUSTOM_STYLES.SUBTITLE}>{title}</div>
                {isNew && (
                  <div className={CUSTOM_STYLES.SUBTITLE + " text-blue-200"}>
                    NEW!
                  </div>
                )}
              </div>
              {subtitle && (
                <div className={CUSTOM_STYLES.SUBTITLE}>{subtitle}</div>
              )}
            </div>

            <div className="flex-col flex items-start gap-1 text-base leading-6 font-Inter">
              {description}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button link={link} text="Details" color={buttonColor(colorPattern)} />
      </div>
    </div>
  );
}

import Button from "./Button/Button";
import { CUSTOM_STYLES } from "@/styles/custom";

type COLOR_PATTERN = "white" | "blue" | "navy";

interface Props {
  title: string;
  description: string;
  link: string;
  colorPattern: COLOR_PATTERN;
  isNew?: boolean;
}

const backgroundColor = (colorPattern: COLOR_PATTERN): string => {
  switch (colorPattern) {
    case "white":
      return "bg-[#F0F4FE]";
    case "blue":
      return "bg-[#6890F5]";
    case "navy":
      return "bg-[#002060]";
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
  description,
  link,
  colorPattern,
  isNew = false,
}: Props) {
  return (
    <div
      className={`${backgroundColor(
        colorPattern
      )} h-[420px] w-full flex flex-col justify-between items-start gap-4 px-4 pt-4 pb-6 rounded-3xl bgin-button`}
    >
      <div>
        <div className="flex-col w-full flex items-start gap-6 h-fit">
          <div
            className={`${textColor(
              colorPattern
            )} w-full flex-col flex items-start gap-1`}
          >
            <div className="flex-row flex items-start gap-2">
              <div className={CUSTOM_STYLES.SUBTITLE}>{title}</div>
              {isNew && (
                <div className={CUSTOM_STYLES.SUBTITLE + " text-[#D3CC2F]"}>
                  NEW!
                </div>
              )}
            </div>
            <div className="flex-col flex items-start gap-1 text-sm leading-[17px] font-Inter">
              <div>{description}</div>
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

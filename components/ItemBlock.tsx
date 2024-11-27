import Button from "./Button/Button";
import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  title: string;
  thumbnail: string;
  description: string;
  buttonTitle: string;
  buttonJumpTo: string;
  withImage?: boolean;
}

export default function ItemBlock({
  title,
  thumbnail,
  description,
  buttonTitle,
  buttonJumpTo,
  withImage = true,
}: Props) {
  return (
    <div className="bg-white h-full w-auto flex-1 flex-col flex justify-between items-start gap-4 pt-4 pb-6 rounded-3xl bgin-button">
      <div>
        {withImage && (
          <div className="bg-cover w-full h-[200px] gap-2.5 rounded-xl">
            {/* <Image
            alt={props.title}
            src={props.thumbnail}
            className="w-full h-full rounded-2xl"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
          /> */}
          </div>
        )}

        <div className="flex-col w-full flex items-start gap-6 px-2 h-fit">
          <div className="w-full flex-col flex items-start gap-1 text-black">
            <div className="flex-col flex items-start gap-2">
              <div className={CUSTOM_STYLES.SUBTITLE}>{title}</div>
            </div>
            <div className="flex-col flex items-start gap-1 text-base leading-[17px] font-Inter">
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button link={buttonJumpTo} text={buttonTitle} color="black" />
      </div>
    </div>
  );
}

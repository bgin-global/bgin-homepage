import Image from "next/image";
import ArrowRight from "./ArrowRight";
import Link from "next/link";

interface Props {
  title: string;
  thumbnail: string;
  description: string;
  buttonTitle: string;
  buttonJumpTo: string;
}

export default function GeneralBoxItem(props: Props) {
  return (
    <div className="bg-white h-full w-full flex-1 flex-col flex justify-between items-start gap-4 px-4 pt-4 pb-6 rounded-3xl bgin-button">
      <div>
        <div className="bg-cover w-full h-[200px] gap-2.5 rounded-xl">
          <Image
            alt={props.title}
            src={props.thumbnail}
            className="w-[100%] h-[100%] rounded-2xl"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex-col w-full flex items-start gap-6 px-2 h-fit">
          <div className="w-full flex-col flex items-start gap-1 text-black">
            <div className="flex-col flex items-start gap-2">
              <div className="text-3xl leading-[42px] font-medium font-FamiljenGrotesk">
                {props.title}
              </div>
            </div>
            <div className="flex-col flex items-start gap-1 text-sm leading-[17px] font-Inter">
              <div>{props.description}</div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href={props.buttonJumpTo}
        className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-white font-Inter"
        prefetch={false}
        target="blank"
      >
        <div>{props.buttonTitle}</div>
        <ArrowRight size="sm" color="white" />
      </Link>
    </div>
  );
}

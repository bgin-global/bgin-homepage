import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export default function AboutItem(props: Props) {
  return (
    <div className="bg-white h-full w-full flex-1 flex-col flex justify-start items-start gap-8 px-4 pt-4 pb-6 rounded-3xl">
      <div className="bg-cover w-full h-[200px] gap-2.5 rounded-xl mx-auto">
        <Image
          alt="About Image"
          src="/images/About/Image.svg"
          width={100}
          height={100}
          className="w-full h-full"
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
  );
}

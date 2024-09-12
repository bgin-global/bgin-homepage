import Button from "@/components/Button/Button";
import { roadmaps } from "@/contents/roadmaps";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  imageSrc?: string;
  highlightImageSrc?: string;
  bgColor: string;
  textColor: string;
}

const TimelineItem = ({
  date,
  title,
  description,
  imageSrc,
  highlightImageSrc,
  bgColor,
  textColor,
}: TimelineItemProps) => {
  return (
    <div>
      <div className="relative top-[30px] left-[60px] w-4 lg:w-10 h-[1px] bg-black" />
      <div className="flex gap-4 lg:gap-10 w-full max-md:max-w-full">
        <div
          className={`flex shrink-0 self-start ${bgColor} rounded-full h-[60px] w-[60px] z-10`}
        />
        <div
          className={`grow pt-4 ${
            highlightImageSrc ? "pb-0" : "pb-7"
          } ${bgColor} w-fit max-md:max-w-full`}
        >
          <div className={`${CUSTOM_STYLES.SUBTITLE} ${textColor} px-7`}>
            {date}, {title}
          </div>
          <p className={`mt-4 px-7 ${textColor}`}>{description}</p>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt=""
              width={100}
              height={100}
              className="object-contain mt-8 px-7 w-full aspect-[2.12] max-md:mt-10"
            />
          )}
          {highlightImageSrc && (
            <Image
              src={highlightImageSrc}
              alt=""
              width={100}
              height={100}
              className="object-contain mt-8 w-full h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="relative flex flex-col rounded-none max-w-5xl px-6 xl:px-0 gap-8 overflow-visible">
      <div className="h-[100%] absolute left-[42px] xl:left-[18px] top-[10px]">
        <Image
          src="/images/About/bottom_arrow.svg"
          width={100}
          height={100}
          alt="bottom arrow"
          className="h-full w-auto"
        />
      </div>
      {roadmaps.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
      <div className="flex gap-4 lg:gap-10 w-full max-md:max-w-full">
        <div className={`flex shrink-0 self-start h-[60px] w-[60px]`} />
        <div className={`grow px-7 py-7 bg-[#F0F4FE] w-fit max-md:max-w-full`}>
          <p className="text-base leading-5 text-black max-md:max-w-full mb-8">
            Since its foundation, BGIN has provided forums for multi-stakeholder
            discussions across various regions of the world, fostering a shared
            understanding and documenting consensus on numerous important
            topics.
          </p>
          <Button link="/" text="Learn our activities" color="black" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;

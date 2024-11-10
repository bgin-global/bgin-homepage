import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";

interface Props {
  title?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const ItemReversible = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}: Props) => (
  <div
    className={`flex flex-col items-center ${
      isReversed ? "md:flex-row-reverse" : "md:flex-row"
    } my-16`}
  >
    <div className={`w-full md:w-[37%] ${isReversed ? "md:pl-8" : "md:pr-8"}`}>
      <div className="flex flex-col items-center mb-6 gap-2">
        <div className="h-auto mr-4 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={64}
            height={64}
            className={`rounded-lg ${title ? "" : "w-full h-auto"}`}
          />
        </div>
        {title && <p className={CUSTOM_STYLES.SUBTITLE}>{title}</p>}
      </div>
    </div>
    <div className="w-full md:w-[63%]">
      <p className={CUSTOM_STYLES.DESCRIPTION}>{description}</p>
    </div>
  </div>
);

export default ItemReversible;

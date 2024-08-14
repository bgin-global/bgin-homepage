import { CUSTOM_STYLES } from "@/styles/custom";
import Button from "../Button/Button";

interface Props {
  type: 1 | 2;
}

export default function Hero({ type }: Props) {
  return (
    <div className="flex-col flex items-start lg:pt-6 pb-16 h-fit max-w-4xl m-auto">
      <div className="flex-col w-full flex items-center gap-12 pt-16">
        <div className="flex-col flex items-center gap-5 text-black mx-4">
          <div className={CUSTOM_STYLES.TITLE.CENTER}>
            Empowering Blockchain through Neutral and Multi-stakeholder
            Dialogue, Shared Understanding, and Innovative Standards.
          </div>
          <div className={`${CUSTOM_STYLES.DESCRIPTION} mx-8`}>
            BGIN is a non-profit organization that aims to create neutral forums
            for in-depth discussions among all stakeholders, documenting a
            common language to establish shared understanding. It also strives
            to explore innovation, best practices, and standards for blockchain
            governance in operational, regulatory, and technical spheres.
          </div>
          {type === 1 && (
            <Button link="/about" text="Learn Who We Are" color="black" />
          )}
        </div>
      </div>
    </div>
  );
}

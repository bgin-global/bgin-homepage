import Image from "next/image";
import ArrowRight from "../ArrowRight";
import Link from "next/link";

interface Props {
  type: 1 | 2;
}

const LearnWhoWeAreButton = () => {
  return (
    <div className="w-full px-8 bgin-button">
      {/* TODO: このリンク遷移先は？ */}
      {/* <Link href="/about"> */}
      <a
        href="https://bgin.discourse.group/"
        className="bg-black flex justify-between items-center gap-2 px-6 py-4 rounded-full text-white text-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>Learn Who We Are</div>
        <ArrowRight size="sm" color="white" />
      </a>
      {/* </Link> */}
    </div>
  );
};

export default function Hero({ type }: Props) {
  return (
    <div className="flex-col flex items-start lg:pt-6 pb-16 h-fit max-w-4xl m-auto">
      <div className="flex-col w-full flex items-center gap-12 pt-16">
        <div className="flex-col flex items-center gap-5 text-black mx-4">
          <div className="text-4xl leading-[50px] font-medium font-FamiljenGrotesk text-center">
            Empowering Blockchain through Neutral and Multi-stakeholder
            Dialogue, Shared Understanding, and Innovative Standards.
          </div>
          <div className="text-base leading-[19px] font-Inter mx-8">
            BGIN is a non-profit organization that aims to create neutral forums
            for in-depth discussions among all stakeholders, documenting a
            common language to establish shared understanding. It also strives
            to explore innovation, best practices, and standards for blockchain
            governance in operational, regulatory, and technical spheres.
          </div>
          {type === 1 ? LearnWhoWeAreButton() : <></>}
        </div>
      </div>
    </div>
  );
}

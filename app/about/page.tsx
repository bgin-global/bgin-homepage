import AboutItem from "@/components/AboutItem";
import ArrowRight from "@/components/ArrowRight";
import Footer from "@/components/Footer";
import GeneralBoxItem from "@/components/GeneralBoxItem";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";
import { getSortedEvents } from "@/lib/fetch-events";
import Image from "next/image";

export default function About() {
  const events = getSortedEvents();
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <div className="flex-col flex items-start lg:pt-6 pb-16 h-fit max-w-4xl m-auto">
        <Image
          alt="Hero Image"
          src="/images/Hero/Image.svg"
          className="max-lg:hidden w-[100%] h-[200px] rounded-2xl"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />
        <Image
          alt="Hero Image"
          src="/images/Hero/Image_SP.svg"
          className="lg:hidden w-screen h-[444px]"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />

        <div className="flex-col w-full flex items-center gap-12 pt-16">
          <div className="flex-col flex items-center gap-2 text-center text-black mx-4">
            <div className="max-lg:text-4xl lg:text-5xl max-lg:leading-[48px] lg:leading-[77px] font-medium font-FamiljenGrotesk">
              Building the Blockchain Future Through Inclusive Collaboration
            </div>
            <div className="text-base leading-[19px] font-Inter lg:max-w-[750px]">
              BGIN, short for Blockchain Governance Initiative Network, is
              shaping the future of blockchain. As this technology transforms
              numerous sectors, our current financial systems and regulations
              must adapt. BGIN leads the charge in creating an open, global
              platform where all stakeholders can engage in dialogue, build
              shared understanding, and work together for a thriving ecosphere.
              We are devoted to establishing a common language, fostering
              academic roots, and consistently providing trustworthy resources
              for sustainable blockchain development.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D2DEFC] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Our approach
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid max-lg:grid-rows-3 lg:grid-rows-1 lg:gap-6 max-lg:gap-6 grid-flow-col">
          <AboutItem
            title="Mission"
            description="We aims at providing an open and neutral sphere for all stakeholders to deepen common understanding and to collaborate to address issues they face in order to attain sustainable development of the blockchain community."
          />
          <AboutItem
            title="Participants"
            description="Our participants include individuals and companies from a wide range of industries who are passionate about Blockchain technology and its potential to revolutionize the way we do business."
          />
          <AboutItem
            title="Principles"
            description="Our organization is guided by the principles of transparency, collaboration, and innovation. We believe that by working together and sharing knowledge, we can create a better future for all."
          />
        </div>
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}

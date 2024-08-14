import AboutItem from "@/components/AboutItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import SectionTitle from "@/components/SectionTitle";
import HowToJoin from "@/components/HowToJoin";
import { getSortedEvents } from "@/lib/fetch-events";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";

export default function About() {
  const events = getSortedEvents();
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <Hero type={2} />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          <Image
            src="/images/About/01.svg"
            alt="block10 meeting"
            width={100}
            height={100}
            className="w-full h-[300px] lg:h-full max-h-[385px]"
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/images/About/02.svg"
            alt="block10 meeting"
            width={100}
            height={100}
            className="w-full h-[300px] lg:h-full max-h-[385px]"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Our Approach" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.THREE}>
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

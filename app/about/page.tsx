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
        <SectionTitle title="BGIN Principle" />
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="BGIN Story" />
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}

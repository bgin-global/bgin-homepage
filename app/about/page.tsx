import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import HowToJoin from "@/components/HowToJoin";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Timeline from "./Timeline";

export default function About() {
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
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            　At the time when nobody had yet discussed the question of whether
            we would be able to establish blockchain governance adequate for the
            accelerating technological innovation and the rise of autonomous
            decentralized organizations, leaders in each multi-stakeholder
            groups initiated the prototype of BGIN with an idea that it may be
            useful to take reference from the development of the Internet
            governance. The establishment of BGIN came about through careful
            deliberation among the leaders of various stakeholders on how to
            implement multi-stakeholder governance for blockchain.
          </div>
          <div className="my-2"></div>
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            　Drawing inspiration from the fact that Internet technical
            standards are not only crucial for ensuring interoperability but
            also directly tied to broader public interests—including user
            privacy, personal data protection, and internet accessibility for
            individuals with disabilities—, the multi-stakeholder participation
            and mechanism for the Internet, combined with its openness and
            transparency, has so far successfully balanced the promotion of
            innovation with the safeguarding of public interests.
          </div>
        </div>
      </div>
      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <Timeline />
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}

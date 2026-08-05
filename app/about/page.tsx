import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import HowToJoin from "@/components/HowToJoin";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";
import Timeline from "./Timeline";
import ItemReversible from "@/components/ItemReversible";

const principles = [
  {
    title: "Neutrality",
    description:
      "No matter the location, we always prioritize neutrality in our discussion forums where participants from diverse backgrounds or with differing viewpoints can discuss issues or make decisions without any bias or influence from any particular group. The purpose is to ensure fairness and impartiality in the discussions and outcomes.",
    imageSrc: "/images/About/Neutral Decision.svg",
    imageAlt: "Neutrality icon",
  },
  {
    title: "Multi-Stakeholders",
    description:
      "We value a culture where multiple stakeholder groups and parties are welcomed and free to participate and express their views. We embody multi-stakeholder discussions, which are essential for the foundation of blockchain governance. Stakeholders include the entire blockchain ecosystem, including governments, business entities, developers, academia, and customers.",
    imageSrc: "/images/About/Multicultural People.svg",
    imageAlt: "Multi-Stakeholders icon",
  },
  {
    title: "Common Language",
    description:
      "We develop and record a set of terms and definitions that are agreed upon by multi-stakeholders involved to help ensure clarity, reduce misunderstandings, and facilitate effective communication, and build academic anchors through continuous provision of trustable documents and codes based on an open source-style approach",
    imageSrc: "/images/About/Multicultural People.svg",
    imageAlt: "Common Language icon",
  },
  {
    title: "Best Practices & Standards",
    description:
      "Our goal is to establish formal guidelines or specifications—be they technical, operational, or regulatory—developed through stakeholder consensus to ensure robust blockchain governance while fostering technological innovation.",
    imageSrc: "/images/About/Multicultural People.svg",
    imageAlt: "Best Practices & Standards icon",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <Hero type={2} />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <div className={CUSTOM_STYLES.SECTION_FLEX.LATERAL}>
          <Image
            src="/images/About/01.svg"
            alt="block10 meeting"
            width={100}
            height={100}
            className="w-full h-[300px] lg:h-auto"
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/images/About/02.svg"
            alt="block10 meeting"
            width={100}
            height={100}
            className="w-full h-[300px] lg:h-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="BGIN Principle" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          {principles.map((principle, index) => (
            <ItemReversible
              key={index}
              {...principle}
              isReversed={index % 2 != 0}
            />
          ))}
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="BGIN Story" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <div className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
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
          <div className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
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

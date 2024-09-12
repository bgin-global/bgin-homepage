import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { CUSTOM_STYLES } from "@/styles/custom";
import SectionSubtitle from "@/components/SectionSubtitle";
import ItemBlock from "@/components/ItemBlock";
import ItemList from "@/components/ItemList";
import { projects } from "@/contents/projects";
import ItemCard from "@/components/ItemCard";
import Image from "next/image";
import ItemCardSquare from "@/components/ItemCardSquare";

export default function Governance() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Our Governance" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 py-8">
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            Our organization operates under a democratic governance structure,
            ensuring that the voices and opinions of BGINners are actively
            incorporated into the decision-making process.
          </div>
        </div>
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          <Image
            src="/images/Gov/gov_structure.svg"
            alt="structures of our governance"
            width={100}
            height={100}
            className="w-full h-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 py-8">
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            The details of our governance structure, including the roles of all
            entities, are specified by BGIN’s Bylaw and other documents.
          </div>
        </div>
        <div className={CUSTOM_STYLES.SECTION_FLEX.LATERAL}>
          <ItemCard
            title="ByLaw"
            height="h-auto"
            description={<></>}
            link="https://docs.google.com/document/d/1KPy2L3nYVaATl8hc_NplG0_iOGz_W_JJIOuOf_X2k5I/edit?usp=sharing"
            colorPattern="navy"
          />
          <ItemCard
            title="Terms of Reference"
            height="h-auto"
            description={<></>}
            link="https://github.com/bgin-global/genesis-documents/blob/master/TermsOfReference.md"
            colorPattern="white"
          />
          <ItemCard
            title="Genesis Documents"
            height="h-auto"
            description={<></>}
            link="https://github.com/bgin-global/genesis-documents/blob/master/Genesis.md"
            colorPattern="blue"
          />
        </div>
      </div>
      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Our Members" />
        <SectionSubtitle title="Initial Contributors" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
        </div>

        <SectionSubtitle title="BGIN Co-Charis" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
        </div>

        <SectionSubtitle title="Steering Committee Members" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
        </div>

        <SectionSubtitle title="Industry Advisory Board" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
        </div>

        <SectionSubtitle title="Working Group Chairs" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
        </div>

        <SectionSubtitle title="Advisors" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
          <ItemCardSquare />
        </div>
      </div>

      <Footer />
    </main>
  );
}

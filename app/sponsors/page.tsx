import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { CUSTOM_STYLES } from "@/styles/custom";
import SectionSubtitle from "@/components/SectionSubtitle";
import ItemCard from "@/components/ItemCard";
import Image from "next/image";
import ItemCardSquare from "@/components/ItemCardSquare";
import { partnerships } from "@/contents/sponsors";
import ItemReversible from "@/components/ItemReversible";
import { getSortedEvents } from "@/lib/fetch-events";

export default function Sponsors() {
  const pastBlockConfs = getSortedEvents("block-conferences", "PAST");
  const pastLayer2Events = getSortedEvents("layer2-meetups", "PAST");
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Our Sponsors" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            Our sponsors’ support empowers our mission as a non-profit
            organization and fosters innovation and collaboration within the
            blockchain community. Together with our sponsors, we can drive
            meaningful change and create a lasting impact.
          </div>
        </div>
        <SectionSubtitle title="Sustaining Sponsors" />
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
        <SectionSubtitle title="Event Sponsors of past Block conferences" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          {pastBlockConfs.map((event, index) => {
            return <ItemCard
              title={event.title}
              height="h-auto"
              description={<></>}
              link={"/events/" + event.id}
              key={index}
              colorPattern="white"
            />
          })}
        </div>
        <SectionSubtitle title="Event Sponsors of past Layer2 Meetups" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.HOLIZONTAL_SCROLL}>
          {pastLayer2Events.map((event, index) => {
            return <ItemCard
              title={event.title}
              height="h-auto"
              description={<></>}
              link={"/events/" + event.id}
              key={index}
              colorPattern="white"
            />
          })}
        </div>
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0 py-8">
          <div className={`${CUSTOM_STYLES.DESCRIPTION} pb-6`}>
            Please feel free to contact us (
            <span className="text-[#E46060]">
              bgin_admin@bg2x.org
            </span>
            ) if you are interested in sponsoring BGIN!
          </div>
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            Your support not only empowers our mission as a non-profit
            organization but also fosters innovation and collaboration within
            the blockchain community. Together, we can drive meaningful change
            and create a lasting impact.
          </div>
        </div>
        <SectionSubtitle title="How we use funds" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          <Image
            src="/images/Sponsors/fund_structure.svg"
            alt="structures of our fund"
            width={100}
            height={100}
            className="w-full h-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <SectionSubtitle title="Our Partnerships" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          {partnerships.map((partnership, index) => (
            <ItemReversible
              key={index}
              {...partnership}
              isReversed={index % 2 != 0}
            />
          ))}
        </div>
        ;
      </div>
      export const partnerships = [
      {
       description:
       "Our partnership with the OpenWallet Foundation — a leading organization dedicated to developing open-source digital wallet solutions—propels our identity, access, and key management projects forward through dynamic collaboration and innovation.",
       imageSrc: "/images/Sponsors/OpenWalletFoundation 1.svg",
       imageAlt: "OpenWallet Foundation",
      },
      {
       description:
       "Partnering with ISO TC307—one of the premier standard- setting organizations in the blockchain space—accelerates our efforts in creating standards and best practices through its extensive expertise in developing international blockchain and distributed ledger standards.",
       imageSrc: "/images/Sponsors/ISO_TC307 1.svg",
       imageAlt: "ISO TC307",
      },
      ];
      <Footer />
    </main>
  );
}

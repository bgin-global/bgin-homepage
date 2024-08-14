import EventItem from "@/components/Home/EventItem";
import Footer from "@/components/Footer";
import GeneralBoxItem from "@/components/GeneralBoxItem";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";
import { nextCalls } from "@/contents/next-call";
import { getSortedEvents } from "@/lib/fetch-events";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/Home/Hero";
import { CUSTOM_STYLES } from "@/styles/custom";

export default function Home() {
  const events = getSortedEvents("FUTURE");
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <Hero type={1} />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Next Activities" />
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Projects in progress" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}></div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="See More" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          <GeneralBoxItem
            title="Documents"
            thumbnail="/images/Home/Documents.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View Documents"
            buttonJumpTo="/documents"
          />
          <GeneralBoxItem
            title="Events"
            thumbnail="/images/Home/Events.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View Events"
            buttonJumpTo="/events"
          />
          <GeneralBoxItem
            title="Working Groups"
            thumbnail="/images/Home/Working Groups.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View WGs"
            buttonJumpTo="/working-groups"
          />
          <GeneralBoxItem
            title="Meeting Notes"
            thumbnail="/images/Home/Meeting Notes.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View Meeting Notes"
            buttonJumpTo="/documents"
          />
        </div>
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}

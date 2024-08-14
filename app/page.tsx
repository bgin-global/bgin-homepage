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
import { projects } from "@/contents/projects";
import ProjectInProgress from "@/components/projectInProgress";

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
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          {projects.inProgress.map((project) => {
            return <ProjectInProgress key={project.title} project={project} />;
          })}
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="See More" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          <GeneralBoxItem
            title="Projects"
            thumbnail="/images/Home/Documents.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/documents"
          />
          <GeneralBoxItem
            title="Block Conferences"
            thumbnail="/images/Home/Events.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/events"
          />
          <GeneralBoxItem
            title="Working Groups"
            thumbnail="/images/Home/Working Groups.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/working-groups"
          />
          <GeneralBoxItem
            title="Layer2 Meetups"
            thumbnail="/images/Home/Meeting Notes.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/documents"
          />
        </div>
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}

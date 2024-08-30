import Footer from "@/components/Footer";
import ItemBlock from "@/components/ItemBlock";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";
import { getSortedEvents } from "@/lib/fetch-events";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/Hero";
import { CUSTOM_STYLES } from "@/styles/custom";
import { projects } from "@/contents/projects";

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
            return (
              <ItemBlock
                key={project.title}
                title={project.title}
                thumbnail=""
                description={project.description}
                withImage={false}
                buttonTitle="Reference"
                buttonJumpTo={project.reference}
              />
            );
          })}
        </div>
      </div>

      {/* <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="See More" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          <ItemBlock
            title="Projects"
            thumbnail="/images/Home/Documents.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/documents"
          />
          <ItemBlock
            title="Block Conferences"
            thumbnail="/images/Home/Events.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/events"
          />
          <ItemBlock
            title="Working Groups"
            thumbnail="/images/Home/Working Groups.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/working-groups"
          />
          <ItemBlock
            title="Layer2 Meetups"
            thumbnail="/images/Home/Meeting Notes.svg"
            description=""
            buttonTitle="View"
            buttonJumpTo="/documents"
          />
        </div>
      </div> */}

      <HowToJoin />
      <Footer />
    </main>
  );
}

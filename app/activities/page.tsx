import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { getSortedMeetingNotes } from "@/lib/fetch-meeting-notes";
import { getAllWorkingGroups } from "@/lib/fetch-working-groups";
import { CUSTOM_STYLES } from "@/styles/custom";
import SectionSubtitle from "@/components/SectionSubtitle";
import ItemBlock from "@/components/ItemBlock";
import ItemList from "@/components/ItemList";
import { projects } from "@/contents/projects";
import ItemCard from "@/components/ItemCard";
import Image from "next/image";

export default function Activities() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Structures of Our Activities" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          <Image
            src="/images/Activities/structure.svg"
            alt="structures of our activities"
            width={100}
            height={100}
            className="w-full lg:w-[90%] h-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <div className={CUSTOM_STYLES.SECTION_FLEX.LATERAL}>
          <ItemCard
            title="Block Conference"
            description="Twice a year (spring and fall)
・Approval/multi-stakeholder discussion on project documents created or in progress 
・Clarification of discussion points regarding new topics
・New projects launch
・Steering Committee Meeting"
            link="/activities/block-conference"
            colorPattern="white"
          />
          <ItemCard
            title="Layer2 Meetup"
            description="2-3 times a month

Collocated with international events host by other communities to discuss topics relevant to the communities

・Discussion on project documents in progress with new community members
・Discovery of new topics for discussion at Block Conferences
・Networking"
            link="/activities/layer2-meetup"
            colorPattern="blue"
            isNew={true}
          />
          <ItemCard
            title="Working Group"
            description="Biweekly meetings

・Project management
・Discussion on the project details"
            link="/activities/working-group"
            colorPattern="navy"
          />
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Projects" />
        <div className="w-full max-w-5xl m-auto px-6 xl:px-0">
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            BGIN has created documents that contribute to sound blockchain
            governance, helping different stakeholders generate shared
            understandings and potentially leading to standards creation.
          </div>
        </div>
        <SectionSubtitle title="Published" />

        <ul className="w-full text-black max-w-5xl m-auto px-10 xl:px-4">
          {projects.published.map((project) => {
            return (
              <ItemList
                key={project.title}
                title={`${project.date}, ${project.title}`}
                link={project.link}
              />
            );
          })}
        </ul>

        <SectionSubtitle title="Projects in progress" />

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

      <Footer />
    </main>
  );
}

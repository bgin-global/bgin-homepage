/* eslint-disable react/no-unescaped-entities */
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

export default function Activities() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Structures of Our Activities" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            The "Block" Conferences, which serve as BGIN's General Meeting, are the main conferences aimed at launching projects, reviewing ongoing initiatives, and delivering final reports. Detailed discussions on projects take place in the Working Group meetings. In other words, we build "transactions" in the Working Groups, while the "Block" Conference serves to "generate and validate blocks." on "Layer 1". Additionally, we hold "Layer 2" Meetups colocated with other community-hosted conferences to gather input for our projects. The discussions at these meetups are then "rolled up" to "Layer 1."
          </div>
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
            subtitle="　"
            description={
              <>
                <p className="mb-2">Twice a year (spring and fall)</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Approval/multi-stakeholder discussion on project documents
                    created or in progress
                  </li>
                  <li>
                    Clarification of discussion points regarding new topics
                  </li>
                  <li>New projects launch</li>
                  <li>Steering Committee Meeting</li>
                </ul>
              </>
            }
            link="/activities/block-conference"
            colorPattern="white"
          />
          <ItemCard
            title="Layer2 Meetup"
            subtitle="(Off-chain transactions)"
            description={
              <>
                <p className="mb-2">5-10 times a year</p>
                <p className="mb-2">
                  Collocated with international events host by other communities
                  to discuss topics relevant to the communities
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Discussion on project documents in progress with new
                    community members
                  </li>
                  <li>
                    Discovery of new topics for discussion at Block Conferences
                  </li>
                  <li>Networking</li>
                </ul>
              </>
            }
            link="/activities/layer2-meetup"
            colorPattern="blue"
            isNew={true}
          />
          <ItemCard
            title="Working Group"
            subtitle="(Transactions)"
            description={
              <>
                <p className="mb-2"> Biweekly meetings</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Project management</li>
                  <li>Discussion on the project details</li>
                </ul>
              </>
            }
            link="/activities/working-groups"
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

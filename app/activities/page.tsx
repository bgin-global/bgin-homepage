import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import MeetingNoteItem from "@/components/MeetingNoteItem";
import WorkingGroupItem from "@/components/WorkingGroupItem";
import { getSortedMeetingNotes } from "@/lib/fetch-meeting-notes";
import { getAllWorkingGroups } from "@/lib/fetch-working-groups";
import { CUSTOM_STYLES } from "@/styles/custom";
import SectionSubtitle from "@/components/SectionSubtitle";
import ProjectInProgress from "@/components/projectInProgress";
import { projects } from "@/contents/projects";
import ProjectPublished from "@/components/projectsPublished";

export default function Activities() {
  const workingGroups = getAllWorkingGroups();
  const meetingNotes = getSortedMeetingNotes();

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Structures of Our Activities" />
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Projects" />
        <div className="w-full max-w-4xl m-auto px-4 lg:px-0">
          <div className={CUSTOM_STYLES.DESCRIPTION}>
            BGIN has created documents that contribute to sound blockchain
            governance, helping different stakeholders generate shared
            understandings and potentially leading to standards creation.
          </div>
        </div>
        <SectionSubtitle title="Published" />

        <ul className="w-full text-black max-w-4xl m-auto px-8 lg:px-4">
          {projects.published.map((project) => {
            return <ProjectPublished key={project.title} project={project} />;
          })}
        </ul>

        <SectionSubtitle title="Projects in progress" />

        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          {projects.inProgress.map((project) => {
            return <ProjectInProgress key={project.title} project={project} />;
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

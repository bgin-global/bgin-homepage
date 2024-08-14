import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import MeetingNoteItem from "@/components/MeetingNoteItem";
import WorkingGroupItem from "@/components/WorkingGroupItem";
import { getSortedMeetingNotes } from "@/lib/fetch-meeting-notes";
import { getAllWorkingGroups } from "@/lib/fetch-working-groups";
import { CUSTOM_STYLES } from "@/styles/custom";

export default function WorkingGroups() {
  const workingGroups = getAllWorkingGroups();

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Working Groups" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          {workingGroups.map((workingGroup) => {
            return (
              <WorkingGroupItem
                key={workingGroup.id}
                workingGroup={workingGroup}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

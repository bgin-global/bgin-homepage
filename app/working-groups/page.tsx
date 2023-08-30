import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MeetingNoteItem from "@/components/MeetingNoteItem";
import WorkingGroupItem from "@/components/WorkingGroupItem";
import { getSortedMeetingNotes } from "@/lib/fetch-meeting-notes";
import { getAllWorkingGroups } from "@/lib/fetch-working-groups";

export default function WorkingGroups() {
  const workingGroups = getAllWorkingGroups();
  const meetingNotes = getSortedMeetingNotes();

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-[#D2DEFC] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Working Groups
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 flex flex-col gap-6">
          {workingGroups.map((workingGroup) => {
            return <WorkingGroupItem key={workingGroup.id} workingGroup={workingGroup} />
          })}
        </div>
      </div>

      <div className="bg-[#F0F4FE] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Meeting Notes
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="md:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-lg:gap-6 grid-flow-row">
          {meetingNotes.map((meetingNote) => {
            return <MeetingNoteItem key={meetingNote.id} note={meetingNote} />
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

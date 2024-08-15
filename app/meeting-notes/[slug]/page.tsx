import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import MeetingNoteItem from "@/components/MeetingNoteItem";
import { CUSTOM_STYLES } from "@/styles/custom";
import { getMeetingNotes } from "./notes";
import { MeetingNote } from "@/lib/fetch-meeting-notes";

export default async function MeetingNotePage({
  params,
}: {
  params: { slug: string };
}) {
  let meetingNotes: MeetingNote[] = [];
  if (params.slug != null && typeof params.slug === "string") {
    meetingNotes = getMeetingNotes(params.slug);
  }

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="Block Meeting Notes" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.LATERAL}>
          {meetingNotes.map((meetingNote) => {
            return <MeetingNoteItem key={meetingNote.id} note={meetingNote} />;
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

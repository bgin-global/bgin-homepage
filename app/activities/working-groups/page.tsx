import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { CUSTOM_STYLES } from "@/styles/custom";
import ItemWG from "@/components/ItemWG";
import { workingGroups } from "@/contents/workingGroups";

export default function WorkingGroups() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Working Groups" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          {workingGroups.map((workingGroup, index) => {
            return <ItemWG key={index} workingGroup={workingGroup} />;
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

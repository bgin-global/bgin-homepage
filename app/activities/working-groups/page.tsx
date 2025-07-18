import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { CUSTOM_STYLES } from "@/styles/custom";
import ItemWG from "@/components/ItemWG";
import NewsletterList from "@/components/NewsletterList";
import { workingGroups } from "@/contents/workingGroups";

export default function WorkingGroups() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      {/* Newsletter Section */}
      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="Monthly Newsletters" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.ONE}>
          <div className="mb-6">
            <p className="text-lg leading-[24px] font-Inter text-gray-700 text-center max-w-3xl mx-auto">
              Stay updated with the latest developments across all BGIN working groups through our monthly newsletters 
              featuring progress reports, key findings, and upcoming initiatives.
            </p>
          </div>
          <NewsletterList />
        </div>
      </div>

      {/* Working Groups Section */}
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

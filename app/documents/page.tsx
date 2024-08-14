import DocumentItem from "@/components/DocumentItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { getAllDocuments } from "@/lib/fetch-documents";
import { CUSTOM_STYLES } from "@/styles/custom";

export default function Documents() {
  const documents = getAllDocuments();
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Documents" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.FOUR}>
          {documents.map((document) => (
            <DocumentItem key={document.id} document={document} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

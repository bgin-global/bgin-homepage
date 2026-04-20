import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DocumentTable from "@/components/DocumentTable";
import { CUSTOM_STYLES } from "@/styles/custom";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              Publications
            </h1>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 max-w-2xl mx-auto`}>
              Reports, meeting summaries, and guidance documents produced by BGIN working groups.
              These publications serve regulators, industry participants, and researchers
              striving for shared understanding of blockchain governance.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <DocumentTable />
      </div>

      <Footer />
    </main>
  );
}

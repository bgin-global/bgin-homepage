import DocumentItem from "@/components/DocumentItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getAllDocuments } from "@/lib/fetch-documents";

export default function Documents() {
  const documents = getAllDocuments();
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />

      <div className="bg-[#D2DEFC] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Documents
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="md:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-lg:gap-6 grid-flow-row">
          {documents.map((document) => (
            <DocumentItem key={document.id} document={document} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

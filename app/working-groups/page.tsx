import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkingGroupItem from "@/components/WorkingGroupItem";
import { getAllWorkingGroups } from "@/lib/fetch-working-groups";

export default function WorkingGroups() {
  const workingGroups = getAllWorkingGroups();
  console.log('hello');
  console.log(workingGroups);
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

      <Footer />
    </main>
  );
}

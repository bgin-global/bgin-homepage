import { CUSTOM_STYLES } from "@/styles/custom";
import Button from "./Button/Button";

function HowToJoin() {
  return (
    <div className="bg-white w-full flex-col flex items-center pb-32 h-fit px-4 lg:px-0">
      <div className="flex items-start h-fit max-w-4xl m-auto">
        <div className="flex-col flex items-start gap-2.5 py-32">
          <div className="bg-[#688ff5] w-full h-full flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-12 rounded-xl border border-white border-opacity-[0.5]">
            <div className="flex-1 flex-col flex items-start gap-6 py-4 lg:py-12 pr-6 pl-12">
              <div className="w-full flex-col flex items-start gap-6">
                <div className="w-full flex-col flex items-start gap-2 text-white">
                  <div className={CUSTOM_STYLES.TITLE.LEFT}>How to Join</div>
                  <div className={CUSTOM_STYLES.DESCRIPTION}>
                    Joining our organization is easy! Simply visit our website
                    and fill out the membership application. Once your
                    application is approved, you will gain access to a variety
                    of resources and opportunities to connect with other
                    Blockchain enthusiasts.
                  </div>
                </div>
              </div>
              <Button
                link="https://bgin.discourse.group/"
                text="Join Our Community"
                color="white"
              />
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowToJoin;

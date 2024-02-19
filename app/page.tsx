import ArrowRight from "@/components/ArrowRight";
import EventItem from "@/components/EventItem";
import Footer from "@/components/Footer";
import GeneralBoxItem from "@/components/GeneralBoxItem";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";
import { nextCalls } from "@/contents/next-call";
import { getSortedEvents } from "@/lib/fetch-events";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const events = getSortedEvents("FUTURE");
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <div className="flex-col flex items-start lg:pt-6 pb-16 h-fit max-w-4xl m-auto">
        <Image
          alt="Hero Image"
          src="/images/Hero/Image.svg"
          className="max-lg:hidden w-[100%] h-[200px] rounded-2xl"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />
        <Image
          alt="Hero Image"
          src="/images/Hero/Image_SP.svg"
          className="lg:hidden w-screen h-[444px]"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />

        <div className="flex-col w-full flex items-center gap-12 pt-16">
          <div className="flex-col flex items-center gap-2 text-center text-black mx-4">
            <div className="max-lg:text-4xl lg:text-5xl max-lg:leading-[48px] lg:leading-[77px] font-medium font-FamiljenGrotesk">
              Building the Blockchain Future Through Inclusive Collaboration
            </div>
            <div className="text-base leading-[19px] font-Inter lg:max-w-[750px]">
              We are devoted to establishing a common language, fostering
              academic roots, and consistently providing trustworthy resources
              for sustainable blockchain development.
            </div>
          </div>
          <div className="flex max-lg:flex-col justify-center max-lg:items-center lg:items-start gap-6 text-base font-semibold font-Inter bgin-button">
            <a
              href="https://bgin.discourse.group/"
              className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Join Our Community</div>
              <ArrowRight size="sm" color="white" />
            </a>
            <Link href="/about">
              <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-[#2d2d2d] text-[#2d2d2d]">
                <div>Learn About Us</div>
                <ArrowRight size="sm" color="black" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#d2defc] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Upcoming Events
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]">
            <div>View All</div>
            <ArrowRight />
          </div>
        </div>
        <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid max-lg:grid-rows-2 lg:grid-rows-1 lg:gap-11 max-lg:gap-6 grid-flow-col">
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="bg-[#d2defc] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Next Call
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid max-lg:grid-cols-1 lg:grid-cols-2 lg:gap-11 max-lg:gap-6 grid-flow-row">
          {nextCalls.map((call) => {
            return (
              <GeneralBoxItem
                key={call.workingGroup}
                title={call.workingGroup}
                thumbnail={call.thumbnail}
                description=""
                buttonTitle={call.nextCall}
                buttonJumpTo={call.detailLink}
              />
            );
          })}
        </div>
      </div>

      <div className="bg-[#d2defc] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            Active Projects
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid max-lg:grid-cols-1 lg:grid-cols-2 lg:gap-11 max-lg:gap-6 grid-flow-row">
          <GeneralBoxItem
            title="Wallet Governance"
            thumbnail="/images/Documents/IKPWG.svg"
            description="Wallet governance, policy and key management will be quintessential features to any society which leverages decentralised innovations."
            buttonTitle="Reference"
            buttonJumpTo="https://docs.google.com/document/d/12bn-bXRaqs0syEX2lX_k-yXWeFlgnh38iv1Onu_Kwuc/edit"
          />
          <GeneralBoxItem
            title="Soul Bound Token (SBT)"
            thumbnail="/images/Documents/IKPWG.svg"
            description="To Examine the implications of Soulbound Tokens (SBTs), a novel smart contract primitive introduced by E. Glen Weyl, Puja Ohlhaver, and Vitalik Buterin (2022) “Decentralized Society: Finding Web3's Soul”, to curb Web3’s “hyper financialisation” and lack of tooling to enable social coordination."
            buttonTitle="Reference"
            buttonJumpTo="https://docs.google.com/document/d/1eJCzuYrTo_o4aX9eVDbV6t1a1dWh_8z71HjMPF9Fx58/edit#heading=h.lx18g0zd74ho"
          />
          <GeneralBoxItem
            title="Token Economy Compliance"
            thumbnail="/images/Documents/IKPWG.svg"
            description="Development phases of the token economy and the KYC and the attestation needed in each development phase."
            buttonTitle="Reference"
            buttonJumpTo="https://docs.google.com/presentation/d/1Jrh5ef3gy1oABgHFaeGPlNhOLANF709eZrK7MiP0MEY/edit#slide=id.p1"
          />
          <GeneralBoxItem
            title="Selective Disclosure"
            thumbnail="/images/Documents/IKPWG.svg"
            description="To provide guidance on various types of selective disclosure protocols and discuss its merits and demerits."
            buttonTitle="Reference"
            buttonJumpTo="https://docs.google.com/document/d/1eJCzuYrTo_o4aX9eVDbV6t1a1dWh_8z71HjMPF9Fx58/edit#heading=h.7o6tqo7r2fgj"
          />
          <GeneralBoxItem
            title="ZKP Technology"
            thumbnail="/images/Documents/IKPWG.svg"
            description="Documentation for a comprehensive understanding of ZKP technology and use cases."
            buttonTitle="Reference"
            buttonJumpTo="https://docs.google.com/document/d/1mPoC0RESQq4JqpE1ecRWny8R-QrNKNFRFfT_dKaHSM8/edit"
          />
        </div>
      </div>

      <div className="bg-[#F0F4FE] w-full flex-col flex items-center pb-32 h-fit">
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 max-lg:px-4">
          <div className="lg:text-6xl max-lg:text-4xl lg:leading-[77px] max-lg:leading-60px font-medium font-FamiljenGrotesk">
            See More
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]"></div>
        </div>
        <div className="lg:max-w-4xl lg:w-full max-lg:w-screen max-lg:px-4 grid max-lg:grid-rows-4 lg:grid-rows-2 lg:gap-11 max-lg:gap-6 grid-flow-col">
          <GeneralBoxItem
            title="Documents"
            thumbnail="/images/Home/Documents.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View Documents"
            buttonJumpTo="/documents"
          />
          <GeneralBoxItem
            title="Events"
            thumbnail="/images/Home/Events.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View Events"
            buttonJumpTo="/events"
          />
          <GeneralBoxItem
            title="Working Groups"
            thumbnail="/images/Home/Working Groups.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View WGs"
            buttonJumpTo="/working-groups"
          />
          <GeneralBoxItem
            title="Meeting Notes"
            thumbnail="/images/Home/Meeting Notes.svg"
            description="You can read study reports and discussion reports established through the BGIN working group."
            buttonTitle="View Meeting Notes"
            buttonJumpTo="/documents"
          />
        </div>
      </div>

      <HowToJoin />
      <Footer />
    </main>
  );
}

import EventItem from "@/components/Home/EventItem";
import Footer from "@/components/Footer";
import GeneralBoxItem from "@/components/GeneralBoxItem";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";
import { nextCalls } from "@/contents/next-call";
import { getSortedEvents } from "@/lib/fetch-events";
import SectionTitle from "@/components/Home/SectionTitle";
import Hero from "@/components/Home/Hero";
import { CUSTOM_STYLES } from "@/styles/custom";

export default function Home() {
  const events = getSortedEvents("FUTURE");
  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      <Hero type={1} />

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Upcoming Events" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Next Call" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
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

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.BLUE}>
        <SectionTitle title="Active Projects" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
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

      <div className={CUSTOM_STYLES.SECTION_CONTAINER.WHITE}>
        <SectionTitle title="See More" />
        <div className={CUSTOM_STYLES.SECTION_FLEX.TWO}>
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

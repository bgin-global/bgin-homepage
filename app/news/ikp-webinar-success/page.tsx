/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function IKPWebinarSuccessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            IKP WG Successfully Hosts Agentic Framework Webinar
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime="2025-08-30">August 30, 2025</time>
            <span>•</span>
            <div className="flex gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Working Group
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Event
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/Events/webinar/BGIN Agentic Framework.avif"
            alt="BGIN Agentic Framework Webinar"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="text-gray-900">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The IKP Working Group successfully hosted the "BGIN'ing of Agentic Governance" 
            webinar on August 28, 2025, bringing together experts and stakeholders to explore 
            the BGIN Agentic Framework and its implications for blockchain governance.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Meaningful Discussions and Valuable Feedback
          </h2>
          
          <p className="text-gray-700 mb-4">
            The webinar sparked meaningful discussions around the three-agent architecture—Archive, 
            Codex, and Discourse—and how this framework enables sovereignty-preserving, living 
            governance intelligence. Participants engaged in thoughtful dialogue about the practical 
            applications and potential impact of agentic governance in blockchain ecosystems.
          </p>

          <p className="text-gray-700 mb-4">
            The session generated valuable feedback from the community, which will directly support 
            the refinement of our work and inform upcoming discussions at major events including 
            EDCON Osaka (September 16-19, 2025) and Block #13 in Washington, D.C. (October 15-17, 2025).
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
            Thank You to Our Participants
          </h3>
          
          <p className="text-gray-700 mb-4">
            We extend our sincere gratitude to all participants who made the webinar a success. 
            Your engagement and contributions are invaluable to the BGIN community and the 
            advancement of blockchain governance standards.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
            Resources and Continued Engagement
          </h3>
          
          <p className="text-gray-700 mb-4">
            For those who attended and anyone interested in the topic, we have made available 
            the webinar recording, transcript, and presentation slides. We encourage continued 
            discussion and feedback through our community channels.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Webinar Resources
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div>
                  <a href="https://us06web.zoom.us/rec/component-page?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&action=viewdetailpage&sharelevel=meeting&useWhichPasswd=meeting&requestFrom=pwdCheck&clusterId=us06&componentName=need-password&meetingId=vCf3SUewZj7nojpDrjxDQ0tFkt9mtrVJy1ZOFhu0U5uV8V4houPlYbW_iwTdXkdm.sjXHuWhpLd-UTiwf&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2F0HwpMh_WhyDsuTa0NOpsp9XX8hbCK5aWiGwCkWUC_8jgqPTd0tr2QyLdhE0GKVRf.2FPSQ2ZEIe1Z2YU6" 
                    target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Webinar Recording
                  </a>
                  <span className="text-gray-600 text-sm block">Passcode: ?+^H8eat</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div>
                  <a href="https://gamma.app/docs/BGINing-of-Agentic-Governance-Building-the-Governance-to-Code-Hac-r35vz2du5w9w5sv?mode=doc" 
                    target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Presentation Slides
                  </a>
                  <span className="text-gray-600 text-sm block">Full presentation deck from the webinar</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN9Ddggd6mIdlYebyDfJrTx61fupVBVrRB4JNXJdgTWpIAjw/viewform" 
                    target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Feedback Form
                  </a>
                  <span className="text-gray-600 text-sm block">Share your thoughts and help us improve</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">
              Continue the Discussion
            </h4>
            <p className="text-blue-700 mb-4">
              Join our ongoing discussion about the BGIN Agentic Framework and share your 
              thoughts, questions, and feedback with the community.
            </p>
            <a
              href="https://bgin.discourse.group/t/bgin-agentic-framework-archive-codex-and-discourse-let-s-bgin/773"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Join the Discussion on Discourse
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
            Get Involved
          </h3>
          
          <p className="text-gray-700 mb-4">
            If you're interested in contributing to the BGIN Agentic Framework project, we 
            welcome your participation. You can:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>
              Join our <a href="https://bgin.discourse.group" target="_blank" rel="noopener noreferrer" 
              className="text-blue-600 hover:underline">Discourse forum</a> to express your 
              interest and ask questions
            </li>
            <li>
              <a href="https://calendly.com/mitchell-soulbis/mitchell-sync" target="_blank" rel="noopener noreferrer" 
              className="text-blue-600 hover:underline">Schedule a meeting with IKP WG Co-chair Mitchell Travers</a> for 
              direct follow-up discussions
            </li>
            <li>
              Provide feedback through our dedicated feedback channels
            </li>
            <li>
              Attend upcoming presentations at EDCON Osaka and Block #13
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">
            Looking Ahead
          </h3>
          
          <p className="text-gray-700 mb-4">
            The insights gathered from this webinar will shape our presentations and discussions 
            at upcoming events. We look forward to continuing this important work with the 
            community as we advance toward more sophisticated and effective blockchain governance 
            frameworks.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Upcoming Opportunities to Engage
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>EDCON Osaka</strong> - September 16-19, 2025<br/>
                  <span className="text-gray-600 text-sm">Layer 2 Meetup featuring agentic framework discussions</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>Block #13 Washington D.C.</strong> - October 15-17, 2025<br/>
                  <span className="text-gray-600 text-sm">AI Agent Governance sessions and Gov Hack presentations</span>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
            About the IKP Working Group
          </h3>
          
          <p className="text-gray-700 mb-4">
            The Identity, Key Management & Privacy (IKP) Working Group focuses on developing 
            standards and frameworks for identity management, cryptographic key handling, and 
            privacy-preserving technologies in blockchain systems. The group's work on the 
            Agentic Framework represents a significant advancement in programmable governance 
            and autonomous systems coordination.
          </p>
        </div>

        {/* Back to News */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/news" className="text-[#688ff5] hover:text-[#5a7de8] font-medium">
            ← Back to News
          </Link>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
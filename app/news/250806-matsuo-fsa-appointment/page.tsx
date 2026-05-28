"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";

export default function MatsuoFSAAppointmentPage() {
  // Function to get tag color styling (same as News component)
  const getTagStyle = (tag: string) => {
    const tagStyles: { [key: string]: string } = {
      "Latest": "bg-red-100 text-red-800 border-red-200",
      "Conference": "bg-blue-100 text-blue-800 border-blue-200",
      "Working Group": "bg-green-100 text-green-800 border-green-200",
      "Event": "bg-purple-100 text-purple-800 border-purple-200",
      "Standards": "bg-orange-100 text-orange-800 border-orange-200",
      "New Project": "bg-indigo-100 text-indigo-800 border-indigo-200"
    };
    return tagStyles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  // Tags for this article (matching news.ts)
  const articleTags = ["Members", "Working Group"];

  return (
    <main className="min-h-screen bg-white w-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Image
              src="/images/Logo/BGIN_horizontal_01_black.png"
              alt="BGIN Logo"
              width={300}
              height={100}
              className="mx-auto mb-6"
            />
            <div className="flex justify-center items-center gap-2 mb-4">
              {articleTags.map((tag, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getTagStyle(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className={`${CUSTOM_STYLES.TITLE.CENTER} text-black mb-4`}>
              BGIN Chair Shin&apos;ichiro Matsuo Appointed to Japanese Financial Services Agency&apos;s Cryptocurrency System Working Group
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              August 6, 2025 • Blockchain Governance Initiative Network (BGIN)
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            
            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-8 mb-6`}>
              Executive Summary
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              The Blockchain Governance Initiative Network (BGIN) announces the appointment of its Co-Chair, Professor Shin&apos;ichiro Matsuo (Research Professor, Georgetown University and Virginia Tech), as a member of the Cryptoasset System Working Group under the Financial Services Agency&apos;s Financial System Council in Japan.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Background
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              The Japanese Financial Services Agency has established a Cryptoasset System Working Group under its Financial System Council to discuss new regulatory and supervisory approaches for Japan&apos;s cryptocurrency system, including amendments to the Financial Instruments and Exchange Act (FIEA). The first meeting of this working group was held on July 31st, 2025.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Significance of the Official Policy Forum
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              The Financial System Council serves as the highest-level advisory body for Japan&apos;s financial policy, and the Cryptocurrency System Working Group established under its auspices represents an extremely formal and critical forum that will determine the future direction of Japan&apos;s cryptocurrency regulation. This working group will conduct important policy decisions that will shape the future of Japan&apos;s cryptocurrency system.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Role of Professor Shin&apos;ichiro Matsuo and BGIN&apos;s Neutrality Significance
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              Professor Matsuo, as Co-Chair of BGIN, has provided a neutral forum for discussion within a global multi-stakeholder organization for blockchain technology, contributing to the deepening of common understanding among all stakeholders including engineers, regulators, governments, central banks, business entities, and academia.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              BGIN&apos;s Neutrality and Contribution to Advanced Country Regulation
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              BGIN is not an industry association but rather a neutral organization with extremely diverse stakeholders, possessing a unique position to contribute to cryptocurrency regulation and supervision in advanced countries. The participation of the chair of such a neutral organization in formal policy discussions is of utmost importance in reflecting technical expertise and international best practices in the policy formation process.
            </p>

            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Through his participation in the Financial Services Agency&apos;s Cryptocurrency System Working Group, Professor Matsuo will provide specialized expertise in the following areas:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Cybersecurity Standardization:</strong> Cybersecurity framework standardization work being advanced by BGIN (in collaboration with NIST, MITRE, and others)
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>International Collaboration:</strong> International governance and standardization of blockchain technology
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Technical Expertise:</strong> Cryptography and information security expertise
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Permissionless Technology Regulation:</strong> Specialized knowledge regarding regulatory and supervisory approaches for permissionless blockchain technology
              </li>
            </ul>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              BGIN&apos;s Initiatives
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              BGIN serves as a multi-stakeholder discussion body and distributed think tank, playing the same role for the blockchain ecosystem as ISOC/IETF/ICANN/IGF do for the Internet ecosystem. BGIN was established following the G20 2019 communique.
            </p>

            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Currently, BGIN is advancing the following critical initiatives:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Continuous Discussion by Three Working Groups:</strong> IKP WG (Identity, Key Management and Privacy), FASE WG (Financial Applications & Social Economics), and Cyber Security WG conduct bi-weekly calls to continuously implement specialized discussions in various fields of blockchain technology
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Cybersecurity Framework Standardization:</strong> Part 1 document standardization completion expected at BGIN Block 13 (October 15-17, 2025, Washington, DC)
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>ISO Standardization:</strong> New item proposal to ISO TC307 planned for November 2025
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>International Security Information Sharing:</strong> Collaboration with JP Crypto-ISAC
              </li>
            </ul>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Contribution to International Regulatory and Supervisory Discussions
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              At BGIN Block 13 (October 15-17, 2025, Washington, DC), discussions will be held on cryptocurrency regulatory and supervisory trends currently being debated in Japan, the United States, and other countries. This will enable the linkage of discussions in Japan&apos;s Financial Services Agency Cryptocurrency System Working Group with international regulatory trends, making it possible to reflect global perspectives in Japan&apos;s policy formation process.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Future Outlook
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              Professor Matsuo&apos;s participation in the Financial Services Agency&apos;s Cryptocurrency System Working Group is expected to contribute to the consideration of balanced regulatory and supervisory approaches for Japan&apos;s cryptocurrency regulation that reflect technical expertise and international best practices.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Significance of Policy Contribution by Neutral Organizations
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              The participation of chairs from neutral multi-stakeholder organizations like BGIN in formal policy discussion forums is extremely important in introducing technical and international perspectives that are not bound by specific interests into the policy formation process. This will enable Japan&apos;s cryptocurrency regulation to maintain consistency with international best practices while appropriately balancing technological innovation and user protection.
            </p>

            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              BGIN will continue to provide neutral and open forums for discussion toward the sustainable development of the global blockchain ecosystem.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">
              For Media Inquiries
            </h3>
            <div className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              <strong>Blockchain Governance Initiative Network (BGIN)</strong><br />
              Website: <a href="https://bgin-global.org/" className="text-blue-600 hover:underline">https://bgin-global.org/</a><br />
              Email: <a href="mailto:bgin_admin@bg2x.org" className="text-blue-600 hover:underline">bgin_admin@bg2x.org</a>
            </div>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">
              Reference Information
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
              About BGIN: <a href="https://bgin-global.org/" className="text-blue-600 hover:underline">https://bgin-global.org/</a>
            </p>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

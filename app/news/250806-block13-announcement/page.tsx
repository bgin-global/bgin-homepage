"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CUSTOM_STYLES } from "@/styles/custom";
import Image from "next/image";

export default function Block13AnnouncementPage() {
  // Function to get tag color styling (same as News component)
  const getTagStyle = (tag: string) => {
    const tagStyles: { [key: string]: string } = {
      "Latest": "bg-red-100 text-red-800 border-red-200",
      "Conference": "bg-blue-100 text-blue-800 border-blue-200",
      "Working Group": "bg-green-100 text-green-800 border-green-200",
      "Event": "bg-purple-100 text-purple-800 border-purple-200",
      "Standards": "bg-orange-100 text-orange-800 border-orange-200",
      "Announcement": "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return tagStyles[tag] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  // Tags for this article (matching news.ts)
  const articleTags = ["Conference", "Event"];

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
              BGIN Announces Block #13 Conference in Washington, D.C.
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              August 6, 2025 • Blockchain Governance Initiative Network (BGIN)
            </p>
          </div>
          
          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/Events/Block3.jpeg"
              alt="Block Conference"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>December 20, 2024</strong> - The Blockchain Governance Initiative Network (BGIN) is pleased to announce the 13th general meeting, <strong>Block #13</strong>, to be held in <strong>Washington, D.C.</strong> from <strong>October 15-17, 2025</strong>.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              About Block #13
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-6`}>
              Building on BGIN&apos;s mission established following the 2019 G20 Osaka Communiqué, Block #13 continues our work as a Category A Liaison to ISO TC307. This unique permissionless forum brings together diverse stakeholders from regulators to cypherpunks to collaborate on critical blockchain governance standards.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              What Makes This Special
            </h2>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>G20 Legacy:</strong> Established following the 2019 G20 Osaka Leaders&apos; Declaration
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>ISO Recognition:</strong> Recognized as Category A Liaison to ISO TC307
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Unique Forum:</strong> Permissionless collaboration from regulators to cypherpunks
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Standards Impact:</strong> Our outputs feed directly into international standards
              </li>
            </ul>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Key Focus Areas
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-8 mb-4">
              Critical Projects
            </h3>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-4`}>
              Our working groups will present and discuss several critical projects across three main areas:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>WG1 Projects:</strong> Identity and privacy frameworks
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>WG2 Projects:</strong> Financial applications and regulations
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>WG3 Projects:</strong> Technical standards and interoperability
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">
              Program Highlights
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                Interactive sessions with policymakers
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                Technical deep-dives on governance frameworks
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                Standards development workshops
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                Networking opportunities with global stakeholders
              </li>
            </ul>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Who Should Attend
            </h2>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Regulators and Policymakers:</strong> Shape the future of blockchain governance
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Technologists:</strong> Contribute to technical standards development
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Industry Leaders:</strong> Understand regulatory landscape and compliance
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Academics:</strong> Engage in cutting-edge research discussions
              </li>
              <li className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
                <strong>Developers:</strong> Learn about emerging governance frameworks
              </li>
            </ul>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Why Washington, D.C.
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              The location in Washington, D.C. provides unique opportunities to engage with U.S. policymakers and international stakeholders visiting the capital. This strategic location enhances our mission to bridge the gap between technology innovation and regulatory frameworks.
            </p>

            <h2 className={`${CUSTOM_STYLES.SUBTITLE} text-black mt-12 mb-6`}>
              Registration and More Information
            </h2>
            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700 mb-8`}>
              Registration details and the full program will be announced in early 2025. For more information about Block #13 and to stay updated on registration, please visit our <a href="/events/20251015-block13" className="text-blue-600 hover:underline">events page</a> or contact the BGIN Secretariat.
            </p>

            <hr className="border-gray-300 my-8" />

            <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600 italic text-center`}>
              For media inquiries, please contact: bgin_admin@bg2x.org
            </p>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

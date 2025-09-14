/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "ja";

export default function Layer2MeetupNewsShared({ lang }: { lang: Lang }) {
  const isEN = lang === "en";
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Go Back Button */}
      <div className="mb-6">
        <Link 
          href="/news"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {isEN ? "Back to News" : "ニュース一覧へ"}
        </Link>
      </div>

      {/* Top language toggle */}
      <div className="flex justify-end mb-6">
        <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white p-1 shadow-sm">
          <Link
            href="/news/layer2-ethtokyo-edcon-2025"
            className={`${isEN ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-100"} px-3 py-1 rounded-md text-sm font-medium transition-colors`}
          >
            EN
          </Link>
          <Link
            href="/news/layer2-ethtokyo-edcon-2025-jp"
            className={`${!isEN ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-100"} px-3 py-1 rounded-md text-sm font-medium transition-colors`}
          >
            日本語
          </Link>
        </div>
      </div>

      {/* Event Logos */}
      <div className="flex items-center justify-center gap-8 mb-12 p-8 bg-gray-50 rounded-lg">
        <Image
          src="/images/Events/Layer2Japan2025/ethtokyo.png"
          alt="ETHTokyo Logo"
          width={80}
          height={40}
          className="object-contain"
        />
        <Image
          src="/images/Logo/BGIN_horizontal_01_black.png"
          alt="BGIN Logo"
          width={150}
          height={60}
          className="object-contain"
        />
        <Image
          src="/images/Events/Layer2Japan2025/edcon.png"
          alt="EDCON Logo"
          width={150}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Article Content */}
      {isEN ? (
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">
            BGIN Announces Layer 2 Meetups at ETHTokyo and EDCON 2025
          </h1>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Advancing Blockchain Standards Through Community Engagement
          </h2>

          <div className="flex justify-center mb-8">
            <button
              onClick={scrollToBottom}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
            >
              Register for Events
            </button>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Tokyo, Japan</strong> - The Blockchain Governance Initiative Network (BGIN) is pleased to
            announce the upcoming Layer 2 Meetups at ETHTokyo and EDCON 2025, marking a
            significant milestone in BGIN's mission to bridge grassroots blockchain communities with
            global standardization processes.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            Layer 2 Initiative: Expanding BGIN's Reach
          </h3>

          <p className="text-gray-700 mb-6">
            BGIN's Layer 2 Meetups represent an innovative approach to standardization, extending
            beyond traditional working group meetings and general assemblies (Block Meetings) to
            engage directly with diverse stakeholders at major blockchain events. These meetups serve
            as side events that gather valuable feedback and modification comments on draft
            standardization documents from key stakeholders across the ecosystem.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            ETHTokyo Layer 2 Meetup: Privacy and Accountability Standards
          </h3>

          <div className="text-gray-700 space-y-4 mb-6">
            <p><strong>Date:</strong> September 15, 2025, 2:00 pm - 4:00 pm (JST)</p>
            <p><strong>Location:</strong> Shibuya Parco DG Bldg., 15-1 Udagawa-cho, Shibuya-ku, Tokyo 150-0042, Japan</p>
            <p><strong>Theme:</strong> Standardization of Privacy Pool and Accountable Wallet Protocols</p>
          </div>

          <p className="text-gray-700 mb-6">
            As a community sponsor of ETHTokyo, BGIN will host a Layer 2 Meetup focusing on two
            critical protocols: Privacy Pool and Accountable Wallet. The session will bring together global
            engineers and protocol designers participating in ETHTokyo's hackathon to discuss
            standardization documents for these innovative protocols. This meetup is open to the public;
            anyone can join, including those who don't attend ETHTokyo's hackathon.
          </p>

          <p className="text-gray-700 mb-6">
            Privacy Pool, proposed by Vitalik Buterin in 2023, promotes privacy protection while
            ensuring regulatory compliance. Accountable Wallet addresses money laundering concerns
            by creating distributed Association Sets for wallets not involved in illicit activities.
          </p>

          <p className="text-gray-700 mb-6">
            The meetup is free to attend, with venue provided by BGIN's Sustaining Sponsor, Digital
            Garage. Attendance is limited and available on a first-come, first-served basis.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            EDCON Layer 2 Meetup: Cybersecurity and Privacy Standards
          </h3>

          <div className="text-gray-700 space-y-2 mb-6">
            <p><strong>Date:</strong> September 17, 2025, 12:00 PM - 4:00 PM (JST)</p>
            <p><strong>Location:</strong> Congres Square Grand Green Osaka</p>
            <p><strong>Themes:</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Privacy Pool and Accountable Wallet Standardization</li>
              <li>Cybersecurity Information Sharing Framework Standardization</li>
            </ol>
          </div>

          <p className="text-gray-700 mb-6">
            As a community partner of EDCON, BGIN will conduct sessions with global engineers and
            protocol designers on Privacy Pool standards and cybersecurity information sharing
            frameworks. The cybersecurity framework addresses the urgent need for cross-ecosystem
            information sharing to prevent incidents like the 2024 DMM and ByBit events.
          </p>

          <p className="text-gray-700 mb-6">
            The cybersecurity standard is scheduled for publication approval at BGIN's General
            Assembly (Block 13) in Washington DC from October 15-17, 2025, followed by ISO TC307
            project initiation.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            Open and Transparent Process
          </h3>

          <p className="text-gray-700 mb-6">
            Both Layer 2 Meetups will discuss draft documents developed through BGIN's public
            working group discussions. All materials are pre-published on BGIN's public Discourse
            forum, allowing for advance questions and feedback collection during the meetups.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            Bridging Grassroots Innovation with Global Standards
          </h3>

          <p className="text-gray-700 mb-6">
            These Layer 2 Meetups exemplify BGIN's unique role in connecting grassroots blockchain
            engineers with global standardization processes. While ISO standards are typically
            permissioned environments inaccessible to individual engineers, BGIN serves as a crucial
            intermediary, enabling community participation in government-referenced standards.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            About BGIN
          </h3>

          <p className="text-gray-700 mb-8">
            The Blockchain Governance Initiative Network (BGIN) is a global standardization
            organization dedicated to developing comprehensive blockchain governance frameworks.
            Through its multi-stakeholder approach, BGIN bridges the gap between grassroots
            blockchain communities and formal standardization processes, ensuring that innovation and
            regulatory compliance advance together.
          </p>

          {/* Call to Action */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Join Us at the Layer 2 Meetups</h3>
            <p className="mb-6 text-gray-700">
              Be part of shaping the future of blockchain standards. Join us at the upcoming Layer 2 Meetups 
              and contribute to the development of critical blockchain governance frameworks.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/events/20250915-layer2-ethtokyo" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                ETHTokyo Meetup Details
              </Link>
              <Link href="/events/20250916-layer2-edcon" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                EDCON Meetup Details
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="border-t border-gray-300 pt-8 mt-12">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Links</h3>
            <div className="space-y-2">
              <Link href="https://bgin.discourse.group/" className="text-blue-600 hover:text-blue-800 block">
                → BGIN Discourse Forum
              </Link>
              <Link href="/activities/layer2-meetup" className="text-blue-600 hover:text-blue-800 block">
                → All Layer 2 Meetups
              </Link>
              <Link href="/events/20251015-block13" className="text-blue-600 hover:text-blue-800 block">
                → BGIN Block 13 Conference
              </Link>
            </div>
          </div>
        </article>
      ) : (
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">
            BGIN、ETHTokyoとEDCON 2025でLayer 2 Meetupを開催
          </h1>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            コミュニティエンゲージメントを通じたブロックチェーン標準化の推進
          </h2>

          <div className="flex justify-center mb-8">
            <button
              onClick={scrollToBottom}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
            >
              イベントに登録
            </button>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>東京、日本</strong> - ブロックチェーンガバナンスイニシアティブネットワーク（BGIN）は、ETHTokyoと
            EDCON 2025でのLayer 2 Meetupの開催を発表いたします。これは、BGINが草の根ブロック
            チェーンコミュニティとグローバル標準化プロセスを橋渡しするという使命における重要なマイル
            ストーンを記すものです。
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            Layer 2イニシアティブ：BGINの影響力拡大
          </h3>

          <p className="text-gray-700 mb-6">
            BGINのLayer 2 Meetupは、従来のワーキンググループ会議や総会（Block Meetings）を超え
            て、主要なブロックチェーンイベントで多様なステークホルダーと直接関わる標準化への革新的
            なアプローチを表しています。これらのミートアップは、サイドイベントとして機能し、エコシステム
            全体の主要ステークホルダーから標準化ドキュメントのドラフトに対する貴重なフィードバックと修
            正コメントを収集します。
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            ETHTokyo Layer 2 Meetup：プライバシーとアカウンタビリティの標準化
          </h3>

          <div className="text-gray-700 space-y-4 mb-6">
            <p><strong>日時：</strong> 2025年9月15日 13:00-15:00（日本時間）</p>
            <p><strong>場所：</strong> 渋谷パルコDGビル 15F, 〒150-0042 東京都渋谷区宇田川町15-1</p>
            <p><strong>テーマ：</strong> Privacy PoolとAccountable Walletプロトコルの標準化</p>
          </div>

          <p className="text-gray-700 mb-6">
            ETHTokyoのコミュニティスポンサーとして、BGINはPrivacy PoolとAccountable Walletの2つの
            重要なプロトコルに焦点を当てたLayer 2 Meetupを開催します。このセッションでは、ETHTokyo
            のハッカソンに参加する世界中のエンジニアとプロトコル設計者が集まり、これらの革新的なプロ
            トコルの標準化ドキュメントについて議論します。このMeetupはオープンで、ETHTokyoハッカソ
            ンの参加者でない方も参加可能です。
          </p>

          <p className="text-gray-700 mb-6">
            Privacy Poolは、2023年にVitalik Buterinが提案した、プライバシー保護を促進しながら規制対
            応を確保するプロトコルです。Accountable Walletは、不正活動に関与していないウォレットの分
            散型Association Setを作成することで、マネーロンダリングの懸念に対処します。
          </p>

          <p className="text-gray-700 mb-6">
            このミートアップは無料で参加でき、会場はBGINのSustaining Sponsorであるデジタルガレージ
            が提供します。参加は先着順で制限があります。
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            EDCON Layer 2 Meetup：サイバーセキュリティとプライバシーの標準化
          </h3>

          <div className="text-gray-700 space-y-2 mb-6">
            <p><strong>日時：</strong> 2025年9月17日 12:30 - 16:30（日本時間）</p>
            <p><strong>場所：</strong> コングレスクエア グラングリーン大阪</p>
            <p><strong>テーマ：</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Privacy PoolとAccountable Walletの標準化</li>
              <li>サイバーセキュリティ情報共有フレームワークの標準化</li>
            </ol>
          </div>

          <p className="text-gray-700 mb-6">
            EDCONのコミュニティパートナーとして、BGINは世界中のエンジニアとプロトコル設計者と共に、
            Privacy Pool標準とサイバーセキュリティ情報共有フレームワークについてセッションを実施しま
            す。サイバーセキュリティフレームワークは、2024年のDMMやByBit事件のようなインシデントを
            防ぐための、エコシステムを越えた情報共有の緊急な必要性に対処します。
          </p>

          <p className="text-gray-700 mb-6">
            サイバーセキュリティ標準は、2025年10月15-17日にワシントンDCで開催されるBGIN総会（
            Block 13）での出版承認が予定されており、その後ISO TC307でのプロジェクト化が予定されて
            います。
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            オープンで透明性のあるプロセス
          </h3>

          <p className="text-gray-700 mb-6">
            両方のLayer 2 Meetupは、BGINの公開ワーキンググループ議論で開発されたドキュメントのドラ
            フトを議論します。すべての資料はBGINの公開Discourseフォーラムで事前公開され、ミートアッ
            プ前の質問とフィードバックの収集が可能です。
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            草の根イノベーションとグローバル標準の橋渡し
          </h3>

          <p className="text-gray-700 mb-6">
            これらのLayer 2 Meetupは、BGINが草の根ブロックチェーンエンジニアとグローバル標準化プロ
            セスを結びつける独特な役割を例示しています。ISO標準は通常、個々のエンジニアがアクセス
            できない許可された環境ですが、BGINは重要な仲介者として機能し、政府が参照する標準への
            コミュニティ参加を可能にします。
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
            BGINについて
          </h3>

          <p className="text-gray-700 mb-8">
            ブロックチェーンガバナンスイニシアティブネットワーク（BGIN）は、包括的なブロックチェーンガバ
            ナンスフレームワークの開発に専念するグローバル標準化組織です。マルチステークホルダー
            アプローチを通じて、BGINは草の根ブロックチェーンコミュニティと正式な標準化プロセスの間の
            ギャップを埋め、イノベーションと規制対応が共に前進することを確保します。
          </p>

          {/* Call to Action */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Layer 2 Meetupにご参加ください</h3>
            <p className="mb-6 text-gray-700">
              ブロックチェーン標準の未来を形作る一員になりましょう。今後のLayer 2 Meetupに参加し、
              重要なブロックチェーンガバナンスフレームワークの開発に貢献してください。
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/events/20250915-layer2-ethtokyo" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                ETHTokyo Meetup 詳細
              </Link>
              <Link href="/events/20250916-layer2-edcon" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                EDCON Meetup 詳細
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="border-t border-gray-300 pt-8 mt-12">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">関連リンク</h3>
            <div className="space-y-2">
              <Link href="https://bgin.discourse.group/" className="text-blue-600 hover:text-blue-800 block">
                → BGIN Discourse フォーラム
              </Link>
              <Link href="/activities/layer2-meetup" className="text-blue-600 hover:text-blue-800 block">
                → すべてのLayer 2 Meetup
              </Link>
              <Link href="/events/20251015-block13" className="text-blue-600 hover:text-blue-800 block">
                → BGIN Block 13 カンファレンス
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Bottom language toggle */}
      <div className="flex justify-center mt-10">
        <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white p-1 shadow-sm">
          <Link
            href="/news/layer2-ethtokyo-edcon-2025"
            className={`${isEN ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-100"} px-3 py-1 rounded-md text-sm font-medium transition-colors`}
          >
            EN
          </Link>
          <Link
            href="/news/layer2-ethtokyo-edcon-2025-jp"
            className={`${!isEN ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-100"} px-3 py-1 rounded-md text-sm font-medium transition-colors`}
          >
            日本語
          </Link>
        </div>
      </div>
    </div>
  );
}

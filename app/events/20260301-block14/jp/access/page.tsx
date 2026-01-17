'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/block13.css";

export default function Block14AccessPageJP() {
  return (
    <>
      <Header />
      <main className="block13-page min-h-screen bg-white w-screen">
        {/* Simple Header Section */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/events/20260301-block14/jp#access-venue" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Block 14に戻る
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold font-FamiljenGrotesk text-gray-900">アクセス & 会場情報</h1>
                <p className="mt-2 text-xl text-gray-600">BGIN Block 14 | 渋谷パルコDGビル</p>
              </div>
              <Link
                href="/events/20260301-block14/access"
                className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors border border-blue-600"
              >
                English
              </Link>
            </div>
          </div>
        </div>

        <div className="block13-section-container">
          {/* Venue Overview */}
          <section className="block13-section">
            <h2 className="block13-section-title">会場概要</h2>
            <div className="block13-card">
              <div className="mb-6">
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/Shibuya_DG_Building.jpeg"
                    alt="渋谷パルコDGビル"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                渋谷パルコDGビル
              </h3>
              <p className="text-gray-700 mb-4">
                渋谷パルコDGビル<br />
                18階<br />
                東京都渋谷区宇田川町15-1<br />
                150-0042 日本
              </p>

              <div className="mt-4 mb-4">
                <a
                  href="https://maps.app.goo.gl/iZc37UYCEVfbgGCt6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Googleマップで見る
                </a>
              </div>

              <p className="text-sm text-gray-600 italic mb-4">
                Block 12と同じ会場
              </p>

              <h4 className="font-semibold mb-2 mt-6">イベント会場</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Room A</strong> - メインセッション</li>
                <li><strong>Room B</strong> - メインセッション</li>
                <li><strong>オープンスペース</strong> - BGIN Agent Hack</li>
              </ul>
            </div>
          </section>

          {/* Location Map */}
          <section className="block13-section">
            <h2 className="block13-section-title">地図</h2>
            <div className="block13-card">
              <div className="mb-4">
                <p className="text-gray-700">
                  渋谷パルコDGビルは、東京の渋谷の中心部に位置し、渋谷駅から簡単にアクセスできます。
                </p>
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.6993!3d35.6621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca82a94fa3b%3A0x6b0458b11c0bb3d4!2sDigital%20Garage!5e0!3m2!1sen!2sjp!4v1736426543210!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Transportation */}
          <section className="block13-section">
            <h2 className="block13-section-title">交通アクセス</h2>
            <div className="block13-card">
              <h3 className="text-xl font-semibold mb-4">渋谷駅から</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">徒歩</h4>
                  <p className="text-gray-600">
                    渋谷駅（JR、東京メトロ、東急、京王線）から徒歩約5分
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">アクセス可能な路線</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• JR山手線、埼京線、湘南新宿ライン</li>
                    <li>• 東京メトロ銀座線、半蔵門線、副都心線</li>
                    <li>• 東急東横線、田園都市線</li>
                    <li>• 京王井の頭線</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">建物の場所</h4>
                  <p className="text-gray-600">
                    建物は渋谷パルコ複合施設内にあり、渋谷の主要ショッピングエリアに隣接しています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Room Photos */}
          <section className="block13-section">
            <h2 className="block13-section-title">会場の部屋</h2>

            {/* Main Rooms Grid */}
            <div className="block13-grid block13-grid-2 mb-8">
              {/* Room A */}
              <div className="block13-card overflow-hidden">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/DragonGate_RoomA.jpg"
                    alt="Room A"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Room A</h3>
                <p className="text-gray-600">メインセッション</p>
              </div>

              {/* Room B */}
              <div className="block13-card overflow-hidden">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/DragonGate_RoomB.jpeg"
                    alt="Room B"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Room B</h3>
                <p className="text-gray-600">メインセッション</p>
              </div>

              {/* Open Space */}
              <div className="block13-card overflow-hidden">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Events/venue/DragonGate_RoomA.jpg"
                    alt="オープンスペース"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">オープンスペース</h3>
                <p className="text-gray-600">BGIN Agent Hack</p>
              </div>
            </div>
          </section>

          {/* Nearby Information */}
          <section className="block13-section">
            <h2 className="block13-section-title">周辺情報</h2>
            <div className="block13-card">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">レストラン & カフェ</h4>
                  <p className="text-gray-600 text-sm">
                    渋谷には徒歩圏内に多様な飲食店があります。渋谷パルコ複合施設内にも複数のレストランとカフェがあります。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">ショッピング</h4>
                  <p className="text-gray-600 text-sm">
                    渋谷は東京の主要なショッピング地区の一つで、近くに多数のデパート、ブティック、エンターテインメント施設があります。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">ホテル</h4>
                  <p className="text-gray-600 text-sm">
                    渋谷駅から徒歩圏内に複数のホテルがあり、国際的な参加者にとって便利です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to main page CTA */}
          <section className="block13-section">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Block 14に参加する準備はできましたか？</h2>
              <p className="text-gray-700 mb-6">
                Japan Fintech Week期間中のBGIN Block 14で席を確保するために、今すぐ登録してください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events/20260301-block14/jp#access-venue"
                  className="block13-btn-secondary"
                >
                  <svg className="mr-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  イベントページに戻る
                </Link>
                <a
                  href="https://www.eventbrite.com/e/bgin-block-14-tickets-1980456894885?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block13-btn-primary"
                >
                  今すぐ登録
                  <svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

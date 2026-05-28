/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layer2MeetupNewsShared from "../layer2-ethtokyo-edcon-2025/Layer2MeetupNewsShared";

export default function Layer2ETHTokyoEDCONNewsJP() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Layer2MeetupNewsShared lang="ja" />
      <Footer />
    </main>
  );
}
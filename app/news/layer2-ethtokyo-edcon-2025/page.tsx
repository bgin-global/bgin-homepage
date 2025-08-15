/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layer2MeetupNewsShared from "./Layer2MeetupNewsShared";

export default function Layer2ETHTokyoEDCONNews() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Layer2MeetupNewsShared lang="en" />
      <Footer />
    </main>
  );
}
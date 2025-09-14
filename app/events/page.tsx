/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  // Define consistent colors for each event type
  const eventTypeColors = {
    "Block Conference": "bg-indigo-50 border-indigo-500",
    "Layer 2 Meetup": "bg-purple-50 border-purple-500",
    "Webinar": "bg-green-50 border-green-500",
    "Other": "bg-gray-50 border-gray-500"
  };
  
  // Badge colors for event types
  const eventTypeBadgeColors = {
    "Block Conference": "bg-indigo-100 text-indigo-700",
    "Layer 2 Meetup": "bg-purple-100 text-purple-700",
    "Webinar": "bg-green-100 text-green-700",
    "Other": "bg-gray-100 text-gray-700"
  };

  // Simply define upcoming events directly - no IKP webinar
  const upcomingEvents = [
    {
      id: "layer2-ethtokyo",
      title: "Layer 2 Meetup @ ETHTokyo",
      date: "September 15, 2025",
      time: "2:00 PM - 4:00 PM JST",
      type: "Layer 2 Meetup",
      description: "Standardization of Privacy Pool and Accountable Wallet Protocols at ETHTokyo. A separate EthTokyo ticket is optional, but we highly recommend attending.",
      link: "/events/20250915-layer2-ethtokyo",
      color: eventTypeColors["Layer 2 Meetup"],
      registerLink: "https://lu.ma/otb2xfno",
      secondaryRegisterLink: "https://app.moongate.id/e/ethtokyo2025",
      image: "/images/Events/Layer2Japan2025/ethtokyo.png"
    },
    {
      id: "layer2-edcon",
      title: "Layer 2 Meetup @ EDCON 2025",
      date: "September 17, 2025",
      time: "12:00 PM - 4:00 PM JST",
      type: "Layer 2 Meetup",
      description: "Privacy Pool & Cybersecurity Information Sharing Standards discussion at EDCON in Osaka, Japan. Separate EDCON registration is required.",
      link: "/events/20250916-layer2-edcon",
      color: eventTypeColors["Layer 2 Meetup"],
      registerLink: "https://luma.com/6bnm90zw",
      secondaryRegisterLink: "https://www.edcon.io/en/ticket",
      image: "/images/Events/Layer2Japan2025/bgin luma x EDCON.png"
    },
    {
      id: "block13",
      title: "BGIN Block #13",
      date: "October 15-17, 2025",
      time: "Full Conference",
      type: "Block Conference",
      description: "BGIN's 13th General Assembly in Washington, D.C., advancing blockchain governance standards.",
      link: "/events/20251015-block13",
      color: eventTypeColors["Block Conference"],
      registerLink: "https://www.eventbrite.com/e/bgin-block-13-tickets-1584466825929?aff=oddtdtcreator",
      image: "/images/Events/Block3.jpeg"
    }
  ];

  const pastEventCategories = [
    {
      title: "Block Conferences",
      description: "BGIN General Assemblies and major conferences",
      link: "/activities/block-conference",
      count: "12 past events"
    },
    {
      title: "Layer 2 Meetups",
      description: "Technical discussions at major blockchain events",
      link: "/activities/layer2-meetup",
      count: "Multiple events"
    },
    {
      title: "Working Group Sessions",
      description: "Specialized working group meetings and workshops",
      link: "/activities/working-groups",
      count: "Ongoing sessions"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            BGIN Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at upcoming events and explore our archive of past conferences, 
            meetups, and working sessions advancing blockchain governance
          </p>
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${event.color.split(' ')[0]} border-b-4 ${event.color.split(' ')[1]} p-4`}>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${eventTypeBadgeColors[event.type as keyof typeof eventTypeBadgeColors] || eventTypeBadgeColors["Other"]}`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-1">
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </p>
                      </div>
                    </div>
                    
                    {(event as any).image && (
                      <div className="ml-4 flex-shrink-0">
                        <Image
                          src={(event as any).image}
                          alt={event.title}
                          width={event.id === "block13" ? 160 : 100}
                          height={event.id === "block13" ? 80 : 50}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="text-gray-600 mb-6 text-sm">
                    {event.id === "layer2-edcon" ? (
                      <>
                        Privacy Pool & Cybersecurity Information Sharing Standards discussion at EDCON in Osaka, Japan. <strong>Separate EDCON registration is required.</strong>
                      </>
                    ) : event.id === "layer2-ethtokyo" ? (
                      <>
                        Standardization of Privacy Pool and Accountable Wallet Protocols at ETHTokyo. <strong>A separate ETHTokyo ticket is optional,</strong> but we highly recommend attending.
                      </>
                    ) : (
                      event.description
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      href={event.link}
                      className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-center text-sm"
                    >
                      View Details
                    </Link>
                    {event.registerLink ? (
                      <>
                        <Link 
                          href={event.registerLink}
                          className={`flex-1 border-2 ${event.color.split(' ')[1]} text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-center text-sm`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.id === "layer2-edcon" ? "Register (BGIN)" : "Register"}
                        </Link>
                        {(event as any).secondaryRegisterLink && (
                          <Link 
                            href={(event as any).secondaryRegisterLink}
                            className={`flex-1 border-2 ${event.color.split(' ')[1]} text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-center text-sm`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {event.id === "layer2-edcon" ? "Register (EDCON)" : "ETHTokyo Ticket"}
                          </Link>
                        )}
                      </>
                    ) : (
                      <button 
                        className="flex-1 bg-gray-200 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed font-semibold"
                        disabled
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Past Events Archive
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEventCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.link}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {category.description}
                </p>
                <p className="text-sm text-blue-600 font-semibold flex items-center">
                  {category.count}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-[#688ff5] rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on BGIN Events</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join our community to receive updates about upcoming events, 
            working group sessions, and governance initiatives
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="https://bgin.discourse.group"
              className="bg-white text-[#688ff5] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
            >
              Join Discussion Forum
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
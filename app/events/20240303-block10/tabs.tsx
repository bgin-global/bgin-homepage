"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

interface Props {
  homeContent: string;
  programContent: string;
  accessContent: string;
  speakersContent: string;
  sponsorsContent: string;
}

export default function Component(props: Props) {
  const tabData = [
    {
      title: "home",
      content: props.homeContent,
    },
    {
      title: "program",
      content: props.programContent,
    },
    // {
    //   title: "main discussants",
    //   content: props.speakersContent,
    // },
    {
      title: "sponsors",
      content: props.sponsorsContent,
    },
    {
      title: "access",
      content: props.accessContent,
    },
  ];
  return (
    <Tabs value="home">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {tabData.map((tabItem) => (
          <Tab key={tabItem.title} value={tabItem.title}>
            {tabItem.title}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {tabData.map((tabItem) => (
          <TabPanel
            key={tabItem.title}
            value={tabItem.title}
            className="text-black font-Inter"
          >
            <div
              dangerouslySetInnerHTML={{ __html: tabItem.content }}
              className="w-full"
            />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

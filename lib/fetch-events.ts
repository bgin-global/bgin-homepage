import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import html from "remark-html";

type DIRECTION = "ALL" | "FUTURE" | "PAST";
export interface Event {
  id: string;
  thumbnail: string;
  register_link: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

interface PostId {
  params: {
    slug: string;
  };
}

const directory = path.join(process.cwd(), "contents/events");

export function getSortedEvents(direction: DIRECTION = "ALL"): Event[] {
  const today = Date.now();
  const fileNames = fs.readdirSync(directory);
  const allPostsData: Event[] = fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const event: Event = {
        id,
        title: matterResult.data.title as string,
        thumbnail: matterResult.data.thumbnail as string,
        register_link: matterResult.data.register_link as string,
        date: matterResult.data.date as string,
        location: matterResult.data.location as string,
        description: matterResult.data.description as string,
      };
      return event;
    })
    .filter((event) => {
      if (direction === "ALL") return true;
      const eventDate = Date.parse(event.date);
      const isFutureEvent = eventDate >= today;
      if (direction === "PAST") return !isFutureEvent;
      else return isFutureEvent;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllEventIds(): PostId[] {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getEventData(
  slug: string
): Promise<Event & { contentHtml: string }> {
  console.log("slug ", slug);
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    // .use(prism)
    .use(remarkParse)
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const event: Event = {
    id: slug,
    title: matterResult.data.title as string,
    thumbnail: matterResult.data.thumbnail as string,
    register_link: matterResult.data.register_link as string,
    date: matterResult.data.date as string,
    location: matterResult.data.location as string,
    description: matterResult.data.description as string,
  };

  return {
    ...event,
    contentHtml,
  };
}

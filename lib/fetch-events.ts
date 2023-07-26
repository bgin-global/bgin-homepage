import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import prism from "remark-prism";
import html from "remark-html";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
}

interface PostId {
  params: {
    slug: string;
  };
}

const directory = path.join(process.cwd(), "contents/events");

export function getSortedEvents(futureOnly: boolean = false): Event[] {
  const today = Date.now();
  const fileNames = fs.readdirSync(directory);
  const allPostsData: Event[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const event: Event = {
      id,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      location: matterResult.data.location as string,
    };
    return event;
  })
  .filter((event) => {
    if (!futureOnly) return true;
    const eventDate = Date.parse(event.date);
    return eventDate >= today;
  })

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
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const event: Event = {
    id: slug,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    location: matterResult.data.location as string,
  };

  return {
    ...event,
    contentHtml,
  };
}

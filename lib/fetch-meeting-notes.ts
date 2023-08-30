import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export interface MeetingNote {
  id: string;
  date: string;
  title: string;
  tag: string[];
  description: string;
  url: string;
}

interface PostId {
  params: {
    slug: string;
  };
}

const directory = path.join(process.cwd(), "contents/meeting-notes");

export function getSortedMeetingNotes(): MeetingNote[] {
  const today = Date.now();
  const fileNames = fs.readdirSync(directory);
  const allPostsData: MeetingNote[] = fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const meetingNote: MeetingNote = {
        id,
        date: matterResult.data.date as string,
        title: matterResult.data.title as string,
        tag: matterResult.data.tag as string[],
        url: matterResult.data.url as string,
        description: matterResult.data.description as string,
      };
      return meetingNote;
    })

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
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

export async function getMeetingNoteData(
  slug: string
): Promise<MeetingNote & { contentHtml: string }> {
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

  const meetingNote: MeetingNote = {
    id: slug,
    date: matterResult.data.date as string,
    title: matterResult.data.title as string,
    tag: matterResult.data.tag as string[],
    url: matterResult.data.url as string,
    description: matterResult.data.description as string,
  };

  return {
    ...meetingNote,
    contentHtml,
  };
}

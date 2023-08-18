import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface Document {
  id: string;
  title: string;
  published_at: string;
  author: string;
  abstract: string;
  category: string;
}

interface PostId {
  params: {
    slug: string;
  };
}

const directory = path.join(process.cwd(), "contents/documents");

export function getAllDocuments(): Document[] {
  const fileNames = fs.readdirSync(directory);
  const allDocumentData: Document[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const document: Document = {
      id,
      title: matterResult.data.title as string,
      published_at: matterResult.data.published_at as string,
      author: matterResult.data.author as string,
      abstract: matterResult.data.abstract as string,
      category: matterResult.data.category as string,
    };
    return document;
  });

  return allDocumentData.reverse().sort((a,b) => 0 - (a.category > b.category ? 1 : -1));
}

export function getAllDocumentsIds(): PostId[] {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// export async function getWorkingGroupData(
//   slug: string
// ): Promise<Document & { contentHtml: string }> {
//   const fullPath = path.join(directory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const matterResult = matter(fileContents);

//   const processedContent = await remark()
//     .use(prism)
//     .use(html, { sanitize: false })
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   const document: Document = {
//     id: slug,
//     title: matterResult.data.title as string,
//     published_at: matterResult.data.published_at as string,
//     author: matterResult.data.author as string,
//     abstract: matterResult.data.abstract as string,
//     category: matterResult.data.category as string,
//   };

//   return {
//     ...document,
//     contentHtml,
//   };
// }

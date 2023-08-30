import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Document {
  id: string;
  title: string;
  published_at: string;
  author: string;
  abstract: string;
  category: string;
  url: string;
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
      url: matterResult.data.url as string | undefined || `/documents/${id}.pdf`,
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

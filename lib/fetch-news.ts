import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export interface NewsData {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  author?: string;
  category?: string;
  featured?: boolean;
  url: string;
  contentHtml?: string;
}

const newsDirectory = path.join(process.cwd(), "contents/news");

export function getSortedNews(): NewsData[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(newsDirectory, { withFileTypes: true })
    .filter((f) => f.isFile() && f.name.endsWith('.md'))
    .map((f) => f.name);

  const allNewsData: NewsData[] = fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      
      const news: NewsData = {
        id,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        description: matterResult.data.description as string,
        thumbnail: matterResult.data.thumbnail as string | undefined,
        author: matterResult.data.author as string | undefined,
        category: matterResult.data.category as string | undefined,
        featured: matterResult.data.featured as boolean | undefined,
        url: `/news/${id}`,
      };
      return news;
    })
    .sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    });

  return allNewsData;
}

export async function getNewsData(slug: string): Promise<NewsData> {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const news: NewsData = {
    id: slug,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    description: matterResult.data.description as string,
    thumbnail: matterResult.data.thumbnail as string | undefined,
    author: matterResult.data.author as string | undefined,
    category: matterResult.data.category as string | undefined,
    featured: matterResult.data.featured as boolean | undefined,
    url: `/news/${slug}`,
    contentHtml,
  };

  return news;
}

export function getFeaturedNews(): NewsData[] {
  const allNews = getSortedNews();
  return allNews.filter(news => news.featured).slice(0, 3);
} 
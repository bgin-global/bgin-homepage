import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WorkingGroup {
  id: string;
  group_name: string;
  co_chairs: CoChair[];
  description: string;
  mailinglist_url: string;
  github_url: string;
  detail_url: string;
  inactive: boolean;
}

interface CoChair {
  name: string;
  job: string;
}

interface PostId {
  params: {
    slug: string;
  };
}

const directory = path.join(process.cwd(), "contents/working-groups");

export function getAllWorkingGroups(): WorkingGroup[] {
  const fileNames = fs.readdirSync(directory);
  const allWorkingGroupsData: WorkingGroup[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const workingGroup: WorkingGroup = {
      id,
      group_name: matterResult.data.group_name as string,
      co_chairs: matterResult.data.co_chairs as CoChair[],
      description: matterResult.data.description as string,
      mailinglist_url: matterResult.data.mailinglist_url as string,
      github_url: matterResult.data.github_url as string,
      detail_url: matterResult.data.detail_url as string,
      inactive: matterResult.data.inactive as boolean | undefined ?? false,
    };
    return workingGroup;
  });

  return allWorkingGroupsData;
}

export function getAllWorkingGroupIds(): PostId[] {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

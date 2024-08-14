import { PublishedProject } from "@/contents/projects";
import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  project: PublishedProject;
}

export default function ProjectPublished({ project }: Props) {
  return (
    <li className={`${CUSTOM_STYLES.DESCRIPTION} bgin-button`}>
      <a
        href={project.link}
        className="relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.date}, {project.title}
      </a>
    </li>
  );
}

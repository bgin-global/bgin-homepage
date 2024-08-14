import { Project } from "@/contents/projects";
import { CUSTOM_STYLES } from "@/styles/custom";
import Button from "./Button/Button";

interface Props {
  project: Project;
}

export default function ProjectInProgress({ project }: Props) {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row items-start gap-12 m-4">
      <div className="h-full lg:w-full flex-col flex items-start gap-6">
        <div className={CUSTOM_STYLES.SUBTITLE}>{project.title}</div>
        <div className="w-full flex-col flex items-start gap-6 bgin-button">
          <div className="w-full flex-col flex items-start gap-2 text-black">
            <div className={CUSTOM_STYLES.DESCRIPTION}>
              {project.description}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-flow-row bgin-button">
            <Button link={project.reference} text="Reference" color="black" />
            <Button link={project.wg_link} text={project.wg} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
}

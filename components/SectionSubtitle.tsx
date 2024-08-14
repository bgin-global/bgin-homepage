import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  title: string;
}

export default function SectionSubtitle(props: Props) {
  return (
    <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto py-8 px-4 lg:px-0">
      <div className={CUSTOM_STYLES.SUBTITLE}>{props.title}</div>
    </div>
  );
}

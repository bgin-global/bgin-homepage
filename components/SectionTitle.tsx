import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  title: string;
}

export default function SectionTitle(props: Props) {
  return (
    <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto py-12 px-4 lg:px-0">
      <div className={CUSTOM_STYLES.TITLE.LEFT}>{props.title}</div>
    </div>
  );
}

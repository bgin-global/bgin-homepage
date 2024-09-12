import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  title: string;
}

export default function SectionTitle(props: Props) {
  return (
    <div className="w-full max-w-5xl flex justify-between items-start text-black mx-auto py-8 px-6 xl:px-0">
      <div className={CUSTOM_STYLES.TITLE.LEFT}>{props.title}</div>
    </div>
  );
}

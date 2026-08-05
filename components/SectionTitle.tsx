import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  title: string;
}

export default function SectionTitle(props: Props) {
  return (
    <div className="w-full max-w-5xl flex justify-between items-start text-black mx-auto pt-0 pb-2 px-6 xl:px-0">
      <h2 className={CUSTOM_STYLES.TYPE.SECTION}>{props.title}</h2>
    </div>
  );
}

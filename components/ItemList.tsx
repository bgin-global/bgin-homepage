import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  title: string;
  link: string;
  subtitle?: string;
}

export default function ItemList({ title, link, subtitle }: Props) {
  return (
    <li className="bgin-button !mt-2 !mb-2">
      <a
        href={link}
        className="flex flex-col gap-1 relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg leading-[22px] font-Inter font-semibold text-black">
          {title}
        </span>
        {subtitle && (
          <span className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-600`}>
            {subtitle}
          </span>
        )}
      </a>
    </li>
  );
}

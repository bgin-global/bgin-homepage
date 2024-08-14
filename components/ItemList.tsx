import { CUSTOM_STYLES } from "@/styles/custom";

interface Props {
  title: string;
  link: string;
}

export default function ItemList({ title, link }: Props) {
  return (
    <li className={`${CUSTOM_STYLES.DESCRIPTION} bgin-button`}>
      <a
        href={link}
        className="relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </li>
  );
}

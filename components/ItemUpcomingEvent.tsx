import { CUSTOM_STYLES } from "@/styles/custom";
import Button from "./Button/Button";

interface Props {
  title: string;
  location: string;
  date: string;
  link: string;
}

export default function ItemUpcomingEvent({
  title,
  location,
  date,
  link,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto">
      <h1 className={CUSTOM_STYLES.TITLE.LEFT_SEMIBOLD}>
        {title} on {date}
      </h1>
      <h2 className={`${CUSTOM_STYLES.TITLE.LEFT} mb-4`}>@{location}</h2>
      <div className="flex items-center justify-between">
        <span className={`${CUSTOM_STYLES.TITLE.LEFT} text-[#D3CC2F]`}>
          Register NOW!!
        </span>
        <div>
          <Button link={link} text="Registration" color="gold" />
        </div>
      </div>
    </div>
  );
}

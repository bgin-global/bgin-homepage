import { Document } from "@/lib/fetch-documents";
import Image from "next/image";
import Link from "next/link";

interface Props {
  document: Document;
}

export default function DocumentItem(props: Props) {
  return (
    <div className="flex-col flex items-center">
      <Link
        href={props.document.url}
        className="relative"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-out ease-linear duration-300 rounded-xl">
          <div
            className="absolute left-0 top-1/2 w-full h-1/2 opacity-100"
            style={{
              background:
                "linear-gradient(180.00deg, rgba(104,144,245,0) 0%, rgba(104,144,245,1) 100%)",
            }}
          />
          <div className="absolute left-1/4 w-1/2 bottom-6 bg-white text-black gap-2 px-3 py-2 rounded-full font-Inter text-sm">
            <div className="m-auto text-center">Read More</div>
          </div>
        </div>
        <DocumentThumbnail
          title={props.document.title}
          publised_at={props.document.published_at}
          category={props.document.category}
        />
      </Link>

      <div className="text-black flex-col w-full flex items-start gap-6 p-3">
        <div className="w-full flex-col flex items-start gap-6">
          <div className="w-full flex-col flex items-start gap-2">
            <div className="text-base leading-[22px] font-bold font-FamiljenGrotesk line-clamp-2">
              {props.document.title}
            </div>
            <div className="text-base leading-[19px] font-Inter line-clamp-4">
              {props.document.abstract}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DocumentThumbnail = (props: { title: string; publised_at: string; category: string; }) => {
  return (
    <div className="h-fit flex flex-col items-start justify-start font-medium text-black font-FamiljenGrotesk p-2 bg-white rounded-xl">
      <div>
        <div className="max-lg:text-sm lg:text-[8px]">{props.publised_at}</div>
        <div className="max-lg:text-lg lg:text-base line-clamp-1">
          {props.title}
        </div>
      </div>
      <div className="lg:h-[80px] max-lg:h-[120px]" />
      <Image
        src={"/images/Documents/" + props.category + ".svg"}
        width="100"
        height="100"
        alt="Document"
        className="w-full h-auto"
      />
    </div>
  );
};

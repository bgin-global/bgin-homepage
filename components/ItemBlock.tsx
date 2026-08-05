import Button from "./Button/Button";
import WgChip from "@/components/WgChip";
import { CUSTOM_STYLES } from "@/styles/custom";
import type { WgId } from "@/contents/projectHubs";
import { getWgIdentity } from "@/contents/wgIdentity";
import { ReactNode } from "react";

interface Props {
  title: string;
  thumbnail: string;
  description: ReactNode;
  buttonTitle: string;
  buttonJumpTo: string;
  withImage?: boolean;
  /** Working group — colored chip + left accent */
  wg?: WgId;
  /** Short project name shown as a colored tag */
  projectTag?: string;
}

const PROJECT_TAG_STYLE: Record<
  WgId,
  { background: string; color: string; border: string }
> = {
  ikp: { background: "#f0f9ff", color: "#0c4a6e", border: "#0369a1" },
  cs: { background: "#ecfdf5", color: "#064e3b", border: "#047857" },
  fase: { background: "#f5f3ff", color: "#4c1d95", border: "#6d28d9" },
  agentic: { background: "#fffbeb", color: "#78350f", border: "#b45309" },
};

export default function ItemBlock({
  title,
  thumbnail,
  description,
  buttonTitle,
  buttonJumpTo,
  withImage = true,
  wg,
  projectTag,
}: Props) {
  const identity = wg ? getWgIdentity(wg) : null;
  const tagStyle = wg ? PROJECT_TAG_STYLE[wg] : null;

  return (
    <div
      className="bg-white h-full w-auto flex-1 flex-col flex justify-between items-start gap-4 pt-4 pb-6 px-1 rounded-3xl bgin-button border border-gray-100 border-l-4"
      style={identity ? { borderLeftColor: identity.hex } : undefined}
    >
      <div className="w-full">
        {withImage && (
          <div className="bg-cover w-full h-[200px] gap-2.5 rounded-xl" />
        )}

        <div className="flex-col w-full flex items-start gap-4 px-2 h-fit">
          {(wg || projectTag) && (
            <div className="flex flex-wrap items-center gap-2">
              {wg && <WgChip wg={wg} />}
              {projectTag && (
                <span
                  className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded border"
                  style={
                    tagStyle ?? {
                      background: "#f3f4f6",
                      color: "#374151",
                      borderColor: "#d1d5db",
                    }
                  }
                >
                  {projectTag}
                </span>
              )}
            </div>
          )}
          <div className="w-full flex-col flex items-start gap-1 text-black">
            <div className={CUSTOM_STYLES.SUBTITLE}>{title}</div>
            <div className="flex-col flex items-start gap-1 text-base leading-6 font-Inter text-gray-800">
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2">
        <Button
          link={buttonJumpTo}
          text={buttonTitle}
          color="black"
          size="sm"
        />
      </div>
    </div>
  );
}

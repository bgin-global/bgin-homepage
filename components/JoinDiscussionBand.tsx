import DiscourseGuideLink from "@/components/DiscourseGuideLink";
import { CUSTOM_STYLES } from "@/styles/custom";

type Props = {
  /** Short context line under the title */
  blurb?: string;
};

/**
 * Quiet end-of-page band — matches /start/discourse CTA weight, not a marketing slab.
 */
export default function JoinDiscussionBand({
  blurb = "BGIN’s official working forum is permissionless. Orient here, then open Discourse.",
}: Props) {
  return (
    <section className={`${CUSTOM_STYLES.SPACE.SECTION} border-t border-gray-200`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-md border border-blue-700 bg-blue-50 px-5 py-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="min-w-0 max-w-xl">
            <h2 className={`${CUSTOM_STYLES.TYPE.SECTION} text-gray-900`}>
              Join the discussion
            </h2>
            <p className={`mt-1.5 ${CUSTOM_STYLES.TYPE.META}`}>{blurb}</p>
          </div>
          <DiscourseGuideLink
            variant="filled"
            label="How to work on Discourse"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}

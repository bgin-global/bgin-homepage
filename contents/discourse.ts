/** Official BGIN Discourse forum URLs and onboarding. */

export const DISCOURSE_HOME = "https://bgin.discourse.group/";

/** Longer how-to hosted on Discourse itself. */
export const DISCOURSE_ONBOARDING =
  "https://bgin.discourse.group/t/onboarding-guide/130/2";

/** Site-owned orientation page (account + what Discourse is for). */
export const DISCOURSE_GUIDE_PATH = "/start/discourse";

/**
 * Build guide URL; optional `next` deep-links after orientation
 * (must be a bgin.discourse.group URL — validated at the page).
 */
export function discourseGuideHref(next?: string | null): string {
  if (!next) return DISCOURSE_GUIDE_PATH;
  return `${DISCOURSE_GUIDE_PATH}?next=${encodeURIComponent(next)}`;
}

/** Allow only same-forum https links for the post-guide destination. */
export function safeDiscourseNext(raw: string | null | undefined): string | null {
  if (!raw) return null;
  try {
    const u = new URL(raw);
    if (u.protocol !== "https:") return null;
    if (u.hostname !== "bgin.discourse.group") return null;
    return u.toString();
  } catch {
    return null;
  }
}

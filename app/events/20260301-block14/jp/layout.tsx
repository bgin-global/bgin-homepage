import type { ReactNode } from "react";

/** Japanese Block 14 subtree — CJK rhythm + lang for accessibility / fonts. */
export default function Block14JpLayout({ children }: { children: ReactNode }) {
  return <div lang="ja">{children}</div>;
}

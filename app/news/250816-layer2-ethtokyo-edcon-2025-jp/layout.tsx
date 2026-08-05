import type { ReactNode } from "react";

export default function JpNewsLayout({ children }: { children: ReactNode }) {
  return <div lang="ja">{children}</div>;
}

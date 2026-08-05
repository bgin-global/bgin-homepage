import {
  WG_META,
  getHubsByWg,
  type WgId,
} from "@/contents/projectHubs";
import { getWgIdentity } from "@/contents/wgIdentity";
import WgChip from "@/components/WgChip";
import Link from "next/link";

export default function WgProjectLinks({ wgId }: { wgId: WgId }) {
  const hubs = getHubsByWg(wgId);
  const meta = WG_META[wgId];
  const identity = getWgIdentity(wgId);

  return (
    <div
      className="w-full mt-4 pt-4 border-t border-gray-200 pl-3"
      style={{ borderLeft: `3px solid ${identity.hex}` }}
    >
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <WgChip wg={wgId} />
        <h3 className="text-sm font-semibold text-gray-900">
          Active project hubs
        </h3>
      </div>
      {hubs.length === 0 ? (
        <p className="text-sm text-gray-600">No listed hubs for this WG yet.</p>
      ) : (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-3">
          {hubs.map((h) => (
            <li key={h.slug}>
              <Link
                href={`/projects/${h.slug}`}
                className="text-blue-700 hover:underline font-medium"
              >
                {h.shortTitle ?? h.title} →
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p className="text-sm text-gray-700">
        Past publications →{" "}
        <Link
          href={`/publications?${meta.publicationsQuery}`}
          className="text-blue-700 underline"
        >
          View in Publications
        </Link>
        {" · "}
        <a
          href={meta.discourseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Discourse
        </a>
      </p>
    </div>
  );
}

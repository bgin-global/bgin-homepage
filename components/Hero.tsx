import { CUSTOM_STYLES } from "@/styles/custom";
import Link from "next/link";

interface Props {
  type: 1 | 2;
}

export default function Hero({ type }: Props) {
  return (
    <div className="flex-col flex items-start pt-10 pb-8 h-fit max-w-5xl m-auto">
      <div className="flex-col w-full flex items-center gap-4 px-4">
        <div className="flex-col flex items-center gap-3 text-black max-w-3xl text-center">
          <h1 className={CUSTOM_STYLES.TYPE.DISPLAY}>
            Neutral multi-stakeholder dialogue for blockchain technology and
            governance standards.
          </h1>
          <p className={`${CUSTOM_STYLES.DESCRIPTION} text-gray-700`}>
            Regulators, technologists, industry, and civil society build shared
            language and practical standards.
          </p>
          <p className="inline-flex items-center px-4 py-2 rounded-md border-2 border-blue-700 bg-blue-50 text-blue-900 text-base md:text-lg font-semibold tracking-tight">
            Permissionless — open to anyone, without membership.
          </p>
          {type === 1 && (
            <Link
              href="/about"
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              About BGIN →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Site color tokens (house system)
 * - Canvas: white
 * - Section wash: gray-50 + gray-200 border
 * - Primary: blue-700 (#1d4ed8) / hover blue-800 (#1e40af)
 * - Soft accent: blue-50
 * - Do not introduce gold, teal, purple, or sponsor blues (#2775CA) as site chrome
 * - Event pages also use CSS vars in styles/block13.css (--bgin-primary)
 *
 * WG identity (attribution only — not chrome): contents/wgIdentity.ts
 * IKP sky · CS emerald · FASE violet · Agentic amber
 *
 * Typography (faces load in app/layout.tsx via next/font):
 * - Display: Familjen Grotesk (--font-display)
 * - Body / UI: Inter (--font-sans) + Noto Sans JP (--font-jp)
 * - Body / lede line-height ≈ 1.55–1.65; display ≈ 1.2–1.3
 */
export const CUSTOM_STYLES = {
  SECTION_CONTAINER: {
    BLUE: "bg-gray-50 w-full mx-auto pb-16 md:pb-24 h-fit border-b border-gray-200",
    WHITE: "bg-white w-full pb-16 md:pb-24 h-fit border-b border-gray-200",
  },
  SECTION_FLEX: {
    ONE: "w-screen lg:w-full px-4 max-w-5xl mx-auto flex flex-col gap-6",
    TWO: "w-screen lg:w-full px-4 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 grid-flow-row",
    LATERAL:
      "w-screen lg:w-full px-4 max-w-5xl mx-auto flex flex-col lg:flex-row gap-6",
    ALWAYS_LATERAL:
      "w-screen lg:w-full px-4 max-w-5xl mx-auto flex flex-row gap-6",
    HOLIZONTAL_SCROLL:
      "w-screen lg:w-full px-4 max-w-5xl mx-auto flex flex-row gap-4 overflow-x-scroll whitespace-nowrap",
  },
  /** Prefer TYPE.* for new UI; TITLE/SUBTITLE/DESCRIPTION kept as aliases. */
  TYPE: {
    DISPLAY:
      "font-FamiljenGrotesk text-3xl md:text-4xl leading-tight font-medium tracking-tight",
    TITLE:
      "font-FamiljenGrotesk text-4xl leading-tight font-medium tracking-tight",
    TITLE_SEMIBOLD:
      "font-FamiljenGrotesk text-4xl leading-tight font-semibold tracking-tight",
    SUBTITLE: "font-FamiljenGrotesk text-2xl leading-snug font-medium",
    SECTION: "font-FamiljenGrotesk text-2xl leading-snug font-semibold",
    LEDE: "text-lg leading-7 font-Inter text-gray-800",
    BODY: "text-base leading-relaxed font-Inter text-gray-800",
    META: "text-sm leading-snug font-Inter text-gray-600",
  },
  TITLE: {
    CENTER:
      "font-FamiljenGrotesk text-4xl leading-tight font-medium tracking-tight text-center",
    LEFT: "font-FamiljenGrotesk text-4xl leading-tight font-medium tracking-tight",
    LEFT_SEMIBOLD:
      "font-FamiljenGrotesk text-4xl leading-tight font-semibold tracking-tight",
  },
  SUBTITLE: "font-FamiljenGrotesk text-2xl leading-snug font-medium",
  /** Multi-line intro / card summary — keep ≥ ~1.55 line-height */
  DESCRIPTION: "text-lg leading-7 font-Inter text-gray-800",
};

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
 * - Prefer TYPE.* — five steps only on conversion path
 *
 * Spacing / radius (conversion path):
 * - SPACE.SECTION ≈ 64px vertical, SPACE.BLOCK ≈ 48px, SPACE.STACK ≈ 24px
 * - RADIUS.CONTROL = rounded-md (6–8px); interactive cards use the same
 */
export const CUSTOM_STYLES = {
  SPACE: {
    /** Section vertical padding */
    SECTION: "py-16",
    SECTION_Y: "py-16",
    /** Inner block gap under a section title */
    BLOCK: "mt-6",
    /** Stack gap between related blocks */
    STACK: "gap-6",
    /** Compact band (sticky nav, campaign strip) */
    BAND: "py-7",
  },
  RADIUS: {
    /** Buttons, chips, cards, folds — one token */
    CONTROL: "rounded-md",
  },
  SECTION_CONTAINER: {
    BLUE: "bg-gray-50 w-full mx-auto py-16 h-fit border-b border-gray-200",
    WHITE: "bg-white w-full py-16 h-fit border-b border-gray-200",
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
  /**
   * Type scale (conversion path):
   * DISPLAY — page H1 · SECTION — section H2 · SUBTITLE — card/H3
   * LEDE — intro · BODY — copy · META — captions
   */
  TYPE: {
    DISPLAY:
      "font-FamiljenGrotesk text-3xl md:text-[2rem] leading-tight font-semibold tracking-tight",
    TITLE:
      "font-FamiljenGrotesk text-3xl md:text-[2rem] leading-tight font-semibold tracking-tight",
    TITLE_SEMIBOLD:
      "font-FamiljenGrotesk text-3xl md:text-[2rem] leading-tight font-semibold tracking-tight",
    SUBTITLE: "font-FamiljenGrotesk text-xl leading-snug font-semibold",
    SECTION: "font-FamiljenGrotesk text-2xl leading-snug font-semibold",
    LEDE: "text-lg leading-7 font-Inter text-gray-800",
    BODY: "text-base leading-relaxed font-Inter text-gray-800",
    META: "text-sm leading-snug font-Inter text-gray-600",
  },
  TITLE: {
    CENTER:
      "font-FamiljenGrotesk text-3xl md:text-[2rem] leading-tight font-semibold tracking-tight text-center",
    LEFT: "font-FamiljenGrotesk text-3xl md:text-[2rem] leading-tight font-semibold tracking-tight",
    LEFT_SEMIBOLD:
      "font-FamiljenGrotesk text-3xl md:text-[2rem] leading-tight font-semibold tracking-tight",
  },
  SUBTITLE: "font-FamiljenGrotesk text-xl leading-snug font-semibold",
  /** Multi-line intro / card summary — keep ≥ ~1.55 line-height */
  DESCRIPTION: "text-lg leading-7 font-Inter text-gray-800",
};

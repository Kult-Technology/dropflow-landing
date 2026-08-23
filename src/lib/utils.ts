import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The landing page adds a named fluid type scale (see `fontSize` in
 * tailwind.config.ts). tailwind-merge cannot infer those names, and would
 * otherwise treat `text-h2` as a text *colour* - so `cn("text-h2", "text-ink-900")`
 * would silently drop the size. Registering them as font sizes fixes the grouping.
 */
const FONT_SIZES = [
  "display",
  "h2",
  "h2-cta",
  "h3-bento",
  "lead",
  "lead-hero",
  "lead-cta",
  "stat",
  "stat-suffix",
  "metric",
  "metric-lg",
  "kpi",
  "hero-kpi",
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: FONT_SIZES }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

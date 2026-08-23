import type { LucideIcon } from "lucide-react";
import { KeyboardOff, RefreshCw, Store, TextCursorInput } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { Shell } from "./primitives";

type StatCard = {
  key: string;
  icon: LucideIcon;
  /** Read by the count-up hook in use-landing-motion. */
  value: number;
  suffix?: string;
  card: string;
  chip: string;
  number: string;
  caption: string;
};

export const NumbersSection = () => {
  const { numbers } = useCopy();

  const cards: StatCard[] = [
    {
      key: "oneClick",
      icon: TextCursorInput,
      value: 1,
      card: "bg-surface-tint",
      chip: "bg-white text-brand",
      number: "text-brand",
      caption: numbers.oneClick,
    },
    {
      key: "zeroFields",
      icon: KeyboardOff,
      value: 0,
      card: "bg-positive/[.09]",
      chip: "bg-white text-positive",
      number: "text-positive",
      caption: numbers.zeroFields,
    },
    {
      key: "twoPlatforms",
      icon: Store,
      value: 2,
      card: "bg-warn/[.1]",
      chip: "bg-white text-warn",
      number: "text-warn",
      caption: numbers.twoPlatforms,
    },
    {
      key: "alwaysOn",
      icon: RefreshCw,
      value: 24,
      suffix: "/7",
      card: "bg-ink-900",
      chip: "bg-white/[.12] text-white",
      number: "text-white",
      caption: numbers.alwaysOn,
    },
  ];

  return (
    <section id="numbers" className="relative bg-white px-section-x py-section-y-sm">
      <Shell className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,232px),1fr))] gap-[clamp(12px,1.6vw,18px)]">
        {cards.map(({ key, icon: Icon, value, suffix, card, chip, number, caption }) => (
          <div
            key={key}
            data-reveal="scale"
            className={cn(
              "flex min-h-[clamp(190px,20vw,232px)] flex-col justify-between gap-[26px] rounded-[20px] p-[clamp(20px,2.4vw,28px)]",
              card,
            )}
          >
            <span className={cn("flex h-[40px] w-[40px] items-center justify-center rounded-[12px]", chip)}>
              <Icon className="h-[20px] w-[20px]" aria-hidden />
            </span>
            <div>
              <div className="flex items-baseline gap-[2px]">
                <span
                  data-count={value}
                  className={cn(
                    "text-stat font-semibold",
                    number,
                  )}
                >
                  {value}
                </span>
                {suffix ? (
                  <span
                    className={cn(
                      "text-stat-suffix font-semibold",
                      number,
                    )}
                  >
                    {suffix}
                  </span>
                ) : null}
              </div>
              <div
                className={cn(
                  "mt-[12px] text-[13.5px] leading-[1.5]",
                  key === "alwaysOn" ? "text-white/[.66]" : "text-ink-600",
                )}
              >
                {caption}
              </div>
            </div>
          </div>
        ))}
      </Shell>
    </section>
  );
};

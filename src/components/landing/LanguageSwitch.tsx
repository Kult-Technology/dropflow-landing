import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LOCALES, pathForLocale, storeLocale, type Locale } from "@/i18n/locale";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark";

const shell: Record<Variant, string> = {
  light: "bg-surface-alt border-line-soft",
  dark: "bg-white/[.07] border-white/[.12]",
};

const option: Record<Variant, { on: string; off: string }> = {
  light: {
    on: "bg-white text-brand shadow-[0_1px_2px_rgba(29,37,48,.06)]",
    off: "bg-transparent text-ink-500",
  },
  dark: {
    on: "bg-white/[.16] text-white",
    off: "bg-transparent text-white/60",
  },
};

const padding: Record<Variant, string> = {
  light: "px-[9px] py-[4px]",
  dark: "px-[11px] py-[5px]",
};

const LABELS: Record<Locale, string> = { en: "English", pl: "Polski" };

export const LanguageSwitch = ({ variant = "light", className }: { variant?: Variant; className?: string }) => {
  const { locale } = useLanguage();
  const { hash } = useLocation();

  return (
    <div
      className={cn(
        "inline-flex select-none rounded-[8px] border p-[3px] text-[11.5px] font-medium",
        shell[variant],
        className,
      )}
    >
      {LOCALES.map((option_) => {
        const active = locale === option_;
        return (
          /*
           * Real anchors, not buttons: a crawler follows the href to discover the
           * alternate URL, and the visitor keeps middle-click / open-in-new-tab.
           */
          <Link
            key={option_}
            to={pathForLocale(option_, hash)}
            hrefLang={option_}
            lang={option_}
            aria-label={LABELS[option_]}
            aria-current={active ? "true" : undefined}
            onClick={() => storeLocale(option_)}
            className={cn(
              "rounded-[6px] font-[inherit] text-[inherit] transition-colors",
              padding[variant],
              active ? option[variant].on : option[variant].off,
            )}
          >
            {option_.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
};

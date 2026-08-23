import { Check, CircleCheck, Globe, ShieldCheck, Zap } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import aliexpressLogo from "@/assets/brand/aliexpress.svg";
import chromeLogo from "@/assets/brand/chrome.svg";
import dropflowIcon from "@/assets/brand/dropflow-icon.svg";
import dropflowIconWhite from "@/assets/brand/dropflow-icon-white.svg";
import { Shell } from "./primitives";

/** Sweeping highlight that runs across each autofilled field, staggered per row. */
const SWEEP_GRADIENT = "linear-gradient(90deg,transparent,rgba(5,94,209,.16),transparent)";

export const ExtensionSection = () => {
  const { extension } = useCopy();

  const features = [
    { icon: Zap, className: "text-brand", label: extension.featureFill },
    { icon: ShieldCheck, className: "text-positive", label: extension.featureLocal },
    { icon: Globe, className: "text-brand", label: extension.featureLanguages },
  ];

  const fields = [
    // Full class strings so Tailwind's scanner emits each staggered sweep animation.
    { sweep: "animate-[dfSweep_3.4s_ease-in-out_0s_infinite]", label: extension.fieldRecipient, value: "Anna Kowalska" },
    { sweep: "animate-[dfSweep_3.4s_ease-in-out_.35s_infinite]", label: extension.fieldLocker, value: "KRA01M · ul. Długa 12" },
    { sweep: "animate-[dfSweep_3.4s_ease-in-out_.7s_infinite]", label: extension.fieldPhone, value: "+48\u00a0601 ··· ···" },
    { sweep: "animate-[dfSweep_3.4s_ease-in-out_1.05s_infinite]", label: extension.fieldCity, value: "Kraków · 30-002" },
  ];

  return (
    <section
      id="extension"
      className="relative border-y border-line-soft bg-surface px-section-x py-section-y"
    >
      <Shell className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(28px,3.4vw,52px)]">
        <div data-reveal>
          <span className="inline-flex items-center gap-[9px] rounded-full border border-line bg-white px-[13px] py-[6px] font-mono text-[10.5px] uppercase tracking-[.14em] text-ink-700">
            <img src={chromeLogo} alt="" className="h-[15px] w-[15px] object-contain" />
            {extension.badge}
          </span>

          <h2 className="mt-[18px] text-h2 font-semibold text-ink-900">{extension.heading}</h2>

          <p className="mt-[20px] max-w-[520px] text-lead font-light text-ink-600">{extension.lead}</p>

          <div className="mt-[26px] flex flex-col gap-[10px]">
            {features.map(({ icon: Icon, className, label }) => (
              <div
                key={label}
                className="flex items-center gap-[11px] rounded-[12px] border border-line bg-white px-[15px] py-[13px] text-[13.5px] text-ink-800"
              >
                <Icon className={cn("h-[17px] w-[17px] flex-none", className)} aria-hidden />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-[22px] flex flex-wrap gap-[9px]">
            <span className="inline-flex items-center gap-[8px] rounded-full border border-line bg-white px-[13px] py-[7px] text-[12.5px] text-ink-700">
              <img src={chromeLogo} alt="" className="h-[15px] w-[15px]" />
              Chrome · Edge · Brave · Arc · Opera
            </span>
            <span className="rounded-full border border-line bg-white px-[13px] py-[7px] font-mono text-[11.5px] text-ink-700">
              Manifest V3 · v1.2.0
            </span>
          </div>
        </div>

        <div
          data-reveal="scale"
          data-parallax="0.05"
          className="overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_34px_74px_-40px_rgba(20,40,80,.3)]"
        >
          <div className="flex items-center gap-[8px] border-b border-line bg-surface px-[14px] py-[12px]">
            <span className="h-[9px] w-[9px] rounded-full bg-line-soft" />
            <span className="h-[9px] w-[9px] rounded-full bg-line-soft" />
            <span className="h-[9px] w-[9px] rounded-full bg-line-soft" />
            <span className="ml-[10px] inline-flex items-center gap-[7px] rounded-[7px] border border-line-soft bg-white px-[11px] py-[4px] font-mono text-[10.5px] text-ink-400">
              <img src={aliexpressLogo} alt="" className="h-[12px] w-[12px] rounded-[3px]" />
              aliexpress.com/order
            </span>
            <span className="ml-auto inline-flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-surface-tint">
              <img src={dropflowIcon} alt="" className="h-[15px] w-[11px] object-contain" />
            </span>
          </div>

          <div className="bg-surface p-[clamp(16px,2vw,22px)]">
            <div className="flex items-center gap-[11px] rounded-[12px] bg-ink-900 px-[14px] py-[12px]">
              <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-white/10">
                <img src={dropflowIconWhite} alt="" className="h-[16px] w-[12px] object-contain" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12px] font-medium text-white">{extension.mockOrderId}</span>
                <span className="block font-mono text-[11px] text-white/[.55]">24817</span>
              </span>
              <span className="flex-none rounded-[8px] bg-white px-[12px] py-[6px] text-[11.5px] font-semibold text-night">
                {extension.mockFill}
              </span>
            </div>

            <div className="mt-[12px] flex flex-col gap-[9px]">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="relative overflow-hidden rounded-[10px] border border-positive/35 bg-white px-[12px] py-[10px]"
                >
                  <div className="font-mono text-[9.5px] uppercase tracking-[.1em] text-ink-200">
                    {field.label}
                  </div>
                  <div className="mt-[4px] flex items-center gap-[8px]">
                    <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[12.5px] text-ink-800">
                      {field.value}
                    </span>
                    <Check className="h-[14px] w-[14px] flex-none text-positive" aria-hidden />
                  </div>
                  <span
                    className={cn("pointer-events-none absolute inset-0", field.sweep)}
                    /* Gradient fill has no Tailwind equivalent */
                    style={{ backgroundImage: SWEEP_GRADIENT }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-[12px] flex items-center gap-[9px] rounded-[10px] border border-positive/[.28] bg-positive/[.08] px-[13px] py-[11px]">
              <CircleCheck className="h-[16px] w-[16px] text-positive" aria-hidden />
              <span className="text-[12.5px] text-positive-deep">{extension.mockValidated}</span>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
};

import { Check, Globe } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { SECTION_IDS } from "@/lib/site";
import aliexpress from "@/assets/brand/aliexpress.svg";
import shoper from "@/assets/brand/shoper.svg";
import shopify from "@/assets/brand/shopify.svg";
import { Eyebrow, SectionHeading, Shell } from "./primitives";

/** Destination markets shown as chips - country codes need no translation. */
const MARKET_CODES = ["PL", "CZ", "DE", "SK", "HU", "RO", "FR", "IT", "ES", "+"];

const CHIP = "rounded-[8px] border border-white/[.12] bg-white/[.08] px-[11px] py-[6px] font-mono text-[11px] text-white/[.75]";

export const Integrations = () => {
  const { integrations } = useCopy();

  const aliChecks = [integrations.aliAutoOrder, integrations.aliTrackingSync, integrations.aliTokenRefresh];

  return (
    <section
      id={SECTION_IDS.integrations}
      className="relative overflow-hidden border-y border-line-soft bg-surface px-section-x py-section-y"
    >
      {/* Radial blob - layered gradient stops Tailwind cannot express as a utility. */}
      <div
        data-parallax="-0.1"
        className="pointer-events-none absolute -right-[140px] -top-[160px] h-[600px] w-[600px]"
        style={{ background: "radial-gradient(circle,rgba(5,94,209,.1),transparent 66%)" }}
      />

      <Shell className="relative">
        <div data-reveal className="max-w-[720px]">
          <Eyebrow>{integrations.eyebrow}</Eyebrow>
          <SectionHeading>{integrations.heading}</SectionHeading>
        </div>

        <div className="mt-[clamp(32px,4vw,52px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-[clamp(14px,1.8vw,20px)]">
          <div
            data-bento-wide
            data-reveal="scale"
            className="relative flex min-h-[300px] flex-col justify-between gap-[26px] overflow-hidden rounded-[22px] bg-[linear-gradient(150deg,#1a75e1,#055ed1)] p-[clamp(24px,2.8vw,34px)] shadow-[0_26px_60px_-32px_rgba(5,94,209,.6)] bento:col-span-2"
          >
            <div
              className="pointer-events-none absolute inset-auto -bottom-[90px] -right-[60px] h-[280px] w-[280px]"
              style={{ background: "radial-gradient(circle,rgba(255,255,255,.18),transparent 68%)" }}
            />
            <div className="relative">
              <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-white/60">
                {integrations.platformsEyebrow}
              </span>
              <h3 className="mt-[12px] text-h3-bento font-semibold text-white">{integrations.platformsHeading}</h3>
              <p className="mt-[14px] max-w-[420px] text-[14.5px] font-light leading-[1.6] text-white/[.75]">
                {integrations.platformsBody}
              </p>
            </div>
            <div className="relative flex flex-wrap gap-[12px]">
              <span className="inline-flex items-center gap-[11px] rounded-[14px] bg-white/[.94] px-[18px] py-[12px]">
                <img src={shoper} alt="Shoper" className="h-[26px] w-[26px] rounded-[7px] object-contain" />
                <span className="text-[15px] font-semibold text-ink-900">Shoper</span>
              </span>
              <span className="inline-flex items-center gap-[11px] rounded-[14px] bg-white/[.94] px-[18px] py-[12px]">
                <img src={shopify} alt="Shopify" className="h-[26px] w-[26px] object-contain" />
                <span className="text-[15px] font-semibold text-ink-900">Shopify</span>
              </span>
            </div>
          </div>

          <div
            data-reveal="scale"
            className="flex min-h-[300px] flex-col justify-between gap-[22px] rounded-[22px] border border-line bg-white p-[clamp(22px,2.6vw,30px)]"
          >
            <div>
              <img src={aliexpress} alt="AliExpress" className="h-[44px] w-[44px] rounded-[12px] object-contain" />
              <h3 className="mt-[16px] text-[19px] font-semibold text-ink-900">AliExpress</h3>
              <p className="mt-[12px] text-[14.5px] font-light leading-[1.6] text-ink-600">{integrations.aliBody}</p>
            </div>
            <ul className="flex flex-col gap-[9px] font-mono text-[11.5px] text-ink-700">
              {aliChecks.map((label) => (
                <li key={label} className="flex items-center gap-[8px]">
                  <Check className="h-[14px] w-[14px] text-positive" aria-hidden />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-reveal="scale"
            className="flex min-h-[300px] flex-col justify-between gap-[22px] rounded-[22px] bg-ink-900 p-[clamp(22px,2.6vw,30px)]"
          >
            <div>
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-white/10 text-white">
                <Globe className="h-[23px] w-[23px]" aria-hidden />
              </span>
              <h3 className="mt-[16px] text-[19px] font-semibold text-white">{integrations.marketsHeading}</h3>
              <p className="mt-[12px] text-[14.5px] font-light leading-[1.6] text-white/[.66]">
                {integrations.marketsBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-[7px]">
              {MARKET_CODES.map((code) => (
                <span key={code} className={CHIP}>
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="mt-[clamp(16px,2vw,20px)] flex flex-wrap items-center gap-[clamp(14px,2vw,26px)] rounded-[18px] border border-line border-l-4 border-l-brand bg-white p-[clamp(22px,2.6vw,30px)]"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-ink-400">
            {integrations.whyEyebrow}
          </span>
          <span className="min-w-[280px] flex-1 text-[clamp(15px,1.5vw,18px)] font-medium leading-[1.5] text-ink-900">
            {integrations.whyBody}
          </span>
        </div>
      </Shell>
    </section>
  );
};

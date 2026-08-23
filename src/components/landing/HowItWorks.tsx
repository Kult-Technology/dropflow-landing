import { useEffect, useRef, useState } from "react";
import { Bot, Check, Link2, MoveRight, Package, Plug, Plus, RefreshCw, Scale, Truck } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { SECTION_IDS } from "@/lib/site";
import { cn } from "@/lib/utils";
import aliexpress from "@/assets/brand/aliexpress.svg";
import shoper from "@/assets/brand/shoper.svg";
import shopify from "@/assets/brand/shopify.svg";
import { Eyebrow, SectionHeading, SectionLead, Shell } from "./primitives";

const STEP_ICONS = [Plug, Link2, Bot, Truck];

/**
 * Distance from the top of the document, in layout terms.
 *
 * Deliberately not getBoundingClientRect(): that includes transforms, and the
 * panels carry a reveal animation that translates them 30px and scales them to
 * .965. While it runs, the measured box swings ~50px, which was enough to flip
 * the active step back and forth - the flicker seen when scrolling in. offsetTop
 * and offsetHeight ignore transforms, so the rail tracks the settled layout.
 */
const layoutTop = (el: HTMLElement): number => {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
};
const STEP_COUNT = STEP_ICONS.length;

/** Shared chrome for the three light panels. */
const panelClass =
  "flex min-h-[clamp(300px,32vw,382px)] flex-col justify-center gap-[16px] rounded-[22px] border border-line bg-surface p-[clamp(20px,2.6vw,32px)]";

/** "step 0N" pill on a light panel. */
const stepBadgeClass =
  "inline-flex items-center gap-[8px] self-start rounded-full border border-line bg-white px-[11px] py-[5px] font-mono text-[10px] uppercase tracking-[.12em] text-ink-400";

export const HowItWorks = () => {
  const { how } = useCopy();
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  /*
   * The panel the reading line is *inside* drives the rail.
   *
   * Measuring every panel each frame rather than using an IntersectionObserver:
   * an observer callback only receives the panels whose intersection changed, so
   * picking the best of that batch highlights a panel that is leaving rather than
   * the one being read, and a panel taller than the observed band never reaches
   * the higher thresholds at all.
   *
   * It only reassigns when a panel actually contains the line: picking the
   * *nearest* panel instead flipped back and forth in the gap between two
   * panels. In a gap the previous step simply stays lit.
   */
  useEffect(() => {
    let queued = false;

    const update = () => {
      queued = false;
      const readingLine = window.innerHeight * 0.45;

      const line = window.scrollY + readingLine;
      const inside = panelRefs.current.findIndex((panel) => {
        if (!panel) return false;
        const top = layoutTop(panel);
        return top <= line && top + panel.offsetHeight >= line;
      });

      if (inside >= 0) setActiveIndex(inside);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goToPanel = (index: number) => {
    const panel = panelRefs.current[index];
    if (!panel) return;
    window.scrollTo({ top: layoutTop(panel) - 140, behavior: "smooth" });
  };

  const pad = (value: number) => String(value).padStart(2, "0");

  return (
    <section id={SECTION_IDS.how} className="relative bg-white px-section-x py-section-y">
      <Shell>
        <div data-reveal className="max-w-[720px]">
          <Eyebrow>{how.eyebrow}</Eyebrow>
          <SectionHeading>{how.heading}</SectionHeading>
          <SectionLead className="max-w-[600px]">{how.lead}</SectionLead>
        </div>

        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-[clamp(24px,3vw,48px)]">
          {/*
            Sticky only once the grid is genuinely two columns. Stacked on one
            column the rail and the panels are separate rows, but the browser
            lets a sticky grid item travel the whole grid rather than its own
            row - so it stayed pinned over the panels for the entire section.
          */}
          <div className="flex flex-col gap-[6px] pipe:sticky pipe:top-[96px]">
            {how.steps.map((step, index) => {
              const Icon = STEP_ICONS[index];
              const active = index === activeIndex;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => goToPanel(index)}
                  aria-current={active ? "step" : undefined}
                  /*
                    Below the two-column breakpoint the rail sits above the panels
                    as a plain list, so there is nothing for a highlight to track:
                    every step stays untinted and fully legible, and the active
                    styling only switches on once the rail is sticky beside them.
                  */
                  className={cn(
                    "flex items-start gap-[14px] rounded-[14px] border border-transparent bg-transparent px-[18px] py-[16px] text-left transition-[background-color,border-color,transform] [transition-duration:350ms] ease-out",
                    active && "pipe:translate-x-[2px] pipe:border-line pipe:bg-surface-tint",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[10px] bg-surface-alt font-mono text-[12px] text-ink-400 transition-colors [transition-duration:350ms]",
                      active && "pipe:bg-brand pipe:text-white",
                    )}
                  >
                    <Icon className="h-[17px] w-[17px]" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block text-[15.5px] font-semibold text-ink-900 transition-colors [transition-duration:350ms]",
                        !active && "pipe:text-ink-400",
                      )}
                    >
                      {step.title}
                    </span>
                    <span
                      className={cn(
                        "mt-[6px] block text-[13.5px] font-light leading-[1.55] text-ink-600 transition-colors [transition-duration:350ms]",
                        !active && "pipe:text-ink-300",
                      )}
                    >
                      {step.desc}
                    </span>
                  </span>
                </button>
              );
            })}

            <div className="mt-[14px] flex items-center gap-[10px] pl-[18px]">
              <span className="relative h-[3px] flex-1 overflow-hidden rounded-[2px] bg-line-soft">
                <span
                  className="absolute inset-y-0 left-0 rounded-[2px] bg-brand transition-[width] [transition-duration:450ms] [transition-timing-function:cubic-bezier(.2,.8,.2,1)]"
                  /* Width tracks the active step, so it has to be inline. */
                  style={{ width: `${((activeIndex + 1) / STEP_COUNT) * 100}%` }}
                />
              </span>
              <span className="font-mono text-[11px] text-ink-400">
                {pad(activeIndex + 1)} / {pad(STEP_COUNT)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(16px,2vw,24px)]">
            {/* 01 - connected stores */}
            <div
              ref={(node) => {
                panelRefs.current[0] = node;
              }}
              data-reveal="scale"
              className={panelClass}
            >
              <span className={stepBadgeClass}>{how.stepLabel} 01</span>
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[14px] rounded-[14px] border border-line bg-white px-[18px] py-[16px]">
                  <img src={shoper} alt="Shoper" className="h-[30px] w-[30px] rounded-[8px] object-contain" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-semibold text-ink-900">Shoper</span>
                    <span className="block font-mono text-[11px] text-ink-400">4 {how.stores}</span>
                  </span>
                  <span className="inline-flex items-center gap-[6px] rounded-full bg-positive/10 px-[10px] py-[5px] text-[11.5px] font-semibold text-positive">
                    <Check className="h-[13px] w-[13px]" aria-hidden />
                    {how.connected}
                  </span>
                </div>
                <div className="flex items-center gap-[14px] rounded-[14px] border border-line bg-white px-[18px] py-[16px]">
                  <img src={shopify} alt="Shopify" className="h-[30px] w-[30px] object-contain" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-semibold text-ink-900">Shopify</span>
                    <span className="block font-mono text-[11px] text-ink-400">2 {how.stores}</span>
                  </span>
                  <span className="inline-flex items-center gap-[6px] rounded-full bg-positive/10 px-[10px] py-[5px] text-[11.5px] font-semibold text-positive">
                    <Check className="h-[13px] w-[13px]" aria-hidden />
                    {how.connected}
                  </span>
                </div>
                <div className="flex items-center gap-[14px] rounded-[14px] border border-dashed border-line-dashed px-[18px] py-[16px]">
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-surface-tint text-brand">
                    <Plus className="h-[17px] w-[17px]" aria-hidden />
                  </span>
                  <span className="text-[13.5px] text-ink-500">{how.addStore}</span>
                </div>
              </div>
            </div>

            {/* 02 - mapping progress */}
            <div
              ref={(node) => {
                panelRefs.current[1] = node;
              }}
              data-reveal="scale"
              className={panelClass}
            >
              <span className={stepBadgeClass}>{how.stepLabel} 02</span>
              <div className="flex flex-col gap-[12px] rounded-[16px] border border-line bg-white p-[18px]">
                <div>
                  <div className="mb-[8px] flex items-center justify-between">
                    <span className="flex items-center gap-[8px] text-[13.5px] font-medium text-brand">
                      <Link2 className="h-[15px] w-[15px]" aria-hidden />
                      {how.storeLinks}
                    </span>
                    <span className="text-[13px] text-ink-400">
                      <b className="text-ink-900">1&nbsp;284</b> / 1 402
                    </span>
                  </div>
                  <div className="h-[9px] overflow-hidden rounded-full bg-surface-alt">
                    <span className="block h-full w-[91.6%] rounded-full bg-brand" />
                  </div>
                </div>
                <div>
                  <div className="mb-[8px] flex items-center justify-between">
                    <span className="flex items-center gap-[8px] text-[13.5px] font-medium text-warn">
                      <Plug className="h-[15px] w-[15px]" aria-hidden />
                      {how.supplierMapping}
                    </span>
                    <span className="text-[13px] text-ink-400">
                      <b className="text-ink-900">1&nbsp;106</b> / 1 402
                    </span>
                  </div>
                  <div className="h-[9px] overflow-hidden rounded-full bg-surface-alt">
                    <span className="block h-full w-[78.9%] rounded-full bg-warn" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-[8px]">
                <span className="inline-flex items-center gap-[7px] rounded-[10px] border border-line bg-white px-[12px] py-[8px] font-mono text-[11.5px] text-ink-700">
                  <img src={shopify} alt="" className="h-[14px] w-[14px]" />
                  HOODIE-BLK-L
                </span>
                <MoveRight className="h-[16px] w-[16px] self-center text-ink-400" aria-hidden />
                <span className="inline-flex items-center gap-[7px] rounded-[10px] border border-line bg-white px-[12px] py-[8px] font-mono text-[11.5px] text-ink-700">
                  <img src={aliexpress} alt="" className="h-[14px] w-[14px] rounded-[3px]" />
                  1005006... · Black / L
                </span>
              </div>
            </div>

            {/* 03 - the dark automation panel */}
            <div
              ref={(node) => {
                panelRefs.current[2] = node;
              }}
              data-reveal="scale"
              className="flex min-h-[clamp(300px,32vw,382px)] flex-col justify-center gap-[16px] rounded-[22px] border border-line p-[clamp(20px,2.6vw,32px)]"
              /* Angled two-stop gradient - no Tailwind utility covers 155deg + these stops. */
              style={{ backgroundImage: "linear-gradient(155deg,#141c26,#0b1119)" }}
            >
              <span className="inline-flex items-center gap-[8px] self-start rounded-full bg-white/10 px-[11px] py-[5px] font-mono text-[10px] uppercase tracking-[.12em] text-white/[.55]">
                {how.stepLabel} 03
              </span>
              <div className="flex items-center gap-[12px] rounded-[14px] border border-white/[.12] bg-white/[.06] px-[16px] py-[14px]">
                <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] bg-white/10 text-white">
                  <Bot className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13.5px] font-medium text-white">24 {how.ordersReady}</span>
                  <span className="block text-[11px] text-white/50">{how.ordersMeta}</span>
                </span>
                <span className="flex-none rounded-[9px] bg-white px-[13px] py-[7px] text-[12px] font-semibold text-night">
                  {how.place}
                </span>
              </div>
              <div className="flex flex-col gap-[8px] font-mono text-[11.5px] text-white/[.72]">
                <span className="flex items-center gap-[9px]">
                  <Check className="h-[14px] w-[14px] text-positive-bright" aria-hidden />
                  {how.addressCleaned}
                </span>
                <span className="flex items-center gap-[9px]">
                  <Check className="h-[14px] w-[14px] text-positive-bright" aria-hidden />
                  {how.variantResolved}
                </span>
                <span className="flex items-center gap-[9px]">
                  <Check className="h-[14px] w-[14px] text-positive-bright" aria-hidden />
                  {how.orderPlaced}
                  <span className="animate-df-blink" aria-hidden>
                    ▍
                  </span>
                </span>
              </div>
            </div>

            {/* 04 - tracking timeline */}
            <div
              ref={(node) => {
                panelRefs.current[3] = node;
              }}
              data-reveal="scale"
              className={panelClass}
            >
              <span className={stepBadgeClass}>{how.stepLabel} 04</span>
              <div className="flex flex-col gap-0 rounded-[16px] border border-line bg-white p-[18px]">
                <div className="flex gap-[14px]">
                  <span className="flex flex-none flex-col items-center">
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-surface-tint text-brand">
                      <Package className="h-[14px] w-[14px]" aria-hidden />
                    </span>
                    <span className="my-[4px] w-[2px] flex-1 bg-line-soft" />
                  </span>
                  <span className="pb-[16px]">
                    <span className="block text-[13.5px] font-medium text-ink-900">{how.trackingReceived}</span>
                    <span className="block font-mono text-[11.5px] text-brand">LP0058231PL</span>
                  </span>
                </div>
                <div className="flex gap-[14px]">
                  <span className="flex flex-none flex-col items-center">
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-surface-tint text-brand">
                      <RefreshCw className="h-[14px] w-[14px]" aria-hidden />
                    </span>
                    <span className="my-[4px] w-[2px] flex-1 bg-line-soft" />
                  </span>
                  <span className="pb-[16px]">
                    <span className="block text-[13.5px] font-medium text-ink-900">{how.statusWritten}</span>
                    <span className="block text-[11.5px] text-ink-500">{how.customerNotified}</span>
                  </span>
                </div>
                <div className="flex gap-[14px]">
                  <span className="flex flex-none flex-col items-center">
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-positive/[.12] text-positive">
                      <Scale className="h-[14px] w-[14px]" aria-hidden />
                    </span>
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-medium text-ink-900">{how.costBooked}</span>
                    <span className="block text-[11.5px] text-ink-500">{how.marginRecalculated}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
};

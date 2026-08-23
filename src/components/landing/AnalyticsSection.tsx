import { useEffect, useRef, useState, type ReactNode } from "react";
import { AlertTriangle, BarChart3, ChevronRight, Package, Repeat, Users } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { Eyebrow, SectionHeading, SectionLead, Shell } from "./primitives";

/** The panel area cycles to the next tab every 5.2s until the visitor takes over. */
const ROTATE_MS = 5200;
const TAB_COUNT = 3;

/** Card shell shared by the three light panels. */
const PanelCard = ({
  className,
  reveal,
  children,
}: {
  className?: string;
  reveal?: "scale";
  children: ReactNode;
}) => (
  <div
    data-reveal={reveal}
    className={cn(
      "rounded-[20px] border border-line bg-surface p-[clamp(20px,2.4vw,28px)]",
      className,
    )}
  >
    {children}
  </div>
);

/** Inner white sheet the light panels put their chart on. */
const CardSheet = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div
    className={cn("rounded-[14px] border border-line bg-white p-[clamp(16px,2vw,20px)]", className)}
  >
    {children}
  </div>
);

/** One labelled horizontal progress bar (product sales / customer segments). */
const MeterRow = ({
  label,
  value,
  width,
  fill,
}: {
  label: ReactNode;
  value: string;
  width: string;
  fill: string;
}) => (
  <div>
    <div className="mb-[6px] flex items-center justify-between">
      <span className="text-[13px] text-ink-800">{label}</span>
      <span className="font-mono text-[11.5px] text-ink-500">{value}</span>
    </div>
    <div className="h-[8px] overflow-hidden rounded-[999px] bg-surface-alt">
      <span className={cn("block h-full rounded-[999px]", width, fill)} />
    </div>
  </div>
);

const FinancePanel = ({ reveal }: { reveal?: "scale" }) => {
  const { analytics } = useCopy();

  const kpis = [
    { label: analytics.margin, value: "60\u00a0004,49\u00a0zł", tone: "text-positive" },
    { label: analytics.markup, value: "48,81%", tone: "text-positive" },
    { label: analytics.avgMarginPerOrder, value: "43,17\u00a0zł", tone: "text-positive" },
    { label: analytics.supplierCost, value: "122\u00a0936\u00a0zł", tone: "text-ink-800" },
  ];

  // Margin per store, six months of fixed heights ending on the tallest bar.
  const bars = [
    { height: "h-[46%]", fill: "bg-white/[.14]" },
    { height: "h-[62%]", fill: "bg-white/[.14]" },
    { height: "h-[54%]", fill: "bg-brand-pale" },
    { height: "h-[78%]", fill: "bg-white/[.14]" },
    { height: "h-[70%]", fill: "bg-brand-light" },
    { height: "h-[92%]", fill: "bg-brand" },
  ];

  return (
    <>
      <PanelCard reveal={reveal}>
        <CardSheet>
          <div className="flex items-center gap-[8px]">
            <BarChart3 className="h-[18px] w-[18px] text-brand" aria-hidden />
            <h3 className="text-[14px] font-semibold text-ink-800">{analytics.financeTitle}</h3>
            <span className="ml-auto rounded-[12px] bg-surface-tint px-[8px] py-[3px] text-[11px] font-medium text-brand">
              {analytics.financeScope}
            </span>
          </div>

          <div className="mt-[16px] flex items-baseline justify-between gap-[12px]">
            <span className="text-[13px] text-ink-500">{analytics.revenue}</span>
            <span className="text-kpi font-semibold text-ink-800">182&nbsp;940,50&nbsp;zł</span>
          </div>

          <div className="mt-[10px] flex h-[12px] overflow-hidden rounded-[6px] bg-line-soft">
            <span className="h-full w-[32.8%] bg-positive" />
            <span className="h-full w-[67.2%] bg-ink-200" />
          </div>

          <div className="mt-[10px] flex flex-wrap gap-x-[20px] gap-y-[6px] text-[12px] text-ink-500">
            <span className="inline-flex items-center gap-[6px]">
              <span className="h-[8px] w-[8px] rounded-[2px] bg-positive" />
              {analytics.margin} · 32,80%
            </span>
            <span className="inline-flex items-center gap-[6px]">
              <span className="h-[8px] w-[8px] rounded-[2px] bg-ink-200" />
              {analytics.aliexpressCost} · 67,20%
            </span>
          </div>

          {/*
            155px, not the design's 132px: at 132px the tile is narrower than
            "60\u00a0004,49\u00a0zł" renders (123px of text + 30px padding), so the
            currency dropped onto its own line at every width below ~1400px.
          */}
          <div className="mt-[18px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,155px),1fr))] gap-[12px]">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-[11px] bg-surface px-[15px] py-[13px]">
                <div className="text-[12px] text-ink-500">{kpi.label}</div>
                <div className={cn("mt-[5px] text-[19px] font-semibold", kpi.tone)}>{kpi.value}</div>
              </div>
            ))}
          </div>
        </CardSheet>
      </PanelCard>

      <div
        data-reveal={reveal}
        className="flex flex-col gap-[14px] rounded-[20px] bg-ink-900 p-[clamp(20px,2.4vw,28px)]"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-white/40">
          {analytics.marginPerStore}
        </span>
        <div className="flex min-h-[clamp(140px,16vw,210px)] flex-1 items-end gap-[clamp(8px,1.2vw,14px)] pt-[10px]">
          {bars.map((bar, index) => (
            <span key={index} className={cn("flex-1 rounded-t-[6px]", bar.height, bar.fill)} />
          ))}
        </div>
        <div className="flex justify-between font-mono text-[10.5px] text-white/40">
          <span>Mar</span>
          <span>Aug</span>
        </div>
      </div>
    </>
  );
};

const ProductsPanel = (_: { reveal?: "scale" }) => {
  const { analytics } = useCopy();

  const products = [
    { name: "Oversized hoodie", value: "14\u00a0208\u00a0zł", width: "w-[92%]", fill: "bg-brand" },
    { name: "Kigurumi set", value: "11\u00a0640\u00a0zł", width: "w-[74%]", fill: "bg-brand" },
    { name: "LED strip 5 m", value: "8\u00a0902\u00a0zł", width: "w-[58%]", fill: "bg-brand-light" },
    { name: "Anime figure XL", value: "6\u00a0118\u00a0zł", width: "w-[41%]", fill: "bg-brand-pale" },
    { name: "Zodiac necklace", value: "3\u00a0744\u00a0zł", width: "w-[26%]", fill: "bg-brand-pale" },
  ];

  return (
    <>
      <PanelCard>
        <CardSheet>
          <div className="mb-[18px] flex items-center gap-[8px]">
            <Package className="h-[18px] w-[18px] text-brand" aria-hidden />
            <h3 className="text-[14px] font-semibold text-ink-800">{analytics.productSales}</h3>
            <span className="ml-auto text-[11px] text-ink-200">{analytics.topByMargin}</span>
          </div>
          <div className="flex flex-col gap-[14px]">
            {products.map((product) => (
              <MeterRow
                key={product.name}
                label={product.name}
                value={product.value}
                width={product.width}
                fill={product.fill}
              />
            ))}
          </div>
        </CardSheet>
      </PanelCard>

      <PanelCard className="flex flex-col gap-[14px]">
        <div className="rounded-[14px] border border-line bg-white p-[18px]">
          <span className="text-[12px] text-ink-500">{analytics.profitConcentration}</span>
          <div className="mt-[8px] text-metric font-semibold text-ink-900">18%</div>
          <p className="mt-[8px] text-[13px] leading-[1.55] text-ink-600">
            {analytics.profitConcentrationBody}
          </p>
        </div>
        <div className="flex-1 rounded-[14px] border border-line bg-white p-[18px]">
          <span className="text-[12px] text-ink-500">{analytics.needsCorrection}</span>
          <div className="mt-[8px] flex items-baseline gap-[10px]">
            <span className="text-metric font-semibold text-warn">14</span>
            <span className="text-[12.5px] text-ink-500">{analytics.mappings}</span>
          </div>
          <p className="mt-[8px] text-[13px] leading-[1.55] text-ink-600">
            {analytics.needsCorrectionBody}
          </p>
        </div>
      </PanelCard>
    </>
  );
};

const CustomersPanel = (_: { reveal?: "scale" }) => {
  const { analytics } = useCopy();

  const segments = [
    { label: analytics.repeatBuyers, value: "1\u00a0204", width: "w-[34%]", fill: "bg-positive" },
    { label: analytics.oneTimeBuyers, value: "3\u00a0118", width: "w-[88%]", fill: "bg-brand" },
    { label: analytics.highValue, value: "662", width: "w-[19%]", fill: "bg-warn" },
  ];

  return (
    <>
      <PanelCard>
        <CardSheet>
          <div className="mb-[18px] flex items-center gap-[8px]">
            <Users className="h-[18px] w-[18px] text-brand" aria-hidden />
            <h3 className="text-[14px] font-semibold text-ink-800">{analytics.customerSegments}</h3>
          </div>
          <div className="flex flex-col gap-[14px]">
            {segments.map((segment) => (
              <MeterRow
                key={segment.label}
                label={segment.label}
                value={segment.value}
                width={segment.width}
                fill={segment.fill}
              />
            ))}
          </div>
        </CardSheet>
      </PanelCard>

      <div className="flex flex-col gap-[14px] rounded-[20px] bg-ink-900 p-[clamp(20px,2.4vw,28px)]">
        <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-white/40">
          {analytics.fulfilmentTime}
        </span>
        <div className="flex items-baseline gap-[10px]">
          <span className="text-metric-lg font-semibold text-white">11,4</span>
          <span className="text-[13px] text-white/50">{analytics.fulfilmentTimeUnit}</span>
        </div>
        <div className="mt-[6px] flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px] rounded-[12px] border border-white/10 bg-white/[.06] px-[14px] py-[12px]">
            <AlertTriangle className="h-[16px] w-[16px] text-warn-bright" aria-hidden />
            <span className="flex-1 text-[13px] text-white/80">12 {analytics.stuckOrders}</span>
            <ChevronRight className="h-[15px] w-[15px] text-white/40" aria-hidden />
          </div>
          <div className="flex items-center gap-[10px] rounded-[12px] border border-white/10 bg-white/[.06] px-[14px] py-[12px]">
            <Repeat className="h-[16px] w-[16px] text-positive-bright" aria-hidden />
            <span className="flex-1 text-[13px] text-white/80">27,8% {analytics.repeatRate}</span>
            <ChevronRight className="h-[15px] w-[15px] text-white/40" aria-hidden />
          </div>
        </div>
      </div>
    </>
  );
};

/*
 * Tab order, and which panel keeps the design's scale-in reveal. Only Finance
 * carries it, matching the source.
 */
const PANELS: Array<{ Panel: (props: { reveal?: "scale" }) => ReactNode; reveal?: "scale" }> = [
  { Panel: FinancePanel, reveal: "scale" },
  { Panel: ProductsPanel },
  { Panel: CustomersPanel },
];

export const AnalyticsSection = () => {
  const { analytics } = useCopy();
  const [activeTab, setActiveTab] = useState(0);
  const [locked, setLocked] = useState(false);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (locked) return;

    const id = window.setInterval(() => {
      const panels = panelsRef.current;
      if (!panels) return;
      // Only rotate while the panel area is actually on screen.
      const rect = panels.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      setActiveTab((current) => (current + 1) % TAB_COUNT);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [locked]);

  const tabs = [
    { label: analytics.tabFinance, Icon: BarChart3 },
    { label: analytics.tabProducts, Icon: Package },
    { label: analytics.tabCustomers, Icon: Users },
  ];

  return (
    <section id="analytics" className="relative bg-white px-section-x py-section-y">
      <Shell>
        <div data-reveal className="max-w-[720px]">
          <Eyebrow>{analytics.eyebrow}</Eyebrow>
          <SectionHeading>{analytics.heading}</SectionHeading>
          <SectionLead className="max-w-[620px]">{analytics.lead}</SectionLead>
        </div>

        <div
          data-reveal
          role="tablist"
          aria-label={analytics.tabsLabel}
          className="mt-[clamp(28px,3.4vw,40px)] grid w-full grid-cols-3 gap-[8px] rounded-[14px] border border-line-soft bg-surface p-[6px] sm:flex sm:w-max sm:max-w-full"
        >
          {tabs.map((tab, index) => {
            const active = index === activeTab;
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                id={`analytics-tab-${index}`}
                aria-selected={active}
                aria-controls={`analytics-panel-${index}`}
                onClick={() => {
                  setActiveTab(index);
                  setLocked(true); // a deliberate pick stops the auto-rotation for good
                }}
                className={cn(
                  "inline-flex items-center justify-center gap-[8px] rounded-[10px] border px-[10px] py-[10px] text-[13.5px] font-medium transition-[background-color,color,border-color] [transition-duration:250ms] [transition-timing-function:ease] sm:justify-start sm:px-[18px] sm:text-[14px]",
                  active
                    ? "border-line-soft bg-white text-brand shadow-[0_1px_3px_rgba(29,37,48,.08)]"
                    : "border-transparent bg-transparent text-ink-500 shadow-none",
                )}
              >
                <tab.Icon className="h-[17px] w-[17px]" aria-hidden />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/*
          All three panels stay mounted in the same grid cell, so the container is
          always as tall as the tallest panel and switching tabs cannot shift the
          page. Only the active one is faded in; the rest are inert and hidden
          from assistive tech.
        */}
        <div ref={panelsRef} className="relative mt-[clamp(18px,2.2vw,26px)] grid">
          {PANELS.map(({ Panel, reveal }, index) => {
            const active = index === activeTab;
            return (
              <div
                key={index}
                role="tabpanel"
                id={`analytics-panel-${index}`}
                aria-labelledby={`analytics-tab-${index}`}
                aria-hidden={!active}
                className={cn(
                  "col-start-1 row-start-1 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(14px,1.8vw,20px)]",
                  "transition-[opacity,transform] [transition-duration:420ms] [transition-timing-function:cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none",
                  active
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-[10px] opacity-0",
                )}
              >
                <Panel reveal={reveal} />
              </div>
            );
          })}
        </div>
      </Shell>
    </section>
  );
};

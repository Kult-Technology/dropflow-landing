import { ArrowRight, Droplet, MoveDown, MoveLeft, MoveRight, MoveUp, Truck } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { APP_URL, CONTACT_MAILTO, SECTION_IDS } from "@/lib/site";
import { cn } from "@/lib/utils";
import aliexpress from "@/assets/brand/aliexpress.svg";
import dropflowIconWhite from "@/assets/brand/dropflow-icon-white.svg";
import shoper from "@/assets/brand/shoper.svg";
import shopify from "@/assets/brand/shopify.svg";

/** Travelling dot shared by every rail; only the animation utility differs. */
const RAIL_DOT = "absolute h-[12px] w-[12px] rounded-full";
const RAIL_DOT_OUT = cn(RAIL_DOT, "bg-brand shadow-[0_0_12px_3px_rgba(5,94,209,.4)]");
const RAIL_DOT_BACK = cn(RAIL_DOT, "bg-positive shadow-[0_0_12px_3px_rgba(22,162,73,.35)]");

type RailProps = {
  /** The vertical layout shortens rail 2's outbound label, so both spellings are passed in. */
  outboundLabel: string;
  outboundLabelShort: string;
  returnLabel: string;
  /** Animation utilities - the two rails run the same keyframes on different delays. */
  outboundDotA: string;
  outboundDotB: string;
  outboundDotV: string;
  returnDotH: string;
  returnDotV: string;
};

const PipelineRail = ({
  outboundLabel,
  outboundLabelShort,
  returnLabel,
  outboundDotA,
  outboundDotB,
  outboundDotV,
  returnDotH,
  returnDotV,
}: RailProps) => (
  <div className="flex min-h-[76px] flex-col justify-center gap-[16px]">
    {/* Stacked rails take over below 861px, where the pipeline grid is a single column. */}
    <div className="hidden items-start justify-center gap-[28px] py-[4px] max-pipe:flex">
      <span className="flex flex-col items-center gap-[6px] font-mono text-[9.5px] uppercase tracking-[.08em] text-brand">
        {outboundLabelShort}
        <span className="relative h-[48px] w-[2px] bg-[linear-gradient(180deg,rgba(5,94,209,.12),rgba(5,94,209,.4),rgba(5,94,209,.12))]">
          <span className={cn(RAIL_DOT_OUT, "-left-[5px]", outboundDotV)} />
        </span>
        <MoveDown className="h-[13px] w-[13px]" aria-hidden />
      </span>
      <span className="flex flex-col items-center gap-[6px] font-mono text-[9.5px] uppercase tracking-[.08em] text-positive">
        <MoveUp className="h-[13px] w-[13px]" aria-hidden />
        <span className="relative h-[48px] w-[2px] bg-[linear-gradient(180deg,rgba(22,162,73,.12),rgba(22,162,73,.4),rgba(22,162,73,.12))]">
          <span className={cn(RAIL_DOT_BACK, "-left-[5px]", returnDotV)} />
        </span>
        {returnLabel}
      </span>
    </div>

    <div className="flex flex-col justify-center gap-[16px] max-pipe:hidden">
      <div>
        <div className="mb-[7px] flex items-center justify-center gap-[6px] font-mono text-[10px] uppercase tracking-[.1em] text-brand">
          {outboundLabel} <MoveRight className="h-[13px] w-[13px]" aria-hidden />
        </div>
        <div className="relative h-[2px] bg-[linear-gradient(90deg,rgba(5,94,209,.12),rgba(5,94,209,.4),rgba(5,94,209,.12))]">
          <span className={cn(RAIL_DOT_OUT, "-top-[5px]", outboundDotA)} />
          <span className={cn(RAIL_DOT_OUT, "-top-[5px]", outboundDotB)} />
        </div>
      </div>
      <div>
        <div className="relative h-[2px] bg-[linear-gradient(90deg,rgba(22,162,73,.12),rgba(22,162,73,.4),rgba(22,162,73,.12))]">
          <span className={cn(RAIL_DOT_BACK, "-top-[5px]", returnDotH)} />
        </div>
        <div className="mt-[7px] flex items-center justify-center gap-[6px] font-mono text-[10px] uppercase tracking-[.1em] text-positive">
          <MoveLeft className="h-[13px] w-[13px]" aria-hidden /> {returnLabel}
        </div>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  const { hero } = useCopy();

  const marqueeItems = [
    { strong: hero.marqueeClickStrong, rest: hero.marqueeClickRest, spaced: true },
    { strong: hero.marqueePlatformsStrong, rest: hero.marqueePlatformsRest, spaced: false },
    { strong: hero.marqueeWorldwideStrong, rest: hero.marqueeWorldwideRest, spaced: true },
    { strong: hero.marqueeRealtimeStrong, rest: hero.marqueeRealtimeRest, spaced: true },
  ];

  /*
   * Each copy carries its own trailing gap (pr-…) and the track itself has none,
   * so the two copies are exactly equal boxes. That is what makes translateX(-50%)
   * land precisely one copy along; with the gap on the track instead, the halves
   * are (2W + gap)/2 and every loop jumps by half a gap.
   */
  const marqueeCopy = (duplicate: boolean) => (
    <span
      className="flex gap-[clamp(30px,5vw,56px)] pr-[clamp(30px,5vw,56px)]"
      aria-hidden={duplicate || undefined}
    >
      {marqueeItems.map((item) => (
        <span key={item.strong}>
          <b className="font-semibold text-brand">{item.strong}</b>
          {item.spaced ? " " : null}
          {item.rest}
        </span>
      ))}
    </span>
  );

  return (
    <section
      id={SECTION_IDS.top}
      className="relative overflow-hidden px-section-x pb-0 pt-[clamp(48px,6vw,88px)]"
    >
      {/* Two stacked radial washes - layered gradients have no Tailwind shorthand. */}
      <div
        data-parallax="-0.18"
        className="pointer-events-none absolute -left-[14%] -right-[14%] -top-[16%] bottom-auto h-[900px] animate-df-drift"
        style={{
          background:
            "radial-gradient(56% 60% at 20% 4%,rgba(5,94,209,.16),transparent 70%),radial-gradient(46% 52% at 86% 14%,rgba(47,192,245,.2),transparent 72%)",
        }}
      />
      {/* Grid lines, faded out towards the bottom by a mask. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,94,209,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(5,94,209,.05) 1px,transparent 1px)",
          backgroundSize: "clamp(40px,5vw,68px) clamp(40px,5vw,68px)",
          maskImage: "linear-gradient(180deg,#000,transparent 62%)",
          WebkitMaskImage: "linear-gradient(180deg,#000,transparent 62%)",
        }}
      />

      <div className="relative mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(32px,4vw,56px)]">
        <div className="animate-df-rise">
          <span className="inline-flex items-center gap-[9px] rounded-full border border-line bg-white px-[13px] py-[6px] text-[11.5px] font-medium text-brand">
            <span className="relative inline-flex h-[7px] w-[7px]">
              <span className="absolute inset-0 rounded-full bg-positive" />
              <span className="absolute -inset-[4px] animate-df-pulse rounded-full bg-positive" />
            </span>
            {hero.badge}
          </span>

          <h1 className="mt-[20px] text-display font-bold text-ink-900">{hero.heading}</h1>

          <p className="mt-[22px] max-w-[520px] text-lead-hero font-light text-ink-600">{hero.lead}</p>

          <div className="mt-[clamp(26px,3vw,34px)] flex flex-wrap gap-[12px]">
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center gap-[9px] rounded-[12px] bg-brand px-[26px] py-[15px] text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(5,94,209,.3)]"
            >
              {hero.bookDemo} <ArrowRight className="h-[17px] w-[17px]" aria-hidden />
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center gap-[9px] rounded-[12px] border border-line bg-white px-[24px] py-[15px] text-[15px] font-medium text-ink-800"
            >
              {hero.logIn}
            </a>
          </div>
        </div>

        <div className="relative min-h-[clamp(340px,34vw,420px)]">
          <div
            data-parallax="0.06"
            className="relative rounded-[18px] border border-line bg-white px-[18px] py-[16px] shadow-[0_40px_80px_-36px_rgba(20,40,80,.32)]"
          >
            <div className="flex items-center gap-[8px] border-b border-line-soft pb-[12px]">
              <Droplet className="h-[15px] w-[15px] text-brand" aria-hidden />
              <span className="text-[12.5px] font-semibold text-ink-800">Start</span>
              <span className="ml-auto font-mono text-[10px] text-ink-400">{hero.lastThirtyDays}</span>
            </div>

            <div className="mt-[14px] text-[11px] text-ink-500">{hero.paidOrders}</div>
            <div className="flex items-baseline gap-[10px]">
              <span className="text-hero-kpi font-semibold leading-none text-ink-800">1&nbsp;390</span>
              <span className="text-[12px] font-semibold text-positive">+12%</span>
            </div>

            <svg
              viewBox="0 0 320 90"
              preserveAspectRatio="none"
              className="mt-[8px] block h-[clamp(76px,8vw,96px)] w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="lpHero" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#055ed1" stopOpacity=".2" />
                  <stop offset="100%" stopColor="#055ed1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,64 C16,64 16,54 32,54 C48,54 48,60 64,60 C80,60 80,46 96,46 C112,46 112,37 128,37 C144,37 144,50 160,50 C176,50 176,32 192,32 C208,32 208,41 224,41 C240,41 240,24 256,24 C272,24 272,34 288,34 C304,34 304,18 320,18 L320,90 L0,90 Z"
                fill="url(#lpHero)"
              />
              <path
                d="M0,64 C16,64 16,54 32,54 C48,54 48,60 64,60 C80,60 80,46 96,46 C112,46 112,37 128,37 C144,37 144,50 160,50 C176,50 176,32 192,32 C208,32 208,41 224,41 C240,41 240,24 256,24 C272,24 272,34 288,34 C304,34 304,18 320,18"
                fill="none"
                stroke="#055ed1"
                strokeWidth="2"
                strokeDasharray="640"
                strokeDashoffset="640"
                className="animate-df-draw-in"
              />
              <circle cx="320" cy="18" r="4" fill="#055ed1" stroke="#fff" strokeWidth="2" className="animate-df-pulse-slow" />
            </svg>

            <div className="mt-[12px] grid grid-cols-2 gap-[10px]">
              <div className="rounded-[10px] bg-surface px-[12px] py-[10px]">
                <div className="text-[10.5px] text-ink-500">{hero.fulfilment}</div>
                <div className="mt-[3px] text-[15px] font-semibold text-positive">96,4%</div>
              </div>
              <div className="rounded-[10px] bg-surface px-[12px] py-[10px]">
                <div className="text-[10.5px] text-ink-500">{hero.margin}</div>
                <div className="mt-[3px] text-[15px] font-semibold text-ink-800">32,8%</div>
              </div>
            </div>
          </div>

          <div
            data-parallax="0.2"
            className="absolute -bottom-[28px] left-[clamp(-56px,-3vw,-20px)] flex animate-df-float-b items-center gap-[11px] rounded-[14px] bg-ink-900 px-[15px] py-[12px] shadow-[0_24px_48px_-18px_rgba(20,40,80,.45)] max-[640px]:hidden"
          >
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-white/10 text-white">
              <Truck className="h-[16px] w-[16px]" aria-hidden />
            </span>
            <span>
              <span className="block text-[10.5px] text-white/60">{hero.trackingSynced}</span>
              <span className="block font-mono text-[13px] font-medium text-white">LP0058231PL</span>
            </span>
          </div>
        </div>
      </div>

      <div data-reveal="scale" className="relative mx-auto mt-[clamp(48px,6vw,80px)] max-w-shell">
        <div className="rounded-[22px] border border-line bg-surface px-[clamp(18px,2.6vw,34px)] py-[clamp(20px,2.4vw,30px)]">
          <div className="mb-[clamp(18px,2.4vw,26px)] flex flex-wrap items-center justify-between gap-[10px]">
            <span className="font-mono text-[10.5px] uppercase tracking-[.16em] text-ink-400">{hero.pipelineLabel}</span>
            <span className="inline-flex items-center gap-[7px] font-mono text-[10.5px] text-positive">
              <span className="h-[6px] w-[6px] animate-df-glow rounded-full bg-positive" />
              running
            </span>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-[clamp(10px,1.4vw,20px)] pipe:grid-cols-[minmax(132px,1.05fr)_minmax(76px,.82fr)_minmax(132px,1.05fr)_minmax(76px,.82fr)_minmax(132px,1.05fr)]">
            <div className="flex flex-col items-center gap-[11px]">
              <span className="flex h-[76px] w-full items-center justify-center gap-[10px] rounded-[14px] border border-line bg-white">
                <img src={shoper} alt="Shoper" className="h-[24px] w-[24px] object-contain" />
                <img src={shopify} alt="Shopify" className="h-[24px] w-[24px] object-contain" />
              </span>
              <span className="text-[13px] font-semibold text-ink-900">{hero.yourStores}</span>
              <span className="text-[11.5px] text-ink-500">Shoper · Shopify</span>
            </div>

            <PipelineRail
              outboundLabel={hero.railOrders}
              outboundLabelShort={hero.railOrders}
              returnLabel={hero.railTracking}
              outboundDotA="animate-[dfRailF_3s_linear_infinite]"
              outboundDotB="animate-[dfRailF_3s_linear_1.5s_infinite]"
              outboundDotV="animate-[dfRailDown_3s_linear_infinite]"
              returnDotH="animate-[dfRailB_3.4s_linear_0.8s_infinite]"
              returnDotV="animate-[dfRailUp_3.4s_linear_0.8s_infinite]"
            />

            <div className="flex flex-col items-center gap-[11px]">
              <span className="flex h-[76px] w-full items-center justify-center rounded-[14px] bg-[linear-gradient(150deg,#1a75e1,#055ed1)] shadow-[0_14px_34px_-10px_rgba(5,94,209,.55)]">
                <img src={dropflowIconWhite} alt="DropFlow" className="h-[35px] w-[26px] object-contain" />
              </span>
              <span className="text-[13px] font-bold text-ink-900">DropFlow</span>
              <span className="text-[11.5px] text-ink-500">{hero.dropflowSteps}</span>
            </div>

            <PipelineRail
              outboundLabel={hero.railOrderPlaced}
              outboundLabelShort={hero.railOrderPlacedShort}
              returnLabel={hero.railStatusCost}
              outboundDotA="animate-[dfRailF_3s_linear_0.6s_infinite]"
              outboundDotB="animate-[dfRailF_3s_linear_2.1s_infinite]"
              outboundDotV="animate-[dfRailDown_3s_linear_0.6s_infinite]"
              returnDotH="animate-[dfRailB_3.4s_linear_infinite]"
              returnDotV="animate-[dfRailUp_3.4s_linear_infinite]"
            />

            <div className="flex flex-col items-center gap-[11px]">
              <span className="flex h-[76px] w-full items-center justify-center rounded-[14px] border border-line bg-white">
                <img src={aliexpress} alt="AliExpress" className="h-[26px] w-[26px] object-contain" />
              </span>
              <span className="text-[13px] font-semibold text-ink-900">AliExpress</span>
              <span className="text-[11.5px] text-ink-500">{hero.orderedAndTracked}</span>
            </div>
          </div>

          {/* 1px gap over a `line` background is what draws the hairlines between the cells. */}
          <div className="mt-[clamp(20px,2.6vw,28px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-px overflow-hidden rounded-[14px] bg-line">
            <div className="bg-white px-[18px] py-[15px]">
              <div className="text-[11px] text-ink-500">{hero.ordersInFlight}</div>
              <div className="mt-[4px] text-[23px] font-semibold text-ink-800">612</div>
            </div>
            <div className="bg-white px-[18px] py-[15px]">
              <div className="text-[11px] text-ink-500">{hero.fulfilmentRate}</div>
              <div className="mt-[4px] text-[23px] font-semibold text-positive">96,4%</div>
            </div>
            <div className="bg-white px-[18px] py-[15px]">
              <div className="text-[11px] text-ink-500">{hero.margin}</div>
              <div className="mt-[4px] text-[23px] font-semibold text-ink-800">32,8%</div>
            </div>
            <div className="bg-white px-[18px] py-[15px]">
              <div className="text-[11px] text-ink-500">{hero.needsAttention}</div>
              <div className="mt-[4px] text-[23px] font-semibold text-warn">3</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-[clamp(28px,3.4vw,40px)] max-w-shell overflow-hidden border-t border-brand/10 py-[20px]">
        {/* The track holds two identical copies so the -50% translate loops seamlessly. */}
        <div className="flex w-max animate-df-marquee text-[12.5px] text-ink-600">
          {marqueeCopy(false)}
          {marqueeCopy(true)}
        </div>
      </div>
    </section>
  );
};

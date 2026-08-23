import { useCopy } from "@/i18n/LanguageProvider";
import claudeClay from "@/assets/brand/claude-clay.svg";
/*
 * Despite the name, this asset renders clay-coloured: its root `fill="#ffffff"`
 * is overridden by the path's own `fill="#D97757"`. Kept verbatim from the
 * design so the chat header looks exactly as designed - recolour the path if a
 * genuinely white mark is wanted.
 */
import claudeWhite from "@/assets/brand/claude-white.svg";

/* The mini margin chart in the assistant reply - labels and amounts read the same in both locales */
const MARGIN_ROWS = [
  { label: "Oversized hoodie", amount: "14\u00a0208\u00a0zł", width: "w-[92%]", fill: "bg-brand-pale" },
  { label: "Kigurumi set", amount: "11\u00a0640\u00a0zł", width: "w-[75%]", fill: "bg-brand-pale" },
  { label: "LED strip 5 m", amount: "8\u00a0902\u00a0zł", width: "w-[58%]", fill: "bg-white/30" },
];

/* Staggered typing dots: same 1.4s loop, .18s apart */
const TYPING_DELAYS = [
  "animate-[dfTyping_1.4s_ease-in-out_infinite]",
  "animate-[dfTyping_1.4s_ease-in-out_.18s_infinite]",
  "animate-[dfTyping_1.4s_ease-in-out_.36s_infinite]",
];

export const McpSection = () => {
  const { mcp } = useCopy();
  const steps = [mcp.step1, mcp.step2, mcp.step3];

  return (
    <section
      id="mcp"
      className="relative overflow-hidden bg-night px-section-x py-section-y"
    >
      {/* Layered radial glow backdrop - two stacked gradients Tailwind can't express as classes */}
      <div
        data-parallax="-0.14"
        className="pointer-events-none absolute -left-[10%] -right-[10%] -top-[30%] bottom-auto h-[820px]"
        style={{
          backgroundImage:
            "radial-gradient(44% 44% at 46% 0%,rgba(5,94,209,.42),transparent 68%),radial-gradient(34% 34% at 86% 24%,rgba(217,119,87,.2),transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(32px,4vw,56px)]">
        <div data-reveal>
          <span className="inline-flex items-center gap-[9px] rounded-full border border-white/[.12] bg-white/[.06] px-[13px] py-[6px] font-mono text-[10.5px] uppercase tracking-[.14em] text-white/70">
            <img src={claudeClay} alt="" className="h-[15px] w-[15px] object-contain" />
            MCP
          </span>

          <h2 className="mt-[18px] text-h2 font-semibold text-white">{mcp.heading}</h2>

          <p className="mt-5 max-w-[540px] text-lead font-light text-white/[.66]">{mcp.lead}</p>

          <div className="mt-7 flex flex-col gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-[13px]">
                <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] border border-white/[.12] bg-white/[.08] font-mono text-[11px] text-white/60">
                  {index + 1}
                </span>
                <span className="text-sm text-white/80">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal="scale"
          data-parallax="0.05"
          className="flex flex-col gap-[14px] rounded-[22px] border border-white/[.12] bg-white/[.05] p-[clamp(18px,2.2vw,26px)] backdrop-blur-[10px]"
        >
          <div className="flex items-center gap-[10px] border-b border-white/10 pb-[14px]">
            <img src={claudeWhite} alt="Claude" className="h-[18px] w-[18px] object-contain" />
            <span className="text-[12.5px] font-medium text-white">Claude</span>
            <span className="ml-auto inline-flex items-center gap-[6px] rounded-full bg-positive/[.16] px-[9px] py-[4px] font-mono text-[10px] text-positive-bright">
              <span className="h-[5px] w-[5px] animate-df-glow rounded-full bg-positive-bright" />
              DropFlow
            </span>
          </div>

          <div className="max-w-[88%] self-end rounded-[14px_14px_4px_14px] bg-brand px-[15px] py-3 text-[13.5px] leading-[1.5] text-white">
            {mcp.chatQuestion}
          </div>

          <div className="flex gap-[11px]">
            <img src={claudeClay} alt="" className="mt-[3px] h-5 w-5 flex-none object-contain" />
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div className="rounded-[14px_14px_14px_4px] bg-white/[.07] px-[15px] py-[13px] text-[13.5px] leading-[1.55] text-white/[.86]">
                {mcp.chatAnswerIntro}
              </div>

              <div className="flex flex-col gap-[10px] rounded-[14px] border border-white/10 bg-white/[.05] p-[15px]">
                {MARGIN_ROWS.map((row) => (
                  <div key={row.label}>
                    <div className="mb-[6px] flex justify-between text-[12.5px] text-white/80">
                      <span>{row.label}</span>
                      <span className="font-mono">{row.amount}</span>
                    </div>
                    <div className="h-[7px] overflow-hidden rounded-full bg-white/10">
                      <span className={`block h-full rounded-full ${row.width} ${row.fill}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[14px] bg-white/[.07] px-[15px] py-[13px] text-[13.5px] leading-[1.55] text-white/[.86]">
                {mcp.chatAnswerSummary}
              </div>

              <div className="flex gap-[5px] pl-1">
                {TYPING_DELAYS.map((animation) => (
                  <span key={animation} className={`h-[6px] w-[6px] rounded-full bg-white/50 ${animation}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

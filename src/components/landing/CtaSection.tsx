import { ArrowRight } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { APP_URL, CONTACT_MAILTO } from "@/lib/site";
import iconWhite from "@/assets/brand/dropflow-icon-white.svg";

export const CtaSection = () => {
  const { cta } = useCopy();

  return (
    <section
      className="relative overflow-hidden bg-night px-section-x py-section-y"
    >
      {/* Radial glow backdrop - layered gradient cannot be expressed as a Tailwind class. */}
      <div
        data-parallax="-0.12"
        className="pointer-events-none absolute inset-x-[-10%] bottom-auto top-[-40%] h-[900px] animate-df-drift-slow"
        style={{
          backgroundImage:
            "radial-gradient(46% 50% at 50% 6%,rgba(5,94,209,.45),transparent 68%)",
        }}
      />

      <div data-reveal className="relative mx-auto max-w-[820px] text-center">
        {/*
          `mx-auto` rather than relying on the parent's text-center: Tailwind's
          preflight makes images `display:block`, which text-align cannot centre.
        */}
        <img
          src={iconWhite}
          alt=""
          className="mx-auto h-[46px] w-[34px] animate-df-float object-contain"
        />
        <h2 className="mt-[22px] text-h2-cta font-semibold text-white">{cta.heading}</h2>
        <p className="mt-[20px] text-lead-cta font-light text-white/[.66]">{cta.lead}</p>

        <div className="mt-[32px] flex flex-wrap justify-center gap-[12px]">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-[9px] rounded-[12px] bg-white px-[28px] py-[15px] text-[15px] font-semibold text-night"
          >
            {cta.bookDemo} <ArrowRight className="h-[17px] w-[17px]" aria-hidden />
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-[9px] rounded-[12px] border border-white/[.16] bg-white/[.07] px-[26px] py-[15px] text-[15px] font-medium text-white"
          >
            {cta.logIn}
          </a>
        </div>

        <p className="mt-[18px] text-[12.5px] text-white/40">{cta.note}</p>
      </div>
    </section>
  );
};

import { useLandingMotion } from "@/hooks/use-landing-motion";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Integrations } from "@/components/landing/Integrations";
import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { McpSection } from "@/components/landing/McpSection";
import { ExtensionSection } from "@/components/landing/ExtensionSection";
import { NumbersSection } from "@/components/landing/NumbersSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { SiteFooter } from "@/components/landing/SiteFooter";

const Index = () => {
  // Scroll-reveal, parallax layers and count-up stats, wired once for the page.
  useLandingMotion();

  return (
    /*
     * `leading-[normal]` restores the browser default line height that the design
     * is built on - Tailwind's preflight sets `line-height: 1.5` on <html>, which
     * loosens every element that doesn't set its own leading. Scoped to the
     * landing page so the rest of the app keeps the Tailwind default.
     */
    <div className="relative overflow-x-clip bg-white leading-[normal]">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Integrations />
        <AnalyticsSection />
        <McpSection />
        <ExtensionSection />
        <NumbersSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;

import { ArrowRight, RefreshCw, BarChart3, FileSpreadsheet, Link2, Zap, LayoutDashboard, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import dropflowIcon from "@/assets/dropflow-icon.png";
import kultLogo from "@/assets/kulttechnology.png";
import { useMemo } from "react";
import { detectLocale, getTranslations } from "@/i18n/translations";

const APP_URL = "https://app.dropflow.dev";

function useTranslations() {
  return useMemo(() => {
    const locale = detectLocale();
    return getTranslations(locale);
  }, []);
}

const featureIcons = [RefreshCw, BarChart3, FileSpreadsheet, ShoppingBag] as const;
const featureKeys = ["orderAutomation", "profitAnalytics", "smartExport", "shopifyIntegration"] as const;
const comingSoonKeys = new Set(["shopifyIntegration"]);

const Nav = ({ t }: { t: ReturnType<typeof getTranslations> }) => (
  <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="/" className="flex items-center gap-2.5">
        <img src={dropflowIcon} alt="DropFlow" className="h-8 w-8" />
        <span className="text-xl font-bold tracking-tight text-foreground">DropFlow</span>
      </a>
      <Button asChild size="sm" className="rounded-full px-5">
        <a href={APP_URL}>{t.nav.goToApp} <ArrowRight className="ml-1 h-4 w-4" /></a>
      </Button>
    </div>
  </nav>
);

const Hero = ({ t }: { t: ReturnType<typeof getTranslations> }) => (
  <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(210_100%_50%/0.12),transparent)]" />
    <div className="mx-auto max-w-4xl px-6 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
        <Zap className="h-3.5 w-3.5 text-primary" />
        {t.hero.badge}
      </div>
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {t.hero.titleLine1}
        <br />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.hero.titleLine2}
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
        {t.hero.subtitle}
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25">
          <a href={APP_URL}>{t.hero.cta} <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);

const Features = ({ t }: { t: ReturnType<typeof getTranslations> }) => (
  <section className="py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.features.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {t.features.subheading}
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featureKeys.map((key, i) => {
          const Icon = featureIcons[i];
          const feature = t.features[key];
          const isComingSoon = comingSoonKeys.has(key);
          return (
            <div
              key={key}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {isComingSoon && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {t.features.comingSoon}
                </span>
              )}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const stepIcons = [Link2, RefreshCw, LayoutDashboard] as const;
const stepKeys = ["connect", "sync", "track"] as const;

const HowItWorks = ({ t }: { t: ReturnType<typeof getTranslations> }) => (
  <section className="border-t border-border bg-muted/40 py-20 sm:py-28">
    <div className="mx-auto max-w-5xl px-6 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {t.howItWorks.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
        {t.howItWorks.subheading}
      </p>
      <div className="mt-16 grid gap-10 sm:grid-cols-3">
        {stepKeys.map((key, i) => {
          const Icon = stepIcons[i];
          const step = t.howItWorks[key];
          return (
            <div key={key} className="flex flex-col items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Footer = ({ t }: { t: ReturnType<typeof getTranslations> }) => (
  <footer className="border-t border-border py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-2.5">
        <img src={dropflowIcon} alt="DropFlow" className="h-6 w-6" />
        <span className="font-semibold text-foreground">DropFlow</span>
      </div>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
        <a href={APP_URL} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          {t.footer.goToApp}
        </a>
        <a
          href="https://kulttechnology.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.footer.builtBy} <img src={kultLogo} alt="Kult Technology" className="h-5" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} DropFlow</p>
    </div>
  </footer>
);

const Index = () => {
  const t = useTranslations();
  return (
    <div className="min-h-screen">
      <Nav t={t} />
      <Hero t={t} />
      <Features t={t} />
      <HowItWorks t={t} />
      <Footer t={t} />
    </div>
  );
};

export default Index;

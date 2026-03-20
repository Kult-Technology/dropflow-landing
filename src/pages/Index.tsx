import { ArrowRight, RefreshCw, BarChart3, FileSpreadsheet, Link2, Zap, LayoutDashboard, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import dropflowIcon from "@/assets/dropflow-icon.png";
import kultLogo from "@/assets/kulttechnology.png";

const APP_URL = "https://app.dropflow.dev";

const Nav = () => (
  <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="/" className="flex items-center gap-2.5">
        <img src={dropflowIcon} alt="DropFlow" className="h-8 w-8" />
        <span className="text-xl font-bold tracking-tight text-foreground">DropFlow</span>
      </a>
      <Button asChild size="sm" className="rounded-full px-5">
        <a href={APP_URL}>Go to App <ArrowRight className="ml-1 h-4 w-4" /></a>
      </Button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(210_100%_50%/0.12),transparent)]" />
    <div className="mx-auto max-w-4xl px-6 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
        <Zap className="h-3.5 w-3.5 text-primary" />
        Shoper × AliExpress Automation
      </div>
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Automate Your
        <br />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dropshipping Workflow
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
        Connect your Shoper store with AliExpress. Sync orders automatically, eliminate errors, and track profits — all from one dashboard.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25">
          <a href={APP_URL}>Get Started <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: RefreshCw,
    title: "Order Automation",
    description:
      "Automatically sync customer and order data from Shoper to AliExpress. No more copy-paste — reduce errors and speed up fulfillment.",
  },
  {
    icon: BarChart3,
    title: "Profit Analytics",
    description:
      "Track revenue, margins, and product performance in real time. Match Shoper orders with AliExpress costs to see true profitability.",
  },
  {
    icon: FileSpreadsheet,
    title: "Smart Export",
    description:
      "Export fully matched order data with calculated margins. Perfect for accounting, financial reconciliation, or custom analysis in Excel.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Integration",
    description:
      "Shopify support is on the way. Soon you'll be able to connect your Shopify store alongside Shoper for a unified dropshipping workflow.",
    comingSoon: true,
  },
];

const Features = () => (
  <section className="py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Everything you need to scale
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          DropFlow handles the tedious parts of dropshipping so you can focus on growing your business.
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            {f.comingSoon && (
              <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                Coming Soon
              </span>
            )}
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { icon: Link2, label: "Connect", description: "Link your Shoper store in seconds" },
  { icon: RefreshCw, label: "Sync", description: "Orders push to AliExpress automatically" },
  { icon: LayoutDashboard, label: "Track", description: "Monitor everything from one dashboard" },
];

const HowItWorks = () => (
  <section className="border-t border-border bg-muted/40 py-20 sm:py-28">
    <div className="mx-auto max-w-5xl px-6 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How it works
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
        Get started in minutes — no technical setup required.
      </p>
      <div className="mt-16 grid gap-10 sm:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center gap-4">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <s.icon className="h-7 w-7" />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                {i + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-2.5">
        <img src={dropflowIcon} alt="DropFlow" className="h-6 w-6" />
        <span className="font-semibold text-foreground">DropFlow</span>
      </div>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
        <a href={APP_URL} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          Go to App
        </a>
        <a
          href="https://kulttechnology.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Built by <img src={kultLogo} alt="Kult Technology" className="h-5" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} DropFlow</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Nav />
    <Hero />
    <Features />
    <HowItWorks />
    <Footer />
  </div>
);

export default Index;

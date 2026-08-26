import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";
import { APP_URL, CONTACT_MAILTO, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/brand/dropflow-logo.svg";
import { LanguageSwitch } from "./LanguageSwitch";

export const SiteHeader = () => {
  const { nav } = useCopy();
  const [menuOpen, setMenuOpen] = useState(false);

  // Leaving the menu open while it is hidden would trap focus in it.
  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeAboveBreakpoint = window.matchMedia("(min-width: 901px)");
    const onChange = () => closeAboveBreakpoint.matches && setMenuOpen(false);

    window.addEventListener("keydown", closeOnEscape);
    closeAboveBreakpoint.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      closeAboveBreakpoint.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  return (
    /*
      The bar stays full-bleed so its bottom border and blur reach the viewport
      edges, while the inner row is capped at the same max-w-shell column every
      section uses - otherwise the logo and actions drift outside the page
      content on wide screens.
    */
    <header className="sticky top-0 z-[60] border-b border-brand/10 bg-white/[.86] px-section-x py-[14px] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-shell items-center gap-[clamp(16px,2.4vw,34px)]">
        <a href="#top" className="flex flex-none items-center" aria-label={nav.home}>
          <img src={logo} alt="DropFlow" className="h-auto w-[clamp(98px,9vw,124px)] object-contain" />
        </a>

        {/*
          The open menu is positioned against the <header>, not this row, so the
          dropdown stays full-bleed on mobile.
        */}
        <nav
          className={cn(
            "gap-[clamp(14px,1.8vw,26px)] text-[13.5px] text-ink-700 nav:flex",
            menuOpen
              ? "absolute left-0 right-0 top-full flex flex-col gap-[4px] border-b border-brand/10 bg-white px-5 pb-[18px] pt-[14px] text-[15px] shadow-[0_18px_34px_-22px_rgba(20,40,80,.3)]"
              : "hidden",
          )}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-inherit hover:text-brand"
            >
              {nav[link.key]}
            </a>
          ))}

          {/*
            Below the nav breakpoint the bar has no room for the language switch
            or the log-in link, so they live here instead of being dropped.
          */}
          <div className="mt-[10px] flex items-center justify-between gap-[14px] border-t border-line-soft pt-[14px] nav:hidden">
            <a href={APP_URL} className="text-[15px] text-ink-800 hover:text-brand">
              {nav.logIn}
            </a>
            <LanguageSwitch />
          </div>
        </nav>

        <div className="ml-auto flex flex-none items-center gap-[clamp(8px,1.2vw,14px)]">
          <LanguageSwitch className="max-nav:hidden" />

          <a href={APP_URL} className="text-[13.5px] text-ink-800 hover:text-brand max-nav:hidden">
            {nav.logIn}
          </a>

          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-[7px] rounded-[10px] bg-brand px-[18px] py-[10px] text-[13.5px] font-semibold text-white shadow-[0_6px_18px_rgba(5,94,209,.26)] hover:bg-brand-light max-[400px]:px-[13px]"
          >
            {nav.bookDemo}
            <ArrowRight className="h-[15px] w-[15px] max-[400px]:hidden" aria-hidden />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
            className="inline-flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[9px] border border-line-soft bg-surface-alt text-ink-700 nav:hidden"
          >
            {menuOpen ? (
              <X className="h-[19px] w-[19px]" aria-hidden />
            ) : (
              <Menu className="h-[19px] w-[19px]" aria-hidden />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

import { useEffect } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Fades `[data-reveal]` elements in as they enter the viewport, staggering
 * siblings by 90ms (capped at 360ms) the way the design does.
 *
 * Also flags <html> with `.js` so the hidden-until-revealed styles in
 * index.css only apply when this hook is actually running.
 */
function useScrollReveal(): void {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const query = () => Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      query().forEach((el) => el.classList.add("is-in"));
      return () => root.classList.remove("js");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const siblings = Array.from(target.parentElement?.children ?? []).filter((child) =>
            child.hasAttribute("data-reveal"),
          );
          const index = Math.max(0, siblings.indexOf(target));

          target.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
          target.classList.add("is-in");
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    const observeAll = () => query().forEach((el) => el.classList.contains("is-in") || observer.observe(el));
    observeAll();

    /*
     * Sections that mount content later (the analytics tab panels) would
     * otherwise inherit the hidden-until-revealed styles with nothing watching
     * them, and stay invisible. Re-scan whenever the tree changes.
     */
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      root.classList.remove("js");
    };
  }, []);
}

/**
 * Drifts `[data-parallax]` layers against the scroll position. The attribute
 * value is the speed factor - negative moves against the scroll, positive with it.
 */
function useParallax(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]")).map((el) => ({
      el,
      speed: Number.parseFloat(el.getAttribute("data-parallax") ?? "") || 0,
    }));

    if (!layers.length) return;

    let ticking = false;

    const apply = () => {
      const viewportHeight = window.innerHeight;
      layers.forEach(({ el, speed }) => {
        const rect = el.getBoundingClientRect();
        const middle = rect.top + rect.height / 2;
        const offset = (middle - viewportHeight / 2) * speed;
        el.style.transform = `translate3d(0,${offset.toFixed(1)}px,0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

/**
 * Counts `[data-count]` elements up from zero when they scroll into view.
 * A target of 0 is left alone - there is nothing to count towards.
 */
function useCountUp(): void {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const frames = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          observer.unobserve(el);

          const target = Number(el.getAttribute("data-count"));
          if (!Number.isFinite(target) || target === 0) return;

          const duration = 900;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            el.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
            if (progress < 1) frames.add(requestAnimationFrame(tick));
          };

          el.textContent = "0";
          frames.add(requestAnimationFrame(tick));
        });
      },
      { threshold: 0.4 },
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      frames.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);
}

/** All three landing-page motion effects, for the page component to call once. */
export function useLandingMotion(): void {
  useScrollReveal();
  useParallax();
  useCountUp();
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Centred content column every section shares. */
export const Shell = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn("mx-auto max-w-shell", className)}>{children}</div>
);

/** Small mono, letter-spaced, uppercase label that sits above each section heading. */
export const Eyebrow = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <span
    className={cn(
      "font-mono text-[11px] uppercase tracking-[.16em] text-brand",
      className,
    )}
  >
    {children}
  </span>
);

/** Section h2 in the design's fluid display size. */
export const SectionHeading = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <h2 className={cn("mt-[14px] text-h2 font-semibold text-ink-900", className)}>{children}</h2>;

/** Body copy under a section heading. */
export const SectionLead = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <p className={cn("mt-[18px] text-lead font-light text-ink-600", className)}>{children}</p>;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useCopy } from "@/i18n/LanguageProvider";

const NotFound = () => {
  const { notFound } = useCopy();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-section-x leading-[normal]">
      <div className="text-center">
        <span className="font-mono text-[11px] uppercase tracking-[.16em] text-brand">404</span>
        <h1 className="mt-[14px] text-h2 font-semibold text-ink-900">{notFound.heading}</h1>
        <p className="mt-[18px] text-lead font-light text-ink-600">{notFound.lead}</p>
        <a
          href="/"
          className="mt-[28px] inline-flex items-center gap-[9px] rounded-[12px] bg-brand px-[26px] py-[15px] text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(5,94,209,.3)] hover:bg-brand-light"
        >
          <ArrowLeft className="h-[17px] w-[17px]" aria-hidden />
          {notFound.back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;

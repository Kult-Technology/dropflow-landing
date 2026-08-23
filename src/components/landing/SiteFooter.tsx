import { useCopy } from "@/i18n/LanguageProvider";
import { APP_URL, CONTACT_EMAIL, CONTACT_MAILTO, KULT_DOMAIN, KULT_URL, NAV_LINKS } from "@/lib/site";
import logoWhite from "@/assets/brand/dropflow-logo-white.svg";
import { LanguageSwitch } from "./LanguageSwitch";

const columnHeading = "font-mono text-[10.5px] uppercase tracking-[.16em] text-white/[.35]";
const columnLink = "text-white/[.72] hover:text-white";
const columnList = "mt-[14px] flex flex-col gap-[9px] text-[13.5px]";

export const SiteFooter = () => {
  const { footer, nav } = useCopy();

  return (
    <footer className="border-t border-white/[.08] bg-night-deep px-section-x pb-[28px] pt-[clamp(40px,5vw,64px)]">
      <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[clamp(24px,3vw,40px)]">
        <div>
          <img src={logoWhite} alt="DropFlow" className="h-auto w-[118px] object-contain" />
          <p className="mt-[14px] max-w-[280px] text-[13px] font-light leading-[1.6] text-white/[.5]">{footer.blurb}</p>
        </div>

        <div>
          <h4 className={columnHeading}>{footer.productHeading}</h4>
          <ul className={columnList}>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a href={link.href} className={columnLink}>
                  {nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={columnHeading}>{footer.contactHeading}</h4>
          <ul className={columnList}>
            <li>
              <a href={CONTACT_MAILTO} className={columnLink}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={KULT_URL} className={columnLink}>
                {KULT_DOMAIN}
              </a>
            </li>
            <li>
              <a href={APP_URL} className={columnLink}>
                {footer.logInToApp}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={columnHeading}>{footer.languageHeading}</h4>
          <LanguageSwitch variant="dark" className="mt-[14px]" />
        </div>
      </div>

      <div className="mx-auto mt-[clamp(28px,3.4vw,44px)] flex max-w-shell flex-wrap justify-between gap-[12px] border-t border-white/[.08] pt-[20px] text-[12px] text-white/[.36]">
        <span>© Kult Technology</span>
        <span>DropFlow · dropflow.dev</span>
      </div>
    </footer>
  );
};

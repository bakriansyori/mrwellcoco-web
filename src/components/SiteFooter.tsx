import { Link } from "@tanstack/react-router";
import { Leaf, Mail, MessageCircle, MapPin } from "lucide-react";
import { useT, buildWhatsappLink, buildEmailLink, EMAIL_ADDRESS } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-20 border-t border-border bg-[var(--cream)]">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg">{t("brand.name")}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-deep">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-foreground/80 hover:text-primary-deep">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="/produk" className="text-foreground/80 hover:text-primary-deep">
                {t("nav.products")}
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="text-foreground/80 hover:text-primary-deep">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="text-foreground/80 hover:text-primary-deep">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-deep">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{t("contact.address.body")}</span>
            </li>
            <li>
              <a
                href={buildWhatsappLink(t("whatsapp.default"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary-deep"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={buildEmailLink(t("brand.tagline"))}
                className="inline-flex items-center gap-2 hover:text-primary-deep"
              >
                <Mail className="h-4 w-4 text-primary" /> {EMAIL_ADDRESS}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-muted-foreground">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

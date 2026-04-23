import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, useT, buildWhatsappLink } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang } = useLang();
  const t = useT();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/produk", label: t("nav.products") },
    { to: "/tentang", label: t("nav.about") },
    { to: "/kontak", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg tracking-tight">{t("brand.name")}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "bg-secondary text-primary-deep" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-border bg-card p-0.5 sm:flex">
            <button
              onClick={() => setLang("id")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                lang === "id" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <Button
            asChild
            size="sm"
            className="hidden bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90 sm:inline-flex"
          >
            <a href={buildWhatsappLink(t("whatsapp.default"))} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4" />
              {t("nav.whatsapp")}
            </a>
          </Button>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-secondary text-primary-deep" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center rounded-full border border-border bg-card p-0.5">
                <button
                  onClick={() => setLang("id")}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    lang === "id" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
              <Button
                asChild
                size="sm"
                className="flex-1 bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90"
              >
                <a href={buildWhatsappLink(t("whatsapp.default"))} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  {t("nav.whatsapp")}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT, buildWhatsappLink, buildEmailLink, EMAIL_ADDRESS, WHATSAPP_NUMBER } from "@/lib/i18n";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Hijau Kelapa" },
      { name: "description", content: "Hubungi Hijau Kelapa via WhatsApp atau email untuk pertanyaan dan permintaan penawaran produk turunan kelapa." },
      { property: "og:title", content: "Kontak — Hijau Kelapa" },
      { property: "og:description", content: "Hubungi kami via WhatsApp atau email untuk pertanyaan dan penawaran." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{t("contact.title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("contact.subtitle")}</p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary-deep">
            <MapPin className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold">{t("contact.address.title")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("contact.address.body")}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary-deep">
            <Clock className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold">{t("contact.hours.title")}</h2>
          <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{t("contact.hours.body")}</p>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/15 to-secondary p-6 shadow-[var(--shadow-card)]">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)]">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold">WhatsApp</h2>
          <p className="mt-2 text-sm text-muted-foreground">+{WHATSAPP_NUMBER}</p>
          <Button
            asChild
            className="mt-4 w-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90"
          >
            <a href={buildWhatsappLink(t("whatsapp.default"))} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4" />
              {t("contact.whatsapp")}
            </a>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary-deep">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold">Email</h2>
          <p className="mt-2 text-sm text-muted-foreground">{EMAIL_ADDRESS}</p>
          <Button asChild variant="outline" className="mt-4 w-full">
            <a href={buildEmailLink(t("brand.tagline"))}>
              <Mail className="mr-1.5 h-4 w-4" />
              {t("contact.email")}
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
        <iframe
          title="Lokasi Hijau Kelapa"
          src="https://www.openstreetmap.org/export/embed.html?bbox=108.6%2C-7.7%2C108.7%2C-7.6&layer=mapnik"
          className="h-72 w-full border-0"
          loading="lazy"
        />
      </div>

      <div className="mx-auto mt-10 max-w-5xl text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-deep">
          {t("contact.social.title")}
        </h3>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary-deep transition-colors hover:bg-secondary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary-deep transition-colors hover:bg-secondary"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

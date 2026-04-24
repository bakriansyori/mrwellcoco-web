import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles, Leaf, Globe2, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useT, productSlugs, buildWhatsappLink } from "@/lib/i18n";
import heroImg from "@/assets/hero-plantation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hijau Kelapa — Cocopeat, Cocofiber, Cocochip & Arang Batok" },
      { name: "description", content: "Produsen produk turunan kelapa berkualitas ekspor: cocopeat, cocofiber, cocochip, dan arang batok kelapa dari Indonesia." },
      { property: "og:title", content: "Hijau Kelapa — Produk Turunan Kelapa Berkualitas Ekspor" },
      { property: "og:description", content: "Produsen cocopeat, cocofiber, cocochip, dan arang batok kelapa berkualitas ekspor dari Indonesia." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const t = useT();

  const reasons = [
    { icon: Sparkles, key: "quality" },
    { icon: Leaf, key: "natural" },
    { icon: Globe2, key: "export" },
    { icon: BadgeDollarSign, key: "price" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial view of coconut plantation"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-deep/70 via-primary-deep/55 to-background/95" />
        <div className="container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Leaf className="h-3.5 w-3.5" /> {t("brand.tagline")}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
              {t("hero.subtitle")}
            </p>
            <p className="mt-5 max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-5 text-base leading-relaxed text-white/95 backdrop-blur md:text-lg">
              {t("hero.narrative")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/produk">
                  {t("hero.cta.products")} <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                <a href={buildWhatsappLink(t("whatsapp.default"))} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  {t("hero.cta.whatsapp")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t("featured.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("featured.subtitle")}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productSlugs.map((slug) => (
            <ProductCard key={slug} slug={slug} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/produk">
              {t("featured.viewAll")} <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[var(--cream)] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t("why.title")}</h2>
            <p className="mt-3 text-muted-foreground">{t("why.subtitle")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{t(`why.${key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`why.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;

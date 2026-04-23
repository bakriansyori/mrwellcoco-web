import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Target, ShieldCheck } from "lucide-react";
import { useT } from "@/lib/i18n";
import processImg from "@/assets/about-process.jpg";
import plantationImg from "@/assets/hero-plantation.jpg";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Hijau Kelapa" },
      { name: "description", content: "Produsen produk turunan kelapa Indonesia yang berkomitmen pada kualitas dan kelestarian lingkungan." },
      { property: "og:title", content: "Tentang Kami — Hijau Kelapa" },
      { property: "og:description", content: "Produsen produk turunan kelapa Indonesia yang berkomitmen pada kualitas dan kelestarian." },
      { property: "og:image", content: plantationImg },
      { name: "twitter:image", content: plantationImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const blocks = [
    { icon: Leaf, key: "story" },
    { icon: Target, key: "mission" },
    { icon: ShieldCheck, key: "commitment" },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={plantationImg}
          alt=""
          width={1920}
          height={600}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-deep/75 to-primary-deep/55" />
        <div className="container mx-auto px-4 py-20 text-white md:py-28">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{t("about.title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{t("about.lead")}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={processImg}
              alt="Coconut processing"
              width={1280}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-8">
            {blocks.map(({ icon: Icon, key }) => (
              <div key={key} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary-deep">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold">{t(`about.${key}.title`)}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{t(`about.${key}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

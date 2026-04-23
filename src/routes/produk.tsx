import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { productSlugs, useT } from "@/lib/i18n";

export const Route = createFileRoute("/produk")({
  head: () => ({
    meta: [
      { title: "Produk — Hijau Kelapa" },
      { name: "description", content: "Katalog lengkap produk turunan kelapa: cocopeat, cocofiber, cocochip, dan arang batok kelapa." },
      { property: "og:title", content: "Produk — Hijau Kelapa" },
      { property: "og:description", content: "Katalog lengkap produk turunan kelapa berkualitas ekspor." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const t = useT();
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{t("products.title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("products.subtitle")}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productSlugs.map((slug) => (
          <ProductCard key={slug} slug={slug} />
        ))}
      </div>
    </section>
  );
}

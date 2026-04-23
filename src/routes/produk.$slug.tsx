import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  products,
  productSlugs,
  useLang,
  useT,
  buildWhatsappLink,
  type ProductSlug,
} from "@/lib/i18n";
import cocopeatImg from "@/assets/cocopeat.jpg";
import cocofiberImg from "@/assets/cocofiber.jpg";
import cocochipImg from "@/assets/cocochip.jpg";
import charcoalImg from "@/assets/charcoal.jpg";

const imageMap: Record<string, string> = {
  cocopeat: cocopeatImg,
  cocofiber: cocofiberImg,
  cocochip: cocochipImg,
  charcoal: charcoalImg,
};

function isProductSlug(value: string): value is ProductSlug {
  return (productSlugs as readonly string[]).includes(value);
}

export const Route = createFileRoute("/produk/$slug")({
  loader: ({ params }) => {
    if (!isProductSlug(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    if (!isProductSlug(params.slug)) {
      return { meta: [{ title: "Produk — Hijau Kelapa" }] };
    }
    const product = products[params.slug];
    return {
      meta: [
        { title: `${product.name.id} — Hijau Kelapa` },
        { name: "description", content: product.short.id },
        { property: "og:title", content: `${product.name.id} — Hijau Kelapa` },
        { property: "og:description", content: product.short.id },
        { property: "og:image", content: imageMap[product.image] },
        { name: "twitter:image", content: imageMap[product.image] },
      ],
    };
  },
  component: ProductDetailPage,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Produk tidak ditemukan</h1>
      <Link to="/produk" className="mt-4 inline-block text-primary-deep underline">
        Kembali ke daftar produk
      </Link>
    </div>
  ),
});

function ProductDetailPage() {
  const { slug } = Route.useLoaderData();
  const { lang } = useLang();
  const t = useT();
  const product = products[slug];

  const waMessage = `${t("whatsapp.product")} ${product.name[lang]}.`;

  return (
    <article className="container mx-auto px-4 py-12 md:py-16">
      <Link to="/produk" className="text-sm font-medium text-primary-deep hover:underline">
        {t("products.back")}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <img
            src={imageMap[product.image]}
            alt={product.name[lang]}
            width={1024}
            height={1024}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{product.name[lang]}</h1>
          <p className="mt-2 text-lg text-primary-deep">{product.short[lang]}</p>
          <p className="mt-5 text-foreground/85 leading-relaxed">{product.description[lang]}</p>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-deep">
              {t("products.uses")}
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.uses[lang].map((use) => (
                <li key={use} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-[var(--cream)] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-deep">
              {t("products.specs")}
            </h2>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {product.specs[lang].map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs text-muted-foreground">{spec.label}</dt>
                  <dd className="text-sm font-semibold">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90"
            >
              <a href={buildWhatsappLink(waMessage)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" />
                {t("products.order")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

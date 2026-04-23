import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products, useLang, useT, type ProductSlug } from "@/lib/i18n";
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

export function ProductCard({ slug }: { slug: ProductSlug }) {
  const { lang } = useLang();
  const t = useT();
  const product = products[slug];

  return (
    <Link
      to="/produk/$slug"
      params={{ slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageMap[product.image]}
          alt={product.name[lang]}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-foreground">{product.name[lang]}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.short[lang]}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-deep">
          {t("products.viewDetail")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

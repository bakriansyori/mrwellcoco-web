import { createContext, useContext } from "react";

export type Lang = "id" | "en";

export const WHATSAPP_NUMBER = "6281234567890"; // contoh nomor — ganti sesuai kebutuhan
export const EMAIL_ADDRESS = "info@mrwellcoco.com";

export const productSlugs = ["cocopeat", "cocofiber", "cocochip", "arang-batok"] as const;
export type ProductSlug = (typeof productSlugs)[number];

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  id: {
    "brand.name": "Mr WellCoco",
    "brand.tagline": "Produk Turunan Kelapa Berkualitas Ekspor",
    "nav.home": "Beranda",
    "nav.products": "Produk",
    "nav.about": "Tentang Kami",
    "nav.contact": "Kontak",
    "nav.whatsapp": "WhatsApp",

    "hero.title": "Kekayaan Kelapa Nusantara untuk Dunia",
    "hero.subtitle": "Cocopeat, cocofiber, cocochip, dan arang batok kelapa pilihan — diolah secara alami dengan standar ekspor.",
    "hero.narrative": "Produk turunan kelapa kami hadir sebagai solusi alami, berkelanjutan, dan bernilai tinggi untuk berbagai kebutuhan industri dan pertanian modern. Dengan memanfaatkan setiap bagian dari kelapa secara optimal, kami menghadirkan cocopeat, cocofiber, cocochip, dan arang berkualitas ekspor yang ramah lingkungan dan terpercaya.",
    "hero.cta.products": "Lihat Produk",
    "hero.cta.whatsapp": "WhatsApp Kami",

    "featured.title": "Produk Unggulan",
    "featured.subtitle": "Empat produk turunan kelapa terbaik kami, siap dikirim ke seluruh dunia.",
    "featured.viewAll": "Lihat Semua Produk",

    "why.title": "Mengapa Memilih Kami",
    "why.subtitle": "Komitmen kami pada kualitas, kelestarian, dan kepuasan pelanggan.",
    "why.quality.title": "Kualitas Premium",
    "why.quality.desc": "Bahan baku pilihan dari perkebunan kelapa terbaik di Indonesia.",
    "why.natural.title": "100% Alami",
    "why.natural.desc": "Diproses tanpa bahan kimia berbahaya, ramah lingkungan.",
    "why.export.title": "Siap Ekspor",
    "why.export.desc": "Kemasan dan dokumentasi sesuai standar internasional.",
    "why.price.title": "Harga Kompetitif",
    "why.price.desc": "Langsung dari produsen, tanpa perantara.",

    "products.title": "Produk Kami",
    "products.subtitle": "Jelajahi katalog lengkap produk turunan kelapa berkualitas tinggi.",
    "products.viewDetail": "Lihat Detail",
    "products.order": "Pesan via WhatsApp",
    "products.specs": "Spesifikasi",
    "products.uses": "Kegunaan",
    "products.back": "← Kembali ke Produk",

    "spec.moisture": "Kelembaban",
    "spec.size": "Ukuran",
    "spec.packaging": "Kemasan",
    "spec.ec": "EC Value",
    "spec.ash": "Kadar Abu",
    "spec.fixedCarbon": "Karbon Tetap",
    "spec.length": "Panjang Serat",

    "about.title": "Tentang Mr WellCoco",
    "about.lead": "Kami adalah produsen produk turunan kelapa dari jantung Nusantara, berkomitmen menghadirkan kelestarian alam dalam setiap produk.",
    "about.story.title": "Cerita Kami",
    "about.story.body": "Berdiri dengan visi memaksimalkan potensi kelapa Indonesia, kami bekerja sama dengan petani lokal untuk menghasilkan cocopeat, cocofiber, cocochip, dan arang batok kelapa berkualitas ekspor. Setiap butir kelapa kami olah dengan teknik modern yang tetap menjaga sifat alaminya.",
    "about.mission.title": "Visi & Misi",
    "about.mission.body": "Visi: Menjadi mitra ekspor produk kelapa terdepan di Asia Tenggara. Misi: Memberdayakan petani lokal, menjaga kelestarian lingkungan, dan menghadirkan produk berkualitas konsisten ke pasar global.",
    "about.commitment.title": "Komitmen Kualitas",
    "about.commitment.body": "Setiap batch produk melewati kontrol kualitas berlapis — dari pemilihan bahan baku, proses pengeringan, hingga pengemasan akhir. Kami percaya kualitas konsisten adalah dasar kepercayaan jangka panjang.",

    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Siap menjawab pertanyaan dan permintaan penawaran Anda.",
    "contact.address.title": "Alamat",
    "contact.address.body": "Jl. Kelapa Hijau No. 88, Kabupaten Pangandaran, Jawa Barat, Indonesia",
    "contact.hours.title": "Jam Operasional",
    "contact.hours.body": "Senin – Jumat: 08.00 – 17.00 WIB\nSabtu: 08.00 – 13.00 WIB",
    "contact.whatsapp": "Chat di WhatsApp",
    "contact.email": "Kirim Email",
    "contact.social.title": "Sosial Media",

    "footer.tagline": "Produk turunan kelapa alami untuk pasar global.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.contact": "Kontak",
    "footer.rights": "© 2026 mrwellcoco. Hak cipta dilindungi.",

    "whatsapp.default": "Halo, saya tertarik dengan produk turunan kelapa Anda.",
    "whatsapp.product": "Halo, saya tertarik dengan produk",
  },
  en: {
    "brand.name": "Mr WellCoco",
    "brand.tagline": "Export-Grade Coconut By-Products",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp",

    "hero.title": "The Richness of Indonesian Coconut for the World",
    "hero.subtitle": "Premium cocopeat, cocofiber, cocochip, and coconut shell charcoal — naturally processed to international export standards.",
    "hero.narrative": "Our coconut by-products offer natural, sustainable, and high-value solutions for modern industry and agriculture. By optimally utilizing every part of the coconut, we deliver export-grade cocopeat, cocofiber, cocochip, and charcoal that are eco-friendly and trusted worldwide.",
    "hero.cta.products": "View Products",
    "hero.cta.whatsapp": "Message Us",

    "featured.title": "Featured Products",
    "featured.subtitle": "Our four signature coconut by-products, ready to ship worldwide.",
    "featured.viewAll": "View All Products",

    "why.title": "Why Choose Us",
    "why.subtitle": "Our commitment to quality, sustainability, and customer satisfaction.",
    "why.quality.title": "Premium Quality",
    "why.quality.desc": "Selected raw materials from the finest Indonesian coconut plantations.",
    "why.natural.title": "100% Natural",
    "why.natural.desc": "Processed without harmful chemicals, eco-friendly throughout.",
    "why.export.title": "Export Ready",
    "why.export.desc": "Packaging and documentation meeting international standards.",
    "why.price.title": "Competitive Pricing",
    "why.price.desc": "Direct from producer, no middlemen involved.",

    "products.title": "Our Products",
    "products.subtitle": "Explore our complete catalog of high-quality coconut by-products.",
    "products.viewDetail": "View Details",
    "products.order": "Order via WhatsApp",
    "products.specs": "Specifications",
    "products.uses": "Applications",
    "products.back": "← Back to Products",

    "spec.moisture": "Moisture",
    "spec.size": "Size",
    "spec.packaging": "Packaging",
    "spec.ec": "EC Value",
    "spec.ash": "Ash Content",
    "spec.fixedCarbon": "Fixed Carbon",
    "spec.length": "Fiber Length",

    "about.title": "About Mr WellCoco",
    "about.lead": "We are coconut by-product manufacturers from the heart of the Indonesian archipelago, committed to bringing nature's sustainability into every product.",
    "about.story.title": "Our Story",
    "about.story.body": "Founded with a vision to maximize the potential of Indonesian coconuts, we work with local farmers to produce export-grade cocopeat, cocofiber, cocochip, and coconut shell charcoal. Every coconut is processed with modern techniques while preserving its natural properties.",
    "about.mission.title": "Vision & Mission",
    "about.mission.body": "Vision: To be the leading coconut product export partner in Southeast Asia. Mission: Empower local farmers, preserve the environment, and deliver consistent quality to the global market.",
    "about.commitment.title": "Quality Commitment",
    "about.commitment.body": "Every batch passes multi-layered quality control — from raw material selection, drying, to final packaging. We believe consistent quality is the foundation of long-term trust.",

    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to answer your questions and quote requests.",
    "contact.address.title": "Address",
    "contact.address.body": "Jl. Kelapa Hijau No. 88, Pangandaran Regency, West Java, Indonesia",
    "contact.hours.title": "Operating Hours",
    "contact.hours.body": "Monday – Friday: 08:00 – 17:00 WIB\nSaturday: 08:00 – 13:00 WIB",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.email": "Send Email",
    "contact.social.title": "Social Media",

    "footer.tagline": "Natural coconut by-products for the global market.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 mrwellcoco. All rights reserved.",

    "whatsapp.default": "Hello, I'm interested in your coconut by-products.",
    "whatsapp.product": "Hello, I'm interested in",
  },
};

type ProductContent = {
  name: Record<Lang, string>;
  short: Record<Lang, string>;
  description: Record<Lang, string>;
  uses: Record<Lang, string[]>;
  specs: Record<Lang, { label: string; value: string }[]>;
  image: string;
};

export const products: Record<ProductSlug, ProductContent> = {
  cocopeat: {
    name: { id: "Cocopeat", en: "Cocopeat" },
    short: {
      id: "Media tanam alami dengan retensi air tinggi.",
      en: "Natural growing medium with high water retention.",
    },
    description: {
      id: "Cocopeat adalah serbuk halus dari sabut kelapa yang dijadikan media tanam unggulan. Memiliki kemampuan menahan air hingga 8x bobotnya, aerasi baik, dan pH netral — cocok untuk hortikultura modern, hidroponik, dan pembibitan.",
      en: "Cocopeat is a fine powder from coconut husk used as a superior growing medium. It retains water up to 8x its weight, has excellent aeration, and a neutral pH — perfect for modern horticulture, hydroponics, and nurseries.",
    },
    uses: {
      id: ["Media tanam hortikultura", "Hidroponik & substrat", "Pembibitan tanaman", "Campuran tanah taman"],
      en: ["Horticulture growing media", "Hydroponics & substrate", "Plant nurseries", "Garden soil mix"],
    },
    specs: {
      id: [
        { label: "Kelembaban", value: "≤ 18%" },
        { label: "EC Value", value: "≤ 0.5 mS/cm (low EC)" },
        { label: "Kemasan", value: "5 kg blok / 650 g briket / curah" },
        { label: "Ukuran", value: "0 – 10 mm" },
      ],
      en: [
        { label: "Moisture", value: "≤ 18%" },
        { label: "EC Value", value: "≤ 0.5 mS/cm (low EC)" },
        { label: "Packaging", value: "5 kg block / 650 g briquette / bulk" },
        { label: "Size", value: "0 – 10 mm" },
      ],
    },
    image: "cocopeat",
  },
  cocofiber: {
    name: { id: "Cocofiber", en: "Cocofiber" },
    short: {
      id: "Sabut kelapa kuat untuk industri matras, jok, dan geotekstil.",
      en: "Strong coconut fiber for mattress, upholstery, and geotextile industries.",
    },
    description: {
      id: "Cocofiber adalah serat panjang dari sabut kelapa yang sudah dibersihkan dan dikeringkan. Tahan lama, elastis, dan ramah lingkungan — banyak digunakan dalam industri matras, jok mobil, geotekstil pengendali erosi, dan kerajinan.",
      en: "Cocofiber consists of long fibers from cleaned and dried coconut husks. Durable, elastic, and eco-friendly — widely used in mattresses, automotive upholstery, erosion-control geotextiles, and crafts.",
    },
    uses: {
      id: ["Matras & kasur", "Jok mobil & furniture", "Geotekstil & erosi tanah", "Tali & kerajinan"],
      en: ["Mattresses & bedding", "Automotive & furniture upholstery", "Geotextiles & soil erosion control", "Ropes & crafts"],
    },
    specs: {
      id: [
        { label: "Kelembaban", value: "≤ 18%" },
        { label: "Panjang Serat", value: "10 – 25 cm" },
        { label: "Kemasan", value: "Bale 110 kg (press)" },
        { label: "Warna", value: "Cokelat alami" },
      ],
      en: [
        { label: "Moisture", value: "≤ 18%" },
        { label: "Fiber Length", value: "10 – 25 cm" },
        { label: "Packaging", value: "110 kg pressed bale" },
        { label: "Color", value: "Natural brown" },
      ],
    },
    image: "cocofiber",
  },
  cocochip: {
    name: { id: "Cocochip", en: "Cocochip" },
    short: {
      id: "Substrat hortikultura premium untuk anggrek dan dekorasi alami.",
      en: "Premium horticulture substrate for orchids and natural decor.",
    },
    description: {
      id: "Cocochip adalah potongan sabut kelapa berbentuk chip dengan ukuran seragam. Memberikan aerasi optimal pada akar, drainase yang baik, sekaligus mempertahankan kelembaban — ideal untuk anggrek, anthurium, dan tanaman epifit lainnya.",
      en: "Cocochip is uniformly-cut coconut husk chips. It provides optimal root aeration, good drainage, and retains moisture — ideal for orchids, anthuriums, and other epiphytic plants.",
    },
    uses: {
      id: ["Substrat anggrek & anthurium", "Mulsa dekoratif", "Media tanam epifit", "Campuran substrat hidroponik"],
      en: ["Orchid & anthurium substrate", "Decorative mulch", "Epiphytic growing media", "Hydroponic substrate mix"],
    },
    specs: {
      id: [
        { label: "Ukuran", value: "8 – 25 mm" },
        { label: "Kelembaban", value: "≤ 18%" },
        { label: "EC Value", value: "≤ 1.0 mS/cm" },
        { label: "Kemasan", value: "Karung 25 kg / blok press" },
      ],
      en: [
        { label: "Size", value: "8 – 25 mm" },
        { label: "Moisture", value: "≤ 18%" },
        { label: "EC Value", value: "≤ 1.0 mS/cm" },
        { label: "Packaging", value: "25 kg sack / pressed block" },
      ],
    },
    image: "cocochip",
  },
  "arang-batok": {
    name: { id: "Arang Batok Kelapa", en: "Coconut Shell Charcoal" },
    short: {
      id: "Bahan baku briket dan karbon aktif berkualitas tinggi.",
      en: "Premium raw material for briquettes and activated carbon.",
    },
    description: {
      id: "Arang batok kelapa kami diproduksi dari tempurung kelapa pilihan melalui proses karbonisasi terkontrol. Memiliki nilai kalori tinggi, kadar abu rendah, dan karbon tetap tinggi — bahan baku unggulan untuk briket shisha, BBQ, serta produksi karbon aktif.",
      en: "Our coconut shell charcoal is produced from selected coconut shells through a controlled carbonization process. High calorific value, low ash content, and high fixed carbon — a superior raw material for shisha briquettes, BBQ, and activated carbon production.",
    },
    uses: {
      id: ["Briket shisha & BBQ", "Bahan baku karbon aktif", "Bahan bakar industri", "Filter air & udara"],
      en: ["Shisha & BBQ briquettes", "Activated carbon raw material", "Industrial fuel", "Water & air filters"],
    },
    specs: {
      id: [
        { label: "Kadar Abu", value: "≤ 3%" },
        { label: "Karbon Tetap", value: "≥ 75%" },
        { label: "Kelembaban", value: "≤ 6%" },
        { label: "Kemasan", value: "Karung 25 kg / curah" },
      ],
      en: [
        { label: "Ash Content", value: "≤ 3%" },
        { label: "Fixed Carbon", value: "≥ 75%" },
        { label: "Moisture", value: "≤ 6%" },
        { label: "Packaging", value: "25 kg sack / bulk" },
      ],
    },
    image: "charcoal",
  },
};

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "id",
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useLang();
  return (key: string) => translations[lang][key] ?? key;
}

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildEmailLink(subject: string, body = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  return `mailto:${EMAIL_ADDRESS}?${params.toString()}`;
}

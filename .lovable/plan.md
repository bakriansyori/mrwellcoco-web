
# Website Produk Kelapa — Plan

Website dwibahasa (ID/EN) untuk produk turunan kelapa dengan tema hijau muda yang fresh dan natural.

## Halaman & Struktur

**Header (sticky di semua halaman)**
- Logo brand di kiri
- Menu navigasi: Beranda · Produk · Tentang Kami · Kontak
- Toggle bahasa ID/EN di kanan
- Tombol "Hubungi via WhatsApp" sebagai CTA utama

**1. Beranda (`/`)**
- Hero section full-width dengan **foto perkebunan kelapa dari atas (aerial view)** sebagai background
- Headline besar + tagline produk kelapa berkualitas ekspor
- Tombol CTA: "Lihat Produk" & "WhatsApp Kami"
- Section "Produk Unggulan" — 4 card preview (Cocopeat, Cocofiber, Cocochip, Arang Batok)
- Section "Mengapa Memilih Kami" — 3-4 keunggulan (kualitas, alami, siap ekspor, harga kompetitif)
- Footer dengan kontak singkat

**2. Produk (`/produk`)**
- Header halaman dengan judul + deskripsi singkat
- Grid 4 card produk dengan foto, nama, deskripsi singkat, dan tombol "Lihat Detail"

**3. Detail Produk (`/produk/$slug`)** — 4 halaman detail
- Cocopeat — media tanam, retensi air tinggi
- Cocofiber — sabut kelapa untuk industri matras, jok, geotekstil
- Cocochip — substrat hortikultura, dekorasi
- Arang Batok Kelapa — bahan briket, karbon aktif
- Setiap halaman: foto besar, deskripsi lengkap, spesifikasi (kelembaban, ukuran, kemasan, EC value), kegunaan, tombol "Pesan via WhatsApp" dengan pesan pre-filled

**4. Tentang Kami (`/tentang`)**
- Cerita perusahaan & visi-misi
- Foto perkebunan & proses produksi
- Komitmen kualitas & keberlanjutan

**5. Kontak (`/kontak`)**
- Info perusahaan: alamat, jam operasional
- Tombol besar: WhatsApp (langsung buka chat) & Email (mailto)
- Embed peta lokasi sederhana
- Sosial media

## Desain Visual

- **Palet warna**: hijau muda sebagai dasar (latar lembut), aksen hijau daun yang lebih tua, putih krem untuk card, tekstur natural
- **Typography**: heading bold modern, body bersih dan mudah dibaca
- **Foto**: aerial view perkebunan kelapa di hero, foto produk close-up di card, foto proses produksi di About
- **Mood**: natural, fresh, profesional, ramah ekspor
- Responsif penuh — mobile, tablet, desktop

## Dwibahasa (ID/EN)

- Toggle bahasa di header menyimpan preferensi ke localStorage
- Semua teks UI dan konten produk tersedia dalam dua bahasa
- Default: Bahasa Indonesia

## Interaksi Kontak

- Semua tombol "Pesan" / "Kontak" → membuka WhatsApp dengan nomor & pesan pre-filled (otomatis menyesuaikan produk yang dilihat)
- Tombol "Email" → membuka email client dengan subject pre-filled
- Tidak ada form/database — sederhana dan langsung

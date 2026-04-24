
# Perbaikan Tampilan Website

## Masalah Utama

Tailwind CSS tidak ter-load sama sekali. Semua class seperti `flex`, `container`, `bg-primary`, `grid`, `px-4` tidak bekerja, sehingga website tampak "berantakan" — teks dan gambar tertumpuk tanpa layout, tanpa warna, tanpa spacing.

**Akar penyebab:**
1. `vite.config.ts` tidak memuat plugin Tailwind CSS v4 dan plugin TanStack Start — hanya plugin React saja.
2. `src/main.tsx` me-render `<App />` langsung tanpa pernah meng-import file `src/styles.css` (yang berisi konfigurasi Tailwind & tema hijau).
3. Arsitektur sekarang campuran: ada `shellComponent` di `__root.tsx` (pola TanStack Start/SSR yang seharusnya menyuntikkan stylesheet via `appCss`), tapi entry-nya pakai `RouterProvider` SPA — sehingga `shellComponent` tidak pernah dipakai dan stylesheet tidak pernah masuk ke halaman.
4. File `index.css` & `src/index.css` adalah sisa lama yang tidak terpakai dan menambah kebingungan.

## Solusi

**1. Aktifkan Tailwind CSS v4 di Vite**
- Tambahkan dependency `@tailwindcss/vite`.
- Update `vite.config.ts` untuk mendaftarkan plugin Tailwind sehingga `src/styles.css` (yang sudah berisi `@import "tailwindcss"` + tema hijau) diproses dengan benar.

**2. Import stylesheet di entry SPA**
- Tambahkan `import "./styles.css"` di `src/main.tsx` agar Tailwind terinjeksi ke halaman.

**3. Sederhanakan root route**
- Hapus `shellComponent` & `Scripts` import di `src/routes/__root.tsx`. Pertahankan hanya `head()` (meta/SEO), `component` (layout dengan Header/Footer/Outlet), dan `notFoundComponent`. Stylesheet sudah dimuat via `main.tsx`, tidak perlu di-link via `head.links`.
- Hapus referensi `appCss` import dari `__root.tsx`.

**4. Bersihkan file stale**
- Hapus isi `index.css` dan `src/index.css` (atau biarkan kosong) — keduanya tidak dipakai dan menyesatkan. Sumber kebenaran styling hanya `src/styles.css`.

**5. Verifikasi visual**
- Setelah perubahan, buka preview dan ambil screenshot homepage, halaman produk, detail produk, tentang, dan kontak untuk memastikan layout hijau muda, hero aerial perkebunan, grid 4 kartu produk, header sticky dengan toggle bahasa, dan footer tampil rapi & responsif.

## Hasil yang Diharapkan

- Header sticky dengan logo, navigasi horizontal, toggle ID/EN, tombol WhatsApp hijau.
- Hero full-width dengan foto perkebunan dari atas + overlay hijau gelap + headline putih besar.
- Section "Produk Unggulan" — 4 kartu produk dengan foto, dalam grid 4 kolom (desktop) / 2 kolom (tablet) / 1 kolom (mobile).
- Section "Mengapa Memilih Kami" dengan 4 kartu icon di latar krem.
- Footer 3 kolom dengan tautan & kontak.
- Tema hijau muda fresh konsisten di semua halaman, fully responsive.

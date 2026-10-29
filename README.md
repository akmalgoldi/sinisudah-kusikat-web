# Sinisudah.Kusikat

Website profil dan layanan untuk **Sinisudah.Kusikat**, workshop cuci dan perawatan sepatu manual di Balikpapan, Kalimantan Timur.

**Live:** [sinisudah-kusikat-web.vercel.app](https://sinisudah-kusikat-web.vercel.app)
&nbsp;·&nbsp; **Dokumen:** [PRD](PRD.md) · [Spesifikasi UI & Teknis](UI-TECH-SPEC.md)

---

## Daftar Isi

- [Ringkasan](#ringkasan)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Memulai](#memulai)
- [Struktur Proyek](#struktur-proyek)
- [Sistem Desain](#sistem-desain)
- [Alur Kerja & Deployment](#alur-kerja--deployment)
- [Roadmap](#roadmap)
- [Lisensi](#lisensi)

---

## Ringkasan

Sinisudah.Kusikat adalah *single-page website* yang berfungsi sebagai etalase digital workshop: menampilkan layanan dan tarif, bukti hasil pengerjaan, cakupan antar-jemput, serta jalur pemesanan langsung melalui WhatsApp.

Fokus utama proyek ini:

- **Konversi cepat** — setiap layanan terhubung ke WhatsApp dengan pesan yang sudah terisi sesuai konteks.
- **Mobile-first** — dioptimalkan untuk layar 360–420 px dan penggunaan satu tangan.
- **Transparansi** — tarif, estimasi waktu, dan biaya antar-jemput disampaikan secara jelas.
- **Ringan** — halaman utama di-*prerender* secara statis dengan First Load JS sekitar 123 kB.

---

## Fitur

| Bagian | Deskripsi |
| :--- | :--- |
| **Header** | Navigasi *sticky* dengan status jam operasional (WITA) dan menu hamburger di perangkat mobile. |
| **Hero** | Headline dengan animasi ketik, CTA utama, dan inspektor sepatu interaktif (tampilan kotor/bersih dengan titik penjelasan). |
| **Layanan & Tarif** | Katalog paket Fast Clean, Deep Clean, serta Unyellowing & Repaint beserta estimasi pengerjaan. |
| **Perbandingan** | Perbandingan cuci sendiri dengan perawatan profesional. |
| **Galeri** | Dokumentasi *before–after* asli untuk material kanvas, kulit, mesh, dan boots. |
| **Testimoni** | Dokumentasi serah terima pelanggan dalam format kartu *story*, dapat digeser di mobile. |
| **Antar-Jemput** | Alur pemesanan dan pembagian zona layanan di Balikpapan. |
| **FAQ** | Tanya jawab dalam format *accordion*. |
| **Lokasi & Kontak** | Jadwal operasional, peta Google Maps, dan kanal kontak resmi. |

**Kualitas teknis:**

- Animasi masuk berbasis `IntersectionObserver` yang ringan dan menghormati `prefers-reduced-motion`.
- HTML semantik, kontras warna tinggi, dan area sentuh yang memadai.
- Metadata SEO, `robots.txt`, dan `sitemap.xml` otomatis.
- HTTP security headers dikonfigurasi di `next.config.mjs`.

---

## Tech Stack

| Lapisan | Teknologi |
| :--- | :--- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Bahasa | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/), class-variance-authority, tailwind-merge |
| Tipografi | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via `next/font` |
| Ikon | [Lucide React](https://lucide.dev/) dan inline SVG |
| Hosting | [Vercel](https://vercel.com/) |

---

## Memulai

### Prasyarat

- Node.js 18.18 atau lebih baru
- npm (atau pnpm / yarn)

### Instalasi

```bash
git clone https://github.com/akmalgoldi/sinisudah-kusikat-web.git
cd sinisudah-kusikat-web
npm install
```

### Script

| Perintah | Fungsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan di `http://localhost:3000` |
| `npm run build` | Membuat build produksi |
| `npm run start` | Menjalankan hasil build produksi |
| `npm run lint` | Menjalankan pemeriksaan ESLint |

---

## Struktur Proyek

```text
sinisudah-kusikat-web/
├── public/
│   └── assets/images/        # Logo, foto hero, galeri, dan testimoni
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind layers, pola latar, dan animasi scroll
│   │   ├── layout.tsx        # Root layout, font, dan metadata SEO
│   │   ├── page.tsx          # Komposisi halaman utama
│   │   ├── not-found.tsx     # Halaman 404
│   │   ├── robots.ts         # robots.txt
│   │   └── sitemap.ts        # sitemap.xml
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── SneakerComparisonSlider.tsx
│   │   ├── Ticker.tsx
│   │   ├── Stats.tsx
│   │   ├── Services.tsx
│   │   ├── Comparison.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pickup.tsx
│   │   ├── Faq.tsx
│   │   ├── Location.tsx
│   │   ├── Footer.tsx
│   │   ├── MotionObserver.tsx # Pengatur animasi reveal dan parallax
│   │   └── ui/                # Komponen dasar: button, badge, card
│   └── lib/
│       └── utils.ts           # Helper penggabungan class (cn)
├── index.html, css/, js/, assets/   # Versi statis (mirror) tanpa framework
├── next.config.mjs
├── tailwind.config.ts
├── PRD.md
└── UI-TECH-SPEC.md
```

---

## Sistem Desain

Website menggunakan gaya **Neubrutalism**: border tegas, bayangan solid tanpa blur, sudut membulat yang terukur, dan palet warna terbatas.

| Token | Nilai | Penggunaan |
| :--- | :--- | :--- |
| `brand-red` | `#D9232E` | Warna utama merek, aksen, dan footer |
| `yellow-pop` | `#FFE600` | Sorotan, badge, dan elemen interaktif |
| `ink` | `#111111` | Teks, border, dan bayangan |
| Canvas cream | `#FAF6EB` | Latar utama halaman |

Token warna, ukuran border, bayangan, dan kurva animasi didefinisikan di [`tailwind.config.ts`](tailwind.config.ts). Pola latar (*dots*, *grid*, *blueprint*, *diagonal*) didefinisikan di [`src/app/globals.css`](src/app/globals.css).

---

## Alur Kerja & Deployment

| Branch | Lingkungan | Keterangan |
| :--- | :--- | :--- |
| `staging` | Vercel Preview | Pengembangan dan peninjauan sebelum rilis |
| `main` | Production | Otomatis ter-deploy ke domain utama |

Alur yang disarankan:

1. Kerjakan perubahan di branch `staging`.
2. Pastikan `npm run build` berhasil tanpa error.
3. Tinjau hasilnya di URL preview Vercel.
4. Merge `staging` ke `main` untuk rilis ke production.

---

## Roadmap

- [x] **v1.0** — Profil workshop, katalog tarif, galeri, zona antar-jemput, dan integrasi WhatsApp.
- [ ] **v1.1** — Formulir reservasi terstruktur sebelum diarahkan ke WhatsApp.
- [ ] **v2.0** — Pelacakan status pengerjaan sepatu (*order tracker*).

---

## Lisensi

Hak cipta © 2026 Sinisudah.Kusikat. Seluruh hak dilindungi.

Kode sumber, aset visual, dan konten dalam repositori ini merupakan milik Sinisudah.Kusikat dan tidak untuk digunakan ulang tanpa izin tertulis.

**Kontak:** [WhatsApp 0853-4808-5177](https://wa.me/6285348085177) · [Instagram @sinisudah.kusikat](https://www.instagram.com/sinisudah.kusikat)

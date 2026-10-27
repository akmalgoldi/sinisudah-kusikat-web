<div align="center">

# 👟 SINISUDAH.KUSIKAT — Web Profil & Layanan Cuci Sepatu (V1)

**Jasa Cuci & Perawatan Sepatu Kriya Manual di Balikpapan, Kalimantan Timur**

[![Status](https://img.shields.io/badge/Status-Stage%20V1%20(Production)-D9232E?style=for-the-badge)](https://sinisudah-kusikat-web.vercel.app)
[![Version](https://img.shields.io/badge/Release-v1.0.0-FFE600?style=for-the-badge&labelColor=111111&color=FFE600)](https://github.com/akmalgoldi/sinisudah-kusikat-web)
[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-gray?style=for-the-badge)](#)

[**🌐 Kunjungi Website Live (V1)**](https://sinisudah-kusikat-web.vercel.app) • [**📋 Dokumen PRD**](PRD.md) • [**🎨 Spesifikasi UI & Tech Stack**](UI-TECH-SPEC.md)

</div>

---

## 📌 Tentang Proyek

**Sinisudah.Kusikat** adalah *single-page web application* modern berkinerja tinggi yang dibangun untuk merepresentasikan identitas merek workshop cuci sepatu kriya manual di Balikpapan. Website ini dirancang khusus untuk memikat audiens muda, sneakerhead, dan pengguna harian dengan pendekatan desain **Streetwear Neo-Geometric** yang memadukan ketegasan Neo-Brutalisme dengan kelincahan *Playful Geometric*.

> [!IMPORTANT]
> **Status Rilis: Tahap V1 (Versi 1.0.0 - Production Ready)**  
> Rilis ini merupakan pondasi resmi peluncuran komersial (Go-To-Market) yang berfokus pada kecepatan akses, kemudahan navigasi mobile satu tangan, transparansi tarif antar-jemput, dan konversi pemesanan cepat via WhatsApp.

---

## ✨ Fitur Unggulan (Versi 1.0)

- 🎨 **Streetwear Neo-Geometric Design System:**
  - Palet warna terkunci: **Merah Brand (`#D9232E`)**, **Kuning Pop (`#FFE600`)**, **Warm Paper Cream (`#FAF6EB`)**, dan **Hitam Ink (`#111111`)**.
  - Border tebal *chunky* 2.5px, bayangan balok solid (*hard drop shadow* tanpa blur), dan latar kanvas dot-grid teratur.
- 🕹️ **Tactile Candy Buttons (Fisika Membal Arcade):**
  - Bentuk kapsul *pill-rounded* dengan ukuran sentuh jempol ergonomis ($\ge 48\text{px}$).
  - Animasi elastis kenyal (`cubic-bezier(0.34, 1.56, 0.64, 1)`) dengan respon fisik instan saat ditekan (*hard-press tap active physics*).
  - Dilengkapi lencana panah sirkular kontras.
- 🏷️ **Sticker Cards & Half-In Floating Badges:**
  - Kartu katalog layanan bergaya stiker dengan lencana status mengambang (`Paling Favorit` & `Restorasi Total`).
- 📱 **Mobile-First Priority:**
  - Teruji presisi pada viewport 360px–420px tanpa pergeseran samping (*zero horizontal scrollbar*).
  - Tampilan *First-Fold* seimbang menampilkan judul, 3 pilar pengerjaan, tombol CTA, dan jendela sepatu retro.
- 💬 **Contextual WhatsApp Conversion Funnel:**
  - 7 titik aksi WhatsApp terintegrasi langsung ke nomor resmi admin dengan pesan terisi otomatis sesuai layanan yang dipilih.
- 🛵 **Anti-Overclaim Route & Coverage Policy:**
  - Cakupan antar-jemput transparan di Balikpapan:
    - **Zona 1 (Radius 1–3 KM):** 100% Gratis Ongkir.
    - **Zona 2 (Balikpapan Tengah & Utara):** Ongkir Transparan sesuai jarak riil Google Maps.
    - **Zona 3 (Balikpapan Selatan & Timur):** Konfirmasi rute dan biaya pasti via WhatsApp.
- 📸 **Authentic Before–After Showcase:**
  - Dokumentasi pengerjaan manual asli untuk material sneakers denim/canvas, kulit putih, mesh/running, dan work boots.
- ♿ **Standar Aksesibilitas WCAG 2.1 AA:**
  - Rasio kontras teks sangat tinggi (16:1 di kanvas utama).
  - Tidak ada teks di bawah 14px (*zero micro-text*).
  - Mendukung `prefers-reduced-motion` untuk pengguna yang sensitif terhadap animasi.

---

## 🛠️ Tech Stack & Arsitektur

Website ini mengusung arsitektur modern berbobot ringan (*ultra-lightweight*):

| Lapisan | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15.1](https://nextjs.org/) (App Router) | React 19, Server & Client Components |
| **Bahasa** | [TypeScript 5.7](https://www.typescriptlang.org/) | *Strict type-safety* tanpa runtime error |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + CVA | Class Variance Authority & custom spring timing |
| **Tipografi** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | Tipografi geometric sans khas kultur streetwear |
| **Ikon** | [Lucide React](https://lucide.dev/) + Inline SVGs | Vektor tajam resolusi tinggi tanpa font icon berat |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) | Global Edge Network, SSL otomatis, zero-downtime deploy |
| **Mirror Statis** | HTML5 Semantik & CSS3 Murni | Tersedia di root (`index.html`) untuk opsi hosting statis |

---

## 📂 Struktur Direktori Proyek

```text
sinisudah-kusikat-web/
├── .github/                 # Konfigurasi repository
├── assets/                  # Aset gambar & ikon untuk mirror statis
│   ├── images/              # Foto before-after asli & logo UMKM
│   └── icons/               # Ikon pendukung
├── css/
│   └── style.css            # Styling CSS3 murni untuk versi statis
├── js/
│   └── main.js              # Handler routing WA versi statis
├── public/                  # Aset publik Next.js
│   └── assets/              # Gambar resolusi web untuk Next.js
├── src/
│   ├── app/
│   │   ├── globals.css      # Directives Tailwind, fisika animasi & layer base
│   │   ├── layout.tsx       # Root layout, Google Font Space Grotesk, SEO meta
│   │   ├── not-found.tsx    # Halaman custom 404 bergaya Neo-Brutalist
│   │   └── page.tsx         # Halaman utama (Single-page assembly)
│   ├── components/
│   │   ├── Header.tsx       # Sticky navbar, responsive mobile drawer
│   │   ├── Hero.tsx         # Headline, 3 pillars, CTA, split-sneaker showcase
│   │   ├── Ticker.tsx       # Marquee ticker berjalan tema streetwear
│   │   ├── Stats.tsx        # 4 metrik pengerjaan kriya
│   │   ├── Services.tsx     # Sticker cards, floating badges, paket cuci
│   │   ├── Comparison.tsx   # Perbandingan cuci sendiri vs Kusikat
│   │   ├── Gallery.tsx      # Galeri before-after terverifikasi
│   │   ├── Pickup.tsx       # Alur 3 langkah & 3 zona antar-jemput Balikpapan
│   │   ├── Faq.tsx          # Accordion tanya jawab interaktif
│   │   ├── Location.tsx     # Jadwal operasional & peta interaktif Google Maps
│   │   ├── Footer.tsx       # Ticker kuning, jadwal, kontak & medsos resmi
│   │   └── ui/              # Komponen tombol candy, badge, dan kartu
│   └── lib/
│       └── utils.ts         # Helper utility Tailwind Merge
├── index.html               # Mirror HTML5 semantik
├── package.json             # Dependensi & script proyek
├── tailwind.config.ts       # Konfigurasi design tokens & keyframe animations
├── PRD.md                   # Dokumen Product Requirements
└── UI-TECH-SPEC.md          # Dokumen Spesifikasi Desain & Antarmuka
```

---

## 🚀 Panduan Menjalankan di Lokal (Local Development)

### Prasyarat:
- [Node.js](https://nodejs.org/) v18.17 atau lebih baru
- npm / yarn / pnpm

### Langkah Instalasi:

1. **Clone repositori:**
   ```bash
   git clone https://github.com/akmalgoldi/sinisudah-kusikat-web.git
   cd sinisudah-kusikat-web
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan local development server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Kompilasi build produksi:**
   ```bash
   npm run build
   ```

---

## 🧪 Jaminan Kualitas & Hasil Audit QA

Proyek ini telah melalui proses audit menyeluruh oleh Senior QA Engineer dengan skor sempurna:
- **Build Kompilasi:** 100% Lolos tanpa error TypeScript / JSX.
- **Ukuran Bundle:** First Load JS hanya **118 kB** (ultra cepat di jaringan 4G/3G).
- **Automated QA Suite:** 37 dari 37 pengujian lolos (integritas aset, anchor link, nomor WhatsApp).
- **Audit Desain Visual (`inspect.mjs`):** **`0 FAIL`** pada pengujian multi-viewport (1440px Desktop, 768px Tablet, 390px Mobile).

---

## 🗺️ Roadmap Pengembangan (Masa Depan)

- [x] **V1.0 (Current):** Single-page profil, katalog harga, transparansi kurir 3 zona, integrasi WhatsApp, dan sistem desain Streetwear Neo-Geometric.
- [ ] **V1.1:** Integrasi formulir reservasi online terstruktur sebelum beralih ke WhatsApp.
- [ ] **V2.0:** Fitur cek resi pengerjaan sepatu (*Order Status Tracker*) langsung dari website.

---

## 📄 Hak Cipta & Kepemilikan

© 2026 **Sinisudah.Kusikat** — Seluruh hak cipta dilindungi.  
Workshop Kriya Cuci Sepatu Manual • Balikpapan, Kalimantan Timur.


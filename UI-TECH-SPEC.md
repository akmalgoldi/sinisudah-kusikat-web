# Dokumen Final Rancangan UI & Spesifikasi Tech Stack

**Proyek:** Website Profil & Katalog Informasi Sinisudah.Kusikat (Balikpapan)  
**Gaya Desain:** *Streetwear Neo-Geometric* (Perpaduan Neo-Brutalisme Streetwear & Playful Geometric)  
**Pendekatan:** *Single-Page Website*, *Mobile-First*, *Dual-Stack Architecture (Next.js 15 & Static Mirror)*  

---

## 1. Identitas Visual & Design Token (*Streetwear Neo-Geometric*)

Mengacu langsung pada *branding* **Sinisudah.Kusikat**:

* **Palet Warna Terkunci (Zero Color Clutter):**
  * **Merah Brand (`#D9232E`):** Warna identitas utama untuk elemen fokus tertinggi (*headline highlight*, badge *Restorasi Total*, tombol *Candy Button* aktif/primer).
  * **Kuning Pop (`#FFE600`):** Warna aksen interaktif kontras tinggi (*highlight box* "KAMI SIKAT.", *badge* "Paling Favorit", indikator ikon tombol).
  * **Warm Paper Cream (`#FAF6EB`):** Warna latar belakang kanvas agar mata tidak lelah (*paper texture feel* dengan subtle dot grid).
  * **Hitam Ink (`#111111`):** Warna tipografi utama, border tebal *chunky* 2.5px, dan bayangan balok solid (*hard drop shadow* tanpa blur).
  * **Putih Kanvas (`#FFFFFF`):** Latar kartu dan area baca konten bersih.

* **Fisika Animasi & Transisi Kenyal (*Bouncy Spring Physics*):**
  * `cubic-bezier(0.34, 1.56, 0.64, 1)` untuk sensasi elastis membal saat hover dan tap.
  * Keyframe `wiggle` halus untuk micro-interaction pada highlight judul.
  * Dukungan penuh `prefers-reduced-motion` untuk aksesibilitas pengguna.

* **Tipografi:** 
  * Font: **`Space Grotesk`** (Geometric Sans dengan karakter tegas khas kultur *streetwear/sneakerheads*).
  * Skala disiplin: Skala teks proporsional dengan batas minimal ukuran teks `14px` (tidak ada micro-label di bawah 13px demi kenyamanan layar mobile).

---

## 2. Spesifikasi Komponen Kunci (*Component Specs*)

### A. Candy Button (Tactile Arcade Button)
* **Bentuk:** `rounded-full` (Kapsul / Pill Shape).
* **Border:** `2.5px solid #111111`.
* **Ukuran Sentuh Mobile:** Tinggi minimal $\ge 48\text{px}$ (`min-h-[48px]` atau `min-h-[52px]` untuk tombol hero/CTA utama).
* **Hard Press Physics:**
  * Normal: `box-shadow: 4px 4px 0px #111111`
  * Hover: `translate(-2px, -2px)` dengan bayangan memanjang ke `6px 6px 0px #111111`
  * Active / Tap: `translate(2px, 2px)` dengan bayangan mengempis menjadi `2px 2px 0px #111111` (sensasi tombol arcade fisik saat ditekan di layar sentuh).
* **Ikonik:** Dilengkapi indikator ikon panah bulat di sisi kanan tombol.

### B. Sticker Card (Kartu Layanan Berkarakter)
* **Bentuk:** `rounded-xl` dengan garis border `2.5px solid #111111`.
* **Floating Badge (Half-In / Half-Out):** Badge mengambang tepat di atas border atas kartu (`absolute -top-3.5 left-6`) untuk menandai paket unggulan (`Paling Favorit` dan `Restorasi Total`).
* **Mikro-Interaksi:** Mengangkat halus saat disentuh (`hover:-translate-y-1 hover:shadow-neo-lg`).

---

## 3. Prinsip Navigasi, Header, & Tata Letak Mobile

* **Header Ringkas (*Sticky Header*):**
  * Menggunakan *sticky header* ramping di bagian atas layar yang memuat Logo Sinisudah.Kusikat di sisi kiri dan tombol CTA ringkas ("Chat WA") di sisi kanan.
* **Tanpa *Floating Button* Menumpuk:**
  * Konten mobile tetap lapang tanpa elemen melayang yang menutupi navigasi maupun form.
* **First-Fold Balance:**
  * Di layar ponsel 390px, headline dan bingkai sneaker showcase masuk ke dalam lipatan pertama tanpa ada geseran horizontal (*zero horizontal scroll*).

---

## 4. Struktur & Urutan Halaman (*Single-Page Flow*)

1. **Header**: Logo, Navigasi Desktop / Menu Drawer Mobile, dan Tombol Chat WA.
2. **Hero Section**: Headline "SEPATU KOTOR? KAMI SIKAT.", 3 Pillar Badges, Tombol CTA Candy Button, dan Split Sneaker Retro Window.
3. **Pita Berjalan (Streetwear Marquee Ticker)**.
4. **Ringkasan Workshop (Stats)**: 4 kartu metrik ramah sentuh.
5. **Katalog Layanan (Services)**: Kartu Fast Clean, Deep Clean (Floating Badge "Paling Favorit"), dan Unyellowing & Repaint (Floating Badge "Restorasi Total").
6. **Komparasi Edukatif (Cuci Sendiri vs Kusikat)**: Perbandingan visual kontras dengan ikon silang & centang di dalam lingkaran geometris tebal.
7. **Galeri Before–After**: Dokumentasi pengerjaan asli UMKM dengan label status kapsul tegas.
8. **Pick-up & Delivery (Antar-Jemput)**: Alur 3 langkah dan kartu cakupan 3 zona transparan anti-overclaim.
9. **FAQ Interaktif**: Dropdown tanya jawab dengan tombol toggle bulat interaktif.
10. **Jadwal & Peta Lokasi**: Jam operasional workshop dan peta Google Maps terintegrasi.
11. **Footer**: Ticker kuning, jadwal, tautan WA & Instagram resmi.

---

## 5. Konfigurasi Tautan & Pesan Otomatis WhatsApp

Seluruh tautan eksternal menggunakan pesan WhatsApp kontekstual:

| Konteks Tombol | Isi Pesan Otomatis (*Pre-filled Message*) |
| :--- | :--- |
| **Header & Hero (Konsultasi Umum)** | *"Halo Sinisudah.Kusikat, saya ingin berkonsultasi mengenai layanan cuci sepatu."* |
| **Kartu Layanan: Fast Clean** | *"Halo Sinisudah.Kusikat, saya tertarik dengan layanan Fast Clean (Rp35.000). Boleh info lebih lanjut?"* |
| **Kartu Layanan: Deep Clean** | *"Halo Sinisudah.Kusikat, saya tertarik dengan layanan Deep Clean (Rp45.000–Rp60.000) dan ingin konsultasi kondisi sepatu saya."* |
| **Kartu Layanan: Unyellowing & Repaint** | *"Halo Sinisudah.Kusikat, saya tertarik dengan layanan Unyellowing & Repaint (Rp125.000). Boleh info lebih lanjut?"* |
| **Bagian Pick-up & Delivery** | *"Halo Sinisudah.Kusikat, saya ingin menanyakan layanan pick-up & delivery untuk lokasi saya."* |

---

## 6. Arsitektur Dual-Stack & Standar Kualitas

* **Next.js 15 App Router (`src/`):** React 19, Tailwind CSS v3, TypeScript, Lucide Icons, Class Variance Authority (CVA).
* **Mirror Statis (`index.html` & `css/style.css`):** Versi HTML5 & CSS3 murni tersinkronisasi 100% untuk deployment instan server statis tanpa build step.
* **Audit Standar Desain:** Memenuhi kriteria uji `inspect.mjs` (0 FAIL):
  * Teks $\ge 14\text{px}$ (Zero micro-text di bawah 13px).
  * Bebas dari raw Unicode emojis (seluruh ikon menggunakan SVG bervektor tajam).
  * Rasio kontras teks memenuhi standar AAA/AA ($\ge 4.5:1$).
  * Ukuran touch target mobile memenuhi standar ergonomi jempol ($\ge 48\text{px}$).

# Product Requirements Document (PRD)

## Website Profile Layanan Cuci Sepatu (Single-Page Website)

---

## 1. Ringkasan & Ruang Lingkup Proyek (Overview & Scope)

- **Format Website**: Single-page website (satu halaman informatif, modern, dan responsif).
- **Tujuan**: Menyajikan informasi profil usaha, daftar layanan cuci dan perawatan sepatu, estimasi waktu, lokasi workshop, serta integrasi pemesanan langsung ke admin.
- **Batasan Sistem**: Mempertahankan pendekatan satu halaman. Belum ada kebutuhan yang mengharuskan aplikasi memiliki banyak halaman (multi-page) atau sistem dashboard.

---

## 2. Catatan Revisi & Penyesuaian Kebutuhan (Revision Notes)

Berikut adalah poin-poin revisi dan arahan utama dari owner yang menjadi acuan pengerjaan:

1. **Estimasi Pengerjaan**:
   - Gambaran umum estimasi waktu:
     - **Fast Clean**: 1–2 hari.
     - **Deep Clean**: 2–4 hari.
   - *Ketentuan*: Tampilkan rentang waktu ini sebagai gambaran umum. Berikan catatan penjelas bahwa estimasi final akan diinformasikan dan dikonfirmasi langsung oleh admin pada saat pelanggan hendak menyerahkan sepatu.

2. **Deskripsi Layanan**:
   - Informasi yang sudah diberikan oleh owner sudah cukup untuk deskripsi awal (tidak perlu ditandai sebagai belum diketahui).
   - Rincian deskripsi:
     - **Fast Clean**: Membersihkan bagian *upper* dan *midsole*.
     - **Deep Clean**: Membersihkan sepatu secara menyeluruh (*all-around clean*).
     - **Unyellowing & Repaint**: Mencakup pemutihan bagian menguning dan pengecatan ulang warna sepatu, serta **sudah termasuk layanan Deep Clean**.

3. **Lokasi dan Pick-up**:
   - Dilarang menebak alamat fisik maupun titik acuan jarak.
   - Gunakan tautan **Google Maps** yang sudah tersedia.
   - Mekanisme perhitungan jarak untuk layanan pick-up harus dikonfirmasi terlebih dahulu kepada owner sebelum informasi final dipublikasikan.

4. **Arsitektur Single-Page Website**:
   - Tetap pertahankan pendekatan *single-page*.
   - Belum ada kebutuhan untuk navigasi multi-halaman atau modul dashboard backend.

---

## 3. Spesifikasi Layanan & Konten

| Layanan | Cakupan Pembersihan & Perawatan | Estimasi Pengerjaan | Catatan Khusus |
| :--- | :--- | :--- | :--- |
| **Fast Clean** | Membersihkan bagian *upper* dan *midsole* | 1–2 Hari* | Ideal untuk perawatan berkala / kotor ringan. |
| **Deep Clean** | Membersihkan sepatu secara menyeluruh (*upper*, *midsole*, *insole*, *outsole*, tali) | 2–4 Hari* | Pembersihan mendalam untuk berbagai jenis bahan. |
| **Unyellowing & Repaint** | Pemutihan sol/bagian menguning & pengecatan ulang warna sepatu | Sesuai konfirmasi* | **Sudah termasuk paket Deep Clean**. |

*\*Catatan Wajib di Tampilan Antarmuka:*  
> *Estimasi pengerjaan di atas merupakan gambaran umum. Estimasi waktu final akan dikonfirmasi oleh admin saat penyerahan sepatu.*

---

## 4. Struktur Bagian Halaman (Single-Page Sections)

1. **Header & Navigation**:
   - Logo resmi Sinisudah.Kusikat, menu navigasi anchor, dan tombol CTA "Chat WA".
2. **Hero Section**:
   - Judul utama "SEPATU KOTOR? KAMI SIKAT.", value proposition 100% Handwash & Suhu Ruang Aman, tactile candy button CTA via WhatsApp, dan split showcase sneaker sebelum vs sesudah.
3. **Marquee Ticker Tape**:
   - Pita berjalan bergaya streetwear berisi poin komitmen pengerjaan teliti.
4. **Ringkasan Workshop (Stats)**:
   - 4 metrik kunci: 100% Handwash, 1–3 KM Gratis Antar-Jemput, 17–22 WITA Jam Buka, Formula Khusus Bahan.
5. **Daftar Layanan (Services)**:
   - Sticker Cards: Fast Clean, Deep Clean (Floating Badge "Paling Favorit"), dan Unyellowing & Repaint (Floating Badge "Restorasi Total").
6. **Komparasi Edukatif (Cuci Sendiri vs Kusikat)**:
   - Perbandingan komparasi metode rumahan vs standar kriya workshop.
7. **Galeri Before–After**:
   - Dokumentasi pengerjaan asli UMKM untuk canvas, leather, mesh/running, dan boots.
8. **Lokasi & Informasi Pick-up (Location & Pick-up)**:
   - Alur 3 langkah dan kartu cakupan 3 zona: Zona 1 (1–3 KM Gratis Ongkir), Zona 2 (Ongkir Transparan Maps), Zona 3 (Konfirmasi via WA).
   - Jadwal operasional terintegrasi (Selasa–Minggu 17.00–22.00, Senin Libur) dan sematan Google Maps resmi.
9. **FAQ & Footer**:
   - Tanya jawab interaktif seputar bahan & proses, jam operasional, tautan Instagram resmi, dan copyright.

---

## 5. Status Implementasi & Kualitas Antarmuka

- [x] Mekanisme pick-up 3 zona transparan terkonfirmasi tanpa overclaim.
- [x] Tautan Google Maps resmi tersemat dan teruji.
- [x] Harmonisasi palet warna streetwear terpadu (Merah Brand `#D9232E`, Kuning Pop `#FFE600`, Paper Cream `#FAF6EB`, Hitam Ink `#111111`).
- [x] Implementasi Streetwear Neo-Geometric: Tactile Candy Buttons, Sticker Cards, Floating Badges, dan Bouncy Spring Physics.
- [x] Mobile-First Audit lolos uji 0 FAIL pada resolusi mobile 390px, tablet 768px, dan desktop 1440px.

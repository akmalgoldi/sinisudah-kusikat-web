# Task Plan Implementasi — Website Profil Sinisudah.Kusikat

**Proyek:** Website Profil & Katalog Informasi Sinisudah.Kusikat (Balikpapan)  
**Bentuk Aplikasi:** *Single-Page Website* (*Mobile-First*, *Static Web*)  
**Tech Stack Utama:** HTML5 Semantik + CSS3 Murni + Vanilla JavaScript  

---

## 1. Ketentuan Umum & Batasan Implementasi

1. **Identitas Visual:** Mengacu pada branding Instagram Sinisudah.Kusikat (**Merah, Putih, dan Hitam**). Warna hijau WhatsApp tidak dijadikan warna dominan website (hanya boleh digunakan pada tombol/ikon WhatsApp jika tetap harmonis dengan keseluruhan desain).
2. **Struktur Urutan Halaman:**  
   `Header` $\rightarrow$ `Hero` $\rightarrow$ `Katalog Layanan dan Harga` $\rightarrow$ `Galeri Before–After` $\rightarrow$ `Pick-up & Delivery` $\rightarrow$ `Jam Operasional dan Lokasi` $\rightarrow$ `Footer`.
3. **Header & CTA:** Menggunakan *sticky header* yang ringkas di bagian atas layar. **Tidak menggunakan *floating WhatsApp button*** agar layar *mobile* tidak penuh.
4. **Kejujuran Data & Aset:** Jangan mengarang alamat, nomor WhatsApp, tautan Google Maps, tautan Instagram, maupun membuat gambar *dummy* yang menyerupai logo atau dokumentasi *before–after* asli.
5. **Tanpa Penambahan Fitur (*No Scope Creep*):** Tidak ada *booking* mandiri, pembayaran *online*, *order tracking*, kalkulator ongkir otomatis, testimoni, maupun *dashboard* admin.

---

## 2. Daftar Ketergantungan Eksternal (*Dependencies* dari Owner)

Item berikut belum tersedia secara final dan harus dicatat sebagai *dependency* yang jelas tanpa mengarang data palsu:

* **`DEP-01`:** File Logo resmi Sinisudah.Kusikat — *[Tersedia & Terintegrasi: assets/images/logo.png & favicon.png]*
* **`DEP-02`:** File dokumentasi foto **Before–After** asli dari owner — *[Tersedia & Terintegrasi: 4 pasang foto di assets/images/]*
* **`DEP-03`:** Nomor WhatsApp resmi owner/admin — *[Tersedia & Terintegrasi: +62 853-4808-5177 (6285348085177)]*
* **`DEP-04`:** Tautan resmi **Google Maps** lokasi Sinisudah.Kusikat — *[Tersedia & Terintegrasi: Koordinat 1°12'01.1"S 116°51'01.4"E]*
* **`DEP-05`:** Tautan resmi profil **Instagram** Sinisudah.Kusikat — *[Tersedia & Terintegrasi: https://www.instagram.com/sinisudah.kusikat]*
* **`DEP-06`:** Gambar pratinjau resmi untuk metadata `og:image` — *[Tersedia: Menggunakan logo resmi assets/images/logo.png]*
* **`DEP-07` (*Open Items PRD*):** Estimasi waktu pengerjaan layanan *Unyellowing & Repaint* serta titik acuan/mekanisme perhitungan jarak *Pick-up & Delivery*.

---

## 3. Rincian Tugas Bertahap (*Sequential Tasks*)

### Task 1: Persiapan Struktur Proyek dan Aset

* **Tujuan Task:**  
  Menyiapkan kerangka direktori proyek sesuai spesifikasi *tech stack* serta menetapkan penanganan *fallback* untuk aset yang belum tersedia tanpa membuat gambar *dummy*.
* **File atau Bagian yang Dibuat/Diubah:**
  * Direktori proyek: `sinisudah-kusikat-web/`
  * File utama: `index.html`, `css/style.css`, `js/main.js`
  * Subdirektori aset: `assets/images/` dan `assets/icons/`
* **Langkah Pekerjaan Spesifik:**
  1. Membuat struktur folder `css/`, `js/`, `assets/images/`, dan `assets/icons/`.
  2. Menginisialisasi kerangka dasar file `index.html`, `css/style.css`, dan `js/main.js`.
  3. Membiarkan folder `assets/images/` bebas dari file gambar *dummy* yang menyerupai logo atau dokumentasi asli; menyiapkan rencana komponen *fallback* HTML/CSS berlabel jelas hingga file `DEP-01` dan `DEP-02` tersedia.
* **Kriteria Selesai (*Acceptance Criteria*):**
  * [x] Struktur direktori (`index.html`, `css/style.css`, `js/main.js`, `assets/images/`, `assets/icons/`) terbentuk sesuai rancangan.
  * [x] Tidak ada *framework*, *library* eksternal, atau konfigurasi *build tool* yang tidak diperlukan.
  * [x] Tidak ada file gambar *dummy* atau generatif yang dibuat untuk memalsukan logo maupun dokumentasi hasil cuci.
* **Ketergantungan (*Dependencies*):**
  * Tidak ada ketergantungan pada *task* sebelumnya. Mencatat `DEP-01` dan `DEP-02` sebagai *dependency* aset.

---

### Task 2: Implementasi Struktur HTML5 Semantik & Konten PRD

* **Tujuan Task:**  
  Membangun seluruh struktur halaman tunggal (*single-page*) menggunakan elemen HTML5 semantik dengan urutan bagian, hierarki *heading*, elemen tautan `<a>`, dan isi konten yang presisi sesuai PRD.
* **File atau Bagian yang Dibuat/Diubah:**
  * `index.html` (seluruh elemen di dalam `<body>`).
* **Langkah Pekerjaan Spesifik:**
  1. **Header (`<header>`):** Menyusun *header* ringkas berisi identitas/fallback logo **Sinisudah.Kusikat** dan elemen `<a href>` tombol CTA ringkas menuju WhatsApp.
  2. **Hero Section (`<section id="hero">`):** Menampilkan keterangan jam operasional (**Selasa–Minggu, 17.00–22.00 | Senin Tutup**), judul utama `<h1>`, deskripsi singkat jasa cuci sepatu di Balikpapan, tombol `<a href>` CTA utama **"Konsultasi via WhatsApp"**, serta tautan `<a href="#layanan">` **"Lihat Layanan & Harga"**.
  3. **Katalog Layanan dan Harga (`<section id="layanan">`):** Membuat judul bagian `<h2>` dan 3 kartu layanan `<article>` (masing-masing menggunakan `<h3>`):
     * **Fast Clean (Rp35.000):** Membersihkan bagian *upper* dan *midsole* sepatu; estimasi umum **1–2 hari**; tombol `<a href>` pesan WhatsApp *Fast Clean*.
     * **Deep Clean (Rp45.000–Rp60.000):** Membersihkan seluruh bagian sepatu secara menyeluruh; keterangan harga bergantung tingkat kekotoran & pelanggan dapat mengirim foto sepatu via WhatsApp untuk konsultasi; estimasi umum **2–4 hari**; tombol `<a href>` pesan WhatsApp *Deep Clean*.
     * **Unyellowing & Repaint (Rp125.000):** Mencakup pemutihan kembali bagian sepatu yang menguning (*unyellowing*) dan pengecatan ulang (*repaint*), serta **sudah termasuk Deep Clean**; keterangan estimasi dikonfirmasi admin; tombol `<a href>` pesan WhatsApp *Unyellowing & Repaint*.
     * Menambahkan catatan jelas bahwa estimasi pengerjaan di atas adalah gambaran umum dan **estimasi final dikonfirmasi oleh admin** saat hendak menyerahkan sepatu.
  4. **Galeri Before–After (`<section id="galeri">`):** Menyusun bagian galeri dengan label **"Before"** dan **"After"** yang jelas. Selama `DEP-02` (foto asli dari owner) belum tersedia, tampilkan kotak *fallback* HTML/CSS yang jujur dan menandai kebutuhan aset dokumentasi asli.
  5. **Pick-up & Delivery (`<section id="pickup">`):** Menampilkan ketentuan resmi (**Gratis untuk jarak 1–3 km**, di luar jarak tersebut biaya menyesuaikan jarak) tanpa mengarang titik acuan atau rumus jarak, dilengkapi tombol `<a href>` konfirmasi WhatsApp.
  6. **Jam Operasional dan Lokasi (`<section id="lokasi">`):** Menampilkan jam operasional (**Selasa–Minggu: 17.00–22.00**, **Senin: Tutup**) dan tombol `<a href>` menuju Google Maps tanpa mengarang alamat tertulis.
  7. **Footer (`<footer>`):** Menampilkan identitas singkat **Sinisudah.Kusikat – Balikpapan**, ringkasan jam operasional, serta elemen `<a href>` untuk Instagram, WhatsApp, dan Google Maps.
* **Kriteria Selesai (*Acceptance Criteria*):**
  * [x] Urutan bagian di `index.html` sesuai: Header $\rightarrow$ Hero $\rightarrow$ Katalog Layanan dan Harga $\rightarrow$ Galeri Before–After $\rightarrow$ Pick-up & Delivery $\rightarrow$ Jam Operasional dan Lokasi $\rightarrow$ Footer.
  * [x] Hierarki *heading* berurutan secara benar (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`) dan seluruh tautan menggunakan elemen `<a href>` dengan teks tautan yang jelas.
  * [x] Seluruh rincian layanan, harga, estimasi, catatan konfirmasi admin, ketentuan *pick-up* 1–3 km, dan jadwal operasional sesuai 100% dengan PRD.
  * [x] Menggunakan *fallback* HTML/CSS yang jelas untuk logo/galeri yang belum tersedia tanpa mengarang data.
* **Ketergantungan (*Dependencies*):**
  * Bergantung pada penyelesaian **Task 1**.

---

### Task 3: Implementasi Desain CSS3 Responsif & Identitas Visual

* **Tujuan Task:**  
  Menerapkan desain *mobile-first* yang responsif dan identitas visual **Sinisudah.Kusikat** (Merah, Putih, Hitam) menggunakan CSS3 murni, termasuk indikator fokus *keyboard* dan tata letak bebas *floating button*.
* **File atau Bagian yang Dibuat/Diubah:**
  * `css/style.css`
* **Langkah Pekerjaan Spesifik:**
  1. Mendefinisikan *CSS Custom Properties* (`:root`) untuk warna identitas brand: Putih (`#FFFFFF` / `#F8FAFC`), Hitam (`#111111` / `#1F2937`), dan Merah Brand (`#D9232E`), tanpa menjadikan hijau WhatsApp sebagai warna dominan.
  2. Merancang *sticky header* yang ringkas dan nyaman pada layar *mobile* tanpa menambahkan *floating WhatsApp button*.
  3. Menerapkan tata letak *mobile-first* (1 kolom pada *smartphone*) dan *media queries* responsif untuk layar tablet/*desktop* (*CSS Grid* 3 kolom untuk kartu layanan, *Grid* responsif sederhana untuk galeri *Before–After* dan informasi operasional).
  4. Membuat *styling* khusus untuk kotak *fallback* HTML/CSS pada area logo/galeri serta tampilan status tautan yang belum aktif (`[aria-disabled="true"]`) agar tampak rapi dan informatif.
  5. Menambahkan indikator fokus *keyboard* (`:focus-visible`) yang terlihat jelas pada seluruh tautan dan tombol interaktif.
* **Kriteria Selesai (*Acceptance Criteria*):**
  * [x] Palet warna merah, putih, dan hitam tampil konsisten; hijau tidak mendominasi desain halaman.
  * [x] *Sticky header* bekerja rapi di layar *mobile* dan tidak ada *floating button* tambahan.
  * [x] Harga layanan, deskripsi, label *Before/After*, ketentuan *pick-up*, jadwal operasional (*Senin Tutup*), dan tombol CTA mudah ditemukan di layar *mobile* (`320px–480px`) maupun *desktop* (`>= 1024px`) tanpa *horizontal scroll* yang tidak disengaja.
  * [x] Indikator `:focus-visible` tampak jelas saat dinavigasi menggunakan tombol `Tab` pada *keyboard*.
* **Ketergantungan (*Dependencies*):**
  * Bergantung pada penyelesaian **Task 2**.

---

### Task 4: Implementasi Tautan WhatsApp, Google Maps, Instagram, & Smooth Scroll

* **Tujuan Task:**  
  Mengelola konfigurasi nomor WhatsApp, tautan Google Maps, tautan Instagram, dan template pesan otomatis secara terpusat di JavaScript dengan penanganan aman apabila data tautan produksi belum tersedia.
* **File atau Bagian yang Dibuat/Diubah:**
  * `js/main.js`
  * Atribut pengenal tautan pada elemen `<a>` di `index.html`.
* **Langkah Pekerjaan Spesifik:**
  1. Membuat objek konfigurasi terpusat (`SITE_CONFIG`) di bagian paling atas `js/main.js` untuk menyimpan nomor WhatsApp (`DEP-03`), URL Google Maps (`DEP-04`), URL Instagram (`DEP-05`), dan 5 variasi pesan otomatis sesuai konteks tombol:
     * Konsultasi Umum (Header, Hero, Footer)
     * Layanan *Fast Clean* (Rp35.000)
     * Layanan *Deep Clean* (Rp45.000–Rp60.000)
     * Layanan *Unyellowing & Repaint* (Rp125.000)
     * Konfirmasi *Pick-up & Delivery*
  2. Memastikan apabila nilai konfigurasi (`whatsappNumber`, `googleMapsUrl`, atau `instagramUrl`) masih kosong/belum diisi data resmi:
     * Elemen `<a>` **tidak** diarahkan ke URL palsu atau *placeholder* yang seolah-olah valid.
     * Elemen `<a>` diberi atribut `aria-disabled="true"`, atribut `title` atau keterangan status bahwa tautan menunggu konfirmasi data resmi owner, dan dicegah agar tidak membuka halaman *error* saat diklik.
  3. Apabila nilai konfigurasi telah terisi, JavaScript secara otomatis memasangkan `href="https://wa.me/..."` lengkap dengan `encodeURIComponent(pesan)` pada masing-masing elemen `<a>`.
  4. Mengatur *smooth scroll* untuk navigasi internal (seperti tombol *"Lihat Layanan & Harga"*) dengan memperhitungkan tinggi *sticky header*.
* **Kriteria Selesai (*Acceptance Criteria*):**
  * [x] Seluruh konfigurasi kontak dan tautan berada di satu blok terpusat di bagian atas `js/main.js` sehingga mudah diperbarui.
  * [x] Seluruh tombol tetap menggunakan elemen `<a href>` semantik.
  * [x] Saat data tautan belum diisi, tombol tidak mengarah ke URL palsu dan menampilkan status belum terkonfirmasi secara jelas.
  * [x] Saat diuji dengan data konfigurasi, kelima konteks tombol WhatsApp menghasilkan URL `wa.me` dengan pesan otomatis yang tepat.
* **Ketergantungan (*Dependencies*):**
  * Bergantung pada penyelesaian **Task 2** dan **Task 3**, serta membutuhkan `DEP-03`, `DEP-04`, dan `DEP-05` untuk aktivasi tautan produksi.

---

### Task 5: Optimasi SEO Lokal, Performa, dan Aksesibilitas

* **Tujuan Task:**  
  Menyempurnakan metadata SEO lokal Balikpapan, metadata Open Graph, pengaturan *lazy loading* yang tepat sasaran, serta kelengkapan atribut aksesibilitas.
* **File atau Bagian yang Dibuat/Diubah:**
  * `index.html` (bagian `<head>` dan atribut elemen media/tautan).
  * `css/style.css` (penyesuaian `scroll-padding-top` dan dukungan `prefers-reduced-motion`).
* **Langkah Pekerjaan Spesifik:**
  1. Menambahkan `<title>` dan `<meta name="description">` yang dioptimalkan untuk pencarian lokal jasa cuci sepatu di Balikpapan (*Sinisudah.Kusikat*).
  2. Menambahkan metadata Open Graph (`og:title`, `og:description`, `og:type`, `og:locale`), serta menyiapkan tag `og:image` yang ditandai dengan komentar jelas menunggu aset gambar *preview* resmi (`DEP-06`).
  3. Memastikan aturan pemuatan gambar:
     * **Tidak** menerapkan `loading="lazy"` pada logo atau gambar utama yang langsung terlihat di layar pertama (*above the fold*).
     * Menerapkan `loading="lazy"`, `decoding="async"`, dimensi `width`/`height` eksplisit, serta teks `alt` yang mendeskripsikan isi gambar pada dokumentasi galeri *Before–After* di bawah layar pertama (*below the fold*) ketika `DEP-02` dipasang.
  4. Memeriksa ulang kejelasan teks tautan, kontras warna, dan kelengkapan struktur *heading*.
* **Kriteria Selesai (*Acceptance Criteria*):**
  * [x] Tag `<title>`, `<meta name="description">`, dan metadata Open Graph terpasang rapi di `<head>`, dengan `og:image` tercatat jelas menunggu aset gambar *preview*.
  * [x] Elemen di layar pertama (*above the fold*) tidak dipaksa menggunakan `loading="lazy"`, sedangkan spesifikasi gambar galeri di bawah layar pertama menerapkan `loading="lazy"` dan teks `alt` yang sesuai.
  * [x] Struktur *heading*, teks tautan, dan navigasi *keyboard* memenuhi kriteria aksesibilitas.
* **Ketergantungan (*Dependencies*):**
  * Bergantung pada penyelesaian **Task 2**, **Task 3**, dan **Task 4**, serta `DEP-02` dan `DEP-06` untuk aset gambar produksi.

---

### Task 6: Pengujian Tampilan (*Mobile & Desktop*) serta Pemeriksaan Tautan

* **Tujuan Task:**  
  Melakukan verifikasi menyeluruh pada tampilan *mobile* dan *desktop*, menguji fungsi pembentukan tautan dengan data uji, serta memisahkan laporan fungsi teknis dari status kesiapan data produksi.
* **File atau Bagian yang Dibuat/Diubah:**
  * Seluruh file proyek (`index.html`, `css/style.css`, `js/main.js`) jika diperlukan perbaikan akhir.
* **Langkah Pekerjaan Spesifik:**
  1. Memeriksa kesesuaian tata letak dan keterbacaan pada ukuran layar *mobile* (`360px–480px`) dan *desktop* (`>= 1280px`).
  2. Memvalidasi seluruh konten terhadap PRD (harga, deskripsi *Fast Clean*, *Deep Clean*, *Unyellowing & Repaint*, catatan estimasi final oleh admin, ketentuan *pick-up* 1–3 km, serta jam operasional Selasa–Minggu 17.00–22.00 dan Senin tutup).
  3. **Pengujian Fungsi (Menggunakan Data Uji Sementara):** Menguji fungsi JavaScript untuk memastikan kelima tombol WhatsApp membentuk URL pesan otomatis yang benar, lalu mengembalikan konfigurasi ke kondisi aman (tanpa data palsu) jika data asli belum diserahkan.
  4. **Audit Validasi Produksi:** Menyusun daftar periksa (*checklist*) yang memisahkan secara jujur antara **Fungsi Kode (Teruji)** dan **Data/Aset Produksi (Menunggu Konfirmasi Owner)**.
* **Kriteria Selesai (*Acceptance Criteria*):**
  * [x] Seluruh tampilan *mobile* dan *desktop* berjalan responsif sesuai Rancangan UI dan PRD.
  * [x] Fungsi pembentukan URL pesan otomatis WhatsApp terbukti bekerja dengan benar saat diuji.
  * [x] Laporan akhir secara tegas memisahkan hasil pengujian fungsi dari validasi tautan produksi, serta tidak mengklaim tautan produksi sudah valid apabila nomor WhatsApp (`DEP-03`), link Google Maps (`DEP-04`), atau link Instagram (`DEP-05`) asli belum diberikan oleh owner.
* **Ketergantungan (*Dependencies*):**
  * Bergantung pada penyelesaian **Task 1** s/d **Task 5**.

---

### Task 7 (Peningkatan Lanjutan 1): Peningkatan Navigasi & Pengalaman Pengguna (UX)

* **Tujuan Task:**  
  Menyempurnakan alur pengguna (*user journey*) melalui penambahan navigasi menu desktop, kartu nilai unggulan (*value proposition*), serta bagian pertanyaan umum (*FAQ accordion*) yang interaktif dan aksesibel.
* **File atau Bagian yang Dibuat/Diubah:**
  * `index.html`: Penambahan `<nav class="header-nav">`, `<div class="hero-features">`, dan `<section id="faq" class="faq-section">`.
  * `css/style.css`: *Styling* responsif untuk navigasi desktop/tablet, *grid 4 kolom* nilai unggulan, dan *native HTML5 accordion* `<details>/<summary>`.
* **Kriteria Selesai (*Acceptance Criteria*):**
  * [x] Navigasi header desktop (`Layanan`, `Galeri`, `Pick-up`, `FAQ`, `Lokasi`) terpasang rapi dengan efek *underline hover* halus dan otomatis tersembunyi di *mobile* agar tidak padat.
  * [x] 4 kartu nilai unggulan (*Chemical Khusus*, *Suhu Ruang Aman*, *Pengerjaan Teliti*, *Gratis Antar-Jemput*) tampil proporsional (1 kolom di mobile, 2 kolom di tablet, 4 kolom di desktop).
  * [x] Bagian FAQ tersusun rapi menggunakan `<details>/<summary>` semantik dengan animasi rotasi *chevron* dan *border highlight* merah brand.
  * [x] Seluruh pengujian otomatis (`verify_task2.js` s/d `verify_task5.js`) tetap berstatus 100% *PASS*.

import React from "react";
import Link from "next/link";

export function Footer() {
  const waUrl =
    "https://wa.me/6285348085177?text=Halo%20Sinisudah.Kusikat%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20cuci%20sepatu.";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=-1.200306,116.850389";

  const tickerItems = [
    "Sinisudah.Kusikat Balikpapan",
    "Cuci Sepatu Manual Teliti",
    "Gratis Antar-Jemput 1–3 KM",
    "Formula Khusus Material",
    "Pengeringan Suhu Ruang Aman",
  ];

  const quickLinks = [
    { label: "Layanan & Harga", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Galeri Hasil", href: "#galeri" },
    { label: "Ulasan Pelanggan", href: "#testimoni" },
    { label: "Info Antar-Jemput", href: "#antar-jemput" },
    { label: "Tanya Jawab (FAQ)", href: "#faq" },
  ];

  return (
    <footer
      id="kontak"
      className="bg-ink text-white border-t-3 border-ink w-full overflow-hidden"
    >
      {/* Neubrutalist Yellow Ticker Strip with proper spacing */}
      <div
        className="bg-yellow-pop text-ink border-b-3 border-ink py-2.5 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="animate-ticker flex items-center whitespace-nowrap text-xs sm:text-sm font-black">
          {[0, 1].map((groupIndex) => (
            <div key={groupIndex} className="flex items-center shrink-0">
              {tickerItems.map((item, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span className="px-3 sm:px-4">{item}</span>
                  <span className="inline-block w-2 h-2 bg-brand-red border-2 border-ink rotate-45" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content Container (extra pb on mobile so floating WA + Bottom Nav never overlap) */}
      <div className="max-w-[1140px] mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-36 lg:pb-10">
        {/* High-Contrast Neubrutalist Dossier Board */}
        <div className="reveal bg-[#FAF6EB] bg-neo-dots text-ink border-3 border-ink rounded-[12px] p-4 sm:p-6 lg:p-8 shadow-[5px_5px_0px_0px_#FFE600]"> {/* taste-skill-ignore */}
          {/* Top Brand Header Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b-2 border-ink">
            <div className="flex items-start sm:items-center gap-3">
              <Link
                href="#hero"
                aria-label="Sinisudah.Kusikat Beranda"
                className="w-12 h-12 rounded-[8px] border-2 border-ink bg-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#111111] hover:-translate-y-0.5 transition-transform" /* taste-skill-ignore */
              >
                <img
                  src="/assets/images/logo.png"
                  alt="Logo Sinisudah.Kusikat"
                  className="w-9 h-9 object-contain"
                  width={36}
                  height={36}
                />
              </Link>

              <div className="flex flex-col">
                <Link
                  href="#hero"
                  className="inline-flex flex-wrap items-center gap-1.5 text-base sm:text-xl font-black tracking-tight text-ink leading-none"
                >
                  <span>SINISUDAH</span>
                  <span className="bg-brand-red text-white px-1.5 py-0.5 rounded-[5px] border-2 border-ink text-xs sm:text-sm shadow-[1.5px_1.5px_0px_0px_#111111]"> {/* taste-skill-ignore */}
                    .KUSIKAT
                  </span>
                </Link>
                <p className="text-xs sm:text-sm font-bold text-gray-700 mt-1">
                  Workshop Cuci &amp; Perawatan Sepatu Manual &bull; Balikpapan
                </p>
              </div>
            </div>

            {/* Brutalist Feature Stamps */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white border-2 border-ink rounded-[6px] px-2.5 py-1 text-xs font-black text-ink shadow-[2px_2px_0px_0px_#111111]"> {/* taste-skill-ignore */}
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-ink" />
                100% Handwash
              </span>
              <span className="inline-flex items-center gap-1.5 bg-yellow-pop border-2 border-ink rounded-[6px] px-2.5 py-1 text-xs font-black text-ink shadow-[2px_2px_0px_0px_#111111]"> {/* taste-skill-ignore */}
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red border-2 border-ink" />
                Free Pickup 1–3 KM
              </span>
            </div>
          </div>

          {/* 3-Column Mobile-First Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {/* Card 1: Jadwal Operasional Workshop */}
            <div className="cascade-item bg-white border-2 border-ink rounded-[8px] p-4 flex flex-col justify-between shadow-[3px_3px_0px_0px_#111111]"> {/* taste-skill-ignore */}
              <div>
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b-2 border-ink">
                  <h4 className="inline-flex items-center gap-1.5 text-sm font-black text-ink">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-ink" />
                    Jadwal Workshop
                  </h4>
                  <span className="bg-ink text-yellow-pop text-xs font-black px-2 py-0.5 rounded-[4px]">
                    WITA
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2 bg-[#FAF6EB] border-2 border-ink rounded-[6px] px-3 py-2">
                    <span className="text-xs sm:text-sm font-extrabold text-ink">
                      Selasa &ndash; Minggu
                    </span>
                    <span className="bg-yellow-pop text-ink border-2 border-ink rounded-[4px] px-2 py-0.5 text-xs font-black">
                      17.00 &ndash; 22.00
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 bg-red-100 border-2 border-ink rounded-[6px] px-3 py-1.5 text-red-950">
                    <span className="text-xs sm:text-sm font-extrabold">
                      Hari Senin
                    </span>
                    <span className="text-xs font-black px-2 py-0.5 bg-white border-2 border-ink rounded-[4px]">
                      Libur
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs font-bold text-gray-700 mt-3 bg-[#FAF6EB] border-2 border-ink rounded-[6px] px-2.5 py-1.5">
                Drop-off sepatu langsung diterima saat jam buka operasional.
              </p>
            </div>

            {/* Card 2: Kanal Resmi & Kontak Langsung */}
            <div className="cascade-item bg-white border-2 border-ink rounded-[8px] p-4 flex flex-col justify-between shadow-[3px_3px_0px_0px_#111111]"> {/* taste-skill-ignore */}
              <div>
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b-2 border-ink">
                  <h4 className="text-sm font-black text-ink">
                    Hubungi &amp; Ikuti Kami
                  </h4>
                  <span className="bg-brand-red text-white text-xs font-black px-2 py-0.5 rounded-[4px] border-2 border-ink">
                    Kontak
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {/* WhatsApp Directory Row */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2.5 bg-[#25D366] hover:bg-yellow-pop text-ink border-2 border-ink rounded-[6px] px-3 py-2 shadow-[2px_2px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] transition-all" /* taste-skill-ignore */
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-[5px] bg-white border-2 border-ink flex items-center justify-center shrink-0 font-black text-xs">
                        WA
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-ink/80 leading-none">
                          WhatsApp Konsultasi
                        </span>
                        <strong className="text-xs sm:text-sm font-black text-ink truncate mt-0.5">
                          0853-4808-5177
                        </strong>
                      </div>
                    </div>
                    <span className="w-6 h-6 rounded-[4px] bg-white border-2 border-ink flex items-center justify-center text-xs font-black shrink-0 group-hover:translate-x-0.5 transition-transform">
                      &rarr;
                    </span>
                  </a>

                  {/* Instagram Directory Row */}
                  <a
                    href="https://www.instagram.com/sinisudah.kusikat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2.5 bg-[#FAF6EB] hover:bg-yellow-pop text-ink border-2 border-ink rounded-[6px] px-3 py-2 shadow-[2px_2px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] transition-all" /* taste-skill-ignore */
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-[5px] bg-brand-red text-white border-2 border-ink flex items-center justify-center shrink-0 font-black text-xs">
                        IG
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-gray-600 leading-none">
                          Instagram Resmi
                        </span>
                        <strong className="text-xs sm:text-sm font-black text-ink truncate mt-0.5">
                          @sinisudah.kusikat
                        </strong>
                      </div>
                    </div>
                    <span className="w-6 h-6 rounded-[4px] bg-white border-2 border-ink flex items-center justify-center text-xs font-black shrink-0 group-hover:translate-x-0.5 transition-transform">
                      &rarr;
                    </span>
                  </a>

                  {/* Google Maps Row */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2.5 bg-[#FAF6EB] hover:bg-yellow-pop text-ink border-2 border-ink rounded-[6px] px-3 py-2 shadow-[2px_2px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] transition-all" /* taste-skill-ignore */
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-[5px] bg-yellow-pop text-ink border-2 border-ink flex items-center justify-center shrink-0 font-black text-xs">
                        PIN
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-gray-600 leading-none">
                          Titik Workshop
                        </span>
                        <strong className="text-xs sm:text-sm font-black text-ink truncate mt-0.5">
                          Google Maps Balikpapan
                        </strong>
                      </div>
                    </div>
                    <span className="w-6 h-6 rounded-[4px] bg-white border-2 border-ink flex items-center justify-center text-xs font-black shrink-0 group-hover:translate-x-0.5 transition-transform">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Navigasi Cepat & Back to Top */}
            <div className="cascade-item bg-white border-2 border-ink rounded-[8px] p-4 flex flex-col justify-between shadow-[3px_3px_0px_0px_#111111]"> {/* taste-skill-ignore */}
              <div>
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b-2 border-ink">
                  <h4 className="text-sm font-black text-ink">
                    Navigasi Cepat
                  </h4>
                  <span className="bg-[#FAF6EB] text-ink text-xs font-black px-2 py-0.5 rounded-[4px] border-2 border-ink">
                    Menu
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="bg-[#FAF6EB] hover:bg-yellow-pop text-ink border-2 border-ink rounded-[6px] px-2.5 py-2 text-xs font-extrabold flex items-center justify-between gap-1 shadow-[1.5px_1.5px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] transition-all" /* taste-skill-ignore */
                    >
                      <span className="truncate">{item.label}</span>
                      <span className="text-xs font-black shrink-0">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#hero"
                className="mt-3 w-full bg-ink hover:bg-brand-red text-white border-2 border-ink rounded-[6px] py-2 px-3 text-xs font-black flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#FFE600] active:translate-x-[1px] active:translate-y-[1px] transition-all" /* taste-skill-ignore */
              >
                <span>Kembali ke Atas</span>
                <span aria-hidden="true">&uarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Location Line */}
        <div className="mt-6 pt-4 border-t-2 border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs font-bold text-gray-300">
          <p>
            &copy; 2026 <span className="text-yellow-pop font-black">Sinisudah.Kusikat</span> Balikpapan. Seluruh hak cipta dilindungi.
          </p>
          <p className="inline-flex items-center gap-2 text-gray-400">
            <span className="w-2 h-2 rounded-full bg-brand-red inline-block" />
            <span>Balikpapan, Kalimantan Timur</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  const waUrl =
    "https://wa.me/6285348085177?text=Halo%20Sinisudah.Kusikat%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20cuci%20sepatu.";

  const tickerText =
    "Sinisudah.Kusikat Balikpapan • Cuci Sepatu Manual Teliti • Gratis Antar-Jemput 1–3 KM • Formula Khusus Material • ";

  return (
    <footer id="kontak" className="bg-ink text-white border-t-2.5 border-ink w-full overflow-hidden">
      {/* Footer Yellow Ticker */}
      <div className="bg-yellow-pop text-ink border-b-2 border-ink py-2.5 overflow-hidden select-none" aria-hidden="true">
        <div className="animate-ticker whitespace-nowrap text-sm font-extrabold tracking-wide">
          <span className="inline-block">{tickerText}</span>
          <span className="inline-block">{tickerText}</span>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Col 1: Brand & Identity */}
          <div className="reveal flex flex-col gap-3">
            <div className="flex items-center h-6">
              <span className="text-sm font-black text-yellow-pop">
                Tentang Kami
              </span>
            </div>

            <Link
              href="#hero"
              className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-black text-white tracking-tight"
              aria-label="Sinisudah.Kusikat Beranda"
            >
              <img
                src="/assets/images/logo.png"
                alt="Logo Sinisudah.Kusikat"
                className="w-10 h-10 rounded-full border-2 border-white object-contain bg-white shrink-0"
                width={40}
                height={40}
              />
              <span>
                SINISUDAH<span className="text-yellow-pop">.KUSIKAT</span>
              </span>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Jasa cuci dan perawatan sepatu manual di Balikpapan. Perawatan khusus untuk sneakers harian, suede, leather, dan boots.
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-gray-400 font-bold mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block shrink-0" />
              <span>Balikpapan, Kalimantan Timur</span>
            </div>
          </div>

          {/* Col 2: Jadwal Operasional */}
          <div className="reveal flex flex-col gap-3">
            <div className="flex items-center h-6">
              <h4 className="text-sm font-black text-white">
                Jadwal Workshop
              </h4>
            </div>

            <div className="bg-[#1F1F1F] border-2 border-[#333333] rounded-md p-4 flex flex-col gap-2.5 shadow-neo-dark">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <strong className="text-sm font-bold text-white">
                  Jam Buka Operasional
                </strong>
              </div>
              <p className="text-sm sm:text-base font-bold text-yellow-pop">
                Selasa&ndash;Minggu: 17.00&ndash;22.00 WITA
              </p>
              <span className="text-sm font-semibold text-gray-400">
                Senin: Libur Operasional
              </span>
              <p className="text-sm text-gray-400 pt-2">
                Drop-off sepatu langsung diterima saat jam operasional buka
              </p>
            </div>
          </div>

          {/* Col 3: Hubungi & Ikuti Kami */}
          <div className="reveal flex flex-col gap-3">
            <div className="flex items-center h-6">
              <h4 className="text-sm font-black text-white">
                Hubungi &amp; Ikuti Kami
              </h4>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
                aria-label="Chat WhatsApp untuk konsultasi"
              >
                <Button variant="footer" size="full" className="text-sm sm:text-base font-black py-2.5 sm:py-3">
                  Chat WhatsApp &rarr;
                </Button>
              </a>

              <a
                href="https://www.instagram.com/sinisudah.kusikat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-0.5 bg-[#1F1F1F] border-2 border-[#333333] rounded-md p-3 shadow-neo-dark hover:border-yellow-pop hover:bg-[#262626] hover:translate-x-0.5 hover:translate-y-0.5 transition-colors"
                title="Kunjungi profil Instagram resmi Sinisudah.Kusikat"
              >
                <span className="text-sm font-semibold text-gray-400">
                  Instagram Resmi
                </span>
                <strong className="text-sm sm:text-base font-extrabold text-white">
                  @sinisudah.kusikat &rarr;
                </strong>
              </a>

              <div className="pt-1">
                <Link
                  href="#faq"
                  className="text-sm font-semibold text-gray-400 hover:text-yellow-pop underline transition-colors"
                >
                  Punya pertanyaan seputar layanan? Baca FAQ &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#0A0A0A] border-t-2 border-[#1A1A1A] py-4 px-4 sm:px-6 lg:px-8 text-sm text-gray-400">
        <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>&copy; 2026 Sinisudah.Kusikat Balikpapan. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 font-medium">Balikpapan, Kalimantan Timur</span>
            <span className="text-gray-600">&bull;</span>
            <Link href="#hero" className="hover:text-yellow-pop font-bold text-gray-300 hover:text-white transition-colors">
              Kembali ke Atas &uarr;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

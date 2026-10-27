import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Pickup() {
  const waUrl =
    "https://wa.me/6285348085177?text=Halo%20Sinisudah.Kusikat%2C%20saya%20ingin%20menanyakan%20layanan%20pick-up%20%26%20delivery%20untuk%20lokasi%20saya.";

  return (
    <section id="antar-jemput" className="relative bg-yellow-pop bg-neo-dots-strong border-b-3 border-ink py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Neubrutalist Decorative Background Shapes */}
      <div
        aria-hidden="true"
        data-parallax="-0.12"
        className="hidden sm:block pointer-events-none select-none absolute top-12 -left-4 w-14 h-14 bg-white border-2.5 border-ink rounded-[8px] rotate-6 shadow-neo-xs"
      />
      <div
        aria-hidden="true"
        data-parallax="0.12"
        className="hidden sm:block pointer-events-none select-none absolute bottom-12 -right-4 w-14 h-14 bg-brand-red border-2.5 border-ink rounded-[8px] -rotate-12 shadow-neo-xs"
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="reveal-header text-center mb-10 sm:mb-14">
          <div className="sticker-pop inline-flex items-center gap-2 bg-white text-ink border-2 border-ink px-3 py-1 rounded-[6px] shadow-neo-xs font-black text-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 border border-ink" />
            <span>05 // LAYANAN KURIR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink uppercase tracking-tight">
            ANTAR-JEMPUT{" "}
            <span className="sticker-pop inline-block bg-brand-red text-white px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm">
              SEPATU.
            </span>
          </h2>
          <p className="text-base text-ink max-w-2xl mx-auto mt-3 font-semibold leading-relaxed">
            <span className="italic font-black text-ink underline decoration-2 decoration-brand-red mr-1.5">
              bebas ribet dari rumah &darr;
            </span>
            Layanan kurir jemput dan antar sepatu khusus wilayah Balikpapan. Anda tetap santai di rumah, biar tim kami yang jemput dan bersihkan.
          </p>
        </div>

        {/* Unified Route & Coverage Box */}
        <div className="reveal bg-white border-2.5 border-ink rounded-lg p-6 sm:p-8 md:p-10 shadow-neo-lg">
          {/* Header inside Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-ink/15 pb-6 mb-7">
            <div>
              <span className="text-sm font-black text-brand-red">
                Cakupan Wilayah Balikpapan
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight mt-0.5">
                Daftar Radius &amp; Tarif Antar-Jemput
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FAF6EB] border-2 border-ink rounded-full px-4 py-1.5 shadow-neo-sm shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span className="text-sm font-black text-ink">
                Siap Jemput Hari Ini
              </span>
            </div>
          </div>

          {/* 3 Step Route Ribbon */}
          <div className="bg-[#FAF6EB] border-2 border-ink rounded-md p-4 sm:p-5 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="cascade-item flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white border-2 border-ink flex items-center justify-center shrink-0 shadow-neo-sm">
                  <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-sm sm:text-base font-extrabold text-ink block">Kirim Foto &amp; Alamat</strong>
                  <p className="text-sm text-gray-700 leading-snug mt-0.5">Hubungi WhatsApp kami dan kirimkan titik lokasi rumah Anda.</p>
                </div>
              </div>

              <div className="cascade-item flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-pop border-2 border-ink flex items-center justify-center shrink-0 shadow-neo-sm">
                  <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-sm sm:text-base font-extrabold text-ink block">Kurir Jemput ke Rumah</strong>
                  <p className="text-sm text-gray-700 leading-snug mt-0.5">Tim kurir kami mengambil sepatu langsung di depan pintu.</p>
                </div>
              </div>

              <div className="cascade-item flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white border-2 border-ink flex items-center justify-center shrink-0 shadow-neo-sm">
                  <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-sm sm:text-base font-extrabold text-ink block">Diantar Bersih &amp; Wangi</strong>
                  <p className="text-sm text-gray-700 leading-snug mt-0.5">Setelah selesai dicuci manual teliti, sepatu diantar kembali siap pakai.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Zone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Zone 1 */}
            <div className="cascade-item bg-[#FFFDE7] border-2.5 border-ink rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-neo-md hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop">
              <div>
                <span className="text-sm font-black text-ink block mb-2">
                  Zona 1 (Radius 1–3 KM)
                </span>
                <div className="mb-4">
                  <span className="inline-block px-3.5 py-1.5 text-base font-black rounded-full border-2 border-ink bg-brand-red text-white shadow-neo-xs">
                    100% GRATIS ONGKIR
                  </span>
                </div>
                <p className="text-sm font-bold text-ink leading-relaxed mb-4">
                  Graha Indah, Kariangau Bawah, Batu Ampar Km 4–5, dan perumahan sekitar workshop.
                </p>
              </div>
              <div className="bg-white border-2 border-ink/20 rounded-lg p-3 text-sm font-bold text-ink">
                Gratis jemput &amp; antar tanpa minimum
              </div>
            </div>

            {/* Zone 2 */}
            <div className="cascade-item bg-white border-2.5 border-ink rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-neo-md hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop">
              <div>
                <span className="text-sm font-black text-ink block mb-2">
                  Zona 2 (Balikpapan Tengah &amp; Utara)
                </span>
                <div className="mb-4">
                  <span className="inline-block px-3.5 py-1.5 text-base font-black rounded-full border-2 border-ink bg-yellow-pop text-ink shadow-neo-xs">
                    ONGKIR TRANSPARAN
                  </span>
                </div>
                <p className="text-sm font-bold text-ink leading-relaxed mb-4">
                  MT Haryono, Balikpapan Baru, Ring Road, Wika, Kampung Baru, dan Karang Rejo. Ongkos dihitung riil sesuai jarak tempuh Google Maps.
                </p>
              </div>
              <div className="bg-[#FAF6EB] border-2 border-ink/20 rounded-lg p-3 text-sm font-semibold text-gray-800">
                Tarif murni kurir lokal tanpa mark-up
              </div>
            </div>

            {/* Zone 3 */}
            <div className="cascade-item bg-white border-2.5 border-ink rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-neo-md hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop">
              <div>
                <span className="text-sm font-black text-ink block mb-2">
                  Zona 3 (Balikpapan Selatan &amp; Timur)
                </span>
                <div className="mb-4">
                  <span className="inline-block px-3.5 py-1.5 text-base font-black rounded-full border-2 border-ink bg-ink text-white shadow-neo-xs">
                    KONFIRMASI VIA WA
                  </span>
                </div>
                <p className="text-sm font-bold text-ink leading-relaxed mb-4">
                  Klandasan, Sudirman, Sepinggan, Batakan, Manggar, dan wilayah lainnya. Cek rute dan ongkir pasti sebelum kurir meluncur.
                </p>
              </div>
              <div className="bg-[#FAF6EB] border-2 border-ink/20 rounded-lg p-3 text-sm font-semibold text-gray-800">
                Disepakati bersama admin via chat
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t-2 border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <p className="text-sm sm:text-base text-gray-800 font-medium max-w-xl">
              Lokasi rumah Anda belum tertera di daftar? Kirimkan titik alamat via WhatsApp, kami siap bantu cek estimasi ongkir terbaik.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan Layanan Antar-Jemput via WhatsApp"
              className={cn(
                buttonVariants({ variant: "brand", size: "lg" }),
                "w-full sm:w-auto shrink-0 text-base font-black px-7 py-3.5 flex items-center justify-center gap-3"
              )}
            >
              <span>Jadwalkan Antar-Jemput via WA</span>
              <span className="w-7 h-7 rounded-full bg-white text-ink flex items-center justify-center shrink-0 text-sm font-black border border-ink shadow-neo-xs" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

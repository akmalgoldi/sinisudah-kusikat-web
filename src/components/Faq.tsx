"use client";

import React, { useState } from "react";

export function Faq() {
  const faqs = [
    {
      q: "Bahan sepatu apa saja yang bisa dicuci di Sinisudah.Kusikat?",
      a: "Kami melayani hampir semua material sepatu, termasuk canvas, mesh, knit, kulit sintetis, kulit asli, suede, dan nubuck. Setiap material dibersihkan menggunakan formula pembersih khusus serta bulu sikat dengan kelembutan yang disesuaikan agar serat dan warna bahan tetap awet.",
    },
    {
      q: "Apakah proses cuci sepatu berisiko merusak lem atau membuat sol menguning?",
      a: "Tidak. Kami tidak pernah merendam sepatu di dalam air atau mencuci menggunakan deterjen pakaian keras yang merusak lem. Kami juga tidak menjemur sepatu langsung di bawah terik matahari, melainkan menggunakan metode pengeringan suhu ruang yang aman untuk mencegah keretakan material dan oksidasi yellowing.",
    },
    {
      q: "Bagaimana cara konsultasi kondisi sepatu sebelum memesan layanan?",
      a: "Sangat mudah! Anda cukup mengambil foto sepatu Anda (bagian atas, samping, dan sol yang kotor) lalu mengirimkannya ke nomor WhatsApp resmi kami. Tim kami akan segera menganalisis tingkat kekotoran, merekomendasikan jenis paket pembersihan yang paling tepat, serta mengonfirmasi estimasi biayanya.",
    },
    {
      q: "Bagaimana ketentuan layanan Pick-up & Delivery (Antar-Jemput)?",
      a: "Layanan antar-jemput Gratis untuk jarak 1–3 km dari workshop Sinisudah.Kusikat di Balikpapan. Untuk lokasi di luar radius 1–3 km, ongkos antar-jemput akan disesuaikan secara transparan berdasarkan jarak tempuh Anda dan dikonfirmasi langsung oleh admin via WhatsApp sebelum penjemputan.",
    },
    {
      q: "Berapa lama estimasi pengerjaan cuci sepatu saya?",
      a: "Gambaran umum estimasi waktu adalah 1–2 hari untuk layanan Fast Clean dan 2–4 hari untuk Deep Clean. Untuk paket Unyellowing dan Repaint khusus, estimasi final akan diinformasikan dan dikonfirmasi langsung oleh admin saat hendak menyerahkan sepatu sesuai antrean dan tingkat kebutuhan pengerjaan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-[#F3E9D2] bg-neo-grid border-b-3 border-ink py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Neubrutalist Decorative Background Shapes */}
      <div
        aria-hidden="true"
        data-parallax="-0.1"
        className="hidden sm:block pointer-events-none select-none absolute top-14 right-8 w-12 h-12 bg-yellow-pop border-2.5 border-ink rounded-[6px] rotate-12 shadow-neo-xs"
      />
      <div
        aria-hidden="true"
        data-parallax="0.1"
        className="hidden sm:block pointer-events-none select-none absolute bottom-14 left-8 w-12 h-12 bg-brand-red border-2.5 border-ink rounded-[6px] -rotate-12 shadow-neo-xs"
      />

      <div className="max-w-[820px] mx-auto relative z-10">
        <div className="reveal-header text-center mb-12">
          <div className="sticker-pop inline-flex items-center gap-2 bg-white text-ink border-2 border-ink px-3 py-1 rounded-[6px] shadow-neo-xs font-black text-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red border border-ink" />
            <span>06 // PUSAT INFORMASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase">
            TANYA JAWAB{" "}
            <span className="sticker-pop inline-block bg-yellow-pop text-ink px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm">
              FAQ.
            </span>
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto mt-3 leading-relaxed">
            <span className="italic font-extrabold text-red-800 mr-1.5">
              informasi lengkap &darr;
            </span>
            Jawaban cepat seputar proses, bahan, dan ketentuan cuci di Sinisudah.Kusikat
          </p>
        </div>

        <div className="flex flex-col gap-4 reveal">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`cascade-item border-2.5 border-ink rounded-xl overflow-hidden transition-all duration-300 shadow-neo hover:-translate-y-0.5 hover:shadow-neo-md ${
                  isOpen ? "bg-yellow-card shadow-neo-md -translate-y-0.5" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left font-extrabold text-ink text-base sm:text-lg cursor-pointer select-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-black text-lg border border-ink shadow-neo-xs transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-brand-red text-white"
                        : "rotate-0 bg-ink text-white"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-base text-gray-900 leading-relaxed max-w-[65ch]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Badge } from "./ui/badge";

export function Comparison() {
  const badPoints = [
    "Deterjen pakaian mengikis warna kanvas & bikin kaku",
    "Direndam air berlebihan membuat lem sol copot/rusak",
    "Dijemur di bawah matahari terik memicu \"yellowing\" dini",
    "Bahan suede/nubuck basah jadi keras & rontok",
  ];

  const goodPoints = [
    "Formula chemical khusus disesuaikan tiap jenis bahan",
    "Pengerjaan manual dengan sikat bulu kuda yang lembut",
    "Pengeringan di suhu ruang aman tanpa merusak lem",
    "Detail menyeluruh dari upper, midsole, hingga sela sol",
  ];

  return (
    <section id="keunggulan" className="relative bg-[#FDECEC] bg-neo-diagonal border-b-3 border-ink py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Neubrutalist Decorative Background Shapes */}
      <div
        aria-hidden="true"
        data-parallax="-0.1"
        className="hidden sm:block pointer-events-none select-none absolute top-12 right-6 w-12 h-12 bg-yellow-pop border-2.5 border-ink rounded-[6px] rotate-6 shadow-neo-xs"
      />
      <div
        aria-hidden="true"
        data-parallax="0.1"
        className="hidden sm:block pointer-events-none select-none absolute bottom-10 left-6 w-10 h-10 bg-white border-2.5 border-ink rounded-[6px] -rotate-12 shadow-neo-xs"
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="reveal-header text-center mb-12">
          <div className="sticker-pop inline-flex items-center gap-2 bg-yellow-pop text-ink border-2 border-ink px-3 py-1 rounded-[6px] shadow-neo-xs font-black text-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red border border-ink" />
            <span>02 // STANDAR WORKSHOP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase">
            CUCI SENDIRI{" "}
            <span className="sticker-pop inline-block bg-brand-red text-white px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm">
              VS KUSIKAT.
            </span>
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto mt-3 leading-relaxed">
            <span className="italic font-extrabold text-brand-red mr-1.5">
              fakta perawatan sepatu &darr;
            </span>
            Perbedaan nyata metode pencucian rumahan dibanding teknik workshop kriya kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Bad Box */}
          <div className="reveal reveal-left bg-white border-2.5 border-ink rounded-xl p-6 sm:p-8 shadow-neo-md hover:-translate-y-0.5 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop">
            <Badge variant="red" className="mb-5 text-sm py-1 px-3">
              Cuci Sendiri Asal-Asalan
            </Badge>
            <ul className="flex flex-col gap-4">
              {badPoints.map((pt, idx) => (
                <li key={idx} className="cascade-item flex items-start gap-3.5 text-base text-ink leading-relaxed">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-red text-white border-2 border-ink shadow-neo-xs shrink-0 mt-0.5" aria-hidden="true">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Good Box */}
          <div className="reveal reveal-right bg-[#FFF9DB] border-2.5 border-ink rounded-xl p-6 sm:p-8 shadow-neo-md hover:-translate-y-0.5 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop">
            <Badge variant="yellow" className="mb-5 text-sm py-1 px-3">
              Dirawat di Sinisudah.Kusikat
            </Badge>
            <ul className="flex flex-col gap-4">
              {goodPoints.map((pt, idx) => (
                <li key={idx} className="cascade-item flex items-start gap-3.5 text-base text-ink leading-relaxed">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white border-2 border-ink shadow-neo-xs shrink-0 mt-0.5" aria-hidden="true">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

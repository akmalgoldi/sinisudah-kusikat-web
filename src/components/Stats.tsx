import React from "react";

export function Stats() {
  const stats = [
    { num: "100%", label: "Manual Handwash", accent: "bg-yellow-pop text-ink" },
    { num: "1–3 KM", label: "Gratis Antar-Jemput", accent: "bg-brand-red text-white" },
    { num: "17–22 WITA", label: "Selasa–Minggu Buka", accent: "bg-yellow-pop text-ink" },
    { num: "Formula Khusus", label: "Sesuai Jenis Bahan", accent: "bg-brand-red text-white" },
  ];

  return (
    <section className="curtain-deck cascade-group relative z-20 bg-[#FFF3B0] bg-neo-blueprint border-b-3 border-ink py-7 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 relative z-10">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="cascade-item relative bg-white border-2.5 border-ink rounded-[10px] p-4 pt-5 text-center shadow-neo-sm hover:-translate-y-0.5 hover:shadow-neo transition-all duration-300 ease-bounce-pop flex flex-col justify-center"
          >
            <span
              className={`absolute -top-2.5 left-3 px-2 py-0.5 rounded-[5px] border-2 border-ink text-xs font-black shadow-neo-xs ${item.accent}`}
              aria-hidden="true"
            >
              0{idx + 1}
            </span>
            <div className="text-xl sm:text-2xl font-black text-brand-red leading-tight mt-0.5">
              {item.num}
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-ink mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

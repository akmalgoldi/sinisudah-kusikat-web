import React from "react";

export function Stats() {
  const stats = [
    { num: "100%", label: "Manual Handwash" },
    { num: "1–3 KM", label: "Gratis Antar-Jemput" },
    { num: "17–22 WITA", label: "Selasa–Minggu Buka" },
    { num: "Formula Khusus", label: "Sesuai Jenis Bahan" },
  ];

  return (
    <section className="bg-canvas-cream border-b-2.5 border-ink py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="reveal bg-white border-2 border-ink rounded-xl p-4 text-center shadow-neo-sm hover:-translate-y-0.5 hover:shadow-neo transition-all duration-300 ease-bounce-pop flex flex-col justify-center"
          >
            <div className="text-xl sm:text-2xl font-black text-brand-red leading-tight">
              {item.num}
            </div>
            <div className="text-sm font-bold text-gray-800 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

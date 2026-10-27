import React from "react";

export function Ticker() {
  const tickerItems = [
    "Sinisudah.Kusikat Balikpapan",
    "Cuci Sepatu Manual Teliti",
    "Gratis Antar-Jemput 1–3 KM",
    "Formula Khusus Material",
    "Pengeringan Suhu Ruang Aman",
    "Drop-Off Workshop Balikpapan",
  ];

  return (
    <div
      className="relative z-20 bg-ink text-white border-b-3 border-ink py-2.5 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="animate-ticker flex items-center whitespace-nowrap text-xs sm:text-sm font-black">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex items-center shrink-0">
            {tickerItems.map((item, idx) => (
              <span key={idx} className="inline-flex items-center">
                <span className="px-3.5 sm:px-4">{item}</span>
                <span
                  className={`inline-block w-2.5 h-2.5 border border-white rotate-45 ${
                    idx % 2 === 0 ? "bg-yellow-pop" : "bg-brand-red"
                  }`}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

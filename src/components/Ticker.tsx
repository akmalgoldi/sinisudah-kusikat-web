import React from "react";

export function Ticker() {
  const text =
    "Sinisudah.Kusikat Balikpapan • Cuci Sepatu Manual Teliti • Gratis Antar-Jemput 1–3 KM • Formula Khusus Material • Pengeringan Suhu Ruang Aman • Drop-Off Workshop Balikpapan • ";

  return (
    <div className="bg-ink text-white border-b-2.5 border-ink py-2.5 overflow-hidden select-none" aria-hidden="true">
      <div className="animate-ticker whitespace-nowrap text-sm font-extrabold tracking-wide">
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
      </div>
    </div>
  );
}

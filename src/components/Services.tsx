import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Services() {
  const services = [
    {
      id: "fast-clean",
      name: "FAST CLEAN.",
      price: "Rp35.000",
      featuredBadge: null,
      estimate: "Estimasi 1–2 Hari",
      desc: "Pembersihan bagian upper dan midsole sepatu untuk kesegaran kilat harian.",
      note: null,
      included: null,
      suit: "Sneakers harian & debu ringan",
      waText:
        "Halo Sinisudah.Kusikat, saya tertarik dengan layanan Fast Clean (Rp35.000). Boleh info lebih lanjut?",
      cardBg: "bg-white",
    },
    {
      id: "deep-clean",
      name: "DEEP CLEAN.",
      price: "Rp45.000 – Rp60.000",
      featuredBadge: { text: "Paling Favorit", color: "yellow" as const },
      estimate: "Estimasi 2–4 Hari",
      desc: "Pembersihan mendalam seluruh bagian sepatu (upper, midsole, outsole, insole, dan tali sepatu).",
      note: "*Biaya disesuaikan tingkat kekotoran. Kirim foto sepatu via WhatsApp untuk konsultasi cepat.",
      included: null,
      suit: "Semua material & kotor menyeluruh",
      waText:
        "Halo Sinisudah.Kusikat, saya tertarik dengan layanan Deep Clean (Rp45.000–Rp60.000) dan ingin konsultasi kondisi sepatu saya.",
      cardBg: "bg-[#FFFDE7]",
    },
    {
      id: "unyellowing-repaint",
      name: "UNYELLOWING & REPAINT.",
      price: "Rp125.000",
      featuredBadge: { text: "Restorasi Total", color: "red" as const },
      estimate: "Estimasi Cek Admin",
      desc: "Pemutihan sol menguning (\"unyellowing\") dan pengecatan kembali (\"repaint\") warna yang pudar.",
      note: null,
      included: "Sudah Termasuk Paket Deep Clean",
      suit: "Sol menguning, warna pudar & restorasi",
      waText:
        "Halo Sinisudah.Kusikat, saya tertarik dengan layanan Unyellowing & Repaint (Rp125.000). Boleh info lebih lanjut?",
      cardBg: "bg-white",
    },
  ];

  return (
    <section id="layanan" className="bg-canvas-cream border-b-2.5 border-ink py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase">
            PILIH PERAWATAN{" "}
            <span className="inline-block bg-yellow-pop text-ink px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm">
              SEPATUMU.
            </span>
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto mt-3 leading-relaxed">
            <span className="italic font-extrabold text-red-800 mr-1.5">
              pilih sesuai kebutuhan &darr;
            </span>
            Formula chemical khusus disesuaikan dengan jenis bahan canvas, suede, leather, knit, dan boots
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 pt-2">
          {services.map((s, idx) => (
            <div
              key={s.id}
              className={`reveal relative ${s.cardBg} border-2.5 border-ink rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-neo-md hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop ${
                idx === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto md:w-full lg:max-w-none" : ""
              }`}
            >
              {/* Floating Half-In / Half-Out Sticker Badge */}
              {s.featuredBadge && (
                <div
                  className={`absolute -top-3.5 left-6 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-ink shadow-neo-xs font-black text-sm z-20 select-none ${
                    s.featuredBadge.color === "yellow"
                      ? "bg-yellow-pop text-ink"
                      : "bg-brand-red text-white"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full border border-ink ${
                      s.featuredBadge.color === "yellow" ? "bg-brand-red animate-pulse" : "bg-yellow-pop"
                    }`}
                  />
                  <span>{s.featuredBadge.text}</span>
                </div>
              )}

              <div>
                {/* Heading first: never an eyebrow above! */}
                <h3 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight mb-1">
                  {s.name}
                </h3>
                <div className="text-xl sm:text-2xl font-black text-brand-red tracking-tight mb-3 whitespace-nowrap">
                  {s.price}
                </div>

                {/* Estimation Badge */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-white border-2 border-ink rounded-full px-3 py-1 text-sm font-extrabold text-ink shadow-neo-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                    {s.estimate}
                  </span>
                </div>

                <p className="text-base text-ink leading-relaxed mb-4 max-w-[65ch]">
                  {s.desc}
                </p>

                {s.note && (
                  <p className="text-sm text-gray-700 italic mb-4 leading-normal">
                    {s.note}
                  </p>
                )}

                {s.included && (
                  <div className="bg-white border-2 border-ink rounded-md p-2.5 text-sm font-bold text-brand-red mb-4 shadow-neo-xs">
                    {s.included}
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <div className="text-sm font-semibold text-gray-800">
                  <span className="text-gray-600 mr-1.5">Cocok untuk:</span>
                  <span className="font-extrabold text-ink">{s.suit}</span>
                </div>

                <a
                  href={`https://wa.me/6285348085177?text=${encodeURIComponent(
                    s.waText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant={s.id === "deep-clean" ? "brand" : "primary"}
                    size="full"
                    className="text-sm sm:text-base font-black px-4 py-3 flex items-center justify-center gap-2.5"
                  >
                    <span>
                      {s.id === "fast-clean" && "Pesan Fast Clean"}
                      {s.id === "deep-clean" && "Pesan Deep Clean"}
                      {s.id === "unyellowing-repaint" && "Pesan Restorasi"}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm font-black border border-ink shadow-neo-xs ${
                        s.id === "deep-clean" ? "bg-white text-ink" : "bg-yellow-pop text-ink"
                      }`}
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-ink rounded-md p-4 sm:p-5 text-center mt-9 text-sm sm:text-base text-gray-800 shadow-neo-sm max-w-[65ch] mx-auto">
          Catatan: Estimasi waktu di atas adalah patokan umum. Estimasi final akan dikonfirmasi admin saat serah terima sepatu sesuai antrean.
        </div>
      </div>
    </section>
  );
}

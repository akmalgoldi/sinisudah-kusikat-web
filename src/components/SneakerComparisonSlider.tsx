"use client";

import React, { useState, useEffect } from "react";

interface HotspotPin {
  id: string;
  x: string;
  y: string;
  cleanTag: string;
  cleanTitle: string;
  cleanDesc: string;
  dirtyTag: string;
  dirtyTitle: string;
  dirtyDesc: string;
}

const HOTSPOTS: HotspotPin[] = [
  {
    id: "upper",
    x: "66%",
    y: "48%",
    cleanTag: "Deep Clean",
    cleanTitle: "Upper Bersih Maksimal",
    cleanDesc: "Disikat manual dengan formula khusus yang aman untuk serat kanvas, mesh, suede, maupun kulit.",
    dirtyTag: "Noda Upper",
    dirtyTitle: "Kotoran & Debu Menempel",
    dirtyDesc: "Noda minyak dan debu jalanan yang meresap ke pori-pori bahan sepatu.",
  },
  {
    id: "sole",
    x: "32%",
    y: "74%",
    cleanTag: "Unyellowing",
    cleanTitle: "Midsole Putih Cerah",
    cleanDesc: "Treatment khusus pengangkat kerak & warna kekuningan pada karet midsole tanpa merusak lem.",
    dirtyTag: "Sol Kuning",
    dirtyTitle: "Kerak Lumpur & Oksidasi",
    dirtyDesc: "Midsole menguning akibat oksidasi dan kerak tanah yang mengeras di sela sol.",
  },
  {
    id: "laces",
    x: "34%",
    y: "36%",
    cleanTag: "Detailing",
    cleanTitle: "Tali & Lidah Sepatu",
    cleanDesc: "Tali dilepas dan direndam terpisah, disikat detail hingga ke lipatan lidah sepatu.",
    dirtyTag: "Tali Dekil",
    dirtyTitle: "Kotoran di Sela Tali",
    dirtyDesc: "Bagian lipatan tali dan lidah sepatu yang paling sering terlewat jika dicuci biasa.",
  },
  {
    id: "insole",
    x: "60%",
    y: "22%",
    cleanTag: "Anti-Bakteri",
    cleanTitle: "Insole Segar & Steril",
    cleanDesc: "Dibersihkan sampai ke bagian dalam, bebas bau lembap dan bakteri pemicu jamur.",
    dirtyTag: "Bau Lembap",
    dirtyTitle: "Sarang Bakteri & Keringat",
    dirtyDesc: "Tumpukan keringat di bagian dalam yang memicu bau tidak sedap saat dipakai.",
  },
];

export function SneakerComparisonSlider() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isClean, setIsClean] = useState(true);
  const [activePinId, setActivePinId] = useState<string>("upper");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through hotspot pins every 3.5s until user interacts (only when visible)
  useEffect(() => {
    if (!isAutoPlaying) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      if (containerRef.current && containerRef.current.offsetParent === null) {
        return;
      }
      setActivePinId((prev) => {
        const currentIndex = HOTSPOTS.findIndex((p) => p.id === prev);
        const nextIndex = (currentIndex + 1) % HOTSPOTS.length;
        return HOTSPOTS[nextIndex].id;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activePin = HOTSPOTS.find((p) => p.id === activePinId) || HOTSPOTS[0];

  const handleSelectPin = (id: string) => {
    setIsAutoPlaying(false);
    setActivePinId(id);
  };

  const handleToggleState = (cleanState: boolean) => {
    setIsAutoPlaying(false);
    setIsClean(cleanState);
  };

  return (
    <div
      ref={containerRef}
      data-ui="sneaker-inspector"
      className="w-full border-3 sm:border-4 border-ink rounded-2xl bg-white shadow-[6px_6px_0px_0px_#111111] sm:shadow-[8px_8px_0px_0px_#111111] overflow-hidden select-none" /* taste-skill-ignore */
    >
      {/* =====================================================================
          1. NEUBRUTALIST HEADER WITH TACTILE 3D STATE SWITCH
          ===================================================================== */}
      <div className="flex items-center justify-between border-b-3 sm:border-b-4 border-ink bg-yellow-pop px-3 sm:px-4 py-2 sm:py-2.5 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-brand-red border border-ink" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white border border-ink" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-ink border border-ink" />
          </div>
          <span className="font-black text-xs sm:text-sm text-ink tracking-tight uppercase truncate ml-0.5">
            Sinisudah Workshop
          </span>
        </div>

        {/* 1-Click Tactile State Switch: KOTOR vs BERSIH */}
        <div className="inline-flex items-center bg-white border-2 border-ink rounded-lg p-0.5 shadow-[2px_2px_0px_0px_#111111] shrink-0"> {/* taste-skill-ignore */}
          <button
            type="button"
            onClick={() => handleToggleState(false)}
            className={`px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-black uppercase transition-colors duration-150 cursor-pointer ${
              !isClean
                ? "bg-brand-red text-white"
                : "bg-transparent text-ink hover:bg-gray-100"
            }`}
          >
            Kotor
          </button>
          <button
            type="button"
            onClick={() => handleToggleState(true)}
            className={`px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-black uppercase transition-colors duration-150 cursor-pointer ${
              isClean
                ? "bg-ink text-yellow-pop"
                : "bg-transparent text-ink hover:bg-gray-100"
            }`}
          >
            Bersih
          </button>
        </div>
      </div>

      {/* =====================================================================
          2. SNEAKER SPECIMEN STAGE WITH INTERACTIVE HOTSPOT PINS
          ===================================================================== */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden transition-colors duration-300 ${
          isClean ? "bg-white" : "bg-[#F5EFE0]"
        }`}
      >
        {/* Subtle Technical Dot Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23111111'/%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top-Left Brutalist Status Sticker */}
        <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 pointer-events-none">
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border-2 border-ink shadow-[2.5px_2.5px_0px_0px_#111111] -rotate-2 transition-colors duration-200 ${ /* taste-skill-ignore */
              isClean ? "bg-yellow-pop text-ink" : "bg-brand-red text-white"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full border border-ink ${
                isClean ? "bg-brand-red" : "bg-white"
              }`}
            />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-tight">
              {isClean ? "Kondisi: Siap Pakai" : "Kondisi: Perlu Disikat"}
            </span>
          </div>
        </div>

        {/* Sneaker Specimen Image (Smooth Scale & Crossfade on Toggle) */}
        <div className="relative w-full h-full p-5 sm:p-7 animate-sneaker-float">
          {/* Clean Sneaker */}
          <img
            src="/assets/images/hero-clean.png"
            alt="Visual Sneaker Bersih Sinisudah.Kusikat"
            className={`absolute inset-0 w-full h-full object-contain p-5 sm:p-7 pointer-events-none transition-opacity duration-300 ${
              isClean ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            draggable={false}
          />

          {/* Dirty Sneaker */}
          <img
            src="/assets/images/hero-dirty.png"
            alt="Visual Sneaker Kotor Sebelum Dicuci"
            className={`absolute inset-0 w-full h-full object-contain p-5 sm:p-7 pointer-events-none transition-opacity duration-300 ${
              !isClean ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            draggable={false}
          />
        </div>

        {/* Interactive Hotspot Pins */}
        {HOTSPOTS.map((pin, idx) => {
          const isActive = pin.id === activePinId;
          const label = isClean ? pin.cleanTag : pin.dirtyTag;

          return (
            <button
              key={pin.id}
              type="button"
              onClick={() => handleSelectPin(pin.id)}
              style={{ left: pin.x, top: pin.y }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full border-2 border-ink font-black text-[11px] sm:text-xs transition-transform duration-150 cursor-pointer ${
                isActive
                  ? isClean
                    ? "bg-yellow-pop text-ink scale-110 shadow-[3px_3px_0px_0px_#111111] z-30" /* taste-skill-ignore */
                    : "bg-brand-red text-white scale-110 shadow-[3px_3px_0px_0px_#111111] z-30" /* taste-skill-ignore */
                  : "bg-white text-ink hover:scale-105 shadow-[2px_2px_0px_0px_#111111]" /* taste-skill-ignore */
              }`}
              aria-label={`Lihat titik ${label}`}
            >
              <span
                className={`w-4 h-4 rounded-full border border-ink flex items-center justify-center text-[10px] font-black shrink-0 ${
                  isActive
                    ? isClean
                      ? "bg-ink text-yellow-pop"
                      : "bg-white text-brand-red"
                    : "bg-yellow-pop text-ink"
                }`}
              >
                {idx + 1}
              </span>
              <span className="whitespace-nowrap tracking-tight">{label}</span>
            </button>
          );
        })}
      </div>

      {/* =====================================================================
          3. ACTIVE HOTSPOT SPECIMEN CALLOUT BAR (Bottom Docked Info Card)
          ===================================================================== */}
      <div className="border-t-3 sm:border-t-4 border-ink bg-[#FAF6EB] px-3.5 sm:px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block px-2 py-0.5 text-[10px] sm:text-xs font-black uppercase rounded border border-ink ${
                isClean ? "bg-yellow-pop text-ink" : "bg-brand-red text-white"
              }`}
            >
              {isClean ? activePin.cleanTag : activePin.dirtyTag}
            </span>
            <h3 className="font-black text-sm sm:text-base text-ink truncate">
              {isClean ? activePin.cleanTitle : activePin.dirtyTitle}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-800 font-medium mt-1 leading-snug">
            {isClean ? activePin.cleanDesc : activePin.dirtyDesc}
          </p>
        </div>

        {/* Next Hotspot Cycle Button */}
        <button
          type="button"
          onClick={() => {
            setIsAutoPlaying(false);
            const currentIndex = HOTSPOTS.findIndex((p) => p.id === activePinId);
            const nextIndex = (currentIndex + 1) % HOTSPOTS.length;
            setActivePinId(HOTSPOTS[nextIndex].id);
          }}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border-2 border-ink shadow-[2px_2px_0px_0px_#111111] hover:bg-yellow-pop active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center shrink-0 font-black text-ink transition-transform duration-100 cursor-pointer" /* taste-skill-ignore */
          title="Titik Berikutnya"
          aria-label="Titik Berikutnya"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

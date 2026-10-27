"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  const waUrl =
    "https://wa.me/6285348085177?text=Halo%20Sinisudah.Kusikat%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20cuci%20sepatu.";

  return (
    <section
      id="hero"
      className="bg-canvas-cream border-b-2.5 border-ink py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden relative"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(17, 17, 17, 0.08) 1.2px, transparent 1.2px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Main Headline */}
          <h1 className="text-[2.25rem] sm:text-6xl lg:text-7xl font-black text-ink tracking-tight leading-[1.08]">
            SEPATU KOTOR?{" "}
            <span className="inline-block bg-yellow-pop text-ink px-3 sm:px-4 py-1 border-2.5 sm:border-3 border-ink rounded-sm shadow-neo mt-1 -rotate-1 hover:rotate-0 hover:animate-wiggle transition-transform cursor-default">
              KAMI SIKAT.
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed max-w-[54ch]">
            Jasa cuci sepatu manual di Balikpapan untuk sneakers, suede, kulit, dan boots.
            Buka Selasa–Minggu pukul 17.00–22.00 WITA. Dibersihkan teliti tanpa mesin putar perusak lem.
          </p>

          {/* 3 Pillar Feature Badges */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            <div className="inline-flex items-center gap-1.5 bg-white border-2 border-ink rounded-full px-3 py-1 shadow-neo-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-default select-none">
              <span className="w-2 h-2 rounded-full bg-yellow-pop border border-ink shrink-0" />
              <span className="text-sm font-extrabold text-ink whitespace-nowrap">
                100% Handwash
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white border-2 border-ink rounded-full px-3 py-1 shadow-neo-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-default select-none">
              <span className="w-2 h-2 rounded-full bg-brand-red border border-ink shrink-0" />
              <span className="text-sm font-extrabold text-ink whitespace-nowrap">
                Formula Khusus Bahan
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white border-2 border-ink rounded-full px-3 py-1 shadow-neo-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-default select-none">
              <span className="w-2 h-2 rounded-full bg-ink shrink-0" />
              <span className="text-sm font-extrabold text-ink whitespace-nowrap">
                Suhu Ruang Aman
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="brand" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 flex items-center justify-center gap-3">
                <span>Konsultasi WhatsApp</span>
                <span className="w-7 h-7 rounded-full bg-white text-ink flex items-center justify-center shrink-0 text-sm font-black border border-ink shadow-neo-xs" aria-hidden="true">&rarr;</span>
              </Button>
            </a>
            <Link href="#layanan" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 flex items-center justify-center gap-3">
                <span>Lihat Layanan &amp; Harga</span>
                <span className="w-7 h-7 rounded-full bg-yellow-pop text-ink flex items-center justify-center shrink-0 text-sm font-black border border-ink shadow-neo-xs" aria-hidden="true">&darr;</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: RetroUI Window Showcase */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <div className="bg-white border-3 border-ink rounded-lg shadow-neo-lg overflow-hidden">
            {/* Retro Window Titlebar (Clean, no Live Preview) */}
            <div className="bg-ink text-white px-4 py-2.5 flex items-center gap-2 border-b-2.5 border-ink">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              </div>
              <span className="text-sm font-bold text-gray-200 tracking-tight ml-2">
                Sinisudah.Kusikat Workshop
              </span>
            </div>

            {/* Showcase Stage */}
            <div className="relative aspect-[4/3] bg-white overflow-hidden flex items-center justify-center p-3 sm:p-4">
              {/* Subtle background technical grid */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#111111 0.5px, transparent 0.5px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Sneaker image */}
              <img
                src="/assets/images/hero-split-sneaker.jpg"
                alt="Sneaker Sebelum vs Sesudah Cuci di Sinisudah.Kusikat"
                className="w-full h-full object-contain select-none animate-sneaker-float relative z-10"
              />

              {/* Vertical Divider Line with Center Interactive Node */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2.5px] bg-ink pointer-events-none z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-yellow-pop border-2 border-ink shadow-neo-xs flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink inline-block" />
                </div>
              </div>

              {/* Badge Sebelum (Sentence case, no micro-label) */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex flex-col gap-0.5 p-2 sm:p-2.5 bg-white text-ink rounded-sm border-2 border-ink shadow-neo-sm">
                <span className="text-sm font-black text-brand-red">
                  Sebelum
                </span>
                <span className="text-sm font-bold text-gray-800">
                  Kotor &bull; Noda Lumpur
                </span>
              </div>

              {/* Badge Sesudah (Sentence case, no micro-label) */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex flex-col gap-0.5 p-2 sm:p-2.5 bg-yellow-pop text-ink rounded-sm border-2 border-ink shadow-neo-sm">
                <span className="text-sm font-black text-ink">
                  Sesudah
                </span>
                <span className="text-sm font-bold text-ink">
                  Bersih &bull; Kinclong 100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

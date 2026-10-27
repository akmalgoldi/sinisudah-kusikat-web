"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { SneakerComparisonSlider } from "./SneakerComparisonSlider";

export function Hero() {
  const showcaseRef = React.useRef<HTMLDivElement>(null);
  const textColRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax depth scroll effect
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;
    let wasActive = true;

    const handleScroll = () => {
      // Disable Hero text/CTA shift on mobile/tablet (< 1024px) so tap targets remain 100% stable
      if (window.innerWidth < 1024) {
        if (wasActive) {
          wasActive = false;
          if (showcaseRef.current) {
            showcaseRef.current.style.transform = "";
            showcaseRef.current.style.opacity = "";
          }
          if (textColRef.current) {
            textColRef.current.style.transform = "";
            textColRef.current.style.opacity = "";
          }
        }
        return;
      }

      const scrollY = window.scrollY;
      if (scrollY <= 550) {
        wasActive = true;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const progress = Math.min(Math.max(scrollY / 450, 0), 1);
            if (showcaseRef.current) {
              const scale = 1 - progress * 0.08;
              const translateY = progress * 24;
              const rotateX = progress * 4;
              const opacity = 1 - progress * 0.16;
              showcaseRef.current.style.transform = `scale(${scale}) translateY(${translateY}px) rotateX(${rotateX}deg)`;
              showcaseRef.current.style.opacity = `${opacity}`;
            }
            if (textColRef.current) {
              const translateY = -progress * 14;
              const opacity = 1 - progress * 0.12;
              textColRef.current.style.transform = `translateY(${translateY}px)`;
              textColRef.current.style.opacity = `${opacity}`;
            }
            ticking = false;
          });
          ticking = true;
        }
      } else if (wasActive) {
        wasActive = false;
        if (showcaseRef.current) {
          showcaseRef.current.style.transform = "scale(0.92) translateY(24px) rotateX(4deg)";
          showcaseRef.current.style.opacity = "0.84";
        }
        if (textColRef.current) {
          textColRef.current.style.transform = "translateY(-14px)";
          textColRef.current.style.opacity = "0.88";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl =
    "https://wa.me/6285348085177?text=Halo%20Sinisudah.Kusikat%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20cuci%20sepatu.";

  return (
    <section
      id="hero"
      className="bg-[#FAF6EB] bg-neo-blueprint border-b-3 border-ink py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden relative"
    >
      {/* Neubrutalist Decorative Background Shapes */}
      <div
        aria-hidden="true"
        data-parallax="-0.1"
        className="hidden md:block pointer-events-none select-none absolute top-8 -left-5 w-14 h-14 bg-yellow-pop border-2.5 border-ink rounded-[8px] rotate-12 shadow-neo-xs"
      />
      <div
        aria-hidden="true"
        data-parallax="0.1"
        className="hidden md:block pointer-events-none select-none absolute bottom-10 -right-5 w-14 h-14 bg-brand-red border-2.5 border-ink rounded-[8px] -rotate-12 shadow-neo-xs"
      />

      <div className="max-w-[1140px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div ref={textColRef} className="flex flex-col gap-4 sm:gap-5 will-change-transform">
          {/* Main Display Headline (Punchy 2-line title) */}
          <h1 className="text-[2.2rem] min-[390px]:text-[2.5rem] sm:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.08]">
            <span className="block">SEPATU KOTOR?</span>
            <span className="inline-block bg-yellow-pop text-ink px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-ink rounded-md shadow-neo mt-1.5 sm:mt-2 -rotate-1 hover:rotate-0 transition-transform duration-200 cursor-default select-none">
              SINI SUDAH, KUSIKAT!
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-ink font-medium leading-relaxed max-w-[52ch]">
            Layanan cuci sepatu manual di Balikpapan untuk sneakers, suede, kulit, dan boots. Setiap sepatu dibersihkan dengan metode yang disesuaikan dengan jenis bahan dan kondisinya.
          </p>

          {/* Mobile-Only Sneaker Lookbook: Positioned directly under description */}
          <div className="block lg:hidden w-full max-w-md mx-auto my-1">
            <SneakerComparisonSlider />
          </div>

          {/* 3 Pillar Feature Badges (User Preferred Pill Badges) */}
          <div className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-wrap sm:gap-2 pt-0.5">
            <div className="inline-flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 bg-white border-2 border-ink rounded-full px-2 sm:px-3 py-1 shadow-neo-xs hover:-translate-y-0.5 active:scale-95 transition-transform duration-200 cursor-default select-none">
              <span className="w-2 h-2 rounded-full bg-yellow-pop border border-ink shrink-0" />
              <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-extrabold text-ink whitespace-nowrap">
                100% Handwash
              </span>
            </div>

            <div className="inline-flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 bg-white border-2 border-ink rounded-full px-2 sm:px-3 py-1 shadow-neo-xs hover:-translate-y-0.5 active:scale-95 transition-transform duration-200 cursor-default select-none">
              <span className="w-2 h-2 rounded-full bg-brand-red border border-ink shrink-0" />
              <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-extrabold text-ink whitespace-nowrap">
                <span className="sm:hidden">Formula Bahan</span>
                <span className="hidden sm:inline">Formula Khusus Bahan</span>
              </span>
            </div>

            <div className="inline-flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 bg-white border-2 border-ink rounded-full px-2 sm:px-3 py-1 shadow-neo-xs hover:-translate-y-0.5 active:scale-95 transition-transform duration-200 cursor-default select-none">
              <span className="w-2 h-2 rounded-full bg-ink shrink-0" />
              <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-extrabold text-ink whitespace-nowrap">
                <span className="sm:hidden">Suhu Ruang</span>
                <span className="hidden sm:inline">Suhu Ruang Aman</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "brand", size: "lg" }),
                "w-full sm:w-auto text-base sm:text-lg px-6 py-3 flex items-center justify-center gap-3"
              )}
            >
              <span>Konsultasi WhatsApp</span>
              <span className="w-7 h-7 rounded-full bg-white text-ink flex items-center justify-center shrink-0 text-sm font-black border border-ink shadow-neo-xs" aria-hidden="true">&rarr;</span>
            </a>
            <Link
              href="#layanan"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full sm:w-auto text-base sm:text-lg px-6 py-3 flex items-center justify-center gap-3"
              )}
            >
              <span>Lihat Layanan &amp; Harga</span>
              <span className="w-7 h-7 rounded-full bg-yellow-pop text-ink flex items-center justify-center shrink-0 text-sm font-black border border-ink shadow-neo-xs" aria-hidden="true">&darr;</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Sneaker Lookbook Poster Card (Desktop) */}
        <div className="hidden lg:block w-full max-w-none [perspective:1000px]">
          <div
            ref={showcaseRef}
            className="will-change-transform transition-transform duration-75 ease-out"
          >
            <SneakerComparisonSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ShopStatusInfo {
  isOpen: boolean;
  mobileText: string;
  desktopText: string;
  dotColor: string;
  badgeBg: string;
}

function computeWitaShopStatus(): ShopStatusInfo {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  // Balikpapan is WITA (UTC+8)
  const wita = new Date(utcMs + 8 * 3600000);
  const day = wita.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
  const hour = wita.getHours();
  const minute = wita.getMinutes();
  const timeDecimal = hour + minute / 60;

  // Senin libur
  if (day === 1) {
    return {
      isOpen: false,
      mobileText: "Senin Libur",
      desktopText: "Senin Libur • Buka Selasa 17.00",
      dotColor: "bg-brand-red",
      badgeBg: "bg-[#FAF6EB]",
    };
  }

  // Selasa - Minggu pukul 17.00 - 22.00 WITA
  if (timeDecimal >= 17 && timeDecimal < 22) {
    return {
      isOpen: true,
      mobileText: "Buka • s/d 22.00",
      desktopText: "Buka Sekarang • s/d 22.00 WITA",
      dotColor: "bg-emerald-500",
      badgeBg: "bg-yellow-pop",
    };
  }

  // Sebelum jam 17.00 WITA
  if (timeDecimal < 17) {
    return {
      isOpen: false,
      mobileText: "Buka 17.00 WITA",
      desktopText: "Buka Hari Ini • 17.00–22.00 WITA",
      dotColor: "bg-amber-500",
      badgeBg: "bg-[#FAF6EB]",
    };
  }

  // Setelah jam 22.00 WITA pada hari Minggu (besok Senin libur)
  if (day === 0) {
    return {
      isOpen: false,
      mobileText: "Buka Selasa 17.00",
      desktopText: "Tutup • Buka Selasa 17.00 WITA",
      dotColor: "bg-brand-red",
      badgeBg: "bg-[#FAF6EB]",
    };
  }

  // Setelah jam 22.00 WITA pada Selasa - Sabtu
  return {
    isOpen: false,
    mobileText: "Buka Besok 17.00",
    desktopText: "Tutup • Buka Besok 17.00 WITA",
    dotColor: "bg-amber-500",
    badgeBg: "bg-[#FAF6EB]",
  };
}

export function Header() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [shopStatus, setShopStatus] = useState<ShopStatusInfo>({
    isOpen: true,
    mobileText: "17.00–22.00 WITA",
    desktopText: "Selasa–Minggu • 17.00–22.00 WITA",
    dotColor: "bg-emerald-500",
    badgeBg: "bg-[#FAF6EB]",
  });

  const waUrl =
    "https://wa.me/6285348085177?text=Halo%20Sinisudah.Kusikat%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20cuci%20sepatu.";

  const desktopLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#galeri", label: "Galeri" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#antar-jemput", label: "Antar-Jemput" },
    { href: "#faq", label: "FAQ" },
    { href: "#lokasi", label: "Lokasi" },
  ];

  const mobileBottomItems = [
    {
      href: "#hero",
      label: "Beranda",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" />
        </svg>
      ),
    },
    {
      href: "#layanan",
      label: "Layanan",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      href: "#galeri",
      label: "Galeri",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      ),
    },
    {
      href: "#testimoni",
      label: "Ulasan",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      href: "#lokasi",
      label: "Lokasi",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  // Update WITA shop status on client mount & every 60s
  useEffect(() => {
    setShopStatus(computeWitaShopStatus());
    const timer = setInterval(() => {
      setShopStatus(computeWitaShopStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const sectionIds = ["hero", "layanan", "galeri", "testimoni", "lokasi"];

    const handleScroll = () => {
      // Ensure "Lokasi" activates reliably when scrolled to the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("#lokasi");
        return;
      }

      const scrollPos = window.scrollY + 240;
      let current = "#hero";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* =====================================================================
          1. TOP HEADER BAR (Brand Left + Nav Dock Center + Live Status Right)
          ===================================================================== */}
      <header
        data-ui="site-header"
        className="sticky top-0 z-40 bg-white border-b-3 border-ink w-full"
      >
        <div className="max-w-[1280px] mx-auto w-full h-16 sm:h-[74px] flex items-center justify-between px-3.5 sm:px-6 lg:px-8 gap-2">
          {/* Left: Unified Brand Identity */}
          <Link
            href="#hero"
            onClick={() => setActiveSection("#hero")}
            className="group inline-flex items-center gap-2 sm:gap-2.5 shrink-0 focus:outline-none"
            aria-label="Sinisudah.Kusikat Beranda"
          >
            <img
              src="/assets/images/logo.png"
              alt="Logo Sinisudah.Kusikat"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-ink object-contain bg-white shadow-[2px_2px_0px_0px_#111111] group-hover:-rotate-6 transition-transform duration-150 shrink-0" /* taste-skill-ignore */
              width={40}
              height={40}
            />
            <div className="flex flex-col leading-none">
              <span className="text-[15px] min-[380px]:text-base sm:text-xl font-black text-ink tracking-tight whitespace-nowrap">
                SINISUDAH<span className="text-brand-red">.KUSIKAT</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 tracking-tight mt-0.5">
                Workshop &bull; Balikpapan
              </span>
            </div>
          </Link>

          {/* Center (Desktop Only): Framed Boxy Neubrutalist Navigation Dock */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-[#FAF6EB] border-2 border-ink rounded-[8px] p-1 shadow-[3px_3px_0px_0px_#111111]" /* taste-skill-ignore */
            aria-label="Navigasi Utama Desktop"
          >
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-[5px] font-extrabold text-sm text-ink border-2 border-transparent hover:border-ink hover:bg-yellow-pop hover:shadow-[2px_2px_0px_0px_#111111] hover:-translate-y-0.5 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-[transform,background-color,border-color,box-shadow] duration-150 whitespace-nowrap" /* taste-skill-ignore */
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Live Operational Status Badge (Links to #lokasi) */}
          <Link
            href="#lokasi"
            onClick={() => setActiveSection("#lokasi")}
            title="Lihat Lokasi & Jam Operasional Workshop"
            className={`h-9 sm:h-10 inline-flex items-center justify-center gap-1.5 ${shopStatus.badgeBg} text-ink border-2 border-ink rounded-[6px] px-2.5 sm:px-3.5 font-black text-[11px] sm:text-xs shadow-[2.5px_2.5px_0px_0px_#111111] hover:bg-yellow-pop hover:-translate-y-0.5 active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-[transform,background-color,box-shadow] duration-150 whitespace-nowrap shrink-0`} /* taste-skill-ignore */
          >
            <span
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${shopStatus.dotColor} border border-ink shrink-0`}
            />
            <span className="sm:hidden">{shopStatus.mobileText}</span>
            <span className="hidden sm:inline">{shopStatus.desktopText}</span>
          </Link>
        </div>
      </header>

      {/* =====================================================================
          2. FLOATING WHATSAPP ACTION BUTTON (Positioned Above Bottom Dock on Mobile)
          ===================================================================== */}
      <div
        data-ui="floating-wa"
        className="fixed bottom-[82px] right-3 sm:right-6 lg:bottom-6 lg:right-8 z-50"
      >
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp Sinisudah.Kusikat"
          className="group inline-flex items-center gap-2 bg-[#25D366] hover:bg-yellow-pop text-ink border-2.5 border-ink rounded-full pl-2 pr-3.5 py-1.5 sm:pl-2.5 sm:pr-4 sm:py-2 font-black text-xs sm:text-sm shadow-[4px_4px_0px_0px_#111111] hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-[transform,background-color,box-shadow] duration-150 select-none" /* taste-skill-ignore */
        >
          {/* Neubrutalism WhatsApp Logo Badge */}
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-ink shadow-[1.5px_1.5px_0px_0px_#111111] flex items-center justify-center shrink-0"> {/* taste-skill-ignore */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.82-4.21-4.97-4.4-.15-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.01-2.42.27-.29.58-.36.78-.36.19 0 .39.01.56.01.18 0 .42-.07.66.5.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.56.34.07.12.07.7-.17 1.38z" />
            </svg>
          </span>
          <span>Chat WA</span>
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* =====================================================================
          3. MOBILE FLOATING BOTTOM NAVIGATION DOCK (Neubrutalism Capsule)
          ===================================================================== */}
      <nav
        data-ui="mobile-bottom-nav"
        aria-label="Navigasi Bawah Mobile"
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-24px)] max-w-[390px] bg-yellow-pop border-3 border-ink rounded-full p-1.5 shadow-[4px_4px_0px_0px_#111111]" /* taste-skill-ignore */
      >
        <div className="grid grid-cols-5 gap-1 items-center">
          {mobileBottomItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-full border-2 transition-[transform,background-color,border-color,box-shadow] duration-150 select-none ${
                  isActive
                    ? "bg-white text-ink border-ink shadow-[2px_2px_0px_0px_#111111] -translate-y-0.5" /* taste-skill-ignore */
                    : "bg-transparent text-ink/80 border-transparent hover:text-ink active:scale-95"
                }`}
              >
                <span className={isActive ? "text-brand-red" : "text-ink"}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-black leading-tight mt-0.5 tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

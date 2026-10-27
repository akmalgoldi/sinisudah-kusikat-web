"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waUrl =
    "https://wa.me/6285348085177?text=Halo%20Sinisudah.Kusikat%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20cuci%20sepatu.";

  const navLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#galeri", label: "Galeri" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#antar-jemput", label: "Antar-Jemput" },
    { href: "#faq", label: "FAQ" },
    { href: "#lokasi", label: "Lokasi" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2.5 border-ink w-full">
      <div className="w-full h-16 sm:h-[72px] flex items-center justify-between px-2.5 min-[380px]:px-4 sm:px-6 lg:px-8 xl:px-12">
          <Link
            href="#hero"
            className="inline-flex items-center gap-1.5 min-[380px]:gap-2 text-base sm:text-xl font-black text-ink tracking-tight shrink-0"
            aria-label="Sinisudah.Kusikat Beranda"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/assets/images/logo.png"
              alt="Logo Sinisudah.Kusikat"
              className="w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10 rounded-full border-2 border-ink object-contain bg-white shrink-0"
              width={40}
              height={40}
            />
            <span className="text-sm sm:text-lg lg:text-xl font-black text-ink tracking-tight whitespace-nowrap">
              SINISUDAH<span className="text-brand-red">.KUSIKAT</span>
            </span>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bold text-ink hover:bg-yellow-pop px-2.5 py-1 rounded transition-colors text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-1.5 min-[380px]:gap-2 shrink-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp untuk konsultasi"
            className="shrink-0"
          >
            <Button variant="header" size="sm" className="text-sm font-black px-2.5 sm:px-3.5 whitespace-nowrap shrink-0">
              <span className="sm:hidden">Chat WA &rarr;</span>
              <span className="hidden sm:inline">Chat WhatsApp &rarr;</span>
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white border-2 border-ink rounded-sm shadow-neo-sm active:translate-x-0.5 active:translate-y-0.5 transition-all text-ink focus:outline-none shrink-0"
            aria-label="Buka Menu Navigasi"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-yellow-pop border-t-2.5 border-ink px-4 py-5 shadow-neo-md transition-all">
          <nav className="flex flex-col gap-2 max-w-[1140px] mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white border-2 border-ink rounded-sm px-4 py-3 font-black text-ink text-base shadow-neo-xs hover:bg-canvas-cream active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-brand-red font-bold">&rarr;</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

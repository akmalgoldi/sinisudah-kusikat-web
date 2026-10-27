import React from "react";
import Link from "next/link";

interface StoryTestimonial {
  id: string;
  image: string;
  alt: string;
  date: string;
  tag: string;
  tagColor: string;
  tagTextColor?: string;
  caption: string;
  rotationClass: string;
}

const TESTIMONIALS: StoryTestimonial[] = [
  {
    id: "testi-nb",
    image: "/assets/images/testi-1.png",
    alt: "Pelanggan Sinisudah.Kusikat tersenyum menerima sepatu New Balance bersih dalam kemasan laundry",
    date: "Highlight Testi • 9 Oktober",
    tag: "100% REAL STORY",
    tagColor: "bg-yellow-pop",
    tagTextColor: "text-ink",
    caption: "✨ Multi-Pairs Handover • New Balance & Sneakers Kinclong",
    rotationClass: "md:-rotate-1",
  },
  {
    id: "testi-pink",
    image: "/assets/images/testi-2.png",
    alt: "Kemasan ziplock laundry Sinisudah.Kusikat berisi sneakers pink bersih dengan stiker Thank You",
    date: "Highlight Testi • 18 Februari",
    tag: "FRESHLY PACKED",
    tagColor: "bg-brand-red",
    tagTextColor: "text-white",
    caption: "📦 Segel Ziplock Bersih & Wangi • Siap Antar ke Pelanggan",
    rotationClass: "md:rotate-1",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-canvas-cream border-b-2.5 border-ink py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-pop text-ink border-2 border-ink px-3 py-1 rounded-sm shadow-neo-sm font-black text-xs uppercase tracking-wider mb-3">
            <span>📸</span>
            <span>SNAPGRAM STORY PELANGGAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase leading-tight">
            SEPATU BERSIH,{" "}
            <span className="inline-block bg-brand-red text-white px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm -rotate-1">
              SENYUM LEPAS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-800 max-w-2xl mx-auto mt-3 leading-relaxed font-medium">
            <span className="italic font-extrabold text-brand-red mr-1.5">
              bukan ulasan ketikan buatan &darr;
            </span>
            Dokumentasi asli saat sepatu selesai disikat bersih dan diserahterimakan langsung ke tangan pemiliknya.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`bg-white border-2.5 border-ink rounded-md p-3 sm:p-4 shadow-neo-lg ${item.rotationClass} hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Instagram Story Top Mockup Bar */}
              <div className="flex items-center justify-between pb-2.5 border-b-2 border-gray-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/images/logo.png"
                    alt="Logo Sinisudah.Kusikat"
                    className="w-7 h-7 rounded-full border border-ink object-contain bg-white shrink-0"
                    width={28}
                    height={28}
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-black text-ink tracking-tight leading-none">
                      sinisudah.kusikat
                    </span>
                    <span className="text-[10px] text-gray-500 font-bold leading-tight mt-0.5">
                      {item.date}
                    </span>
                  </div>
                </div>

                <span
                  className={`${item.tagColor} ${
                    item.tagTextColor || "text-ink"
                  } font-black text-[10px] tracking-wider px-2 py-0.5 rounded-xs border border-ink shadow-neo-xs`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Story Photograph */}
              <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[9/16] max-h-[540px] rounded-xs overflow-hidden border-2 border-ink bg-slate-900 mt-3 shadow-inner">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  width={720}
                  height={1280}
                />
              </div>

              {/* Bottom Authentic Caption */}
              <div className="pt-3 flex items-center justify-between text-xs font-bold text-ink border-t-2 border-gray-100 mt-3">
                <span className="truncate pr-2">{item.caption}</span>
                <span className="text-brand-red shrink-0 font-black">#Kusikat</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to Real Instagram Highlights */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/sinisudah.kusikat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-pop hover:bg-yellow-card text-ink font-black text-xs sm:text-sm md:text-base py-3 px-6 sm:px-8 rounded-md border-2.5 border-ink shadow-neo hover:shadow-neo-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-neo-xs transition-all uppercase tracking-wide"
            title="Buka Instagram resmi @sinisudah.kusikat untuk melihat bukti ulasan lainnya"
          >
            <span>Lihat Ratusan Testi Lainnya di Instagram @sinisudah.kusikat</span>
            <span className="text-base sm:text-lg font-black">&rarr;</span>
          </a>
          <p className="text-xs text-gray-500 mt-2.5 font-bold">
            Diperbarui berkala langsung di highlight Snapgram akun resmi.
          </p>
        </div>
      </div>
    </section>
  );
}


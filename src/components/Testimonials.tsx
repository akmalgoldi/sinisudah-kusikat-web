import React from "react";

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
    id: "testi-1",
    image: "/assets/images/testi-1.png",
    alt: "Pelanggan Sinisudah.Kusikat menerima 2 pasang sepatu bersih",
    date: "18 Februari",
    tag: "SERAH TERIMA",
    tagColor: "bg-yellow-pop",
    tagTextColor: "text-ink",
    caption: "2 pasang selesai disikat",
    rotationClass: "md:-rotate-1",
  },
  {
    id: "testi-2",
    image: "/assets/images/testi-2.png",
    alt: "Dokumentasi bagasi penuh sepatu bersih siap diantar",
    date: "18 Mei",
    tag: "PENGANTARAN",
    tagColor: "bg-brand-red",
    tagTextColor: "text-white",
    caption: "Antar banyak pasang sekaligus",
    rotationClass: "md:rotate-1",
  },
  {
    id: "testi-3",
    image: "/assets/images/testi-3.png",
    alt: "Pelanggan memegang sepatu bersih dalam kemasan laundry Sinisudah.Kusikat",
    date: "21 Februari",
    tag: "SERAH TERIMA",
    tagColor: "bg-yellow-pop",
    tagTextColor: "text-ink",
    caption: "Packing rapi siap pakai",
    rotationClass: "md:-rotate-1",
  },
  {
    id: "testi-4",
    image: "/assets/images/testi-4.png",
    alt: "Dokumentasi serah terima sepatu Adidas dan sneakers selesai cuci",
    date: "20 Februari",
    tag: "SIAP PAKAI",
    tagColor: "bg-brand-red",
    tagTextColor: "text-white",
    caption: "Sepatu beres dan wangi",
    rotationClass: "md:rotate-1",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-canvas-cream border-b-2.5 border-ink py-14 md:py-20 px-3 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-pop text-ink border-2 border-ink px-3 py-1 rounded-sm shadow-neo-sm font-black text-xs uppercase tracking-wider mb-2.5">
            {/* Neo-Geometric 4-point sparkle icon */}
            <svg
              className="w-3.5 h-3.5 fill-ink"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <span>DOKUMENTASI PELANGGAN</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase leading-tight">
            SEPATU BERSIH,{" "}
            <span className="inline-block bg-brand-red text-white px-2.5 sm:px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm -rotate-1">
              SIAP PAKAI LAGI.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-700 max-w-xl mx-auto mt-2.5 leading-relaxed font-medium">
            Beberapa dokumentasi sepatu pelanggan yang sudah beres kita sikat dan siap diambil atau diantar.
          </p>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-bold mt-3">
            <span>&larr;</span>
            <span>Geser ke samping untuk melihat foto</span>
            <span>&rarr;</span>
          </div>
        </div>

        {/* Stories Grid / Mobile Horizontal Scroll Container */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-3.5 sm:gap-4 md:gap-5 pb-4 md:pb-0 px-1 sm:px-2 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`w-[220px] sm:w-[240px] md:w-auto shrink-0 snap-center bg-white border-2.5 border-ink rounded-md p-2.5 sm:p-3 shadow-neo hover:shadow-neo-lg ${item.rotationClass} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
            >
              {/* Instagram Story Top Mockup Bar */}
              <div className="flex items-center justify-between pb-2 border-b-2 border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/logo.png"
                    alt="Logo Sinisudah.Kusikat"
                    className="w-6 h-6 rounded-full border border-ink object-contain bg-white shrink-0"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-black text-ink tracking-tight leading-none">
                      sinisudah.kusikat
                    </span>
                    <span className="text-[9px] text-gray-500 font-bold leading-tight mt-0.5">
                      {item.date}
                    </span>
                  </div>
                </div>

                <span
                  className={`${item.tagColor} ${
                    item.tagTextColor || "text-ink"
                  } font-black text-[9px] tracking-wider px-1.5 py-0.5 rounded-xs border border-ink shadow-neo-xs`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Story Photograph (Compact 4:5 ratio) */}
              <div className="relative w-full aspect-[4/5] rounded-xs overflow-hidden border-2 border-ink bg-slate-900 mt-2.5 shadow-inner">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>

              {/* Bottom Caption */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-ink border-t-2 border-gray-100 mt-2">
                <span className="text-gray-700 truncate pr-1">{item.caption}</span>
                <span className="text-brand-red font-black tracking-wider text-[10px] uppercase shrink-0">
                  Sinisudah
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to Real Instagram Highlights */}
        <div className="mt-8 md:mt-10 text-center">
          <a
            href="https://www.instagram.com/sinisudah.kusikat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-pop hover:bg-yellow-card text-ink font-black text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-7 rounded-md border-2.5 border-ink shadow-neo hover:shadow-neo-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-neo-xs transition-all uppercase tracking-wide"
            title="Buka Instagram resmi @sinisudah.kusikat"
          >
            <span>Lihat Dokumentasi Lainnya di Instagram @sinisudah.kusikat</span>
            <span className="text-sm sm:text-base font-black">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

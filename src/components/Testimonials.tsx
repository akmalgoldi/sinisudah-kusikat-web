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
      className="relative bg-[#FFF4BD] bg-neo-blueprint border-b-3 border-ink py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      {/* Neubrutalist Decorative Background Shapes */}
      <div
        aria-hidden="true"
        data-parallax="-0.1"
        className="hidden sm:block pointer-events-none select-none absolute top-10 right-8 w-12 h-12 bg-white border-2.5 border-ink rounded-[6px] rotate-12 shadow-neo-xs"
      />
      <div
        aria-hidden="true"
        data-parallax="0.1"
        className="hidden sm:block pointer-events-none select-none absolute bottom-10 left-8 w-12 h-12 bg-brand-red border-2.5 border-ink rounded-[6px] -rotate-6 shadow-neo-xs"
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Section Header with Reveal Animation */}
        <div className="reveal-header text-center mb-8 md:mb-10">
          <div className="sticker-pop inline-flex items-center gap-2 bg-white text-ink border-2 border-ink px-3 py-1 rounded-[6px] shadow-neo-xs font-black text-xs mb-3">
            {/* Neo-Geometric 4-point sparkle icon */}
            <svg
              className="w-3.5 h-3.5 fill-brand-red"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <span>04 // DOKUMENTASI PELANGGAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase leading-tight">
            SEPATU BERSIH,{" "}
            <span className="sticker-pop inline-block bg-brand-red text-white px-2.5 sm:px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm -rotate-1">
              SIAP PAKAI LAGI.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mt-2.5 leading-relaxed font-medium">
            Beberapa dokumentasi sepatu pelanggan yang sudah beres kita sikat dan siap diambil atau diantar.
          </p>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-bold mt-3">
            <span className="animate-pulse">&larr;</span>
            <span>Geser ke samping untuk melihat foto</span>
            <span className="animate-pulse">&rarr;</span>
          </div>
        </div>

        {/* Outer Reveal Wrapper so children inside overflow-x-auto never have vertical translate offsets */}
        <div className="reveal">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory gap-3.5 sm:gap-4 md:gap-5 pt-2 pb-4 md:py-2 px-1 sm:px-2 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch">
            {TESTIMONIALS.map((item) => (
              <a
                key={item.id}
                href="https://www.instagram.com/sinisudah.kusikat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat dokumentasi ${item.caption} di Instagram @sinisudah.kusikat`}
                className={`group card-sticker w-[235px] sm:w-[250px] md:w-auto shrink-0 snap-center bg-white border-2.5 border-ink rounded-md p-2.5 sm:p-3 shadow-neo ${item.rotationClass} md:hover:rotate-0 md:hover:-translate-y-2 md:hover:shadow-neo-lg active:scale-[0.99] flex flex-col justify-between select-none cursor-pointer`}
              >
                {/* Instagram Story Top Mockup Bar */}
                <div className="flex items-center gap-2 pb-2 border-b-2 border-gray-100">
                  <div className="relative">
                    <img
                      src="/assets/images/logo.png"
                      alt="Logo Sinisudah.Kusikat"
                      className="w-6 h-6 rounded-full border border-ink object-contain bg-white shrink-0 group-hover:scale-105 transition-transform duration-300"
                      width={24}
                      height={24}
                    />
                    {/* Subtle active status indicator */}
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-xs font-black text-ink tracking-tight leading-none truncate group-hover:text-brand-red transition-colors duration-200">
                      sinisudah.kusikat
                    </span>
                    <span className="text-[10px] text-gray-500 font-bold leading-tight mt-0.5">
                      Story &bull; {item.date}
                    </span>
                  </div>
                </div>

                {/* Story Photograph (Compact 4:5 with Smooth Zoom Animation on Hover) */}
                <div className="relative w-full aspect-[4/5] rounded-xs overflow-hidden border-2 border-ink bg-slate-900 mt-2.5">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center pointer-events-none transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    width={600}
                    height={750}
                  />

                  {/* Corner Sticker Badge with Micro-Pop Animation on Hover */}
                  <div className="absolute top-2 right-2 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
                    <span
                      className={`${item.tagColor} ${
                        item.tagTextColor || "text-ink"
                      } font-black text-[10px] px-2 py-0.5 rounded-xs border-1.5 border-ink shadow-neo-xs inline-block`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Bottom Caption Bar */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-ink border-t-2 border-gray-100 mt-2">
                  <span className="text-gray-700 truncate pr-1 group-hover:text-ink transition-colors">
                    {item.caption}
                  </span>
                  <span className="text-brand-red font-black text-[10px] shrink-0 group-hover:underline">
                    Sinisudah &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Action Button to Real Instagram Highlights */}
        <div className="mt-8 md:mt-10 text-center">
          <a
            href="https://www.instagram.com/sinisudah.kusikat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-candy inline-flex items-center gap-2 bg-yellow-pop hover:bg-yellow-card text-ink font-black text-sm py-2.5 sm:py-3 px-5 sm:px-7 rounded-md border-2.5 border-ink shadow-neo hover:shadow-neo-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-neo-xs"
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

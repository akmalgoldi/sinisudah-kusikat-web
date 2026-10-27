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
    id: "testi-nb",
    image: "/assets/images/testi-1.png",
    alt: "Dokumentasi pelanggan Sinisudah.Kusikat menerima sepatu bersih",
    date: "9 Oktober",
    tag: "SERAH TERIMA",
    tagColor: "bg-yellow-pop",
    tagTextColor: "text-ink",
    caption: "Sepatu selesai disikat",
    rotationClass: "md:-rotate-1",
  },
  {
    id: "testi-pink",
    image: "/assets/images/testi-2.png",
    alt: "Kemasan laundry Sinisudah.Kusikat berisi sepatu bersih",
    date: "18 Februari",
    tag: "SIAP PAKAI",
    tagColor: "bg-brand-red",
    tagTextColor: "text-white",
    caption: "Packing rapi siap diambil atau diantar",
    rotationClass: "md:rotate-1",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-canvas-cream border-b-2.5 border-ink py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-pop text-ink border-2 border-ink px-3 py-1 rounded-sm shadow-neo-sm font-black text-xs uppercase tracking-wider mb-3">
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase leading-tight">
            SEPATU BERSIH,{" "}
            <span className="inline-block bg-brand-red text-white px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm -rotate-1">
              SIAP PAKAI LAGI.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mt-3 leading-relaxed font-medium">
            Beberapa dokumentasi sepatu pelanggan yang sudah beres kita sikat dan siap diambil atau diantar.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-3xl mx-auto items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`bg-white border-2.5 border-ink rounded-md p-3 sm:p-4 shadow-neo-lg ${item.rotationClass} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
            >
              {/* Instagram Story Top Mockup Bar */}
              <div className="flex items-center justify-between pb-2.5 border-b-2 border-gray-100">
                <div className="flex items-center gap-2">
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
                      Story &bull; {item.date}
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
              <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[9/16] max-h-[520px] rounded-xs overflow-hidden border-2 border-ink bg-slate-900 mt-3 shadow-inner">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  width={720}
                  height={1280}
                />
              </div>

              {/* Bottom Caption */}
              <div className="pt-2.5 flex items-center justify-between text-xs font-bold text-ink border-t-2 border-gray-100 mt-2.5">
                <span className="text-gray-700 truncate pr-2">{item.caption}</span>
                <span className="text-brand-red font-black tracking-wider text-[11px] uppercase">
                  Sinisudah
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to Real Instagram Highlights */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/sinisudah.kusikat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-pop hover:bg-yellow-card text-ink font-black text-xs sm:text-sm md:text-base py-3 px-6 sm:px-8 rounded-md border-2.5 border-ink shadow-neo hover:shadow-neo-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-neo-xs transition-all uppercase tracking-wide"
            title="Buka Instagram resmi @sinisudah.kusikat"
          >
            <span>Lihat Dokumentasi Lainnya di Instagram @sinisudah.kusikat</span>
            <span className="text-base sm:text-lg font-black">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

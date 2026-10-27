import React from "react";

export function Gallery() {
  const items = [
    {
      title: "Perawatan Sneakers Canvas & Denim",
      desc: "Noda tanah dan debu pekat pada upper denim dan midsole terangkat tuntas tanpa memudarkan warna kain.",
      before: "/assets/images/galeri-denim-before.jpg",
      after: "/assets/images/galeri-denim-after.jpg",
      altBefore: "Sepatu Kanvas Denim Sebelum Dicuci",
      altAfter: "Sepatu Kanvas Denim Sesudah Dicuci Bersih",
    },
    {
      title: "Deep Clean Sneakers Kulit Putih",
      desc: "Lekukan kulit kusam dan noda daki dibersihkan menyeluruh hingga kembali cerah cemerlang.",
      before: "/assets/images/galeri-diadora-before.jpg",
      after: "/assets/images/galeri-diadora-after.jpg",
      altBefore: "Sepatu Kulit Putih Sebelum Dicuci",
      altAfter: "Sepatu Kulit Putih Sesudah Dicuci Bersih",
    },
    {
      title: "Perawatan Mesh & Foam Sepatu Lari",
      desc: "Bahan rajut bernapas dan bantalan foam tebal dibersihkan tanpa merusak elastisitas sol.",
      before: "/assets/images/galeri-asics-before.jpg",
      after: "/assets/images/galeri-asics-after.jpg",
      altBefore: "Sepatu Lari Mesh Sebelum Dicuci",
      altAfter: "Sepatu Lari Mesh Sesudah Dicuci Bersih",
    },
    {
      title: "Perawatan Khusus Leather & Work Boots",
      desc: "Lumpur tanah pekat pada kulit tebal dibersihkan dan diberi nutrisi pelembap agar tetap lentur dan kokoh.",
      before: "/assets/images/galeri-boot-before.jpg",
      after: "/assets/images/galeri-boot-after.jpg",
      altBefore: "Sepatu Boots Kulit Sebelum Dicuci",
      altAfter: "Sepatu Boots Kulit Sesudah Dicuci Bersih",
    },
  ];

  return (
    <section id="galeri" className="bg-canvas-cream border-b-2.5 border-ink py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase">
            BUKTI SEBELUM &amp;{" "}
            <span className="inline-block bg-yellow-pop text-ink px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm">
              SESUDAH.
            </span>
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto mt-3 leading-relaxed">
            <span className="italic font-extrabold text-red-800 mr-1.5">
              bukti pengerjaan detail &darr;
            </span>
            Noda pekat, daki kulit, hingga sol menguning bersih tuntas sesuai bahan sepatumu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="reveal bg-white border-2.5 border-ink rounded-xl overflow-hidden shadow-neo-md hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop flex flex-col"
            >
              <div className="grid grid-cols-2 relative bg-gray-200 border-b-2.5 border-ink">
                {/* Before */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={item.before}
                    alt={item.altBefore}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 bg-white text-ink text-sm font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-ink shadow-neo-xs">
                    Sebelum
                  </span>
                </div>

                {/* Center Divider */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2.5px] bg-ink pointer-events-none z-20" />

                {/* After */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={item.after}
                    alt={item.altAfter}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 bg-yellow-pop text-ink text-sm font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-ink shadow-neo-xs">
                    Sesudah
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-gray-800 leading-relaxed max-w-[65ch]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

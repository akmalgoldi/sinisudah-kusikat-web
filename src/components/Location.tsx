import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Location() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=-1.200306,116.850389";

  return (
    <section id="lokasi" className="bg-canvas-cream border-b-2.5 border-ink py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight uppercase">
            KUNJUNGI{" "}
            <span className="inline-block bg-yellow-pop text-ink px-3 py-0.5 border-2 border-ink rounded-sm shadow-neo-sm">
              WORKSHOP KAMI.
            </span>
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto mt-3 leading-relaxed">
            <span className="italic font-extrabold text-red-800 mr-1.5">
              petunjuk arah &amp; drop-off &darr;
            </span>
            Drop-off sepatu langsung atau kunjungi kami pada jam operasional berikut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Jadwal Operasional */}
          <div className="reveal bg-white border-2.5 border-ink rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-neo-md hover:-translate-y-0.5 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop">
            <div>
              <Badge variant="dark" className="mb-4 text-sm py-1 px-3">
                Jam Buka
              </Badge>
              <h3 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight mb-5">
                JADWAL OPERASIONAL.
              </h3>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between items-center p-4 bg-canvas-cream border-2 border-ink rounded-lg text-base">
                  <span className="font-extrabold text-ink">Selasa &ndash; Minggu</span>
                  <span className="font-bold text-ink">17.00 &ndash; 22.00 WITA</span>
                </div>
                {/* High contrast dark red 7.5:1 on bg-red-100 */}
                <div className="flex justify-between items-center p-4 bg-red-100 border-2 border-ink rounded-lg text-base text-red-950 font-black">
                  <span>Senin</span>
                  <span>Tutup</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 text-sm sm:text-base text-gray-800">
              <span className="w-3 h-3 rounded-full bg-emerald-500 border border-ink inline-block shrink-0" />
              <span>Drop-off sepatu langsung diterima saat jam operasional buka</span>
            </div>
          </div>

          {/* Workshop Map Card */}
          <div className="reveal bg-white border-2.5 border-ink rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-neo-md hover:-translate-y-0.5 hover:shadow-neo-lg transition-all duration-300 ease-bounce-pop">
            <div>
              <Badge variant="dark" className="mb-4 text-sm py-1 px-3">
                Peta Navigasi
              </Badge>
              <h3 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight mb-3">
                WORKSHOP BALIKPAPAN.
              </h3>

              <div className="inline-flex items-center gap-2 bg-canvas-cream border-2 border-ink px-3.5 py-1.5 rounded-full text-sm font-bold text-ink mb-4 shadow-neo-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block" />
                <span>Balikpapan, Kalimantan Timur</span>
              </div>

              {/* Map Iframe */}
              <div className="w-full aspect-[16/9] min-h-[190px] rounded-lg overflow-hidden border-2 border-ink mb-4">
                <iframe
                  src="https://maps.google.com/maps?q=-1.200306,116.850389&hl=id&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Peta Lokasi Workshop Sinisudah.Kusikat Balikpapan"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <p className="text-sm sm:text-base text-gray-800 mb-5 leading-relaxed max-w-[65ch]">
                Temukan lokasi workshop Sinisudah.Kusikat melalui Google Maps untuk panduan rute GPS langsung dari lokasi Anda di Balikpapan.
              </p>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="primary" size="full" className="text-sm sm:text-base font-black px-4 py-3 flex items-center justify-center gap-2.5" id="btn-google-maps">
                <span>Buka Arah di Google Maps</span>
                <span className="w-6 h-6 rounded-full bg-yellow-pop text-ink flex items-center justify-center shrink-0 text-xs font-black border border-ink shadow-neo-xs" aria-hidden="true">&rarr;</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

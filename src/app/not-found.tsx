import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-canvas-cream flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white border-3 border-ink rounded-xl p-8 max-w-md w-full shadow-neo-lg">
        <span className="inline-block px-3.5 py-1 rounded-full border-2 border-ink bg-yellow-pop text-ink font-black text-sm mb-4 shadow-neo-xs">
          404 ERROR
        </span>
        <h1 className="text-3xl font-black text-ink mb-3 tracking-tight">
          HALAMAN TIDAK DITEMUKAN.
        </h1>
        <p className="text-base text-gray-800 font-medium mb-6 leading-relaxed">
          Sepatu atau halaman yang Anda cari mungkin sudah berpindah rak atau sedang dicuci bersih.
        </p>
        <Link href="/" className="inline-block w-full">
          <Button variant="brand" size="lg" className="w-full font-black flex items-center justify-center gap-2">
            <span>Kembali ke Beranda</span>
            <span className="w-6 h-6 rounded-full bg-white text-ink flex items-center justify-center text-xs font-black border border-ink shadow-neo-xs" aria-hidden="true">&rarr;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}


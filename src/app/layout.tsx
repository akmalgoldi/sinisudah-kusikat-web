import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sinisudahkusikat.com"),
  title: "Sinisudah.Kusikat — Jasa Cuci & Perawatan Sepatu Manual Balikpapan",
  description:
    "Jasa cuci sepatu di Balikpapan untuk sneakers, suede, sepatu kulit, dan boots. Setiap sepatu dibersihkan secara manual dengan teliti menggunakan cairan pembersih yang disesuaikan dengan jenis bahan. Buka Selasa–Minggu, pukul 17.00–22.00 WITA.",
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
  openGraph: {
    title: "Sinisudah.Kusikat — Jasa Cuci & Perawatan Sepatu Manual Balikpapan",
    description:
      "Jasa cuci sepatu di Balikpapan untuk sneakers, suede, sepatu kulit, dan boots. Bersih tuntas manual dengan chemical khusus material.",
    url: "https://sinisudahkusikat.com",
    siteName: "Sinisudah.Kusikat",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 800,
        height: 800,
        alt: "Logo Sinisudah.Kusikat Balikpapan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/images/favicon.png" type="image/png" />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

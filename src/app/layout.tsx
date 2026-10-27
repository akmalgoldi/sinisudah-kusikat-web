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
  metadataBase: new URL("https://sinisudah-kusikat-web.vercel.app"),
  title: "Sinisudah.Kusikat — Jasa Cuci & Perawatan Sepatu Manual Balikpapan",
  description:
    "Jasa cuci sepatu di Balikpapan untuk sneakers, suede, sepatu kulit, dan boots. Setiap sepatu dibersihkan secara manual dengan teliti menggunakan cairan pembersih yang disesuaikan dengan jenis bahan. Buka Selasa–Minggu, pukul 17.00–22.00 WITA.",
  keywords: [
    "sinisudah kusikat",
    "sinisudah.kusikat",
    "sinisudah kusikat balikpapan",
    "cuci sepatu balikpapan",
    "jasa cuci sepatu balikpapan",
    "laundry sepatu balikpapan",
    "deep clean sepatu balikpapan",
    "fast clean sepatu balikpapan",
    "unyellowing balikpapan",
    "repaint sepatu balikpapan",
  ],
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
  alternates: {
    canonical: "https://sinisudah-kusikat-web.vercel.app",
  },
  openGraph: {
    title: "Sinisudah.Kusikat — Jasa Cuci & Perawatan Sepatu Manual Balikpapan",
    description:
      "Jasa cuci sepatu di Balikpapan untuk sneakers, suede, sepatu kulit, dan boots. Bersih tuntas manual dengan chemical khusus material.",
    url: "https://sinisudah-kusikat-web.vercel.app",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sinisudah.Kusikat",
  alternateName: "Sinisudah Kusikat Balikpapan",
  image: "https://sinisudah-kusikat-web.vercel.app/assets/images/logo.png",
  description:
    "Jasa cuci dan perawatan sepatu manual di Balikpapan untuk sneakers, suede, kulit, dan boots.",
  url: "https://sinisudah-kusikat-web.vercel.app",
  telephone: "+6285348085177",
  priceRange: "Rp35.000 - Rp125.000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balikpapan",
    addressRegion: "Kalimantan Timur",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.200306,
    longitude: 116.850389,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "22:00",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

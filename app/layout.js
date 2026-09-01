import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://360fitclub.id"),
  title: "360FITCLUB Tambun | Gym, Zumba & Fitness Bekasi",
  description:
    "360FITCLUB adalah pusat kebugaran di Tambun Selatan, Bekasi dengan gym, zumba, studio fitness, dan suasana latihan yang nyaman. Hubungi kami via WhatsApp.",
  keywords: [
    "gym Tambun",
    "fitness Bekasi",
    "gym Tridaya Sakti",
    "zumba Tambun",
    "360FITCLUB",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
      { url: "/icon.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/logo.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "360FITCLUB Tambun — Gerak Lebih. Hidup Lebih.",
    description: "Pusat kebugaran pilihan di Tambun Selatan, Kabupaten Bekasi.",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "360FITCLUB Logo" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

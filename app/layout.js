import "./globals.css";
import { LocalBusinessJsonLd, WebSiteJsonLd, pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "360FITCLUB Tambun | Gym, Zumba & Fitness Bekasi",
  description:
    "360FITCLUB adalah pusat kebugaran di Tambun Selatan, Bekasi dengan gym, zumba, studio fitness, dan suasana latihan yang nyaman. Hubungi kami via WhatsApp.",
});

export default function RootLayout({ children }) {
  const structuredData = [LocalBusinessJsonLd(), WebSiteJsonLd()];

  return (
    <html lang="id">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://360fitclub.web.id";

export const business = {
  name: "360FITCLUB",
  description:
    "Pusat kebugaran di Tridaya Sakti, Tambun Selatan, Kabupaten Bekasi dengan area gym, studio kelas, dan program latihan untuk berbagai level.",
  phone: "+6287789266205",
  address: {
    streetAddress: "Jl. KH. Mas'ud No.153, RT.003/RW.04",
    addressLocality: "Tridaya Sakti",
    addressRegion: "Jawa Barat",
    postalCode: "17518",
    addressCountry: "ID",
  },
  instagram: "https://www.instagram.com/360fitclub.id/",
};

export const pageMetadata = ({ title, description, path = "" }) => ({
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: path || "/" },
  openGraph: {
    title,
    description,
    url: path || "/",
    siteName: business.name,
    locale: "id_ID",
    type: "website",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "Logo 360FITCLUB" }],
  },
  twitter: { card: "summary", title, description, images: ["/logo.jpg"] },
  robots: { index: true, follow: true },
});

export function LocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    name: business.name,
    description: business.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.jpg`,
    image: `${siteUrl}/logo.jpg`,
    telephone: business.phone,
    address: { "@type": "PostalAddress", ...business.address },
    sameAs: [business.instagram],
  };
}

export function WebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: business.name,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#business` },
    inLanguage: "id-ID",
  };
}

import { business, siteUrl } from "../../lib/seo";

export function GET() {
  const body = `# ${business.name}

> ${business.description}

## Public pages
- ${siteUrl}/
- ${siteUrl}/tentang
- ${siteUrl}/fasilitas
- ${siteUrl}/program
- ${siteUrl}/membership
- ${siteUrl}/lokasi

## Programs
Gym & Fitness, Zumba, Senam, Muaythai, and Poundfit.

## Contact
- Address: ${business.address.streetAddress}, ${business.address.addressLocality}, ${business.address.addressRegion} ${business.address.postalCode}, Indonesia
- WhatsApp: ${business.phone}
- Instagram: ${business.instagram}

Information should be confirmed with 360FITCLUB before publication because schedules, pricing, and availability can change.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

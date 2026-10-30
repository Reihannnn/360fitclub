# SEO and GEO Audit

Audit date: 2026-10-30

## Project discovery

- Next.js 16.4.3 with React 19.3.1.
- App Router under `app/`; JavaScript, not TypeScript.
- Public routes: `/`, `/tentang`, `/fasilitas`, `/program`, `/membership`, `/lokasi`, and five `/program/[slug]` pages.
- Existing design is preserved. The site uses Tailwind CSS and `lucide-react`.
- The business facts used here are the existing site/research facts: 360FITCLUB, Tambun Selatan, Bekasi, the published address, WhatsApp number, Instagram profile, and listed programs.
- No verified geographic coordinates, complete day-by-day hours, membership prices, trainer credentials, awards, or first-party facility photography were available. Those facts were not added.

## Findings and changes

| Severity | Finding | Resolution |
| --- | --- | --- |
| Critical | No sitemap or robots endpoint existed. | Added App Router `sitemap.xml` and `robots.txt` with public URLs and sitemap reference. |
| High | Most pages had only title and description; canonical, Open Graph, Twitter, and robots metadata were inconsistent or absent. | Added shared metadata configuration and unique canonical/social metadata to all indexable page routes. |
| High | No structured data established the local business or website entity. | Added `HealthClub`/`LocalBusiness` and `WebSite` JSON-LD using verified facts. |
| High | Homepage FAQ content had no machine-readable FAQ representation. | Added FAQPage JSON-LD matching the visible FAQ questions and answers. |
| Medium | AI/search discovery guidance was absent. | Added supplementary `/llms.txt` with public URLs, services, contact data, and freshness caveat. |
| Medium | Homepage is a client component and relies heavily on CSS background images and remote Unsplash assets. | Kept UI unchanged; documented this as a performance/image migration opportunity rather than risking a visual regression. |
| Medium | Homepage hero is visually descriptive but its H1 is slogan-led. | Added an accessible, non-visual phrase identifying the gym and location; visible copy remains unchanged. |
| Low | No lint script is defined in `package.json`. | Build was run; lint remains a project setup gap. |

## Page targeting

| URL | Primary intent/keyword | Supporting topics |
| --- | --- | --- |
| `/` | gym Tambun / gym Bekasi | fitness center Tambun, gym Tridaya Sakti, beginner gym |
| `/tentang` | tentang gym 360FITCLUB | gym komunitas Tambun, fitness untuk pemula |
| `/fasilitas` | fasilitas gym Tambun | alat fitness, studio kelas, studio sewa |
| `/program` | program latihan gym Tambun | Zumba, senam, Muaythai, Poundfit |
| `/membership` | membership gym Tambun Bekasi | harga membership, jadwal kelas, personal trainer |
| `/lokasi` | lokasi gym Tridaya Sakti | alamat gym Tambun, jam buka, Google Maps |
| `/program/[slug]` | specific program + Tambun Bekasi | benefits, beginner suitability, schedule enquiry |

There is no material cannibalization in the current route set because the pages have distinct intents. Keep price queries on `/membership` and location queries on `/lokasi`; do not create additional near-duplicate city pages without a real location or unique service.

## Technical notes

- Canonical URLs use `https://360fitclub.web.id` from the shared SEO module.
- `/api/` is disallowed; Next.js rendering assets remain crawlable.
- `/llms.txt` is supplementary discovery content, not a Google ranking signal or guarantee of AI citation.
- No redirect rules were added because no legacy URL or redirect requirement was found in the repository.
- No `Offer` schema was added because prices and packages are not published as verified, stable offers.
- No review or aggregate-rating schema was added because third-party review data should not be used to imply first-party testimonials or guarantee rich results.

## Content strategy

Prioritize experience-based articles only when the business can provide original input, photos, or trainer guidance:

1. **Panduan Memulai Gym untuk Pemula di Tambun**
   - Keyword: gym untuk pemula Tambun
   - Intent: informational/local
   - Meta: Panduan praktis memulai latihan gym untuk pemula di Tambun, termasuk persiapan sebelum datang dan cara memilih program.
   - Headings: Apa yang perlu disiapkan; latihan pertama; memilih gym atau kelas; kapan bertanya kepada tim 360FITCLUB.
   - Links: `/program`, `/fasilitas`, `/membership`, `/lokasi`.
2. **Cara Memilih Program Latihan yang Sesuai Tujuan**
   - Keyword: program latihan gym Tambun
   - Intent: commercial investigation
   - Meta: Bandingkan pilihan Gym & Fitness, Zumba, Senam, Muaythai, dan Poundfit berdasarkan tujuan dan gaya latihan.
   - Headings: Tujuan latihan; latihan mandiri vs kelas; program untuk pemula; cara menanyakan jadwal.
   - Links: each relevant `/program/[slug]`, `/membership`.
3. **Apa yang Perlu Ditanyakan Sebelum Mendaftar Membership Gym**
   - Keyword: cara memilih membership gym
   - Intent: commercial investigation
   - Meta: Checklist pertanyaan tentang harga, jadwal, fasilitas, dan aturan sebelum memilih membership gym.
   - Headings: Harga dan periode; fasilitas; jadwal kelas; konsultasi sebelum daftar.
   - Links: `/membership`, `/fasilitas`, `/lokasi`.

## Remaining prioritized checklist

### Critical

- Verify `https://360fitclub.web.id` is the canonical production domain and configure the deployment accordingly.

### High priority

- Replace illustrative Unsplash backgrounds with owned/permissioned business photography.
- Convert important above-the-fold imagery to `next/image` with explicit dimensions and measured priority/LCP behavior.
- Add a real lint script and run it in CI.
- Verify the published address, phone, hours, and Instagram profile against the current Google Business Profile.

### Medium priority

- Move global Google Fonts from CSS `@import` to `next/font` to reduce render-blocking work and improve font stability.
- Add measured weekday opening hours only after confirmation.
- Add verified latitude/longitude only after confirmation.
- Add `Service` schema only for services with stable, visible descriptions and no conflicting pricing.
- Test mobile and desktop Core Web Vitals in PageSpeed Insights after deployment.

### Low priority

- Add original, experience-based articles from the content strategy.
- Add breadcrumb UI and matching `BreadcrumbList` schema if the site grows beyond the current shallow route hierarchy.

## Validation

- `npm run build`: passed. Static routes, `robots.txt`, `sitemap.xml`, and program detail pages generated successfully.
- Lint: not run because `package.json` has no lint script.
- External Google Rich Results, PageSpeed Insights, Search Console, and Bing validation: not run because they require a deployed/public URL or external access.
- Manual source review: all indexable page groups have unique metadata definitions; the generated sitemap includes every current public page and program detail route.

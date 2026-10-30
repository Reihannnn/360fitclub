import { siteUrl } from "../lib/seo";
import { programList } from "../components/programData";

export default function sitemap() {
  const pages = ["", "/tentang", "/fasilitas", "/program", "/membership", "/lokasi"];
  const programPages = programList.map(({ slug }) => `/program/${slug}`);

  return [...pages, ...programPages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/lokasi" || path === "/membership" ? 0.8 : 0.7,
  }));
}

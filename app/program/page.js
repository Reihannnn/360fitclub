import Link from "next/link";
import SiteNav, { InnerFooter, InnerHero, wa } from "../../components/SiteNav";
import { programList } from "../../components/programData";
import {
  Dumbbell,
  Music,
  HeartPulse,
  Swords,
  Drum,
  ArrowUpRight,
  MessageCircle,
  Phone,
  Eye,
} from "lucide-react";
import { pageMetadata } from "../../lib/seo";

const images = {
  "gym-fitness":
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  zumba:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  senam:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  muaythai:
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
  poundfit:
    "https://images.unsplash.com/photo-1599058917212-d750aac444b6?q=80&w=800&auto=format&fit=crop",
};

const iconMap = {
  "gym-fitness": Dumbbell,
  zumba: Music,
  senam: HeartPulse,
  muaythai: Swords,
  poundfit: Drum,
};

export const metadata = pageMetadata({
  title: "Program Gym, Zumba & Muaythai di Tambun | 360FITCLUB",
  description:
    "Lihat program latihan 360FITCLUB di Tambun Bekasi: gym, fitness, zumba, senam, muaythai, dan poundfit. Pilih program dan lihat detailnya.",
  path: "/program",
});

export default function ProgramPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white text-ink">
        <InnerHero
          eyebrow="PROGRAM LATIHAN 360FITCLUB"
          title={
            <>
              PILIH CARA
              <br />
              <em className="font-bold text-muted-2 not-italic">BERGERAKMU.</em>
            </>
          }
          description="Kenali setiap program lebih dekat — manfaat, gambaran latihan, dan tips sebelum mulai. Klik detail untuk baca lengkap."
        />
        <section className="py-12 px-[5vw] max-[800px]:px-[4vw] grid grid-cols-2 max-[800px]:grid-cols-1 gap-5 bg-paper-soft">
          {programList.map((program, i) => {
            const Icon = iconMap[program.slug] || Dumbbell;
            return (
              <article
                key={program.slug}
                className="bg-white border border-line rounded-[18px] overflow-hidden flex flex-col shadow-[0_8px_24px_rgba(10,10,10,0.06)] hover:-translate-y-1.5 hover:shadow-card hover:border-line-2 transition-all"
              >
                <div className="h-60 bg-[#F2F2F2] relative overflow-hidden border-b border-line">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-95"
                    style={{
                      backgroundImage: `url('${images[program.slug] || images["gym-fitness"]}')`,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute top-3.5 left-3.5 z-10 bg-black/65 text-white font-mono text-[11px] px-2.5 py-1.5 rounded-full tracking-[0.08em] backdrop-blur-[6px] border border-white/10 inline-flex items-center gap-1.5">
                    <Icon size={12} /> 0{i + 1} • {program.name.toUpperCase()}
                  </span>
                  <span className="absolute bottom-3.5 right-3.5 z-10 bg-lime text-ink font-mono text-[11px] px-2.5 py-1.5 rounded-full font-bold inline-flex items-center gap-1 border border-lime-strong">
                    <Eye size={12} /> LIHAT FOTO
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-lime font-semibold inline-flex items-center gap-1.5 mb-3">
                    <Icon size={12} /> 0{i + 1}
                  </span>
                  <h2 className="font-display font-extrabold text-[22px] tracking-[-0.03em] m-0 mb-2.5 leading-[1.1]">
                    {program.name}
                  </h2>
                  <p className="text-muted leading-[1.6] text-[15px] flex-1 m-0 mb-[18px] max-w-[50ch]">
                    {program.intro}
                  </p>
                  <Link
                    className="font-mono text-[11px] tracking-[0.08em] uppercase font-semibold border-b-2 border-[#D8D8D8] py-2.5 inline-flex items-center gap-2.5 text-ink hover:border-lime-strong hover:pl-1.5 transition-all self-start"
                    href={`/program/${program.slug}`}
                  >
                    Lihat detail <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
        <section className="py-[60px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-10 grid grid-cols-2 max-[800px]:grid-cols-1 gap-[4vw] items-center bg-ink text-white relative overflow-hidden border-t border-line-dark">
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_90%_0%,rgba(217,255,63,0.15)_0%,transparent_50%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime inline-flex items-center gap-1.5 mb-3.5 font-medium">
              <MessageCircle size={12} /> BELUM YAKIN PILIH YANG MANA?
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance text-white">
              KONSULTASI
              <br />
              <em className="font-bold text-muted-3 not-italic">DULU.</em>
            </h2>
            <p className="text-[#9A9A9A] leading-[1.7] text-base max-w-[480px] mt-3">
              Ceritakan tujuanmu — mau turun berat, bentuk otot, atau sekadar
              aktif lagi. Tim kami bantu arahkan program yang paling nyambung.
            </p>
          </div>
          <a
            className="flex items-center gap-3.5 p-4 bg-[#25D366] text-white max-w-[380px] rounded-full border-2 border-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.2)] font-semibold relative z-10 hover:bg-[#1FB859] hover:border-[#1FB859] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(37,211,102,0.22)] active:translate-y-0 active:scale-[0.98] transition-all max-[800px]:max-w-full"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            <span className="w-11 h-11 rounded-full bg-white/20 grid place-items-center shrink-0">
              <Phone size={18} />
            </span>
            <span className="flex flex-col gap-0.5 text-left leading-[1.2]">
              <b className="text-sm font-bold">Hubungi untuk konsultasi</b>
              <small className="font-mono text-[11px] tracking-[0.04em] opacity-90 font-normal">
                Chat via WhatsApp • Gratis
              </small>
            </span>
            <strong className="ml-auto w-9 h-9 rounded-full bg-white/20 grid place-items-center shrink-0">
              <ArrowUpRight size={16} />
            </strong>
          </a>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}

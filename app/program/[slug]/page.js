import { notFound } from "next/navigation";
import SiteNav, { InnerFooter, wa } from "../../../components/SiteNav";
import { programData, programList } from "../../../components/programData";
import { Phone, ArrowUpRight, Check, CalendarDays, MessageCircle } from "lucide-react";
import { Instagram } from "../../../components/BrandIcons";

const images = {
  "gym-fitness": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop",
  zumba: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  senam: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop",
  muaythai: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=900&auto=format&fit=crop",
  poundfit: "https://images.unsplash.com/photo-1599058917212-d750aac444b6?q=80&w=800&auto=format&fit=crop",
};

export function generateStaticParams() {
  return programList.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = programData[slug];
  return p
    ? {
        title: `${p.name} di Tambun Bekasi | 360FITCLUB`,
        description: `${p.name} di 360FITCLUB Tambun Bekasi. ${p.intro} Lihat manfaat dan konsultasikan jadwal latihan melalui WhatsApp.`,
      }
    : {};
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const p = programData[slug];
  if (!p) notFound();
  const heroImg = images[slug] || images["gym-fitness"];
  return (
    <>
      <SiteNav />
      <main className="bg-white text-ink">
        <header className="py-[60px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-10 bg-ink text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_0%,rgba(217,255,63,0.12)_0%,transparent_60%),radial-gradient(ellipse_at_90%_100%,rgba(255,255,255,0.06)_0%,transparent_50%)]" aria-hidden="true" />
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime flex items-center gap-2.5 mb-3.5 font-medium relative"><span className="inline-block w-2 h-2 rounded-full bg-lime-strong shrink-0 shadow-[0_0_0_6px_rgba(217,255,63,0.15)]" /> PROGRAM 360FITCLUB / {p.name.toUpperCase()}</p>
          <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.9] text-[clamp(36px,6vw,64px)] max-[800px]:text-[36px] m-0 text-balance text-white relative">
            {p.name.toUpperCase()}
            <br />
            <em className="font-bold text-[#6A6A6A] not-italic">{p.tagline.toUpperCase()}</em>
          </h1>
          <p className="text-[17px] leading-[1.75] text-[#9A9A9A] max-w-[600px] mt-4 font-normal relative">{p.intro}</p>
          <a className="mt-7 flex items-center gap-3.5 p-4 bg-[#25D366] text-white max-w-[380px] rounded-full border-2 border-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.2)] font-semibold relative z-10 hover:bg-[#1FB859] hover:border-[#1FB859] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all" href={wa} target="_blank" rel="noreferrer">
            <span className="w-11 h-11 rounded-full bg-white/20 grid place-items-center shrink-0"><Phone size={18} /></span>
            <span className="flex flex-col gap-0.5 text-left leading-[1.2]">
              <b className="text-sm font-bold">Hubungi untuk konsultasi</b>
              <small className="font-mono text-[11px] tracking-[0.04em] opacity-90 font-normal">Diskusikan tujuan latihanmu</small>
            </span>
            <strong className="ml-auto w-9 h-9 rounded-full bg-white/20 grid place-items-center shrink-0"><ArrowUpRight size={16} /></strong>
          </a>
        </header>

        <section className="py-[60px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-10 grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-start bg-white">
          <div>
            <div className="h-[360px] max-[800px]:h-[260px] rounded-[18px] overflow-hidden relative bg-[#F2F2F2] border border-line">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImg}')` }} aria-hidden="true" />
              <span className="absolute bottom-3 left-3 bg-black/70 text-white font-mono text-[11px] px-2.5 py-1.5 rounded-full tracking-[0.06em] backdrop-blur-[6px] inline-flex items-center gap-1.5 border border-white/10"><Instagram size={12} /> {p.name} • 360FITCLUB</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mt-2.5">
              <div className="h-[100px] bg-[#F2F2F2] rounded-xl border border-line bg-cover bg-center" style={{ backgroundImage: `url('${heroImg}')`, opacity: 0.9 }} />
              <div className="h-[100px] bg-[#F2F2F2] rounded-xl border border-line bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=400&auto=format&fit=crop')" }} />
              <div className="h-[100px] bg-[#F2F2F2] rounded-xl border border-line bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop')" }} />
            </div>
            <p className="font-mono text-xs text-muted-2 mt-2.5 leading-[1.5] flex gap-1.5">
              <Instagram size={12} className="shrink-0 mt-0.5" /> *Foto ilustrasi gym. Untuk foto asli peralatan & studio 360FITCLUB, cek Instagram @360fitclub.id atau tanya via WA.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium"><Check size={12} /> TENTANG PROGRAM</p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-[clamp(28px,4vw,44px)] max-[800px]:text-[28px] mt-3 mb-4 text-balance">
              LATIHAN YANG
              <br />
              <em className="font-bold text-muted-3 not-italic">SESUAI TUJUAN.</em>
            </h2>
            <p className="text-muted leading-[1.75] text-base max-w-[60ch] mb-3.5">{p.detail}</p>
            <h3 className="mt-7 mb-3 font-display font-bold text-base tracking-[-0.02em] inline-flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-lime text-ink grid place-items-center"><Check size={12} /></span> Manfaat program</h3>
            <ul className="list-none p-0 grid gap-2.5 mb-[18px]">
              {p.benefits.map((item) => (
                <li key={item} className="relative pl-7 leading-[1.5] text-ink text-[15px] font-medium">
                  <span className="absolute left-0 top-0 w-5 h-5 rounded-full bg-lime text-ink grid place-items-center text-[11px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="border-l-[3px] border-lime-strong pl-4 py-3.5 bg-lime-faint rounded-r-xl text-sm leading-[1.6] text-ink mt-[18px] flex gap-2"><MessageCircle size={16} className="shrink-0 mt-0.5" /> <span><strong>Tips:</strong> {p.tips}</span></p>
            <div className="mt-[18px] p-4 bg-paper-soft border border-line rounded-xl">
              <strong className="text-[13px] tracking-[-0.01em] inline-flex items-center gap-1.5"><CalendarDays size={14} /> Mau coba kelas ini minggu ini?</strong>
              <p className="text-[13px] text-muted mt-1.5 leading-[1.6]">Tanya jadwal terbaru & slot kosong. Kami bantu carikan jam yang pas buat pemula.</p>
              <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2.5 font-mono text-[11px] tracking-[0.08em] font-bold bg-ink text-white px-3.5 py-2.5 rounded-full hover:bg-lime hover:text-ink hover:border-lime border border-ink transition-colors"><CalendarDays size={12} /> TANYA JADWAL <ArrowUpRight size={12} color="#D9FF3F" /></a>
            </div>
          </div>
        </section>

        <section className="py-[60px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-10 grid grid-cols-2 max-[800px]:grid-cols-1 gap-[4vw] items-center bg-ink text-white relative overflow-hidden border-t border-line-dark">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_90%_0%,rgba(217,255,63,0.15)_0%,transparent_50%)]" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime inline-flex items-center gap-1.5 mb-3.5 font-medium"><MessageCircle size={12} /> SIAP MULAI {p.name.toUpperCase()}?</p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance text-white">
              OBROLKAN
              <br />
              <em className="font-bold text-muted-3 not-italic">RUTINITASMU.</em>
            </h2>
            <p className="text-[#9A9A9A] mt-3 max-w-[480px] leading-[1.7]">Ceritakan tujuanmu, kami bantu susun langkah pertama yang realistis — bukan yang bikin kapok.</p>
          </div>
          <a className="flex items-center gap-3.5 p-4 bg-[#25D366] text-white max-w-[380px] rounded-full border-2 border-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.2)] font-semibold relative z-10 hover:bg-[#1FB859] hover:border-[#1FB859] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all max-[800px]:max-w-full" href={wa} target="_blank" rel="noreferrer">
            <span className="w-11 h-11 rounded-full bg-white/20 grid place-items-center shrink-0"><Phone size={18} /></span>
            <span className="flex flex-col gap-0.5 text-left leading-[1.2]">
              <b className="text-sm font-bold">Hubungi untuk konsultasi</b>
              <small className="font-mono text-[11px] tracking-[0.04em] opacity-90 font-normal">Chat via WhatsApp</small>
            </span>
            <strong className="ml-auto w-9 h-9 rounded-full bg-white/20 grid place-items-center shrink-0"><ArrowUpRight size={16} /></strong>
          </a>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}

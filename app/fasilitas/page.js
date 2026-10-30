import SiteNav, { InnerFooter, InnerHero, wa } from "../../components/SiteNav";
import { Dumbbell, Users, Sparkles, Building2, Clock, ArrowUpRight, Eye } from "lucide-react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Fasilitas Gym di Tambun Bekasi | 360FITCLUB",
  description:
    "Jelajahi fasilitas 360FITCLUB di Tambun Selatan: area gym, alat fitness, studio kelas, dan ruang latihan yang nyaman.",
  path: "/fasilitas",
});

const facilities = [
  {
    title: "Area Gym & Alat Fitness",
    text: "Area latihan dengan perlengkapan untuk kekuatan, cardio, dan fungsional. Cocok untuk pemula sampai advanced.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    num: "01",
    icon: Dumbbell,
  },
  {
    title: "Studio Kelas Ber-AC",
    text: "Ruang kedap untuk Zumba, Senam, Poundfit, dan Muaythai. Sound & lighting siap bikin kelas hidup.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    num: "02",
    icon: Users,
  },
  {
    title: "Nyaman & Bersih",
    text: "Suasana terawat yang bikin kamu betah. Member bilang: 'feels like home' — bukan gimmick.",
    img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop",
    num: "03",
    icon: Sparkles,
  },
  {
    title: "Studio Sewa",
    text: "Butuh ruang latihan privat? Studio bisa disewa non-member. Tanya slot & tarif via WhatsApp.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    num: "04",
    icon: Building2,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white text-ink">
        <InnerHero
          eyebrow="FASILITAS 360FITCLUB"
          title={
            <>
              RUANG UNTUK
              <br />
              <em className="font-bold text-muted-2 not-italic">JADI LEBIH.</em>
            </>
          }
          description="Dari latihan mandiri sampai kelas bersama, 360FITCLUB menyiapkan ruang yang bikin kamu mau balik lagi."
        />
        <section className="py-12 px-[5vw] max-[800px]:px-[4vw] grid grid-cols-2 max-[800px]:grid-cols-1 gap-5 bg-paper-soft">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <article key={f.title} className="bg-white border border-line rounded-[18px] p-4 flex flex-col shadow-[0_8px_24px_rgba(10,10,10,0.06)] hover:-translate-y-1.5 hover:shadow-card hover:border-line-2 transition-all">
                <div className="h-[220px] mb-[18px] rounded-xl overflow-hidden relative border border-line">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${f.img}')` }} aria-hidden="true" />
                  <span className="absolute top-3 left-3 bg-black/70 text-white font-mono text-[11px] px-2.5 py-1.5 rounded-full tracking-[0.08em] backdrop-blur-[6px] inline-flex items-center gap-1.5 border border-white/10"><Icon size={12} /> {f.num} • FASILITAS</span>
                </div>
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-lime font-semibold inline-flex items-center gap-1.5"><span className="w-[22px] h-0.5 bg-current opacity-50 inline-block" /><Icon size={12} /> {f.num}</span>
                <h2 className="font-display font-extrabold text-xl tracking-[-0.02em] mt-2.5 mb-2 leading-[1.1]">{f.title}</h2>
                <p className="text-muted leading-[1.75] text-[15px] m-0">{f.text}</p>
              </article>
            );
          })}
        </section>
        <section className="bg-ink text-white py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_0%,rgba(217,255,63,0.12)_0%,transparent_60%),radial-gradient(ellipse_at_90%_100%,rgba(255,255,255,0.06)_0%,transparent_50%)]" aria-hidden="true" />
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime flex items-center gap-2.5 mb-3.5 font-medium relative"><Eye size={12} /> LIHAT LANGSUNG</p>
          <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance text-white relative">
            DATANG DAN
            <br />
            <em className="font-bold text-muted-3 not-italic">RASAKAN.</em>
          </h2>
          <p className="text-[#9A9A9A] max-w-[520px] leading-[1.7] mt-3 relative">Foto cuma sebagian cerita. Cara terbaik nilai gym adalah coba 1 sesi dan rasakan vibe-nya.</p>
          <a className="mt-[22px] bg-ink text-white px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-lime hover:text-ink hover:border-lime hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98] transition-all relative bg-white text-ink border-white hover:bg-lime hover:border-lime" href={wa} target="_blank" rel="noreferrer">
            <Clock size={16} /> Tanya lokasi & jam ramai <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}

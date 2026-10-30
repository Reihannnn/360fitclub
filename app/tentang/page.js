import SiteNav, { InnerFooter, InnerHero, wa } from "../../components/SiteNav";
import {
  Star,
  MapPin,
  Heart,
  Users,
  Zap,
  ArrowUpRight,
  Phone,
  Quote,
  Sparkles,
  Repeat2,
} from "lucide-react";

export const metadata = {
  title: "Tentang 360FITCLUB | Gym Tambun Selatan Bekasi",
  description:
    "Kenali 360FITCLUB, pusat kebugaran di Tridaya Sakti Tambun Selatan, Kabupaten Bekasi dengan suasana nyaman dan komunitas suportif.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white text-ink">
        <InnerHero
          eyebrow="TENTANG 360FITCLUB"
          title={
            <>
              BUKAN CUMA
              <br />
              <em className="font-bold text-muted-2 not-italic">LATIHAN.</em>
            </>
          }
          description="Tempat untuk bergerak, bertumbuh, dan menjadi versi terbaik dirimu di Tambun Selatan, Bekasi."
        />
        <section className="py-[60px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-10 grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-start bg-white">
          <div className="h-[420px] rounded-[18px] overflow-hidden relative bg-[#F2F2F2] border border-line">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=900&auto=format&fit=crop')",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 px-3.5 py-2.5 rounded-full font-mono text-[11px] tracking-[0.08em] font-bold border border-line inline-flex items-center gap-1.5">
              <Heart size={12} /> EST. 360FITCLUB • TAMBUN
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
              <Sparkles size={12} /> IDENTITAS KAMI
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-[clamp(28px,4vw,44px)] max-[800px]:text-[32px] m-0 text-balance">
              MERASA KUAT.
              <br />
              <em className="font-bold text-muted-3 not-italic">
                MERASA DI RUMAH.
              </em>
            </h2>
            <p className="text-muted leading-[1.75] text-base max-w-[60ch] mt-4">
              360FITCLUB adalah pusat kebugaran yang bikin olahraga terasa dekat
              dan menyenangkan. Kami percaya fitness tidak harus sendirian —
              kemajuan datang dari konsistensi dan lingkungan yang mendukung.
            </p>
            <p className="text-muted leading-[1.75] text-base max-w-[60ch] mt-3.5">
              Dengan area gym yang lengkap, studio kelas ber-AC, dan 5 program
              pilihan (Gym, Zumba, Senam, Muaythai, Poundfit), kami menyambut
              pemula hingga member berpengalaman untuk bertumbuh bersama.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="flex gap-3 items-start p-4 bg-paper-soft border border-line rounded-[14px]">
                <span className="w-9 h-9 rounded-[10px] bg-ink text-yellow-500 grid place-items-center shrink-0">
                  <Star size={16} fill="currentColor" />
                </span>
                <div>
                  <strong className="text-sm font-bold tracking-[-0.02em] block mb-1">
                    4.9 / 5 Rating
                  </strong>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    19 ulasan di Google Maps
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 bg-paper-soft border border-line rounded-[14px]">
                <span className="w-9 h-9 rounded-[10px] bg-ink text-lime grid place-items-center shrink-0">
                  <MapPin size={16} />
                </span>
                <div>
                  <strong className="text-sm font-bold tracking-[-0.02em] block mb-1">
                    Tambun Selatan., Kab. Bekasi
                  </strong>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    Tridaya Sakti, Jl. KH. Mas'ud No.153
                  </span>
                </div>
              </div>
            </div>
            {/* <p className="mt-[18px] text-sm text-muted-2 leading-[1.6] bg-paper-soft border border-line rounded-xl p-3 flex gap-2.5">
              <Quote size={16} className="shrink-0 mt-0.5 text-ink" />
              <span>
                <strong className="text-ink">
                  “Enak banget tempatnya, bersih, alat lengkap. Feels like
                  home.”
                </strong>
                <br />— Adellia, member review Google Maps
              </span>
            </p> */}
            <a
              className="mt-5 bg-ink text-white px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-lime hover:text-ink hover:border-lime hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98] transition-all"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={14} /> Tanya lebih lanjut <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section className="bg-ink text-white py-[60px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-10 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_0%,rgba(217,255,63,0.12)_0%,transparent_60%),radial-gradient(ellipse_at_90%_100%,rgba(255,255,255,0.06)_0%,transparent_50%)]"
            aria-hidden="true"
          />
          <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] items-center relative">
            <div>
              {/* <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime flex items-center gap-2.5 mb-3.5 font-medium"><Zap size={12} /> NILAI KAMI</p> */}
              <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-[clamp(28px,4vw,44px)] m-0 text-balance text-white">
                KENAPA MEMBER
                <br />
                <em className="font-bold text-muted-3 not-italic">
                  BETAH DI SINI.
                </em>
              </h2>
            </div>
            {/* <p className="leading-[1.75] text-[#9A9A9A] text-base max-w-[420px] m-0">
              Bukan soal alat paling mahal — tapi soal tempat yang bikin kamu
              mau balik lagi besok.
            </p> */}
          </div>
          <div className="grid grid-cols-3 max-[800px]:grid-cols-1 gap-3.5 mt-8 relative">
            {[
              [
                "KONSISTEN",
                "Rutinitas yang gampang dijalani, bukan yang bikin kapok di minggu pertama.",
                <Repeat2 key="c" size={18} />,
              ],
              [
                "KOMUNITAS",
                "Latihan bareng, saling dukung. Energi kelas bikin kamu push 1 rep lagi.",
                <Users key="k" size={18} />,
              ],
              [
                "NYAMAN",
                "Bersih, terawat, dan ramah. Pemula langsung ngerasa diterima.",
                <Heart key="n" size={18} />,
              ],
            ].map(([t, d, icon]) => (
              <div
                key={t}
                className="bg-[#1E1E1E] border border-line-dark rounded-2xl p-[22px]"
              >
                <div className="w-9 h-9 rounded-[10px] bg-lime text-ink grid place-items-center mb-3.5">
                  {icon}
                </div>
                <strong className="font-display font-extrabold text-sm tracking-[-0.02em]">
                  {t}
                </strong>
                <p className="text-[#9A9A9A] text-sm leading-[1.6] mt-2">{d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}

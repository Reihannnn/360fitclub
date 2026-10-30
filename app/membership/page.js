import SiteNav, { InnerFooter, InnerHero, wa } from "../../components/SiteNav";
import {
  Phone,
  Check,
  Clock,
  Dumbbell,
  Building2,
  ArrowUpRight,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Membership Gym Tambun Bekasi | 360FITCLUB",
  description:
    "Tanyakan harga membership gym, kelas, personal trainer, dan paket latihan terbaru 360FITCLUB melalui WhatsApp.",
  path: "/membership",
});

export default function MembershipPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white text-ink">
        <InnerHero
          eyebrow="MEMBERSHIP 360FITCLUB"
          title={
            <>
              MULAI DARI
              <br />
              <em className="font-bold text-muted-2 not-italic">DIRIMU.</em>
            </>
          }
          description="Pilih langkah pertama untuk rutinitas yang lebih aktif. Kami bantu pilihkan paket yang paling pas — tanpa maksa, tanpa ribet."
        />
        <section className="py-[60px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-10 grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-start bg-white">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
              <BadgeCheck size={12} /> PAKET LATIHAN
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-[clamp(28px,4vw,44px)] max-[800px]:text-[32px] m-0 text-balance">
              HARGA
              <br />
              <em className="font-bold text-muted-3 not-italic">TERBARU.</em>
            </h2>
            <p className="text-muted leading-[1.75] text-base max-w-[60ch] mt-4">
              Harga membership, jadwal kelas, dan personal trainer update
              berkala. Daripada bingung lihat pricelist lama,{" "}
              <strong className="text-ink font-semibold">
                mending chat langsung
              </strong>{" "}
              — kami kasih info paling update plus rekomendasi sesuai tujuanmu.
            </p>
            <ul className="list-none p-0 grid gap-2.5 mt-[18px]">
              {[
                "Konsultasi gratis sebelum daftar",
                "Rekomendasi paket sesuai tujuan & budget",
                "Info jadwal kelas terbaru",
                "Tanya slot studio sewa non-member",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2.5 items-center text-sm font-medium text-ink bg-paper-soft border border-line rounded-xl p-2.5"
                >
                  <span className="w-[22px] h-[22px] rounded-full bg-lime grid place-items-center text-ink shrink-0">
                    <Check size={12} />
                  </span>{" "}
                  {t}
                </li>
              ))}
            </ul>
            <a
              className="mt-5 bg-ink text-white px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-lime hover:text-ink hover:border-lime hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98] transition-all"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={16} /> Tanya harga via WhatsApp{" "}
              <ArrowUpRight size={16} />
            </a>
            <p className="text-[13px] text-muted-2 mt-3 leading-[1.6] flex gap-1.5 items-center">
              <MessageCircle size={12} /> Respon cepat • Bisa tanya dulu, daftar
              belakangan juga oke.
            </p>
          </div>
          <div className="bg-lime text-ink p-7 rounded-[24px] min-h-[380px] flex flex-col relative overflow-hidden border-2 border-ink shadow-lime">
            <div
              className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full bg-black/5"
              aria-hidden="true"
            />
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase font-bold text-ink m-0 opacity-70 inline-flex items-center gap-1.5">
              <Phone size={14} /> HUBUNGI KAMI
            </p>
            <strong className="block font-display font-black text-[44px] leading-[0.9] tracking-[-0.04em] my-5">
              0877
              <br />
              8926
              <br />
              6205
            </strong>
            <span className="font-mono text-[13px] tracking-[0.04em] uppercase text-ink opacity-60 font-medium">
              untuk info membership & promo
            </span>
            <div className="mt-auto pt-4 border-t-2 border-black/10 font-mono text-[13px] tracking-[0.06em] font-bold flex items-center gap-1.5">
              <Phone size={14} /> CHAT WHATSAPP • BALAS CEPAT
            </div>
            <p className="text-xs text-ink opacity-60 mt-3 leading-[1.5] bg-white/60 p-2.5 rounded-[10px] border border-black/5 flex gap-2">
              <MessageCircle size={14} className="shrink-0 mt-0.5" /> Ketuk
              tombol di atas — langsung buka chat WA tanpa save nomor.
            </p>
          </div>
        </section>

        <section className="py-12 px-[5vw] max-[800px]:px-[4vw] bg-paper-soft border-t border-line grid grid-cols-3 max-[800px]:grid-cols-1 gap-3.5">
          {[
            [
              "Jam operasional",
              "07.00 - 22.00 • Latihan sore-malam tetap kebagian. Cocok buat pulang kerja.",
              Clock,
            ],
            [
              "PROGRAM",
              "Gym • Zumba • Senam • Muaythai • Poundfit",
              Dumbbell,
            ],
            [
              "STUDIO SEWA",
              "Non-member bisa sewa per jam. Cocok komunitas & event.",
              Building2,
            ],
          ].map(([h, d, Icon]) => (
            <div
              key={h}
              className="bg-white border border-line rounded-2xl p-[18px]"
            >
              <strong className="font-mono text-xs tracking-[0.08em] text-ink inline-flex items-center gap-1.5">
                <Icon size={14} /> {h}
              </strong>
              <p className="text-sm text-muted leading-[1.6] mt-2">{d}</p>
            </div>
          ))}
        </section>
      </main>
      <InnerFooter />
    </>
  );
}

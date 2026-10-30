import SiteNav, { InnerFooter, InnerHero, wa } from "../../components/SiteNav";
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Navigation,
} from "lucide-react";

const maps =
  "https://www.google.com/maps/search/?api=1&query=360FITCLUB%2C+Jl.+KH.+Mas%27ud+No.153%2C+Tridaya+Sakti%2C+Bekasi";
const mapsEmbed =
  "https://maps.google.com/maps?q=Jl.%20KH.%20Mas%27ud%20No.153%20Tridaya%20Sakti%20Tambun%20Selatan%20Bekasi&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const metadata = {
  title: "Lokasi 360FITCLUB | Gym Tridaya Sakti Tambun Bekasi",
  description:
    "Temukan lokasi 360FITCLUB di Jl. KH. Mas'ud No.153, Tridaya Sakti, Tambun Selatan, Kabupaten Bekasi. Klik peta untuk navigasi.",
};

export default function LocationPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white text-ink">
        <InnerHero
          eyebrow="LOKASI 360FITCLUB"
          title={
            <>
              TEMUKAN
              <br />
              <em className="font-bold text-muted-2 not-italic">KAMI.</em>
            </>
          }
          description="Gym dan pusat kebugaran 360FITCLUB berada di Tridaya Sakti, Tambun Selatan, Kabupaten Bekasi — 5 menit dari pusat Tambun."
        />
        <section className="py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-center bg-white pt-10">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
              <MapPin size={12} /> ALAMAT LENGKAP
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance">
              360FITCLUB
              <br />
              <em className="font-bold text-muted-3 not-italic">TAMBUN.</em>
            </h2>
            <p className="flex gap-2 items-start leading-[1.7] text-muted text-base max-w-[520px] mt-4">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>
                Jl. KH. Mas&apos;ud No.153, RT.003/RW.04,
                <br />
                Tridaya Sakti, Tambun Selatan,
                <br />
                Kabupaten Bekasi, Jawa Barat 17518
              </span>
            </p>
            <p className="flex gap-2 items-center leading-[1.7] text-ink text-base mt-3">
              <Phone size={16} className="shrink-0" />
              <span>
                <b className="font-bold">Telepon / WhatsApp</b>
                <br />
                0877-8926-6205
              </span>
            </p>
            <p className="text-sm text-muted-2 leading-[1.6] flex flex-col gap-1 mt-3">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} /> <b className="text-ink">Plus Code:</b>{" "}
                Q32H+X8 Tridaya Sakti
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} /> <b className="text-ink">Jam:</b> Buka s/d
                22.00 • Konfirmasi via WA
              </span>
            </p>
            <a
              className="mt-4 bg-white text-ink px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-ink hover:text-white transition-all"
              href={maps}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation size={14} /> Buka di Google Maps{" "}
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="relative h-[420px] max-[800px]:h-[360px] rounded-[24px] overflow-hidden border border-line bg-[#E9E5D9] shadow-[0_8px_24px_rgba(10,10,10,0.06)]">
            <iframe
              className="absolute inset-0 w-full h-full border-0 block"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta 360FITCLUB"
              allowFullScreen
            />
            <a
              className="absolute inset-0 z-10 block cursor-pointer"
              href={maps}
              target="_blank"
              rel="noreferrer"
              aria-label="Buka di Google Maps"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-[10px] rounded-[14px] p-3.5 flex items-center justify-between gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-black/5 z-10 text-left">
              <div>
                <strong className="font-display font-extrabold text-[13px] tracking-[-0.02em] text-ink leading-[1.2] flex items-center gap-1.5">
                  <MapPin size={14} /> Ketuk peta untuk navigasi
                </strong>
                <span className="font-mono text-[11px] tracking-[0.04em] text-muted block mt-0.5">
                  360FITCLUB — langsung buka Google Maps
                </span>
              </div>
              <span className="w-9 h-9 rounded-full bg-ink text-lime grid place-items-center shrink-0">
                <ArrowUpRight size={16} />
              </span>
            </div>
            <div
              className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime border-[3px] border-ink rounded-full w-[42px] h-[42px] grid place-items-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] z-10 animate-[bounce_2s_infinite]"
              aria-hidden="true"
            >
              <MapPin size={18} fill="#D9FF3F" color="#0A0A0A" />
            </div>
          </div>
        </section>

        <section className="bg-ink text-white py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_0%,rgba(217,255,63,0.12)_0%,transparent_60%),radial-gradient(ellipse_at_90%_100%,rgba(255,255,255,0.06)_0%,transparent_50%)]"
            aria-hidden="true"
          />
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime flex items-center gap-2.5 mb-3.5 font-medium relative">
            <MessageCircle size={12} /> BUTUH ARAHAN?
          </p>
          <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance text-white relative">
            CHAT
            <br />
            <em className="font-bold text-muted-3 not-italic">KAMI.</em>
          </h2>
          <p className="text-[#9A9A9A] max-w-[520px] leading-[1.7] mt-3 relative">
            Bingung rute atau mau cek promo hari ini? Tim kami balas cepat via
            WhatsApp.
          </p>
          <a
            className="mt-[22px] bg-ink text-white px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap bg-white text-ink hover:bg-lime hover:text-ink hover:border-lime transition-all relative"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={16} /> WhatsApp 360FITCLUB <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}

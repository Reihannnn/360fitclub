import Link from "next/link";
import SiteNav, { InnerFooter } from "../components/SiteNav";
import { SearchX, Home, ArrowLeft, Dumbbell, MapPin, Phone, ArrowUpRight, Compass } from "lucide-react";

export const metadata = {
  title: "404 — Halaman Tidak Ditemukan | 360FITCLUB",
  description: "Halaman yang kamu cari tidak ditemukan. Kembali ke beranda 360FITCLUB Tambun Bekasi.",
};

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="min-h-[calc(100vh-72px-140px)] grid place-items-center py-12 px-[5vw] max-[800px]:px-[4vw] bg-gradient-to-b from-white to-[#FFFEF7] relative overflow-hidden">
        <div className="absolute inset-auto -right-[15%] -bottom-[25%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(217,255,63,0.14)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
        <div className="max-w-[780px] w-full text-center relative z-10">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium justify-center">
            <SearchX size={14} /> 404 / HALAMAN TIDAK DITEMUKAN
          </p>

          <div className="flex items-center justify-center gap-2 font-black text-[clamp(96px,22vw,180px)] max-[800px]:text-[clamp(84px,24vw,140px)] tracking-[-0.08em] leading-[0.85] my-2.5 text-ink font-display" aria-hidden="true">
            <span>4</span>
            <span className="relative grid place-items-center w-[clamp(80px,18vw,150px)] h-[clamp(80px,18vw,150px)] max-[800px]:w-[clamp(72px,20vw,110px)] max-[800px]:h-[clamp(72px,20vw,110px)] border-[4px] border-ink rounded-full bg-lime rotate-[-3deg]">
              0<span className="absolute w-3.5 h-3.5 bg-ink rounded-full bottom-[22%] right-[22%] shadow-[0_0_0_6px_#FFFFFF]" />
            </span>
            <span>4</span>
          </div>

          <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.9] text-[clamp(36px,6vw,64px)] max-[800px]:text-[32px] m-0 text-balance mt-1.5">
            NYASAR YA?
            <br />
            <em className="font-bold text-muted-3 not-italic">AYO BALIK.</em>
          </h1>

          <p className="text-[17px] leading-[1.75] text-muted max-w-[560px] font-normal mx-auto mt-[18px] text-center">
            Halaman yang kamu cari nggak ada atau sudah dipindah. <strong className="text-ink font-semibold">Mungkin salah ketik URL</strong> — balik ke beranda atau cek program & lokasi kami.
          </p>

          <div className="flex gap-3.5 justify-center flex-wrap mt-7">
            <Link href="/" className="bg-ink text-white px-6 py-4 font-mono text-xs tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-lime hover:text-ink hover:border-lime hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98] transition-all">
              <Home size={16} /> Kembali ke Beranda <ArrowUpRight size={16} />
            </Link>
            <Link href="/program" className="bg-white text-ink px-6 py-4 font-mono text-xs tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-ink hover:text-white transition-all">
              <Dumbbell size={16} /> Lihat Program <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-3 max-[800px]:grid-cols-1 gap-3 mt-8 text-left">
            <Link href="/lokasi" className="flex items-center gap-3 p-4 bg-white border border-line rounded-2xl shadow-[0_8px_24px_rgba(10,10,10,0.06)] hover:-translate-y-1 hover:shadow-card hover:border-line-2 transition-all">
              <span className="w-10 h-10 rounded-[10px] bg-paper-soft border border-line grid place-items-center shrink-0 text-ink"><MapPin size={18} /></span>
              <span>
                <strong className="block font-display font-extrabold text-[13px] tracking-[-0.02em] leading-[1.2]">Lokasi 360FITCLUB</strong>
                <small className="block font-inter text-xs text-muted leading-[1.4] mt-0.5">Jl. KH. Mas&apos;ud No.153 • Q32H+X8</small>
              </span>
              <ArrowUpRight size={16} className="ml-auto shrink-0 text-muted-2" />
            </Link>

            <Link href="/fasilitas" className="flex items-center gap-3 p-4 bg-white border border-line rounded-2xl shadow-[0_8px_24px_rgba(10,10,10,0.06)] hover:-translate-y-1 hover:shadow-card hover:border-line-2 transition-all">
              <span className="w-10 h-10 rounded-[10px] bg-lime border border-lime-strong grid place-items-center shrink-0 text-ink"><Compass size={18} /></span>
              <span>
                <strong className="block font-display font-extrabold text-[13px] tracking-[-0.02em] leading-[1.2]">Fasilitas & Studio</strong>
                <small className="block font-inter text-xs text-muted leading-[1.4] mt-0.5">Gym area, studio kelas ber-AC & studio sewa</small>
              </span>
              <ArrowUpRight size={16} className="ml-auto shrink-0 text-muted-2" />
            </Link>

            <a href="https://wa.me/6287789266205?text=Halo%20360FITCLUB%2C%20saya%20nyasar%20di%20halaman%20404%2C%20minta%20bantuan." target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white border border-line rounded-2xl shadow-[0_8px_24px_rgba(10,10,10,0.06)] hover:-translate-y-1 hover:shadow-card hover:border-line-2 transition-all">
              <span className="w-10 h-10 rounded-[10px] bg-ink border border-ink grid place-items-center shrink-0 text-lime"><Phone size={18} /></span>
              <span>
                <strong className="block font-display font-extrabold text-[13px] tracking-[-0.02em] leading-[1.2]">Butuh bantuan?</strong>
                <small className="block font-inter text-xs text-muted leading-[1.4] mt-0.5">Chat WhatsApp — balas cepat s/d 22.00</small>
              </span>
              <ArrowUpRight size={16} className="ml-auto shrink-0 text-muted-2" />
            </a>
          </div>

          <p className="mt-7 font-mono text-xs text-muted-2 text-center inline-flex items-center gap-1.5 justify-center w-full">
            <ArrowLeft size={12} /> Atau pakai navigasi di atas untuk jelajahi 360FITCLUB
          </p>
        </div>
      </main>
      <InnerFooter />
    </>
  );
}

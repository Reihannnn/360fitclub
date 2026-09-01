'use client'

import { useState } from 'react'
import { Phone, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Instagram } from './BrandIcons'

const wa = 'https://wa.me/6287789266205?text=Halo%20360FITCLUB%2C%20saya%20ingin%20tanya%20membership%20dan%20jadwal.'
const links = [['Tentang', '/tentang'], ['Fasilitas', '/fasilitas'], ['Program', '/program'], ['Membership', '/membership'], ['Lokasi', '/lokasi']]

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="h-[72px] max-[800px]:h-16 px-[5vw] max-[800px]:px-[4vw] flex items-center justify-between border-b border-line sticky top-0 bg-white/90 backdrop-blur-[12px] backdrop-saturate-[180%] z-40 gap-8">
      <a className="flex items-center gap-3 font-black tracking-[-0.04em] leading-none" href="/" aria-label="360FITCLUB beranda" onClick={() => setOpen(false)}>
        <img src="/logo.jpg" alt="360FITCLUB logo" className="w-11 h-11 max-[800px]:w-10 max-[800px]:h-10 object-contain bg-white border border-line rounded-lg p-1" width={44} height={44} />
        <span className="text-[19px] font-extrabold tracking-[-0.05em] flex items-baseline gap-[1px] max-[800px]:text-[17px]"><span className="text-ink">360</span><span className="font-bold text-muted-2 tracking-[-0.03em]">FITCLUB</span><span className="text-lime-strong font-black">.</span></span>
      </a>

      <div className="flex gap-7 items-center max-[800px]:hidden">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="font-mono text-xs tracking-[0.06em] uppercase text-muted font-medium relative py-1.5 group hover:text-ink transition-colors">
            {label}
            <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-lime-strong transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <a className="bg-ink text-white px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-lime hover:text-ink hover:border-lime transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(10,10,10,0.08)] active:translate-y-0 active:scale-[0.98] max-[800px]:hidden" href={wa} target="_blank" rel="noreferrer">
        <Phone size={14} /> Mulai latihan <ArrowUpRight size={14} className="text-lime group-hover:text-ink transition-colors" />
      </a>

      <button
        className={`hidden max-[800px]:flex bg-white border border-line size-11 rounded-[10px] items-center justify-center flex-col gap-[5px] relative z-20 p-2 cursor-pointer hover:opacity-70 transition-opacity ${open ? 'is-open' : ''}`}
        type="button"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(value => !value)}
      >
        <span className={`block w-5 h-0.5 bg-ink rounded-sm transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block w-5 h-0.5 bg-ink rounded-sm transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-ink rounded-sm transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      <div id="mobile-navigation" className={`absolute top-[72px] max-[800px]:top-16 left-0 right-0 flex-col bg-white border-b border-line shadow-[0_16px_30px_rgba(0,0,0,0.08)] z-30 overflow-hidden ${open ? 'flex' : 'hidden'}`} aria-hidden={!open}>
        {links.map(([label, href]) => (
          <a key={href} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="px-[6vw] py-[18px] border-t border-line font-mono text-[13px] tracking-[0.06em] uppercase text-ink flex justify-between items-center hover:bg-[#F6FFDA] transition-colors">
            {label} <ArrowUpRight size={14} />
          </a>
        ))}
        <a className="px-[6vw] py-[18px] border-t border-lime-strong bg-lime text-ink font-bold flex justify-between items-center gap-2" href={wa} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
          <span className="inline-flex items-center gap-2"><MessageCircle size={16} /> Hubungi untuk konsultasi</span> <ArrowUpRight size={14} />
        </a>
      </div>
    </nav>
  )
}

export { wa }

export function InnerHero({ eyebrow, title, description }) {
  return (
    <header className="py-[70px] pb-12 px-[5vw] border-b border-line max-w-[1100px] mx-auto w-full bg-gradient-to-b from-white to-paper-soft max-[800px]:py-10 max-[800px]:px-[4vw]">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
        <span className="inline-block w-2 h-2 rounded-full bg-lime-strong shrink-0 shadow-[0_0_0_6px_#F6FFDA]" /> {eyebrow}
      </p>
      <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.88] text-[clamp(44px,7vw,84px)] m-0 text-balance max-[800px]:text-[42px]">{title}</h1>
      <p className="text-[17px] leading-[1.75] text-muted max-w-[620px] mt-4 font-normal">{description}</p>
    </header>
  )
}

export function InnerFooter() {
  return (
    <footer className="border-t border-line py-8 px-[5vw] bg-paper-soft grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-center max-[800px]:gap-4 max-[800px]:text-left">
      <a className="flex items-center gap-3 font-black tracking-[-0.04em] leading-none" href="/" aria-label="360FITCLUB beranda">
        <img src="/logo.jpg" alt="360FITCLUB" className="w-10 h-10 object-contain bg-white border border-line rounded-lg p-1" width={40} height={40} />
        <span className="text-lg font-extrabold tracking-[-0.05em] flex items-baseline gap-[1px]"><span className="text-ink">360</span><span className="font-bold text-muted-2">FITCLUB</span><span className="text-lime-strong font-black">.</span></span>
      </a>
      <p className="font-mono text-xs tracking-[0.04em] text-muted-2 m-0 font-medium">Gerak lebih. Hidup lebih. — Tambun, Bekasi.</p>
      <div className="flex justify-end max-[800px]:justify-start gap-5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold flex-wrap max-[800px]:col-span-1 lg:col-span-1 lg:justify-end">
        <a href="https://www.instagram.com/360fitclub.id/" target="_blank" rel="noreferrer" className="px-3.5 py-2 border border-line rounded-full bg-white inline-flex items-center gap-1.5 hover:bg-ink hover:text-white hover:border-ink transition-colors">
          <Instagram size={14} /> Instagram <ArrowUpRight size={12} />
        </a>
        <a href={wa} target="_blank" rel="noreferrer" className="px-3.5 py-2 border border-line rounded-full bg-white inline-flex items-center gap-1.5 hover:bg-ink hover:text-white hover:border-ink transition-colors">
          <Phone size={14} /> WhatsApp <ArrowUpRight size={12} />
        </a>
      </div>
      <small className="col-span-full mt-2 pt-4 border-t border-line text-center text-muted-2 font-mono text-[11px] tracking-[0.04em] max-[800px]:text-left max-[800px]:col-span-1">© 2025 360FITCLUB. All rights reserved. • Jl. KH. Mas&apos;ud No.153, Tridaya Sakti, Tambun Selatan</small>
    </footer>
  )
}

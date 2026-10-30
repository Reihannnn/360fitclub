"use client";

import {
  Clock,
  Star,
  Dumbbell,
  Users,
  Sparkles,
  ShieldCheck,
  ArrowDown,
  Check,
  CalendarDays,
  Building2,
  Award,
  MessageCircle,
  Zap,
  Phone,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import SiteNav, { InnerFooter } from "../components/SiteNav";
import FacilityCarousel from "../components/FacilityCarousel";

const wa =
  "https://wa.me/6287789266205?text=Halo%20360FITCLUB%2C%20saya%20ingin%20tanya%20membership%20dan%20jadwal.";
const maps =
  "https://www.google.com/maps/search/?api=1&query=360FITCLUB%2C+Jl.+KH.+Mas%27ud+No.153%2C+Tridaya+Sakti%2C+Bekasi";
const mapsEmbed =
  "https://maps.google.com/maps?q=Jl.%20KH.%20Mas%27ud%20No.153%20Tridaya%20Sakti%20Tambun%20Selatan%20Bekasi&t=&z=16&ie=UTF8&iwloc=&output=embed";

const faqs = [
  [
    "Di mana lokasi 360FITCLUB?",
    "360FITCLUB berlokasi di Jl. KH. Mas'ud No.153, RT.003/RW.04, Tridaya Sakti, Kecamatan Tambun Selatan, Kabupaten Bekasi, Jawa Barat 17518.",
  ],
  [
    "Program latihan apa saja yang tersedia?",
    "Kami menyediakan program Gym & Fitness, Zumba, Senam, Muaythai, dan Poundfit. Jadwal kelas dapat berubah, jadi silakan hubungi kami melalui WhatsApp untuk informasi terbaru.",
  ],
  [
    "Apakah pemula boleh berlatih di 360FITCLUB?",
    "Tentu. 360FITCLUB terbuka untuk pemula maupun yang sudah berpengalaman. Tim kami dapat membantu mengarahkan kamu untuk memulai latihan dengan nyaman.",
  ],
  [
    "Apakah tersedia personal trainer?",
    "Untuk informasi ketersediaan personal trainer, paket latihan, dan pendampingan, silakan hubungi tim 360FITCLUB melalui WhatsApp.",
  ],
  [
    "Berapa harga membership 360FITCLUB?",
    "Harga membership dapat berubah sesuai paket dan periode yang tersedia. Hubungi kami di 0877-8926-6205 untuk mendapatkan harga terbaru.",
  ],
  [
    "Apakah studio bisa disewa oleh non-member?",
    "Berdasarkan informasi dari pemilik di Google Maps, studio dapat disewa oleh non-member. Silakan konfirmasi ketersediaan dan tarif melalui WhatsApp.",
  ],
];

const programs = [
  [
    "01",
    "GYM & FITNESS",
    "Latihan mandiri dengan alat lengkap untuk membangun kekuatan dan kebugaran.",
  ],
  [
    "02",
    "ZUMBA",
    "Kelas seru penuh energi untuk membakar kalori sambil menikmati musik dan gerakan.",
  ],
  [
    "03",
    "SENAM",
    "Gerak bersama yang ringan, aktif, dan menyenangkan untuk berbagai level kebugaran.",
  ],
  [
    "04",
    "MUAYTHAI",
    "Tingkatkan stamina, teknik, dan kepercayaan diri bersama program bela diri yang intens.",
  ],
  [
    "05",
    "POUNDFIT",
    "Cardio penuh ritme dengan pengalaman latihan yang fun dan menantang.",
  ],
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="bg-white text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteNav />

      {/* HERO */}
      <section
        className="min-h-[620px] py-14 px-[5vw] max-[800px]:px-[4vw] max-[800px]:pt-8 max-[800px]:pb-8 grid grid-cols-2 max-[1100px]:grid-cols-1 max-[1100px]:gap-8 gap-[4vw] items-center bg-gradient-to-b from-white to-[#FFFEF7] relative overflow-hidden"
        id="top"
      >
        <div
          className="absolute inset-auto -right-[10%] -bottom-[20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(217,255,63,0.18)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 min-w-0 max-[1100px]:order-2">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium flex-wrap">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-strong shrink-0 shadow-[0_0_0_6px_#F6FFDA]" />{" "}
            <MapPin size={12} className="inline" /> PUSAT KEBUGARAN • TAMBUN,
            BEKASI — <Clock size={12} className="inline" /> BUKA S/D 22.00
          </p>
          <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.88] text-[clamp(44px,7vw,84px)] max-[800px]:text-[42px] m-0 text-balance">
            <span className="sr-only">360FITCLUB gym di Tambun Bekasi. </span>
            GERAK{" "}
            <em className="font-bold text-[#B8B8B8] not-italic">LEBIH.</em>
            <br />
            HIDUP{" "}
            <em className="font-bold text-[#B8B8B8] not-italic">LEBIH.</em>
          </h1>
          <p className="text-[17px] leading-[1.75] text-muted max-w-[560px] mt-4 font-normal">
            Tempat untuk{" "}
            <strong className="text-ink font-semibold">
              bergerak, bertumbuh, dan jadi versi terbaik dirimu.
            </strong>{" "}
            Gym, studio kelas, dan komunitas yang bikin kamu betah konsisten.
          </p>
          <div className="flex gap-[18px] items-center mt-8 flex-wrap max-[480px]:flex-col max-[480px]:items-stretch">
            <a
              className="bg-ink text-white px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center justify-center gap-3.5 border border-ink rounded-xl leading-none cursor-pointer whitespace-nowrap hover:bg-lime hover:text-ink hover:border-lime hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98] transition-all"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={14} /> Tanya membership <ArrowUpRight size={16} />
            </a>
            <a
              className="font-mono text-[12px] bg-white border-2 px-4 rounded-xl tracking-[0.08em] uppercase font-semibold  border-[#D8D8D8] py-3.5 inline-flex items-center justify-center gap-2.5 text-ink hover:text-ink hover:border-black  transition-all"
              href="#programs"
            >
              Lihat program <ArrowDown size={14} />
            </a>
          </div>
          {/* <div className="flex items-center gap-4 mt-10 p-4 bg-white border border-line rounded-2xl max-w-[360px] shadow-[0_8px_24px_rgba(10,10,10,0.06)] max-[480px]:flex-col max-[480px]:items-start">
            <strong className="font-display font-extrabold text-[32px] tracking-[-0.04em] leading-none flex items-baseline gap-1 shrink-0">
              4.9{" "}
              <Star
                size={16}
                fill="#C8EE00"
                color="#C8EE00"
                className="inline"
              />
            </strong>
            <span className="font-mono text-xs text-muted leading-[1.5] tracking-[0.02em]">
              rating Google Maps
              <br />
              <b className="text-ink font-bold inline-flex items-center gap-1">
                <Award size={12} /> 19 ulasan • Q32H+X8
              </b>
            </span>
            <span className="ml-auto text-right text-[11px] text-[#666] max-[480px]:ml-0 max-[480px]:text-left">
              <b className="text-ink inline-flex items-center gap-1">
                <MapPin size={12} /> Jl. KH. Mas&apos;ud No.153
              </b>
              <br />
              Tridaya Sakti, Tambun Selatan
            </span>
          </div> */}
        </div>

        <div className="h-[520px] max-[1100px]:h-[440px] max-[800px]:h-[380px] max-[1100px]:order-1 relative rounded-[24px] overflow-hidden bg-[#0A0A0A] border border-[#222] shadow-card flex items-stretch">
          <div
            className="flex-1 relative flex flex-col justify-end p-6 bg-[#111] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop')",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(-45deg,transparent_0_12px,rgba(255,255,255,0.6)_12px_13px)]"
              aria-hidden="true"
            />
            <div className="absolute top-[18px] left-[18px] z-10 bg-white/95 backdrop-blur-[8px] border border-black/5 rounded-full px-3.5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase text-ink flex items-center gap-2 font-semibold shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
              <Clock size={12} /> BUKA HARI INI • RAMAI DI JAM 17–20
            </div>
            <div className="relative z-10 grid grid-cols-3 gap-2.5 w-full max-[480px]:grid-cols-1">
              <div className="bg-white/95 backdrop-blur-[10px] rounded-[14px] p-3.5 text-center border border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                <strong className="flex items-center gap-1.5 justify-center w-full font-display font-extrabold text-xl tracking-[-0.03em] leading-none">
                  <Dumbbell size={16} /> 5
                </strong>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted font-medium mt-1 block">
                  <Zap size={10} className="inline" /> Program
                </span>
                <em className="font-inter text-[10px] tracking-normal normal-case text-muted-2 font-normal not-italic block">
                  Gym • Zumba • Senam
                </em>
              </div>
              <div className="bg-white/95 backdrop-blur-[10px] rounded-[14px] p-3.5 text-center border border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                <strong className="flex items-center gap-1.5 justify-center w-full font-display font-extrabold text-xl tracking-[-0.03em] leading-none">
                  <Star size={16} fill="#111" /> 4.9★
                </strong>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted font-medium mt-1 block">
                  Rating
                </span>
                <em className="font-inter text-[10px] tracking-normal normal-case text-muted-2 font-normal not-italic block">
                  19 ulasan Google
                </em>
              </div>
              <div className="bg-white/95 backdrop-blur-[10px] rounded-[14px] p-3.5 text-center border border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                <strong className="flex items-center gap-1.5 justify-center w-full font-display font-extrabold text-xl tracking-[-0.03em] leading-none">
                  <Users size={16} /> Studio
                </strong>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted font-medium mt-1 block">
                  Sewa tersedia
                </span>
                <em className="font-inter text-[10px] tracking-normal normal-case text-muted-2 font-normal not-italic block">
                  Non-member bisa
                </em>
              </div>
            </div>
          </div>
          {/* <div className="absolute right-[18px] bottom-[18px] z-10 bg-lime rounded-full w-24 h-24 flex flex-col items-center justify-center text-center font-mono text-[10px] tracking-[0.1em] uppercase text-ink font-semibold rotate-[8deg] shadow-[0_8px_20px_rgba(0,0,0,0.15)] border-2 border-ink">
            EST.
            <br />
            <b className="font-display font-extrabold text-[28px] tracking-[-0.05em] leading-none my-0.5">
              360
            </b>
            FITCLUB
          </div> */}
        </div>
      </section>

      {/* INTRO */}
      <section
        className="py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 bg-white"
        id="about"
      >
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
          <Zap size={12} /> 01 / KENAPA 360FITCLUB
        </p>
        <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-start mt-7">
          <div>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance">
              BUKAN CUMA
              <br />
              <em className="font-bold text-[#B0B0B0] not-italic">LATIHAN.</em>
            </h2>
            <p className="text-[26px] max-[800px]:text-[21px] leading-[1.25] font-bold tracking-[-0.03em] text-ink mt-[18px] max-w-[520px]">
              Ini tentang merasa lebih kuat setiap hari — di tempat yang terasa
              seperti rumah.
            </p>
          </div>
          <div>
            <p className="leading-[1.75] text-muted text-base max-w-[540px] m-0">
              360FITCLUB adalah pusat kebugaran di Tridaya Sakti, Tambun
              Selatan, Bekasi. Kami bikin ruang latihan yang{" "}
              <strong className="text-ink font-semibold">
                bersih, nyaman, dan suportif
              </strong>{" "}
              — jadi pemula pun langsung nyambung.
            </p>
            <p className="mt-3.5 text-muted leading-[1.7] text-base max-w-[540px]">
              Dari gym mandiri sampai kelas bareng, semua dirancang biar kamu
              konsisten tanpa drama. Datang, gerak, pulang bawa progres.
            </p>
            <div className="mt-7 grid grid-cols-2 max-[800px]:grid-cols-1 gap-3.5">
              <div className="flex gap-3 items-start p-4 bg-paper-soft border border-line rounded-[14px]">
                <span className="w-9 h-9 rounded-[10px] bg-ink text-white grid place-items-center shrink-0">
                  <Dumbbell size={16} />
                </span>
                <div>
                  <strong className="text-sm font-bold tracking-[-0.02em] block mb-1">
                    Alat Lengkap
                  </strong>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    Gym & free weights untuk semua level.
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 bg-paper-soft border border-line rounded-[14px]">
                <span className="w-9 h-9 rounded-[10px] bg-ink text-white grid place-items-center shrink-0">
                  <Users size={16} />
                </span>
                <div>
                  <strong className="text-sm font-bold tracking-[-0.02em] block mb-1">
                    Studio Nyaman
                  </strong>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    Zumba, Senam, Poundfit & Muaythai.
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 bg-paper-soft border border-line rounded-[14px]">
                <span className="w-9 h-9 rounded-[10px] bg-ink text-white grid place-items-center shrink-0">
                  <Sparkles size={16} />
                </span>
                <div>
                  <strong className="text-sm font-bold tracking-[-0.02em] block mb-1">
                    Bersih & Terawat
                  </strong>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    “Feels like home” — kata member.
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 bg-paper-soft border border-line rounded-[14px]">
                <span className="w-9 h-9 rounded-[10px] bg-ink text-white grid place-items-center shrink-0">
                  <ShieldCheck size={16} />
                </span>
                <div>
                  <strong className="text-sm font-bold tracking-[-0.02em] block mb-1">
                    Ramah Pemula
                  </strong>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    Tim siap bantu arahan awal.
                  </span>
                </div>
              </div>
            </div>
            <a
              className="font-mono text-[11px] tracking-[0.08em] uppercase font-semibold border-b-2 border-[#D8D8D8] py-2.5 inline-flex items-center gap-2.5 text-ink hover:text-ink hover:border-lime-strong hover:pl-1.5 transition-all mt-[22px]"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Kenalan lebih dekat <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section
        className="bg-ink text-white py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 relative overflow-hidden"
        id="facilities"
      >
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_0%,rgba(217,255,63,0.12)_0%,transparent_60%),radial-gradient(ellipse_at_90%_100%,rgba(255,255,255,0.06)_0%,transparent_50%)]"
          aria-hidden="true"
        />
        <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-start relative">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime flex items-center gap-2.5 mb-3.5 font-medium">
              <Building2 size={12} /> 02 / AREA & FASILITAS
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance text-white">
              SEMUA YANG
              <br />
              <em className="font-bold text-[#B0B0B0] not-italic">
                KAMU BUTUHKAN.
              </em>
            </h2>
          </div>
          <p className="leading-[1.75] text-[#9A9A9A] text-base max-w-[420px] m-0">
            Ruang yang dirancang biar tiap sesi latihan lebih maksimal — tanpa
            ribet, tanpa antre panjang.
          </p>
        </div>
        <div className="grid grid-cols-[1.55fr_1fr_1fr] max-[1100px]:grid-cols-2 max-[800px]:grid-cols-1 gap-3.5 mt-12 relative">
          <div className="h-[380px] max-[800px]:h-[300px] relative rounded-[18px] overflow-hidden border border-line-dark bg-[#1A1A1A]">
            <div
              className="absolute inset-0 bg-[#222] bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop')",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-[18px] px-5 bg-gradient-to-t from-black/85 to-transparent font-mono text-[11px] tracking-[0.08em] uppercase text-white flex justify-between items-center font-semibold">
              <span className="inline-flex items-center gap-2">
                <Dumbbell size={14} /> GYM AREA • FREE WEIGHTS & MACHINES
              </span>{" "}
              <ArrowUpRight size={16} className="text-lime" />
            </div>
          </div>
          <div className="bg-[#1E1E1E] p-[26px] min-h-[220px] rounded-[18px] border border-line-dark flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-line-dark" />
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-lime font-semibold inline-flex items-center gap-2">
              <Dumbbell size={12} /> 01
            </span>
            <h3 className="mt-12 mb-2.5 font-display font-extrabold text-lg tracking-[-0.02em] leading-[1.1]">
              ALAT LENGKAP
            </h3>
            <p className="text-[#9A9A9A] leading-[1.6] text-sm m-0">
              Perlengkapan latihan untuk kekuatan, cardio, dan fungsional —
              tinggal pilih tujuanmu.
            </p>
          </div>
          <div className="bg-lime text-ink p-[26px] min-h-[220px] rounded-[18px] border border-lime-strong flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-ink" />
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink font-semibold inline-flex items-center gap-2">
              <Users size={12} /> 02
            </span>
            <h3 className="mt-12 mb-2.5 font-display font-extrabold text-lg tracking-[-0.02em] leading-[1.1] text-ink">
              STUDIO KELAS
            </h3>
            <p className="text-[#3A3A00] leading-[1.6] text-sm m-0">
              Ruang kedap & ber-AC untuk zumba, senam, poundfit, dan muaythai.
              Sewa harian tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* FACILITY CAROUSEL */}
      <FacilityCarousel />

      {/* PROGRAMS */}
      <section
        className="py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 bg-paper-soft border-y border-line"
        id="programs"
      >
        <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
              <CalendarDays size={12} /> 03 / PROGRAM
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance">
              PILIH CARA
              <br />
              <em className="font-bold text-muted-3 not-italic">BERGERAKMU.</em>
            </h2>
          </div>
          <a
            className="font-mono text-[11px] tracking-[0.08em] uppercase font-semibold border-b-2 border-[#D8D8D8] py-2.5 inline-flex items-center gap-2.5 text-ink hover:border-lime-strong hover:pl-1.5 transition-all max-[800px]:justify-start self-start max-[800px]:self-auto"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarDays size={14} /> Tanya jadwal kelas{" "}
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="mt-10 border border-line bg-white rounded-[18px] overflow-hidden shadow-[0_8px_24px_rgba(10,10,10,0.06)]">
          {programs.map(([n, title, text]) => (
            <a
              key={n}
              className="grid grid-cols-[72px_200px_1fr_36px] max-[800px]:grid-cols-[52px_1fr_32px] max-[800px]:p-4 gap-4 items-center p-6 border-b border-line last:border-0 hover:pl-3.5 hover:bg-lime-faint hover:border-lime transition-all group"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-mono text-xs tracking-[0.08em] text-muted-2 font-medium inline-flex items-center gap-1.5">
                <Dumbbell size={12} /> {n}
              </span>
              <h3 className="font-display font-extrabold text-base tracking-[-0.02em] leading-[1.2] m-0 max-[800px]:text-[15px]">
                {title}
              </h3>
              <p className="font-inter text-sm text-muted leading-[1.5] m-0 max-w-[520px] max-[800px]:hidden">
                {text}
              </p>
              <span className="w-9 h-9 rounded-full bg-paper-soft border border-line grid place-items-center text-sm transition-all group-hover:bg-ink group-hover:text-lime group-hover:border-ink group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="bg-ink text-white py-[70px] px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 grid grid-cols-[1.2fr_0.9fr] max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_0%_50%,rgba(217,255,63,0.1)_0%,transparent_50%)]"
          aria-hidden="true"
        />
        <div className="relative">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-lime flex items-center gap-2.5 mb-3.5 font-medium">
            <Award size={12} /> 04 / MEMBERSHIP
          </p>
          <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance text-white">
            SIAP MULAI
            <br />
            <em className="font-bold text-muted-3 not-italic">HARI INI?</em>
          </h2>
          <p className="text-[#9A9A9A] leading-[1.7] text-base max-w-[520px] mt-4 mb-7">
            Harga, jadwal kelas, dan personal trainer update tiap periode. Chat
            kami — kami bantu pilihkan paket paling pas buat tujuan dan budget
            kamu.
          </p>
          <a
            className="bg-ink text-white px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-lime hover:text-ink hover:border-lime hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98] transition-all border-white/20 hover:border-lime"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> Chat via WhatsApp{" "}
            <ArrowUpRight size={16} />
          </a>
          <p className="mt-3.5 text-[13px] text-[#9A9A9A] leading-[1.6] flex gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <Check size={12} color="#D9FF3F" /> Balas cepat
            </span>{" "}
            •{" "}
            <span className="inline-flex items-center gap-1">
              <Check size={12} color="#D9FF3F" /> Konsultasi gratis
            </span>{" "}
            •{" "}
            <span className="inline-flex items-center gap-1">
              <Check size={12} color="#D9FF3F" /> Bisa tanya dulu
            </span>
          </p>
        </div>
        <div className="bg-lime text-ink p-7 rounded-[24px] min-h-[300px] flex flex-col relative overflow-hidden border-2 border-ink shadow-lime">
          <div
            className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full bg-black/5"
            aria-hidden="true"
          />
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase font-bold text-ink m-0 opacity-70 inline-flex items-center gap-1.5">
            <Award size={14} /> MEMBERSHIP
          </p>
          <strong className="block font-display font-black text-[42px] leading-[0.9] tracking-[-0.04em] my-5">
            HUBUNGI
            <br />
            KAMI
          </strong>
          <span className="font-mono text-[13px] tracking-[0.04em] uppercase text-ink opacity-60 font-medium">
            untuk harga terbaru & promo bulan ini
          </span>
          <div className="mt-auto pt-4 border-t-2 border-black/10 font-mono text-[13px] tracking-[0.06em] font-bold flex items-center gap-2">
            <Phone size={14} /> 0877 8926 6205 • WA CHAT
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        className="py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-center bg-white"
        id="location"
      >
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
            <MapPin size={12} /> 05 / TEMUKAN KAMI
          </p>
          <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance mb-4">
            360FITCLUB
            <br />
            <em className="font-bold text-muted-3 not-italic">ADA DI SINI.</em>
          </h2>
          <p className="flex items-start gap-2 leading-[1.7] text-muted text-base max-w-[520px] mb-3.5">
            <MapPin size={16} className="mt-1 shrink-0 text-ink" />
            <span>
              Jl. KH. Mas&apos;ud No.153, RT.003/RW.04,
              <br />
              Tridaya Sakti, Tambun Selatan,
              <br />
              Kabupaten Bekasi, Jawa Barat 17518
            </span>
          </p>
          <p className="text-sm text-muted-2 flex flex-wrap gap-3 mb-3.5">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} /> <b className="text-ink">Plus Code:</b>{" "}
              Q32H+X8
            </span>
            <span className="inline-flex items-center gap-1">
              <Phone size={12} /> <b className="text-ink">WA:</b> 0877-8926-6205
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} /> Buka s/d 22.00
            </span>
          </p>
          <a
            className="bg-white text-ink px-[22px] py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase font-semibold inline-flex items-center gap-3.5 border border-ink rounded-full leading-none cursor-pointer whitespace-nowrap hover:bg-ink hover:text-white transition-all"
            href={maps}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={14} /> Buka di Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="relative h-[420px] max-[800px]:h-[360px] rounded-[24px] overflow-hidden border border-line bg-[#E9E5D9] shadow-[0_8px_24px_rgba(10,10,10,0.06)]">
          <iframe
            className="absolute inset-0 w-full h-full border-0 block saturate-[1.05] contrast-[1.02]"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta 360FITCLUB di Google Maps"
            allowFullScreen
          />
          <a
            className="absolute inset-0 z-10 block cursor-pointer focus:outline-[3px] focus:outline-lime-strong focus:-outline-offset-3"
            href={maps}
            target="_blank"
            rel="noreferrer"
            aria-label="Buka lokasi 360FITCLUB di Google Maps"
            title="Klik untuk buka di Google Maps"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-[10px] rounded-[14px] p-3.5 flex items-center justify-between gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-black/5 z-10 text-left">
            <div>
              <strong className="font-display font-extrabold text-[13px] tracking-[-0.02em] text-ink leading-[1.2] flex items-center gap-1.5">
                <MapPin size={14} /> 360FITCLUB • Tambun
              </strong>
              <span className="font-mono text-[11px] tracking-[0.04em] text-muted block mt-0.5">
                Ketuk peta untuk navigasi
              </span>
            </div>
            <span className="w-9 h-9 rounded-full bg-ink text-lime grid place-items-center shrink-0">
              <ArrowUpRight size={16} />
            </span>
          </div>
          <div
            className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime border-[3px] border-ink rounded-full w-[42px] h-[42px] grid place-items-center text-lg font-bold shadow-[0_8px_20px_rgba(0,0,0,0.2)] z-10 animate-[bounce_2s_infinite]"
            aria-hidden="true"
          >
            <MapPin size={18} color="#0A0A0A" fill="#D9FF3F" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 px-[5vw] max-[800px]:px-[4vw] max-[800px]:py-12 bg-[#FBFBF8] border-t border-line"
        id="faq"
      >
        <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-[5vw] max-[800px]:gap-7 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
              <MessageCircle size={12} /> 06 / FAQ
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance">
              PERTANYAAN
              <br />
              <em className="font-bold text-muted-3 not-italic">UMUM.</em>
            </h2>
          </div>
          {/* <p className="leading-[1.75] text-muted text-base max-w-[420px] m-0">
            Jawaban singkat biar kamu makin yakin mulai. Masih ada yang mau
            ditanya? Langsung WA aja.
          </p> */}
        </div>
        <div className="max-w-[100%] mx-auto mt-10 border border-line rounded-[18px] overflow-hidden bg-white shadow-[0_8px_24px_rgba(10,10,10,0.06)]">
          {faqs.map(([question, answer], index) => (
            <details
              key={question}
              open={index === 0}
              className="border-b border-line last:border-0 group open:bg-paper-soft"
            >
              <summary className="grid grid-cols-[56px_1fr_32px] max-[800px]:grid-cols-[44px_1fr_32px] gap-3.5 items-center p-[22px] max-[800px]:p-4 cursor-pointer list-none font-semibold hover:bg-lime-faint transition-colors [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-[15px] text-black font-semibold bg-gray-100 border border-line rounded-lg py-1.5 text-center">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="font-inter font-semibold text-base max-[800px]:text-[15px] tracking-[-0.01em] leading-[1.3] text-ink">
                  {question}
                </strong>
                <span className="w-8 h-8 rounded-full border border-line grid place-items-center text-base bg-gray-200 transition-all group-open:rotate-45 group-open:bg-ink group-open:text-white group-open:border-ink">
                  <ArrowUpRight
                    size={15}
                    className="group-open:rotate-90 font-bold group-open:rotate-0"
                  />
                </span>
              </summary>
              <p className="m-0 px-5 pb-[22px] pl-[90px] max-[800px]:pl-[60px] max-[800px]:px-4 text-muted leading-[1.7] text-[15px] max-w-[70ch]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <InnerFooter />
    </main>
  );
}

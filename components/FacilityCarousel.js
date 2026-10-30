"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Users,
  HeartPulse,
  Zap,
  Building2,
  Sparkles,
} from "lucide-react";

const items = [
  // {
  //   title: "Free Weights Area",
  //   desc: "Dumbbell 2.5–40kg, barbell & bench — buat strength & hypertrophy.",
  //   img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  //   icon: Dumbbell,
  //   badge: "STRENGTH",
  // },
  {
    title: "Machine Zone",
    desc: "Lat pulldown, chest press, leg press, cable & smith machine.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    icon: Dumbbell,
    badge: "MACHINES",
  },
  {
    title: "Cardio Corner",
    desc: "Treadmill, bike & elliptical — panasin sebelum angkat.",
    img: "https://images.unsplash.com/photo-1599058917212-d750aac444b6?q=80&w=800&auto=format&fit=crop",
    icon: HeartPulse,
    badge: "CARDIO",
  },
  {
    title: "Studio Kelas",
    desc: "Zumba, Senam, Poundfit & Muaythai — sound & AC siap.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    icon: Users,
    badge: "STUDIO",
  },
  {
    title: "Functional Area",
    desc: "Kettlebell, battle rope, box jump & TRX — HIIT friendly.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    icon: Zap,
    badge: "FUNCTIONAL",
  },
  {
    title: "Sewa Studio",
    desc: "Private & komunitas — non-member bisa sewa per jam.",
    img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop",
    icon: Building2,
    badge: "SEWA",
  },
];

export default function FacilityCarousel() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // ponytail: pakai container.scrollTo bukan card.scrollIntoView biar tidak scroll halaman (terutama mobile)
  const scrollToIndex = useCallback((idx) => {
    const el = ref.current;
    if (!el) return;
    const card = el.children[idx];
    if (!card) return;
    // hitung offset card relatif ke container, bukan viewport
    const left = card.offsetLeft - el.offsetLeft;
    el.scrollTo({ left, behavior: "smooth" });
    setActive(idx);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => {
      const nextIdx = (prev + 1) % items.length;
      scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [scrollToIndex]);

  const prev = useCallback(() => {
    setActive((prev) => {
      const prevIdx = (prev - 1 + items.length) % items.length;
      scrollToIndex(prevIdx);
      return prevIdx;
    });
  }, [scrollToIndex]);

  // auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  // update active on manual scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const width = el.children[0]?.clientWidth + 16; // gap
      if (!width) return;
      const idx = Math.round(scrollLeft / width);
      setActive(Math.min(idx, items.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="py-20 max-[800px]:py-12 bg-white border-y border-line overflow-hidden"
      aria-label="Carousel fasilitas 360FITCLUB"
    >
      <div className="px-[5vw] max-[800px]:px-[4vw]">
        <div className="flex justify-between items-end gap-4 flex-wrap">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2 flex items-center gap-2.5 mb-3.5 font-medium">
              <Sparkles size={12} /> FASILITAS • ALAT 360FITCLUB
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] text-[clamp(32px,5vw,56px)] max-[800px]:text-[32px] m-0 text-balance">
              LIHAT PROGRAM KAMI
            </h2>
            <p className="text-muted leading-[1.7] text-[15px] max-w-[520px] mt-3">
              Geser untuk program mulai dari Gym, Zumba, Poundfit, dan Muaythai
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={prev}
              aria-label="Slide sebelumnya"
              className="w-11 h-11 rounded-full bg-white border border-line grid place-items-center hover:bg-ink hover:text-white hover:border-ink transition-colors active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Slide berikutnya"
              className="w-11 h-11 rounded-full bg-ink text-white border border-ink grid place-items-center hover:bg-lime hover:text-ink hover:border-lime transition-colors active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth overscroll-x-contain touch-pan-x px-[5vw] max-[800px]:px-[4vw] pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="min-w-[85%] sm:min-w-[48%] lg:min-w-[32%] max-w-[420px] snap-start shrink-0 bg-white border border-line rounded-[18px] overflow-hidden shadow-[0_8px_24px_rgba(10,10,10,0.06)] hover:shadow-card hover:border-line-2 hover:-translate-y-1 transition-all flex flex-col group"
            >
              <div className="h-[220px] relative overflow-hidden bg-[#F2F2F2]">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.img}')` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute top-3 left-3 bg-black/65 text-white font-mono text-[10px] tracking-[0.08em] px-2.5 py-1.5 rounded-full backdrop-blur-[6px] border border-white/10 inline-flex items-center gap-1.5">
                  <Icon size={12} /> {item.badge}
                </span>
                <span className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-lime text-ink grid place-items-center border border-lime-strong opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={14} />
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-extrabold text-[17px] tracking-[-0.02em] leading-[1.1] flex-1">
                    {item.title}
                  </h3>
                  <span className="w-9 h-9 rounded-[10px] bg-ink text-lime grid place-items-center shrink-0">
                    <Icon size={16} />
                  </span>
                </div>
                <p className="text-muted leading-[1.6] text-sm mt-2 flex-1">
                  {item.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-2 mt-6 px-[5vw]">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Ke slide ${i + 1}`}
            aria-current={active === i}
            className={`h-1.5 rounded-full transition-all ${active === i ? "w-8 bg-ink" : "w-2.5 bg-line hover:bg-muted-2"}`}
          />
        ))}
      </div>

      <p className="text-center font-mono text-[11px] tracking-[0.04em] text-muted-2 mt-3"></p>
    </section>
  );
}

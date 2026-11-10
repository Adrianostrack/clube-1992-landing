"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cabanas, cabanaAmenities, whatsapp } from "../data/club";

export default function Cabanas() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const cabana = cabanas[active];

  // Troca de cabana: a galeria abre como cortina e os detalhes sobem
  useGSAP(
    () => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap
        .timeline()
        .fromTo(
          ".cab-gallery",
          { clipPath: "inset(0% 0% 0% 100%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.inOut" }
        )
        .from(".cab-gallery img", { scale: 1.25, duration: 1.2, ease: "expo.out" }, 0.2)
        .from(
          ".cab-detail > *",
          { y: 24, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.06 },
          0.15
        );
    },
    { dependencies: [active], scope: rootRef }
  );

  // Ao trocar de cabana, volta para a primeira foto
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    setSlide(0);
  }, [active]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const index = (i + cabana.photos.length) % cabana.photos.length;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setSlide(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div ref={rootRef}>
      {/* Seletor de cabana */}
      <div
        role="tablist"
        aria-label="Escolha a cabana"
        className="flex border-b border-white/10"
      >
        {cabanas.map((c, i) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`group relative flex-1 px-1 pb-4 pt-2 sm:flex-none sm:px-4 text-left transition-colors md:px-6 ${
              i === active ? "text-bone" : "text-bone/40 hover:text-bone/70"
            }`}
          >
            <span className="block font-display text-4xl font-black leading-none sm:text-5xl md:text-6xl">
              {c.id}
            </span>
            <span className="eyebrow mt-1 block !text-[0.65rem]">{c.style}</span>
            <span
              className={`absolute inset-x-0 -bottom-px h-0.5 bg-gold transition-transform origin-left ${
                i === active ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Galeria */}
        <div className="lg:col-span-8">
          <div className="cab-gallery relative">
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="snap-gallery flex aspect-[4/3] overflow-x-auto bg-coal lg:aspect-[3/2]"
            >
              {cabana.photos.map((src, i) => (
                <div key={src} className="relative h-full w-full shrink-0">
                  <Image
                    src={src}
                    alt={`${cabana.name}, foto ${i + 1} de ${cabana.photos.length}`}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
              <span className="rounded-full bg-ink/75 px-3 py-1 text-xs tabular-nums">
                {slide + 1} / {cabana.photos.length}
              </span>
              <div className="pointer-events-auto flex gap-2">
                <button
                  onClick={() => goTo(slide - 1)}
                  aria-label="Foto anterior"
                  className="grid h-11 w-11 place-items-center rounded-full bg-ink/75 hover:bg-gold hover:text-ink transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => goTo(slide + 1)}
                  aria-label="Próxima foto"
                  className="grid h-11 w-11 place-items-center rounded-full bg-ink/75 hover:bg-gold hover:text-ink transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="mt-2 hidden gap-2 sm:flex">
            {cabana.photos.map((src, i) => (
              <button
                key={src}
                onClick={() => goTo(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`relative aspect-square w-16 shrink-0 overflow-hidden transition-opacity ${
                  i === slide ? "opacity-100 ring-2 ring-gold" : "opacity-50 hover:opacity-90"
                }`}
              >
                <Image src={src} alt="" fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Detalhes */}
        <div className="cab-detail flex flex-col lg:col-span-4">
          <p className="eyebrow text-gold">Cabana {cabana.id} · {cabana.style}</p>
          <h3 className="mt-2 font-display text-5xl font-black uppercase leading-none">
            {cabana.name}
          </h3>
          <p className="mt-4 text-bone/75 leading-relaxed">{cabana.description}</p>

          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-sm text-bone/80">
            {cabanaAmenities.map((a) => (
              <li key={a} className="flex items-baseline gap-2">
                <span className="h-1 w-1 shrink-0 translate-y-[-2px] bg-gold" />
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 lg:mt-auto">
            <a
              href={cabana.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold py-4 text-center font-semibold text-ink hover:bg-bone transition-colors"
            >
              Ver datas e reservar no Airbnb
            </a>
            <a
              href={whatsapp(`Olá! Quero reservar a ${cabana.name} no Clube 1992.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 py-4 text-center font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

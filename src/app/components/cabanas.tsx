"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  type Cabana,
  cabanas,
  cabanaAmenities,
  formatPreco,
  hospedagem,
} from "../data/club";
import ReservarLink from "./reservarLink";

const HASH = /^#cabana-([1-5])$/;

export default function Cabanas() {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Link direto para uma cabana (ex.: /home#cabana-3), útil para anúncios
  useEffect(() => {
    const open = () => {
      const m = window.location.hash.match(HASH);
      if (!m) return;
      setActive(Number(m[1]) - 1);
      document.getElementById("cabanas")?.scrollIntoView();
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  const select = (i: number) => {
    setActive(i);
    try {
      history.replaceState(null, "", `#cabana-${i + 1}`);
    } catch {}
  };

  // Troca de cabana: a galeria abre como cortina e os detalhes sobem
  useGSAP(
    () => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const panel = `[data-panel="${active}"]`;
      gsap
        .timeline()
        .fromTo(
          `${panel} .cab-gallery`,
          { clipPath: "inset(0% 0% 0% 100%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.inOut" }
        )
        .from(`${panel} .cab-gallery img`, { scale: 1.25, duration: 1.2, ease: "expo.out" }, 0.2)
        .from(
          `${panel} .cab-detail > *`,
          { y: 24, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.06 },
          0.15
        );
    },
    { dependencies: [active], scope: rootRef }
  );

  return (
    <div ref={rootRef}>
      <p className="eyebrow mb-2 text-bone/50">Escolha a cabana</p>
      <div role="tablist" aria-label="Escolha a cabana" className="flex border-b border-white/10">
        {cabanas.map((c, i) => (
          <button
            key={c.id}
            id={`tab-cabana-${i + 1}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`cabana-${i + 1}`}
            onClick={() => select(i)}
            className={`group relative flex-1 px-1 pb-4 pt-2 text-left transition-colors sm:flex-none sm:px-4 md:px-6 ${
              i === active ? "text-bone" : "text-bone/40 hover:text-bone/70"
            }`}
          >
            <span className="block font-display text-4xl font-black leading-none sm:text-5xl md:text-6xl">
              {c.id}
            </span>
            <span className="eyebrow mt-1 block !text-[0.65rem]">{c.style}</span>
            <span
              className={`absolute inset-x-0 -bottom-px h-0.5 origin-left bg-gold transition-transform ${
                i === active ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Todas as cabanas ficam no HTML; só a escolhida aparece */}
      {cabanas.map((c, i) => (
        <CabanaPanel
          key={c.id}
          cabana={c}
          index={i}
          hidden={i !== active}
          onNext={() => select((i + 1) % cabanas.length)}
          nextName={cabanas[(i + 1) % cabanas.length].name}
        />
      ))}
    </div>
  );
}

function CabanaPanel({
  cabana,
  index,
  hidden,
  onNext,
  nextName,
}: {
  cabana: Cabana;
  index: number;
  hidden: boolean;
  onNext: () => void;
  nextName: string;
}) {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Ao reabrir a cabana, volta para a primeira foto
  useEffect(() => {
    if (hidden) return;
    trackRef.current?.scrollTo({ left: 0 });
    setSlide(0);
  }, [hidden]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const n = (i + cabana.photos.length) % cabana.photos.length;
    track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setSlide(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div
      id={`cabana-${index + 1}`}
      role="tabpanel"
      aria-labelledby={`tab-cabana-${index + 1}`}
      data-panel={index}
      hidden={hidden}
      className={`mt-8 gap-8 lg:grid-cols-12 lg:gap-12 ${hidden ? "hidden" : "grid"}`}
    >
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
                  loading={index === 0 && i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
            <span className="rounded-full bg-ink/75 px-3 py-1 text-xs tabular-nums">
              {slide + 1} / {cabana.photos.length} fotos
            </span>
            <div className="pointer-events-auto flex gap-2">
              <button
                onClick={() => goTo(slide - 1)}
                aria-label="Foto anterior"
                className="grid h-11 w-11 place-items-center rounded-full bg-ink/75 transition-colors hover:bg-gold hover:text-ink"
              >
                ←
              </button>
              <button
                onClick={() => goTo(slide + 1)}
                aria-label="Próxima foto"
                className="grid h-11 w-11 place-items-center rounded-full bg-ink/75 transition-colors hover:bg-gold hover:text-ink"
              >
                →
              </button>
            </div>
          </div>
        </div>

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
        <p className="eyebrow text-gold">
          Cabana {cabana.id} · {cabana.style}
        </p>
        <h3 className="mt-2 font-display text-5xl font-black uppercase leading-none">{cabana.name}</h3>
        <p className="mt-4 leading-relaxed text-bone/75">{cabana.description}</p>

        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-sm text-bone/80">
          {cabanaAmenities.map((a) => (
            <li key={a} className="flex items-baseline gap-2">
              <span className="h-1 w-1 shrink-0 translate-y-[-2px] bg-gold" />
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 lg:mt-auto">
          {hospedagem.precoAPartirDe !== null && (
            <div className="border-t border-white/10 pt-6 text-center">
              <p>
                <span className="text-sm text-bone/60">a partir de </span>
                <span className="font-display text-4xl font-black">
                  {formatPreco(hospedagem.precoAPartirDe)}
                </span>
                <span className="text-sm text-bone/60"> por noite</span>
              </p>
              <p className="mt-1 text-xs text-bone/50">
                {formatPreco(hospedagem.diaria1)} para 1 pessoa · {formatPreco(hospedagem.diaria2)} para 2 pessoas
              </p>
            </div>
          )}
          <ReservarLink
            cabana={index + 1}
            className="rounded-full bg-gold py-4 text-center font-semibold text-ink transition-colors hover:bg-bone"
          >
            Reservar a {cabana.name}
          </ReservarLink>
          <p className="-mt-1 text-center text-xs text-bone/50">Atendimento pelo WhatsApp</p>
          <button
            onClick={onNext}
            className="py-2 text-center text-sm text-bone/60 underline-offset-4 hover:text-gold hover:underline"
          >
            Ver a {nextName} →
          </button>
        </div>
      </div>
    </div>
  );
}

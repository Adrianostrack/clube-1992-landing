"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type Cabana, cabanas, formatPreco, hospedagem } from "../data/club";
import ReservarLink from "./reservarLink";

const HASH = /^#cabana-([1-5])$/;

// Um cartão por cabana, todos visíveis (padrão do documento das cabanas)
export default function Cabanas() {
  const [destaque, setDestaque] = useState<number | null>(null);

  // Link direto para uma cabana (ex.: /cabanas#cabana-3): rola até o cartão e destaca
  useEffect(() => {
    const open = () => {
      const m = window.location.hash.match(HASH);
      if (!m) return;
      const n = Number(m[1]);
      document.getElementById(`cabana-${n}`)?.scrollIntoView({ block: "start" });
      setDestaque(n);
      window.setTimeout(() => setDestaque(null), 2200);
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  return (
    <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
      {cabanas.map((c, i) => (
        <CabanaCard key={c.id} cabana={c} numero={i + 1} destaque={destaque === i + 1} />
      ))}
    </div>
  );
}

function CabanaCard({
  cabana,
  numero,
  destaque,
}: {
  cabana: Cabana;
  numero: number;
  destaque: boolean;
}) {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

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
    <article
      id={`cabana-${numero}`}
      data-fade
      className={`scroll-mt-24 flex flex-col rounded-[1.25rem] transition-shadow duration-700 ${
        destaque ? "shadow-[0_0_0_2px_#b39556]" : ""
      }`}
    >
      {/* Galeria da cabana */}
      <div className="relative overflow-hidden rounded-[1.25rem]">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="snap-gallery flex aspect-[4/3] overflow-x-auto bg-coal"
          aria-label={`Fotos da ${cabana.name}`}
        >
          {cabana.photos.map((src, i) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={`${cabana.name}, foto ${i + 1} de ${cabana.photos.length}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {cabana.style}
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
          <span className="rounded-full bg-ink/75 px-3 py-1 text-xs tabular-nums">
            {slide + 1} / {cabana.photos.length} fotos
          </span>
          <div className="pointer-events-auto flex gap-2">
            <button
              onClick={() => goTo(slide - 1)}
              aria-label={`Foto anterior da ${cabana.name}`}
              className="grid h-10 w-10 place-items-center rounded-full bg-ink/75 transition-colors hover:bg-gold hover:text-ink"
            >
              ←
            </button>
            <button
              onClick={() => goTo(slide + 1)}
              aria-label={`Próxima foto da ${cabana.name}`}
              className="grid h-10 w-10 place-items-center rounded-full bg-ink/75 transition-colors hover:bg-gold hover:text-ink"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Dados e reserva */}
      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-4xl font-black uppercase leading-none">{cabana.name}</h3>
          <span className="text-sm text-bone/60">2 pessoas</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-bone/65">{cabana.description}</p>

        {hospedagem.precoAPartirDe !== null && (
          <p className="mt-4 text-sm text-bone/80">
            <strong className="font-display text-2xl font-black text-bone">
              {formatPreco(hospedagem.diaria1)}
            </strong>{" "}
            1 pessoa <span className="text-bone/40">/</span>{" "}
            <strong className="font-display text-2xl font-black text-bone">
              {formatPreco(hospedagem.diaria2)}
            </strong>{" "}
            2 pessoas <span className="text-bone/50">· por noite</span>
          </p>
        )}

        <ReservarLink
          cabana={numero}
          className="mt-5 rounded-full bg-gold py-3.5 text-center font-semibold text-ink transition-colors hover:bg-bone"
        >
          Reservar a {cabana.name}
        </ReservarLink>
      </div>
    </article>
  );
}

import Image from "next/image";
import { CBF_URL, FGF_URL } from "../data/club";

// Escudos oficiais (arquivos dos sites da CBF e da FGF)
export const entidades = [
  {
    sigla: "CBF",
    nome: "Confederação Brasileira de Futebol",
    href: CBF_URL,
    src: "/img/filiacoes/cbf.png",
    w: 189,
    h: 260,
  },
  {
    sigla: "FGF",
    nome: "Federação Gaúcha de Futebol",
    href: FGF_URL,
    src: "/img/filiacoes/fgf.png",
    w: 75,
    h: 97,
  },
];

// Selo compacto "Filiado à CBF e à FGF" (canto do topo e rodapé).
// Escudos em prata para combinar com o site; ganham cor ao passar o mouse.
export function SeloFiliacao({ className = "", grande = false }: { className?: string; grande?: boolean }) {
  return (
    <div data-selo-hero className={`flex items-center gap-4 ${className}`}>
      <span className="eyebrow !text-[0.6rem] leading-tight text-bone/60">
        Filiado à
        <br />
        CBF e à FGF
      </span>
      <span className={`${grande ? "h-16" : "h-10"} w-px bg-white/20`} aria-hidden />
      {entidades.map((e) => (
        <a
          key={e.sigla}
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          title={e.nome}
          className="crest-mono block"
        >
          <Image src={e.src} alt={`Escudo da ${e.nome}`} width={e.w} height={e.h} className={`${grande ? "h-16" : "h-11"} w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]`} />
        </a>
      ))}
    </div>
  );
}

// Placas grandes, em cores, para a seção de futebol
export function PlacasFiliacao() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:max-w-3xl">
      {entidades.map((e) => (
        <a
          key={e.sigla}
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 border border-white/15 bg-ink/70 p-5 backdrop-blur-sm transition-colors hover:border-gold"
        >
          <Image
            src={e.src}
            alt={`Escudo da ${e.nome}`}
            width={e.w}
            height={e.h}
            className="h-14 w-auto shrink-0 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
          />
          <span className="flex-1">
            <span className="eyebrow block !text-[0.6rem] text-gold">Filiado à</span>
            <span className="mt-1 block font-display text-3xl font-black leading-none">{e.sigla}</span>
            <span className="mt-1 block text-sm text-bone/60">{e.nome}</span>
          </span>
          <span className="text-xl text-gold transition-transform group-hover:translate-x-1" aria-hidden>
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}

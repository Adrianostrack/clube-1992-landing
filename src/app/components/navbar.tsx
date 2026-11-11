"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mensagemReserva, whatsapp } from "../data/club";
import { useOrigem } from "./reservarLink";
import { entidades } from "./filiacoes";

const clubLinks = [
  { href: "/home#clube", label: "O clube" },
  { href: "/cabanas", label: "Cabanas" },
  { href: "/home#estrutura", label: "Estrutura" },
  { href: "/home#futebol", label: "Futebol" },
  { href: "/home#estadio", label: "Estádio" },
  { href: "/transparency", label: "Transparência" },
];

// Menu enxuto da página das cabanas (destino dos anúncios)
const cabanasLinks = [
  { href: "/cabanas#cabanas", label: "As cabanas" },
  { href: "/cabanas#piscina-academia", label: "Piscina e academia" },
  { href: "/cabanas#regras", label: "Regras" },
  { href: "/home", label: "O clube" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/home" || pathname === "/home/" || pathname === "/";
  const isCabanas = pathname?.startsWith("/cabanas") ?? false;
  const links = isCabanas ? cabanasLinks : clubLinks;
  const origem = useOrigem();
  const cta = isCabanas
    ? { label: "Reservar", href: whatsapp(mensagemReserva(origem)) }
    : { label: "Associe-se", href: whatsapp("Olá! Quero saber como me associar ao Clube 1992.") };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Escudos CBF/FGF no menu: aparecem quando o selo do topo da home sai da tela.
  // Em páginas sem o selo, ficam sempre visíveis.
  const [showCrests, setShowCrests] = useState(false);
  useEffect(() => {
    let io: IntersectionObserver | null = null;
    const raf = requestAnimationFrame(() => {
      const selos = Array.from(document.querySelectorAll<HTMLElement>("[data-selo-hero]"));
      if (!selos.length) {
        setShowCrests(true);
        return;
      }
      const visiveis = new Set<Element>();
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => (e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target)));
          // só conta o selo que está de fato exibido (o do celular some no desktop e vice-versa)
          const algumNaTela = Array.from(visiveis).some((el) => (el as HTMLElement).offsetParent !== null);
          setShowCrests(!algumNaTela);
        },
        { rootMargin: "-80px 0px 0px 0px" }
      );
      selos.forEach((el) => io!.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  const solid = scrolled || !isHome || isOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid
            ? "bg-ink/95 backdrop-blur border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/home" className="flex items-center gap-3" aria-label="Clube 1992, início">
            <Image
              src="/img/icons/icon.png"
              width={40}
              height={52}
              alt=""
              priority
            />
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide lg:hidden xl:inline">
              Clube 1992
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium xl:gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-bone/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <NavCrests show={showCrests} />
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 font-semibold text-ink hover:bg-bone transition-colors"
            >
              {cta.label}
            </a>
          </nav>

          <div className="ml-auto mr-2 lg:hidden">
            <NavCrests show={showCrests} compact />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden -mr-2 p-2 text-bone"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeWidth="1.8"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Fora do <header>: o backdrop-blur dele prenderia o position:fixed */}
      <div
          className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-ink transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <nav className="flex flex-col px-5 pt-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 font-display text-4xl font-extrabold uppercase"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-gold py-4 text-center font-semibold text-ink"
            >
              {cta.label} pelo WhatsApp
            </a>
          </nav>
        </div>
      {!isHome && <div className="h-20" aria-hidden />}
    </>
  );
}

// Escudos compactos no menu, com entrada animada (um depois do outro)
function NavCrests({ show, compact = false }: { show: boolean; compact?: boolean }) {
  return (
    <div
      aria-hidden={!show}
      className={`flex items-center overflow-hidden transition-[max-width,opacity] duration-500 ease-out ${
        show ? "max-w-[9rem] opacity-100" : "max-w-0 opacity-0"
      } ${compact ? "gap-2" : "gap-3"}`}
    >
      {!compact && <span className="mr-1 h-7 w-px shrink-0 bg-white/20" />}
      {entidades.map((e, i) => (
        <a
          key={e.sigla}
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Filiado à ${e.nome}`}
          tabIndex={show ? 0 : -1}
          className={`crest-mono block shrink-0 transition-transform duration-500 ease-out ${
            show ? "translate-y-0" : "-translate-y-6"
          }`}
          style={{ transitionDelay: show ? `${120 + i * 90}ms` : "0ms" }}
        >
          <Image
            src={e.src}
            alt={`Escudo da ${e.nome}`}
            width={e.w}
            height={e.h}
            className={`${compact ? "h-7" : "h-9"} w-auto`}
          />
        </a>
      ))}
    </div>
  );
}

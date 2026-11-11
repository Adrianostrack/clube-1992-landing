"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsapp } from "../data/club";

const links = [
  { href: "/home#clube", label: "O clube" },
  { href: "/cabanas", label: "Cabanas" },
  { href: "/home#estrutura", label: "Estrutura" },
  { href: "/home#futebol", label: "Futebol" },
  { href: "/home#estadio", label: "Estádio" },
  { href: "/transparency", label: "Transparência" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/home" || pathname === "/home/" || pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

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
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide">
              Clube 1992
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-bone/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={whatsapp("Olá! Quero saber como me associar ao Clube 1992.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 font-semibold text-ink hover:bg-bone transition-colors"
            >
              Associe-se
            </a>
          </nav>

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
              href={whatsapp("Olá! Quero saber como me associar ao Clube 1992.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-gold py-4 text-center font-semibold text-ink"
            >
              Associe-se pelo WhatsApp
            </a>
          </nav>
        </div>
      {!isHome && <div className="h-20" aria-hidden />}
    </>
  );
}

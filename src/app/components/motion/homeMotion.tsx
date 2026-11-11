"use client";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Números "aleatórios" estáveis por índice, para as letras sempre caírem igual
const seeded = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1; // -1..1
};

const SECTIONS = [
  { id: "home", label: "Início" },
  { id: "clube", label: "Os fundos" },
  { id: "cabanas", label: "Cabanas" },
  { id: "estrutura", label: "Clube social" },
  { id: "futebol", label: "Futebol" },
  { id: "estadio", label: "Estádio" },
  { id: "diretoria", label: "Diretoria" },
  { id: "associe", label: "Seja sócio" },
];

// Todos os efeitos da home, aplicados por atributos data-* no HTML.
// Com "reduzir movimento" ligado no sistema, nada disso roda e a página fica estática.
export default function HomeMotion() {
  const [active, setActive] = useState(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 1024px) and (pointer: fine)",
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
        if (!motion) return;

        /* ---------- HERO: entrada + letras que se espalham ao rolar ---------- */
        const heroTitle = SplitText.create("[data-hero-title]", {
          type: "chars",
          mask: "chars",
        });
        const heroImg = document.querySelector<HTMLElement>("[data-hero-img]");
        const intro = gsap
          .timeline({ paused: true })
          .from(heroImg, { scale: 1.35, duration: 2.2, ease: "expo.out" })
          .from(
            heroTitle.chars,
            { yPercent: 115, duration: 1.1, ease: "expo.out", stagger: 0.05 },
            0.1
          )
          .from(
            "[data-hero-fade]",
            { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.1 },
            0.5
          );

        if (document.documentElement.dataset.loaded === "1") intro.play();
        else document.addEventListener("preloader:done", () => intro.play(), { once: true });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
          .to("[data-hero-img-wrap]", { yPercent: 18, scale: 1.08, ease: "none" }, 0)
          .to(
            heroTitle.chars,
            {
              y: (i) => -80 - Math.abs(seeded(i)) * 260,
              x: (i) => seeded(i + 40) * 120,
              rotation: (i) => seeded(i + 80) * 45,
              opacity: 0,
              ease: "none",
              stagger: { each: 0.02, from: "random" },
            },
            0
          )
          .to("[data-hero-copy]", { y: -60, opacity: 0, ease: "none" }, 0);

        /* ---------- FRASE HORIZONTAL com letras em onda ---------- */
        const marquee = document.querySelector<HTMLElement>("[data-marquee]");
        const track = document.querySelector<HTMLElement>("[data-marquee-track]");
        if (marquee && track) {
          const split = SplitText.create(track, { type: "words,chars" });
          const chars = split.chars as HTMLElement[];
          const setters = chars.map((c) => ({
            y: gsap.quickSetter(c, "y", "px"),
            r: gsap.quickSetter(c, "rotation", "deg"),
          }));
          const distance = () => track.scrollWidth - window.innerWidth + window.innerWidth * 0.1;

          const wave = () => {
            const vw = window.innerWidth;
            const zone = vw * 0.55; // as letras se acomodam ao chegar nessa faixa
            const amp = Math.min(vw * 0.18, 220);
            chars.forEach((c, i) => {
              const box = c.getBoundingClientRect();
              const p = gsap.utils.clamp(0, 1, (box.left - zone) / (vw - zone));
              const k = p * p;
              setters[i].y(k * amp * seeded(i));
              setters[i].r(k * 50 * seeded(i + 7));
            });
          };

          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: marquee,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: wave,
              onRefresh: wave,
            },
          });
          wave();
        }

        /* ---------- TÍTULOS: linhas sobem de dentro de uma máscara ---------- */
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 105,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.09,
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
              }),
          });
        });

        /* ---------- TÍTULO DO FUTEBOL: letras caem e se encaixam ---------- */
        gsap.utils.toArray<HTMLElement>("[data-scatter]").forEach((el) => {
          const s = SplitText.create(el, { type: "words,chars" });
          gsap.from(s.chars, {
            y: (i) => 120 + Math.abs(seeded(i)) * 260,
            x: (i) => seeded(i + 13) * 80,
            rotation: (i) => seeded(i + 29) * 70,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.015, from: "random" },
            scrollTrigger: { trigger: el, start: "top 95%", end: "top 40%", scrub: 0.6 },
          });
        });

        /* ---------- FOTOS: cortina que abre + zoom que assenta ---------- */
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const img = el.querySelector("img");
          gsap
            .timeline({ scrollTrigger: { trigger: el, start: "top 88%", once: true } })
            .fromTo(
              el,
              { clipPath: "inset(18% 8% 18% 8%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.out" }
            )
            .from(img, { scale: 1.35, duration: 1.6, ease: "expo.out" }, 0);
        });

        /* ---------- PARALLAX dentro das fotos grandes ---------- */
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const img = el.querySelector("img");
          if (!img) return;
          gsap.fromTo(
            img,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });

        /* ---------- Fade simples para blocos de texto ---------- */
        gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        /* ---------- CONTADORES ---------- */
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count);
          const prefix = el.dataset.prefix ?? "";
          const pad = el.dataset.pad ? Number(el.dataset.pad) : 0;
          const obj = { v: 0 };
          const original = el.textContent;
          el.textContent = prefix + "0".padStart(pad, "0");
          ctx.add(() => () => {
            el.textContent = original;
          });
          gsap.to(obj, {
            v: end,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = prefix + String(Math.round(obj.v)).padStart(pad, "0");
            },
          });
        });

        /* ---------- CARTÕES: a seção anterior recua quando a próxima sobe ---------- */
        gsap.utils.toArray<HTMLElement>("[data-card]").forEach((el) => {
          const prev = el.previousElementSibling as HTMLElement | null;
          if (!prev) return;
          gsap.to(prev, {
            scale: 0.95,
            opacity: 0.45,
            transformOrigin: "50% 100%",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "top 30%", scrub: true },
          });
        });

        /* ---------- BOTÕES MAGNÉTICOS (só com mouse) ---------- */
        if (desktop) {
          gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
            const move = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.45);
            };
            const leave = () => {
              xTo(0);
              yTo(0);
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", leave);
            ctx.add(() => () => {
              el.removeEventListener("pointermove", move);
              el.removeEventListener("pointerleave", leave);
            });
          });
        }
      }
    );

    /* ---------- Indicador de seção (sempre ativo, é só navegação) ---------- */
    SECTIONS.forEach((s, i) => {
      ScrollTrigger.create({
        trigger: `#${s.id}`,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActive(i),
      });
    });

    // Imagens carregando mudam alturas: recalcula os gatilhos
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  });

  return (
    <nav
      aria-label="Seções da página"
      className="pointer-events-none fixed bottom-8 left-6 z-30 hidden flex-col gap-2 mix-blend-difference lg:flex"
    >
      {SECTIONS.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="pointer-events-auto group flex items-center gap-3 py-0.5"
          aria-current={i === active ? "true" : undefined}
        >
          <span
            className={`section-dot block h-px ${
              i === active ? "w-10 bg-white" : "w-4 bg-white/50 group-hover:w-7"
            }`}
          />
          <span
            className={`text-[0.65rem] uppercase tracking-[0.2em] text-white transition-opacity ${
              i === active ? "opacity-100" : "opacity-0 group-hover:opacity-70"
            }`}
          >
            {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

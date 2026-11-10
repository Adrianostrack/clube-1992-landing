"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const STORAGE_KEY = "c1992-loaded";

const finish = () => {
  document.documentElement.dataset.loaded = "1";
  document.dispatchEvent(new Event("preloader:done"));
};

// Tela de abertura: escudo + contador até 1992, depois a cortina sobe.
// Aparece só na primeira visita da sessão (o script no <head> esconde nas demais).
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      const skip =
        document.documentElement.classList.contains("skip-preloader") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!el || skip) {
        el?.remove();
        finish();
        return;
      }

      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}

      const num = { v: 0 };
      gsap
        .timeline({
          onComplete: () => {
            el.remove();
          },
        })
        .from(".pl-crest", { yPercent: 40, opacity: 0, duration: 0.6, ease: "power3.out" })
        .to(
          num,
          {
            v: 1992,
            duration: 1.3,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counter.current)
                counter.current.textContent = String(Math.round(num.v)).padStart(4, "0");
            },
          },
          "<0.1"
        )
        .from(".pl-line", { scaleX: 0, duration: 1.3, ease: "power2.inOut" }, "<")
        .to(".pl-inner", { yPercent: -30, opacity: 0, duration: 0.5, ease: "power2.in" }, "+=0.15")
        .add(finish, "-=0.1")
        .to(el, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "<");
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className="preloader fixed inset-0 z-[100] flex items-center justify-center rounded-b-[2rem] bg-ink"
      aria-hidden
    >
      <div className="pl-inner flex flex-col items-center">
        <Image
          className="pl-crest"
          src="/img/icons/icon.png"
          width={72}
          height={94}
          alt=""
          priority
        />
        <span
          ref={counter}
          className="mt-6 font-display text-7xl font-black tabular-nums tracking-tight text-bone"
        >
          0000
        </span>
        <span className="pl-line mt-4 block h-px w-40 origin-left bg-gold" />
      </div>
    </div>
  );
}

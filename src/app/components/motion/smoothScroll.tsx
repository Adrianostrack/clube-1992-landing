"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Rolagem suave em toda a página, sincronizada com o ScrollTrigger.
// Desligada para quem pede menos movimento no sistema.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      anchors: { offset: -80 },
      autoRaf: false,
    });
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Trava a rolagem enquanto o preloader está na tela
    if (document.documentElement.dataset.loaded !== "1") {
      lenis.stop();
      const start = () => lenis.start();
      document.addEventListener("preloader:done", start, { once: true });
    }

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}

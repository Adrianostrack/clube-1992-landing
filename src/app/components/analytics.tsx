"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { detectarOrigem } from "./reservarLink";

// Medição via Google Tag Manager (container GTM-5BJKCQR6, carregado no layout).
// O GA4 (G-M4LL6N3430) fica DENTRO do GTM. O Pixel da Meta (925676588403036) é carregado no layout.
// Aqui o site envia:
//   - dataLayer "whatsapp_click": clique em qualquer link do WhatsApp (com origem, cabana/piscina e página)
//   - dataLayer "page_change": troca de página sem recarregar
//   - Meta "Lead" no clique do WhatsApp e "PageView" na troca de página
type DL = {
  dataLayer?: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
};

const meta = (...args: unknown[]) => (window as Window & DL).fbq?.(...args);

const push = (data: Record<string, unknown>) => {
  const w = window as Window & DL;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(data);
};

export default function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  // Registra a origem da visita (SITE/GADS/IG) já na primeira página
  useEffect(() => {
    detectarOrigem();
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    push({ event: "page_change", page_path: location.pathname });
    meta("track", "PageView");
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || !a.href.includes("wa.me/")) return;
      const texto = decodeURIComponent(a.href.split("text=")[1] || "");
      const codigo = texto.match(/Código: ([A-Z]+-[A-Z0-9]+)/)?.[1] ?? "";
      meta("track", "Lead", { content_name: codigo || "WHATSAPP", content_category: codigo.split("-")[1] || "" });
      push({
        event: "whatsapp_click",
        whatsapp_codigo: codigo, // ex.: SITE-C3, GADS-GERAL
        whatsapp_origem: codigo.split("-")[0] || "SITE",
        whatsapp_cabana: codigo.split("-")[1] || "", // C1..C5, GERAL ou PISCINA
        link_text: (a.textContent || "").trim().slice(0, 80),
        page_path: location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

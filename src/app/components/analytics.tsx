"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { detectarOrigem } from "./reservarLink";

// Google Analytics 4 / Google Ads (gtag) e Pixel da Meta.
// Só carregam se os IDs estiverem configurados na Vercel:
//   NEXT_PUBLIC_GA_ID=G-XXXXXXX (ou AW-XXXXXXX para Google Ads)
//   NEXT_PUBLIC_META_PIXEL_ID=123456789
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export default function Analytics() {
  const pathname = usePathname();

  // Registra a origem da visita (SITE/GADS/IG) já na primeira página
  useEffect(() => {
    detectarOrigem();
  }, []);

  // Navegação entre páginas sem recarregar: avisa o Pixel
  useEffect(() => {
    (window as Win).fbq?.("track", "PageView");
  }, [pathname]);

  // Cada clique em link do WhatsApp conta como contato / lead
  useEffect(() => {
    if (!GA_ID && !PIXEL_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || !a.href.includes("wa.me/")) return;
      const label = (a.textContent || "").trim().slice(0, 80);
      const w = window as Win;
      w.gtag?.("event", "generate_lead", { method: "whatsapp", link_text: label, page_path: location.pathname });
      w.fbq?.("track", "Contact", { content_name: label });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}

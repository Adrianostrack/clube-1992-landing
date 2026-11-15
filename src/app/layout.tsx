import type { Metadata } from "next";
import { Big_Shoulders_Display, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AccessibilityButton from "./components/accessibilityButton";
import Preloader from "./components/motion/preloader";
import SmoothScroll from "./components/motion/smoothScroll";
import Analytics from "./components/analytics";
import "lenis/dist/lenis.css";

// Roda antes da pintura: pula o preloader se já foi visto nesta sessão
// ou se o sistema pede menos movimento.
const preloaderGate = `try{if(sessionStorage.getItem('c1992-loaded')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('skip-preloader');document.documentElement.dataset.loaded='1'}}catch(e){}`;

// Google Tag Manager (código oficial, as duas partes). O GA4 fica dentro do GTM.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5BJKCQR6";
// Só carrega no domínio oficial (testes locais e prévias não entram nos relatórios)
const gtmHead = `if(/(^|\\.)clube1992\\.com\\.br$/.test(location.hostname))(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

// Pixel da Meta direto no site (não está no GTM). Mesmo filtro de domínio do GTM.
// PageView aqui; trocas de página e "Lead" (clique no WhatsApp) saem do components/analytics.tsx.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "925676588403036";
const metaPixel = `if(/(^|\\.)clube1992\\.com\\.br$/.test(location.hostname)){!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');fbq('track','PageView');}`;

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
  variable: "--font-display",
});

const body = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Clube 1992 · Clube social, cabanas e futebol em Carazinho",
  description:
    "Piscinas, academia, quadras e cinco cabanas para se hospedar dentro do clube. Clube 1992, Carazinho/RS, federado na FGF e na CBF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: gtmHead }} />
        <script dangerouslySetInnerHTML={{ __html: metaPixel }} />
        <script dangerouslySetInnerHTML={{ __html: preloaderGate }} />
      </head>
      <body
        className="font-sans bg-ink text-bone"
        suppressHydrationWarning={true}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Preloader />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <AccessibilityButton />
        <Analytics />
      </body>
    </html>
  );
}

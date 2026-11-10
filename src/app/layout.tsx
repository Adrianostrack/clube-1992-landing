import type { Metadata } from "next";
import { Big_Shoulders_Display, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AccessibilityButton from "./components/accessibilityButton";
import Preloader from "./components/motion/preloader";
import SmoothScroll from "./components/motion/smoothScroll";
import "lenis/dist/lenis.css";

// Roda antes da pintura: pula o preloader se já foi visto nesta sessão
// ou se o sistema pede menos movimento.
const preloaderGate = `try{if(sessionStorage.getItem('c1992-loaded')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('skip-preloader');document.documentElement.dataset.loaded='1'}}catch(e){}`;

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
        <script dangerouslySetInnerHTML={{ __html: preloaderGate }} />
      </head>
      <body
        className="font-sans bg-ink text-bone"
        suppressHydrationWarning={true}
      >
        <Preloader />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <AccessibilityButton />
      </body>
    </html>
  );
}

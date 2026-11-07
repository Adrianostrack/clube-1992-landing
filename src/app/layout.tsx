import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AccessibilityButton from "./components/accessibilityButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clube 1992 - Um clube para todos",
  description: "Um clube para todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-black text-white`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
        <AccessibilityButton />
      </body>
    </html>
  );
}

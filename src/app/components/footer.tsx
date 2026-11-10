import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  CBF_URL,
  EMAIL,
  FGF_URL,
  MAPS_URL,
  WHATSAPP_DISPLAY,
  whatsapp,
} from "../data/club";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <Image src="/img/icons/icon.png" width={56} height={73} alt="Escudo do Clube 1992" />
            <span className="font-display text-4xl font-black uppercase leading-none">
              Clube
              <br />
              1992
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/60">
            Clube social, hospedagem e futebol de base em Carazinho. Ser sócio
            também ajuda a manter o sonho de muitas crianças da escolinha.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-gold">Contato</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {ADDRESS}
                <span className="mt-1 block text-gold">Como chegar ↗</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow text-gold">Clube</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/home#cabanas" className="hover:text-gold">Cabanas</Link></li>
            <li><Link href="/home#estrutura" className="hover:text-gold">Estrutura</Link></li>
            <li><Link href="/home#futebol" className="hover:text-gold">Futebol</Link></li>
            <li><Link href="/transparency" className="hover:text-gold">Transparência</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-gold">Filiado a</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={FGF_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Federação Gaúcha de Futebol ↗
              </a>
            </li>
            <li>
              <a href={CBF_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Confederação Brasileira de Futebol ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-bone/40 md:px-8">
          Clube 1992 © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

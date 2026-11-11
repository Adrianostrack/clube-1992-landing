import type { Metadata } from "next";
import Cabanas from "../components/cabanas";
import Photo from "../components/photo";
import HomeMotion from "../components/motion/homeMotion";
import ReservarLink from "../components/reservarLink";
import {
  ADDRESS,
  DESCRICAO_BASE,
  MAPS_URL,
  TEXTO_PISCINA_ACADEMIA,
  formatPreco,
  horariosAreas,
  hospedagem,
} from "../data/club";

// Estrutura e textos seguem o documento "Cabanas Clube 1992 — Padrão Airbnb + Site"
export const metadata: Metadata = {
  title: "Cabanas com piscina e academia em Carazinho · Clube 1992",
  description:
    "Durma dentro do Clube 1992. Piscina (de novembro a março) e academia incluídas na estadia. A partir de R$ 150 por noite. Reserva pelo WhatsApp.",
};

const MAPA_EMBED =
  "https://www.google.com/maps?q=Clube+1992,+Av.+Flores+da+Cunha,+3211+-+Gl%C3%B3ria,+Carazinho+-+RS&output=embed";

const porQue = [
  {
    titulo: "Piscina e academia incluídas",
    texto: "A piscina de novembro a março e a academia de segunda a sábado, sem custo extra.",
    src: "/img/site/pool-sunset.webp",
    alt: "Piscina do clube no fim da tarde",
  },
  {
    titulo: "Uma cabana só sua",
    texto:
      "Ar-condicionado, cozinha, banheiro privativo, Wi‑Fi, Smart TV, toalhas e estacionamento gratuito.",
    src: "/img/cabanas/c4/2.webp",
    alt: "Interior de uma cabana com cama de casal e cozinha",
  },
  {
    titulo: "Quiosques e churrasco",
    texto: "Use os quiosques e a área de churrasco do clube durante a estadia.",
    src: "/img/site/hut-shadow.webp",
    alt: "Quiosque de madeira com churrasqueira",
  },
];

const piscinaFotos = [
  { src: "/img/site/pool-day.webp", alt: "Piscina com palmeiras sob o sol", legenda: "De manhã" },
  { src: "/img/site/pool-sunset.webp", alt: "Piscina com ilha de palmeira no pôr do sol", legenda: "No fim da tarde" },
  { src: "/img/site/pool-night.webp", alt: "Piscina iluminada de azul à noite, com o 1992 no fundo", legenda: "À noite" },
];

const passos = [
  "Clique no botão e informe as datas.",
  "Confirme a disponibilidade e o valor.",
  "Pague por Pix (envie o comprovante no WhatsApp) ou por cartão na secretaria do clube.",
];

const faq = [
  { p: "Aceita animais?", r: "Sim." },
  { p: "E crianças?", r: "Colchão no chão para até 2 crianças da família, sem custo extra." },
  { p: "A piscina funciona o ano todo?", r: "Não, de novembro a março." },
  { p: "Check-in e check-out?", r: "A partir das 14h e até as 12h." },
  { p: "Cancelamento?", r: "Pagamento integral para reservar, sem reembolso." },
  { p: "Estadia mínima?", r: "1 noite." },
];

const SECTIONS = [
  { id: "topo", label: "Início" },
  { id: "por-que", label: "Por que ficar" },
  { id: "cabanas", label: "As 5 cabanas" },
  { id: "piscina-academia", label: "Piscina e academia" },
  { id: "reservar", label: "Como reservar" },
  { id: "perguntas", label: "Perguntas" },
  { id: "localizacao", label: "Localização" },
];

const btnGold =
  "rounded-full bg-gold px-7 py-4 text-center font-semibold text-ink transition-colors hover:bg-bone";

export default function CabanasPage() {
  return (
    <main className="pb-24 lg:pb-0">
      {/* 1. TOPO */}
      <section id="topo" className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-12 md:px-8 md:pt-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold">Hospedagem no Clube 1992</p>
            <h1
              data-split
              className="mt-3 font-display text-6xl font-black uppercase leading-[0.86] md:text-8xl"
            >
              Cabanas com piscina e academia em Carazinho
            </h1>
            <p data-fade className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">
              Durma dentro do Clube 1992. Piscina (de novembro a março) e
              academia incluídas na estadia.
            </p>
            {hospedagem.precoAPartirDe !== null && (
              <p data-fade className="mt-6">
                <span className="text-bone/60">A partir de </span>
                <span className="font-display text-5xl font-black">
                  {formatPreco(hospedagem.precoAPartirDe)}
                </span>
                <span className="text-bone/60"> por noite</span>
              </p>
            )}
            <div data-fade className="mt-8">
              <ReservarLink magnetic className={`inline-block ${btnGold}`}>
                Reservar pelo WhatsApp
              </ReservarLink>
            </div>
          </div>
          <div className="relative pb-10 pl-10 lg:col-span-5 lg:pl-0">
            <Photo
              src="/img/site/pool-day.webp"
              alt="Piscina do Clube 1992 com palmeiras em um dia de sol"
              className="aspect-[4/5] rounded-[1.25rem]"
              sizes="(min-width: 1024px) 38vw, 90vw"
              priority
              parallax
            />
            <div className="absolute bottom-0 left-0 w-[42%] rounded-[1rem] border-4 border-ink lg:-left-10">
              <Photo
                src="/img/cabanas/c5/1.webp"
                alt="Interior da Cabana 5, em madeira, com mesa de jantar"
                className="aspect-[4/5] rounded-[0.75rem]"
                sizes="(min-width: 1024px) 16vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. POR QUE FICAR AQUI */}
      <section id="por-que" className="bg-bone text-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 data-split className="font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:col-span-6">
              Por que ficar aqui
            </h2>
            <p data-fade className="leading-relaxed text-ink/70 lg:col-span-6">
              {DESCRICAO_BASE}
            </p>
          </div>
          <div className="mt-12 grid gap-x-4 gap-y-10 md:grid-cols-3">
            {porQue.map((p, i) => (
              <figure key={p.titulo}>
                <Photo src={p.src} alt={p.alt} className="aspect-[4/3] rounded-[1rem]" sizes="(min-width: 768px) 33vw, 100vw" />
                <figcaption className="mt-5 flex gap-4">
                  <span className="font-display text-xl font-black text-gold-dark">0{i + 1}</span>
                  <span>
                    <span className="block font-display text-3xl font-extrabold uppercase leading-none">{p.titulo}</span>
                    <span className="mt-2 block text-ink/70">{p.texto}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AS 5 CABANAS */}
      <section id="cabanas" className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 data-split className="font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
              As 5 cabanas
            </h2>
            <p className="text-bone/60">Todas para 2 pessoas · mesmo valor nas cinco</p>
          </div>
          <Cabanas />
        </div>
      </section>

      {/* 4. PISCINA E ACADEMIA */}
      <section id="piscina-academia" className="overflow-hidden bg-coal">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 pt-20 md:px-8 md:pt-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="eyebrow text-gold">Incluído na estadia</p>
            <h2 data-split className="mt-3 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
              Piscina e academia
            </h2>
          </div>
          <p data-fade className="leading-relaxed text-bone/75 lg:col-span-6">
            {TEXTO_PISCINA_ACADEMIA}
          </p>
        </div>

        <div className="snap-gallery mt-12 flex gap-3 overflow-x-auto scroll-px-5 px-5 md:grid md:grid-cols-3 md:overflow-visible md:px-8 lg:mx-auto lg:max-w-7xl">
          {piscinaFotos.map((f, i) => (
            <figure key={f.src} className={`w-[80vw] shrink-0 md:w-auto ${i === 1 ? "md:translate-y-12" : ""}`}>
              <Photo
                src={f.src}
                alt={f.alt}
                className="aspect-[3/4] rounded-[1.25rem]"
                sizes="(min-width: 768px) 33vw, 80vw"
                parallax
              />
              <figcaption className="eyebrow mt-3 text-bone/55">{f.legenda}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Photo
              src="/img/site/gym-lion.webp"
              alt="Área de musculação da academia do clube"
              className="aspect-[4/5] rounded-[1.25rem]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:self-center">
            <table className="w-full border-t border-white/15 text-left">
              <caption className="sr-only">Horários da piscina e da academia</caption>
              <thead>
                <tr className="eyebrow text-bone/50">
                  <th className="py-4 pr-4 font-semibold">Área</th>
                  <th className="py-4 pr-4 font-semibold">Quando</th>
                  <th className="hidden py-4 font-semibold sm:table-cell">Observação</th>
                </tr>
              </thead>
              <tbody>
                {horariosAreas.map((h) => (
                  <tr key={h.area + h.quando} data-fade className="border-t border-white/15 align-top">
                    <th scope="row" className="py-5 pr-4 font-display text-2xl font-extrabold uppercase leading-none">
                      {h.area}
                    </th>
                    <td className="py-5 pr-4 text-bone/85">
                      {h.quando}
                      <span className="mt-1 block text-sm text-bone/50 sm:hidden">{h.obs}</span>
                    </td>
                    <td className="hidden py-5 text-sm text-bone/60 sm:table-cell">{h.obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. COMO RESERVAR */}
      <section id="reservar" className="bg-gold text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-ink/60">Como reservar</p>
            <h2 data-split className="mt-3 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
              Três passos, direto com o clube.
            </h2>
            <ReservarLink
              magnetic
              className="mt-10 inline-block rounded-full bg-ink px-8 py-4 font-semibold text-bone transition-colors hover:bg-coal"
            >
              Reservar pelo WhatsApp
            </ReservarLink>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ol className="space-y-6">
              {passos.map((p, i) => (
                <li key={p} data-fade className="flex gap-5 border-b border-ink/20 pb-6">
                  <span className="font-display text-4xl font-black leading-none">0{i + 1}</span>
                  <span className="pt-1 text-lg leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
            <p data-fade className="mt-6 font-semibold">A reserva é confirmada com o pagamento.</p>
          </div>
        </div>
      </section>

      {/* 6. PERGUNTAS FREQUENTES */}
      <section id="perguntas" className="bg-bone text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
          <h2 data-split className="font-display text-5xl font-black uppercase leading-[0.9] md:text-6xl lg:col-span-5">
            Perguntas frequentes
          </h2>
          <div className="border-t border-ink/15 lg:col-span-7">
            {faq.map((f) => (
              <details key={f.p} data-fade className="group border-b border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold">
                  {f.p}
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/25 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-lg leading-relaxed text-ink/75">{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="eyebrow text-gold">Localização</p>
            <h2 data-split className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] md:text-6xl">
              No Glória, em Carazinho
            </h2>
            <p data-fade className="mt-6 text-lg leading-relaxed text-bone/80">{ADDRESS}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 font-semibold underline decoration-gold decoration-2 underline-offset-8 hover:text-gold"
            >
              Abrir no Google Maps <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] border border-white/10 lg:col-span-8">
            <iframe
              title="Mapa: Clube 1992, Av. Flores da Cunha, 3211, Carazinho"
              src={MAPA_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] w-full grayscale-[35%] md:aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* 8. BOTÃO FIXO NO CELULAR */}
      <div className="sticky-reservar fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 p-3 backdrop-blur lg:hidden">
        <ReservarLink className="block rounded-full bg-gold py-4 text-center font-semibold text-ink">
          Reservar pelo WhatsApp
        </ReservarLink>
      </div>

      <HomeMotion sections={SECTIONS} />
    </main>
  );
}

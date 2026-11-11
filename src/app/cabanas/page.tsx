import type { Metadata } from "next";
import Cabanas from "../components/cabanas";
import Photo from "../components/photo";
import HomeMotion from "../components/motion/homeMotion";
import ReservarLink from "../components/reservarLink";
import {
  ADDRESS,
  DESCRICAO_BASE,
  FRASE_BASE,
  MAPS_URL,
  TEXTO_PISCINA_ACADEMIA,
  formatPreco,
  horariosAreas,
  hospedagem,
  regrasHospedagem,
} from "../data/club";

export const metadata: Metadata = {
  title: "Cabanas no Clube 1992 · Piscina e academia para hóspedes em Carazinho",
  description: `${FRASE_BASE} Diária a partir de R$ 150. Reserva pelo WhatsApp.`,
};

const destaques = [
  { titulo: "Piscina inclusa", texto: "De novembro a março" },
  { titulo: "Academia inclusa", texto: "Segunda a sábado" },
  { titulo: "Aceita animais", texto: "Traga seu pet" },
  { titulo: "Wi‑Fi, ar e Smart TV", texto: "Em todas as cabanas" },
];

const passos = [
  "Escolha a cabana e veja as fotos.",
  "Chame o clube no WhatsApp com as datas de entrada e saída e o número de pessoas.",
  "Para garantir a data, pague o valor integral por Pix ou cartão na secretaria do clube.",
];

const SECTIONS = [
  { id: "topo", label: "Cabanas" },
  { id: "cabanas", label: "Fotos" },
  { id: "piscina-academia", label: "Piscina e academia" },
  { id: "regras", label: "Regras" },
  { id: "reservar", label: "Reservar" },
];

const btnGold =
  "rounded-full bg-gold px-7 py-4 text-center font-semibold text-ink transition-colors hover:bg-bone";

export default function CabanasPage() {
  return (
    <main>
      {/* TOPO */}
      <section id="topo" className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 md:px-8 md:pt-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold">Hospedagem · Carazinho/RS</p>
            <h1
              data-split
              className="mt-3 font-display text-6xl font-black uppercase leading-[0.86] md:text-8xl"
            >
              Cabanas dentro do Clube 1992.
            </h1>
            <p data-fade className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">
              {FRASE_BASE} Cada cabana comporta 2 pessoas, e famílias podem
              acrescentar colchão para até 2 crianças sem custo extra.
            </p>
            {hospedagem.precoAPartirDe !== null && (
              <p data-fade className="mt-6">
                <span className="text-bone/60">a partir de </span>
                <span className="font-display text-5xl font-black">
                  {formatPreco(hospedagem.precoAPartirDe)}
                </span>
                <span className="text-bone/60"> por noite</span>
                <span className="mt-1 block text-sm text-bone/50">
                  {formatPreco(hospedagem.diaria1)} para 1 pessoa · {formatPreco(hospedagem.diaria2)} para 2 pessoas
                </span>
              </p>
            )}
            <div data-fade className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ReservarLink magnetic className={btnGold}>
                Ver disponibilidade no WhatsApp
              </ReservarLink>
              <a
                href="#cabanas"
                className="rounded-full border border-bone/40 px-7 py-4 text-center font-semibold transition-colors hover:border-gold hover:text-gold"
              >
                Ver as cinco cabanas
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            <Photo
              src="/img/site/pool-night.webp"
              alt="Piscina iluminada à noite, ao lado das cabanas"
              className="aspect-[3/4]"
              sizes="(min-width: 1024px) 20vw, 50vw"
              priority
            />
            <Photo
              src="/img/cabanas/c5/1.webp"
              alt="Interior da Cabana 5, em madeira, com mesa de jantar"
              className="aspect-[3/4] translate-y-8"
              sizes="(min-width: 1024px) 20vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <dl className="grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
            {destaques.map((d) => (
              <div key={d.titulo} data-fade className="py-6 pr-4">
                <dt className="font-display text-2xl font-extrabold uppercase leading-none md:text-3xl">
                  {d.titulo}
                </dt>
                <dd className="mt-1 text-sm text-bone/60">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CABANAS (galeria completa) */}
      <section id="cabanas" className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p data-fade className="mb-12 max-w-3xl text-lg leading-relaxed text-bone/75">
            {DESCRICAO_BASE}
          </p>
          <Cabanas />
        </div>
      </section>

      {/* PISCINA E ACADEMIA */}
      <section id="piscina-academia" className="bg-coal">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold">Incluso na estadia</p>
            <h2 data-split className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Piscina e academia
            </h2>
            <p data-fade className="mt-6 leading-relaxed text-bone/75">
              {TEXTO_PISCINA_ACADEMIA}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Photo
                src="/img/site/pool-day.webp"
                alt="Piscina do clube em dia de sol"
                className="aspect-square"
                sizes="(min-width: 1024px) 18vw, 50vw"
              />
              <Photo
                src="/img/site/gym-lion.webp"
                alt="Academia do clube"
                className="aspect-square"
                sizes="(min-width: 1024px) 18vw, 50vw"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
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

      {/* REGRAS */}
      <section id="regras" className="bg-bone text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold-dark">Antes de reservar</p>
            <h2 data-split className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] md:text-6xl">
              Regras da hospedagem
            </h2>
          </div>
          <dl className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
            {regrasHospedagem.map((r) => (
              <div
                key={r.rotulo}
                data-fade
                className="grid gap-1 border-b border-ink/15 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="eyebrow text-ink/55 sm:pt-1">{r.rotulo}</dt>
                <dd className="text-lg leading-relaxed">{r.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* COMO RESERVAR */}
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
              Ver disponibilidade no WhatsApp
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
            <p data-fade className="mt-8 text-sm leading-relaxed text-ink/70">
              Onde fica: {ADDRESS}.{" "}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                Como chegar ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <HomeMotion sections={SECTIONS} />
    </main>
  );
}

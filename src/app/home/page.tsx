import Image from "next/image";
import Link from "next/link";
import Photo from "../components/photo";
import ReservarLink from "../components/reservarLink";
import HomeMotion from "../components/motion/homeMotion";
import Diretoria from "../components/diretoria";
import { PlacasFiliacao, SeloFiliacao } from "../components/filiacoes";
import {
  ESTADIO_MATERIA_URL,
  alojamentoItens,
  alojamentos,
  FRASE_BASE,
  cabanas,
  formatPreco,
  hospedagem,
  estadioFatos,
  estadioFotos,
  teamStructure,
  whatsapp,
} from "../data/club";

const ASSOCIE = whatsapp("Olá! Quero saber como me associar ao Clube 1992.");
const VISITA = whatsapp("Olá! Quero agendar o dia grátis para conhecer o Clube 1992.");

const poolTimes = [
  {
    label: "De manhã",
    src: "/img/site/pool-day.webp",
    alt: "Piscina do clube com palmeiras em um dia de sol",
  },
  {
    label: "No fim da tarde",
    src: "/img/site/pool-sunset.webp",
    alt: "Piscina com ilha de palmeira sob o pôr do sol",
  },
  {
    label: "À noite",
    src: "/img/site/pool-night.webp",
    alt: "Piscina iluminada de azul à noite, com o 1992 desenhado no fundo",
  },
];

const moreAreas = [
  {
    n: "03",
    title: "Quadras de society",
    text: "Quadras abertas e fechadas, com iluminação para jogar à noite.",
    src: "/img/site/football-field.webp",
    alt: "Quadra de society iluminada à noite",
  },
  {
    n: "04",
    title: "Beach tennis",
    text: "Quadras de areia para jogar o ano todo.",
    src: "/img/site/beach-tennis.webp",
    alt: "Jogadora sacando no beach tennis",
  },
  {
    n: "05",
    title: "Quiosques e churrasqueiras",
    text: "Espaços cobertos com churrasqueira para reunir a família.",
    src: "/img/site/hut-shadow.webp",
    alt: "Quiosque de madeira com churrasqueira",
  },
  {
    n: "06",
    title: "Área verde",
    text: "Bosque com mesas e caminho de pedra, à sombra das árvores.",
    src: "/img/site/shadow-nature.webp",
    alt: "Área verde com árvores, mesas e churrasqueira",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div data-hero-img-wrap className="absolute inset-0">
          <Image
            data-hero-img
            src="/img/site/pool.webp"
            alt="Piscina do Clube 1992 vista de cima, com o número 1992 no fundo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink/70 to-transparent md:w-2/3" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
          <p data-hero-fade className="eyebrow text-gold">Carazinho · RS</p>
          <h1 data-hero-title className="mt-3 font-display text-[22vw] font-black uppercase leading-[0.82] tracking-tight md:text-[11rem]">
            Clube
            <br />
            1992
          </h1>
          <div data-hero-copy>
          <p data-hero-fade className="mt-6 max-w-xl text-lg leading-relaxed text-bone/85 md:text-xl">
            Piscinas, academia e quadras para a família. Futebol de base
            federado. E cinco cabanas para você dormir dentro do clube.
          </p>
          <div data-hero-fade className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              data-magnetic
              href="#cabanas"
              className="rounded-full bg-gold px-7 py-4 text-center font-semibold text-ink hover:bg-bone transition-colors"
            >
              Conhecer as cabanas
            </a>
            <a
              data-magnetic
              href={ASSOCIE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-bone/40 px-7 py-4 text-center font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              Associe-se
            </a>
          </div>
          <SeloFiliacao className="mt-10 md:hidden" />
          </div>
        </div>
        <div data-hero-fade className="absolute bottom-36 right-8 hidden md:block lg:right-12">
          <SeloFiliacao grande />
        </div>
      </section>

      {/* FRASE GIGANTE (corre na horizontal com a seção travada) */}
      <section data-marquee className="marquee flex items-center overflow-hidden bg-bone text-ink">
        <p className="eyebrow absolute left-5 top-24 text-gold-dark md:left-8">Os fundos do clube</p>
        <h2
          data-marquee-track
          className="marquee-track px-5 font-display font-black uppercase md:px-[10vw]"
        >
          Atrás da sede tem piscina<span className="text-gold-dark">.</span> E tem onde dormir
          <span className="text-gold-dark">.</span>
        </h2>
      </section>

      {/* OS FUNDOS DO CLUBE */}
      <section id="clube" className="bg-bone text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 data-split className="font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Dormir a poucos passos da água.
            </h2>
            <p data-fade className="mt-6 text-lg leading-relaxed text-ink/75">
              Passando a sede social, a parte de trás do 1992 guarda as
              piscinas e as nossas cinco cabanas. Quem se hospeda dorme a
              poucos passos da água e usa a piscina e a academia do clube
              durante a estadia.
            </p>

            <dl data-fade className="mt-10 grid grid-cols-3 border-t border-ink/15 pt-6">
              <div>
                <dt className="eyebrow text-ink/50">Cabanas</dt>
                <dd data-count="5" data-pad="2" className="font-display text-5xl font-black tabular-nums">05</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/50">Piscina</dt>
                <dd className="mt-2 text-sm leading-snug">Liberada para hóspedes de novembro a março</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/50">Academia</dt>
                <dd className="mt-2 text-sm leading-snug">Aberta para hóspedes</dd>
              </div>
            </dl>

            <a
              href="#cabanas"
              className="mt-10 inline-flex items-center gap-3 font-semibold underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-dark"
            >
              Ver as cinco cabanas <span aria-hidden>↓</span>
            </a>
          </div>

          <div className="grid grid-cols-6 gap-3 lg:col-span-7">
            <Photo
              src="/img/site/shadow-dark.webp"
              alt="Piscinas e gramado do clube iluminados à noite"
              className="col-span-6 aspect-[16/10]"
              parallax
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <Photo
              src="/img/cabanas/c5/1.webp"
              alt="Interior da Cabana 5, em madeira"
              className="col-span-3 aspect-square"
              sizes="(min-width: 1024px) 28vw, 50vw"
            />
            <Photo
              src="/img/site/pool-night-house.webp"
              alt="Piscina iluminada à noite, com palmeiras e a casa ao fundo"
              className="col-span-3 aspect-square"
              sizes="(min-width: 1024px) 28vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* CABANAS */}
      <section id="cabanas" data-card className="relative z-[1] -mt-10 rounded-t-[2rem] bg-ink md:-mt-14 md:rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-gold">Hospedagem</p>
              <h2 data-split className="mt-3 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
                Durma no clube.
              </h2>
            </div>
            <p data-fade className="text-bone/70 leading-relaxed md:col-span-5">
              {FRASE_BASE} Cinco cabanas para 2 pessoas, ao lado das piscinas,
              com cozinha, banheiro privativo, Wi‑Fi e ar-condicionado.
              {hospedagem.precoAPartirDe !== null && (
                <span className="mt-3 block text-bone">
                  Diária a partir de{" "}
                  <strong className="font-display text-2xl font-black">
                    {formatPreco(hospedagem.precoAPartirDe)}
                  </strong>
                </span>
              )}
              <span className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-gold/60 px-3 py-1 text-sm text-gold">
                  Piscina inclusa · novembro a março
                </span>
                <span className="rounded-full border border-gold/60 px-3 py-1 text-sm text-gold">
                  Academia inclusa
                </span>
              </span>
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5">
            {cabanas.map((c, i) => (
              <Link
                key={c.id}
                href={`/cabanas#cabana-${i + 1}`}
                className={`group relative block ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <Photo
                  src={c.photos[0]}
                  alt={`${c.name}, estilo ${c.style.toLowerCase()}`}
                  className="aspect-[4/3] md:aspect-[3/4]"
                  sizes="(min-width: 768px) 20vw, 50vw"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                  <span className="block font-display text-4xl font-black leading-none">{c.id}</span>
                  <span className="eyebrow mt-1 block text-bone/70">{c.style}</span>
                </span>
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden>
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              data-magnetic
              href="/cabanas"
              className="rounded-full bg-gold px-7 py-4 text-center font-semibold text-ink transition-colors hover:bg-bone"
            >
              Fotos, regras e reserva das cabanas
            </Link>
            <ReservarLink className="rounded-full border border-bone/40 px-7 py-4 text-center font-semibold transition-colors hover:border-gold hover:text-gold">
              Ver disponibilidade no WhatsApp
            </ReservarLink>
          </div>
        </div>
      </section>

      {/* ESTRUTURA / CLUBE SOCIAL */}
      <section id="estrutura" data-card className="relative z-[2] -mt-10 overflow-hidden rounded-t-[2rem] bg-bone text-ink md:-mt-14 md:rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold-dark">Clube social</p>
            <h2 data-split className="mt-3 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
              Um fim de semana inteiro sem sair daqui.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="flex gap-4 md:col-span-5">
              <span className="font-display text-xl font-black text-gold-dark">01</span>
              <div>
                <h3 className="font-display text-4xl font-extrabold uppercase leading-none">Piscinas</h3>
                <p data-fade className="mt-3 text-ink/70">
                  Piscina principal com ilhas de palmeira, piscinas menores ao
                  lado e o 1992 desenhado no fundo. Aberta de novembro a março.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {poolTimes.map((p, i) => (
              <figure key={p.label} className={i === 1 ? "sm:translate-y-12" : ""}>
                <Photo
                  src={p.src}
                  alt={p.alt}
                  className="aspect-[3/4]"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  parallax
                />
                <figcaption className="eyebrow mt-3 text-ink/55">{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Academia */}
        <div className="bg-coal text-bone">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:py-6">
              <span className="font-display text-xl font-black text-gold">02</span>
              <h3 data-split className="mt-2 font-display text-6xl font-black uppercase leading-[0.88] md:text-7xl">
                Academia
              </h3>
              <p data-fade className="mt-6 text-bone/75 leading-relaxed">
                Musculação e cardio: anilhas, máquinas, fileira de esteiras e
                professor acompanhando. Aberta para sócios e para quem está
                hospedado nas cabanas.
              </p>
              <a
                href={whatsapp("Olá! Quero saber os horários e planos da academia do Clube 1992.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 font-semibold underline decoration-gold decoration-2 underline-offset-8 hover:text-gold"
              >
                Horários e planos da academia <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:col-span-8">
              <Photo
                src="/img/site/gym-lion.webp"
                alt="Área de musculação com anilhas coloridas, painel de leão e luzes de LED"
                className="aspect-[3/4]"
                sizes="(min-width: 1024px) 30vw, 50vw"
                parallax
              />
              <Photo
                src="/img/site/gym-cardio.webp"
                alt="Fileira de esteiras da academia"
                className="aspect-[3/4] translate-y-10"
                sizes="(min-width: 1024px) 30vw, 50vw"
                parallax
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {moreAreas.map((a) => (
              <figure key={a.n}>
                <Photo src={a.src} alt={a.alt} className="aspect-[4/5]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <figcaption className="mt-4">
                  <span className="font-display text-lg font-black text-gold-dark">{a.n}</span>
                  <span className="mt-1 block font-display text-2xl font-extrabold uppercase leading-none">
                    {a.title}
                  </span>
                  <span className="mt-2 block text-sm text-ink/70">{a.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FUTEBOL */}
      <section id="futebol" data-card className="relative z-[3] -mt-10 overflow-hidden rounded-t-[2rem] bg-ink md:-mt-14 md:rounded-t-[3rem]">
        <div className="relative overflow-hidden">
          <Image
            src="/img/site/team-soccer.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink" />
          <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pt-40">
            <p className="eyebrow text-gold">Departamento de futebol</p>
            <h2 data-scatter className="mt-3 max-w-4xl font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
              O 1992 também forma atletas.
            </h2>
            <p data-fade className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/80">
              Além do clube social, o 1992 tem escolinha e categorias de base
              que disputam competições oficiais. Somos filiados à Federação
              Gaúcha de Futebol e registrados na CBF.
            </p>

            <div data-fade className="mt-10">
              <PlacasFiliacao />
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
              <div>
                <dd data-count="300" data-prefix="+" className="font-display text-6xl font-black leading-none tabular-nums">+300</dd>
                <dt className="eyebrow mt-2 text-bone/50">Crianças na escolinha</dt>
              </div>
              <div>
                <dd data-count="10" className="font-display text-6xl font-black leading-none tabular-nums">10</dd>
                <dt className="eyebrow mt-2 text-bone/50">Instrutores</dt>
              </div>
            </dl>
          </div>
        </div>

        {/* Mascotes */}
        <div className="mx-auto max-w-5xl px-5 pb-16 md:px-8">
          <Photo
            src="/img/site/mascots.webp"
            alt="Os três macacos mascotes do 1992 com o escudo e a frase De Carazinho para o Mundo"
            className="aspect-[1245/862] rounded-[1.5rem]"
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="grid gap-x-3 gap-y-10 md:grid-cols-3">
            {teamStructure.map((item) => (
              <figure key={item.title}>
                {item.photo ? (
                  <Photo src={item.photo} alt={item.title} className="aspect-[4/3]" sizes="(min-width: 768px) 33vw, 100vw" />
                ) : (
                  <div className="photo-pending grid aspect-[4/3] place-items-center border border-white/10">
                    <span className="eyebrow text-bone/40">Foto em breve</span>
                  </div>
                )}
                <figcaption className="mt-4">
                  <span className="block font-display text-3xl font-extrabold uppercase leading-none">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-bone/65">{item.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Alojamentos */}
        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-20 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold">Moradia dos atletas</p>
              <h3 data-split className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                Seis dormitórios dentro do clube.
              </h3>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p data-fade className="leading-relaxed text-bone/75">
                Todos os atletas recebem roupa de cama, colchão, toalhas de
                banho e de rosto, fornecidos pelo clube sem custo.
              </p>
              <ul data-fade className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-bone/80 sm:grid-cols-2">
                {alojamentoItens.map((item) => (
                  <li key={item} className="flex items-baseline gap-2">
                    <span className="h-1 w-1 shrink-0 translate-y-[-2px] bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="snap-gallery mt-12 flex gap-3 overflow-x-auto scroll-px-5 px-5 pb-24 md:scroll-px-8 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
            aria-label="Fotos dos dormitórios"
          >
            {alojamentos.map((a) => (
              <figure key={a.src} className="w-[78vw] shrink-0 sm:w-[24rem]">
                <Photo src={a.src} alt={a.alt} className="aspect-[16/9]" sizes="(min-width: 640px) 384px, 78vw" />
                <figcaption className="eyebrow mt-3 text-bone/50">Dormitório {a.dorm}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ESTÁDIO */}
      <section id="estadio" data-card className="relative z-[4] -mt-10 overflow-hidden rounded-t-[2rem] bg-coal md:-mt-14 md:rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold">Projeto · Estádio Orides Bordin</p>
              <h2 data-split className="mt-3 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
                O próximo passo é a nossa casa.
              </h2>
            </div>
            <p data-fade className="leading-relaxed text-bone/75 lg:col-span-5">
              O 1992 vai construir o próprio estádio na ERS-142, a 5 km do
              trevo do Avião de Carazinho e a 10 minutos de Não-Me-Toque.
              Multiuso, para jogos e grandes eventos, com estacionamento na
              frente e iluminação de padrão internacional. A terraplanagem do
              terreno já começou.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Photo
            src="/img/estadio/arquibancada.webp"
            alt="Render da arquibancada do Estádio Orides Bordin com o 1992 desenhado nas cadeiras e o gramado em primeiro plano"
            className="aspect-[16/9] md:aspect-[1280/388]"
            sizes="100vw"
            parallax
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <dl className="grid grid-cols-2 border-b border-white/10 md:grid-cols-4">
            {estadioFatos.map((f) => (
              <div key={f.rotulo} data-fade className="border-t border-white/10 py-8 pr-4 md:border-t-0">
                <dd className="font-display text-5xl font-black leading-none md:text-6xl">{f.valor}</dd>
                <dt className="mt-2 text-sm text-bone/60">{f.rotulo}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {estadioFotos.map((f) => (
              <figure key={f.src}>
                <Photo src={f.src} alt={f.alt} className="aspect-square" sizes="(min-width: 768px) 25vw, 50vw" />
                <figcaption className="eyebrow mt-3 text-bone/50">{f.legenda}</figcaption>
              </figure>
            ))}
          </div>

          <div className="grid gap-8 py-20 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h3 className="font-display text-4xl font-black uppercase leading-none md:text-5xl">
                Sua empresa pode construir junto.
              </h3>
              <p data-fade className="mt-4 max-w-xl leading-relaxed text-bone/75">
                O projeto está vinculado ao governo: empresas e empresários que
                apoiam a obra podem abater o valor no Imposto de Renda e no ICMS.
              </p>
              <p className="mt-6 text-xs text-bone/40">
                Imagens ilustrativas do projeto. Informações divulgadas pelo{" "}
                <a href={ESTADIO_MATERIA_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                  Peleia FC
                </a>{" "}
                em dezembro de 2023.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                data-magnetic
                href={whatsapp("Olá! Tenho interesse em apoiar a construção do Estádio Orides Bordin.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gold px-8 py-4 text-center font-semibold text-ink transition-colors hover:bg-bone"
              >
                Quero apoiar o estádio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIRETORIA */}
      <section id="diretoria" data-card className="relative z-[5] -mt-10 rounded-t-[2rem] bg-bone text-ink md:-mt-14 md:rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Diretoria tone="light" />
        </div>
      </section>

      {/* ASSOCIE-SE */}
      <section id="associe" data-card className="relative z-[6] -mt-10 rounded-t-[2rem] bg-gold text-ink md:-mt-14 md:rounded-t-[3rem]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-ink/60">Seja sócio</p>
            <h2 data-split className="mt-3 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
              Passe um dia aqui antes de decidir.
            </h2>
            <p data-fade className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
              Você conhece o clube por um dia, sem pagar nada. Gostou, a gente
              conversa sobre os planos. Não precisa comprar cota e tem plano
              de 6 meses para a família.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                data-magnetic
                href={VISITA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-7 py-4 text-center font-semibold text-bone hover:bg-coal transition-colors"
              >
                Agendar meu dia grátis
              </a>
              <a
                data-magnetic
                href={ASSOCIE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink/40 px-7 py-4 text-center font-semibold hover:border-ink transition-colors"
              >
                Ver planos de sócio
              </a>
            </div>
          </div>

          <div className="space-y-10 lg:col-span-5 lg:col-start-8 lg:pt-4">
            <blockquote data-fade className="border-l-2 border-ink pl-6">
              <p className="text-lg leading-relaxed">
                “Pequeno em área, mas com muitas atividades e atrações:
                quadras, piscinas, área de convivência. Frequento a academia,
                que é muito completa e ampla, professor atencioso. Vale a pena.”
              </p>
              <footer className="mt-4 text-sm font-semibold">
                Angela Viecieli Avila <span className="font-normal text-ink/60">· sócia</span>
              </footer>
            </blockquote>
            <blockquote data-fade className="border-l-2 border-ink pl-6">
              <p className="text-lg leading-relaxed">
                “Um ótimo lugar para levar a família, com muitas opções de
                lazer: academia, piscinas, churrasqueiras, quadra de esportes e
                muito mais.”
              </p>
              <footer className="mt-4 text-sm font-semibold">
                Márcio Clóvis <span className="font-normal text-ink/60">· sócio</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <HomeMotion />
    </main>
  );
}

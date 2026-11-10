import Image from "next/image";
import Cabanas from "../components/cabanas";
import HomeMotion from "../components/motion/homeMotion";
import {
  CBF_URL,
  FGF_URL,
  teamStructure,
  whatsapp,
} from "../data/club";

const ASSOCIE = whatsapp("Olá! Quero saber como me associar ao Clube 1992.");
const VISITA = whatsapp("Olá! Quero agendar o dia grátis para conhecer o Clube 1992.");

function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  parallax = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  parallax?: boolean;
}) {
  return (
    <div
      data-reveal
      data-parallax={parallax || undefined}
      className={`relative overflow-hidden bg-coal ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${parallax ? "scale-[1.16]" : ""}`}
      />
    </div>
  );
}

const areas = [
  {
    n: "01",
    title: "Piscinas",
    text: "Piscinas com ilhas de palmeira e quiosques em volta. A grande atração do verão em Carazinho.",
    src: "/img/site/pool-ligth.webp",
    alt: "Piscinas do clube durante o dia",
    span: "md:col-span-7",
    ratio: "aspect-[4/3] md:aspect-auto md:h-[30rem]",
  },
  {
    n: "02",
    title: "Piscina térmica",
    text: "Coberta e aquecida, para quem não espera o verão.",
    src: "/img/site/thermal-pool.webp",
    alt: "Piscina térmica coberta",
    span: "md:col-span-5",
    ratio: "aspect-[4/3] md:aspect-auto md:h-[30rem]",
  },
];

const moreAreas = [
  {
    n: "04",
    title: "Quadras de society",
    text: "Quadras abertas e fechadas, com iluminação para jogar à noite.",
    src: "/img/site/football-field.webp",
    alt: "Quadra de society iluminada à noite",
  },
  {
    n: "05",
    title: "Beach tennis",
    text: "Quadras de areia para jogar o ano todo.",
    src: "/img/site/beach-tennis.webp",
    alt: "Jogadora sacando no beach tennis",
  },
  {
    n: "06",
    title: "Quiosques e churrasqueiras",
    text: "Espaços cobertos com churrasqueira para reunir a família.",
    src: "/img/site/hut-shadow.webp",
    alt: "Quiosque de madeira com churrasqueira",
  },
  {
    n: "07",
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
          </div>
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
                <dd className="mt-2 text-sm leading-snug">Liberada para hóspedes no verão</dd>
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
              src="/img/site/pool-dark.webp"
              alt="Piscina com ilha de palmeira à noite"
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
              Cinco cabanas no fundo do clube, ao lado das piscinas. Cada uma
              tem cozinha, banheiro privativo e ar-condicionado. Durante a
              estadia, você usa a piscina e a academia do 1992.
              <span className="mt-3 block text-sm text-bone/50">
                A piscina funciona na temporada de verão.
              </span>
            </p>
          </div>

          <div className="mt-14">
            <Cabanas />
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

          <div className="mt-14 grid gap-3 md:grid-cols-12">
            {areas.map((a) => (
              <figure key={a.n} className={a.span}>
                <Photo src={a.src} alt={a.alt} className={a.ratio} sizes="(min-width: 768px) 60vw, 100vw" parallax />
                <figcaption className="mt-4 flex gap-4">
                  <span className="font-display text-xl font-black text-gold-dark">{a.n}</span>
                  <span>
                    <span className="block font-display text-3xl font-extrabold uppercase leading-none">
                      {a.title}
                    </span>
                    <span className="mt-2 block text-ink/70">{a.text}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Academia */}
        <div className="bg-coal text-bone">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:py-6">
              <span className="font-display text-xl font-black text-gold">03</span>
              <h3 data-split className="mt-2 font-display text-6xl font-black uppercase leading-[0.88] md:text-7xl">
                Academia
              </h3>
              <p data-fade className="mt-6 text-bone/75 leading-relaxed">
                Musculação completa, com halteres, anilhas, máquinas e
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
                src="/img/site/gym-center.webp"
                alt="Academia com halteres coloridos e as palavras Focus e Force na parede"
                className="col-span-2 aspect-[16/9]"
                parallax
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <Photo
                src="/img/site/gym-left.webp"
                alt="Estação de supino e anilhas da academia"
                className="aspect-[4/3]"
                sizes="(min-width: 1024px) 30vw, 50vw"
              />
              <Photo
                src="/img/site/gym-right.webp"
                alt="Aparelhos e espelhos da academia"
                className="aspect-[4/3]"
                sizes="(min-width: 1024px) 30vw, 50vw"
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

            <div data-fade className="mt-10 grid gap-3 sm:grid-cols-2 md:max-w-3xl">
              <a
                href={FGF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/15 bg-ink/60 p-5 hover:border-gold transition-colors"
              >
                <span>
                  <span className="block font-display text-4xl font-black leading-none">FGF</span>
                  <span className="mt-1 block text-sm text-bone/60">Federação Gaúcha de Futebol</span>
                </span>
                <span className="text-xl text-gold transition-transform group-hover:translate-x-1" aria-hidden>↗</span>
              </a>
              <a
                href={CBF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/15 bg-ink/60 p-5 hover:border-gold transition-colors"
              >
                <span>
                  <span className="block font-display text-4xl font-black leading-none">CBF</span>
                  <span className="mt-1 block text-sm text-bone/60">Confederação Brasileira de Futebol</span>
                </span>
                <span className="text-xl text-gold transition-transform group-hover:translate-x-1" aria-hidden>↗</span>
              </a>
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

        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
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
      </section>

      {/* ASSOCIE-SE */}
      <section id="associe" data-card className="relative z-[4] -mt-10 rounded-t-[2rem] bg-gold text-ink md:-mt-14 md:rounded-t-[3rem]">
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

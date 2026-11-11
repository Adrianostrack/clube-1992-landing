import { ATA_URL, diretoria, mandato } from "../data/club";

// Diretoria eleita e mandato vigente. Os dados ficam em data/club.ts.
export default function Diretoria({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  const muted = dark ? "text-bone/55" : "text-ink/55";
  const line = dark ? "border-white/15" : "border-ink/15";

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className={`eyebrow ${dark ? "text-gold" : "text-gold-dark"}`}>
          Gestão {mandato.inicio.slice(-4)}–{mandato.fim.slice(-4)}
        </p>
        <h2
          data-split
          className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl"
        >
          Diretoria eleita
        </h2>
        <p data-fade className={`mt-6 leading-relaxed ${dark ? "text-bone/75" : "text-ink/75"}`}>
          Mandato de {mandato.inicio} a {mandato.fim}, confirmado na{" "}
          {mandato.fonte}.
        </p>
        <a
          href={ATA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-3 font-semibold underline decoration-gold decoration-2 underline-offset-8 ${
            dark ? "hover:text-gold" : "hover:text-gold-dark"
          }`}
        >
          Ler a ata da assembleia (PDF) <span aria-hidden>↗</span>
        </a>
      </div>

      <dl className={`border-t ${line} lg:col-span-7 lg:col-start-6`}>
        {diretoria.map((m) => (
          <div
            key={m.cargo}
            data-fade
            className={`grid gap-1 border-b ${line} py-6 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-6`}
          >
            <dt className={`eyebrow ${muted}`}>{m.cargo}</dt>
            <dd className="font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">
              {m.nome}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

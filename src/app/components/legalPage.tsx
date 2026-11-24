import Link from "next/link";
import { CNPJ, POLITICAS_ATUALIZADAS_EM, RAZAO_SOCIAL } from "../data/club";

export type Secao = { titulo: string; conteudo: React.ReactNode };

// Layout comum da Política de Privacidade e dos Termos de Uso
export default function LegalPage({
  eyebrow,
  titulo,
  intro,
  secoes,
}: {
  eyebrow: string;
  titulo: string;
  intro: React.ReactNode;
  secoes: Secao[];
}) {
  return (
    <main className="bg-bone text-ink">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
        <p className="eyebrow text-ink/60">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl">
          {titulo}
        </h1>
        <p className="mt-4 text-sm text-ink/60">Última atualização: {POLITICAS_ATUALIZADAS_EM}.</p>
        <div className="mt-8 text-lg leading-relaxed text-ink/80">{intro}</div>

        <ol className="mt-12 space-y-10">
          {secoes.map((s, i) => (
            <li key={s.titulo}>
              <h2 className="font-display text-2xl font-extrabold uppercase md:text-3xl">
                {i + 1}. {s.titulo}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-ink/80">{s.conteudo}</div>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-ink/15 pt-6 text-sm text-ink/60">
          {RAZAO_SOCIAL && <p>{RAZAO_SOCIAL}</p>}
          {CNPJ && <p>CNPJ {CNPJ}</p>}
          <p className="mt-2">
            Veja também a{" "}
            <Link href="/privacidade" className="underline hover:text-ink">
              Política de Privacidade
            </Link>{" "}
            e os{" "}
            <Link href="/termos" className="underline hover:text-ink">
              Termos de Uso
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useEffect, useState } from "react";
import { type Origem, mensagemReserva, whatsapp } from "../data/club";

const KEY = "c1992-origem";

// Descobre de onde a pessoa veio (primeira página da visita) e guarda na sessão.
// Google Ads: gclid/gbraid/wbraid ou utm_source=google. Instagram/Meta: fbclid ou utm_source=ig/instagram/facebook/meta.
export function detectarOrigem(): Origem {
  try {
    const salvo = sessionStorage.getItem(KEY) as Origem | null;
    if (salvo) return salvo;
  } catch {}
  const p = new URLSearchParams(window.location.search);
  const src = (p.get("utm_source") || p.get("origem") || "").toLowerCase();
  let origem: Origem = "SITE";
  if (p.has("gclid") || p.has("gbraid") || p.has("wbraid") || /google|gads|adwords/.test(src)) origem = "GADS";
  else if (p.has("fbclid") || /^(ig|instagram|facebook|fb|meta)$/.test(src)) origem = "IG";
  try {
    sessionStorage.setItem(KEY, origem);
  } catch {}
  return origem;
}

export function useOrigem(): Origem {
  const [origem, setOrigem] = useState<Origem>("SITE");
  useEffect(() => setOrigem(detectarOrigem()), []);
  return origem;
}

// Botão/link de reserva com a mensagem padrão e o código de origem
export default function ReservarLink({
  cabana,
  className,
  children,
  magnetic,
}: {
  cabana?: number;
  className?: string;
  children: React.ReactNode;
  magnetic?: boolean;
}) {
  const origem = useOrigem();
  return (
    <a
      data-magnetic={magnetic || undefined}
      href={whatsapp(mensagemReserva(origem, cabana))}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

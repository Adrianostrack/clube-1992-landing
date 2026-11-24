import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/legalPage";
import { ADDRESS, CNPJ, EMAIL, NOME_ENTIDADE, WHATSAPP_DISPLAY } from "../data/club";

export const metadata: Metadata = {
  title: "Termos de Uso · Clube 1992",
  description: "Regras de uso do site do Clube 1992 e das reservas feitas por ele.",
};

export default function TermosPage() {
  return (
    <LegalPage
      eyebrow="Regras do site"
      titulo="Termos de Uso"
      intro={
        <p>
          Estes termos valem para quem usa o site clube1992.com.br, mantido
          pelo {NOME_ENTIDADE}
          {CNPJ ? `, CNPJ ${CNPJ},` : ""} com sede na {ADDRESS}. Ao navegar
          no site, você concorda com eles.
        </p>
      }
      secoes={[
        {
          titulo: "O que o site oferece",
          conteudo: (
            <p>
              O site apresenta o clube, a estrutura, o futebol de base, as
              cabanas e a diária da piscina, além dos documentos de
              transparência. As reservas e os pedidos de informação são feitos
              pelo WhatsApp {WHATSAPP_DISPLAY}; o site em si não vende nem
              cobra nada.
            </p>
          ),
        },
        {
          titulo: "Reservas das cabanas",
          conteudo: (
            <>
              <p>
                Preços, capacidade, horários de check-in e check-out e
                política de cancelamento estão na{" "}
                <Link href="/cabanas" className="underline">página das cabanas</Link>.
                A reserva só fica confirmada depois que o clube confirma a
                disponibilidade pelo WhatsApp e recebe o pagamento integral.
              </p>
              <p>
                Depois do pagamento não há reembolso. Valores e regras podem
                mudar; vale sempre o que foi combinado na conversa da sua
                reserva.
              </p>
            </>
          ),
        },
        {
          titulo: "Uso das áreas do clube",
          conteudo: (
            <p>
              Hóspedes e visitantes da diária da piscina seguem os horários e
              as regras de cada área (piscina, academia, quiosques). O clube
              pode pedir que saia da área quem não respeitar as regras, sem
              devolução de valores.
            </p>
          ),
        },
        {
          titulo: "Informações do site",
          conteudo: (
            <p>
              Fazemos o possível para manter as informações certas e
              atualizadas, mas fotos, horários e preços podem mudar sem aviso.
              Em caso de dúvida, confirme pelo WhatsApp antes de vir.
            </p>
          ),
        },
        {
          titulo: "Marca e conteúdo",
          conteudo: (
            <p>
              O nome, o escudo, as fotos e os textos do site pertencem ao
              {" "}{NOME_ENTIDADE} ou são usados com autorização. Não copie nem
              use esse conteúdo para fins comerciais sem autorização por
              escrito. Os escudos da CBF e da FGF pertencem às respectivas
              entidades.
            </p>
          ),
        },
        {
          titulo: "Links para outros sites",
          conteudo: (
            <p>
              O site tem links para WhatsApp, Google Maps, Instagram, CBF, FGF
              e outros. Esses serviços têm regras próprias, e o clube não
              responde pelo conteúdo deles.
            </p>
          ),
        },
        {
          titulo: "Privacidade",
          conteudo: (
            <p>
              O uso dos seus dados está explicado na{" "}
              <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
            </p>
          ),
        },
        {
          titulo: "Contato e foro",
          conteudo: (
            <p>
              Dúvidas sobre estes termos:{" "}
              <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
              Estes termos seguem a lei brasileira, e fica eleito o foro da
              comarca de Carazinho/RS.
            </p>
          ),
        },
      ]}
    />
  );
}

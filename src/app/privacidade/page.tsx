import type { Metadata } from "next";
import LegalPage from "../components/legalPage";
import { ADDRESS, CNPJ, EMAIL, NOME_ENTIDADE, WHATSAPP_DISPLAY } from "../data/club";

export const metadata: Metadata = {
  title: "Política de Privacidade · Clube 1992",
  description:
    "Como o Clube 1992 coleta, usa e protege os seus dados pessoais, de acordo com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <LegalPage
      eyebrow="LGPD"
      titulo="Política de Privacidade"
      intro={
        <p>
          Esta política explica quais dados pessoais o {NOME_ENTIDADE}
          {CNPJ ? `, inscrito no CNPJ ${CNPJ},` : ""} coleta quando você
          visita o site clube1992.com.br ou fala com a gente, para que usamos
          esses dados e quais são os seus direitos, conforme a Lei Geral de
          Proteção de Dados (Lei nº 13.709/2018).
        </p>
      }
      secoes={[
        {
          titulo: "Quem cuida dos seus dados",
          conteudo: (
            <p>
              O controlador dos dados é o {NOME_ENTIDADE}, com sede na {ADDRESS}.
              Para qualquer assunto de privacidade, fale com a gente pelo e-mail{" "}
              <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a> ou pelo
              WhatsApp {WHATSAPP_DISPLAY}.
            </p>
          ),
        },
        {
          titulo: "Quais dados coletamos",
          conteudo: (
            <>
              <p>
                <strong>Dados que você nos envia.</strong> O site não tem
                formulário de cadastro. Quando você clica em um botão de
                reserva ou de contato, abrimos uma conversa no WhatsApp. Nessa
                conversa recebemos seu nome, telefone e o que você escrever,
                como datas da estadia, número de hóspedes e comprovante de
                pagamento. Para hospedagem, podemos pedir também documento de
                identificação dos hóspedes, como exige a legislação de
                hospedagem.
              </p>
              <p>
                <strong>Dados de navegação.</strong> Usamos o Google Tag
                Manager, o Google Analytics e o Pixel da Meta (Facebook e
                Instagram) para medir as visitas e saber de onde elas vêm.
                Essas ferramentas registram, por exemplo, as páginas vistas, o
                tipo de aparelho e navegador, a cidade aproximada e os cliques
                nos botões do WhatsApp. Elas usam cookies e identificadores
                próprios do Google e da Meta.
              </p>
              <p>
                <strong>Armazenamento no seu navegador.</strong> O site guarda,
                só durante a visita, se a animação de abertura já foi exibida e
                de onde você chegou (site, anúncio do Google ou Instagram). Isso
                fica no seu navegador e é apagado quando você fecha a aba.
              </p>
            </>
          ),
        },
        {
          titulo: "Para que usamos os dados",
          conteudo: (
            <ul className="list-disc space-y-2 pl-5">
              <li>Responder seus contatos e fazer reservas das cabanas e da diária da piscina.</li>
              <li>Registrar hóspedes e pagamentos, como pede a lei.</li>
              <li>Atender sócios e responsáveis pelos atletas da escolinha.</li>
              <li>Entender como o site é usado e quais anúncios trazem visitas, para melhorar o site e a divulgação do clube.</li>
            </ul>
          ),
        },
        {
          titulo: "Bases legais",
          conteudo: (
            <p>
              Tratamos os dados para executar a reserva ou o serviço que você
              pediu, para cumprir obrigações legais (como o registro de
              hóspedes e a guarda de documentos fiscais e contábeis) e por
              legítimo interesse do clube em medir e divulgar suas atividades,
              sempre respeitando os seus direitos.
            </p>
          ),
        },
        {
          titulo: "Com quem compartilhamos",
          conteudo: (
            <>
              <p>Não vendemos dados pessoais. Eles passam apenas pelos serviços que usamos para funcionar:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>WhatsApp (Meta), onde acontecem as conversas.</li>
                <li>Kommo, sistema onde organizamos os atendimentos.</li>
                <li>Google (Tag Manager e Analytics) e Meta (Pixel), para medir visitas e anúncios.</li>
                <li>Contabilidade e órgãos públicos, quando a lei exigir.</li>
              </ul>
              <p>
                Alguns desses serviços guardam dados fora do Brasil. Nesses
                casos, a transferência segue as regras da LGPD.
              </p>
            </>
          ),
        },
        {
          titulo: "Por quanto tempo guardamos",
          conteudo: (
            <p>
              Guardamos as conversas e dados de reserva enquanto forem
              necessários para o atendimento e pelo prazo que a lei exigir
              para registros de hospedagem, fiscais e contábeis. Depois disso,
              os dados são apagados ou tornados anônimos.
            </p>
          ),
        },
        {
          titulo: "Seus direitos",
          conteudo: (
            <>
              <p>
                Você pode, a qualquer momento, pedir para confirmar se tratamos
                seus dados, acessar, corrigir, anonimizar ou apagar dados,
                saber com quem compartilhamos, revogar um consentimento e se
                opor a um tratamento. Basta escrever para{" "}
                <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
                Respondemos em até 15 dias.
              </p>
              <p>
                Você também pode reclamar à Autoridade Nacional de Proteção de
                Dados (ANPD), em gov.br/anpd.
              </p>
            </>
          ),
        },
        {
          titulo: "Cookies e como desativar",
          conteudo: (
            <p>
              Você pode bloquear ou apagar cookies nas configurações do seu
              navegador e limitar anúncios personalizados nas configurações da
              sua conta Google e da Meta. O site continua funcionando sem eles.
            </p>
          ),
        },
        {
          titulo: "Crianças e adolescentes",
          conteudo: (
            <p>
              O site não é feito para coletar dados de crianças. Dados de
              atletas menores de idade são tratados só com a autorização dos
              pais ou responsáveis e no interesse do próprio atleta.
            </p>
          ),
        },
        {
          titulo: "Segurança e mudanças nesta política",
          conteudo: (
            <p>
              Adotamos cuidados para proteger os dados contra acesso indevido,
              perda ou vazamento. Esta política pode mudar; a data no topo da
              página mostra a última atualização.
            </p>
          ),
        },
      ]}
    />
  );
}

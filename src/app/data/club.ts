// Conteúdo do site num lugar só. Para trocar fotos ou links, edite aqui.

export const WHATSAPP_NUMBER = "555496518434";
export const WHATSAPP_DISPLAY = "(54) 9651-8434";
export const EMAIL = "atendimento@clube1992.com.br";
export const ADDRESS = "Av. Flores da Cunha, 3211 · Glória · Carazinho/RS";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Clube+1992+Av.+Flores+da+Cunha+3211+Carazinho+RS";

export const whatsapp = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export type Cabana = {
  id: string;
  name: string;
  style: string;
  description: string;
  photos: string[];
};

const photos = (n: number, count: number) =>
  Array.from({ length: count }, (_, i) => `/img/cabanas/c${n}/${i + 1}.webp`);

// Fotos provisórias das cabanas.
// Quando chegarem as fotos originais, é só substituir os arquivos em public/img/cabanas/cN/.
export const cabanas: Cabana[] = [
  {
    id: "01",
    name: "Cabana 1",
    style: "Rústica",
    description:
      "Parede de barro, madeira e piso claro. Bancada com cozinha e cama de casal de frente para a TV.",
    photos: photos(1, 7),
  },
  {
    id: "02",
    name: "Cabana 2",
    style: "Rústica",
    description:
      "Mesmo estilo da Cabana 1, com balcão de madeira maciça e banquetas altas. Boa para quem cozinha.",
    photos: photos(2, 9),
  },
  {
    id: "03",
    name: "Cabana 3",
    style: "Clara",
    description:
      "Paredes brancas e madeira natural, bancada em L e cortinas blackout. Entrada própria pelo pátio.",
    photos: photos(3, 6),
  },
  {
    id: "04",
    name: "Cabana 4",
    style: "Clara",
    description:
      "A mais espaçosa das claras: cama de casal, cozinha americana e banheiro com box de vidro.",
    photos: photos(4, 6),
  },
  {
    id: "05",
    name: "Cabana 5",
    style: "Madeira",
    description:
      "Toda em madeira escura, com mesa de jantar, luz quente e janelas de casa de campo.",
    photos: photos(5, 9),
  },
];

// Hospedagem: padrão definido em "Cabanas Clube 1992 — Padrão Airbnb + Site" (10/11/2026).
// Regra de ouro: capacidade, preço e regras iguais no Airbnb e no site.
export const FRASE_BASE =
  "Cabanas dentro do Clube 1992, em Carazinho, com piscina e academia para hóspedes.";

export const DESCRICAO_BASE =
  "Cabana de madeira dentro do Clube 1992, em Carazinho (RS). Você usa a piscina (de novembro a março) e a academia durante a estadia, além dos quiosques e da área de churrasco do clube. A cabana tem cama confortável, ar-condicionado, Smart TV, Wi‑Fi, kit de toalhas e estacionamento gratuito e seguro. Banheiro privativo e cozinha com utensílios básicos. Ideal para casais.";

export const hospedagem = {
  diaria1: 150, // 1 pessoa, todos os dias, igual nas 5 cabanas
  diaria2: 200, // 2 pessoas
  precoAPartirDe: 150 as number | null,
};

export const regrasHospedagem = [
  {
    rotulo: "Capacidade",
    valor:
      "Cada cabana comporta 2 pessoas. Famílias podem acrescentar colchão no chão para até 2 crianças, sem custo extra.",
  },
  {
    rotulo: "Diária",
    valor: "R$ 150 para 1 pessoa e R$ 200 para 2 pessoas, todos os dias, igual nas 5 cabanas.",
  },
  { rotulo: "Check-in", valor: "A partir das 14h." },
  { rotulo: "Check-out", valor: "Até as 12h." },
  { rotulo: "Estadia mínima", valor: "1 noite, todos os dias." },
  {
    rotulo: "Pagamento",
    valor:
      "Valor integral para reservar, sem sinal. Pix ou cartão na secretaria do clube. Quem mora fora de Carazinho paga por Pix e envia o comprovante pelo WhatsApp.",
  },
  { rotulo: "Cancelamento", valor: "Sem reembolso após o pagamento da reserva." },
  { rotulo: "Animais", valor: "Aceitamos animais de estimação." },
];

export const TEXTO_PISCINA_ACADEMIA =
  "Durante a estadia, você usa a piscina (de novembro a março, das 9h às 12h30 e das 13h30 às 18h30) e a academia (segunda a sexta, das 6h às 22h; sábado, das 9h às 17h; fechada aos domingos). Pedimos que respeite os horários e as regras de cada área.";

export const horariosAreas = [
  { area: "Piscina", quando: "Das 9h às 12h30 e das 13h30 às 18h30", obs: "Temporada de verão, de novembro a março" },
  { area: "Academia", quando: "Segunda a sexta, das 6h às 22h", obs: "Aberta para hóspedes e sócios" },
  { area: "Academia", quando: "Sábado, das 9h às 17h", obs: "Fechada aos domingos" },
];

// Código de origem nas mensagens do WhatsApp (o Kommo preenche o campo Origem com ele)
export type Origem = "SITE" | "GADS" | "IG";
export const mensagemReserva = (origem: Origem, cabana?: number) =>
  cabana
    ? `Olá! Quero reservar a Cabana ${cabana}. Código: ${origem}-C${cabana}`
    : `Olá! Quero saber qual cabana está disponível. Código: ${origem}-GERAL`;

export const formatPreco = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const cabanaAmenities = [
  "2 hóspedes + 2 crianças no colchão",
  "Cama confortável",
  "Banheiro privativo",
  "Cozinha com utensílios",
  "Wi‑Fi",
  "Ar-condicionado",
  "Smart TV",
  "Kit de toalhas",
  "Estacionamento gratuito",
  "Aceita animais",
];

export const FGF_URL = "https://fgf.com.br";
export const CBF_URL = "https://www.cbf.com.br";

// Itens marcados com `photo: null` aparecem com moldura "foto em breve".
export const teamStructure: {
  title: string;
  text: string;
  photo: string | null;
}[] = [
  {
    title: "Campo e treinos",
    text: "Gramado sintético iluminado, usado nos treinos das categorias de base e nos jogos à noite.",
    photo: "/img/site/football-field.webp",
  },
  {
    title: "Ônibus do clube",
    text: "Ônibus próprio, com as cores e o escudo do 1992, para levar os atletas aos jogos fora de Carazinho.",
    photo: "/img/site/bus.webp",
  },
  {
    title: "Sala de aula",
    text: "Sala para preleções, análise de jogos e palestras com os atletas da base.",
    photo: "/img/site/classroom-talk.webp",
  },
];

// Recortes das fichas dos alojamentos enviadas pelo clube
export const alojamentos: { dorm: string; src: string; alt: string }[] = [
  { dorm: "01", src: "/img/alojamentos/1a.webp", alt: "Sala do dormitório 01 com TV, ar-condicionado e camisa autografada na parede" },
  { dorm: "01", src: "/img/alojamentos/1c.webp", alt: "Beliches do dormitório 01" },
  { dorm: "02", src: "/img/alojamentos/2a.webp", alt: "Dormitório 02 com beliches e painel de jogo na parede" },
  { dorm: "02", src: "/img/alojamentos/2c.webp", alt: "Beliches e criado-mudo do dormitório 02" },
  { dorm: "03", src: "/img/alojamentos/3a.webp", alt: "Armários do dormitório 03" },
  { dorm: "04", src: "/img/alojamentos/4a.webp", alt: "Beliches do dormitório 04" },
  { dorm: "04", src: "/img/alojamentos/4d.webp", alt: "Toalhas bordadas 1992 Clube sobre a cama" },
  { dorm: "05", src: "/img/alojamentos/5a.webp", alt: "Dormitório 05 com beliches e frigobar" },
  { dorm: "05", src: "/img/alojamentos/5c.webp", alt: "Cama arrumada com manta do 1992 no dormitório 05" },
  { dorm: "06", src: "/img/alojamentos/6c.webp", alt: "Dormitório 06 com beliches e sofá" },
  { dorm: "06", src: "/img/alojamentos/6d.webp", alt: "Manta 1992 Clube no dormitório 06" },
];

export const alojamentoItens = [
  "Camas e colchões sob medida",
  "Guarda-roupas sob medida",
  "Ar-condicionado",
  "Lençóis e toalhas de rosto e banho",
  "Wi‑Fi",
];

// Diretoria: dados da Ata nº 07/2025 (Assembleia Geral Extraordinária de 10/04/2025).
// Para incluir vice, tesoureiro ou Conselho Fiscal, é só adicionar itens aqui.
export const ATA_URL =
  "/documents/ATA%20N%C2%B0%207%20de%202025%20Assembleia%20Mandato%20e%20Presta%C3%A7%C3%A3o%20de%20Contas%20.pdf";

export const mandato = {
  inicio: "16/02/2024",
  fim: "15/02/2028",
  fonte: "Ata nº 07/2025 da Assembleia Geral Extraordinária de 10 de abril de 2025",
};

export const diretoria: { cargo: string; nome: string }[] = [
  { cargo: "Presidente", nome: "André Bordin" },
  { cargo: "1ª Secretária", nome: "Bruna Andreia Barros Gehrke" },
];

// Estádio: dados da matéria do Peleia FC (01/12/2023).
// Imagens são do projeto (renders) e da terraplanagem do terreno.
export const ESTADIO_MATERIA_URL =
  "https://www.peleiafc.com/post/exclusivo-1992-ir%C3%A1-construir-est%C3%A1dio-define-%C3%A1rea-e-busca-investidores";

export const estadioFatos = [
  { valor: "4 mil", rotulo: "lugares" },
  { valor: "38", rotulo: "camarotes" },
  { valor: "FIFA", rotulo: "medidas oficiais do campo sintético" },
  { valor: "ERS-142", rotulo: "km 5, entre Carazinho e Não-Me-Toque" },
];

export const estadioFotos = [
  { src: "/img/estadio/fachada.webp", alt: "Render da fachada do Estádio Orides Bordin com o letreiro 1992", legenda: "Acesso principal" },
  { src: "/img/estadio/hall.webp", alt: "Render do hall de acesso às arquibancadas", legenda: "Hall das arquibancadas" },
  { src: "/img/estadio/camarote.webp", alt: "Render de um camarote com sofás e vista para o campo", legenda: "Camarote" },
  { src: "/img/estadio/terraplanagem.webp", alt: "Foto aérea da terraplanagem do terreno do estádio", legenda: "Terraplanagem do terreno" },
];

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
  airbnb: string;
  photos: string[];
};

const photos = (n: number, count: number) =>
  Array.from({ length: count }, (_, i) => `/img/cabanas/c${n}/${i + 1}.webp`);

// Fotos provisórias tiradas dos anúncios do Airbnb.
// Quando chegarem as fotos originais, é só substituir os arquivos em public/img/cabanas/cN/.
export const cabanas: Cabana[] = [
  {
    id: "01",
    name: "Cabana 1",
    style: "Rústica",
    description:
      "Parede de barro, madeira e piso claro. Bancada com cozinha e cama de casal de frente para a TV.",
    airbnb: "https://www.airbnb.com.br/rooms/1639251811334036672",
    photos: photos(1, 7),
  },
  {
    id: "02",
    name: "Cabana 2",
    style: "Rústica",
    description:
      "Mesmo estilo da Cabana 1, com balcão de madeira maciça e banquetas altas. Boa para quem cozinha.",
    airbnb: "https://www.airbnb.com.br/rooms/1701671240502954042",
    photos: photos(2, 9),
  },
  {
    id: "03",
    name: "Cabana 3",
    style: "Clara",
    description:
      "Paredes brancas e madeira natural, bancada em L e cortinas blackout. Entrada própria pelo pátio.",
    airbnb: "https://www.airbnb.com.br/rooms/1745744469591527508",
    photos: photos(3, 6),
  },
  {
    id: "04",
    name: "Cabana 4",
    style: "Clara",
    description:
      "A mais espaçosa das claras: cama de casal, cozinha americana e banheiro com box de vidro.",
    airbnb: "https://www.airbnb.com.br/rooms/1701676860178785619",
    photos: photos(4, 6),
  },
  {
    id: "05",
    name: "Cabana 5",
    style: "Madeira",
    description:
      "Toda em madeira escura, com mesa de jantar, luz quente e janelas de casa de campo.",
    airbnb: "https://www.airbnb.com.br/rooms/1701568640311669004",
    photos: photos(5, 9),
  },
];

export const cabanaAmenities = [
  "Até 2 hóspedes",
  "Cama de casal",
  "Banheiro privativo",
  "Cozinha equipada",
  "Wi‑Fi",
  "Ar-condicionado",
  "Smart TV",
  "Toalhas inclusas",
  "Estacionamento",
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

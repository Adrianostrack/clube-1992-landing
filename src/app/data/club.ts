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
    text: "Ônibus próprio para levar os atletas aos jogos e competições fora de Carazinho.",
    photo: null,
  },
  {
    title: "Alojamentos",
    text: "Alojamento dentro do clube para os atletas da base, perto do campo e da academia.",
    photo: null,
  },
];

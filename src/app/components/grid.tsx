import React from "react";

const Grid = () => {
  const cards = [
    {
      img: "/img/empty-pool.png",
      alt: "Piscinas",
      title: "Piscinas",
      description:
        "Uma das piscinas paradisíacas mais bonitas da região, com quiosques prontos para receber você!",
    },
    {
      img: "/img/gym.png",
      alt: "Gym",
      title: "Academia",
      description:
        "Academia possui uma estrutura completa, com os equipamentos mais modernos e atualizados.",
    },
    {
      img: "/img/football-field.png",
      alt: "Football Field",
      title: "Quadras Society",
      description:
        "Contando com quadras abertas e fechadas, o clube é perfeito para receber você que gosta de um futebol!",
    },
    {
      img: "/img/beach-tennis.webp",
      alt: "Beach Tennis",
      title: "Beach Tennis",
      description:
        "As melhores quadras de Beach Tennis da região para você se divertir com seus amigos durante todo ano.",
    },
    {
      img: "/img/thermal-pool.jpg",
      alt: "Piscina Térmica",
      title: "Piscina Térmica",
      description:
        "Relaxar sempre é bom não é mesmo? Conheça a nossa piscina térmica e tudo o que ela tem para proporcionar.",
    },
    {
      img: "/img/pool-ligth.png",
      alt: "Card Image",
      title: "Shadow",
      description:
        "O melhor sushi da região integrado dentro de nosso clube, com atendimento personalizado.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.img})`,
              aspectRatio: "3 / 4",
              clipPath: "inset(0% 0% 10% 0%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-28 md:bottom-24 left-0 right-0 p-4 text-center">
              <h2 className="text-white text-4xl sm:text-md md:text-3xl font-bold mb-2 text-start">
                {card.title}
              </h2>
              <p className="text-silver-100 text-lg  sm:text-sm md:text-md text-start">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

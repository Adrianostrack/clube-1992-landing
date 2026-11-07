import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Button from "../components/button";
import Carousel from "../components/carousel";
import Grid from "../components/grid";
import Counter from "../components/counter";

export default function Home() {
  return (
    <>
      <section className="relative text-white h-screen" id="home">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/img/pool.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="flex relative h-full">
            <div className="relative top-52 sm:left-10 md:left-24 space-y-4 ">
              <h1 className="text-5xl font-bold uppercase">Clube 1992</h1>
              <p className="text-md text-silver-100">
                O único clube que além de usufruir de toda estrutura você
                <br /> estará contribuindo com o sonho de inúmeras crianças.
              </p>
              <Button text="Associe-se" href="https://wa.me/555496518434" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div className="flex justify-center items-center  ">
          <Carousel style="" initialImage={1} />
        </div>

        <div className="space-y-5 p-10">
          <h4 className="text-3xl font-bold uppercase text-center">
            SOBRE O 1992
          </h4>

          <div className="grid grid-cold-1 md:grid-cols-2 lg:justify-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
            <div>
              <Counter
                countN={300}
                duration={2}
                text="Sócios ativos"
                textStyle1="text-7xl"
              />
            </div>
            <div>
              <p className="text-silver-100 text-end ms-10 lg:ms-0 lg:text-left">
                O Clube 1992 conta com o espaço mais completo de lazer de toda a
                região, com quadras de society, beach tennis, piscinas térmicas
                e SPA para você e sua família,
              </p>
            </div>
          </div>

          <div className="w-full">
            <p className="text-silver-100 text-center lg:text-left">
              Além disso você conta com a academia mais completa da região, com
              equipamentos de altíssima qualidade. Aproveite de toda a
              experiência, conforto e segurança de ser sócio do clube que mais
              cresce em Carazinho.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Button text="Associe-se" href="https://wa.me/555496518434" />
          </div>
        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center w-full bg-white text-black font-bold py-16 pb-32"
        id="structure"
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl">NOSSA ESTRUTURA</h1>
          <p className="text-sm lg:text-base font-normal tracking-wide leading-relaxed">
            CLUBE 1992
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 w-3/5 text-center font-extrabold text-xl lg:text-2xl">
          <div className="flex flex-col items-center">
            <Image
              src="/img/icons/halter-icon.png"
              alt="Academia"
              className="w-20 h-20"
              width={80}
              height={80}
            />
            <h1>Academia</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/icons/pool-icon.png"
              alt="Piscinas"
              className="w-20 h-20"
              width={80}
              height={80}
            />
            <h1>Piscinas</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/icons/bol-icon.png"
              alt="Futebol"
              className="w-20 h-20"
              width={80}
              height={80}
            />
            <h1>Futebol</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/icons/sunset-icon.png"
              alt="Beach Tennis"
              className="w-20 h-20"
              width={80}
              height={80}
            />
            <h1>Beach Tennis</h1>
          </div>
        </div>
      </section>

      <section className="relative h-full p-10 pb-56">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: "url('/img/shadow.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative bottom-20 flex bg-black h-52 justify-center items-center px-4 md:px-12 pt-56 md:pt-0">
          <div className="flex flex-col md:flex-row text-center justify-center items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-36 w-full font-extrabold text-xl lg:text-2xl pt-10">
            <div className="flex flex-col items-center">
              <Image
                src="/img/brands/seanet-brand.png"
                alt="seanet"
                width={1024}
                height={780}
                className="w-48 md:w-72 lg:w-80 grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/brands/saude-legal-768x348-brand.png"
                alt="saude legal"
                width={1024}
                height={780}
                className="w-48 md:w-72 lg:w-80 grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/brands/barc-brand.png"
                alt="barc"
                width={1024}
                height={780}
                className="w-48 md:w-72 lg:w-80 grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-64 px-4 md:px-12 lg:px-52">
          <div className="flex flex-col text-center md:text-end space-y-10">
            <h1 className="text-2xl md:text-3xl font-bold uppercase">
              CONHEÇA MAIS SOBRE O CLUBE
            </h1>
            <p className="text-base md:text-lg">
              O único clube que além de usufruir de toda estrutura você estará
              <br className="hidden md:block" />
              contribuindo com o sonho de inúmeras crianças.
            </p>
            <div className="flex justify-center md:justify-end">
              <Button text="ASSISTA O VÍDEO" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-10">
        <Image
          src="/img/shadow-nature.png"
          alt="pool"
          width={1024}
          height={780}
          className="w-full lg:w-1/2"
        />

        <div className="space-y-8 text-center lg:text-end">
          <h4 className="text-2xl lg:text-3xl font-bold uppercase">
            UMA EXPERIÊNCIA QUE <br />
            VAI ELEVAR SEU PALADAR <br /> PARA O PRÓXIMO NÍVEL
          </h4>

          <p className="text-silver-100 text-base lg:text-lg">
            O Shadow Sushi leva para sua casa as mais deliciosas
            <br className="hidden lg:block" />
            peças de japa com rapidez, eficiência e segurança! Estamos
            <br className="hidden lg:block" />
            abertos para pedidos hoje à partir das 18:00. Faça seu
            <br className="hidden lg:block" />
            pedido agora mesmo no Shadow, saboreie essa experiência.
          </p>

          <div className="flex justify-center lg:justify-end">
            <Image
              width={1024}
              height={780}
              src="/img/icons/stores-icon.png"
              alt="store"
              className="w-48 lg:w-64"
            />
          </div>

          <div className="flex justify-center lg:justify-end">
            <Button text="Associe-se" href="https://wa.me/555496518434" />
          </div>
        </div>
      </section>

      <section id="1992">
        <div className="text-center space-y-8">
          <p className="text-sm font-normal tracking-wide">GALERIA DE FOTOS</p>
          <h1 className="text-5xl font-extrabold">
            APROVEITE A TEMPORADA
            <br /> NO CLUBE 1992
          </h1>
          <p className="text-silver-100">
            Esse verão promete, agora imagine você usufruindo de toda essa
            estrutura
            <br /> maravilhosa do clube, pagando um preço super acessível? Entre
            em <br /> contato conosco e fale já com nossa equipe!
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-3 md:grid-cols-2 md:space-y-0 justify-center m-10">
          <Carousel initialImage={3} />
          <Carousel initialImage={4} />
        </div>
      </section>

      <section>
        <div className="text-center space-y-8 ">
          <p className="text-md font-ligth better-tracking">NOSSA ESTRUTURA</p>
          <h1 className="text-5xl font-extrabold">A MAIS COMPLETA DA REGIÃO</h1>
          <p className="text-silver-100">
            O único clube que além de usufruir de toda estrutura você estará
            <br />
            contribuindo com o sonho de inúmeras crianças.
          </p>
        </div>

        <Grid />
      </section>

      <section className="relative w-full h-89 sm:83 md:h-27">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: "url('/img/shadow-dark.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-85 z-10"></div>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-5 items-center h-full text-center space-y-5 px-10 lg:px-28 xl:px-40">
          <div className="md:col-span-4 space-y-5 mt-12 sm:mt-0">
            <h1 className="text-center sm:text-start text-5xl md:text-4xl xl:text-5xl font-extrabold">
              APROVEITE O MELHOR DO <br />
              VERÃO NO CLUBE 1992​
            </h1>
            <p className="text-center sm:text-start text-silver-100 text-md md:text-md lg:text-lg text-wrap">
              O único clube que além de usufruir de toda estrutura você estará
              <br />
              contribuindo com o sonho de inúmeras crianças.
            </p>
          </div>
          <div className="md:col-span-1">
            <Button text={"Associe - se"} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text bottom-8">
            <div className="flex flex-col items-center border-4 border-1992 p-2 bg-black">
              <FontAwesomeIcon
                icon={farUser}
                style={{ width: "55px" }}
                className="text-1992"
              />
              <Counter
                countN={600}
                duration={2}
                text="SÓCIOS ATIVOS"
                textStyle1="text-5xl"
                textStyle2="text-silver-100 text-sm font-light"
              />
            </div>
            <div className="flex flex-col items-center border-4 border-1992 p-2 bg-black">
              <FontAwesomeIcon
                icon={farUser}
                style={{ width: "55px" }}
                className="text-1992"
              />
              <Counter
                countN={300}
                duration={2}
                text="CRIANÇAS ESCOLINHA"
                textStyle1="text-5xl"
                textStyle2="text-silver-100 text-sm font-light"
              />
            </div>
            <div className="flex flex-col items-center border-4 border-1992 p-2 bg-black">
              <FontAwesomeIcon
                icon={farUser}
                style={{ width: "55px" }}
                className="text-1992"
              />
              <Counter
                countN={10}
                duration={2}
                text="INSTRUTORES"
                textStyle1="text-5xl"
                textStyle2="text-silver-100 text-sm font-light"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-center p-4 sm:p-16 pt-20">
          <div className="flex flex-col items-center max-w-md">
            <p className="text-silver-100 text-sm text-start mb-4 w-full">
              Clube 1992 um ótimo lugar para vc levar a família com <br />
              muitas opções de lazer com academia piscinas opções de <br />
              churrasqueiras quadra de esportes e muito mais
            </p>
            <div className="flex items-center justify-start w-full pt-3">
              <Image
                width={55}
                height={55}
                src="/img/comments-1.png"
                alt="comments"
                className="mr-4"
              />
              <div>
                <h3>Márcio Clóvis</h3>
                <p className="text-silver-100">Sócio do Clube</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-md">
            <p className="text-silver-100 text-sm text-start mb-4 w-full">
              Um clube &quot;sucinto&quot;, pequeno em área mas com muitas{" "}
              <br />
              atividades e atrações, quadras, piscinas, área de <br />
              convivência. Particularmente frequento a academia que é <br />
              muito completa e ampla, professor atencioso. Vale a pena. <br />
              Não é necessário cota para associar-se. Tem planos de 6 <br />
              meses pra família muito atrativos. Estacionamento na rua.
            </p>

            <div className="flex items-center justify-start w-full pt-3">
              <Image
                width={55}
                height={55}
                src="/img/comments.png"
                alt="comments"
                className="mr-4"
              />
              <div>
                <h3>Angela Viecieli Avila</h3>
                <p className="text-silver-100">Sócio do Clube</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-89 sm:h-83 lg:h-34">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: "url('/img/pool-ligth.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-5 items-center h-full text-center space-y-5 px-10 lg:px-28 xl:px-40">
          <div className="md:col-span-4 space-y-8 mt-12 sm:mt-0">
            <h1 className="text-center sm:text-start text-3xl md:text-4xl xl:text-5xl font-extrabold">
              FAÇA SEU TESTE <br />
              100% GRÁTIS
            </h1>
            <p className="text-center sm:text-start text-silver-100 text-sm md:text-md lg:text-lg text-wrap">
              Aqui no clube você pode vivenciar essa experiência de forma
              <br />
              incrível! Aproveite por 1 dia grátis, caso você não queira
              aproveitar o <br />
              verão da melhor forma, não terá quaisquer cobranças.
            </p>
            <div className="flax text-start">
              <Button text="Associe-se" href="https://wa.me/555496518434" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

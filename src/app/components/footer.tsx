import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative border-1992 border-t-4 px-3 sm:px-32">
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/img/team-soccer.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
      </div>
      <div className="relative">
        <div className="relative mb-4 bottom-24">
          <Image
            className="relative top-7 z-10"
            src="/img/icons/icon.png"
            width={130}
            height={130}
            alt="Logo"
          />
        </div>
        <div className="space-y-3">
          <p className="font-light text-white">
            O único clube que além de usufruir de <br />
            toda estrutura você <br />
            estará contribuindo com o sonho <br />
            de inúmeras crianças.
          </p>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ width: "15px" }}
              className="text-1992"
            />
            <p className="text-xs font-light text-white">
              atendimento@clube1992.com.br
            </p>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ width: "15px" }}
              className="text-1992"
            />
            <p className="text-xs font-light text-white">
              Av. Flores da Cunha, 3211 - Glória, Carazinho - RS, 99500-000
            </p>
          </div>
          <hr className="border-silver-100" />
        </div>
        <p className="py-5 font-light text-white">
          Clube 1992 © 2023. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

"use client";

export default function Transparency() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-12 pb-10">
      <div className="relative flex items-center justify-center w-full h-48 animate-fade-in">
        <h1 className="absolute text-4xl sm:text-6xl md:text-7xl lg:text-9x1 text-1992 opacity-10 mb-20 better-tracking font-bold ff">
          TRANSPARÊNCIA
        </h1>
        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-16">
          <div className="text-center mb-6 md:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-900 max-w-xl mx-auto">
              Futebol com clareza e compromisso.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Não Utilizamos Dinheiro Público
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Somos uma entidade sem fins lucrativos e não recebemos verbas do
            governo. Todo recurso arrecadado é reinvestido no próprio clube,
            melhorando a estrutura, o atendimento e o preparo profissional dos
            jovens atletas — promovendo o desenvolvimento da cidade e das
            crianças.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Horário de Atendimento
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Academia aberta de segunda a sábado, das 06:00 às 22:00h
            <br />
            Domingo: fechado
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Despesas Mensais
          </h2>
          <Spreadsheet />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Documentos Oficiais
          </h2>
          <div className="flex flex-col space-y-3 w-full">
            {[
              {
                href: "/documents/Estatuto Clube 1992.pdf",
                text: "Estatuto Clube 1992",
              },
              {
                href: "/documents/ATA N° 7 de 2025 Assembleia Mandato e Prestação de Contas .pdf",
                text: "ATA Assembleia Extraordinária 2025",
              },
              {
                href: "/documents/Balanço Patrimonial 2024.pdf",
                text: "Balanço Patrimonial 2024",
              },
              {
                href: "/documents/Comprovande de Publicação do Edital - O Correspondente.pdf",
                text: "Publicação - O Correspondente",
              },
              {
                href: "/documents/Comprovande de Publicação do Edital - Portal Gazeta.pdf",
                text: "Publicação - Portal Gazeta",
              },
              {
                href: "/documents/Comprovande de Publicação do Edital - Peleia FC.pdf",
                text: "Publicação - Peleia FC",
              },
              {
                href: "/documents/Formulario de Composição.pdf",
                text: "Formulário de Composição",
              },
              {
                href: "/documents/Lista de Presença da Assembléia Geral Extraordinária N° 07 2025.pdf",
                text: "Lista de Presença - Assembleia 2025",
              },
              { href: "/documents/Parecer 2024.pdf", text: "Parecer 2024" },
            ].map(({ href, text }, index) => (
              <a
                key={index}
                href={href}
                download
                className="flex items-center text-gray-700 hover:text-1992 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium transform hover:scale-102"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Digite sua pergunta aqui..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-1992 focus:border-transparent"
            />
            <button className="mt-4 self-end bg-1992 text-white font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
              Enviar
            </button>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Perguntas Recentes:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Quero ser sócio, como faço?</li>
                <li>Como funciona a carreira de um atleta no clube?</li>
                <li>O clube participa de ações sociais na cidade?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards 0.2s;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards 0.4s;
        }

        .transform {
          transition: transform 0.3s ease;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

function Spreadsheet() {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://docs.google.com/spreadsheets/d/1zyYncw4N_afDImxh9OioS2knPxpD2lAE3GaRLYAleTY/preview"
        style={{ width: "100%", height: "70vh", border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

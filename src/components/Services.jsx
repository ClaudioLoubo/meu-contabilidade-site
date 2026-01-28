import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "TROQUE SEU MEI",
    description:
      "Analisamos seu MEI de duas formas: Se houver estouro no limite de faturamento ou se está dentro do limite permitido. Apresentaremos um cenário de acordo com a situação.",
    link: "/servicos/imovel",
  },
  {
    id: 2,
    title: "ABERTURA DE EMPRESAS",
    description:
      "Cuidamos de todo o processo para abertura do seu CNPJ com segurança e agilidade.",
    link: "/servicos/abertura",
  },
  {
    id: 3,
    title: "FOLHA DE PAGAMENTO",
    description:
      "Gestão completa da folha, encargos e obrigações trabalhistas.",
    link: "/servicos/folha",
  },
  {
    id: 4,
    title: "IMPOSTOS E DECLARAÇÕES",
    description:
      "Apuração, envio e acompanhamento de todas as obrigações fiscais.",
    link: "/servicos/impostos",
  },
  {
    id: 5,
    title: "PLANEJAMENTO TRIBUTÁRIO",
    description:
      "Assessoria contábil completa para aquisição e regularização de imóveis.",
    link: "/servicos/imovel",
  },
  {
    id: 6,
    title: "BPO FINANCEIRO",
    description:
      "Assessoria contábil completa para aquisição e regularização de imóveis.",
    link: "/servicos/imovel",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-950">Nossos Serviços</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Soluções contábeis completas para empresas em todas as fases.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-4 text-center uppercase">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {service.description}
                </p>
              </div>

              <Link
                to={service.link}
                className="mt-8 inline-block text-center bg-blue-800 text-white text-sm font-semibold py-3 rounded-lg hover:bg-red-700 transition"
              >
                Fale Conosco
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

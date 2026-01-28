import React from "react";
import heroImage from "@/fundohero2.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[890px] flex items-center overflow-hidden"
    >
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* OVERLAY PARA SUAVIZAR */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* CONTEÚDO */}
      <div className="z-10 mx-auto mt-16 px-6 lg:px-20">
        <div className="max-w-5xl text-center text-blue-950">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Solutt Contabilidade
          </h1>

          <p className="text-4xl mb-12">
            Mais do que cumprir obrigações atuamos como
            <strong> <br/> parceira estratégica</strong>, transformando
            números em decisões <br /> e eliminando a burocracia do dia
            a dia empresarial.
          </p>

          <div className="gap-4 flex-wrap">
            <a
              href="#"
              className="bg-red-700 text-white text-lg font-semibold py-3 px-7 mx-4 rounded-md hover:bg-red-800 transition"
            >
              TROQUE DE CONTADOR
            </a>

            <a
              href="#"
              className="bg-[#9a958c] text-white text-lg font-semibold py-3 px-7 mx-4 rounded-md hover:bg-blue-900 transition"
            >
              ABRA SUA EMPRESA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

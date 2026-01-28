import logoSollut from "@/logosoll.png";
import grafico from "@/grafico.png";

export default function AboutOffice() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <div className="relative bg-blue-900 rounded-[40px] overflow-hidden px-12 py-16 flex flex-col md:flex-row items-center gap-12">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-95"
          style={{
            backgroundImage: `url(${grafico})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/90" />

        {/* Conteúdo */}
        <div className="relative z-10 md:w-1/2 text-white">
          <h2 className="text-5xl font-bold mb-6">
            Nosso profissionais
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            Nosso escritório é formado por dois contadores que unem experiência,
            proximidade e visão estratégica para garantir <br /> segurança fiscal e
            tranquilidade na tomada de decisões.
          </p>

          <div className="space-y-2">
            <p className="font-semibold">Thiago Costa, CRC: 016722/0-8 - à esquerda</p>
            <p className="font-semibold">Luís Henrique, CRC: 016342/0-9 - à direita</p>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative z-10 md:w-1/2 flex justify-center">
          <img
            src={logoSollut}
            alt="Contadores do escritório"
            className="w-[460px] md:w-[520px] rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

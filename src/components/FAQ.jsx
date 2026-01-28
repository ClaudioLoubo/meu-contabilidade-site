import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Por favor, preencha o nome e o telefone.");
      return;
    }

    const message = `
Olá, gostaria de um contato!

Nome: ${name}
Telefone: ${phone}
E-mail: ${email}
Serviço: ${service}

Mensagem:
${messageText}
    `;
    const whatsappNumber = "559884690545";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-blue-900">
      <div className="max-w-7xl grid mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div className="text-white space-y-6 relative pl-6">
          <span className="absolute left-0 top-4 h-full w-1 bg-red-700"></span>
          <h2 className="text-4xl md:text-6xl font-bold leading-snug">
            Sollut
            <br /> Contabilidade.
            <br /> Eficaz, digital
            <br /> e estratégica
          </h2>
        </div>

        {/* Formulário */}
        <div className="shadow-xl rounded-xl p-8 bg-white">
          <h3 className="text-xl font-bold text-center mb-2">
            Solicite um contato via
          </h3>
          <p className="text-center text-blue-900 font-bold text-lg mb-6">
            WhatsApp
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome e Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center border rounded p-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center border rounded p-2">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email e Select */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center border rounded p-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <select
                className="border rounded p-2 w-full"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Informações">Informações</option>
                <option value="Proposta">Proposta</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Mensagem */}
            <textarea
              placeholder="Escreva sua mensagem"
              rows="4"
              className="w-full border p-2 rounded"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            ></textarea>

            {/* Botão */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800 transition font-semibold"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Texto pequeno */}
          <p className="text-xs text-gray-500 text-center mt-4">
            Ao enviar o formulário, eu declaro que estou de acordo com nossos{" "}
            <a href="#" className="underline">
              Termos de uso
            </a>{" "}
            e{" "}
            <a href="#" className="underline">
              Políticas de privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

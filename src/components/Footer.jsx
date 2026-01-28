import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 w-full border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo + Redes Sociais */}
        <div className="flex flex-col items-start md:items-center">
          <img 
            src="/src/imgs/logosoll.png" 
            alt="Logo" 
            className="h-20 mb-4"
          />
          
        </div>

        {/* Onde Estamos */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="font-semibold text-lg mb-4 text-center md:text-left">Onde Estamos</h3>
          <ul className="space-y-2 text-gray-600 text-center md:text-left">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-600" />
              <span>Bom Jesus das Selvas - MA</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-600" />
              <span>Senador La Rocque - MA</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-600 mb-2 text-sm text-center">
            Conecte-se conosco <br /> nas redes sociais
          </p>
            <div className="flex text-5xl justify-center space-x-2">
            <a 
              href="https://www.instagram.com/soluttcontabilidade/" 
              aria-label="Instagram" 
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/559884690545" 
              aria-label="WhatsApp" 
              className="hover:text-green-500 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Mensagem opcional / frase */}
        <div className="flex flex-col justify-center items-center md:items-end text-gray-600 text-center md:text-right">
          <p className="mb-2">Contabilidade moderna e confiável</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Solutt Contabilidade · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

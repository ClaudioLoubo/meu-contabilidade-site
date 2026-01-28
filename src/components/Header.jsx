import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ajuste esse valor para a altura do seu Hero
      setScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors duration-300
        ${scrolled ? "bg-white" : "bg-transparent"}
      `}
    >
      <div className="mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between px-10 py-6 md:py-8">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/src/imgs/logosoll.png"
                alt="Sollut"
                className="h-16 md:h-20"
              />
            </a>
          </div>

          {/* Navegação */}
          <nav className="hidden gap-16 md:flex flex-1 justify-center space-x-10 text-lg">
            <a
              href="/trocar-de-contador"
              className="text-blue-950 hover:text-blue-600 font-medium transition-colors"
            >
              TROCAR DE CONTADOR
            </a>
            <a
              href="/quanto-custa"
              className="text-blue-950 hover:text-blue-600 font-medium transition-colors"
            >
              QUANTO CUSTA?
            </a>
            <a
              href="/solucoes"
              className="text-blue-950 hover:text-blue-600 font-medium transition-colors"
            >
              SOLUÇÕES
            </a>
            <a
              href="/blog"
              className="text-blue-950 hover:text-blue-600 font-medium transition-colors"
            >
              BLOG
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center">
            <a
              href="/abrir-empresa-gratis"
              className="bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 transition-colors"
            >
              ABRIR EMPRESA
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

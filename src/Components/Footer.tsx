import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Seção de Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div>
            <h3 className="font-semibold text-xl mb-4">Sobre</h3>
            <ul>
              <li>
                <a href="/sobre" className="hover:text-[#B2DFDB] transition">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-[#B2DFDB] transition">
                  Contato
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[#B2DFDB] transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Serviços</h3>
            <ul>
              <li>
                <a href="/comprar" className="hover:text-[#B2DFDB] transition">
                  Comprar
                </a>
              </li>
              <li>
                <a href="/vender" className="hover:text-[#B2DFDB] transition">
                  Vender
                </a>
              </li>
              <li>
                <a href="/meus-anuncios" className="hover:text-[#B2DFDB] transition">
                  Meus Anúncios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Legal</h3>
            <ul>
              <li>
                <a href="/termos" className="hover:text-[#B2DFDB] transition">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/politica-privacidade" className="hover:text-[#B2DFDB] transition">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Redes Sociais</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" className="hover:text-[#B2DFDB]">
                <i className="bi bi-facebook text-2xl"></i>
              </a>
              <a href="https://twitter.com" className="hover:text-[#B2DFDB]">
                <i className="bi bi-twitter text-2xl"></i>
              </a>
              <a href="https://www.instagram.com" className="hover:text-[#B2DFDB]">
                <i className="bi bi-instagram text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com" className="hover:text-[#B2DFDB]">
                <i className="bi bi-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#B2DFDB] pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} BioData. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

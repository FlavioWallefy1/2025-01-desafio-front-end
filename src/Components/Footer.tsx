import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div>
            <h3 className="font-semibold text-xl mb-4">Sobre</h3>
            <ul>
              <li>
                <span className="text-[#B2DFDB]">Nossa História</span>
              </li>
              <li>
                <span className="text-[#B2DFDB]">Contato</span>
              </li>
              <li>
                <span className="text-[#B2DFDB]">FAQ</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Serviços</h3>
            <ul>
              <li>
                <span className="text-[#B2DFDB]">Comprar</span>
              </li>
              <li>
                <span className="text-[#B2DFDB]">Vender</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Legal</h3>
            <ul>
              <li>
                <span className="text-[#B2DFDB]">Termos de Uso</span>
              </li>
              <li>
                <span className="text-[#B2DFDB]">Política de Privacidade</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Redes Sociais</h3>
            <div className="flex space-x-6">
              <span className="text-[#B2DFDB]">Facebook</span>
              <span className="text-[#B2DFDB]">Twitter</span>
              <span className="text-[#B2DFDB]">Instagram</span>
              <span className="text-[#B2DFDB]">LinkedIn</span>
            </div>  
          </div>
        </div>
''
        <div className="border-t border-[#B2DFDB] pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} BioData. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

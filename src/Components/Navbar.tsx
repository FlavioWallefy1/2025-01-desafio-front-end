import React from "react";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/"); // Redireciona para a tela principal (home)
  };

  return (
    <nav className="absolute top-0 left-0 right-0 p-4 bg-transparent z-10">
      <div className="flex items-center justify-between w-full">
        {/* Logo com clique para redirecionamento */}
        <div onClick={handleLogoClick} className="cursor-pointer flex items-center space-x-2">
          <img src="/logo_biodata.png" alt="Logo" className="w-16 h-16" />
          <h1 className="text-white font-bold text-xl">BioData</h1>
        </div>

        {/* Links Centralizados */}
        <div className="flex-grow flex justify-center space-x-8 text-white">
          <button onClick={() => router.push("/")} className="hover:text-[#B2DFDB] transition">
            Home
          </button>
          <button onClick={() => router.push("/informacoes")} className="hover:text-[#B2DFDB] transition">
            Espécies
          </button>
        </div>

        {/* Botão Login (Direita) */}
        <div className="flex items-center">
          <button
            onClick={() => router.push("/login")}
            className="text-white font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-[#1E3A8A] transition"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

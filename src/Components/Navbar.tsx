import React from "react";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          🌿
        </div>
        <span className="text-xl font-semibold text-gray-800">Biodata</span>
      </div>
      <div className="space-x-4">
        <button onClick={() => router.push("/informacoes")} className="text-gray-700 hover:text-green-600 font-medium">Informações</button>
        <button onClick={() => router.push("/login")} className="text-gray-700 hover:text-green-600 font-medium">Login</button>
        <button onClick={() => router.push("/registro")} className="text-gray-700 hover:text-green-600 font-medium">Registro</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useRouter } from "next/router";

export default function Inicial() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F2F1] to-[#B2DFDB] flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            🌿
          </div>
          <span className="text-xl font-semibold text-gray-800">Biodata</span>
        </div>
        <div className="space-x-4">
          <button onClick={() => router.push("/Informacoes")} className="text-gray-700 hover:text-green-600 font-medium">Informações</button>
          <button onClick={() => router.push("/Login")} className="text-gray-700 hover:text-green-600 font-medium">Login</button>
          <button onClick={() => router.push("Registro")} className="text-gray-700 hover:text-green-600 font-medium">Registro</button>
        </div>
      </nav>

      {/* Hero section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">Explore a Biodiversidade com Tecnologia</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          O <strong>Biodata</strong> é uma plataforma que conecta você aos dados da biodiversidade global. 
          Descubra espécies, explore classificações e aprofunde-se no conhecimento da vida na Terra com dados da API GBIF.
        </p>
        <button
          onClick={() => router.push("/informacoes")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Explorar Espécies
        </button>
      </section>
    </div>
  );
}

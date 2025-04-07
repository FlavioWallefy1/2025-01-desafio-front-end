import React from "react";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar"; 

const index: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F2F1] to-[#B2DFDB] flex flex-col">
      {<Navbar />}

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
};

export default index;

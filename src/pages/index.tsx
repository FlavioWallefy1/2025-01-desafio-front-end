import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar"; 
import Footer from "@/Components/Footer"; // Importe o Footer

const index: React.FC = () => {
  const router = useRouter();

  // Lista de imagens representativas de algumas espécies
  const speciesImages = [
    "/tartarugajpg.jpg",  // Substitua pelo caminho real das imagens
    "/tatu.jpg",  // Substitua pelo caminho real das imagens
    "/sei.jpg",  // Substitua pelo caminho real das imagens
    "/tigre.jpg",  // Substitua pelo caminho real das imagens
  ];

  // Estado para controlar a imagem exibida
  const [currentImage, setCurrentImage] = useState(0);

  // Função para mudar a imagem a cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % speciesImages.length);
    }, 3000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(intervalId); // Limpar o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Navbar importada */}

      {/* Hero section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 flex-grow relative">
        {/* Imagens de espécies passando na tela */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={speciesImages[currentImage]}
            alt={`Espécie ${currentImage}`}
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Texto da Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6 z-10 relative">
          Explore a Biodiversidade com Tecnologia
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8 z-10 relative">
          O <strong>Biodata</strong> é uma plataforma que conecta você aos dados da biodiversidade global. 
          Descubra espécies, explore classificações e aprofunde-se no conhecimento da vida na Terra com dados da API GBIF.
        </p>
        <button
          onClick={() => router.push("/informacoes")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition z-10 relative"
        >
          Explorar Espécies
        </button>
      </section>

      <Footer /> {/* Footer importado aqui */}
    </div>
  );
};

export default index;

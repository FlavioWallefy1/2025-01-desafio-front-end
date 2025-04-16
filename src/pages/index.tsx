import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import Footer from "@/Components/Footer";
import { auth } from "../../utils/firebase"; 
import { onAuthStateChanged, User } from "firebase/auth";

const index: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const speciesCardImages = [
    "/besorou.jpg",   
    "/abelha.jpg",    
    "/panda.jpg",     
    "/esquilo.jpg",   
  ];

  const handleExploreClick = () => {
    if (user) {
      router.push("/informacoes");
    } else {
      alert("Você precisa estar logado para explorar as espécies.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative w-full h-[80vh] bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/borboleta.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Explore a Biodiversidade com Tecnologia
            </h1>
            <p className="text-lg mb-8">
              O <strong>Biodata</strong> é uma plataforma que conecta você aos dados da biodiversidade global.
              Descubra espécies, explore classificações e aprofunde-se no conhecimento da vida na Terra com dados da API GBIF.
            </p>
            <button
              onClick={handleExploreClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Explorar Espécies
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#1E3A8A]">Principais Espécies</h2>
          <p className="text-lg text-gray-600">Conheça algumas das espécies mais incríveis registradas.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
            <img src="/esquilo.jpg" alt="Esquilo" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Sciurus carolinensis</h3>
            <p className="text-gray-600">Os esquilos são famosos por sua habilidade em armazenar alimentos para o inverno.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
            <img src="/panda.jpg" alt="Panda" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Ailuropoda melanoleuca</h3>
            <p className="text-gray-600">Um dos animais mais amados do mundo, o panda é conhecido por seu comportamento dócil.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
            <img src="/abelha.jpg" alt="Abelha" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Bombus vagans</h3>
            <p className="text-gray-600">Essas abelhas desempenham um papel crucial na polinização.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
            <img src="/besorou.jpg" alt="Besouro" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Hadramphus tuberculatus</h3>
            <p className="text-gray-600">Esse besouro é uma das muitas espécies incríveis de besouros registrados no GBIF.</p>
          </div>
        </div>  
      </section>
      <Footer />
    </div>
  );
};

export default index;

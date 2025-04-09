import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar"; // Importe a Navbar
import { onAuthStateChanged, User } from "firebase/auth"; // Corrigido para importar o tipo 'User' diretamente de 'firebase/auth'
import { auth } from "../../utils/firebase"; // A instância do Firebase Auth

const Informacoes = () => {
  const [species, setSpecies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); // Usando o tipo correto 'User' importado de 'firebase/auth'
  const router = useRouter();

  // Verifica o estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Se o usuário não estiver autenticado, redireciona para a tela de login
        router.push("/login");
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe(); // Limpeza ao desmontar
  }, [router]);

  // Carregar dados da API
  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const res = await fetch("https://api.gbif.org/v1/species");
        const data = await res.json();
        setSpecies(data.results); // Ajuste conforme a estrutura da API
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchSpecies();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Enquanto o estado de autenticação não for verificado, exibe o carregamento
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F2F1] to-[#B2DFDB] flex flex-col">
      <Navbar /> {/* Aqui está a Navbar importada */}

      <h1 className="text-4xl font-bold text-center text-[#1E3A8A] py-10">
        Informações sobre as Espécies
      </h1>

      <div className="px-6 py-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {species.map((specie) => (
              <div
                key={specie.key}
                className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition"
              >
                <img
                  src={
                    specie.media && specie.media.length > 0
                      ? specie.media[0].identifier
                      : "/path-to-default-image.jpg" // Imagem padrão
                  }
                  alt={specie.scientificName}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{specie.scientificName}</h2>
                <p className="text-gray-700">{specie.description}</p>
                <button
                  onClick={() => console.log(specie.key)} // Aqui você pode adicionar a navegação para mais detalhes
                  className="mt-4 text-green-600 hover:text-green-700 transition"
                >
                  Ver Mais
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Informacoes;

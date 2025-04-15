import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useRouter } from "next/router";

interface Species {
  key: number;
  scientificName: string;
  canonicalName?: string;
  rank: string;
  kingdom: string;
  phylum?: string;
  order?: string;
  family?: string;
  genus?: string;
}

interface SpeciesWithImage extends Species {
  imageUrl?: string;
}

export default function Informacoes() {
  const [speciesList, setSpeciesList] = useState<SpeciesWithImage[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesWithImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10); 
  const imageCache = new Map<number, string>();
  const router = useRouter();

  const fetchSpecies = async (searchQuery = "mammal", pageNum = 0, limit = 10) => {
    setLoading(true);
    try {
      const offset = pageNum * limit;
      const response = await fetch(
        `https://api.gbif.org/v1/occurrence/search?q=${searchQuery}&mediaType=StillImage&limit=${limit}&offset=${offset}`
      );
      const data = await response.json();
      const rawResults = data.results as any[];

      const speciesWithImages = rawResults.map((item) => ({
        key: item.speciesKey,
        scientificName: item.scientificName,
        canonicalName: item.canonicalName,
        rank: item.rank || "-", 
        kingdom: item.kingdom,
        phylum: item.phylum,
        order: item.order,
        family: item.family,
        genus: item.genus,
        imageUrl: item.media && item.media.length > 0 ? item.media[0].identifier : "", 
      }));

      setSpeciesList(speciesWithImages);
    } catch (error) {
      console.error("Erro ao buscar espécies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(0);
    fetchSpecies(search, 0, perPage);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchSpecies(search || "mammal", nextPage, perPage);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(page - 1, 0);
    setPage(prevPage);
    fetchSpecies(search || "mammal", prevPage, perPage);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#E0F2F1] to-[#FFFFFF]">
      <Navbar />

      <main className="flex-grow px-6 pt-40 pb-10"> 
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8 flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome científico..."
            className="flex-grow p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            aria-label="Buscar espécies"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-[#1E3A8A] text-white rounded-md hover:bg-[#0f2c6e] transition"
          >
            Buscar
          </button>
        </form>

        {loading ? (
          <div className="flex justify-center mt-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#1E3A8A]" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {speciesList.map((species) => (
                <div
                  key={species.key}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedSpecies(species)}
                >
                  <img
                    src={species.imageUrl}
                    alt={species.scientificName}
                    title={species.imageUrl === "" ? "Imagem não disponível" : species.scientificName}
                    className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                  />
                  <h2 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                    {species.canonicalName || species.scientificName}
                  </h2>
                  <p className="text-sm text-gray-700 mb-1"><strong>Reino:</strong> {species.kingdom || "-"}</p>
                  <p className="text-sm text-gray-700 mb-1"><strong>Filo:</strong> {species.phylum || "-"}</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Família:</strong> {species.family || "-"}</p>
                  <a
                    href={`https://www.gbif.org/species/${species.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Ver na GBIF ↗
                  </a>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={handlePrevPage}
                disabled={page === 0}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
              >
                Anterior
              </button>
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#0f2c6e]"
              >
                Próxima
              </button>
            </div>
          </>
        )}
        {selectedSpecies && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onKeyDown={(e) => e.key === "Escape" && setSelectedSpecies(null)}
          >
            <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
              <button
                onClick={() => setSelectedSpecies(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                aria-label="Fechar modal"
              >
                &times;
              </button>
              <img src={selectedSpecies.imageUrl} alt={selectedSpecies.scientificName} className="w-full h-60 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                {selectedSpecies.canonicalName || selectedSpecies.scientificName}
              </h2>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Nome Científico:</strong> {selectedSpecies.scientificName}</li>
                <li><strong>Reino:</strong> {selectedSpecies.kingdom || "-"}</li>
                <li><strong>Filo:</strong> {selectedSpecies.phylum || "-"}</li>
                <li><strong>Ordem:</strong> {selectedSpecies.order || "-"}</li>
                <li><strong>Família:</strong> {selectedSpecies.family || "-"}</li>
                <li><strong>Gênero:</strong> {selectedSpecies.genus || "-"}</li>
                <li><strong>Categoria Taxonômica:</strong> {selectedSpecies.rank}</li>
                <li>
                  <a
                    href={`https://www.gbif.org/species/${selectedSpecies.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Ver mais na GBIF ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FaUserAlt, FaSignOutAlt, FaHome, FaLeaf } from "react-icons/fa"; 

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); 
  const router = useRouter();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  
  const handleLogout = async () => {
    await signOut(auth); 
    router.push("/login"); 
  };

  const handleLogoClick = () => {
    router.push("/"); 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-5 bg-gradient-to-r from-[#1E3A8A] to-[#B2DFDB] shadow-lg z-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        <div onClick={handleLogoClick} className="cursor-pointer flex items-center space-x-2">
          <img src="/logo_biodata.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-white font-bold text-2xl">BioData</h1>
        </div>

        
        <div className="hidden md:flex items-center justify-center space-x-10 text-white font-semibold">
          <button
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 text-white hover:text-[#1E3A8A] transition duration-300"
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </button>

          {user && (
            <button
              onClick={() => router.push("/informacoes")}
              className="flex items-center space-x-2 text-white hover:text-[#1E3A8A] transition duration-300"
            >
              <FaLeaf className="text-xl" />
              <span>Espécies</span>
            </button>
          )}
        </div>

        
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <FaUserAlt className="text-white text-2xl" />
                <span className="text-white font-semibold">{user.displayName || user.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-white text-[#1E3A8A] font-semibold rounded-md hover:bg-[#1E3A8A] hover:text-white transition duration-300"
              >
                <FaSignOutAlt />
                <span>Sair</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="flex items-center space-x-2 px-4 py-2 bg-white text-[#1E3A8A] font-semibold rounded-md hover:bg-[#1E3A8A] hover:text-white transition duration-300"
            >
              <FaUserAlt />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

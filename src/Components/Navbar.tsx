import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FaUserAlt, FaSignOutAlt, FaHome, FaLeaf, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-5 bg-gradient-to-r from-[#1E3A8A] to-[#B2DFDB] shadow-lg z-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap">
        
        <div onClick={handleLogoClick} className="cursor-pointer flex items-center space-x-2">
          <img src="/logo_biodata.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-white font-bold text-2xl">BioData</h1>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <FaBars className="text-2xl" />
          </button>
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
                <span className="text-white font-semibold text-sm truncate max-w-[150px]">
                  {user.displayName || user.email}
                </span>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-[#1E3A8A] to-[#B2DFDB] p-5">
          <button
            onClick={() => router.push("/")}
            className="block text-white hover:text-[#1E3A8A] py-2"
          >
            Home
          </button>
          {user && (
            <button
              onClick={() => router.push("/informacoes")}
              className="block text-white hover:text-[#1E3A8A] py-2"
            >
              Espécies
            </button>
          )}
          <div className="mt-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="block text-white hover:text-[#1E3A8A] py-2"
              >
                Sair
              </button>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="block text-white hover:text-[#1E3A8A] py-2"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

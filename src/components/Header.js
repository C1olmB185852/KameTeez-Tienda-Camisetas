import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header className="w-full h-20 bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-3xl text-white font-extrabold cursor-pointer transition-colors duration-300"
          onClick={handleNavigateToHome}
        >
          KameTeez
        </h1>

        {/* Menú para pantallas grandes */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button
            className="flex items-center gap-2 text-white text-lg  transition-colors duration-300"
            onClick={handleNavigateToHome}
          >
            <AiOutlineHome className="text-2xl" /> Inicio
          </button>
          <button
            className="flex items-center gap-2 text-white text-lg transition-colors duration-300"
            onClick={() => navigate("/login")}
          >
            <AiOutlineLogin className="text-2xl" /> Iniciar Sesión
          </button>
        </nav>

        {/* Icono del carrito */}
        <div>
          <AiOutlineShoppingCart
            className="w-8 h-8 text-white cursor-pointer transition-colors duration-300"
            onClick={handleCartClick}
          />
        </div>

        {/* Botón de menú para móviles */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {menuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-orange-700 to-orange-900 border-t border-gray-700">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <button
              className="flex items-center gap-2 text-white text-lg transition-colors duration-300"
              onClick={() => {
                handleNavigateToHome();
                setMenuOpen(false);
              }}
            >
              <AiOutlineHome className="text-2xl" /> Inicio
            </button>
            <button
              className="flex items-center gap-2 text-white text-lg transition-colors duration-300"
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
            >
              <AiOutlineLogin className="text-2xl" /> Iniciar Sesión
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

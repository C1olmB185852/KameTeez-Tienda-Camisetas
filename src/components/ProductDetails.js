import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useCart } from "../pages/CartContext";
import { AiOutlineCheckCircle } from "react-icons/ai";

import {
  ZoroOniepice,
  onepiece2,
  onepiece3,
  onepiece4,
  dragonball1,
  naruto1,
  barcelonaRetro,
  wolverine,
  losSimons,
  losSimons2,
  atletico,
  barcelona,
  chelsea,
  newcastel,
  RealRetro,
  RealRetro2,
} from "../assets";

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);

const productos = [
  {
    id: "1",
    name: "Camiseta de Futbol Liverpool",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. Premier League - Equipo: Liverpool - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: ZoroOniepice,
  },
  {
    id: "2",
    name: "Camiseta De Futbol Manchester United",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. Premier League - Equipo: Manchester United - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: onepiece2,
  },
  {
    id: "3",
    name: "Camiseta De Futbol Manchester City",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. Premier League - Equipo: Manchester City - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: onepiece3,
  },
  {
    id: "4",
    name: "Camiseta De Futbol Milan",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. Serie A - Equipo: Milan - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: onepiece4,
  },
  {
    id: "5",
    name: "Camiseta De Futbol Bayern Munich",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. Bundesliga - Equipo: Bayern Munich - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: naruto1,
  },
  {
    id: "6",
    name: "Camiseta De Futbol Del Real Madrid (Retro)",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. LaLiga - Equipo: Real Madrid - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L - XL",
    category: "Hombre",
    image: dragonball1,
  },
  {
    id: "7",
    name: "Camiseta De Futbol Del Atletico De Madrid",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. LaLiga - Equipo: Atletico De Madrid - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: atletico,
  },
  {
    id: "8",
    name: "Camiseta De Futbol Del Barcelona",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. LaLiga - Equipo: Barcelona - Camiseta AAA - Buena Calidad. Tallas Disponibles: L",
    category: "Hombre",
    image: barcelona,
  },
  {
    id: "9",
    name: "Camiseta De Futbol Del Chelsea (Blanca)",
    price: 65000,
    description:
    "Camiseta-Jersey de Futbol. Premier League - Equipo: Chelsea - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: chelsea,
  },
  {
    id: "10",
    name: "Camiseta De Futbol Del Newcastle United",
    price: 65000,
    description:
    "Camiseta-Jersey de Futbol. Premier League - Equipo: Newcastle United - Camiseta AAA - Buena Calidad - Version: Aficionado. Tallas Disponibles: L",
    category: "Hombre",
    image: newcastel,
  },

  {
    id: "11",
    name: "Camiseta De Futbol Del Barcelona Retro 2009/2010",
    price: 75000,
    description:
    "Camiseta-Jersey de Futbol. LaLiga - Equipo: Barcelona - Camiseta AAA - Buena Calidad. Tallas Disponibles: L",
    category: "Hombre",
    image: barcelonaRetro,
  },
  {
    id: "12",
    name: "Camiseta De Futbol Del Real Madrid Retro 2006/2007",
    price: 75000,
    description:
    "Camiseta-Jersey de Futbol. LaLiga - Equipo: Real Madrid - Camiseta AAA - Buena Calidad. Tallas Disponibles: XL - L",
    category: "Hombre",
    image: RealRetro,
  },
  {
    id: "13",
    name: "Camiseta De Futbol Del Real Madrid Retro 2017/2018",
    price: 75000,
    description:
    "Camiseta-Jersey de Futbol. LaLiga - Equipo: Real Madrid - Camiseta AAA - Buena Calidad. Tallas Disponibles: XL - L",
    category: "Hombre",
    image: RealRetro2,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const product = productos.find((prod) => prod.id === id);

  if (!product) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-700">Producto no encontrado.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all duration-300"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handleGoToCart = () => navigate("/cart");

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-12">
      <div className="w-full md:w-1/3">
        <img
          className="w-full h-auto object-cover rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-xl font-bold text-orange-600">{formatCurrency(product.price)}</p>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-800">
          Categoría:{" "}
          <span className="font-medium text-orange-600">{product.category}</span>
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleAddToCart}
            className="bg-orange-600 text-white px-6 py-3 rounded-xl text-lg shadow-md transform transition duration-300 hover:bg-orange-700 hover:scale-105"
          >
            Añadir al Carro
          </button>
          <button
            onClick={handleGoToCart}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl text-lg shadow-md transform transition duration-300 hover:bg-gray-300 hover:scale-105"
          >
            Ver Carrito
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div
          className="fixed top-4 right-4 bg-white border border-blue-200 rounded-lg shadow-lg p-4 z-50 animate-slide-in"
          role="alert"
        >
          <div className="flex items-center gap-2">
            <AiOutlineCheckCircle className="text-orange-500 text-2xl" />
            <p className="text-gray-800 font-semibold">
              ¡Producto añadido al carrito!
            </p>
          </div>
          <button
            onClick={() => setShowConfirmation(false)}
            className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string,   
};

export default ProductDetails;

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
  dragonball2,
  wolverine,
  losSimons,
  losSimons2,
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
    name: "Camiseta de Fútbol Del America",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: America de Cali. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: ZoroOniepice,
  },
  {
    id: "2",
    name: "Camiseta De Fútbol Del Cali",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Cali. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: onepiece2,
  },
  {
    id: "3",
    name: "Camiseta De Fútbol Del Atletico Nacional",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Atletico Nacional. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: onepiece3,
  },
  {
    id: "4",
    name: "Camiseta De Fútbol Del Pereira",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Pereira. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: onepiece4,
  },
  {
    id: "5",
    name: "Camiseta De Fútbol Del Tolima",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Tolima. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: naruto1,
  },
  {
    id: "6",
    name: "Camiseta De Fútbol Del Portugal",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Pais: Portugal. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: dragonball1,
  },
  {
    id: "7",
    name: "Camiseta De Fútbol Del Real Madrid",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. LaLiga Equipo: Real Madrid. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: dragonball2,
  },
  {
    id: "8",
    name: "Camiseta De Fútbol Del Barcelona",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. LaLiga Equipo: Barcelona. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: wolverine,
  },
  {
    id: "9",
    name: "Chaqueta De La Seleccion Colombia",
    price: 120000,
    description:
      "Chaqueta de Futbol. Pais: Colombia. Chaqueta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: losSimons,
  },
  {
    id: "10",
    name: "Chaqueta Del Millonarios",
    price: 120000,
    description: "Chaqueta Del Millonarios",
    category: "Hombre",
    image: losSimons2,
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

      {/* Confirmación de producto añadido */}
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZoroOniepice, onepiece2, onepiece3, onepiece4, dragonball1,
  naruto1, dragonball2, wolverine, losSimons,
  losSimons2, ChaquetaSantae } from "../assets";
import ProductsCard from "../components/ProductsCard"; 

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Camiseta De Futbol Liverpool ",
      price: 65000,
      category: "Premier League",
      image: ZoroOniepice
    },
    {
      id: 2,
      name: "Camiseta De Futbol Manchester United",
      price: 65000,
      category: "Premier League",
      image: onepiece2
    },
    {
      id: 3,
      name: "Camiseta De Futbol Mancherter City",
      price: 65000,
      category: "Premier League",
      image: onepiece3
    },
    {
      id: 4,
      name: "Camiseta De Futbol Milan",
      price: 65000,
      category: "Serie A",
      image: onepiece4
    },
    {
      id: 5,
      name: "Camiseta De Futbol Bayern Munich",
      price: 65000,
      category: "BundesLiga",
      image: naruto1
    },
  {
      id: 6,
      name: "Camiseta De Futbol Real Madrid (Retro)",
      price: 65000,
      category: "Liga Española",
      image: dragonball1
  },
    {
      id: 7,
      name: "Camiseta De Fútbol Real Madrid",
      price: 65000,
      category: "Liga Española",
      image: dragonball2
    },
    {
      id: 8,
      name: "Camiseta De Fútbol Del Barcelona",
      price: 35000,
      category: "Marvel",
      image: wolverine
    },
    {
      id: 9,
      name: "Chaqueta De La Seleccion Colombia",
      price: 35000,
      category: "Los Simpson",
      image: losSimons
    },
    {
      id: 10,
      name: "Chaqueta Del Millonarios",
      price: 35000,
      category: "Los Simpson",
      image: losSimons2
    },
  ];

  useEffect(() => {
    const filtered = products.filter(product => product.category === categoryId);
    setFilteredProducts(filtered);
  }, [categoryId]);

  return (
    <div className="py-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl  text-center text-orange-600 mb-8">
        Categoría: <span className="capitalize">{categoryId}</span>
      </h1>

      <ProductsCard products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;

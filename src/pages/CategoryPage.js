import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZoroOniepice, onepiece2, onepiece3, onepiece4, dragonball1,
  naruto1, dragonball2, wolverine, losSimons, newcastel, 
  chelsea,
  barcelona,
  atletico} from "../assets";
import ProductsCard from "../components/ProductsCard"; 

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Liverpool 2023/2024 ",
      price: 65000,
      category: "Premier League",
      image: ZoroOniepice
    },
    {
      id: 2,
      name: "Manchester United 2023/2024",
      price: 65000,
      category: "Premier League",
      image: onepiece2
    },
    {
      id: 3,
      name: "Mancherter City 2023/2024",
      price: 65000,
      category: "Premier League",
      image: onepiece3
    },
    {
      id: 4,
      name: "Milan 2023/2024",
      price: 65000,
      category: "Serie A",
      image: onepiece4
    },
    {
      id: 5,
      name: "Bayern Munich 2023/2024",
      price: 65000,
      category: "BundesLiga",
      image: naruto1
    },
  {
      id: 6,
      name: "Real Madrid (Retro)",
      price: 65000,
      category: "Liga Española",
      image: dragonball1
  },
    {
      id: 7,
      name: "Atletico De Madrid 2023/2024",
      price: 65000,
      category: "Liga Española",
      image: atletico
    },
    {
      id: 8,
      name: "Barcelona 2023/2024",
      price: 65000,
      category: "Liga Española",
      image: barcelona
    },
    {
      id: 9,
      name: "Chelsea (Blanca) 2023/2024",
      price: 65000,
      category: "Premier League",
      image: chelsea
    },
    {
      id: 10,
      name: "Newcastle United 2023/2024",
      price: 65000,
      category: "Premier League",
      image: newcastel
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

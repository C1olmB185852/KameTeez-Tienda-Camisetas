// src/components/Products.js
import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { ZoroOniepice, onepiece2, onepiece3, onepiece4, naruto1, dragonball1,
  dragonball2, wolverine, losSimons,
  losSimons2} from '../assets';

const Products = () => {

    const [products] = useState([
    {
      id: 1,
      name: "Camiseta De Fútbol Del America De Cali ",
      price: 35000,
      image: ZoroOniepice
    },
    {
      id: 2,
      name: "Camiseta De Fútbol Del Cali",
      price: 35000,
      image: onepiece2
    },
    {
      id: 3,
      name: "Camiseta De Fútbol Del Atletico Nacional",
      price: 35000,
      image: onepiece3
    },
    {
      id: 4,
      name: "Camiseta De Fútbol Del Pereira",
      price: 35000,
      image: onepiece4
    },
    {
        id: 5,
        name: "Camiseta De Fútbol Del Tolima",
        price: 35000,
        image: naruto1
      },
    {
        id: 6,
        name: "Camiseta De Fútbol Del Portugal",
        price: 35000,
        image: dragonball1
    },
    {
        id: 7,
        name: "Camiseta De Fútbol Del Real Madrid",
        price: 35000,
        image: dragonball2
    },
    {
        id: 8,
        name: "Camiseta De Fútbol Del Barcelona",
        price: 35000,
        image: wolverine
    },
    {
        id: 9,
        name: "Chaqueta De La Seleccion Colombia",
        price: 35000,
        image: losSimons
    },
    {
        id: 10,
        name: "Chaqueta Del Millonarios",
        price: 35000,
        image: losSimons2
    },
    
  ]);
  
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold bg-orange-700 text-white py-3 w-60 text-center">
        KameTeez
        </h1>
        <span className="w-20 h-[3px] bg-orange-700"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Síguenos en Instagram para estar al tanto de nuevas camisetas que tengamos en venta. 
          Salimos como{" "}
          <a 
            href="https://www.instagram.com/camisetas_sportvibe/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange-500 hover:underline font-bold"
          >
            KameTeez
          </a>
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard products={products} />
      </div>
    </div>
  );
};

export default Products;

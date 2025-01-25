// src/components/Products.js
import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { ZoroOniepice, onepiece2, onepiece3, onepiece4, naruto1, dragonball1,
  chelsea, atletico, barcelona,
  newcastel,
  barcelonaRetro,
  RealRetro,
  RealRetro2,
  RealRetro3} from '../assets';

const Products = () => {

    const [products] = useState([
    {
        id: 11,
       name: "Barcelona Retro 2009/2010",
        price: 75000,
        image: barcelonaRetro
    },
    {
      id: 12,
      name: "Real Madrid Retro 2006/2007",
      price: 75000,
      image: RealRetro
    },
    {
      id: 13,
      name: "Real Madrid Retro 2017/2018",
      price: 75000,
      image: RealRetro2
    },
    {
      id: 14,
      name: "Real Madrid Retro 2006/2007",
      price: 75000,
      image: RealRetro3
    },
    {
      id: 1,
      name: "Liverpool 2023/2024",
      price: 65000,
      image: ZoroOniepice
    },
    {
      id: 2,
      name: "Manchester United 2023/2024",
      price: 65000,
      image: onepiece2
    },
    {
      id: 3,
      name: "Mancherter City 2023/2024",
      price: 65000,
      image: onepiece3
    },
    {
      id: 4,
      name: "Milan 2023/2024",
      price: 65000,
      image: onepiece4
    },
    {
        id: 5,
        name: "Bayern Munich 2023/2024",
        price: 65000,
        image: naruto1
      },
    {
        id: 6,
        name: "Real Madrid (Retro)",
        price: 65000,
        image: dragonball1
    },
     {
         id: 7,
         name: "Atletico De Madrid 2023/2024",
         price: 65000,
         image: atletico
     },
     {
      id: 8,
      name: "Barcelona 2023/2024",
      price: 65000,
      image: barcelona
     },
     {
      id: 9,
      name: "Chelsea (Blanca) 2023/2024",
      price: 65000,
      image: chelsea
     },
     {
      id: 10,
      name: "Newcastle United 2023/2024",
      price: 65000,
      image: newcastel
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
            href="https://www.instagram.com/kameteez/?igsh=dTZuNzAxcjduc253" 
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
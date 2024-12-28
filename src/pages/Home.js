import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import CategoriesSection from "../components/CategoriesSection";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ligaEspañolaa, ligaBetPlay, LigaPremierLeague, LigaAlemana, LigaItaliana,
  LigaFrancesa, bannerDragonBall
} from '../assets';


const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData(); 
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const mockCategories = [
    { id: "Liga Española", name: "Liga Española", image: bannerDragonBall },
    { id: "Premier League", name: "Premier League", image: ligaBetPlay },
    { id: "Serie A", name: "Serie A", image: ligaEspañolaa },
    { id: "BundesLiga", name: "BundesLiga", image: LigaPremierLeague },
    // { id: "Marvel", name: "Marvel", image: LigaAlemana },
    // { id: "Liga Italiana", name: "Liga Italiana", image: LigaItaliana },
    // { id: "Liga Francesa", name: "Liga Francesa", image: LigaFrancesa },

  ];

  useEffect(() => {
    setProducts(data || []);
    setCategories(mockCategories);
  }, [data]);

  const handleCategoryClick = (categoryId) => {
    console.log(`Categoría seleccionada: ${categoryId}`);
    navigate(`/categoria/${categoryId}`);
  };

  return (
    <div className="w-full bg-gray-50">
      <section className="w-full">
        <Banner />
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 mt-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Categorías</h2>
        <CategoriesSection categories={categories} onCategoryClick={handleCategoryClick} />
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 mt-12">
        <Products products={products} />
      </section>
    </div>
  );
};

export default Home;
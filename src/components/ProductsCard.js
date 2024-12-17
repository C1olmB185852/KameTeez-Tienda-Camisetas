import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="relative">
            {/* Imagen del producto */}
            <img
              className="w-full h-64 object-cover"
              src={product.image}
              alt={product.name}
            />
            {/* Efecto de superposición al pasar el ratón */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300" />
          </div>

          {/* Detalles del producto */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800 truncate">
              {product.name}
            </h3>
            <p className="text-orange-600 text-lg font-semibold mt-2">
              ${product.price.toLocaleString('es-CO')}
            </p>
            <p className="text-gray-500 text-sm mt-2 truncate">
              {product.description || 'Camiseta de alta calidad para los fanáticos del anime.'}
            </p>

            {/* Botón para ver detalles */}
            <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all">
              Ver detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;

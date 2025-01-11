import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer group"
          onClick={() => navigate(`/product/${product.id}`)}
          role="button"
          aria-label={`Ver detalles de ${product.name}`}
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && navigate(`/product/${product.id}`)}
          style={{ minHeight: '24rem' }} // Ajuste mínimo para las tarjetas
        >
          <div className="relative flex-shrink-0 h-64">
            {/* Imagen del producto */}
            <img
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              src={product.image}
              alt={product.name}
            />
            {/* Efecto de superposición al pasar el ratón */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </div>

          {/* Detalles del producto */}
          <div className="flex flex-col justify-between p-5 flex-grow">
            <div>
              <h3 className="text-xl font-bold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-orange-600 text-lg font-semibold mt-2">
                ${product.price.toLocaleString('es-CO')}
              </p>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {product.description || ''}
              </p>
            </div>

            {/* Botón para ver detalles */}
            <button
              className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              aria-label="Ver detalles del producto"
            >
              Ver detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;

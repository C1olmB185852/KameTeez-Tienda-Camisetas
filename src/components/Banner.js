import React, { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { banner1, EquiposNacionales, banner2, Anuncio } from '../assets';

const Banner = () => {
    const data = [
        { image: banner1, alt: 'Liga Española - Imagen 1' },
        // { image: banner2, alt: 'Liga Española - Imagen 2' },
        // { image: EquiposNacionales, alt: 'Liga Española - Imagen 3' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true); // Mostrar popup al cargar la página
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="w-full h-auto overflow-hidden relative">
            {/* Popup de Anuncio Mejorado */}
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50 transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-[400px] transform scale-100 animate-fadeIn">
                        <div className="flex justify-end">
                            <button
                                onClick={closePopup}
                                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                            >
                                &times;
                            </button>
                        </div>
                        <h2 className="text-2xl font-extrabold text-center text-black mb-4">
                            ¡Oferta Especial del Día!
                        </h2>
                        <img
                            src={Anuncio} // Aquí usas 'src' para mostrar la imagen
                            alt="Anuncio Especial"
                            className="w-full rounded-lg mb-4 shadow-md"
                        />
                        <p className="text-black text-center mb-6">
                            Aprovecha un **20% de descuento** en todos nuestros productos solo por hoy.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={closePopup}
                                className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg transition duration-300"
                            >
                                Ver Más
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Contenedor de imágenes */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {data.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-[300px] sm:h-[500px] object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Botones de navegación */}
            <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-[20px]">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 sm:w-14 sm:h-12 border border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 rounded-full"
                >
                    <HiArrowLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 sm:w-14 sm:h-12 border border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 rounded-full"
                >
                    <HiArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Banner;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image"; 
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Array de logos con width y height incluidos
const productos = [
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 1' },
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 2' },
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 3' },
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 4' },
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 5' },
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 6' },
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 7' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleLogos = 4.9; // Cantidad de logos visibles
  const slideInterval = 5000; // Intervalo de 5 segundos
  const maxIndex = 5 // Índice máximo de desplazamiento manual

  const handleNext = () => {
    if (currentIndex < maxIndex) {  // Limitar el desplazamiento al índice máximo
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
  };

  // Efecto para hacer que el slider se deslice automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, slideInterval);
    
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [currentIndex]);

  return  (
    <div className="relative w-full flex items-center justify-center">
      {/* Botón de navegación izquierda */}
      <button
        className="absolute left-[24px] lg:left-[40px] z-20 opacity-50"
        onClick={handlePrev}
      >
        <FaArrowLeft size={30} style={{ color: 'black' }} />
      </button>

      {/* Contenedor de los logos */}
      <div className="overflow-hidden w-[80%]"> {/* Ajusta el tamaño del contenedor */}
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * (90 / visibleLogos)}%` }}
        transition={{ duration: 0.5 }}
        style={{ width: `${(productos.length / visibleLogos) * 100}%` }}
      >
          {productos.map((producto, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center mx-10 lg:mx-5 xl:mx-8"
              style={{ width: `${100 / visibleLogos}%`, height: 'auto' }} // Ajusta la altura a 'auto'
            >
              <Image
                src={producto.src}
                alt={`Producto ${index + 1}`}
                width={producto.width} // Esto controla el tamaño de la imagen
                height={producto.height} // Asegura que mantenga su proporción
                className="object-contain mx-auto"
              />
              {/* Texto debajo de la imagen */}
              <p className="mt-4 text-center text-black lg:text-[24px]">{producto.nombre}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botón de navegación derecha */}
      <button
        className="absolute right-[28px] lg:right-[40px] z-20 opacity-50"
        onClick={handleNext}
        disabled={currentIndex >= maxIndex} // Deshabilitar botón si se llega al límite
      >
        <FaArrowRight size={30} style={{ color: 'black' }} />
      </button>
    </div>
  );
};

export default Slider;

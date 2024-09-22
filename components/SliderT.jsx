import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image"; 
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Array de prod con width y height incluidos
const productos = [
  { src: '/productos/pack-cafe.png', width: 500, height: 200, nombre: 'Pack de Café 1' },
  { src: '/productos/Bandeja-1.png', width: 500, height: 200, nombre: 'Bandeja 1' },
  { src: '/productos/Bandeja-2.png', width: 500, height: 200, nombre: 'Bandeja 2' },
  { src: '/productos/Bandeja-3.png', width: 500, height: 200, nombre: 'Bandeja 3' },
  { src: '/productos/Bandeja-4.png', width: 500, height: 200, nombre: 'Bandeja 4' },
  { src: '/productos/Bandeja-5.png', width: 500, height: 200, nombre: 'Bandeja 5' },
  { src: '/productos/Bowl-1.png', width: 500, height: 200, nombre: 'Bowl 1' },
  { src: '/productos/Bowl-2.png', width: 500, height: 200, nombre: 'Bowl 2' },
  { src: '/productos/Cafe-2.png', width: 500, height: 200, nombre: 'Cafe 2' },
  { src: '/productos/Cafe-4.png', width: 500, height: 200, nombre: 'Cafe 4' },
  { src: '/productos/Cafe-5.png', width: 500, height: 200, nombre: 'Cafe 5' },
];

const SliderT = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleLogos = 3.2; // Cantidad de logos visibles
  const slideInterval = 5000; // Intervalo de 5 segundos
  const maxIndex = 9// Índice máximo de desplazamiento manual

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

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Botón de navegación izquierda */}
      <button
        className="absolute left-[50px] z-20 opacity-50"
        onClick={handlePrev}
      >
        <FaArrowLeft size={30} style={{ color: 'black' }} />
      </button>

      {/* Contenedor de los logos */}
      <div className="overflow-hidden w-[70%]"> {/* Ajusta el tamaño del contenedor */}
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (50 / visibleLogos)}%` }}
          transition={{ duration: 0.5 }}
          style={{ width: `${(productos.length / visibleLogos) * 100}%` }} 
        >
          {productos.map((producto, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center mx-6  lg:mx-5 xl:mx-8" // Centramos vertical y horizontalmente
              style={{ width: `${40 / visibleLogos}%`, height: '230px' }} // Ajusta la altura según sea necesario
            >
              <Image
                src={producto.src}
                alt={`Productos ${index + 1}`}
                width={producto.width} 
                height={producto.height}
                className="mx-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botón de navegación derecha */}
      <button
        className="absolute right-[50px] z-20 opacity-50"
        onClick={handleNext}
        disabled={currentIndex >= maxIndex} // Deshabilitar botón si se llega al límite
      >
        <FaArrowRight size={30} style={{ color: 'black' }} />
      </button>
    </div>
  );
};

export default SliderT;

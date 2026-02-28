import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const MotionH1 = motion.h1;
const MotionDiv = motion.div;
const MotionP = motion.p;

// Usamos imágenes de Unsplash temporales para que no se rompa tu código.
// Luego puedes cambiar estas URLs por las tuyas en public/img/...
const heroImages = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop", // Código Matrix
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop", // Servidores Cyber
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"  // Redes / Futuro
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efecto para cambiar la imagen cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full min-h-[70vh] rounded-[2.5rem] overflow-hidden mb-32 border border-white/10 flex items-center shadow-[0_0_40px_rgba(34,211,238,0.05)]">
      
      {/* 1. EL CARRUSEL DE FONDO */}
      <div className="absolute inset-0 w-full h-full z-0 bg-slate-950">
        <AnimatePresence mode="popLayout">
          <MotionDiv
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={heroImages[currentIndex]} 
              alt="Cyber Background" 
              className="w-full h-full object-cover mix-blend-luminosity"
            />
          </MotionDiv>
        </AnimatePresence>

        {/* Gradiente oscuro de izquierda a derecha para que el texto resalte */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        {/* Gradiente sutil abajo para fusionarse con el resto de la página */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
      </div>

      {/* 2. EL CONTENIDO PRINCIPAL (TEXTO) */}
      <div className="relative z-20 p-10 md:p-16 max-w-3xl">
        <MotionH1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] !text-white tracking-tight !font-sans"
        >
          CRAFTING <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic pr-4">
            CYBER
          </span> 
          FUTURE.
        </MotionH1>
        
        <MotionP 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl !text-slate-400 leading-relaxed font-light !font-sans max-w-xl"
        >
          Especialistas en desarrollo de software de alto rendimiento y arquitectura de seguridad ofensiva.
        </MotionP>

        {/* Indicadores visuales del carrusel (los puntitos) */}
        <div className="flex gap-2 mt-12">
          {heroImages.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

    </header>
  );
}
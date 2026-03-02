import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 flex justify-between items-center border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 relative">
      
      {/* 1. ESPACIO IZQUIERDO */}
      <div className="w-32 hidden md:block"></div>

      {/* 2. LOGO CENTRADO (Intacto, como pediste) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 cursor-pointer group">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-100 rounded-full flex items-center justify-center p-1 shadow-[0_0_40px_rgba(34,211,238,0.3)] border-2 border-cyan-400/50 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
          <img 
            src="/img/AXOLABS.png" 
            alt="Axo Labs Logo" 
            className="w-[85%] h-[85%] object-contain drop-shadow-xl"
          />
        </div>
        <span className="text-2xl md:text-3xl font-black tracking-tighter italic !text-white !font-sans hidden sm:block">
          AXO<span className="!text-cyan-400">LABS</span>
        </span>
      </div>

      {/* 3. ZONA DE CONTACTO (Más pequeña ahora) */}
      <div className="relative z-10 ml-auto md:ml-0">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          // Reduje de px-5 py-2 a px-3 py-1.5 y bajé a text-xs
          className="px-3 py-1.5 border border-cyan-500/30 !text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all rounded-lg text-xs !font-mono flex items-center gap-2 bg-slate-950/50"
        >
          Contact <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* MENÚ DESPLEGABLE (Más angosto y compacto) */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-slate-900 border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-1 z-50 flex flex-col overflow-hidden transition-all">
            
            <a 
              href="https://wa.me/523326107639?text=Hola%20Luis,%20me%20interesa%20el%20desarrollo%20de%20software%20en%20Axo%20Labs" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 transition-colors group"
            >
              <MessageCircle size={16} className="text-slate-400 group-hover:text-green-400 transition-colors" /> 
              <div className="flex flex-col">
                <span className="text-xs font-medium !text-slate-300 group-hover:!text-white !font-sans leading-none mb-0.5">WhatsApp</span>
                <span className="text-[8px] !text-slate-500 !font-mono uppercase tracking-tighter leading-none">Ingeniería</span>
              </div>
            </a>

            <a 
              href="https://wa.me/523334511710?text=Hola%20Uriel,%20me%20interesa%20estrategia%20y%20marketing%20con%20Axo%20Labs" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 transition-colors border-t border-white/5 group"
            >
              <MessageCircle size={16} className="text-slate-400 group-hover:text-green-400 transition-colors" /> 
              <div className="flex flex-col">
                <span className="text-xs font-medium !text-slate-300 group-hover:!text-white !font-sans leading-none mb-0.5">WhatsApp</span>
                <span className="text-[8px] !text-slate-500 !font-mono uppercase tracking-tighter leading-none">Estrategia</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/axo.labs" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-xs !text-slate-300 hover:!text-fuchsia-400 hover:bg-white/5 transition-colors font-medium !font-sans border-t border-white/5 group"
            >
              <Instagram size={14} className="text-slate-400 group-hover:text-fuchsia-400 transition-colors" /> 
              Instagram
            </a>

            <a 
              href="mailto:axolabs26@gmail.com" 
              className="flex items-center gap-2 px-3 py-2 text-xs !text-slate-300 hover:!text-cyan-400 hover:bg-white/5 transition-colors font-medium !font-sans border-t border-white/5 group"
            >
              <Mail size={14} className="text-slate-400 group-hover:text-cyan-400 transition-colors" /> 
              Gmail
            </a>

          </div>
        )}
      </div>

    </nav>
  );
}
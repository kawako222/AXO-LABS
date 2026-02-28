import React from 'react';
import { MonitorSmartphone, BrainCircuit, Scissors } from 'lucide-react';

export default function Services() {
  const projects = [
    {
      id: 1,
      title: "Management Academy",
      subtitle: "B2B SaaS / EdTech",
      description: "Sistema integral en la nube para la gestión administrativa de academias de danza. Automatización de pagos, control de asistencias y portal de alumnos.",
      icon: MonitorSmartphone,
      color: "!text-cyan-400",
      borderColor: "group-hover:border-cyan-400/50",
      image: "/img/argosbn.png" // 👈 Pon aquí la foto de Argos
    },
    {
      id: 2,
      title: "ML Lectoescritura",
      subtitle: "Machine Learning / IA",
      description: "Modelo de inteligencia artificial diseñado para asistir, evaluar y acelerar el proceso de lectoescritura en niños de etapa infantil.",
      icon: BrainCircuit,
      color: "!text-fuchsia-500",
      borderColor: "group-hover:border-fuchsia-500/50",
      image: "/img/pato.png" // 👈 Pon aquí la foto del ML
    },
    {
      id: 3,
      title: "PatternApp",
      subtitle: "Mobile / Design Tool",
      description: "Herramienta digital especializada para patronistas. Cálculo de medidas, escalado de patrones textiles y optimización de diseño con alta precisión.",
      icon: Scissors,
      color: "!text-emerald-400",
      borderColor: "group-hover:border-emerald-400/50",
      image: "/img/wefashion.png" // 👈 Pon aquí la foto de la app
    }
  ];

  return (
    <section className="mb-32">
      
      {/* TÍTULO DE LA SECCIÓN */}
      <div className="text-center mb-16">
        <h2 className="!text-cyan-400 !font-mono uppercase tracking-[0.3em] text-xs mb-4">Software de Alto Rendimiento</h2>
        <h3 className="text-3xl md:text-5xl font-black !text-white !font-sans italic uppercase tracking-tighter">
          Laboratorio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Soluciones</span>
        </h3>
      </div>

      {/* GRID DE PROYECTOS (CÁPSULAS CIRCULARES) */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            // Bordes súper redondeados para dar el efecto cápsula
            className="!bg-slate-900/50 border border-white/5 p-8 rounded-[3rem] hover:bg-white/[0.02] transition-all duration-500 group flex flex-col items-center text-center"
          >
            
            {/* CONTENEDOR CIRCULAR PARA LA FOTO */}
            <div className={`w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-950 shadow-xl transition-colors duration-500 relative ${project.borderColor}`}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                // Si no hay foto, se muestra un fondo oscuro con el icono de repuesto
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <span className="text-[10px] text-slate-500 font-mono">NO IMG</span>
                </div>
              )}
              
              {/* Capa de color semitransparente que se quita al pasar el mouse */}
              <div className="absolute inset-0 bg-slate-900/20 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>

            {/* ÍCONO Y TÍTULOS */}
            <project.icon className={`${project.color} mb-4 transform group-hover:-translate-y-1 transition-transform`} size={28} />
            <h4 className="text-xl font-bold !text-white !font-sans mb-1">{project.title}</h4>
            <span className="!font-mono text-[10px] !text-slate-500 uppercase tracking-widest block mb-4 border border-white/10 px-3 py-1 rounded-full bg-black/20">
              {project.subtitle}
            </span>
            
            {/* DESCRIPCIÓN */}
            <p className="text-sm !text-slate-400 !font-sans leading-relaxed">
              {project.description}
            </p>

          </div>
        ))}
      </div>
      
    </section>
  );
}
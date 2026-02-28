import React from 'react';
import { Globe, Award, Shield, Cpu, Zap, Terminal, MapPin, Target, TrendingUp } from 'lucide-react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="!text-cyan-400 !font-mono mb-2 uppercase tracking-widest text-sm">{subtitle}</h2>
    <h3 className="text-3xl md:text-4xl font-bold !text-white !font-sans">{title}</h3>
  </div>
);

// Cambiamos el nombre a LucideIcon para que sea único y no de errores
const EventCard = ({ title, type, date, icon, colorClass, image }) => {
  const Icon = icon;

  return (
    <div className="!bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group">
      {/* Contenedor de Imagen / Placeholder */}
      <div className="h-48 w-full bg-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
        
        {image ? (
          // Si pasas una imagen, se renderiza esto:
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          // Si NO pasas imagen, se queda el diseño del icono:
          <>
            {Icon && (
              <Icon 
                className={`absolute opacity-10 scale-150 ${colorClass} transition-transform duration-500 group-hover:scale-125`} 
                size={120} 
              />
            )}
            <span className="!text-slate-500 !font-mono text-[10px] z-10 uppercase tracking-widest opacity-50">
              No Visual Data
            </span>
          </>
        )}
        
        {/* Overlay sutil para que el texto resalte si la imagen es muy clara */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Información del Evento */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-bold !text-white !font-sans leading-tight">
            {title}
          </h4>
          <span className="!font-mono text-[10px] !text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5">
            {date}
          </span>
        </div>
        <p className={`text-xs font-bold ${colorClass} !font-sans uppercase tracking-widest`}>
          {type}
        </p>
      </div>
    </div>
  );
};

export default function Achievements() {
  return (
    <div className="space-y-32">
      
      {/* 1. Alex */}
      <section>
        <SectionHeader subtitle="The Architect" title="Hardware meets Software" />
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="!bg-slate-900 border border-white/5 p-8 rounded-3xl md:col-span-2">
            <h4 className="text-2xl font-bold !text-white mb-4 flex items-center gap-3 !font-sans">
              <Cpu className="!text-cyan-400" /> Luis Alejandro Puebla Aguilar
            </h4>
            <p className="!text-slate-400 leading-relaxed mb-6 !font-sans">
              Desarrollador Full Stack y especialista en Ciberseguridad. Técnico en Control Automático por el <strong>CETI Colomos</strong> y actual estudiante de <strong>Ingeniería en Software</strong>. Combino el desarrollo de plataformas B2B escalables en la nube (SaaS) con una arquitectura profunda orientada a la seguridad ofensiva y protección de datos.
            </p>
            
            <div className="space-y-4">
              {/* Stack Software & Cloud (Argos) */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest !text-slate-500 !font-mono w-full sm:w-auto sm:mr-2">Software & Cloud:</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 !text-blue-400 text-xs rounded-full !font-mono">React / JS</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 !text-blue-400 text-xs rounded-full !font-mono">Node.js</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 !text-blue-400 text-xs rounded-full !font-mono">Neon (PostgreSQL)</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 !text-blue-400 text-xs rounded-full !font-mono">Vercel</span>
              </div>

              {/* Stack Ciberseguridad */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest !text-slate-500 !font-mono w-full sm:w-auto sm:mr-2">Offensive Security:</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 !text-fuchsia-400 text-xs rounded-full !font-mono">Nmap</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 !text-fuchsia-400 text-xs rounded-full !font-mono">Metasploit</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 !text-fuchsia-400 text-xs rounded-full !font-mono">Kali Linux</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 !text-fuchsia-400 text-xs rounded-full !font-mono">Pentesting</span>
              </div>

              {/* Stack Low-Level & Hardware */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest !text-slate-500 !font-mono w-full sm:w-auto sm:mr-2">Low-Level & Hw:</span>
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 !text-cyan-400 text-xs rounded-full !font-mono">Python / C / C++</span>
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 !text-cyan-400 text-xs rounded-full !font-mono">PLC & TIA Portal</span>
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 !text-cyan-400 text-xs rounded-full !font-mono">KiCad</span>
              </div>
            </div>
          </div>

          <div className="!bg-slate-900 border border-white/5 p-8 rounded-3xl flex flex-col justify-center">
            <Zap className="!text-yellow-400 mb-4" size={32} />
            <h5 className="font-bold !text-white mb-2 !font-sans">Core Operations</h5>
            <ul className="space-y-3 !text-slate-400 text-xs md:text-sm !font-sans mb-6">
              <li className="flex items-start gap-2"><span className="text-cyan-400">▹</span> Arquitectura Full Stack y bases de datos relacionales.</li>
              <li className="flex items-start gap-2"><span className="text-fuchsia-400">▹</span> Identificación y explotación de vulnerabilidades.</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">▹</span> Inglés (C1) fluido y Francés (B2) en desarrollo.</li>
            </ul>
            <div className="mt-auto p-3 bg-white/5 rounded-xl border border-white/10 !text-xs !text-slate-300 flex items-center justify-between gap-2 !font-sans">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono">Zapopan, Jal.</span>
              </div>
              <span className="text-slate-500">Disp: L, M, M, J, V, S</span>
            </div>
          </div>

          
           {/* Uriel */}

          {/* PERFIL: URIEL GARCÍA MACHUCA */}
          <div className="!bg-slate-900 border border-white/5 p-8 rounded-3xl md:col-span-2">
            <h4 className="text-2xl font-bold !text-white mb-4 flex items-center gap-3 !font-sans">
              <Target className="!text-cyan-400" /> Uriel García Machuca
            </h4>
            <p className="!text-slate-400 leading-relaxed mb-6 !font-sans">
              Estudiante de <strong>Ingeniería Biomédica (CUCEI)</strong> y Técnico en Control Automático <strong>(CETI Colomos)</strong>. Combino una sólida base analítica con más de un año y medio de experiencia en marketing digital, identidad de marca y posicionamiento estratégico para instituciones educativas y negocios locales.
            </p>
            
            <div className="space-y-4">
              {/* Stack Marketing & Growth */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest !text-slate-500 !font-mono w-full sm:w-auto sm:mr-2">Growth & Marketing:</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 !text-fuchsia-400 text-xs rounded-full !font-mono">Campañas Digitales</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 !text-fuchsia-400 text-xs rounded-full !font-mono">Identidad Visual</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 !text-fuchsia-400 text-xs rounded-full !font-mono">Manejo de Marca</span>
              </div>

              {/* Stack Business Tools */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest !text-slate-500 !font-mono w-full sm:w-auto sm:mr-2">Business & Analytics:</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 !text-blue-400 text-xs rounded-full !font-mono">Business Tools</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 !text-blue-400 text-xs rounded-full !font-mono">Análisis de Resultados</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 !text-blue-400 text-xs rounded-full !font-mono">Gestión de Cuentas</span>
              </div>

              {/* Stack Engineering */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest !text-slate-500 !font-mono w-full sm:w-auto sm:mr-2">Engineering Base:</span>
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 !text-cyan-400 text-xs rounded-full !font-mono">Biomédica (CUCEI)</span>
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 !text-cyan-400 text-xs rounded-full !font-mono">Control Automático (CETI)</span>
              </div>
            </div>
          </div>

          <div className="!bg-slate-900 border border-white/5 p-8 rounded-3xl flex flex-col justify-center">
            <TrendingUp className="!text-yellow-400 mb-4" size={32} />
            <h5 className="font-bold !text-white mb-2 !font-sans">Core Operations</h5>
            <ul className="space-y-3 !text-slate-400 text-xs md:text-sm !font-sans mb-6">
              <li className="flex items-start gap-2"><span className="text-cyan-400">▹</span> Visión estratégica de negocio y análisis de datos.</li>
              <li className="flex items-start gap-2"><span className="text-fuchsia-400">▹</span> Generación de crecimiento y posicionamiento.</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">▹</span> Creación de marcas y estrategias publicitarias.</li>
            </ul>
            <div className="mt-auto p-3 bg-white/5 rounded-xl border border-white/10 !text-xs !text-slate-300 flex items-center justify-between gap-2 !font-sans">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono">Zapopan, Jal.</span>
              </div>
              <span className="text-slate-500">Disp: L, M, M, J, V</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SECCIÓN: EXPEDICIONES Y TORNEOS */}
      <section>
        <SectionHeader subtitle="Expediciones" title="Global Tournaments & Research" />
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <EventCard 
            title="Robocup France 2023" 
            type="Torneo Mundial" 
            date="2023" 
            icon={Globe} 
            colorClass="!text-cyan-400" 
            image="public/img/Francia.jpg"
          />
          <EventCard 
            title="Robocup Thailand 2022" 
            type="Torneo Mundial" 
            date="2022" 
            icon={Globe} 
            colorClass="!text-cyan-400" 
            image="public/img/tailandia.jpg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <EventCard 
            title="TMR Tamaulipas" 
            type="Nacional 1er lugar" 
            date="2022" 
            icon={MapPin} 
            colorClass="!text-green-400" 
            image="public/img/tamaulipas.jpg"
          />
          <EventCard 
            title="TMR Veracruz" 
            type="Nacional 1er lugar" 
            date="2023" 
            icon={MapPin} 
            colorClass="!text-green-400" 
            image="public/img/veracruz.jpg"
          />
          <EventCard 
            title="Ingetec" 
            type="1er lugar ingetec (Mejor Proyecto de la generación)." 
            date="202X" 
            icon={Award} 
            colorClass="!text-yellow-400" 
            image="public/img/ingetec.jpg"
          />
        </div>
      </section>

      {/* 3. SECCIÓN: CIBERSEGURIDAD Y CTFs */}
      <section>
        <SectionHeader subtitle="Offensive Security" title="Capture The Flag (CTF)" />
        <div className="!bg-[#0A0A0A] border border-fuchsia-500/30 p-1 rounded-2xl">
          <div className="p-8 border border-white/5 rounded-xl flex flex-col md:flex-row gap-8 items-center bg-slate-900">
            <div className="p-4 bg-fuchsia-500/10 rounded-full border border-fuchsia-500/20">
              <Shield className="!text-fuchsia-500" size={48} />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold !text-white mb-2 !font-sans flex items-center gap-2">
                <Terminal className="!text-fuchsia-500" size={20} /> Máquinas Resueltas & Pentesting
              </h4>
              <p className="!text-slate-400 !font-sans mb-4 text-sm">
                Participación activa en entornos de simulación de ciberataques. Experiencia aplicando técnicas de escalada de privilegios y análisis de vulnerabilidades.
              </p>
              <div className="flex gap-4">
                <span className="flex items-center gap-2 text-[10px] !font-mono !text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 tracking-tighter">
                  root@axolabs:~# status_online
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
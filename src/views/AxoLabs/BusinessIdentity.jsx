import React from 'react';
import { 
  Target, Compass, ShieldCheck, TrendingUp, 
  Rocket, MessageSquare, Cpu, Zap, HelpCircle 
} from 'lucide-react';

const Card = ({ children, border = "border-white/5" }) => (
  <div className={`p-8 border ${border} bg-white/[0.01] rounded-3xl transition-all`}>
    {children}
  </div>
);

export default function BusinessIdentity() {
  return (
    <div className="space-y-32 mb-32">
      
      {/* 1. EL PROBLEMA Y QUIÉNES SOMOS */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="!text-cyan-400 !font-mono uppercase tracking-[0.3em] text-xs">El Desafío</h2>
          <h3 className="text-4xl font-black !text-white !font-sans leading-tight">
            Sustituimos el desorden por <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">rentabilidad.</span>
          </h3>
          <p className="!text-slate-400 !font-sans leading-relaxed text-sm">
            En México, la dependencia de libretas y Excel genera fugas de ingresos y caos. <strong>Axo Labs</strong> es un laboratorio de innovación especializado en <strong>B2B SaaS</strong>. No solo creamos apps; construimos la infraestructura digital para que los negocios tradicionales escalen sin complicaciones.
          </p>
        </div>
        
        <Card border="border-cyan-500/20">
          
          {/* --- INICIO AVATAR AXOLOTE --- */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
            <div className="w-16 h-16 rounded-full border-2 border-cyan-500/50 p-0.5 bg-slate-900 shrink-0 relative group">
              {/* Resplandor cyan opcional al hacer hover */}
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="/img/AXO.jpeg" /* 👈 AQUÍ PON LA RUTA DE TU IMAGEN */
                alt="Axo Labs Mascot" 
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold !text-white !font-sans leading-tight">Axo Labs</h4>
              <span className="!font-mono text-[10px] !text-cyan-400 tracking-widest uppercase">Identity Core</span>
            </div>
          </div>
          {/* --- FIN AVATAR AXOLOTE --- */}

          <h4 className="text-sm font-black !text-cyan-400 mb-4 uppercase tracking-widest !font-mono italic">Misión</h4>
          <p className="text-base !text-white !font-sans font-medium mb-6">"Fortalecer al empresario mexicano mediante tecnología robusta, accesible y escalable."</p>
          <h4 className="text-sm font-black !text-fuchsia-500 mb-4 uppercase tracking-widest !font-mono italic">Visión</h4>
          <p className="text-base !text-white !font-sans font-medium mb-6">"Convertirnos en el motor tecnológico de las PyMEs en el futuro de México."</p>
        </Card>

      </section>

      {/* 2. VALORES AXO */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { t: "Seguridad Blindada", d: "La encriptación es el corazón de nuestra arquitectura.", i: ShieldCheck, c: "!text-cyan-400" },
          { t: "Rentabilidad", d: "Sistemas diseñados para maximizar tu flujo de caja.", i: TrendingUp, c: "!text-emerald-400" },
          { t: "Ingenio Mexicano", d: "Tecnología de punta adaptada a la realidad local.", i: Rocket, c: "!text-fuchsia-500" }
        ].map((v, i) => (
          <div key={i} className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] text-center">
            <v.i className={`${v.c} mx-auto mb-4`} size={32} />
            <h5 className="font-bold !text-white !font-sans mb-2">{v.t}</h5>
            <p className="text-xs !text-slate-500 !font-sans">{v.d}</p>
          </div>
        ))}
      </section>

      {/* 3. EL PROCESO AXO */}
      <section className="py-20 border-y border-white/5">
        
        <div className="text-center mb-16">
          <h3 className="text-2xl font-black !text-white !font-sans uppercase tracking-tighter">El Proceso "Axo"</h3>
          <p className="!text-cyan-400 !font-mono text-sm mt-2 tracking-widest uppercase opacity-80">( Cómo trabajamos )</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              n: "01", 
              t: "Diagnóstico", 
              d: "Entendemos las necesidades específicas de tu academia o negocio.", 
              i: MessageSquare 
            },
            { 
              n: "02", 
              t: "Configuración", 
              d: "Adaptamos nuestro motor tecnológico a tu marca (Powered by Axo Labs).", 
              i: Cpu 
            },
            { 
              n: "03", 
              t: "Onboarding", 
              d: "Capacitamos a tu personal para que usen el sistema en minutos.", 
              i: Zap 
            },
            { 
              n: "04", 
              t: "Soporte Continuo", 
              d: "Acompañamiento técnico para que nunca dejes de operar.", 
              i: ShieldCheck 
            }
          ].map((s, i) => (
            <div key={i} className="text-center group p-6 border border-transparent hover:border-white/5 hover:bg-white/[0.02] rounded-3xl transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-5 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                <s.i className="text-cyan-400" size={24} />
              </div>
              <span className="!font-mono text-[10px] !text-cyan-500/70 uppercase tracking-widest block mb-2">Paso {s.n}</span>
              <h5 className="text-lg font-bold !text-white !font-sans mb-3">{s.t}</h5>
              <p className="text-xs !text-slate-400 !font-sans leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Cita Final / Slogan */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 border border-fuchsia-500/30 bg-fuchsia-500/[0.03] rounded-2xl shadow-[0_0_20px_rgba(217,70,239,0.05)]">
            <p className="text-sm md:text-base font-medium !text-fuchsia-400 !font-sans italic">
              “Tu negocio es único, tu software también debería serlo.”
            </p>
          </div>
        </div>

      </section>

      {/* 4. FAQ RÁPIDO */}
      <section className="max-w-3xl mx-auto space-y-4">
        <div className="flex items-center gap-2 mb-8">
          <HelpCircle className="text-cyan-400" size={20} />
          <h4 className="text-lg font-bold !text-white !font-sans">Preguntas Frecuentes</h4>
        </div>
        <div className="grid gap-4">
          {[
            { q: "¿Qué pasa con mis datos?", a: "Aislados y encriptados por academia." },
            { q: "¿Es difícil de usar?", a: "Diseñado para ser tan simple como WhatsApp." },
            { q: "¿Tengo que instalar algo?", a: "No, es 100% en la nube y accesible desde cualquier dispositivo." }
          ].map((f, i) => (
            <div key={i} className="p-4 border border-white/5 bg-white/[0.01] rounded-xl">
              <p className="text-sm font-bold !text-white !font-sans mb-1">{f.q}</p>
              <p className="text-xs !text-slate-500 !font-sans">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
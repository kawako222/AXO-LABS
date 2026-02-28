import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import BusinessIdentity from './BusinessIdentity'; // 👈 NUEVO IMPORT
import Achievements from './Achievements';

export default function AxoLabsLanding() {
  return (
    <div className="min-h-screen !bg-slate-950 !text-slate-200 !font-sans selection:bg-fuchsia-500/30">
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        <Hero />
        <Services />
        <BusinessIdentity /> {/* 👈 AQUÍ ENTRA TU VISIÓN DE EMPRESA */}
        <Achievements />
      </main>

      <footer className="py-12 text-center border-t border-white/5 !text-slate-500 text-xs font-mono uppercase tracking-widest">
        © {new Date().getFullYear()} AXO LABS // REFINED SOLUTIONS
      </footer>
    </div>
  );
}
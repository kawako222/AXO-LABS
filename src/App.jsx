import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 🚀 IMPORTACIONES DE TUS VISTAS
// Asegúrate de que estas rutas coincidan con tus carpetas reales
import AxoLabsLanding from './views/AxoLabs/AxoLabsLanding'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* 🛠️ RUTA DE TU EMPRESA (AXO LABS) */}
        {/* Al entrar a localhost:5173/ se verá tu nuevo currículum y marca personal */}
        <Route path="/" element={<AxoLabsLanding />} />
        <Route path="/axolabs" element={<AxoLabsLanding />} />

        {/* 💃 RUTA DE TU PRODUCTO (ARGOS ACADEMY) */}
        {/* Para tu llamada de venta, entrarás a localhost:5173/dashboard */}
        
        {/* Si tienes una página de Login de Argos, agrégala aquí abajo: */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
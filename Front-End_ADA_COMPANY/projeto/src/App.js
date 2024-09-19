import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Ajuste o caminho conforme necessário
import Home from './pages/Home/Home'; // Ajuste o caminho conforme necessário
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
      <Footer /> {/* Adiciona o Footer fora das rotas */}
    </Router>
  );
}

export default App;
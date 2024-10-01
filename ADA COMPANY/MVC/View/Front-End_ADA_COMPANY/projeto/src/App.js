import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Ajuste o caminho conforme necessário
import Home from './pages/Home/Home'; // Ajuste o caminho conforme necessário
import Footer from './components/Footer/Footer';
import Servicos from './pages/Servicos/Servicos';
import Contato from './pages/Contato/Contato';
import Sobre from './pages/Sobre/Sobre';
import Orcamento from './pages/Orcamento/Orcamentos';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Orcamento" element={<Orcamento />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        
        {/* Adicione outras rotas aqui */}
      </Routes>
      <Footer /> {/* Adiciona o Footer fora das rotas */}
    </Router>
  );
}

export default App;
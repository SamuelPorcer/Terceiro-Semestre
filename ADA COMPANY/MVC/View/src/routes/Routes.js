import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Servicos from '../pages/Servicos/Servicos';
import Contato from '../pages/Contato/Contato';
import Sobre from '../pages/Sobre/Sobre';
import Orcamento from '../pages/Orcamento/Orcamento';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import MeuAcesso from '../pages/MeuAcesso/MeuAcesso';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Orcamento" element={<Orcamento />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        
        {/* Rotas privadas */}
        <Route path="/MeuAcesso" element={<PrivateRoute><MeuAcesso /></PrivateRoute>} />

        {/* Redirecionamento padrão para home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
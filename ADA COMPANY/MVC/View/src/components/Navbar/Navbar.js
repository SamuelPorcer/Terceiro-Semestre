// src/components/navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar/Navbar.css'; 

const Navbar = () => {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Aqui você pode usar um serviço para verificar se o usuário está logado
    const checkLoginStatus = () => {
      // Substitua isto pela sua lógica de autenticação
      setUsuarioLogado(localStorage.getItem('usuarioLogado') === 'true');
    };
    
    checkLoginStatus();

    const handleScroll = () => {
      const navbar = document.querySelector('#navbar');
      if (navbar) {
        navbar.classList.toggle('rolagem', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logout = () => {
    // Substitua isto pela sua lógica de logout
    localStorage.removeItem('usuarioLogado');
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav className="navbar" id="navbar">
      <ul className="nav-log">
        {!usuarioLogado ? (
          <>
            <li className="nav-item login" id="login">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item login" id="cadastro">
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </>
        ) : (
          <li className="nav-item login" id="logout">
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
      <ul className="nav-list">
        <li className="nav-item" id="home">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item" id="serviços">
          <Link to="/Servicos">Serviços</Link>
        </li>
        <li className="logo">
          <Link to="/">
          <img src="/img/ADA 2.png" alt="Logo da Empresa" />
          </Link>
        </li>
        <li className="nav-item" id="sobre">
          <Link to="/sobre">Quem Somos</Link>
        </li>
        <li className="nav-item" id="contatos">
          <Link to="/contato">Fale conosco</Link>
        </li>
        {usuarioLogado && (
          <li className="nav-item" id="meuacesso">
            <Link to="/meuacesso">Meu Perfil</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
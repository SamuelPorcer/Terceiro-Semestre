// src/components/Footer/Footer.js
import React from 'react';
import '../Footer/Footer.js'; // Ajuste o caminho conforme necessário
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="d-grid">
      <div>
        <a href="/">
          <img className="logo2" src="/img/Ada_logo.png" alt="Logo Ada Company" />
        </a>
        <div className="contact-info">
          <i className="mt-5"></i><span> (15) 3238-5266</span> <br />
          <i className="mt-5"></i><span> contato_Adacompany.com.br</span><br />
          <i className="mt-5"></i><span> Av. Juscelino Kubitschek de Oliveira, 279 - Votorantim/SP</span>
        </div>
        <nav className="d-flex justify-start gap-20">
          <a href="https://www.youtube.com/@FatecVotorantim" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://www.instagram.com/fatec.votorantim/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://br.linkedin.com/in/fatec-votorantim-dsm" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </nav>
      </div>

      <div>
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2226.0559646948127!2d-47.4490959927608!3d-23.53142746993303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b72bdd65027%3A0xb94c5e9f90d48401!2sFatec%20Votorantim!5e1!3m2!1spt-BR!2sbr!4v1699741800003!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          title='location'
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="d-flex flex-end justify-end flex-column">
        <span className="span-rodape">© Ada Company</span>
        <a href="..." target="_blank" rel="noopener noreferrer">Políticas de Privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;

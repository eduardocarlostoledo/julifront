import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import '../styles/Footer.css';
import logo from '../images/huallpa-logo.png';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="footer">
      {/* Suscripción */}
      <div className="footer-subscribe">
        <p>¡Llegá primero a nuestras novedades!</p>
        <button className="newsletter-button">SUSCRIBITE AL NEWSLETTER &gt;</button>
      </div>

      <div className="footer-columns">
        {/* ATENCIÓN AL CLIENTE */}
        <div className="footer-column">
           <h4>ATENCIÓN AL CLIENTE</h4>
          <ul>
            <li><button onClick={() => handleScrollLink('/PoliticaEnvios')}>Política de Envíos</button></li>
            <li><button onClick={() => handleScrollLink('/CambiosDevoluciones')}>Cambios y Devoluciones</button></li>
            <li><button onClick={() => handleScrollLink('/PagosPromociones')}>Pagos y Promociones</button></li>
            <li><button onClick={() => handleScrollLink('/SeguridadPaquetes')}>Seguridad de los Paquetes</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>POLÍTICAS</h4>
          <ul>
            <li><button onClick={() => handleScrollLink('/terminos-y-condiciones')}>Términos y Condiciones</button></li>
            <li><button onClick={() => handleScrollLink('/politica-privacidad')}>Política de Privacidad</button></li>
            {/* <li><button onClick={() => handleScrollLink('/condiciones-servicio')}>Condiciones de Servicio</button></li> */}
            <li><button onClick={() => handleScrollLink('/faq')}>Preguntas Frecuentes</button></li>
            <li><button onClick={() => handleScrollLink('/contacto')}>Contacto</button></li>
          </ul>
        </div>

        {/* EMPRESA */}
        <div className="footer-column">
          <h4>EMPRESA</h4>
          <ul>
            <li>
              <Link to="/historia">Nuestra Historia</Link>
            </li>
          </ul>
        </div>

        {/* CONTACTO MAYORISTA */}
        <div className="footer-column">
          <h4>CONTACTO MAYORISTA</h4>
          <ul>
            <li>
              <Link to="/mayorista">Sumá July Marroquinería a tu local</Link>
            </li>
          </ul>

          {/* Redes Sociales */}
          <div className="footer-social">
            <SocialIcon url="https://www.facebook.com//julieta.dias.520125/?locale=es_LA" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.instagram.com/reel/DAS-7bCyDjQ/" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.tiktok.com/@julymayorista" style={{ height: 35, width: 35 }} />
            {/* <SocialIcon url="https://www.linkedin.com/company/tuempresa" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.youtube.com/tuempresa" style={{ height: 35, width: 35 }} /> */}
          </div>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="footer-bottom-bar">
        <div>
          <button className="footer-legal-btn">BOTÓN DE ARREPENTIMIENTO</button>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} July Marroquinería - TODOS LOS DERECHOS RESERVADOS</p>
          <p>
    Desarrollado por{" "}
    <a
      href="https://toledoconsultora.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#c69e5d", textDecoration: "none", fontWeight: "bold" }}
    >
      Toledo Consultora
    </a>
  </p>
        </div>
        <div>
          <img src={logo} alt="July Marroquinería logo" className="footer-logo-small" />
        </div>
      </div>
    </footer>
  );
};

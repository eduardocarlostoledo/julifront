import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf, FaShoppingBag, FaWhatsapp, FaStar, FaShieldAlt } from "react-icons/fa";
import "../styles/Home.css";

import local from "../images/local.png";
import artesanal1 from "../images/artesanal1.png";
import artesanal2 from "../images/artesanal2.png";
import artesanal3 from "../images/artesanal3.png";
import tarjetas from "../images/tarjetas.png";
import { ChatBot } from "./ChatBot";
import relato1 from "../images/relato1.png";
import relato2 from "../images/relato2.png";
import relato3 from "../images/relato3.png";
import relato4 from "../images/relato4.png";

const featuredProducts = [
  {
    id: 1,
    name: "Bolso Camila Animal Print",
    price: "$39.900",
    discount: "20% OFF",
    freeShipping: true,
    img: artesanal1,
  },
  {
    id: 2,
    name: "Bandolera Cuero Lavanda",
    price: "$32.500",
    discount: "15% OFF",
    freeShipping: true,
    img: artesanal2,
  },
  {
    id: 3,
    name: "Mochila Eco Cuero Caramelo",
    price: "$42.000",
    discount: "25% OFF",
    freeShipping: true,
    img: artesanal3,
  },
];

export const Home = () => {
  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/5493855015327";
  };

  return (
    <div className="home-container">

      <div className="promo-marquee">
        <p>
          💳 6 CUOTAS SIN INTERÉS ¡EN TODOS LOS PRODUCTOS! - 📦 ENVÍO GRATIS A TODO EL PAÍS A PARTIR DE $170.000 - 🇦🇷 ARTESANOS DEL CUERO DESDE 1969
        </p>
      </div>
      
      <motion.section
        className="hero-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="hero-content">
          <h1>La artesanía que habla por vos</h1>
          <p>Marroquinería premium: elegancia, durabilidad y estilo en cada pieza.</p>
          <motion.button
            className="hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/coleccion"}
          >
            Ver colección
          </motion.button>
        </div>
        <img
          src={local}
          alt="Tienda Huallpa Marroquinería"
          className="hero-banner-img"
        />
        
      </motion.section>
      
<motion.section
        className="hero-secure-badge"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", overflow: "hidden" }}
      >
      <div className="secure-badge">
        
          <FaShieldAlt /> Sitio Seguro / Compra Protegida
        </div>
</motion.section>


      <section className="featured-products">
        
        <h2 className="home-titulocontrapelo">Colección Destacada</h2>
        <p>Elegí tu bolso ideal para cada ocasión</p>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <motion.div key={product.id} className="product-card rounded-highlight" whileHover={{ scale: 1.03 }}>
              <img src={product.img} alt={product.name} className="product-image" />
              <div className="product-discount">{product.discount}</div>
              {product.freeShipping && (
                <div className="free-shipping-tag">ENVÍO GRATIS</div>
              )}
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-pricing">
                  <span className="current-price">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      <section className="founder-section">
        <hr className="sutil-separator" />
        <h3 className="home-titulocontrapelo">Conocé a la fundadora</h3>
        <div className="founder-card">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#c69e5d" strokeWidth="4" fill="#fff" />
            <circle cx="50" cy="38" r="12" fill="#d3b7cc" />
            <path d="M25 80c5-20 45-20 50 0" stroke="#c69e5d" strokeWidth="4" fill="none" />
          </svg>
          <p>"Cada pieza nace de mis manos y mi corazón. Quiero que sientas esa conexión."</p>
          <strong>- Fundadora de HALLPA</strong>
        </div>
        
      </section>

      

      

      <motion.section className="chatbot-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h3>¿Consultas o pedidos personalizados?</h3>
        <p>Estamos en WhatsApp para ayudarte</p>
        <motion.button
          className="contact-button"
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp style={{ marginRight: "10px" }} /> Contactanos por WhatsApp
        </motion.button>
      </motion.section>

      

      <section className="values-section">
        <h3 className="home-titulocontrapelo">Autenticidad Artesanal</h3>
        <div className="values-grid">
          <div className="value-card">
            <FaLeaf className="value-icon" />
            <h4>Materiales Conscientes</h4>
            <p>Diseños hechos a mano con cuero ecológico y textiles nobles.</p>
          </div>
          <div className="value-card">
            <FaShoppingBag className="value-icon" />
            <h4>Ediciones Limitadas</h4>
            <p>Cada producto Huallpa es único y con identidad propia.</p>
          </div>
          <div className="value-card">
            <FaStar className="value-icon" />
            <h4>Calidad Premium</h4>
            <p>Costuras reforzadas, herrajes metálicos y acabados profesionales.</p>
          </div>
        </div>
      </section>



<hr className="sutil-separator" />
      <section className="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial-slider">
          {[relato1, relato2, relato3, relato4].map((img, index) => (
            <div className="testimonial-card-image" key={index}>
              <img src={img} alt={`Comentario cliente ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
<hr className="sutil-separator" />
      <motion.section
        className="chatbot-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3>¿Necesitás ayuda en tiempo real?</h3>
        
        <div className="chatbot-container">
          <ChatBot />
        </div>
      </motion.section>

      <section className="contact-section">
        <h3 className="home-titulocontrapelo">¿Tenés preguntas? Estamos para ayudarte</h3>
        <motion.button
          className="contact-button"
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Escribinos por WhatsApp
        </motion.button>
        <h3 className="home-titulocontrapelo">Aceptamos todos los medios de pago</h3>
        <img
          src={tarjetas}
          alt="Medios de pago aceptados"
          className="credit-cards-image"
        />
      </section>
    </div>
  );
};

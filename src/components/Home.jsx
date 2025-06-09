import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";
import { FaLeaf, FaShoppingBag, FaWhatsapp, FaStar } from "react-icons/fa";

import local from "../images/local.png";
import artesanal1 from "../images/artesanal1.png";
import artesanal2 from "../images/artesanal2.png";
import artesanal3 from "../images/artesanal3.png";
import { ChatBot } from "./ChatBot";
import tarjetas from "../images/tarjetas.png";

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
  const handleClick = () => {
    window.location.href = "https://wa.me/5493855915327";
  };

  return (
    <div className="home-container">
      <motion.section className="hero-banner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <img src={local} alt="Huallpa Marroquinería"  />
      </motion.section>

      <section className="values-section">
        <h3 className="home-titulocontrapelo" style={{color:"white"}} >Autenticidad Artesanal</h3>
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

      <section className="featured-products">
        <h2 className="home-titulocontrapelo">Colección Destacada</h2>
        <p>Elegí tu bolso ideal para cada ocasión</p>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <motion.div key={product.id} className="product-card" whileHover={{ scale: 1.03 }}>
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

      <motion.section className="chatbot-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h3>¿Consultas o pedidos personalizados?</h3>
        <p>Escribinos directamente</p>
        <motion.button className="contact-button" onClick={handleClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FaWhatsapp style={{ marginRight: "10px" }} /> Contactanos por WhatsApp
        </motion.button>
      </motion.section>

       {/* Asistente Virtual */}
      <motion.section
        className="chatbot-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3>¿Necesitás ayuda? </h3>
        <p>Nuestros Asesores te contestan inmediatamente</p>
        <p> </p>
        <div className="chatbot-container">
          <ChatBot />
        </div>
      </motion.section>

      {/* Contacto */}
      {/* Contacto */}
      <section className="contact-section">
        <h3  className="home-titulocontrapelo">
          ¿Tenés preguntas? Estamos aquí para ayudarte
        </h3>

        <motion.button
          className="contact-button"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Escribinos por WhatsApp
        </motion.button>
        <h3 className="home-titulocontrapelo">
          {" "}
          Aceptamos Todos los Medios de Pago
        </h3>
        <img
          src={tarjetas}
          alt="tarjetas de crédito"
          className="credit-cards-image"
        />
      </section>


    </div>

    
  );
};

import React, { useEffect } from 'react';
import '../styles/HistoriaTienda.css';
import nuestraempresa2 from '../images/nuestraempresa2.jpg';
import nosotros from '../images/nosotros.jpg';
import historiaempresa from '../images/historiaempresa.webp';

export const HistoriaTienda = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="historiaTienda-container">
      <h1 className="historiaTienda-titulo">Nuestra Historia</h1>

      <div className="historiaTienda-grid">
        <div className="historiaTienda-texto">
          <p>
            Hace más de <strong>10 años</strong>, en el corazón de Santiago del Estero, nació <strong>HALLPA</strong>, una marca de marroquinería artesanal creada por <strong>Roque y Claudia</strong>. Con pasión y compromiso, comenzaron a fabricar carteras, mochilas y bandoleras desde su taller familiar.
          </p>

          <p>
            Lo que empezó como un proyecto íntimo y personal, hoy se ha convertido en una marca con identidad propia, reconocida por su <em>calidad, autenticidad y calidez humana</em>. Cada pieza HALLPA está pensada para durar y destacar.
          </p>
        </div>

        <div className="historiaTienda-imagen">
          <img src={historiaempresa} alt="Historia de HALLPA" />
        </div>
      </div>

      <div className="historiaTienda-grid reverse">
        <div className="historiaTienda-imagen">
          <img src={nosotros} alt="Fundadores de HALLPA" />
        </div>
        <div className="historiaTienda-texto">
          <p>
            Atendemos a <strong>particulares, negocios, mayoristas y minoristas</strong>, llevando nuestros productos a diferentes puntos del país. Cada cliente es parte de nuestra historia, y trabajamos con la convicción de que la cercanía es un valor que se teje en cada costura.
          </p>

          <p>
            Diseñamos con conciencia: <em>materiales nobles, producción local y detalles únicos</em>. Porque sabemos que un buen bolso no solo acompaña: cuenta quién sos.
          </p>
        </div>
      </div>

      <div className="historiaTienda-grid">
        <div className="historiaTienda-texto">
          <p>
            Apostamos al <strong>trabajo argentino</strong>, a las relaciones genuinas y a crecer de la mano de quienes nos eligen. Gracias por confiar en nosotros y permitirnos ser parte de tu camino.
          </p>

          <p>
            Esto es HALLPA: <em>una marca con alma artesanal, hecha desde el interior del país para vos.</em>
          </p>
        </div>
        <div className="historiaTienda-imagen">
          <img src={nuestraempresa2} alt="Taller HALLPA" />
        </div>
      </div>
    </section>
  );
};

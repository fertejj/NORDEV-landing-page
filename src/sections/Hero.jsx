// src/sections/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">🚀 Productos Premium para Developers</div>
          <h1>Herramientas de <span className="highlight">Programación</span> que Potencian tu Código</h1>
          <p>
            Descubre nuestra colección exclusiva de templates, librerías, plugins y herramientas que aceleran tu desarrollo y elevan la calidad de tus proyectos
          </p>
          <a
            href="https://wa.me/5491123456789?text=Hola,%20me%20interesa%20conocer%20sus%20productos%20de%20programación"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar Catálogo →
          </a>
        </div>
      </div>
    </section>
  );
}

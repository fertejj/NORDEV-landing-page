// src/sections/Services.jsx
export default function Services() {
  return (
    <section id="productos" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Productos</h2>
        <p className="section-subtitle">
          Soluciones completas y listas para usar que transforman tu flujo de trabajo
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Templates & Boilerplates</h3>
            <p>Plantillas completas para React, Vue, Angular y más...</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Librerías & Componentes</h3>
            <p>Colección de componentes reutilizables, hooks personalizados...</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Plugins & Extensions</h3>
            <p>Extensiones para VSCode, herramientas CLI y plugins que optimizan tu entorno...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

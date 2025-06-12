// src/sections/Demos.jsx
export default function Demos() {
  return (
    <section id="demos" className="demos">
      <div className="container">
        <h2 className="section-title">Productos Destacados</h2>
        <p className="section-subtitle">
          Explora algunos de nuestros productos más populares y sus características
        </p>

        <div className="demos-grid">
          <div className="demo-card">
            <div className="demo-preview">
              <span>React Dashboard Pro</span>
            </div>
            <div className="demo-content">
              <h3>Dashboard Completo React + TypeScript</h3>
              <p>Template premium con más de 50 componentes...</p>
              <a
                href="https://calendly.com/tu-usuario/demo-dashboard"
                className="demo-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo Live →
              </a>
            </div>
          </div>

          <div className="demo-card">
            <div className="demo-preview">
              <span>API Builder Kit</span>
            </div>
            <div className="demo-content">
              <h3>Generador de APIs RESTful</h3>
              <p>Herramienta CLI que genera APIs completas con Node.js, Express, JWT...</p>
              <a
                href="https://calendly.com/tu-usuario/demo-api-builder"
                className="demo-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Probar Herramienta →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

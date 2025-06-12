// src/sections/CTA.jsx
export default function CTA() {
  return (
    <section id="contacto" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>¿Listo para Acelerar tu Desarrollo?</h2>
          <p>Únete a más de 1,000 desarrolladores que ya utilizan nuestros productos...</p>

          <div className="cta-buttons">
            <a
              href="https://wa.me/5491123456789?text=Hola,%20quiero%20ver%20el%20catálogo%20completo%20de%20productos"
              className="cta-btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://calendly.com/tu-usuario/consultoria-productos"
              className="cta-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Agendar Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

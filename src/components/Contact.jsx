import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('¡Formulario enviado! (Esto es una demostración)');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Ponte en Contacto</h2>
          <p className="section-subtitle">¿Tienes un proyecto en mente? Hablemos.</p>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Tu Nombre" required />
            <input type="email" placeholder="Tu Email" required />
            <textarea rows="5" placeholder="Tu Mensaje" required></textarea>
            <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
          </form>
          <div className="contact-links">
            <p>O contáctanos a través de:</p>
            <a href="https://wa.me/tunumeroaqui" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <span>|</span>
            <a href="#">Agendar una Llamada</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
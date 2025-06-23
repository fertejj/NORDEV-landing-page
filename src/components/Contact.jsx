import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const accessKey = "933bb4f1-d477-4da1-89d1-ba8f283345d3";

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");

    const dataToSend = {
      ...formData,
      access_key: accessKey,
      subject: `Nuevo Mensaje de Contacto de ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const jsonResponse = await response.json();

      if (jsonResponse.success) {
        setResult("¡Mensaje enviado con éxito!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error desde el servidor:", jsonResponse);
        setResult(
          jsonResponse.message || "Hubo un error al enviar el mensaje."
        );
      }
    } catch (error) {
      console.error("Error de red o de envío:", error);
      setResult("Hubo un problema de conexión. Inténtalo de nuevo.");
    }

    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Ponte en Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? Hablemos.
          </p>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Tu Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </form>
          {result && <p className="text-center mt-4">{result}</p>}
          <div className="contact-links">
            <p>O contáctanos a través de:</p>
            <a
              href="https://wa.me/tunumeroaqui"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <span>|</span>
            <a href="#">Agendar una Llamada</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

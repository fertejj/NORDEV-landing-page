import React from "react";
import heroImage from "/heroimg.webp";

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container grid-2-col">
        <div className="about-text">
          <h2 className="section-title">
            Somos <span className="text-primary">Nordev</span>.
          </h2>
          <p className="section-subtitle">
            Somos un equipo de desarrolladores innovadores dedicados a construir
            soluciones digitales excepcionales. En Nordev, nos especializamos en
            transformar desafíos complejos en procesos elegantes, eficientes y
            automatizados que impulsan el crecimiento y el éxito de nuestros
            clientes.
          </p>
        </div>
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center 10%",
          }}
        ></div>
      </div>
    </section>
  );
}

export default About;

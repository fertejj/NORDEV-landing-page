import React from "react";

const About = () => {
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
        <div className="placeholder-image">
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;

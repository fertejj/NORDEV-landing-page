import React from 'react';

const WorkCard = ({ title, description }) => (
  <div className="work-card">
    <div className="placeholder-image"><p>Captura de Pantalla del Proyecto</p></div>
    <div className="work-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Ver Caso de Estudio &rarr;</a>
    </div>
  </div>
);

const Work = () => {
  const workData = [
    { title: "Proyecto Alfa", description: "Un CRM personalizado y plataforma de automatización para una startup tecnológica en rápido crecimiento." },
    { title: "Proyecto Beta", description: "Un sitio de comercio electrónico con filtrado avanzado y un proceso de pago personalizado." },
    { title: "Proyecto Gamma", description: "Un servicio de integración de API que conecta múltiples herramientas financieras de terceros." }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestros Proyectos</h2>
          <p className="section-subtitle">Una selección de nuestros proyectos recientes.</p>
        </div>
        <div className="grid-3-col">
          {workData.map((project, index) => (
            <WorkCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
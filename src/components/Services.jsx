import React from 'react';

// Sub-componente para las tarjetas de servicio para no repetir código
const ServiceCard = ({ title, description }) => (
  <div className="card">
    <h3 className="card-title text-primary">{title}</h3>
    <p className="card-text">{description}</p>
    <a href="#" className="card-link">Conocer Más &rarr;</a>
  </div>
);

const Services = () => {
  const servicesData = [
    { title: "Desarrollo Web", description: "Creamos sitios y aplicaciones web responsivas y de alto rendimiento adaptadas a las necesidades de tu negocio." },
    { title: "Automatización", description: "Optimizamos los procesos de tu negocio con soluciones de automatización personalizadas para aumentar la eficiencia y reducir costos." },
    { title: "Software a Medida", description: "Construimos software escalable y seguro desde cero para resolver tus desafíos únicos." },
    { title: "Integraciones", description: "Conectamos tus sistemas y aplicaciones dispares para crear un flujo de trabajo unificado y sin interrupciones." }
  ];

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Lo que podemos hacer por ti.</p>
        </div>
        <div className="grid-4-col">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
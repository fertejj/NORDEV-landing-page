import React from 'react';

// Sub-componente para las tarjetas de servicio para no repetir código
const ServiceCard = ({ title, description }) => (
  <div className="card">
    <h3 className="card-title text-primary">{title}</h3>
    <p className="card-text">{description}</p>
    <a href="#" className="card-link">Learn More &rarr;</a>
  </div>
);

const Services = () => {
  const servicesData = [
    { title: "Web Development", description: "Crafting responsive, high-performance websites and web applications tailored to your business needs." },
    { title: "Automation", description: "Streamlining your business processes with custom automation solutions to boost efficiency and reduce costs." },
    { title: "Custom Software", description: "Building scalable and secure software from the ground up to solve your unique challenges." },
    { title: "Integrations", description: "Connecting your disparate systems and applications to create a seamless, unified workflow." }
  ];

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">What we can do for you.</p>
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
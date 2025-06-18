import React from 'react';

const WorkCard = ({ title, description }) => (
  <div className="work-card">
    <div className="placeholder-image"><p>Project Screenshot</p></div>
    <div className="work-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">View Case Study &rarr;</a>
    </div>
  </div>
);

const Work = () => {
  const workData = [
    { title: "Project Alpha", description: "A custom CRM and automation platform for a fast-growing tech startup." },
    { title: "Project Beta", description: "An e-commerce website with advanced filtering and a custom checkout process." },
    { title: "Project Gamma", description: "An API integration service connecting multiple third-party financial tools." }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">A selection of our recent projects.</p>
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
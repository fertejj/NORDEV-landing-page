import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container grid-2-col">
        <div className="about-text">
          <h2 className="section-title">We are <span className="text-primary">Nordev</span>.</h2>
          <p className="section-subtitle">
            We are a passionate team of developers and innovators dedicated to building exceptional digital solutions. At Nordev, we specialize in transforming complex challenges into elegant, efficient, and automated processes that drive growth and success for our clients.
          </p>
        </div>
        <div className="placeholder-image">
          <p>Optional Team or Workspace Image</p>
        </div>
      </div>
    </section>
  );
};

export default About;
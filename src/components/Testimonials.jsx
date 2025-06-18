import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-12"><h2 className="section-title">What Our Clients Say</h2></div>
        <div className="testimonial">
          <svg className="testimonial-icon" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.213C0 7.585 5.373 0 12 0s12 7.585 12 16.213C24 24.841 18.627 32 12 32S0 24.841 0 16.213zm4.085 0c0 5.483 3.543 9.932 8 9.932s8-4.449 8-9.932c0-5.483-3.543-9.932-8-9.932s-8 4.449-8 9.932zM12 28.145c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" transform="translate(4 2)" /></svg>
          <blockquote>"Working with Nordev was a game-changer. Their attention to detail and commitment to our project's success was outstanding. They delivered a product that exceeded all our expectations."</blockquote>
          <p className="testimonial-author">- Jane Doe, CEO of ExampleCorp</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
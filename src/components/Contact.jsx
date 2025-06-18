import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's talk.</p>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="contact-links">
            <p>Or contact us via:</p>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <span>|</span>
            <a href="#">Schedule a Call</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// src/App.jsx
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Demos from './sections/Demos';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Code rain animation
    const symbols = ['0', '1', '{', '}', '(', ')', '<', '>', '/', '*', '+', '-', '=', ';', ':', '?', '!', '@', '#', '$', '%', '&'];
    const container = document.getElementById('bgAnimation');

console.log('Inicializando lluvia de código...');
console.log(document.getElementById('bgAnimation'));

    if (container && container.childNodes.length === 0) {
      for (let i = 0; i < 50; i++) {
        const element = document.createElement('div');
        element.className = 'code-rain';
        element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDuration = (Math.random() * 3 + 2) + 's';
        element.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(element);
      }
    }

    // Smooth scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 80;
          const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });

    // Header scroll background change
    const onScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(10, 10, 10, 0.98)';
          header.style.borderBottom = '1px solid rgba(247, 110, 58, 0.3)';
        } else {
          header.style.background = 'rgba(10, 10, 10, 0.95)';
          header.style.borderBottom = '1px solid #333333';
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.service-card, .demo-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    // Cursor glow effect
    const handleMouse = (e) => {
      let cursor = document.querySelector('.cursor');
      if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'cursor';
        cursor.style.cssText = `
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(247, 110, 58, 0.8), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);
      }
      cursor.style.left = (e.clientX - 10) + 'px';
      cursor.style.top = (e.clientY - 10) + 'px';
    };
    document.addEventListener('mousemove', handleMouse);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <>
      <div className="bg-animation" id="bgAnimation"></div>
      <Header />
      <Hero />
      <Services />
      <Demos />
      <CTA />
      <Footer />
    </>
  );
}

export default App;

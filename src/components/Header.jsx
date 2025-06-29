import React, { useState } from 'react';

const Header = ({ theme, onThemeSwitch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // La función closeMenu ahora también puede cerrar el menú al hacer clic en un enlace
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header id="home" className="main-header">
      <nav className="navbar">
        <a href="#home" className="logo">Nor<span className="text-primary">dev</span></a>
        <div className="nav-links">
          <a href="#about">Nosotros</a>
          <a href="#services">Servicios</a>
          <a href="#work">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
        <div className="header-actions">
          <button onClick={onThemeSwitch} className="theme-toggle-btn">
            {theme === 'light' ? (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            )}
          </button>
          {/* El botón ahora usa handleMenuToggle */}
          <button onClick={handleMenuToggle} id="mobile-menu-button" className="mobile-menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
      </nav>
      
      {/* MODIFICACIÓN CLAVE:
        - El div del menú móvil ahora siempre existe.
        - Se agrega la clase 'is-open' cuando el estado isMenuOpen es true.
      */}
      <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>Nosotros</a>
        <a href="#services" onClick={closeMenu}>Servicios</a>
        <a href="#work" onClick={closeMenu}>Proyectos</a>
        <a href="#contact" onClick={closeMenu}>Contacto</a>
      </div>
    </header>
  );
};

export default Header;
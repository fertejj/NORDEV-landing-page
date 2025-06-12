// src/components/Header.jsx
export default function Header() {
  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">NorDev</a>
        <ul className="nav-links">
          <li><a href="#productos">Productos</a></li>
          <li><a href="#demos">Demos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

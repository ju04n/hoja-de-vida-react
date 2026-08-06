function Header() {
  return (
    <header className="header">
      <h1 className="header-name">Juan Yara</h1>

      <a
        className="github-link"
        href="https://github.com/ju04n"
        target="_blank"
        rel="noreferrer"
      >
        github.com/ju04n
      </a>

      <nav className="nav">
        <a href="#perfil">Perfil Profesional</a>
        <a href="#educacion">Logros Académicos</a>
        <a href="#experiencia">Experiencia Laboral</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
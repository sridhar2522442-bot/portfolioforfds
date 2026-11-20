function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        sridhar<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>

      <a href="#contact" className="nav-contact">
        Let's Talk ↗
      </a>
    </nav>
  );
}

export default Navbar;
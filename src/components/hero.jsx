function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="status">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <h1>
          Building digital
          <br />
          experiences that
          <br />
          <span>matter.</span>
        </h1>

        <p className="hero-description">
          Hi, I'm Sridhar — an IT student and aspiring software developer
          passionate about building modern applications, solving problems,
          and exploring new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore my work ↗
          </a>

          <a href="#about" className="secondary-btn">
            More about me
          </a>
        </div>

      </div>

      <div className="hero-bottom">

        <p>SOFTWARE DEVELOPMENT · WEB TECHNOLOGIES · PROBLEM SOLVING</p>

        <p>SCROLL TO EXPLORE ↓</p>

      </div>

    </section>
  );
}

export default Hero;
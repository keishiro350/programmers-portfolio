const projects = [
  {
    name: "School Supply Inventory Management System",
    description:
      "A school inventory system designed to help administrators and teachers organize, track, and manage school supplies using QR codes or barcodes.",
    tags: ["Next.js", "React", "QR Code"],
  },
  {
    name: "Cel-Kal-Culator",
    description:
      "A mobile temperature converter that converts Celsius into Fahrenheit and Kelvin while keeping a running history of previous conversions.",
    tags: ["MIT App Inventor", "Mobile App"],
  },
  {
    name: "Web Design Projects",
    description:
      "A collection of responsive web pages and forms created while practicing HTML, CSS, Bootstrap, and modern web development.",
    tags: ["HTML", "CSS", "Bootstrap"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          KR<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>Krizhelle Anne N. Ramos</h1>

          <p className="bio">
            I am an aspiring programmer and BSIT/WMAD student who enjoys
            creating simple, useful, and user-friendly applications. I am
            continuously learning web development and improving my programming
            skills through school projects and personal practice.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View Projects
            </a>

            <a href="#contact" className="button secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-heading">
          <p className="section-label">MY BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div>
            <p className="year">2024 — 2026</p>

            <h3>Nueva Vizcaya State University</h3>

            <h4>BSIT / WMAD</h4>

            <p>
              Relevant coursework includes web development, programming,
              database management, systems integration, and mobile application
              development.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p className="section-label">WHAT I'VE BUILT</p>
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-number">0{index + 1}</div>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p className="section-label">GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-card">
          <p>
            Have a question, project idea, or just want to say hello?
            Feel free to reach out to me.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ramoskrizhelleanne@gmail"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            ramoskrizhelleanne@gmail.com
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Krizhelle Anne N. Ramos</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

const projects = [
  {
    number: "01",
    type: "PERSONAL WEBSITE",
    name: "My portfolio",
    description: "A responsive home for my work, interests, and journey as a developer.",
    tags: ["React", "CSS"],
  },
  {
    number: "02",
    type: "PRACTICE PROJECT",
    name: "Useful little apps",
    description: "Small web app experiments focused on clean interfaces and everyday ideas.",
    tags: ["JavaScript", "UI"],
  },
  {
    number: "03",
    type: "ALWAYS LEARNING",
    name: "Code & problem solving",
    description: "Building strong fundamentals through coursework, practice, and curiosity.",
    tags: ["Python", "Java"],
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading projects-heading">
        <div>
          <p className="eyebrow">A few things I&apos;m working on</p>
          <h2>Learning by <span>building.</span></h2>
        </div>
        <p className="section-note">A snapshot of my journey so far.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-topline">
              <span>{project.type}</span>
              <span>{project.number}</span>
            </div>
            <div className="project-mark" aria-hidden="true">{project.number}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

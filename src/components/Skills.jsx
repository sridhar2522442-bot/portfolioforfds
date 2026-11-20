const skillGroups = [
  { number: "01", name: "Frontend", items: "React · JavaScript · HTML · CSS" },
  { number: "02", name: "Programming", items: "Python · Java · Problem solving" },
  { number: "03", name: "Tools", items: "Git · GitHub · VS Code" },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">My toolkit</p>
        <h2>Skills I&apos;m <span>growing.</span></h2>
      </div>
      <div className="skill-list">
        {skillGroups.map((group) => (
          <article className="skill-row" key={group.number}>
            <span className="skill-number">{group.number}</span>
            <h3>{group.name}</h3>
            <p>{group.items}</p>
            <span className="skill-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

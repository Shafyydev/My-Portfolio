import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    desc: 'Core languages for systems scripts, data processing, and application logic.',
    skills: ['Python', 'JavaScript'],
  },
  {
    category: 'Frontend Development',
    desc: 'Creating responsive, accessible, component-driven user interfaces.',
    skills: ['HTML5', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    category: 'Backend Development',
    desc: 'Server runtimes, HTTP routing, and backend application business logic.',
    skills: ['Node.js', 'Python'],
  },
  {
    category: 'Database Systems',
    desc: 'Relational data modeling, table schemas, and structured query operations.',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Development Tooling',
    desc: 'Version tracking, branch workflows, and remote repository hosting.',
    skills: ['Git', 'GitHub'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section df-skills" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="df-skills__header">
          <div className="section-badge">
            <span className="section-badge__dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technologies &amp; core competencies.
          </h2>
          <p className="section-subtitle">
            Tools, libraries, and languages I actively use to engineer software projects
            and develop full-stack capabilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="df-skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div className="df-card df-skills__card" key={group.category}>
              <div className="df-skills__card-top">
                <span className="df-skills__dot" aria-hidden="true" />
                <h3 className="df-skills__category">{group.category}</h3>
              </div>

              <p className="df-skills__desc">{group.desc}</p>

              <div className="df-skills__tags">
                {group.skills.map((skill) => (
                  <span className="df-skills__tag" key={`${group.category}-${skill}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Guarantee Strip */}
        <div className="df-skills__integrity">
          <span className="df-skills__integrity-text">
            ✓ Verified academic &amp; independent stack &middot; Zero inflated metrics or placeholder claims
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;

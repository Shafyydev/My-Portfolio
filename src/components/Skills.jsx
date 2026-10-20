import './Skills.css';

const SKILL_SECTIONS = [
  {
    index: '01',
    category: 'Languages',
    purpose: 'Core languages for algorithmic logic, scripting, and full-stack development',
    skills: ['Python', 'JavaScript'],
  },
  {
    index: '02',
    category: 'Frontend',
    purpose: 'Building responsive, accessible, and structured user interfaces',
    skills: ['HTML5', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    index: '03',
    category: 'Backend',
    purpose: 'API routing, server execution, and application business logic',
    skills: ['Node.js', 'Python'],
  },
  {
    index: '04',
    category: 'Databases',
    purpose: 'Relational data modeling, schema design, and querying',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    index: '05',
    category: 'Development Tools',
    purpose: 'Version tracking, collaborative workflows, and repository management',
    skills: ['Git', 'GitHub'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section" aria-label="Technical Capabilities">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">02 / Technical Index</span>
          <h2 className="section-title">
            Verified <em>stack</em> &amp; capabilities.
          </h2>
          <p className="section-lead">
            Languages, libraries, databases, and version control tools I actively work with
            across academic and independent engineering projects.
          </p>
        </header>

        <div className="skills__grid">
          {SKILL_SECTIONS.map((section) => (
            <div className="skills__card" key={section.category}>
              <div className="skills__card-top">
                <span className="skills__index meta">{section.index} //</span>
                <h3 className="skills__category">{section.category}</h3>
              </div>

              <p className="skills__purpose">{section.purpose}</p>

              <div className="skills__pills" role="list" aria-label={`${section.category} skills`}>
                {section.skills.map((skill) => (
                  <div className="skills__pill" key={`${section.category}-${skill}`} role="listitem">
                    <span className="skills__pill-dot" aria-hidden="true" />
                    <span className="skills__pill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

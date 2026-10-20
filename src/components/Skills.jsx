import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '⚡' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React.js', icon: '⚛️' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: '🗄️' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section" aria-label="Technical Skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build software projects.
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((category) => (
            <div className="skills__card" key={category.title}>
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span className="skills__tag" key={`${category.title}-${skill.name}`}>
                    <span className="skills__tag-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
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

import { IconGitHub, IconExternalLink, IconFolder } from './Icons.jsx';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    type: 'Personal Project',
    description:
      'A personal website designed to present my profile, education, technical skills, and projects in a professional format.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git', 'GitHub'],
    repoUrl: 'https://github.com/Shafyydev/My-Portfolio',
  },
  {
    title: 'Facial Recognition Attendance System',
    type: 'Personal Project',
    description:
      'A desktop attendance application that registers students via webcam, recognizes enrolled faces in a live camera feed, and records attendance in SQLite. The user interface is a Flask dashboard displayed in a pywebview desktop window.',
    technologies: ['Python', 'Flask', 'OpenCV', 'SQLite'],
    repoUrl: 'https://github.com/Shafyydev/face-recognition-attendance-system',
    features: [
      'Live camera preview with face detection',
      'Student registration with webcam face samples',
      'Multi-frame confirmation before recording attendance',
      'Attendance history, CSV export, and printable reports',
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section" aria-label="Projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Projects I&rsquo;ve built to develop my skills and explore software development.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__header">
                <div className="project-card__icon">
                  <IconFolder size={24} />
                </div>
                <div className="project-card__links">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <IconGitHub size={20} />
                    </a>
                  )}
                </div>
              </div>

              <span className="project-card__type">{project.type}</span>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              {project.features && (
                <ul className="project-card__features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="project-card__feature-bullet">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-card__tech">
                {project.technologies.map((tech) => (
                  <span className="project-card__tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__cta"
                >
                  View Repository
                  <IconExternalLink size={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

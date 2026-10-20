import { IconGitHub, IconExternalLink } from './Icons.jsx';
import './Projects.css';

const PROJECTS = [
  {
    num: '01',
    title: 'Facial Recognition Attendance System',
    type: 'Desktop Computer Vision Application',
    tagline: 'Automated biometric attendance tracking with OpenCV, Flask, and native desktop window.',
    description:
      'A desktop attendance application combining computer vision face detection with an embedded web dashboard. It registers students via live webcam capture, matches enrolled facial features in real-time, and logs verified attendance records in a local SQLite database.',
    features: [
      'Live camera feed with real-time OpenCV facial landmark detection',
      'Student registration workflow with multi-angle face sample acquisition',
      'Multi-frame confirmation threshold to prevent accidental or false triggers',
      'Local SQLite persistence for enrolled students and timestamped logs',
      'Embedded Flask dashboard rendered inside a native pywebview desktop window',
      'Attendance log explorer with CSV export and print-ready summary tables',
    ],
    technologies: ['Python', 'Flask', 'OpenCV', 'SQLite', 'pywebview'],
    repoUrl: 'https://github.com/Shafyydev/face-recognition-attendance-system',
  },
  {
    num: '02',
    title: 'Personal Portfolio Website',
    type: 'Web Application & Design System',
    tagline: 'Editorial-grade developer portfolio built from scratch with React and Vite.',
    description:
      'A bespoke portfolio website engineered to showcase candidate capabilities, academic background, and technical projects for software development internship applications. Built with an editorial design philosophy, custom CSS tokens, and verified facts.',
    features: [
      'Bespoke editorial aesthetic featuring DM Serif Display, DM Sans, and JetBrains Mono',
      'Zero bloated third-party UI libraries — hand-crafted responsive CSS tokens',
      'Strict factual integrity with zero hallucinated credentials or exaggerated claims',
      'Accessible drawer navigation, semantic markup, and optimized mobile layouts',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Vite', 'Git', 'GitHub'],
    repoUrl: 'https://github.com/Shafyydev/My-Portfolio',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section" aria-label="Selected Projects">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">03 / Selected Works</span>
          <h2 className="section-title">
            Featured <em>engineered</em> projects.
          </h2>
          <p className="section-lead">
            Software systems built from scratch to solve concrete problems and explore
            full-stack development and computer vision.
          </p>
        </header>

        <div className="projects__list">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.num}>
              {/* Top metadata strip */}
              <div className="project-card__top">
                <span className="project-card__num meta">{project.num} //</span>
                <span className="project-card__type meta">{project.type}</span>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__github-link"
                    aria-label={`View ${project.title} repository on GitHub`}
                    title="View GitHub Repository"
                  >
                    <IconGitHub size={18} />
                    <span className="meta">GitHub</span>
                    <IconExternalLink size={12} />
                  </a>
                )}
              </div>

              {/* Main Content */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__tagline">{project.tagline}</p>
                <p className="project-card__desc">{project.description}</p>

                {/* Features Checklist */}
                <div className="project-card__features-wrap">
                  <h4 className="project-card__features-heading meta">Key Architectural Features</h4>
                  <ul className="project-card__features">
                    {project.features.map((feat) => (
                      <li key={feat} className="project-card__feature-item">
                        <span className="project-card__feature-bullet" aria-hidden="true">↳</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Chips & CTA */}
                <div className="project-card__footer">
                  <div className="project-card__tech" aria-label="Technologies used">
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
                      className="btn btn-secondary project-card__cta"
                    >
                      Inspect Source
                      <IconExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

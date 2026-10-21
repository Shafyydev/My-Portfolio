import { IconGitHub, IconExternalLink } from './Icons.jsx';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Facial Recognition Attendance System',
    category: 'Desktop Computer Vision Application',
    image: 'attendance-preview.jpg',
    webpImage: 'attendance-preview.webp',
    description:
      'A desktop attendance application combining computer vision face detection with an embedded web dashboard. It registers students via live webcam capture, matches enrolled facial features in real-time, and logs verified attendance records in a local SQLite database.',
    features: [
      'Live camera feed with real-time OpenCV facial landmark detection',
      'Student enrollment workflow with multi-angle face sample acquisition',
      'Multi-frame confirmation threshold to prevent accidental triggers',
      'Local SQLite persistence for enrolled students and timestamped logs',
      'Embedded Flask dashboard rendered inside a native pywebview desktop window',
      'Attendance log explorer with CSV export and printable summary tables',
    ],
    technologies: ['Python', 'Flask', 'OpenCV', 'SQLite', 'pywebview'],
    repoUrl: 'https://github.com/Shafyydev/face-recognition-attendance-system',
  },
  {
    title: 'Personal Developer Portfolio Website',
    category: 'Web Application & Design System',
    image: 'portfolio-preview.jpg',
    webpImage: 'portfolio-preview.webp',
    description:
      'A modern developer portfolio website engineered to showcase technical capabilities, academic background, and projects. Rebuilt using the sleek Framer DesignFast design language.',
    features: [
      'Sleek dark design language adapted from the Framer DesignFast template',
      'Fully responsive layouts engineered for desktop, tablet, and mobile',
      'Accessible mobile navigation drawer with focus trapping and keyboard support',
      'Zero bloated third-party UI component libraries — clean, modular CSS',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Vite', 'Git', 'GitHub'],
    repoUrl: 'https://github.com/Shafyydev/My-Portfolio',
  },
];

function Projects() {
  return (
    <section id="projects" className="section df-projects" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="df-projects__header">
          <div className="section-badge">
            <span className="section-badge__dot" />
            <span>Case Studies</span>
          </div>
          <h2 className="section-title">
            Featured engineered projects.
          </h2>
          <p className="section-subtitle">
            Software systems built from scratch to solve concrete challenges and explore
            full-stack development and computer vision.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="df-projects__list">
          {PROJECTS.map((project) => (
            <article className="df-card df-project-card" key={project.title}>
              {/* Media Preview */}
              <div className="df-project-card__media">
                <picture>
                  <source
                    srcSet={`${import.meta.env.BASE_URL}${project.webpImage}`}
                    type="image/webp"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.title} interface preview`}
                    className="df-project-card__img"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </picture>
              </div>

              {/* Content */}
              <div className="df-project-card__content">
                <span className="df-project-card__category">{project.category}</span>
                <h3 className="df-project-card__title">{project.title}</h3>
                <p className="df-project-card__desc">{project.description}</p>

                {/* Features */}
                <div className="df-project-card__features">
                  <span className="df-project-card__features-title">Key Architectural Features:</span>
                  <ul className="df-project-card__features-list">
                    {project.features.map((feat) => (
                      <li key={feat} className="df-project-card__feature-item">
                        <span className="df-project-card__bullet">{'\u2713'}</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags & CTA */}
                <div className="df-project-card__footer">
                  <div className="df-project-card__tags">
                    {project.technologies.map((tech) => (
                      <span className="df-project-card__tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-white df-project-card__btn"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <IconGitHub size={18} />
                      <span>View Repository</span>
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

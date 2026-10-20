import { IconCode } from './Icons.jsx';
import './About.css';

function About() {
  return (
    <section id="about" className="about section" aria-label="About Me">
      <div className="container">
        <div className="about__header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to Know Me</h2>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <p className="about__text">
              I am pursuing a <strong>B.Sc. in Artificial Intelligence</strong> at
              St. Joseph&rsquo;s College of Arts and Science (Autonomous), Cuddalore.
              I am interested in Full Stack Development and building practical
              software projects.
            </p>
            <p className="about__text">
              My projects include a personal portfolio website and a{' '}
              <strong>Facial Recognition Attendance System</strong>. I am looking
              for internship opportunities where I can apply my knowledge, improve
              my development skills, and gain practical experience.
            </p>
            <div className="about__actions">
              <a href="#projects" className="btn btn-primary">
                <IconCode size={18} />
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let&rsquo;s Connect
              </a>
            </div>
          </div>

          <div className="about__highlights">
            <div className="about__highlight-card">
              <div className="about__highlight-icon">🎓</div>
              <div>
                <h3 className="about__highlight-title">B.Sc. Artificial Intelligence</h3>
                <p className="about__highlight-desc">
                  St. Joseph&rsquo;s College, Cuddalore · 2024–2027
                </p>
              </div>
            </div>
            <div className="about__highlight-card">
              <div className="about__highlight-icon">💻</div>
              <div>
                <h3 className="about__highlight-title">Aspiring Full Stack Developer</h3>
                <p className="about__highlight-desc">
                  Building web applications with modern technologies
                </p>
              </div>
            </div>
            <div className="about__highlight-card">
              <div className="about__highlight-icon">🔍</div>
              <div>
                <h3 className="about__highlight-title">Seeking Internship</h3>
                <p className="about__highlight-desc">
                  Open to software development internship opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

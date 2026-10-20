import { IconGitHub, IconLinkedIn, IconArrowDown, IconExternalLink } from './Icons.jsx';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__container">
        {/* Availability Badge */}
        <div className="hero__status-wrap">
          <div className="status-pill">
            <span className="status-dot" />
            <span>Open to Internship Opportunities · 2025/2026</span>
          </div>
          <span className="hero__location meta">Cuddalore, TN, India</span>
        </div>

        {/* Headline */}
        <div className="hero__main">
          <h1 className="hero__title">
            <span className="hero__name">Mohammed Shafiullah N</span>
            <span className="hero__role">
              Aspiring <em>Full Stack Developer</em> &amp; AI Undergraduate
            </span>
          </h1>

          <p className="hero__bio">
            Pursuing a B.Sc. in Artificial Intelligence at St. Joseph&rsquo;s College of Arts and Science
            (Autonomous). Passionate about building functional, high-performance web applications,
            exploring software engineering, and solving real problems through code.
          </p>

          {/* Action Row */}
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              Selected Works
              <span className="hero__btn-arrow">↓</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
              <span className="hero__btn-arrow">↗</span>
            </a>
            <div className="hero__socials">
              <a
                href="https://github.com/Shafyydev"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon"
                aria-label="GitHub profile"
                title="GitHub: Shafyydev"
              >
                <IconGitHub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/Shafyy"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon"
                aria-label="LinkedIn profile"
                title="LinkedIn: Shafyy"
              >
                <IconLinkedIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Technical Spec Sheet Strip */}
        <div className="hero__specs">
          <div className="hero__spec-item">
            <span className="meta">01 / Focus</span>
            <strong className="hero__spec-value">Full Stack Development</strong>
          </div>
          <div className="hero__spec-item">
            <span className="meta">02 / Degree</span>
            <strong className="hero__spec-value">B.Sc. Artificial Intelligence</strong>
          </div>
          <div className="hero__spec-item">
            <span className="meta">03 / Timeline</span>
            <strong className="hero__spec-value">2024 &mdash; 2027 (Undergrad)</strong>
          </div>
          <div className="hero__spec-item">
            <span className="meta">04 / Target</span>
            <strong className="hero__spec-value">Software Dev Internship</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

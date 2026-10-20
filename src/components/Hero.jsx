import { IconGitHub, IconLinkedIn } from './Icons.jsx';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="df-hero" aria-label="Introduction">
      {/* 3D Perspective Grid Background (DesignFast signature style) */}
      <div className="df-hero__grid-wrapper" aria-hidden="true">
        <div className="df-hero__glow-primary" />
        <div className="df-hero__glow-secondary" />
        <div className="df-hero__grid-plane" />
      </div>

      <div className="container df-hero__container">
        {/* Top Centered Header */}
        <div className="df-hero__header">
          <div className="section-badge">
            <span className="section-badge__dot" />
            <span>Open for Internship Opportunities &middot; 2025/2026</span>
          </div>

          <h1 className="df-hero__title">
            Mohammed Shafiullah N
            <span className="df-hero__role">
              Aspiring Full Stack Developer &amp; AI Student
            </span>
          </h1>

          <p className="df-hero__desc">
            Currently pursuing a B.Sc. in Artificial Intelligence at St. Joseph&rsquo;s College of Arts and Science
            (Autonomous), Cuddalore. Passionate about building functional web applications, computer vision tools,
            and continuing to grow into a Full Stack Developer.
          </p>

          <div className="df-hero__actions">
            <a href="#projects" className="btn-pill-white">
              Explore Projects &rarr;
            </a>
            <a href="#contact" className="btn-pill-dark">
              Get in Touch
            </a>
            <div className="df-hero__socials">
              <a
                href="https://github.com/Shafyydev"
                target="_blank"
                rel="noopener noreferrer"
                className="df-hero__social-btn"
                aria-label="GitHub profile"
                title="GitHub: Shafyydev"
              >
                <IconGitHub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/Shafyy"
                target="_blank"
                rel="noopener noreferrer"
                className="df-hero__social-btn"
                aria-label="LinkedIn profile"
                title="LinkedIn: Shafyy"
              >
                <IconLinkedIn size={18} />
              </a>
            </div>
          </div>

          {/* College Sub-Bar */}
          <div className="df-hero__trust-strip">
            <span className="df-hero__trust-text">
              St. Joseph&rsquo;s College of Arts and Science (Autonomous), Cuddalore &middot; 2024&ndash;2027
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator pointing to the next section */}
      <a href="#focus" className="df-hero__scroll-indicator" aria-label="Scroll to explore">
        <span>Scroll to explore</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;

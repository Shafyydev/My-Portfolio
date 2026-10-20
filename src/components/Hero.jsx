import { IconGitHub, IconLinkedIn, IconExternalLink } from './Icons.jsx';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="df-hero" aria-label="Introduction">
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

        {/* 3 Bento Feature Cards (Exact DesignFast Bento Pattern) */}
        <div className="df-hero__bento">
          {/* Card 1: Intelligent Systems */}
          <div className="df-card df-hero__bento-card">
            <div className="df-hero__card-content">
              <h3 className="df-hero__card-title">Computer Vision &amp; AI</h3>
              <p className="df-hero__card-desc">
                Building practical applications with OpenCV facial detection and SQLite tracking.
              </p>
            </div>
            {/* Visual widget */}
            <div className="df-hero__widget-graph" aria-hidden="true">
              <div className="df-hero__graph-header">
                <span className="df-hero__graph-stat">Live Detection</span>
                <span className="df-hero__graph-badge">Verified</span>
              </div>
              <div className="df-hero__bars">
                <span className="df-hero__bar" style={{ height: '40%' }} />
                <span className="df-hero__bar" style={{ height: '65%' }} />
                <span className="df-hero__bar" style={{ height: '50%' }} />
                <span className="df-hero__bar" style={{ height: '85%' }} />
                <span className="df-hero__bar df-hero__bar--active" style={{ height: '100%' }} />
              </div>
              <div className="df-hero__graph-footer">
                <span>Multi-frame recognition algorithm</span>
              </div>
            </div>
          </div>

          {/* Card 2: Development Pipeline */}
          <div className="df-card df-hero__bento-card">
            <div className="df-hero__card-content">
              <h3 className="df-hero__card-title">Full Stack Tooling</h3>
              <p className="df-hero__card-desc">
                Developing responsive web interfaces and server architectures.
              </p>
            </div>
            {/* Activity list widget */}
            <div className="df-hero__activity-list" aria-hidden="true">
              <div className="df-hero__activity-item">
                <div className="df-hero__activity-icon">PY</div>
                <div className="df-hero__activity-info">
                  <strong>Facial Attendance System</strong>
                  <span>Python &middot; Flask &middot; OpenCV</span>
                </div>
              </div>
              <div className="df-hero__activity-item">
                <div className="df-hero__activity-icon">RE</div>
                <div className="df-hero__activity-info">
                  <strong>Portfolio Website</strong>
                  <span>React.js &middot; JavaScript &middot; CSS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Internship Ready */}
          <div className="df-card df-hero__bento-card">
            <div className="df-hero__card-content">
              <h3 className="df-hero__card-title">Internship Ready</h3>
              <p className="df-hero__card-desc">
                Seeking a software development internship to gain real production experience.
              </p>
            </div>
            {/* Chat bubble collaboration widget */}
            <div className="df-hero__chat-widget" aria-hidden="true">
              <div className="df-hero__chat-msg df-hero__chat-msg--left">
                <span className="df-hero__chat-avatar">HR</span>
                <p className="df-hero__chat-text">Seeking developer interns for software development?</p>
              </div>
              <div className="df-hero__chat-msg df-hero__chat-msg--right">
                <p className="df-hero__chat-text">Yes, excited to collaborate and build together!</p>
                <span className="df-hero__chat-avatar df-hero__chat-avatar--user">SN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

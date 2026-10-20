import './About.css';

function About() {
  return (
    <section id="about" className="about section" aria-label="About Mohammed Shafiullah">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">01 / Background</span>
          <h2 className="section-title">
            Rooted in AI, <em>engineering</em> for the web.
          </h2>
          <p className="section-lead">
            An undergraduate developer focused on bridging artificial intelligence fundamentals
            with modern, full-stack software development.
          </p>
        </header>

        <div className="about__layout">
          {/* Narrative Column */}
          <div className="about__narrative">
            <p className="about__p">
              I am pursuing a <strong>B.Sc. in Artificial Intelligence</strong> at{' '}
              <em>St. Joseph&rsquo;s College of Arts and Science (Autonomous)</em>, Cuddalore (2024&ndash;2027).
              My focus lies at the intersection of AI concepts and practical software development.
            </p>
            <p className="about__p">
              Rather than theoretical-only study, I believe in learning by constructing actual systems.
              From building desktop attendance systems that integrate <strong>OpenCV</strong> facial recognition
              with Flask and SQLite, to architecting clean web applications with <strong>React</strong> and <strong>Node.js</strong>,
              I spend my time strengthening my programming foundation.
            </p>
            <p className="about__p">
              I am actively seeking a <strong>Software Development Internship</strong> where I can contribute to
              real production challenges, learn under experienced engineers, and continue progressing toward a
              Full Stack Developer career.
            </p>

            <div className="about__links">
              <a href="#skills" className="about__inline-link">
                View Technical Capabilities <span>→</span>
              </a>
              <a href="#projects" className="about__inline-link">
                Explore Selected Projects <span>→</span>
              </a>
            </div>
          </div>

          {/* Profile Spec Sheet */}
          <aside className="about__spec-card" aria-label="Profile Specifications">
            <div className="about__spec-header">
              <span className="meta">Candidate Dossier</span>
              <span className="about__spec-status">Active Student</span>
            </div>

            <dl className="about__spec-list">
              <div className="about__spec-row">
                <dt className="about__spec-label">Full Name</dt>
                <dd className="about__spec-val">Mohammed Shafiullah N</dd>
              </div>
              <div className="about__spec-row">
                <dt className="about__spec-label">Target Role</dt>
                <dd className="about__spec-val">Software Development Intern / Full Stack</dd>
              </div>
              <div className="about__spec-row">
                <dt className="about__spec-label">Degree</dt>
                <dd className="about__spec-val">B.Sc. Artificial Intelligence</dd>
              </div>
              <div className="about__spec-row">
                <dt className="about__spec-label">Institution</dt>
                <dd className="about__spec-val">
                  St. Joseph&rsquo;s College of Arts and Science (Autonomous)
                </dd>
              </div>
              <div className="about__spec-row">
                <dt className="about__spec-label">Location</dt>
                <dd className="about__spec-val">Cuddalore, Tamil Nadu, India</dd>
              </div>
              <div className="about__spec-row">
                <dt className="about__spec-label">Timeline</dt>
                <dd className="about__spec-val font-mono">2024 &mdash; 2027</dd>
              </div>
            </dl>

            <div className="about__spec-footer">
              <span className="meta">Status</span>
              <p className="about__spec-callout">
                Available for Summer &amp; Ongoing Internships
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;

import './About.css';

function About() {
  return (
    <section id="about" className="section df-about" aria-label="About Me">
      <div className="container">
        {/* Section Header */}
        <div className="df-about__header">
          <div className="section-badge">
            <span className="section-badge__dot" />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Driven by AI foundations, engineering for the web.
          </h2>
          <p className="section-subtitle">
            A developer building real-world software, exploring full-stack engineering,
            and preparing for practical industry impact.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="df-about__grid">
          {/* Main Narrative Card */}
          <div className="df-card df-about__narrative-card">
            <h3 className="df-about__card-heading">Background &amp; Philosophy</h3>
            <p className="df-about__text">
              I am currently pursuing a <strong>B.Sc. in Artificial Intelligence</strong> at{' '}
              <strong>St. Joseph&rsquo;s College of Arts and Science (Autonomous)</strong>, Cuddalore (2024&ndash;2027).
              My academic curriculum grounds me in artificial intelligence foundations, algorithmic thinking, and computational logic.
            </p>
            <p className="df-about__text">
              Beyond the classroom, I focus on full-stack web development. I believe in hands-on building:
              from desktop attendance applications integrating <strong>OpenCV</strong> facial recognition with
              Flask and SQLite, to responsive modern interfaces built with <strong>React.js</strong> and <strong>Node.js</strong>.
            </p>
            <p className="df-about__text">
              My immediate objective is to obtain a <strong>Software Development Internship</strong> where I can collaborate
              with seasoned engineers, contribute to real production codebases, and accelerate my progression toward a full-time
              Full Stack Developer role.
            </p>

            <div className="df-about__actions">
              <a href="#skills" className="btn-pill-white">
                View Technical Skills &rarr;
              </a>
              <a href="#projects" className="btn-pill-dark">
                Explore Projects
              </a>
            </div>
          </div>

          {/* Profile Specs Card */}
          <div className="df-card df-about__specs-card">
            <h3 className="df-about__card-heading">Profile Specifications</h3>
            
            <div className="df-about__specs-list">
              <div className="df-about__spec-item">
                <span className="df-about__spec-label">Degree</span>
                <strong className="df-about__spec-value">B.Sc. Artificial Intelligence</strong>
              </div>
              <div className="df-about__spec-item">
                <span className="df-about__spec-label">Institution</span>
                <strong className="df-about__spec-value">
                  St. Joseph&rsquo;s College of Arts and Science (Autonomous)
                </strong>
              </div>
              <div className="df-about__spec-item">
                <span className="df-about__spec-label">Location</span>
                <strong className="df-about__spec-value">Cuddalore, Tamil Nadu, India</strong>
              </div>
              <div className="df-about__spec-item">
                <span className="df-about__spec-label">Tenure</span>
                <strong className="df-about__spec-value font-mono">2024 &mdash; 2027 (Undergraduate)</strong>
              </div>
              <div className="df-about__spec-item">
                <span className="df-about__spec-label">Target Role</span>
                <strong className="df-about__spec-value">Software Development Internship</strong>
              </div>
            </div>

            <div className="df-about__status-box">
              <span className="df-about__status-dot" />
              <span>Available for Summer &amp; Ongoing Internships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

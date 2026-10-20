import { IconMapPin, IconCalendar } from './Icons.jsx';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education section" aria-label="Academic Background">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">04 / Academic Foundation</span>
          <h2 className="section-title">
            Education &amp; <em>curriculum</em>.
          </h2>
          <p className="section-lead">
            Formal undergraduate studies providing the theoretical and practical foundation
            for software engineering and intelligent systems.
          </p>
        </header>

        <div className="education__card">
          <div className="education__top">
            <div className="education__period-badge">
              <IconCalendar size={14} />
              <span className="font-mono">2024 &mdash; 2027</span>
            </div>
            <span className="education__status-badge">Currently Enrolled · In Progress</span>
          </div>

          <div className="education__main">
            <div className="education__headings">
              <h3 className="education__degree">Bachelor of Science in Artificial Intelligence</h3>
              <p className="education__institution">
                St. Joseph&rsquo;s College of Arts and Science (Autonomous)
              </p>
              <p className="education__location">
                <IconMapPin size={14} />
                <span>Cuddalore, Tamil Nadu, India</span>
              </p>
            </div>

            <div className="education__narrative">
              <p className="education__summary">
                Undergraduate program focused on artificial intelligence fundamentals, algorithmic problem solving,
                and software engineering methodologies. Complementing the academic syllabus through hands-on
                development of web applications and desktop computer vision systems.
              </p>

              <div className="education__focus-grid">
                <div className="education__focus-item">
                  <span className="meta">Core Focus 01</span>
                  <strong className="education__focus-title">AI &amp; Computational Logic</strong>
                </div>
                <div className="education__focus-item">
                  <span className="meta">Core Focus 02</span>
                  <strong className="education__focus-title">Python &amp; Systems Programming</strong>
                </div>
                <div className="education__focus-item">
                  <span className="meta">Core Focus 03</span>
                  <strong className="education__focus-title">Relational Databases &amp; SQL</strong>
                </div>
                <div className="education__focus-item">
                  <span className="meta">Core Focus 04</span>
                  <strong className="education__focus-title">Full Stack Web Architecture</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

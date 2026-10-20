import { IconCalendar, IconMapPin } from './Icons.jsx';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section df-education" aria-label="Academic Background">
      <div className="container">
        {/* Section Header */}
        <div className="df-education__header">
          <div className="section-badge">
            <span className="section-badge__dot" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; foundational studies.
          </h2>
          <p className="section-subtitle">
            Formal undergraduate coursework in computer science and artificial intelligence,
            grounding my practical software development practice.
          </p>
        </div>

        {/* Education Card */}
        <div className="df-card df-education__card">
          <div className="df-education__top">
            <div className="df-education__period-pill">
              <IconCalendar size={14} />
              <span>2024 &mdash; 2027 (Undergraduate)</span>
            </div>
            <div className="df-education__status">
              <span className="df-education__status-dot" />
              <span>Currently Pursuing &middot; Active Student</span>
            </div>
          </div>

          <div className="df-education__body">
            <h3 className="df-education__degree">Bachelor of Science in Artificial Intelligence</h3>
            <p className="df-education__institution">
              St. Joseph&rsquo;s College of Arts and Science (Autonomous)
            </p>
            <div className="df-education__location">
              <IconMapPin size={15} />
              <span>Cuddalore, Tamil Nadu, India</span>
            </div>

            <p className="df-education__summary">
              Academic program providing core competencies in intelligent computing, algorithms, programming logic,
              and systems architecture. Complemented through continuous personal project development in web engineering
              and applied computer vision.
            </p>

            <div className="df-education__focus-grid">
              <div className="df-education__focus-card">
                <span className="df-education__focus-index">01</span>
                <strong>AI &amp; Computational Logic</strong>
                <p>Foundations of artificial intelligence and algorithmic problem solving.</p>
              </div>
              <div className="df-education__focus-card">
                <span className="df-education__focus-index">02</span>
                <strong>Python &amp; Systems Programming</strong>
                <p>Core programming, scripting, and system automation.</p>
              </div>
              <div className="df-education__focus-card">
                <span className="df-education__focus-index">03</span>
                <strong>Relational Databases &amp; SQL</strong>
                <p>Data modeling, schemas, queries, and persistence in MySQL/PostgreSQL.</p>
              </div>
              <div className="df-education__focus-card">
                <span className="df-education__focus-index">04</span>
                <strong>Full Stack Web Architecture</strong>
                <p>Component-based web applications with modern JavaScript and React.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

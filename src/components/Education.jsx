import { IconGraduationCap, IconMapPin, IconCalendar } from './Icons.jsx';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education section" aria-label="Education">
      <div className="container">
        <div className="education__header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education__card">
          <div className="education__icon-wrap">
            <IconGraduationCap size={32} />
          </div>

          <div className="education__details">
            <h3 className="education__degree">B.Sc. Artificial Intelligence</h3>
            <p className="education__institution">
              <IconMapPin size={14} />
              St. Joseph&rsquo;s College of Arts and Science (Autonomous), Cuddalore, Tamil Nadu, India
            </p>
            <p className="education__period">
              <IconCalendar size={14} />
              2024 – 2027
            </p>
          </div>

          <div className="education__badge">
            <span className="education__badge-text">Currently Pursuing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

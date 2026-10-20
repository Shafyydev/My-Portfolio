import { IconGitHub, IconLinkedIn, IconArrowDown } from './Icons.jsx';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Background decorative elements */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge animate-fade-in-up">
            <span className="hero__badge-dot" />
            Open to Internship Opportunities
          </div>

          <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I&rsquo;m{' '}
            <span className="hero__name">Mohammed Shafiullah</span>
          </h1>

          <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Aspiring Full Stack Developer
          </p>

          <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A B.Sc. Artificial Intelligence student interested in building web
            applications and developing practical software engineering skills.
          </p>

          <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero__socials animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/Shafyydev"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
            >
              <IconGitHub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/Shafyy"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
            >
              <IconLinkedIn size={22} />
            </a>
          </div>
        </div>

        {/* Decorative code card */}
        <div className="hero__visual animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-dot hero__card-dot--red" />
              <span className="hero__card-dot hero__card-dot--yellow" />
              <span className="hero__card-dot hero__card-dot--green" />
              <span className="hero__card-filename">profile.js</span>
            </div>
            <pre className="hero__card-code">
              <code>
{`const developer = {
  name: "Mohammed Shafiullah N",
  title: "Aspiring Full Stack Developer",
  education: "B.Sc. AI",
  skills: ["Python", "JavaScript",
           "React.js", "Node.js"],
  status: "Open to internships"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <IconArrowDown size={20} />
      </a>
    </section>
  );
}

export default Hero;

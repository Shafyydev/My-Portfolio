import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="df-footer" role="contentinfo">
      <div className="container">
        <div className="df-footer__top">
          {/* Brand */}
          <div className="df-footer__brand">
            <a href="#home" className="df-footer__logo">
              <span className="df-footer__logo-icon">S</span>
              <span className="df-footer__logo-text">Shafiullah</span>
            </a>
            <p className="df-footer__role">
              Full Stack Developer &middot; B.Sc. Artificial Intelligence
            </p>
            <p className="df-footer__college">
              St. Joseph&rsquo;s College of Arts and Science (Autonomous), Cuddalore (2024&ndash;2027)
            </p>
          </div>

          {/* Links Column */}
          <div className="df-footer__nav">
            <span className="df-footer__nav-title">Navigation</span>
            <div className="df-footer__links">
              <a href="#home" className="df-footer__link">Home</a>
              <a href="#focus" className="df-footer__link">Focus</a>
              <a href="#about" className="df-footer__link">About</a>
              <a href="#skills" className="df-footer__link">Skills</a>
              <a href="#projects" className="df-footer__link">Projects</a>
              <a href="#education" className="df-footer__link">Education</a>
              <a href="#contact" className="df-footer__link">Contact</a>
            </div>
          </div>

          {/* Connect Column */}
          <div className="df-footer__nav">
            <span className="df-footer__nav-title">Connect</span>
            <div className="df-footer__links">
              <a
                href="https://github.com/Shafyydev"
                target="_blank"
                rel="noopener noreferrer"
                className="df-footer__link"
              >
                GitHub &rarr;
              </a>
              <a
                href="https://www.linkedin.com/in/Shafyy"
                target="_blank"
                rel="noopener noreferrer"
                className="df-footer__link"
              >
                LinkedIn &rarr;
              </a>
              <a
                href="mailto:shafyy.officials25@gmail.com"
                className="df-footer__link"
              >
                Email &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="df-footer__bottom">
          <p className="df-footer__copyright">
            &copy; {currentYear} Mohammed Shafiullah N. Built with React &amp; CSS.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="df-footer__back-to-top"
            aria-label="Scroll back to top"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

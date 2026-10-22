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
          {/* Links Column */}
          <nav className="df-footer__nav" aria-label="Footer navigation">
            <span className="df-footer__nav-title">Navigation</span>
            <ul className="df-footer__links">
              <li><a href="#home" className="df-footer__link">Home</a></li>
              <li><a href="#focus" className="df-footer__link">Focus</a></li>
              <li><a href="#about" className="df-footer__link">About</a></li>
              <li><a href="#skills" className="df-footer__link">Skills</a></li>
              <li><a href="#projects" className="df-footer__link">Projects</a></li>
              <li><a href="#education" className="df-footer__link">Education</a></li>
              <li><a href="#contact" className="df-footer__link">Contact</a></li>
            </ul>
          </nav>

          {/* Connect Column */}
          <nav className="df-footer__nav" aria-label="Social and contact links">
            <span className="df-footer__nav-title">Connect</span>
            <ul className="df-footer__links">
              <li>
                <a
                  href="https://github.com/Shafyydev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="df-footer__link"
                >
                  GitHub &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/Shafyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="df-footer__link"
                >
                  LinkedIn &rarr;
                </a>
              </li>
              <li>
                <a
                  href="mailto:shafyy.officials25@gmail.com"
                  className="df-footer__link"
                >
                  Email &rarr;
                </a>
              </li>
            </ul>
          </nav>
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

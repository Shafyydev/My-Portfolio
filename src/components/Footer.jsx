import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="df-footer" role="contentinfo">
      <div className="container">
        <div className="df-footer__grid">
          {/* Brand Column */}
          <div className="df-footer__col df-footer__col--brand">
            <a href="#home" className="df-footer__brand-title" aria-label="Shafiullah Home">
              SHAFIULLAH
            </a>
            <p className="df-footer__brand-tagline">
              Engineering modern web systems, responsive user interfaces, and practical AI applications.
            </p>
            <div className="df-footer__status-badge">
              <span className="df-footer__status-dot" aria-hidden="true" />
              <span>Available for Internships &amp; Roles</span>
            </div>
          </div>

          {/* Explore Column */}
          <nav className="df-footer__col" aria-label="Explore navigation">
            <span className="df-footer__heading">Explore</span>
            <ul className="df-footer__list">
              <li><a href="#home" className="df-footer__link">Home</a></li>
              <li><a href="#focus" className="df-footer__link">Focus</a></li>
              <li><a href="#about" className="df-footer__link">About</a></li>
              <li><a href="#skills" className="df-footer__link">Skills</a></li>
              <li><a href="#projects" className="df-footer__link">Projects</a></li>
              <li><a href="#education" className="df-footer__link">Education</a></li>
              <li><a href="#contact" className="df-footer__link">Contact</a></li>
            </ul>
          </nav>

          {/* Location & Inquiries Column */}
          <div className="df-footer__col">
            <span className="df-footer__heading">Location</span>
            <p className="df-footer__text">
              Cuddalore, Tamil Nadu<br />
              India &middot; Remote &amp; Hybrid
            </p>

            <span className="df-footer__heading df-footer__heading--sub">Inquiries</span>
            <a href="mailto:shafyy.officials25@gmail.com" className="df-footer__link df-footer__link--highlight">
              shafyy.officials25@gmail.com
            </a>
          </div>

          {/* Follow / Connect Column */}
          <nav className="df-footer__col" aria-label="Social and connection links">
            <span className="df-footer__heading">Connect</span>
            <ul className="df-footer__list">
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

          {/* Next / Action Column (Envoy Signature) */}
          <div className="df-footer__col df-footer__col--action">
            <span className="df-footer__heading">Next</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="df-footer__next-btn"
              aria-label="Scroll to top of page"
            >
              <span className="df-footer__next-text">Back to Top &uarr;</span>
              <span className="df-footer__next-rule" aria-hidden="true" />
            </button>
            <a href="#contact" className="df-footer__contact-link">
              Start a Conversation &rarr;
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="df-footer__bottom">
          <p className="df-footer__copyright">
            &copy; {currentYear} Mohammed Shafiullah N. All rights reserved.
          </p>
          <p className="df-footer__meta">
            B.Sc. Artificial Intelligence &middot; Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

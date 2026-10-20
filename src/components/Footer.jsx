import { IconGitHub, IconLinkedIn, IconMail } from './Icons.jsx';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Colophon & Candidate Identity */}
          <div className="footer__brand">
            <a href="#home" className="footer__wordmark">
              Shafiullah<span className="footer__dot">.</span>
            </a>
            <p className="footer__role">
              Mohammed Shafiullah N &mdash; Aspiring Full Stack Developer
            </p>
            <p className="footer__degree meta">
              B.Sc. Artificial Intelligence (2024&ndash;2027) &middot; St. Joseph&rsquo;s College, Cuddalore
            </p>
          </div>

          {/* Quick Nav */}
          <div className="footer__nav-group">
            <span className="meta">Index</span>
            <nav className="footer__links" aria-label="Footer Navigation">
              <a href="#about" className="footer__link">About</a>
              <a href="#skills" className="footer__link">Skills</a>
              <a href="#projects" className="footer__link">Projects</a>
              <a href="#education" className="footer__link">Education</a>
              <a href="#contact" className="footer__link">Contact</a>
            </nav>
          </div>

          {/* Connect Links */}
          <div className="footer__nav-group">
            <span className="meta">Connect</span>
            <div className="footer__links">
              <a
                href="https://github.com/Shafyydev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/Shafyy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:shafyy.officials25@gmail.com"
                className="footer__link"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright meta">
            &copy; {currentYear} Mohammed Shafiullah N. All rights reserved.
          </p>
          <p className="footer__location meta">
            Cuddalore, Tamil Nadu, India &middot; IST (UTC+05:30)
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer__back-to-top meta"
            aria-label="Scroll back to top"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { IconGitHub, IconLinkedIn, IconHeart } from './Icons.jsx';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" aria-label="Back to top">
              <span className="footer__logo-icon">S</span>
              <span className="footer__logo-text">Shafiullah</span>
            </a>
            <p className="footer__desc">
              Aspiring Full Stack Developer · B.Sc. Artificial Intelligence student
              building practical software projects.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer__social">
            <h4 className="footer__links-title">Connect</h4>
            <div className="footer__social-links">
              <a
                href="https://github.com/Shafyydev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub profile"
              >
                <IconGitHub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/Shafyy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn profile"
              >
                <IconLinkedIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Mohammed Shafiullah N. All rights reserved.
          </p>
          <p className="footer__made">
            Built with <IconHeart size={14} /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

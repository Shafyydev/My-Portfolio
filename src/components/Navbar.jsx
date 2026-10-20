import { useState, useEffect } from 'react';
import { IconMenu, IconClose } from './Icons.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on link click */
  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  /* Close mobile menu on Escape key */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    if (isMobileOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header
      id="navbar"
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <nav className="navbar__inner container" aria-label="Primary navigation">
        <a href="#home" className="navbar__brand" aria-label="Home">
          <span className="navbar__brand-icon">S</span>
          <span className="navbar__brand-text">Shafiullah</span>
        </a>

        <ul className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="navbar__link"
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="navbar__cta btn btn-primary"
          onClick={handleLinkClick}
        >
          Get in Touch
        </a>

        <button
          id="mobile-menu-toggle"
          className="navbar__toggle"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="navbar__mobile-link"
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn btn-primary navbar__mobile-cta"
          onClick={handleLinkClick}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

export default Navbar;

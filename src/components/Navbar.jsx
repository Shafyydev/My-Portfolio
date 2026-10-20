import { useState, useEffect } from 'react';
import { IconMenu, IconClose } from './Icons.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => e.key === 'Escape' && setMobileOpen(false);
      document.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
      };
    }
    document.body.style.overflow = '';
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <header className={`df-nav-wrapper ${scrolled ? 'df-nav-wrapper--scrolled' : ''}`}>
      <div className="container df-nav-container">
        <nav className="df-nav" aria-label="Main Navigation">
          {/* Logo / Name */}
          <a href="#home" className="df-nav__logo" aria-label="Portfolio Home">
            <span className="df-nav__logo-icon">P</span>
            <span className="df-nav__logo-text">Portfolio</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="df-nav__links">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="df-nav__link">
                {label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="df-nav__actions">
            <a href="#contact" className="btn-pill-white df-nav__cta">
              Let&rsquo;s talk
            </a>
            <button
              type="button"
              className="df-nav__toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && <div className="df-nav__scrim" onClick={close} />}
      <div className={`df-nav__drawer ${mobileOpen ? 'df-nav__drawer--open' : ''}`}>
        <div className="df-nav__drawer-header">
          <span className="df-nav__logo-text">Portfolio</span>
          <button type="button" onClick={close} className="df-nav__drawer-close">
            <IconClose size={20} />
          </button>
        </div>
        <div className="df-nav__drawer-links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="df-nav__drawer-link" onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-pill-white df-nav__drawer-btn" onClick={close}>
            Let&rsquo;s talk
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

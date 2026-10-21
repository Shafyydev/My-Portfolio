import { useState, useEffect, useRef } from 'react';
import { IconMenu, IconClose } from './Icons.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Focus', href: '#focus' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      wasOpenRef.current = true;
      document.body.style.overflow = 'hidden';

      // Focus the close button when drawer opens
      const closeBtn = drawerRef.current?.querySelector('.df-nav__drawer-close');
      if (closeBtn) closeBtn.focus();

      const onKey = (e) => {
        if (e.key === 'Escape') {
          setMobileOpen(false);
          return;
        }

        // Focus trap within the drawer
        if (e.key === 'Tab' && drawerRef.current) {
          const focusable = drawerRef.current.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
      };
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      document.body.style.overflow = '';
      if (toggleRef.current) toggleRef.current.focus();
    }
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <header className={`df-nav-wrapper ${scrolled ? 'df-nav-wrapper--scrolled' : ''}`}>
      <div className="container df-nav-container">
        <nav className="df-nav" aria-label="Main Navigation">
          {/* Logo / Name */}
          <a href="#home" className="df-nav__logo" aria-label="Shafiullah Home">
            <span className="df-nav__logo-icon">S</span>
            <span className="df-nav__logo-text">Shafiullah</span>
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
              ref={toggleRef}
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
      <div
        ref={drawerRef}
        className={`df-nav__drawer ${mobileOpen ? 'df-nav__drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={mobileOpen ? undefined : ''}
      >
        <div className="df-nav__drawer-header">
          <span className="df-nav__logo-text">Shafiullah</span>
          <button type="button" onClick={close} className="df-nav__drawer-close" aria-label="Close menu">
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

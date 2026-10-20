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
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="banner">
      <div className="nav__bar container">
        <a href="#home" className="nav__wordmark" aria-label="Home">
          Shafiullah<span className="nav__dot">.</span>
        </a>

        <nav className="nav__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="nav__link">{label}</a>
          ))}
        </nav>

        <a href="mailto:shafyy.officials25@gmail.com" className="nav__cta">
          Let&rsquo;s talk
        </a>

        <button
          className="nav__toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile */}
      {mobileOpen && <div className="nav__scrim" onClick={close} aria-hidden="true" />}
      <div className={`nav__drawer ${mobileOpen ? 'nav__drawer--open' : ''}`} role="dialog" aria-modal="true">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} className="nav__drawer-link" onClick={close}>{label}</a>
        ))}
        <hr className="rule" />
        <a href="mailto:shafyy.officials25@gmail.com" className="nav__drawer-link nav__drawer-link--accent" onClick={close}>
          Let&rsquo;s talk →
        </a>
      </div>
    </header>
  );
}

export default Navbar;

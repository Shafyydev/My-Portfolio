import { useState, useRef, useEffect } from 'react';
import { IconMail, IconGitHub, IconLinkedIn, IconCheck, IconExternalLink } from './Icons.jsx';
import './Contact.css';

function Contact() {
  const [copyState, setCopyState] = useState('idle'); // 'idle' | 'copied' | 'failed'
  const email = 'shafyy.officials25@gmail.com';
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copyFallback = (text) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.cssText = 'position:fixed;left:-9999px;opacity:0';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch {
      return false;
    }
  };

  const handleCopy = async () => {
    let success;
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        success = true;
      } catch {
        success = copyFallback(email);
      }
    } else {
      success = copyFallback(email);
    }

    setCopyState(success ? 'copied' : 'failed');
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopyState('idle'), 2500);
  };

  return (
    <section id="contact" className="section df-contact" aria-label="Contact Information">
      <div className="container">
        {/* Section Badge at the top */}
        <div className="df-contact__header">
          <div className="section-badge">
            <span className="section-badge__dot" />
            <span>Get in Touch</span>
          </div>
        </div>

        {/* Contact Banner Card */}
        <div className="df-card df-contact__banner">
          <div className="df-contact__glow" aria-hidden="true" />

          <h2 className="df-contact__title">
            Let&rsquo;s build something exceptional together.
          </h2>

          <p className="df-contact__desc">
            Currently seeking a <strong>Software Development Internship</strong> for 2026/2027.
            If you have an opening, feedback on my projects, or want to discuss full-stack engineering,
            reach out directly through any of the channels below.
          </p>

          {/* Email Box */}
          <div className="df-contact__email-box">
            <div className="df-contact__email-info">
              <span className="df-contact__email-label">Direct Communication</span>
              <a href={`mailto:${email}`} className="df-contact__email-link">
                {email}
              </a>
            </div>

            <div className="df-contact__email-actions">
              <a href={`mailto:${email}`} className="btn-pill-white">
                <IconMail size={16} />
                <span>Compose Email &rarr;</span>
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="btn-pill-dark df-contact__copy-btn"
              >
                {copyState === 'copied' ? (
                  <>
                    <IconCheck size={16} />
                    <span>Copied!</span>
                  </>
                ) : copyState === 'failed' ? (
                  <span>Copy failed — select manually</span>
                ) : (
                  <span>Copy Address</span>
                )}
              </button>
              <span role="status" aria-live="polite" className="sr-only">
                {copyState === 'copied' ? 'Email address copied to clipboard' : ''}
                {copyState === 'failed' ? 'Failed to copy email address' : ''}
              </span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="df-contact__profiles">
            <a
              href="https://github.com/Shafyydev"
              target="_blank"
              rel="noopener noreferrer"
              className="df-contact__profile-card"
            >
              <div className="df-contact__profile-icon">
                <IconGitHub size={22} />
              </div>
              <div className="df-contact__profile-details">
                <strong>GitHub Profile</strong>
                <span>@Shafyydev &middot; Inspect repositories</span>
              </div>
              <IconExternalLink size={14} className="df-contact__arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/Shafyy"
              target="_blank"
              rel="noopener noreferrer"
              className="df-contact__profile-card"
            >
              <div className="df-contact__profile-icon">
                <IconLinkedIn size={22} />
              </div>
              <div className="df-contact__profile-details">
                <strong>LinkedIn Network</strong>
                <span>@Shafyy &middot; Professional profile</span>
              </div>
              <IconExternalLink size={14} className="df-contact__arrow" />
            </a>
          </div>

          {/* Location & Status Notice */}
          <div className="df-contact__location-notice">
            <span>&bull; Based in Cuddalore, Tamil Nadu, India &middot; Open to remote, hybrid, and on-site positions</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

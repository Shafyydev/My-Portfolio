import { useState } from 'react';
import { IconMail, IconGitHub, IconLinkedIn, IconExternalLink, IconCheck } from './Icons.jsx';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'shafyy.officials25@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact section" aria-label="Contact Information">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">05 / Inquiries &amp; Outreach</span>
          <h2 className="section-title">
            Let&rsquo;s start a <em>conversation</em>.
          </h2>
          <p className="section-lead">
            I am actively interviewing for software development internship opportunities.
            Whether you have an opening, project feedback, or want to connect — I welcome your message.
          </p>
        </header>

        <div className="contact__layout">
          {/* Main Direct Email Card */}
          <div className="contact__main-card">
            <div className="contact__main-top">
              <span className="meta">Primary Communication Channel</span>
              <span className="contact__response-time meta">Direct Dispatch</span>
            </div>

            <div className="contact__email-block">
              <span className="contact__email-label meta">Email Address</span>
              <a href={`mailto:${email}`} className="contact__email-link">
                {email}
              </a>
            </div>

            <div className="contact__actions">
              <a href={`mailto:${email}`} className="btn btn-primary">
                <IconMail size={16} />
                Compose Message
              </a>
              <button
                type="button"
                className="btn btn-secondary contact__copy-btn"
                onClick={handleCopy}
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <IconCheck size={16} />
                    Copied to Clipboard
                  </>
                ) : (
                  'Copy Address'
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Column */}
          <div className="contact__profiles">
            {/* GitHub Card */}
            <a
              href="https://github.com/Shafyydev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__profile-card"
            >
              <div className="contact__profile-icon">
                <IconGitHub size={22} />
              </div>
              <div className="contact__profile-info">
                <span className="meta">Version Control</span>
                <strong className="contact__profile-title">github.com/Shafyydev</strong>
                <span className="contact__profile-desc">Explore public repositories and source code</span>
              </div>
              <span className="contact__profile-arrow" aria-hidden="true">↗</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/Shafyy"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__profile-card"
            >
              <div className="contact__profile-icon">
                <IconLinkedIn size={22} />
              </div>
              <div className="contact__profile-info">
                <span className="meta">Professional Network</span>
                <strong className="contact__profile-title">linkedin.com/in/Shafyy</strong>
                <span className="contact__profile-desc">Connect and view academic background</span>
              </div>
              <span className="contact__profile-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Location & Relocation notice */}
        <div className="contact__notice">
          <span className="meta">Location &amp; Availability:</span>
          <p className="contact__notice-text">
            Based in Cuddalore, Tamil Nadu, India. Open to remote internships as well as in-person or hybrid roles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

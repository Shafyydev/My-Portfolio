import { IconMail, IconGitHub, IconLinkedIn, IconSend } from './Icons.jsx';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section" aria-label="Contact">
      <div className="container">
        <div className="contact__header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            I&rsquo;m open to internship opportunities and happy to connect.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="contact__grid">
          <a
            href="mailto:shafyy.officials25@gmail.com"
            className="contact__card"
            aria-label="Send email"
          >
            <div className="contact__card-icon contact__card-icon--email">
              <IconMail size={24} />
            </div>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-value">shafyy.officials25@gmail.com</p>
            <span className="contact__card-action">
              Send an email
              <IconSend size={14} />
            </span>
          </a>

          <a
            href="https://github.com/Shafyydev"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
            aria-label="Visit GitHub profile"
          >
            <div className="contact__card-icon contact__card-icon--github">
              <IconGitHub size={24} />
            </div>
            <h3 className="contact__card-title">GitHub</h3>
            <p className="contact__card-value">Shafyydev</p>
            <span className="contact__card-action">
              View profile
              <IconSend size={14} />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/Shafyy"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
            aria-label="Visit LinkedIn profile"
          >
            <div className="contact__card-icon contact__card-icon--linkedin">
              <IconLinkedIn size={24} />
            </div>
            <h3 className="contact__card-title">LinkedIn</h3>
            <p className="contact__card-value">Shafyy</p>
            <span className="contact__card-action">
              Connect with me
              <IconSend size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

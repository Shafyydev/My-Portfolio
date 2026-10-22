import './Hero.css';

function Hero() {
  return (
    <section id="home" className="df-hero" aria-label="Introduction">
      {/* 3D Perspective Grid Background (DesignFast signature style) */}
      <div className="df-hero__grid-wrapper" aria-hidden="true">
        <div className="df-hero__glow-primary" />
        <div className="df-hero__glow-secondary" />
        <div className="df-hero__grid-plane" />
      </div>

      <div className="container df-hero__container">
        {/* Top Centered Header */}
        <div className="df-hero__header">
          <h1 className="df-hero__title">
            Mohammed Shafiullah&nbsp;N
            <span className="df-hero__role">
              Full Stack Developer
            </span>
          </h1>

          <p className="df-hero__desc">
            Currently pursuing a B.Sc. in Artificial Intelligence at St. Joseph&rsquo;s College of Arts and Science
            (Autonomous), Cuddalore. Passionate about building functional web applications, computer vision tools,
            and continuing to grow into a Full Stack Developer.
          </p>

          <div className="df-hero__actions">
            <a href="#projects" className="btn-pill-white">
              Explore Projects &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator pointing to the next section */}
      <a href="#focus" className="df-hero__scroll-indicator" aria-label="Scroll to explore">
        <span>Scroll to explore</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;

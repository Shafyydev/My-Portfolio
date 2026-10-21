import './FocusAreas.css';

function FocusAreas() {
  return (
    <section id="focus" className="section df-focus" aria-label="Core Engineering Highlights">
      <div className="container">
        <div className="df-focus__header">
          <div className="section-badge">
            <span className="section-badge__dot" />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Engineering Highlights</h2>
          <p className="section-subtitle">
            Hands-on focus bridging Artificial Intelligence with responsive full-stack software development.
          </p>
        </div>

        {/* 3 Bento Feature Cards */}
        <div className="df-focus__bento">
          {/* Card 1: Computer Vision & AI */}
          <div className="df-card df-focus__bento-card">
            <div className="df-focus__card-content">
              <span className="df-focus__card-tag">Computer Vision</span>
              <h3 className="df-focus__card-title">OpenCV &amp; Facial Recognition</h3>
              <p className="df-focus__card-desc">
                Building practical recognition workflows with OpenCV multi-frame face detection and SQLite persistence.
              </p>
            </div>
            {/* Visual widget */}
            <div className="df-focus__widget-graph" aria-hidden="true">
              <div className="df-focus__graph-header">
                <span className="df-focus__graph-stat">Real-Time Detection</span>
                <span className="df-focus__graph-badge">Active</span>
              </div>
              <div className="df-focus__bars">
                <span className="df-focus__bar" style={{ height: '40%' }} />
                <span className="df-focus__bar" style={{ height: '65%' }} />
                <span className="df-focus__bar" style={{ height: '52%' }} />
                <span className="df-focus__bar" style={{ height: '88%' }} />
                <span className="df-focus__bar df-focus__bar--active" style={{ height: '100%' }} />
              </div>
              <div className="df-focus__graph-footer">
                <span>Multi-frame recognition algorithm</span>
              </div>
            </div>
          </div>

          {/* Card 2: Full Stack Architecture */}
          <div className="df-card df-focus__bento-card">
            <div className="df-focus__card-content">
              <span className="df-focus__card-tag">Full Stack Development</span>
              <h3 className="df-focus__card-title">Modern Web Engineering</h3>
              <p className="df-focus__card-desc">
                Developing responsive React frontends, Node.js &amp; Python backends, and structured SQL databases.
              </p>
            </div>
            {/* Activity list widget */}
            <div className="df-focus__activity-list" aria-hidden="true">
              <div className="df-focus__activity-item">
                <div className="df-focus__activity-icon">PY</div>
                <div className="df-focus__activity-info">
                  <strong>Facial Attendance System</strong>
                  <span>Python &middot; Flask &middot; OpenCV &middot; SQLite</span>
                </div>
              </div>
              <div className="df-focus__activity-item">
                <div className="df-focus__activity-icon">RE</div>
                <div className="df-focus__activity-info">
                  <strong>Developer Portfolio</strong>
                  <span>React.js &middot; JavaScript &middot; CSS3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Internship Collaboration */}
          <div className="df-card df-focus__bento-card">
            <div className="df-focus__card-content">
              <span className="df-focus__card-tag">Career Goal</span>
              <h3 className="df-focus__card-title">Internship Ready</h3>
              <p className="df-focus__card-desc">
                Seeking a software development internship to gain real production experience and contribute immediately.
              </p>
            </div>
            {/* Chat bubble collaboration widget */}
            <div className="df-focus__chat-widget" aria-hidden="true">
              <div className="df-focus__chat-msg df-focus__chat-msg--left">
                <span className="df-focus__chat-avatar">HR</span>
                <p className="df-focus__chat-text">Seeking developer interns for software development?</p>
              </div>
              <div className="df-focus__chat-msg df-focus__chat-msg--right">
                <p className="df-focus__chat-text">Yes, excited to collaborate and build together!</p>
                <span className="df-focus__chat-avatar df-focus__chat-avatar--user">SN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;

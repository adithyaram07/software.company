const App = () => {
  return (
    <div className="app-shell">
      <header>
        <nav>
          <div className="logo brand-logo">
            <div className="brand-mark" aria-label="HM & KM logo">
              <span>HM</span>
              <span>&</span>
              <span>KM</span>
            </div>
            <div className="brand-text">
              <strong>HM & KM</strong>
              <span>Software Solutions</span>
            </div>
          </div>

          <ul className="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html" className="active">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>

          <div className="menu-toggle" id="mobile-menu">&#9776;</div>
        </nav>
      </header>

      <main>
        <section className="hero hero-about">
          <div className="hero-content fade-in">
            <div className="hero-logo-badge">
              <div className="hero-logo-circle">
                <span>HM</span>
                <span>&</span>
                <span>KM</span>
              </div>
              <div className="hero-logo-copy">
                <p>Software Solutions</p>
                <small>Private Limited</small>
              </div>
            </div>
            <h1>About Us</h1>
            <p>Your success, powered by deep ServiceNow expertise and modern workflows.</p>
          </div>
        </section>

        <section className="container about-panel">
          <div className="fade-in intro-copy">
            <h2>Who we are</h2>
            <p><strong>HM & KM SOFTWARE SOLUTIONS PRIVATE LIMITED</strong> is a dedicated ServiceNow-focused solutions provider committed to helping organizations transform their digital workflows. We are more than implementers—we are strategic partners in building more connected, efficient, and intelligent enterprises.</p>
          </div>

          <div className="split-content fade-in">
            <div className="feature-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted and transformative ServiceNow solutions provider, recognized for redefining the future of work and setting the global standard for digital excellence.</p>
              <p>We envision a world where technology seamlessly connects people, processes, and data to create frictionless, intelligent enterprises.</p>
            </div>

            <div className="feature-card">
              <h3>Our Mission</h3>
              <p>Our mission is to accelerate client success by delivering unparalleled ServiceNow solutions that boost efficiency, enhance experience, and fuel strategic growth.</p>
              <ul className="service-list">
                <li><strong>Expert guidance</strong> for tailored ServiceNow strategy.</li>
                <li><strong>Operational excellence</strong> through agile delivery and quality focus.</li>
                <li><strong>Continuous innovation</strong> with AI, automation, and platform expansion.</li>
                <li><strong>Trusted partnerships</strong> built on collaboration and clear communication.</li>
                <li><strong>Empowered clients</strong> enabled to sustain success long-term.</li>
              </ul>
            </div>
          </div>

          <div className="fade-in extra-section">
            <h2>What we deliver</h2>
            <p>From initial discovery through deployment and beyond, HM & KM delivers modern ServiceNow experiences that reduce manual work, improve service delivery, and help teams move faster with confidence.</p>
            <div className="highlight-grid">
              <div className="highlight-card">
                <h4>Outcome-led solutions</h4>
                <p>We build with measurable value in mind, focusing on automation, AI, and workflow intelligence that delivers faster business results.</p>
              </div>
              <div className="highlight-card">
                <h4>Secure, scalable delivery</h4>
                <p>Our ServiceNow solutions are designed to scale safely, support hybrid teams, and keep operations stable as your business grows.</p>
              </div>
              <div className="highlight-card">
                <h4>Human-centered support</h4>
                <p>Every engagement blends technical excellence with a customer-first mindset, ensuring people adopt solutions quickly and sustainably.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            HM & KM <span>Software Solutions</span>
            <small>PRIVATE LIMITED</small>
          </div>

          <div className="footer-details">
            <p>1-69, K Raju Palli, Kuppam Post, Chakrayapet Mandal, Kapada District, Andhra Pradesh, India 516259</p>
            <p>Phone: +91-9619694410</p>
            <p>Email: <a href="mailto:harish.murikinati@gmail.com">harish.murikinati@gmail.com</a></p>
          </div>
        </div>
        <p>&copy; 2026 HM & KM Software Solutions Private Limited. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

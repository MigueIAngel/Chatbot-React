import type React from "react"
import ChatbotIcon from "./ChatbotIcon"

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="logo-container">
          <ChatbotIcon />
          <h1>Wizybot</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Intelligent Assistance for Your Business</h2>
          <p>Wizybot is a virtual assistant that helps your customers find what they need quickly and efficiently.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="material-symbols-rounded feature-icon">chat</span>
            <h3>Natural Conversations</h3>
            <p>Interact with your customers in a fluid and natural way.</p>
          </div>
          <div className="feature-card">
            <span className="material-symbols-rounded feature-icon">shopping_cart</span>
            <h3>Product Recommendations</h3>
            <p>Suggest relevant products based on customer needs.</p>
          </div>
          <div className="feature-card">
            <span className="material-symbols-rounded feature-icon">support_agent</span>
            <h3>24/7 Support</h3>
            <p>Available at all times to help your customers.</p>
          </div>
          <div className="feature-card">
            <span className="material-symbols-rounded feature-icon">analytics</span>
            <h3>Detailed Analytics</h3>
            <p>Gain valuable insights from customer interactions.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Wizybot</h2>
          <p>
            Wizybot was created to transform the way businesses interact with their customers online. Our mission is to
            provide an exceptional user experience through artificial intelligence.
          </p>
          <p>
            With years of experience in developing AI solutions, our team has designed a virtual assistant that truly
            understands your customers' needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Interested in implementing Wizybot on your website? Let's talk!</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows={4} required></textarea>
          </div>
          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <ChatbotIcon />
            <h3>Wizybot</h3>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#privacy">Privacy</a>
                </li>
                <li>
                  <a href="#terms">Terms</a>
                </li>
                <li>
                  <a href="#cookies">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Wizybot by Miguel Altamar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

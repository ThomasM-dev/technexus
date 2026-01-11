import { Image } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <Image className="footer-logo-icon" src="/logo_sitio.png"/>
            <span className="footer-logo-text">TechNexus</span>
          </div>

          <p className="footer-description">
            Leading the future of technology by providing premium hardware and digital
            essentials to innovators and enthusiasts worldwide.
          </p>

          <div className="footer-social">
            <button className="social-btn">⚪</button>
            <button className="social-btn">🔗</button>
            <button className="social-btn">👤</button>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">SHOP</h3>
          <ul className="footer-list">
            <li><a href="#">Laptops & PC</a></li>
            <li><a href="#">Audio & Sound</a></li>
            <li><a href="#">Gaming Gear</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">SUPPORT</h3>
          <ul className="footer-list">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">JOIN THE NEWSLETTER</h3>
          <p className="footer-news-desc">Get updates on product launches and exclusive deals directly in your inbox.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Email Address" className="newsletter-input" />
            <button className="newsletter-btn">➤</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 TechNexus Digital Store. All rights reserved.</span>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}


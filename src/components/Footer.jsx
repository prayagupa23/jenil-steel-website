import "./Footer.css";
import logo from '../assets/logo/logo2.png';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-beam"></div>

      <div className="footer-watermark">
        TRUST.
      </div>

      <div className="footer-container">

        <div className="footer-brand">
           <img
                src={logo}
                alt="Jenil Steel"
                className="footer-logo"
            />

          <p>
            Trust. Reliability. Commitment.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Products</h3>

          <a href="/">Hot Rolled Sheets</a>
          <a href="/">CR Coils</a>
          <a href="/">GP Sheets</a>
          <a href="/">Steel Processing</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>+91 98765 43210</p>
          <p>info@jenilsteel.com</p>
          <p>Plot No. 45, GIDC, Ahmedabad</p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Jenil Steel Pvt. Ltd. All rights reserved.
        </span>
      </div>

    </footer>
  );
}

export default Footer;
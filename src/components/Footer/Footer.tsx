import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-shape footer-shape-1"></div>
      <div className="footer-shape footer-shape-2"></div>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo">
              <img
                src="https://res.cloudinary.com/dfueurbsh/image/upload/v1741172395/main_vpfkjn.png"
                alt="Talvox Logo"
                className="logo"
              />
            </div>
            <p className="footer-description">
              Empowering businesses through innovative HR and IT solutions,
              fostering growth, efficiency, and a culture of excellence.
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/people/Talvox/61571974627718/"
                className="social-icon"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Talvoxpvtltd"
                className="social-icon"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/talvoxpvtltd/"
                className="social-icon"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://in.linkedin.com/company/talvox-pvt-ltd"
                className="social-icon"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="https://talvox.com/">Home</a>
              </li>
              <li>
                <a href="https://talvox.com/about">About Us</a>
              </li>
              <li>
                <a href="https://talvox.com/services">Services</a>
              </li>
              <li>
                <a href="/work">Our Work</a>
              </li>
              <li>
                <a href="https://talvox.com/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Software Development</a>
              </li>
              <li>
                <a href="#">IT Consulting</a>
              </li>
              <li>
                <a href="#">Talent Acquisition</a>
              </li>
              <li>
                <a href="#">HR Operations</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} />
                <span>
                  8-3-191/57/1 PLOT NO:54/A,<br></br>
                  Vengal Rao Nagar, Hyderabad, <br></br>
                  Telangana 500038
                </span>
              </li>
              <li>
                <Phone size={18} />
                <span>040-31733088</span>
              </li>
              <li>
                <Mail size={18} />
                <span>hr@talvox.com</span>
              </li>
            </ul>
            {/* <div className="newsletter">
              <h4>Subscribe to our newsletter</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div> */}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} TAlVOX. All Rights Reserved.
            </p>
          </div>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
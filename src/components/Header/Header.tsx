import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img
              src="https://res.cloudinary.com/dfueurbsh/image/upload/v1741172395/main_vpfkjn.png"
              alt="Talvox Logo"
              className="logo-img"
            />
          </a>
        </div>

        {/* <div className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div> */}

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            {/* <li><a href="/" className="nav-link">Home</a></li>
            <li className="dropdown">
              <a href="/about" className="nav-link">
                About Us <ChevronDown size={16} />
              </a>
              <div className="dropdown-content">
                <a href="/about/team">Our Team</a>
                <a href="/about/mission">Our Mission</a>
                <a href="/about/vision">Our Vision</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="/services" className="nav-link">
                Services <ChevronDown size={16} />
              </a>
              <div className="dropdown-content">
                <a href="/services/web-development">Web Development</a>
                <a href="/services/app-development">App Development</a>
                <a href="/services/ui-ux-design">UI/UX Design</a>
                
              </div>
            </li> */}
            <li>
              <a href="/work" className="nav-link active">
                Our Work
              </a>
            </li>
            <li>
              <a href="/blog" className="nav-link"></a>
            </li>
            <li>
              <a href="/contact" className="nav-link"></a>
            </li>
            <li>
              <a href="/blog" className="nav-link"></a>
            </li>
            <li>
              <a href="/contact" className="nav-link"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
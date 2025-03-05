import  { useEffect, useState, useRef } from 'react';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Cursor trail effect
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check for elements in view
    revealOnScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
  
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPosition.x}px`;
      cursorRef.current.style.top = `${cursorPosition.y}px`;
      cursorRef.current.style.opacity = isVisible ? '1' : '0';
    }
  }, [cursorPosition, isVisible]);

  return (
    <div className="app">
      <div 
        ref={cursorRef} 
        className="cursor-trail" 
        style={{ 
          left: cursorPosition.x, 
          top: cursorPosition.y,
          opacity: isVisible ? 1 : 0
        }}
      ></div>
      
      <Header />
      
      <main>
        <div className="hero-section">
          <div className="hero-content">
            <h1>Empowering Your Business with Tech, Talent, and Creativity</h1>
            <p>Your Partner in Innovation, Talent, and Growth</p>
            <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1-dezl5LUgD-sYtt9WVkaCocp6qu-ApJG/view" 
                 className="primary-btn">
                   Download Company Profile
            </a>
                
                  <a href="https://talvox.com/" className="secondary-btn">
                    Get In Touch
                 </a>
             </div>
            
          </div>
          
          <div className="scroll-indicator">
            <p>SCROLL DOWN</p>
            <div className="scroll-arrow"></div>
          </div>
        </div>
        
        <div className="reveal">
          <Work />
        </div>
        
        <div className="reveal">
          <AboutUs />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
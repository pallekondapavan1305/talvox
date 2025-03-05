import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  useEffect(() => {
    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
      stats.forEach(stat => {
        const target = parseInt(stat.textContent || '0', 10);
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += step;
            if (current > target) current = target;
            stat.textContent = Math.floor(current).toString();
            requestAnimationFrame(updateCounter);
          }
        };
        
        updateCounter();
      });
    };
    
    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('stats-container')) {
            animateStats();
          }
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // Observe elements
    document.querySelectorAll('.stats-container, .team-member').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Us</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Team working together" />
          </div>
          
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              At Talvox, we are committed to empowering businesses with innovative 
              solutions and exceptional services across multiple domains. 
              As a dynamic and forward-thinking company, we specialize in 
              delivering top-notch services to address the evolving needs 
              of our clients.
            </p>
              
            
            <h3>Our Mission</h3>
            <p>
             To deliver cutting-edge technology, connect top talent, 
             streamline HR operations, and empower brands through 
             impactful digital marketing, fostering growth and 
             excellence for our clients.
            </p>
            
            
            <h3>Our Vision</h3>
            <p>
             To be a trusted global partner for innovative software solutions,
             IT consulting, talent acquisition, HR operations, 
             and digital marketing, driving sustainable 
             growth and success for businesses.
            </p>
              
            
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">01</span>
                <span className="stat-text">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">35</span>
                <span className="stat-text">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15</span>
                <span className="stat-text">Team Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">29</span>
                <span className="stat-text">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default AboutUs;
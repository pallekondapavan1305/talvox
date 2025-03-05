import React, { useState, useEffect, useRef } from 'react';
import './Work.css';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link:string;
}

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulating data fetch
    const projectsData: Project[] = [
      {
        id: 1,
        title: "Kuvera-One app for all investing needs.",
        category: "Mutual fund and investement platform",
        image: "https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2020/06/19071156/What-I-learnt-during-my-internship-at-Kuvera-By-Surya-Jain-from-Great-Lakes-Institute-of-Management-Gurgaon.png?d=700x400",
        description: "Kuvera is an Indian online wealth management platform offering commission-free investments in mutual funds, stocks, and more.",
        link: "https://kuvera.in/"
      },
      {
        id: 2,
        title: "ZFunds: Simplifying Investments",
        category: "Mutual fund and investement platform",
        image: "https://media.licdn.com/dms/image/v2/C511BAQFw_WtzS6VWPQ/company-background_10000/company-background_10000/0/1584480909616/zfunds_cover?e=2147483647&v=beta&t=pqiksPZiEjVS-tWkzGoD0flOwEv3aPXkRNQFIRyHk_M",
        description: "ZFunds simplifies mutual fund investments by connecting investors with certified financial advisors, offering personalized guidance and support. ",
        link: "https://zfunds.in/"
      },
      {
        id: 3,
        title: "myCAMS: Unified Investments",
        category: "Mutual fund and investement platform",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4yWxO6RIGMPnV8sfPutBTXhAx9GFZLTbNw&s",
        description: "myCAMS consolidates mutual fund investments, offering portfolio management and online transactions.",
        link: "https://mycams.camsonline.com/"
      },
      {
        id: 4,
        title: "KFin Technologies",
        category: "Mutual fund and investement platform",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY2HOO1yomnIHlyMHo_O42JTSJkUGD81M2A&s",
        description: "KFin Technologies provides SaaS-based financial services, including transaction management, compliance solutions, and data analytics.",
        link: "https://kfintech.com/"
      },
      {
        id: 5,
        title: "Forter's-The Identity Intelligence Experts",
        category: "Ecommerce",
        image: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_830ed55a2e248efe50ac16f419989ed1/forter.png",
        description: "Forter provides real-time, automated fraud prevention solutions for online merchants.",
        link: "https://www.forter.com/"
      },
      {
        id: 6,
        title: "Loopi: Sustainable Second-Hand Fashion",
        category: "Ecommerce",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0GlJ4hq5HWazOefd4eFP03gWf6iFLFP-wA&s",
        description: "Loopi is a UK-based platform streamlining second-hand clothing sales. ",
        link: "https://loopi.com/"
      },
      
      {
        id: 7,
        title: "Seafood Marketplace.",
        category: "Ecommerce",
        image: "https://cdn.prod.website-files.com/6410c4927a4ae326761f2b26/646261c36caabb1a45137cd8_Captain%20fresh.webp",
        description: "Captain Fresh is a tech-driven B2B platform streamlining seafood and meat supply chains.",
        link: "https://www.captainfresh.in/"
      },
      {
        id: 8,
        title: "Mokobara: Travel Redefined",
        category: "Ecommerce",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY8pJ_R4WrMUVeoUACDaUCahb6do_z78pVg&s",
        description: "Mokobara: Premium luggage brand enhancing travel with thoughtful design. ",
        link: "https://mokobara.com/"
      },

      {
        id: 9,
        title: "Chime: Banking Simplified",
        category: "mobile banking app",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07yIh48fsj7ZOIrqdw98Fp2G9Bt-dBnR-zg&s",
        description: "Chime: Fee-free online banking with early pay, overdraft protection.",
        link: "https://www.chime.com/"
      },
      {
        id: 10,
        title: "Varo: Digital Banking",
        category: "mobile banking app",
        image: "data:image/png;base64,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",
        description: "Varo Bank is a digital bank offering fee-free checking accounts, high-yield savings, cash advances, and credit-building tools.",
        link: "https://www.varomoney.com/"
      },
      {
        id: 11,
        title: "Ally: Digital Finance",
        category: "mobile banking app",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsIlNJ0a1R--th3LzO4P81QT01W_HJyaUog&s",
        description: "Ally Financial is a leading digital financial services company offering online banking, auto financing, investing, and mortgage services.",
        link: "https://www.ally.com/"
      },
      {
        id: 12,
        title: "Discover: Digital Banking",
        category: "mobile banking app",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST44QtYctaEVlyrxnoAKUmJFYEsviWaZ4n5Q&s",
        description: "Discover: Digital banking, credit cards, loans, and payment services provider.",
        link: "https://www.discover.com/"
      },
      {
        id: 13,
        title: "Fibe: Instant Loans",
        category: "mobile banking app",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2EAcJVTVHpUw_i_WI93y8aMyuSzWDcZRzw&s",
        description: "Fibe: India's largest lending platform offering instant personal loans.",
        link: "https://www.fibe.in/"
      },




    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    // Add mouse move effect to project cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.project-card');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (
          x > 0 && 
          x < rect.width && 
          y > 0 && 
          y < rect.height
        ) {
          const xRotation = ((y - rect.height / 2) / 10) * -1;
          const yRotation = (x - rect.width / 2) / 10;
          
          card.style.transform = `
            perspective(1000px)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)
            scale3d(1.05, 1.05, 1.05)
          `;
        } else {
          card.style.transform = '';
        }
      });
    };
    
    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        card.style.transform = '';
      });
    };
    
    if (projectsRef.current) {
      projectsRef.current.addEventListener('mousemove', handleMouseMove);
      projectsRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (projectsRef.current) {
        projectsRef.current.removeEventListener('mousemove', handleMouseMove);
        projectsRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
    }
  }, [activeFilter, projects]);

  const handleFilterClick = (filter: string) => {
    setIsLoaded(false);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsLoaded(true);
    }, 300);
  };

  return (
    <section className="work-section">
      <div className="work-container">
        <div className="work-header">
          <h2 className="section-title">Our Work</h2>
          <div className="title-underline"></div>
          <p className="work-subtitle">Explore our portfolio of projects across various industries and technologies.</p>
        </div>
        
        <div className="filter-container">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Mutual fund and investement platform' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Mutual fund and investement platform')}
          >
            Mutual fund and investement platform
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile banking app' ? 'active' : ''}`}
            onClick={() => handleFilterClick('mobile banking app')}
          >
            mobile banking app
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Ecommerce' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Ecommerce')}
          >
            Ecommerce
          </button>
          {/* <button 
            className={`filter-btn ${activeFilter === 'branding' ? 'active' : ''}`}
            onClick={() => handleFilterClick('branding')}
          >
            Branding
          </button> */}
        </div>
        
        <div 
          ref={projectsRef}
          className={`projects-grid ${isLoaded ? 'loaded' : ''}`}
        >
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                   View Project
                  </a>

                  
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-category">{project.category.replace('-', ' ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
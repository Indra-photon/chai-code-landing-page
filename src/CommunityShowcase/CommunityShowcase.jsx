import React, { useState, useEffect, useRef } from 'react';
import Container from '../components/layout/Container';
import './CommunityShowcase.css';
import pic1 from '../assets/demoday.webp';
import pic2 from '../assets/booklove.webp';
import pic3 from '../assets/bounties.webp';
import pic4 from '../assets/groupprojects.webp';
import pic5 from '../assets/hostel.webp';

// Placeholder for community images - replace with your actual images
const communityImages = [
  {
    id: 1,
    src: pic5,
    alt: 'Coding workshop session',
    caption: 'Learning together in our virtual coding hostel',
    category: 'workshop'
  },
  {
    id: 2,
    src: pic1,
    alt: 'Student presentation',
    caption: 'Students sharing their projects during peer review sessions',
    category: 'presentation'
  },
  {
    id: 3,
    src: pic4,
    alt: 'Team collaboration',
    caption: 'Building projects together as a team',
    category: 'collaboration'
  },
  {
    id: 4,
    src: pic2,
    alt: 'Mentor feedback session',
    caption: 'Personalized feedback from industry experts',
    category: 'mentorship'
  },
  // {
  //   id: 5,
  //   src: pic1,
  //   alt: 'Hackathon winners',
  //   caption: 'Our students winning hackathon challenges',
  //   category: 'achievement'
  // }
];

const CommunityShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const autoplayRef = useRef(null);
  
  const goToSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match this with CSS transition duration
  };
  
  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % communityImages.length;
    goToSlide(newIndex);
  };
  
  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + communityImages.length) % communityImages.length;
    goToSlide(newIndex);
  };
  
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      prevSlide();
    }
  };
  
  // Autoplay slides
  useEffect(() => {
    autoplayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [activeIndex, isTransitioning]);
  
  return (
    <section className="community-showcase py-8 relative">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          See Our <span className="text-cyan-300">Community</span> in Action
        </h2>
        
        <div className="showcase-wrapper relative">
          {/* Main gallery */}
          <div 
            className="image-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="main-slide-container">
              {communityImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`gallery-slide ${index === activeIndex ? 'active' : ''} ${
                    isTransitioning && index === activeIndex ? 'transitioning' : ''
                  }`}
                  style={{
                    zIndex: index === activeIndex ? 10 : 1,
                    opacity: index === activeIndex ? 1 : 0
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="slide-image"
                  />
                  <div className="caption-overlay">
                    <p>{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Thumbnail navigation */}
            <div className="thumbnail-navigation">
              {communityImages.map((image, index) => (
                <div 
                  key={`thumb-${image.id}`}
                  className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <img src={image.src} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="nav-arrow prev-arrow" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button 
            className="nav-arrow next-arrow" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="slide-indicators">
          {communityImages.map((_, index) => (
            <button
              key={`indicator-${index}`}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CommunityShowcase;
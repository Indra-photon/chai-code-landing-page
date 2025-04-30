import React, { useState, useEffect, useRef } from 'react';
import Container from '../components/layout/Container';
import './CommunityShowcase.css';
import pic1 from '../assets/demoday.webp';
import pic4 from '../assets/groupprojects.webp';
import pic6 from '../assets/latework.webp';
import pic2 from '../assets/tshirtlove.webp';

// Community images
const communityImages = [
  {
    id: 1,
    src: pic6,
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
];

const CommunityShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const autoplayRef = useRef(null);
  const slideContainerRef = useRef(null);
  
  const goToSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
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
  
  // Add a parallax effect on mouse move
  const handleMouseMove = (e) => {
    if (!slideContainerRef.current) return;
    
    const { left, top, width, height } = slideContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    // Apply subtle transform to active slide
    const activeSlide = slideContainerRef.current.querySelector('.gallery-slide.active');
    if (activeSlide) {
      activeSlide.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) scale(1.05)`;
    }
  };
  
  // Reset transform when mouse leaves
  const handleMouseLeave = () => {
    if (!slideContainerRef.current) return;
    
    const activeSlide = slideContainerRef.current.querySelector('.gallery-slide.active');
    if (activeSlide) {
      activeSlide.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
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
    <section className="community-showcase py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <Container>
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Community <span className="text-cyan-300">Showcase</span>
          </h2>
          
          <div className="relative h-1 w-1/3 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See our vibrant community in action and the experiences they share
          </p>
        </div>
        
        <div className="showcase-wrapper relative max-w-4xl mx-auto">
          {/* Main gallery */}
          <div 
            ref={slideContainerRef}
            className="image-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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
                    opacity: index === activeIndex ? 1 : 0,
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                    filter: 'none' /* Ensure no filters affect the opacity */
                  }}
                >
                  <div className="image-wrapper">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="slide-image"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-cyan-500/80 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {image.category}
                    </div>
                  </div>
                  
                  <div className="caption-overlay">
                    <p className="caption-text">{image.caption}</p>
                  </div>
                </div>
              ))}
              
              {/* Simplified frame overlay with less opacity impact */}
              <div className="absolute inset-0 pointer-events-none border border-cyan-500/30 rounded-xl overflow-hidden z-20">
                <div className="absolute inset-0 border-[1px] border-cyan-500/20 rounded-xl"></div>
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
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
                  {index === activeIndex && (
                    <div className="absolute inset-0 border-2 border-cyan-500 rounded-md"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="nav-arrow prev-arrow group" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-cyan-500/30 transition-all duration-300 group-hover:bg-cyan-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </button>
          
          <button 
            className="nav-arrow next-arrow group" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-cyan-500/30 transition-all duration-300 group-hover:bg-cyan-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
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
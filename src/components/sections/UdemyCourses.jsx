
import React, { useState, useEffect } from 'react';
import Container from '../layout/Container';
import Card from '../common/Card';
import Button from '../common/Button';
import YouTubeFacade from '../layout/YouTubeFacade';

const UdemyCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Course data
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and build real-world projects with modern deployment techniques',
      rating: 4.8,
      price: 499,
      originalPrice: 3499,
      discount: 86,
      videoId: 'KZ31wDjYleI'
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning Mastery',
      description: 'Learn Python, data analysis, visualization, machine learning algorithms and advanced AI techniques for real-world applications',
      rating: 4.7,
      price: 599,
      originalPrice: 3899,
      discount: 85,
      videoId: 'zg06ec5arCs'
    },
    {
      id: 3,
      title: 'DevOps Engineering & Cloud Certification',
      description: 'Master Docker, Kubernetes, CI/CD pipelines, AWS, Azure, and infrastructure as code to become a certified cloud engineer',
      rating: 4.9,
      price: 799,
      originalPrice: 4299,
      discount: 81,
      videoId: 'zg06ec5arCs'
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    }, 300);
  };

  const directSelect = (index) => {
    if (isAnimating) return;
    setDirection(index > activeIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
    }, 300);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section id="udemy" className="py-16 bg-black relative overflow-hidden">
      {/* Side Text */}
      <div className="side-text">Udemy</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading mb-4">Our Courses on Udemy</h2>
          
          <div className="relative h-1 w-full sm:w-4/5 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-8 hidden sm:block">
            Join thousands of students who have transformed their careers with our comprehensive courses <span className='text-cyan-300'>our community</span>
          </h2>
        </div>

        {/* Course Card Slider */}
        <div className="flex justify-center items-center relative">  
          <div 
            className={`w-full sm:w-4/5 relative ${isAnimating ? 'pointer-events-none' : ''}`}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <Card 
              className={`flex flex-col w-full h-full absolute top-0 left-0 overflow-hidden transition-all duration-500 ${
                isAnimating 
                  ? direction === 'next' 
                    ? 'animate-slide-out-left opacity-0 -translate-x-full rotate-y-45' 
                    : 'animate-slide-out-right opacity-0 translate-x-full rotate-y-45'
                  : 'opacity-100 translate-x-0 z-10'
              }`}
            >
              <div className='aspect-video w-full mb-4 overflow-hidden'>
                <YouTubeFacade
                  videoId={courses[activeIndex].videoId}
                  title={courses[activeIndex].title}
                  lazyLoad={true}
                />
              </div>
              <div className="flex flex-col h-full p-2">
                <h3 className="text-2xl font-bold text-white mb-3">{courses[activeIndex].title}</h3>
                <p className="text-text-secondary mb-4">{courses[activeIndex].description}</p>
                
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(courses[activeIndex].rating) ? 'text-cyan-200' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xl font-bold ml-2 text-white">{courses[activeIndex].rating}</span>
                  <span className="text-text-secondary ml-2 text-sm">Top Rated</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-cyan-300">₹{courses[activeIndex].price}</span>
                  <span className="text-text-secondary ml-2 line-through">₹{courses[activeIndex].originalPrice}</span>
                  <span className="ml-2 bg-amber/20 text-cyan-500 text-xs font-bold px-2 py-1 rounded">{courses[activeIndex].discount}% off</span>
                </div>
                
                <div className="mt-auto">
                  <Button variant="secondary" className="w-full md:w-auto">
                    Check Udemy Courses
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Next/Previous Buttons (Positioned on sides) */}
          <button 
            onClick={prevSlide}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 hover:scale-110"
            disabled={isAnimating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 hover:scale-110"
            disabled={isAnimating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slider indicator dots */}
        <div className="flex justify-center space-x-3 mt-6">
          {courses.map((_, idx) => (
            <button
              key={idx}
              onClick={() => directSelect(idx)}
              className={`h-2 w-10 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'bg-cyan-500 scale-110 shadow-sm shadow-cyan-500/50' 
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </Container>

      <style jsx>{`
        @keyframes slide-out-left {
          0% { transform: translateX(0) rotateY(0); opacity: 1; }
          100% { transform: translateX(-100%) rotateY(45deg); opacity: 0; }
        }
        
        @keyframes slide-out-right {
          0% { transform: translateX(0) rotateY(0); opacity: 1; }
          100% { transform: translateX(100%) rotateY(-45deg); opacity: 0; }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-100%) rotateY(45deg); opacity: 0; }
          100% { transform: translateX(0) rotateY(0); opacity: 1; }
        }
        
        @keyframes slide-in-right {
          0% { transform: translateX(100%) rotateY(-45deg); opacity: 0; }
          100% { transform: translateX(0) rotateY(0); opacity: 1; }
        }
        
        .animate-slide-out-left {
          animation: slide-out-left 0.5s ease forwards;
        }
        
        .animate-slide-out-right {
          animation: slide-out-right 0.5s ease forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease forwards;
        }
        
        .rotate-y-45 {
          transform: rotateY(45deg);
        }
        
        .rotate-y--45 {
          transform: rotateY(-45deg);
        }
      `}</style>
    </section>
  );
};

export default UdemyCourses;
import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';

const HeroSection = () => {
    // Feature tags for the hero section
    const features = [
      { name: 'Peer learning', icon: '👥' },
      { name: 'Code reviews', icon: '🔍' },
      { name: 'Virtual hostel', icon: '🏠' },
      { name: 'Doubt sessions', icon: '💬' },
      { name: 'Bounties', icon: '🎯' }
    ];
  
    return (
      <section className="pt-16 pb-10 relative overflow-hidden">
        {/* Side Text */}
        <div className="side-text">Why us</div>
        
        {/* Background glow effect */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-amber/5 rounded-full blur-3xl -z-10"></div>
        
        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-cyan-500/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300">
          
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Consistency and Community</span>
            </h1>
            
           
            <div className="relative h-1 w-3/4 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
            </div>
            
           
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              An unmatched <span className='text-cyan-300'>Learning Experience</span> for coding courses.
            </h2>
            
            {/* Description */}
            <p className="text-text-secondary text-lg mb-8 max-w-3xl">
              Content is everywhere, but we provide a learning experience that is unmatched — <span className='font-bold'>bounties, 
              peer learning, code reviews, virtual hostel, alumni network, doubt sessions, and group projects.</span>
            </p>
            
            {/* Feature tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 relative">
              {features.map((feature) => (
                <div 
                  key={feature.name}
                  className="flex items-center rounded-full px-4 py-2 border border-white relative 
                    hover:shadow-lg group
                    before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-cyan-500/20 before:via-cyan-500/40 before:to-cyan-500/20 
                    before:rounded-lg before:opacity-0 hover:before:opacity-100
                    before:transition-opacity before:duration-300"
                >
                  <span className="mr-2">{feature.icon}</span>
                  <span className="text-white">{feature.name}</span>
                </div>
                
              ))}
              
            </div>
            
            {/* CTA Button */}
            <div className="mb-8 flex justify-center">        
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center p-[2px]">                 

              <a href='/#cohorts'>
                <Button variant="secondary" className="relative z-10">
                  Check all Live Cohorts
                </Button>
              </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  };
  
  export default HeroSection;
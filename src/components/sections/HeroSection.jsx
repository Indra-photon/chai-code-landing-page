import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { Users, FileSearch, Home, MessageCircle, Target } from 'lucide-react';
import TrustBadge from '../layout/TrustBadge';

const HeroSection = () => {
    // Feature tags for the hero section

    // const features = [
    //   { name: 'Peer learning', icon: Users },
    //   { name: 'Code reviews', icon: FileSearch },
    //   { name: 'Virtual hostel', icon: Home },
    //   { name: 'Doubt sessions', icon: MessageCircle },
    //   { name: 'Bounties', icon: Target }
    // ];

    const features = [
      { name: 'Peer learning', icon: Users, color: 'text-blue-400' },
      { name: 'Code reviews', icon: FileSearch, color: 'text-green-400' },
      { name: 'Virtual hostel', icon: Home, color: 'text-yellow-400' },
      { name: 'Doubt sessions', icon: MessageCircle, color: 'text-purple-400' },
      { name: 'Bounties', icon: Target, color: 'text-red-400' }
    ];
  
    return (
      <section className="pt-28 pb-10 relative overflow-hidden">
        
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

            <div className="w-full backdrop-blur-sm mt-0 text-center mb-5">
                <div className="flex justify-center items-center">
                    <Badge text="Trusted by 1.5M Code Learners" className="text-blue-accent px-3 text-sm py-1" />
                </div>
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
                  <feature.icon className={`mr-2 h-4 w-4 ${feature.color}`} />
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
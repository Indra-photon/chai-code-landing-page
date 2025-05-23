import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { BriefcaseIcon, UsersIcon, CodeIcon, AwardIcon } from 'lucide-react';

const AlumniNetwork = () => {
  // Features of the alumni network
  const features = [
    { 
      icon: UsersIcon, 
      text: 'Connect with peers' 
    },
    { 
      icon: CodeIcon, 
      text: 'Collaborate on projects' 
    },
    { 
      icon: AwardIcon, 
      text: 'Join hackathons' 
    },
    { 
      icon: BriefcaseIcon, 
      text: 'Access job listings' 
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-800/30 backdrop-blur-sm">
      {/* Side Text */}
      <div className="side-text">Alumni</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-cyan-500/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300">
          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className='text-cyan-300'>Alumni Network</span> and <span className='text-cyan-300'>Job Listings</span>
            </h2>
            
            
            <p className="text-text-secondary text-lg mb-6">
              The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons.
            </p>
            
            <p className="text-text-secondary text-lg mb-8">
              Our HR team also post regular job updates that you can apply directly whenever you are ready
            </p>

            <div className="relative">
            
          </div>
          </div>
          <div className="relative border mb-5 border-slate-700 rounded-xl p-8 bg-black/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                {/* Decorative circles representing student network */}
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full border border-cyan-300"
                    style={{
                      width: `${Math.random() * 40 + 20}px`,
                      height: `${Math.random() * 40 + 20}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${5 + Math.random() * 10}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <div className="flex mb-6">
                  <Badge text="EXCLUSIVE NETWORK" className="bg-cyan-500/20 text-cyan-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">Alumni Community Portal</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <feature.icon className="w-5 h-5 text-cyan-300" />
                      <span className="text-sm text-text-secondary">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs text-white overflow-hidden"
                      >
                        {/* Placeholder for student avatars */}
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-xs text-cyan-300">
                      +250
                    </div>
                  </div>
                </div>
                
                {/* Connecting line */}
                <div className="absolute left-full top-1/2 w-16 h-0.5 bg-slate-700 hidden lg:block">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300"></div>
                </div>
              </div>
              
              {/* Glow border effect */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm"></span>
          </div>

          <div className="flex flex-wrap gap-4">
              <Button variant="secondary">
                Join Alumni Network
              </Button>
              
              <Button variant="outline" className='border-2 border-cyan-200'>
                Browse Job Listings
              </Button>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default AlumniNetwork;
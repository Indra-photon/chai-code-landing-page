import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';
import Card from '../common/Card';
import { CodeIcon, ServerIcon, RocketIcon } from 'lucide-react';
import YouTubeFacade from '../layout/YouTubeFacade';

const FreeAPI = () => {
  return (
    <section id="freeapi" className="py-16 relative overflow-hidden bg-black/50">
      {/* Side Text */}
      <div className="side-text">FreeAPI</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              FreeAPI - Open Source
            </h2>
            
            <div className="relative h-1 w-full sm:w-4/5 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Unlock Your Potential with Our API Hub</h3>
            
            <p className="text-text-secondary mb-4">
              Our API Hub is central to expanding your learning experience in API handling across various fields.
            </p>
            
            <p className="text-text-secondary mb-4">
              With direct access to categories:
            </p>
            
            <ul className="text-text-secondary mb-6 list-inside space-y-2">
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>A complete collection of RESTful APIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>Authentication, Social media, and more with simple specifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>Join us in donating code and take your coding projects to the next level</span>
              </li>
            </ul>
            
            <a 
              href="https://documenter.getpostman.com/view/10808728/SzS8rjbc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <Button variant="secondary" className="px-8">
                Check FreeAPI Docs
              </Button>
            </a>
          </div>
          
          {/* Right side - Video Card */}
          <div className="flex justify-center">
            <Card className="w-full overflow-hidden">
              <div className="sm:p-2 flex flex-col">
                
                <div className="aspect-video w-full">
                  <YouTubeFacade
                    videoId="DxedlhTyR7Q"
                    title="FreeAPI Introduction"
                    lazyLoad={true}
                  />
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-x-0 bottom-0">
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm"></span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FreeAPI;
import React from 'react';
import Container from '../layout/Container';
import Badge from '../common/Badge';
import Button from '../common/Button';
import Card from '../common/Card';
import { UsersIcon } from 'lucide-react';
import pic1 from '../../assets/discord.png'

const Community = () => {
  return (
    <section id="community" className="py-16 relative overflow-hidden">
      {/* Side Text */}
      <div className="side-text">Community</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="relative">
            <Badge text="Community" className="mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join our community where creativity thrives.
            </h2>
            
            <div className="relative h-1 w-full sm:w-4/5 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
            </div>
            
            <p className="text-text-secondary text-lg mb-8">
              Connect with other developers, share your projects, get feedback, and collaborate on new ideas. Our Discord community is active and always welcoming new members.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Card className="flex items-center justify-center px-6 py-3 text-center w-full md:w-auto">
                <div className="flex items-center">
                  <UsersIcon className="w-5 h-5 mr-2 text-cyan-300" />
                  <span className="font-bold text-cyan-300">80,000</span>
                  <span className="ml-2 text-text-secondary">Active coders in Discord</span>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Right side - Discord Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md overflow-hidden">
              <div className="relative pb-4">
                {/* Discord Logo */}
                <div className="flex items-center justify-center">
                  <img src={pic1} className='rounded-xl'></img>
                </div>
                
                {/* Discord Card Content */}
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-4">Join Our Discord</h3>
                  <p className="text-text-secondary text-center mb-6">
                    Get help with your code, join challenges, and connect with other developers.
                  </p>
                  <Button variant="secondary" className="w-full justify-center">
                    Join Discord
                  </Button>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-x-0 bottom-0">
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm"></span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
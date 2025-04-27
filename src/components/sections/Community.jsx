import React from 'react';
import Container from '../layout/Container';
import Badge from '../common/Badge';
import Button from '../common/Button';
import Card from '../common/Card';
import { UsersIcon } from 'lucide-react';

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
            
            <div className="relative h-1 w-1/2 mb-6">
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
            <Card className="w-full max-w-md p-0 overflow-hidden">
              <div className="relative pb-4">
                {/* Discord Logo */}
                <div className="flex items-center justify-center p-8 bg-black/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="36" viewBox="0 0 127 96" fill="none" className="text-white">
                    <path d="M107.707 8.76907C99.5902 4.91618 90.9589 2.08725 81.9644 0.463078C81.8009 0.432584 81.6374 0.508066 81.5652 0.659034C80.6418 2.27271 79.6183 4.34099 78.8776 5.98405C69.2663 4.46549 59.7097 4.46549 50.2787 5.98405C49.538 4.31099 48.4785 2.27271 47.5492 0.659034C47.477 0.50198 47.3135 0.426496 47.15 0.463078C38.1613 2.08117 29.53 4.9101 21.4075 8.76907C21.3472 8.79348 21.2987 8.83643 21.2681 8.89092C3.11092 36.064 -1.8608 62.3947 0.574161 88.3612C0.586105 88.4702 0.647004 88.5731 0.731812 88.6381C12.1219 96.9894 23.093 101.772 33.8329 104.907C33.9963 104.955 34.1718 104.894 34.2798 104.76C36.8408 101.288 39.0941 97.6144 40.9799 93.7554C41.088 93.5501 40.986 93.3023 40.7659 93.2312C37.1517 91.7736 33.7123 89.9711 30.4091 87.8851C30.1651 87.7334 30.1471 87.3909 30.3707 87.2148C31.0872 86.6882 31.8037 86.1372 32.4842 85.5802C32.6056 85.4772 32.7751 85.4589 32.9146 85.5161C54.6984 95.2625 78.4833 95.2625 99.9967 85.5161C100.136 85.453 100.306 85.4712 100.433 85.5741C101.114 86.1311 101.83 86.6882 102.552 87.2148C102.776 87.3909 102.764 87.7334 102.52 87.8851C99.217 90.001 95.7776 91.7736 92.1574 93.2251C91.9373 93.2962 91.8413 93.5501 91.9494 93.7554C93.8651 97.6084 96.1184 101.282 98.6435 104.754C98.7456 104.894 98.927 104.955 99.0905 104.907C109.89 101.772 120.861 96.9894 132.251 88.6381C132.342 88.5731 132.397 88.4762 132.409 88.3673C135.299 58.4459 127.746 32.3497 107.714 8.89701C107.69 8.83643 107.641 8.79348 107.707 8.76907ZM44.5008 73.4129C37.9547 73.4129 32.5915 67.4455 32.5915 60.1248C32.5915 52.8041 37.8406 46.8367 44.5008 46.8367C51.2213 46.8367 56.5305 52.8651 56.4164 60.1248C56.4164 67.4455 51.1612 73.4129 44.5008 73.4129ZM88.6169 73.4129C82.0708 73.4129 76.7075 67.4455 76.7075 60.1248C76.7075 52.8041 81.9567 46.8367 88.6169 46.8367C95.3374 46.8367 100.647 52.8651 100.533 60.1248C100.533 67.4455 95.3374 73.4129 88.6169 73.4129Z" fill="white"/>
                  </svg>
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
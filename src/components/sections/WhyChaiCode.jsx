import React from 'react';
import Container from '../layout/Container';
import Card from '../common/Card';
import Button from '../common/Button';
import { BookOpenIcon, UsersIcon, StarIcon, MessageCircleIcon, TargetIcon, BriefcaseIcon } from 'lucide-react';

const FeatureBox = ({ title, description, children, className = '' }) => {
  return (
    <Card className={`flex flex-col p-6 h-full ${className}`}>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
      {children}
    </Card>
  );
};

const WhyChaiCode = () => {
  // Feature content
  const features = [
    {
      title: 'Comprehensive Curriculum',
      description: 'Master key concepts and hands-on skills with curated curriculum designed to teach what truly matters, the right way, thorough, practical, and easy to understand.',
      icon: BookOpenIcon
    },
    {
      title: 'Code and Chill',
      description: 'Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.',
      icon: StarIcon
    },
    {
      title: 'You finish it',
      description: 'Our cohorts are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community.',
      icon: UsersIcon
    },
    {
      title: 'Improve Communication',
      description: 'One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.',
      icon: MessageCircleIcon
    },
    {
      title: 'Industry Guests',
      description: 'We are connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions and feedback.',
      icon: BriefcaseIcon
    },
    {
      title: 'Bounties',
      description: 'Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! Its our way of keeping the motivation high and the learning fun.',
      icon: TargetIcon
    }
  ];

  return (
    // <section id="why-chaicode" className="py-16 bg-black relative overflow-hidden">
    //   {/* Side Text */}
    //   <div className="side-text">Why Us</div>
      
    //   {/* Background glow effect */}
    //   <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-amber/5 rounded-full blur-3xl -z-10"></div>
      
    //   <Container>
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
    //         But Why ChaiCode ?
    //       </h2>
          
    //       <div className="relative h-1 w-1/3 mx-auto mb-6">
    //         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    //         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
    //       </div>
          
    //       <p className="text-xl text-text-secondary">
    //         ChaiCode exists because we love tech and teaching
    //       </p>
    //     </div>
        
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
    //       {/* Left column - first 2 features */}
    //       <div className="flex flex-col space-y-6">
    //         <FeatureBox 
    //           title={features[0].title}
    //           description={features[0].description}
    //         >
    //           <div className="absolute top-4 right-4">
                
    //           </div>
    //         </FeatureBox>
            
    //         <FeatureBox 
    //           title={features[2].title}
    //           description={features[2].description}
    //         >
    //           <div className="absolute top-4 right-4">
                
    //           </div>
    //         </FeatureBox>
            
    //         <FeatureBox 
    //           title={features[4].title}
    //           description={features[4].description}
    //         >
    //           <div className="absolute top-4 right-4">
    //             {/* <features[4].icon className="w-5 h-5 text-cyan-300" /> */}
    //           </div>
    //         </FeatureBox>
    //       </div>
          
    //       {/* Middle column - Instructor profile */}
    //       <div className="flex flex-col">
    //         <Card className="h-full flex flex-col items-center text-center p-6">
    //           <div className="rounded-lg overflow-hidden mb-4 w-full aspect-video">
    //             <img 
    //               src="https://via.placeholder.com/400x300" 
    //               alt="Hitesh Choudhary" 
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
              
    //           <h3 className="text-2xl font-bold text-white mb-2">Hitesh Choudhary</h3>
              
    //           <p className="text-text-secondary text-sm mb-4">
    //             retired from corporate and full time YouTuber, x founder of LCO (acquired), x CTO, Sr. Director at PW, 2 YT channels (+58k & 476k), stepped into 43 countries.
    //           </p>
              
    //           <div className="mt-4">
    //             <h4 className="text-xl font-semibold text-white mb-2">Approach</h4>
    //             <p className="text-text-secondary text-sm mb-4">
    //               Project based courses with peer learning and bouties with many activities
    //             </p>
                
    //             <div className="flex justify-center space-x-3">
    //               <div className="w-8 h-8 bg-slate-700 rounded-md"></div>
    //               <div className="w-8 h-8 bg-slate-700 rounded-md"></div>
    //               <div className="w-8 h-8 bg-slate-700 rounded-md"></div>
    //             </div>
    //           </div>
    //         </Card>
    //       </div>
          
    //       {/* Right column - last 3 features */}
    //       <div className="flex flex-col space-y-6">
    //         <FeatureBox 
    //           title={features[1].title}
    //           description={features[1].description}
    //         >
    //           <div className="absolute top-4 right-4">
    //             {/* <features[1].icon className="w-5 h-5 text-cyan-300" /> */}
    //           </div>
    //         </FeatureBox>
            
    //         <FeatureBox 
    //           title={features[3].title}
    //           description={features[3].description}
    //         >
    //           <div className="absolute top-4 right-4">
    //             {/* <features[3].icon className="w-5 h-5 text-cyan-300" /> */}
    //           </div>
    //         </FeatureBox>
            
    //         <FeatureBox 
    //           title={features[5].title}
    //           description={features[5].description}
    //         >
    //           <div className="absolute top-4 right-4">
    //             {/* <features[5].icon className="w-5 h-5 text-cyan-300" /> */}
    //           </div>
    //         </FeatureBox>
    //       </div>
    //     </div>
        
    //     <div className="flex justify-center mt-8">
    //       <Button variant="secondary">Join Cohorts Live Classes</Button>
    //     </div>
    //   </Container>
    // </section>
    <section id="why-chaicode" className="py-16 bg-black relative overflow-hidden">
      {/* Side Text */}
      <div className="side-text">Why Us</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-amber/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            But Why ChaiCode ?
          </h2>
          
          <div className="relative h-1 w-1/3 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className='text-cyan-300'>ChaiCode</span> exists because we love <span className='text-cyan-300'>Tech</span> and <span className='text-cyan-300'>Teaching</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left column - first 2 features */}
          <div className="flex flex-col space-y-6">
            <FeatureBox 
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
            />
            
            <FeatureBox 
              title={features[2].title}
              description={features[2].description}
              icon={features[2].icon}
            />
            
            <FeatureBox 
              title={features[4].title}
              description={features[4].description}
              icon={features[4].icon}
            />
          </div>
          
          {/* Middle column - Instructor profile */}
          <div className="flex flex-col">
            <Card className="h-full flex flex-col items-center text-center p-6">
              <div className="rounded-lg overflow-hidden mb-4 w-full aspect-video">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Hitesh Choudhary" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Hitesh Choudhary</h3>
              
              <p className="text-text-secondary text-sm mb-4">
                retired from corporate and full time YouTuber, x founder of LCO (acquired), x CTO, Sr. Director at PW, 2 YT channels (+58k & 476k), stepped into 43 countries.
              </p>
              
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-white mb-2">Approach</h4>
                <p className="text-text-secondary text-sm mb-4">
                  Project based courses with peer learning and bouties with many activities
                </p>
                
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-md"></div>
                  <div className="w-8 h-8 bg-slate-700 rounded-md"></div>
                  <div className="w-8 h-8 bg-slate-700 rounded-md"></div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Right column - last 3 features */}
          <div className="flex flex-col space-y-6">
            <FeatureBox 
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
            />
            
            <FeatureBox 
              title={features[3].title}
              description={features[3].description}
              icon={features[3].icon}
            />
            
            <FeatureBox 
              title={features[5].title}
              description={features[5].description}
              icon={features[5].icon}
            />
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="secondary">Join Cohorts Live Classes</Button>
        </div>
      </Container>
    </section>
  );
};

export default WhyChaiCode;
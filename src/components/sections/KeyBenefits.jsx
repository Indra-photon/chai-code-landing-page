import React from 'react';
import Container from '../layout/Container';
import Card from '../common/Card';
import { CodeIcon, AwardIcon, BookOpenIcon, UsersIcon, DatabaseIcon, RefreshCwIcon } from 'lucide-react';

const BenefitCard = ({ 
  title, 
  description, 
  icon: Icon, 
  codeSnippet,
  language
}) => {
  return (
    <Card className="flex flex-col h-full relative overflow-hidden group">
      <div className="mb-4">
        {Icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-cyan-500/10 text-cyan-300 mb-4">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-text-secondary mb-4">{description}</p>
      
      {codeSnippet && (
        <div className="bg-black/60 rounded-md p-3 mb-4 overflow-hidden">
          <pre className="text-sm text-cyan-300 overflow-x-auto font-mono">{codeSnippet}</pre>
        </div>
      )}
      
      <div className="absolute inset-x-0 bottom-0">
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
    </Card>
  );
};

const KeyBenefits = () => {
  const benefits = [
    {
      title: 'Taught by Professionals',
      description: 'Our cohorts are being taught by top industry experts and educators',
      icon: BookOpenIcon,
      codeSnippet: 'class Teacher extends Professional { /* ... */ }',
      language: 'javascript'
    },
    {
      title: 'Bounties',
      description: 'Earn rewards, from Cash to MacBook. Keeps you motivated to work hard',
      icon: AwardIcon,
      codeSnippet: 'const reward = solveChallenge(difficulty)',
      language: 'javascript'
    },
    {
      title: 'Coding hostels',
      description: 'There is nothing like late night discussion with fellow learners and solving bugs',
      icon: UsersIcon,
      codeSnippet: 'while(night) { solveProblems(together) }',
      language: 'javascript'
    },
    {
      title: 'Peer Code Reviews',
      description: 'With Our internal tools like Masterji, every code assignment gets feedback to improve your code',
      icon: CodeIcon,
      codeSnippet: '// TODO: Refactor this for better performance',
      language: 'javascript'
    },
    {
      title: 'Leet Lab',
      description: 'Our in-house built LeetCode style platform that helps you to understand foundation of programming language',
      icon: DatabaseIcon,
      codeSnippet: 'function optimizeSolution(algorithm) { /* ... */ }',
      language: 'javascript'
    },
    {
      title: 'Revision classes',
      description: 'We have so many peer classes by fellow learners that you get so many chances to learn that topic',
      icon: RefreshCwIcon,
      codeSnippet: 'for(let i = 0; i < concepts.length; i++) { revise() }',
      language: 'javascript'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Side Text */}
      <div className="side-text">Benefits</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="flex flex-col items-center text-center mb-12 before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-cyan-500/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300">
          <h2 className="section-heading mb-4">
            Key Benefits of Cohorts
          </h2>
          
          <div className="relative h-1 w-full sm:w-1/2 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          <span className='text-cyan-300'>Cohorts</span> are best way to learn because you finish the course in a timely manner
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              codeSnippet={benefit.codeSnippet}
              language={benefit.language}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyBenefits;
import React from 'react';
import Container from '../layout/Container';

const TopicsCloud = () => {
  const topics = [
    { name: 'Docker', href: '#docker', row: 1 },
    { name: 'MCP Server', href: '#mcp-server', row: 1 },
    { name: 'Kubernetes', href: '#kubernetes', row: 1 },
    { name: 'Python', href: '#python', row: 1 },
    { name: 'React Native', href: '#react-native', row: 1 },
    { name: 'Django', href: '#django', row: 1 },
    { name: 'NextJS', href: '#nextjs', row: 1 },
    { name: 'NextJS', href: '#nextjs', row: 1 },
    { name: 'NextJS', href: '#nextjs', row: 1 },
    { name: 'NextJS', href: '#nextjs', row: 1 },
    { name: 'NextJS', href: '#nextjs', row: 1 }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Topics Cloud
          </h2>
          
          <div className="relative h-1 w-full sm:w-1/2 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
           You can find videos and courses on topics and much more
          </h2>
          
        </div>

        <div className="relative flex justify-center items-center w-full">

          {/* Topics Container */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 justify-center font-bold items-center">
              {topics.filter(topic => topic.row === 1).map((topic, index) => (
                <a 
                  key={index} 
                  href={topic.href}
                  className="relative border border-slate-700 rounded-lg px-6 py-3 
                    text-white transition-all duration-300 
                    hover:scale-105 hover:shadow-lg group
                    before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-cyan-500/20 before:via-cyan-500/40 before:to-cyan-500/20 
                    before:rounded-lg before:opacity-0 hover:before:opacity-100
                    before:transition-opacity before:duration-300
                    overflow-hidden"
                >
                  <span className="relative z-10">{topic.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-16"></div>
      </Container>
    </section>
  );
};

export default TopicsCloud;
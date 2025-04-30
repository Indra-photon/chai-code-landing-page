import React from 'react';
import Container from '../layout/Container';

const TopicsCloud = () => {
  const topics = [
    { name: 'Docker', href: 'https://youtu.be/rr9cI4u1_88?si=_WfwYYh0vIOwggIS', row: 1 },
    { name: 'MCP Server', href: 'https://youtu.be/dZyQNy3-HjU?si=UnCVORUe7NGGeHNb', row: 1 },
    { name: 'Kubernetes', href: 'https://youtu.be/hJw8Sy13Vp8?si=dFpmj7cUThLFaZWZ', row: 1 },
    { name: 'Python', href: 'https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=rdwShTmlgLAklZQf', row: 1 },
    { name: 'React Native', href: 'https://youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&si=v1DWQ7p8Yh7P-GgR', row: 1 },
    { name: 'Django', href: 'https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&si=SCzalJCkOKG6OjTx', row: 1 },
    { name: 'NextJS', href: 'https://youtube.com/playlist?list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE&si=OOYjVlW2aELxs7Bd', row: 1 },
    { name: 'Prisma', href: 'https://youtu.be/PWs6gFmjDyo?si=T674VvWJ-l8t8-df', row: 1 },
    { name: 'Clerk', href: 'https://youtu.be/FQCTzomz6bw?si=vlqqHUK1cj4dLLJw', row: 1 },
    { name: 'System Design', href: 'https://youtu.be/VJVfWWdtJ4c?si=tIWJuM4qG5Qb2o1x', row: 1 },
    { name: 'Streamlite', href: 'https://youtu.be/yKTEC1Y5bEQ?si=jQMq12lC6844UTMj', row: 1 },
    { name: 'FastAPi', href: 'https://youtu.be/foGklduxhM0?si=j3bO54fEjX57HJMt', row: 1 }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-2 before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-cyan-500/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300">
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
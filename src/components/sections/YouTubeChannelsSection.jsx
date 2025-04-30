import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';
import { ExternalLink } from 'lucide-react';

const YouTubeChannelsSection = () => {
  const channels = [
    {
      id: 1,
      name: 'Chai aur Code',
      handle: '@chaiaurcode',
      subscribers: '600K',
      videos: '545',
      language: 'हिंदी',
      thumbnailUrl: 'https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj',
      url: 'https://www.youtube.com/@chaiaurcode'
    },
    {
      id: 2,
      name: 'Hitesh Choudhary',
      handle: '@HiteshCodeLab',
      subscribers: '987K',
      videos: '1.6K',
      language: 'English',
      thumbnailUrl: 'https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s160-c-k-c0x00ffffff-no-rj',
      url: 'https://www.youtube.com/@HiteshCodeLab'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-black/50">
      {/* Side Text */}
      <div className="side-text">YouTube</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Explore Our Engaging <span className='text-cyan-300'>YouTube Channels</span>
          </h2>
          
          <div className="relative h-1 w-4/5 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Follow our channels for free learning resources.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-cyan-500/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300">
          {channels.map(channel => (
            <div 
              key={channel.id} 
              className="rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/40 overflow-hidden transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-cyan-800/30 flex items-center justify-center overflow-hidden">
                    <img src={channel.thumbnailUrl}></img>
                  </div>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-1">{channel.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{channel.handle}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                    <div className="bg-slate-800/60 px-3 py-1 rounded-full text-sm">
                      <span className="text-cyan-300 font-semibold">{channel.subscribers}</span>
                      <span className="text-gray-400 ml-1">subscribers</span>
                    </div>
                    
                    <div className="bg-slate-800/60 px-3 py-1 rounded-full text-sm">
                      <span className="text-cyan-300 font-semibold">{channel.videos}</span>
                      <span className="text-gray-400 ml-1">videos</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center md:justify-start items-center">
                    <span className="text-lg font-medium mr-4">{channel.language}</span>
                    <a 
                      href={channel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 rounded-full transition-all duration-200"
                    >
                      <span>Visit Channel</span>
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="secondary">
            Explore All Tutorials
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default YouTubeChannelsSection;
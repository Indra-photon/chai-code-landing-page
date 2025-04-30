import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';
import { Smartphone, Download, Bell, BookOpen } from 'lucide-react';

const MobileAppSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Side Text */}
      <div className="side-text">Mobile</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-transparent before:via-cyan-500/20 before:to-transparent
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300">
          {/* Left side - Phone mockup */}
          <div className="relative max-w-xs mx-auto lg:mx-0">
            <div className="rounded-3xl overflow-hidden border-8 border-slate-800 shadow-xl bg-black h-[500px] w-full relative">
              {/* Phone header with ChaiCode */}
              <div className="bg-cyan-500 text-white p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <code className="text-black font-bold mr-1">&lt;&gt;</code>
                  <span className="font-bold text-black">ChaiCode</span>
                </div>
                <Bell className="w-5 h-5 text-black" />
              </div>
              
              {/* App Content */}
              <div className="bg-slate-900 h-full p-4">
                {/* Trending section */}
                <div className="mb-3">
                  <p className="text-xs text-cyan-300 uppercase font-semibold mb-2">TRENDING</p>
                  <div className="bg-slate-800 rounded-lg p-3 mb-2">
                    <p className="text-white font-semibold">React Native Masterclass</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <span className="text-text-secondary text-xs">4.8</span>
                        <span className="text-text-secondary text-xs mx-1">★</span>
                        <span className="text-text-secondary text-xs">• 2.5h</span>
                      </div>
                      <span className="bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-sm">LIVE</span>
                    </div>
                  </div>
                </div>
                
                {/* Popular section */}
                <div className="mb-3">
                  <p className="text-xs text-cyan-300 uppercase font-semibold mb-2">POPULAR</p>
                  <div className="bg-slate-800 rounded-lg p-3 mb-2">
                    <p className="text-white font-semibold">Full Stack JavaScript</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <span className="text-text-secondary text-xs">4.9</span>
                        <span className="text-text-secondary text-xs mx-1">★</span>
                        <span className="text-text-secondary text-xs">• 8h</span>
                      </div>
                      <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-sm">ENROLLED</span>
                    </div>
                  </div>
                </div>
                
                {/* New section */}
                <div className="mb-3">
                  <p className="text-xs text-green-500 uppercase font-semibold mb-2">NEW</p>
                  <div className="bg-slate-800 rounded-lg p-3 mb-2">
                    <p className="text-white font-semibold">AI with JavaScript</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <span className="text-text-secondary text-xs">5.0</span>
                        <span className="text-text-secondary text-xs mx-1">★</span>
                        <span className="text-text-secondary text-xs">• 4h</span>
                      </div>
                      <span className="bg-blue-accent text-white text-xs font-bold px-2 py-1 rounded-sm">ENROLL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone shadow effect */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-md rounded-full"></div>
          </div>
          
          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learn on <span className="text-cyan-300">the go</span>
            </h2>
            
            <p className="text-text-secondary text-lg mb-8">
              Take your coding journey anywhere with the ChaiCode mobile app. 
              Access courses, join live sessions, and connect with the community 
              - all from your pocket.
            </p>
            
            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Download className="w-5 h-5" />
                </div>
                <span className="text-white">Offline course access</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="text-white">Live session notifications</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-white">Revision while commuting</span>
              </div>
            </div>
            
            {/* App store buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 bg-black border border-subtle rounded-xl px-6 py-3 hover:border-cyan-500 transition-colors duration-300">
                <Download className="w-6 h-6 text-cyan-300" />
                <div>
                  <p className="text-xs text-text-secondary">Download on the</p>
                  <p className="text-white font-semibold">App Store</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-2 bg-black border border-subtle rounded-xl px-6 py-3 hover:border-cyan-500 transition-colors duration-300">
                <Download className="w-6 h-6 text-cyan-300" />
                <div>
                  <p className="text-xs text-text-secondary">Get it on</p>
                  <p className="text-white font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MobileAppSection;
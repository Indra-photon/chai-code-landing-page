import React from 'react';
import Container from '../layout/Container';
import { Facebook, Twitter, Instagram, Youtube, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/chaicode-white.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Programs',
      links: [
        { name: 'Web Development', href: '#web-dev' },
        { name: 'Data Science', href: '#data-science' },
        { name: 'DevOps', href: '#devops' },
        { name: 'AI & Machine Learning', href: '#ai-ml' },
        { name: 'Mobile Development', href: '#mobile-dev' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Blog', href: '#blog' },
        { name: 'Free Courses', href: '#free-courses' },
        { name: 'Videos', href: '#videos' },
        { name: 'Community', href: '#community' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Contact Us', href: '#contact' }
      ]
    }
  ];
  
  const socialLinks = [
    { name: 'YouTube', icon: Youtube, href: '#youtube' },
    { name: 'Github', icon: Github, href: '#github' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <img src={logo} alt="ChaiCode Logo" className="h-10 mb-6" />
              <p className="text-text-secondary mb-6 max-w-md">
                ChaiCode is a leading coding education platform focused on 
                making learning fun and accessible through innovative cohort-based 
                programs, peer learning, and real-world projects.
              </p>
              
              {/* Contact information */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="text-text-secondary">Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="text-text-secondary">hello@chaicode.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="text-text-secondary">+91 12345 67890</span>
                </div>
              </div>
            </div>
            
            {/* Quick links */}
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4 mt-16">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a 
                        href={link.href} 
                        className="text-text-secondary hover:text-cyan-300 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Separator line with gradient */}
          <div className="relative h-px w-full my-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          
          {/* Bottom section - copyright and social links */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-secondary text-sm mb-4 md:mb-0">
              © {currentYear} ChaiCode. All rights reserved.
            </div>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center 
                      text-text-secondary hover:text-cyan-300 hover:border-cyan-500/50 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
      
      {/* Very bottom bar */}
      <div className="bg-black py-4">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary">
            <div className="mb-2 md:mb-0">
              Made with ❤️ by the ChaiCode team
            </div>
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-cyan-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
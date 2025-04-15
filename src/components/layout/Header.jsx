import React, { useState, useEffect } from 'react';
import Container from './Container';
import NavLink from '../common/NavLink';
import Button from '../common/Button';
import Badge from '../common/Badge';
import logo from '../../assets/chaicode-white.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Cohorts', href: '#cohorts', id: 'cohorts' },
    { name: 'Udemy', href: '#udemy', id: 'udemy' },
    { name: 'Docs', href: '#docs', id: 'docs' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white backdrop-blur-md shadow-lg' 
          : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center" aria-label="ChaiCode home">
              <img src={logo} alt="ChaiCode Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="relative bg-slate-700 rounded-3xl">
            <nav className=" hidden md:flex space-x-4">
              {navigation.map((item) => (
                <NavLink 
                  key={item.name} 
                  href={item.href} 
                  isActive={activeLink === item.id}
                  onClick={() => setActiveLink(item.id)}
                >
                  {item.name}
                </NavLink>
                
              ))}
            </nav>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto"></span>
            <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm
            opacity-100'></span>
          </div>
          

          {/* Login Button (Desktop) */}
          <div className="hidden md:block">
            
            <div className='relative'>
              <Button variant="secondary" className=''>Login</Button>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto"></span>
              <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm
            opacity-100'></span>
            </div>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto"></span>


          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-amber hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 pb-4 bg-black/80 backdrop-blur-md rounded-lg mt-2" id="mobile-menu">
            <div className="flex flex-col space-y-2 px-2">
              {navigation.map((item) => (
                <NavLink 
                  key={item.name} 
                  href={item.href} 
                  isActive={activeLink === item.id}
                  onClick={() => {
                    setActiveLink(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2"
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="secondary" className="mt-3 w-full">Login</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
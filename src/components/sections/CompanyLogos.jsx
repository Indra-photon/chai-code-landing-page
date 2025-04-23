import React from 'react';
import Container from '../layout/Container';
import Card from '../common/Card';

const LogoCard = ({ name, logo }) => {
  return (
    <div className="flex items-center justify-center h-20 w-36 mx-3 border border-slate-700 rounded-lg bg-slate-800/40 backdrop-blur-sm p-4 hover:border-cyan-500/30 transition-colors duration-300">
      {logo ? (
        <img src={logo} alt={`${name} logo`} className="max-h-12 max-w-full" />
      ) : (
        <span className="text-white font-medium">{name}</span>
      )}
    </div>
  );
};

const CompanyLogos = () => {
    const companies = [
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
      ];
      

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="section-heading mb-4">Our Students in <span className='text-cyan-300'>Big Tech Companies</span></h2>
            <div className="relative h-1 w-1/2 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
               Our students are not only working in big tech companies but are now  <span className='text-cyan-300'>founders of funded startups and product creators</span>
            </h2>
        </div>
        </Container>
        
        <div className="relative w-full overflow-hidden">
          
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex">
              {companies.map((company, index) => (
                <LogoCard key={`company-${index}`} name={company.name} logo={company.logo} />
              ))}
            </div>
            <div className="flex">
              {companies.map((company, index) => (
                <LogoCard key={`company-duplicate-${index}`} name={company.name} logo={company.logo} />
              ))}
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default CompanyLogos;
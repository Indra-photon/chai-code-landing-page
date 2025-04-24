import React from 'react';
import Container from '../layout/Container';
import Card from '../common/Card';
import Button from '../common/Button';
import YouTube from 'react-youtube';

const UdemyCourses = () => {
  // Course data
  const courses = [
    {
      id: 1,
      title: 'Complete web development course',
      description: 'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc',
      rating: 4.7,
      price: 399,
      originalPrice: 3099,
      discount: 87,
      videoId: 'zg06ec5arCs'
    }
  ];

  return (
    <section id="udemy" className="py-16 bg-black relative overflow-hidden">
      {/* Side Text */}
      <div className="side-text">Udemy</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading mb-4">Our Courses on Udemy</h2>
          
          <div className="relative h-1 w-1/3 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-8 hidden sm:block">
            Join thousands of students who have transformed their careers with our comprehensive courses <span className='text-cyan-300'>our community</span>
          </h2>
        </div>

        <div className="flex justify-center items-center">  
          <Card className="flex flex-col w-full h-full relative overflow-hidden">
            <div className='aspect-video w-full mb-4 overflow-hidden'>
                <YouTube
                    videoId={courses[0].videoId}
                    className="w-full h-full"
                    opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                        modestbranding: 1,
                        rel: 0
                    }
                    }}
                />
            </div>
            <div className="flex flex-col h-full p-2">
              <h3 className="text-2xl font-bold text-white mb-3">{courses[0].title}</h3>
              <p className="text-text-secondary mb-4">{courses[0].description}</p>
              
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(courses[0].rating) ? 'text-amber' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl font-bold ml-2 text-white">{courses[0].rating}</span>
                <span className="text-text-secondary ml-2 text-sm">Top Rated</span>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-amber">₹{courses[0].price}</span>
                <span className="text-text-secondary ml-2 line-through">₹{courses[0].originalPrice}</span>
                <span className="ml-2 bg-amber/20 text-amber text-xs font-bold px-2 py-1 rounded">{courses[0].discount}% off</span>
              </div>
              
              <div className="mt-auto">
                <Button variant="secondary" className="w-full md:w-auto">
                  Check Udemy Courses
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default UdemyCourses;
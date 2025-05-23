import React from 'react';
import Container from '../layout/Container';
import Button from '../common/Button';
import Card from '../common/Card';
import TwitterFacade from '../layout/TwitterFacade';

const TweetCard = ({ tweetId }) => {
  return (
    <Card>
      <div className="p-4">
        <TwitterFacade 
          tweetId={tweetId}
        />
      </div>
    </Card>
  );
};

const TweetLove = () => {
  // Define actual tweet IDs - make sure these are strings
  const tweetIds = [
    '1907045909394788416',
    '1905574126112153860',
    '1905574126112153860',
  ];

  return (
    <section id="reviews" className="pb-10 relative overflow-hidden">
      {/* Side Text */}
      <div className="side-text">Testimonials</div>
      
      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-blue-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-12 before:absolute before:inset-0 before:bg-gradient-to-r 
              before:from-transparent before:via-cyan-500/20 before:to-transparent
              before:opacity-0 hover:before:opacity-100
              before:transition-opacity before:duration-300">
          <h2 className="section-heading mb-4">Tweet Love</h2>
          <div className="relative h-1 w-1/4 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Love that we get from <span className='text-cyan-300'>our community</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10 place-items-center">
          {tweetIds.map((tweetId, index) => (
            <TweetCard key={index} tweetId={tweetId} />
          ))}
        </div>
      
        <a href='/#cohorts'>
        <div className="flex justify-center mt-10">
          <Button variant="secondary">Join Cohorts Live Classes</Button>
        </div>
        </a>
      </Container>
    </section>
  );
};

export default TweetLove;
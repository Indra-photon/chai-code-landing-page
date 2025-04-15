import React from 'react';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';
import VideoThumb from './VideoEmbed';

const CourseCard = ({ 
  title, 
  description, 
  price,
  currency = '₹',
  videoId,
  rating,
  topRated = false,
  className = '',
  onBuyClick
}) => {
  return (
    <Card className={`flex flex-col h-full ${className}`}>
      {videoId && (
        <div className="mb-4 -mx-6 -mt-6">
          <VideoThumb 
            videoId={videoId} 
            title={title} 
            className="rounded-t-lg rounded-b-none"
          />
        </div>
      )}
      
      <div className="flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {topRated && (
            <Badge text="Top Rated" className="bg-amber/20 text-amber" />
          )}
        </div>
        
        <p className="text-text-secondary mb-4 flex-grow">{description}</p>
        
        {rating && (
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-text-secondary text-sm">{rating} Stars</span>
          </div>
        )}
        
        {price && (
          <div className="mt-auto flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              {currency}{price}
              {currency === '₹' && <span className="text-text-secondary text-sm ml-1">INR</span>}
            </div>
            <Button onClick={onBuyClick}>Buy Now</Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CourseCard;
import React, { useState } from 'react';

const GalleryImage = ({ image, isActive, isTransitioning }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div 
      className={`gallery-slide ${isActive ? 'active' : ''} ${
        isTransitioning && isActive ? 'transitioning' : ''
      }`}
      style={{
        zIndex: isActive ? 10 : 1,
        opacity: isActive ? 1 : 0
      }}
    >
      <div className={`image-loader ${isLoaded ? 'loaded' : ''}`}>
        <div className="loader-pulse"></div>
      </div>
      
      <img 
        src={image.src} 
        alt={image.alt} 
        className="slide-image"
        onLoad={() => setIsLoaded(true)}
      />
      
      <div className="caption-overlay">
        <p>{image.caption}</p>
        {image.category && (
          <span className="image-category">{image.category}</span>
        )}
      </div>
    </div>
  );
};

export default GalleryImage;
import React, { useState, useEffect, useRef } from 'react';

const YouTubeFacade = ({ 
  videoId, 
  className = "", 
  title = "YouTube video", 
  thumbnailQuality = "hqdefault",
  lazyLoad = true,
  opts = {} 
}) => {
  const [loadVideo, setLoadVideo] = useState(!lazyLoad);
  const containerRef = useRef(null);

  const defaultOpts = {
    width: '100%',
    height: '100%',
  };

  const playerOpts = { ...defaultOpts, ...opts };
  
  // Thumbnail URL based on video ID and quality
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  useEffect(() => {
    if (!lazyLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadVideo) {
          
          setTimeout(() => setLoadVideo(true), 100);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [lazyLoad, loadVideo, videoId]);

  // Function to handle click on the thumbnail 
  const handleThumbnailClick = () => {
    setLoadVideo(true);
  };

  return (
    <div 
      ref={containerRef}
      className={`youtube-facade ${className}`}
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
      }}
    >
      {!loadVideo ? (
        <div 
          className="youtube-thumbnail-container"
          onClick={handleThumbnailClick}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000'
          }}
        >
          {/* Thumbnail image */}
          <img 
            src={thumbnailUrl} 
            alt={`YouTube video thumbnail for ${title}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          
          {/* Play button overlay */}
          <div
            className="play-button"
            style={{
              position: 'absolute',
              width: '68px',
              height: '48px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'background-color 0.3s',
            }}
          >
            {/* YouTube play button triangle */}
            <div 
              style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '10px 0 10px 20px',
                borderColor: 'transparent transparent transparent #fff',
                marginLeft: '5px'
              }}
            />
          </div>
          
          {/* Optional loading state */}
        </div>
      ) : (
        // Actual YouTube iframe - loaded after interaction or when in viewport
        <iframe
          width={playerOpts.width}
          height={playerOpts.height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeFacade;
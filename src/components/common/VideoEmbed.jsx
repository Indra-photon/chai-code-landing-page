import React from 'react';

const VideoEmbed = ({ 
  videoId, 
  title, 
  className = '', 
  aspectRatio = '16/9',
  onClick 
}) => {
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : '/api/placeholder/640/360';

  return (
    <div 
      className={`relative w-full rounded-lg overflow-hidden cursor-pointer ${className}`}
      style={{ aspectRatio }}
      onClick={onClick}
      aria-label={`Play video: ${title}`}
    >
      <img 
        src={thumbnailUrl} 
        alt={title || 'Video thumbnail'} 
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-cyan-500/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          {/* Triangle play icon */}
          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity duration-300">
        {/* Glowing border effect */}
        <div className="absolute inset-x-0 bottom-0">
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[3px] w-3/4 mx-auto blur-sm"></span>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;